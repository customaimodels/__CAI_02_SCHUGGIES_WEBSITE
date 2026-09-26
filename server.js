/* ============================================================
   Schuggies-Ceilidhs — static server.

   Plain HTML/CSS/JS, no build step, no dependencies. Railway runs
   `npm start` and health-checks /api/health.

   ONLY the website is served: the pages, assets, icons and manifest
   listed in PUBLIC below. Notes, client submissions, rule docs, git,
   python — anything else in this folder — answers 404, so a file
   dropped in here by accident is never published.

   Massie (the Claude chatbot) was removed. Her last version is kept
   in ../dta/_off_massie/ if she ever comes back.
   ============================================================ */
"use strict";

const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const PORT = process.env.PORT || 8080;

// What the public may fetch: these folders, and these top-level file patterns.
const PUBLIC_DIRS = ["pages", "assets"];
const PUBLIC_FILES = /^(index\.html|site\.webmanifest|robots\.txt|sitemap\.xml|favicon[\w-]*\.(ico|png)|apple-touch-icon[\w-]*\.png|android-chrome-[\w-]+\.png)$/;

const TYPES = {
  ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8", ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json", ".svg": "image/svg+xml",
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
  ".webp": "image/webp", ".gif": "image/gif", ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8", ".xml": "application/xml; charset=utf-8",
  ".woff": "font/woff", ".woff2": "font/woff2", ".mp4": "video/mp4"
};

function isPublic(rel) {
  const parts = rel.split("/").filter(Boolean);
  if (!parts.length) return false;
  if (parts.some((p) => p.startsWith(".") || p.startsWith("_"))) return false;
  if (parts.length === 1) return PUBLIC_FILES.test(parts[0]);
  return PUBLIC_DIRS.includes(parts[0]) && !/\.(md|py|zip|log|sh)$/i.test(rel);
}

function notFound(res) {
  res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
  res.end("<h1>404</h1><p><a href=\"/\">Back to Schuggies-Ceilidhs</a></p>");
}

const server = http.createServer((req, res) => {
  let url;
  try { url = new URL(req.url, "http://x"); } catch { return notFound(res); }

  if (url.pathname === "/api/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ ok: true }));
  }
  if (req.method !== "GET" && req.method !== "HEAD") { res.writeHead(405); return res.end(); }

  let rel;
  try { rel = decodeURIComponent(url.pathname); } catch { return notFound(res); }
  if (rel.endsWith("/")) rel += "index.html";
  rel = path.posix.normalize(rel).replace(/^\/+/, "");

  // Extensionless URL -> .html (or folder index), matching how the pages link.
  const candidates = path.extname(rel) ? [rel] : [rel + ".html", rel + "/index.html"];
  for (const c of candidates) {
    if (!isPublic(c)) continue;
    const full = path.join(ROOT, c);
    if (!full.startsWith(ROOT + path.sep)) continue;
    let st;
    try { st = fs.statSync(full); } catch { continue; }
    if (!st.isFile()) continue;
    const type = TYPES[path.extname(full).toLowerCase()] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": type, "Content-Length": st.size,
                         "Cache-Control": "public, max-age=300" });
    if (req.method === "HEAD") return res.end();
    return fs.createReadStream(full).pipe(res);
  }
  notFound(res);
});

server.listen(PORT, () => console.log("[server] Schuggies-Ceilidhs on " + PORT));
