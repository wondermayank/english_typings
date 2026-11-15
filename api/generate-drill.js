// Cloudflare Pages Function
// Route: POST /api/generate-drill
// Env var required (Pages → Settings → Environment variables): GROQ_API_KEY
//
// Body: { "keys": ["e", "r", "t", ...] }   // most-mistyped keys, most-mistyped first
// Response: { "passage": "..." }

const ALLOWED_KEYS = /^[a-z0-9]$/;
const MODEL = "openai/gpt-oss-120b"; // llama-3.3-70b-versatile was retired Aug 16 2026

export async function onRequestPost(context) {
  const { request, env } = context;

  if (!env.GROQ_API_KEY) {
    return jsonResponse({ error: "Server is not configured with a Groq API key." }, 500);
  }

  let body;
  try {
    body = await request.json();
  } catch (e) {
    return jsonResponse({ error: "Invalid JSON body." }, 400);
  }

  const keys = Array.isArray(body.keys)
    ? body.keys.filter((k) => typeof k === "string" && ALLOWED_KEYS.test(k)).slice(0, 10)
    : [];

  if (keys.length < 2) {
    return jsonResponse({ error: "Need at least a couple of weak keys to build a drill." }, 400);
  }

  const prompt = buildPrompt(keys);

  let groqRes;
  try {
    groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + env.GROQ_API_KEY
      },
      body: JSON.stringify({
        model: MODEL,
        temperature: 0.8,
        max_tokens: 500,
        messages: [
          {
            role: "system",
            content:
              "You write short English typing-practice passages. You only ever output the passage text itself — no titles, no quotation marks, no markdown, no preamble or explanation."
          },
          { role: "user", content: prompt }
        ]
      })
    });
  } catch (e) {
    return jsonResponse({ error: "Could not reach the drill generator." }, 502);
  }

  if (!groqRes.ok) {
    return jsonResponse({ error: "Drill generator returned an error." }, 502);
  }

  let data;
  try {
    data = await groqRes.json();
  } catch (e) {
    return jsonResponse({ error: "Malformed response from drill generator." }, 502);
  }

  let passage = data && data.choices && data.choices[0] && data.choices[0].message
    ? String(data.choices[0].message.content || "").trim()
    : "";

  passage = passage.replace(/^["'\s]+|["'\s]+$/g, "");

  if (passage.length < 40) {
    return jsonResponse({ error: "Generated passage was too short." }, 502);
  }

  if (passage.length > 2500) passage = passage.slice(0, 2500);

  return jsonResponse({ passage: passage, keys: keys });
}

export async function onRequestOptions() {
  return new Response(null, { headers: corsHeaders() });
}

function buildPrompt(keys) {
  const keyList = keys.join(", ");
  return (
    "Write one natural-sounding English paragraph, 90-130 words, suitable for a typing speed-test practice passage. " +
    "It must be plain flowing prose (no lists, no headings) using only standard letters, numbers, spaces, and basic punctuation (. , ' ). " +
    "Deliberately use an unusually high number of common words that contain these specific letters, since the typist mistypes them most often: " +
    keyList +
    ". Favor words where these letters appear in varied positions (start, middle, end) and in combination with each other. " +
    "Keep the topic ordinary and coherent (everyday life, study habits, nature, work, technology) — do not mention typing, keyboards, or the letters themselves. " +
    "Output only the paragraph text."
  );
}

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
}

function jsonResponse(obj, status) {
  return new Response(JSON.stringify(obj), {
    status: status || 200,
    headers: Object.assign({ "Content-Type": "application/json" }, corsHeaders())
  });
}
