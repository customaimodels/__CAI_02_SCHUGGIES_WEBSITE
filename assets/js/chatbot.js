/* ============================================================
   Schuggies-Ceilidhs — "Ask Massie" chatbot
   Works OUT OF THE BOX: answers common FAQ questions from a
   built-in knowledge base (no server, no install needed).
   Optionally upgrades to a local Ollama model for free-form
   questions if one is running.
   ============================================================ */
(function () {
  "use strict";

  var CONFIG = {
    title: "Ask Massie",
    greeting: "Hi, I'm Massie 👋 Fancy a ceilidh but not sure where to start? Ask me anything, or tap a question below.",
    // Ollama is asked for once, at open, and never again if it is not there.
    // A visitor has no Ollama and an HTTPS page cannot reach http://localhost,
    // so the probe fails for them in well under a second and Massie falls back
    // to the FAQ brain — same behaviour they had before, no request per turn.
    // On Schuggie's own machine the probe succeeds and she turns conversational.
    useOllama: true,
    endpoint: "http://localhost:11434/api/chat",
    tagsEndpoint: "http://localhost:11434/api/tags",
    // Preferred model, but the tag actually installed wins. A bare "llama3.2"
    // is NOT a valid tag unless :latest was pulled — the machine here had only
    // llama3.2:3b, so a hardcoded name 404'd every request. The probe reads
    // /api/tags and picks the closest real tag instead.
    model: "llama3.2",
    probeMs: 1200,       // give up on the probe quickly; never block the UI
    maxTurns: 12,        // trim history so context cannot grow without bound
    system:
      "You are Massie, the friendly booking assistant for Schuggies-Ceilidhs, authentic Scottish ceilidh entertainment (weddings, parties, corporate), Nottingham-based, UK-wide. " +
      "Warm, concise (2-4 sentences), a touch of Scottish charm. " +
      "VERIFIED FACTS — these are the ONLY facts you may state: Ceilidh DJ from £877, live band from £1,597, Whole of the Moon from £4,927; prices locked to 2029; every dance is called, no experience needed; gender-free calling; UK-wide incl. Channel Islands, East Midlands (NG, LE, DE) travel included; hosting since 2008, 550+ events, 220+ weddings; £5m public liability, £1m professional indemnity, PAT-certified kit; phone 01332 498839, email info@schuggies-ceilidhs.co.uk. " +
      "HARD RULES: Never state a number, statistic, song count, package inclusion, date or policy that is not listed above or in the verified facts given to you for a specific question. If you do not know, say plainly that you are not sure and offer a chat with Schuggie — a guess that turns out wrong costs him a booking. " +
      "You CANNOT make, hold or confirm bookings, and you cannot see the diary; never offer to book anything or claim a date is free. Point people to the Book a Chat link, the Check Availability link, the phone number or the email instead. " +
      "Refer to Schuggie in the third person; you are his assistant, not him."
  };

  var CONTACT = "You can call 01332 498839, email info@schuggies-ceilidhs.co.uk, or book a free chat on the Contact page.";

  // ---- Built-in FAQ brain (keyword-matched) ----
  var KB = [
    { keys: ["price","cost","how much","expensive","fee","quote","budget","£","pound"],
      a: "Here's the guide pricing (locked until 2029):\n• Ceilidh DJ set — from £877 (most popular)\n• Live ceilidh band — from £1,597\n• The Whole of the Moon — from £4,927\nGuide prices are for the East Midlands (NG, LE and DE postcodes); a little extra for travel beyond. Want a proper quote? " + CONTACT },
    { keys: ["package","included","what do i get","what's included","offer","options"],
      a: "Three flexible packages, every dance called:\n1) Ceilidh-DJ set (from £877) — recorded music, PA & mic for speeches, optional end-of-night disco.\n2) Ceilidh & Disco live band (from £1,597) — my signature experience with a live band.\n3) The Whole of the Moon (from £4,927) — all the unique extras." },
    { keys: ["first dance"],
      a: "Yes! You can have a ceilidh first dance just the two of you, or get all your guests up to join in — they'll be raving about it afterwards. Happy to talk it through on a chat." },
    { keys: ["beginner","experience","know the dance","teach","learn","never been","hard","difficult","how to dance"],
      a: "No experience needed at all. Every dance is 'called', meaning I guide everyone through the moves as we go. Beginners and seasoned dancers all join in together — and making mistakes is half the fun!\nReady to plan yours? Check availability or book a chat." },
    { keys: ["space","venue","room","hall","fit","big","small","how much room"],
      a: "Any size works — a cosy village hall, a marquee, a garden, an odd-shaped hotel room or a grand castle hall. Don't let venue size put you off; I've enough experience to make them all work." },
    { keys: ["travel","cover","area","distance","come to","where are you","uk","far","location"],
      a: "I cover the whole UK, including the Channel Islands. Travel within the East Midlands (NG, LE and DE postcodes) is included; beyond that it's £0.55/mile plus £20/hour travel time — and I often work with local musicians to keep costs down.\nWant to lock it in? Check availability or book a chat." },
    { keys: ["outdoor","outside","open air","open-air","garden","marquee","field","forest"],
      a: "Yes — all my packages work outdoors (open-air). I've done loads over the years; we just always keep a wet-weather plan in the back pocket." },
    { keys: ["sound limit","decibel","db","noise","volume","loud"],
      a: "No problem — I work with sound limiters all the time. My ceilidhs peak around 85 dB, well within most limits, and the bands can even play fully acoustic for outdoor do's." },
    { keys: ["equipment","pa","gear","insurance","pat","liability","insured"],
      a: "I bring all my own PA and disco lighting (just need two power sockets nearby). All kit is PAT tested, and I carry public liability insurance up to £10m plus £1m indemnity — copies can go straight to your venue." },
    { keys: ["book","booking","deposit","reserve","secure","hold my date","how do i book"],
      a: "We start with a quick friendly chat to make sure I'm the right fit, then I send a booking form, T&Cs and invoice. It's confirmed once the form's back and the deposit (usually £100) is paid; the balance is due three months before. " + CONTACT },
    { keys: ["how long","duration","hours","last","length of time"],
      a: "Usually two sessions of about an hour and a half with a break between, and you can add a wind-down disco at the end. It's flexible and fits almost any running order." },
    { keys: ["scottish","scotland","have to be","kilt","irish"],
      a: "Not at all! You don't need to be Scottish, have Celtic roots or wear a kilt — it's just brilliant, inclusive fun. (I do wear the kilt, mind.)" },
    { keys: ["available","availability","date","free","calendar","my day"],
      a: "I can check your date quickly — pop over to the Contact page or the 'Book a Chat' link and I'll confirm availability. Prices are held to 2029, so there's no rush-cost." },
    { keys: ["contact","phone","email","call you","reach","number","get in touch"],
      a: CONTACT },
    { keys: ["what do you do","caller","calling","host","mc","actually do"],
      a: "I host your ceilidh — 'calling' the dances (guiding everyone through the moves) and MC'ing the evening so you can relax and enjoy your own party. Fun, social and inclusive for all ages and abilities." },
    { keys: ["payment","pay","bank transfer","card","cash","instal"],
      a: "Flexible options: deposit on booking (usually £100), balance three months before. Pay by bank transfer, card (SumUp), a monthly plan, or cash." },
    { keys: ["pronounce","pronunciation","say it","kaylee","kay lee","how do you say","your name","who are you","massie"],
      a: "I'm Massie — Schuggie's ceilidh helper. And it's \"ceilidh\" you're probably after: pronounced \"Kay-lea\". It just means a social gathering with music and dancing — and every dance is called, so you can't get it wrong." },
    { keys: ["small","intimate","few guests","tiny","numbers","how many people"],
      a: "Absolutely — I host lots of smaller, intimate events. You usually only need enough guests for a longways set, and I can step in to dance and add couple dances as needed." },
    { keys: ["inclusive","gender","pronoun","accessible","wheelchair","lgbt","everyone"],
      a: "Inclusivity is built in. I call gender-free — think lions and penguins rather than ladies and gentlemen — so everyone is comfortable dancing with whoever they like, and it adds to the fun." },
    { keys: ["corporate","business","work event","team","staff"],
      a: "Ceilidhs work a treat for work events — team socials, conference evenings and client entertaining. Everyone ends up talking to someone new, and nobody needs to know the steps. Same fee structure as any other event." }
  ];

  var CHIPS = [
    "What do your packages cost?",
    "Are you free on my date?",
    "Can we have a ceilidh first dance?",
    "Do you travel to my area?",
    "Are ceilidhs good for beginners?"
  ];

  function norm(s){ return (" "+s.toLowerCase().replace(/[^a-z0-9£ ]/g," ")+" ").replace(/\s+/g," "); }

  /* Keys must match whole words. A plain indexOf found "fee" inside "will she
     FEEl left out?" and answered a question about an elderly guest with the
     price list — and "fit" inside "benefit", "big" inside "obliging", and so
     on. Every false hit is doubly bad now that a match is served verbatim
     instead of being passed to the model. */
  var reCache = {};
  function keyHit(t, k){
    if (!/^[a-z0-9]/.test(k)) return t.indexOf(k) !== -1;   // "£" and friends
    if (!reCache[k]) reCache[k] = new RegExp("\\b" + k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b");
    return reCache[k].test(t);
  }

  function faqMatch(q){
    var t = norm(q), best = null, bestScore = 0;
    KB.forEach(function(item){
      var score = 0;
      item.keys.forEach(function(k){
        var kk = k.toLowerCase();
        if (keyHit(t, kk)) score += (kk.indexOf(" ") !== -1 ? 3 : 1);
      });
      if (score > bestScore){ bestScore = score; best = item; }
    });
    return bestScore >= 1 ? best.a : null;
  }

  /* Same match, but returns the text so it can be handed to the model as
     ground truth. Without this the model invents prices; with it, it puts our
     real numbers into its own words. */
  function faqFacts(q){ return faqMatch(q); }

  var history = [{ role: "system", content: CONFIG.system }];
  var busy = false, ollamaOK = null, MODEL = CONFIG.model;

  /* The fab is Massie herself, not a generic speech bubble — a face invites a
     question in a way an icon does not. Path is resolved from the page depth
     so it works at root, /pages/ and /pages/blog/ alike. */
  var DEPTH = (location.pathname.match(/\//g) || []).length - 1;
  var ROOT = DEPTH > 0 ? new Array(DEPTH + 1).join("../") : "";
  function rel(href){ return ROOT + href; }
  var AVATAR = rel("assets/images/massie-avatar.webp");
  var ICON = '<img class="cbot__avatar" src="' + AVATAR + '" alt="" width="320" height="320" loading="lazy" decoding="async">';

  function el(html){ var d=document.createElement("div"); d.innerHTML=html.trim(); return d.firstChild; }

  function build(){
    var root = el(
      '<div class="cbot">' +
        '<button class="cbot__fab" aria-label="Ask Massie a question">' + ICON +
          '<span class="cbot__fab-pulse" aria-hidden="true"></span></button>' +
        '<span class="cbot__nudge" aria-hidden="true">Ask Massie</span>' +
        '<section class="cbot__panel" role="dialog" aria-label="' + CONFIG.title + '" hidden>' +
          '<header class="cbot__head"><img class="cbot__mark-img" src="' + AVATAR + '" alt="" width="320" height="320">' +
            '<div><strong>' + CONFIG.title + '</strong><small>Ceilidh helper</small></div>' +
            '<button class="cbot__close" aria-label="Close chat">✕</button></header>' +
          '<div class="cbot__log" aria-live="polite"></div>' +
          '<form class="cbot__form"><input class="cbot__input" type="text" autocomplete="off" placeholder="Type your question…" aria-label="Message"><button class="cbot__send" aria-label="Send">➤</button></form>' +
        '</section>' +
      '</div>'
    );
    document.body.appendChild(root);

    var fab = root.querySelector(".cbot__fab");
    var panel = root.querySelector(".cbot__panel");
    var log = root.querySelector(".cbot__log");
    var form = root.querySelector(".cbot__form");
    var input = root.querySelector(".cbot__input");
    var opened = false;

    function isOpen(){ return !panel.hidden && panel.classList.contains("is-open"); }
    function open(){
      panel.hidden = false; document.body.classList.add("cbot-open"); root.classList.add("is-open");
      requestAnimationFrame(function(){ panel.classList.add("is-open"); });
      if (!opened){ opened = true; add("bot", CONFIG.greeting); renderChips(); }
      setTimeout(function(){ input.focus(); }, 200);
    }
    function close(){ panel.classList.remove("is-open"); root.classList.remove("is-open"); document.body.classList.remove("cbot-open");
      setTimeout(function(){ panel.hidden = true; }, 250); }
    fab.addEventListener("click", function(){ isOpen() ? close() : open(); });
    root.querySelector(".cbot__close").addEventListener("click", close);

    function add(who, text){
      var m = el('<div class="cbot__msg cbot__msg--' + who + '"></div>');
      m.textContent = text; log.appendChild(m); log.scrollTop = log.scrollHeight; return m;
    }
    /* The chip row used to delete itself on the first tap, which read as the
       bot going dead after one question. It now stays put, so a visitor can
       work through several questions, and only greys out while a reply is in
       flight. Two standing links sit underneath for the two things anyone
       actually wants: the prices, and a chat in the diary. */
    var chipRow = null;
    function renderChips(){
      var wrap = el('<div class="cbot__chips"></div>');
      CHIPS.forEach(function(c){
        var b = el('<button class="cbot__chip" type="button"></button>'); b.textContent = c;
        b.addEventListener("click", function(){ ask(c); });
        wrap.appendChild(b);
      });
      wrap.appendChild(el(
        '<div class="cbot__links">' +
          '<a class="cbot__chip cbot__chip--link" href="' + rel("pages/prices.html") + '">Prices &amp; packages</a>' +
          '<a class="cbot__chip cbot__chip--link" href="https://calendly.com/schuggies-ceilidhs/book-a-chat" target="_blank" rel="noopener">Book a chat</a>' +
        '</div>'
      ));
      chipRow = wrap;
      log.appendChild(wrap); log.scrollTop = log.scrollHeight;
    }
    function setChipsBusy(state){
      if (!chipRow) return;
      chipRow.classList.toggle("is-busy", !!state);
      var bs = chipRow.querySelectorAll("button");
      for (var i=0;i<bs.length;i++) bs[i].disabled = !!state;
    }

    /* Ask Ollama once whether it is there. Everything downstream reads the
       cached answer, so a visitor pays for one failed request per page rather
       than one per question. */
    function probeOllama(){
      if (!CONFIG.useOllama || ollamaOK !== null) return Promise.resolve(ollamaOK);
      var done = false;
      return new Promise(function(resolve){
        var t = setTimeout(function(){ if(!done){ done=true; ollamaOK=false; resolve(false); } }, CONFIG.probeMs);
        fetch(CONFIG.tagsEndpoint, { method:"GET" })
          .then(function(r){ return r.ok ? r.json() : null; })
          .catch(function(){ return null; })
          .then(function(data){
            if (done) return;
            done = true; clearTimeout(t);
            var names = (data && data.models || []).map(function(m){ return m.name; }).filter(Boolean);
            if (!names.length){ ollamaOK = false; resolve(false); return; }
            // Exact tag, then anything sharing the preferred family, then whatever is there.
            var want = CONFIG.model;
            MODEL = names.indexOf(want) !== -1 ? want
                  : (names.filter(function(n){ return n.indexOf(want.split(":")[0]) === 0; })[0] || names[0]);
            ollamaOK = true; resolve(true);
          });
      });
    }

    /* Keep the system turn plus the last N exchanges. An unbounded history
       slows every reply down and eventually blows the model's context. */
    function trimHistory(){
      if (history.length <= CONFIG.maxTurns + 1) return;
      history = [history[0]].concat(history.slice(-CONFIG.maxTurns));
    }

    function ask(q){
      if (!q || busy) return;
      add("user", q);
      history.push({ role:"user", content:q });
      trimHistory();

      var facts = faqFacts(q);

      /* A matched fact sheet is served verbatim, model or no model.
         Two rounds of testing settled this: asked to restate the price list in
         its own words, llama3.2:3b either dropped the figures entirely or
         became evasive ("want to know what it costs?"). A booking assistant
         that fumbles the prices is worse than one that reads them out. The
         canned answers exist precisely because they are exact — so they get
         used exactly.

         The model earns its place on everything else: follow-ups, phrasing a
         visitor did not anticipate, and anything off-script. Those have no
         canned answer to lose, and it has the conversation so far for context. */
      if (facts){ reply(facts); return; }

      probeOllama().then(function(live){
        if (!live){ reply(fallback()); return; }

        /* Model reachable: let her actually talk. The matched FAQ goes in as
           ground truth rather than being returned verbatim, so she answers in
           her own words, follows up, and remembers what was said earlier —
           while the prices stay ours. Previously a keyword hit short-circuited
           the model entirely, so common questions always came back canned and
           the conversation went nowhere. */
        /* Ground EVERY model turn, not only the ones a keyword matched. The
           first version injected facts only on a match, so a natural follow-up
           like "tell me more about the first one" matched nothing, ran
           unguarded, and the model happily invented a 500-song playlist and
           offered to take the booking. */
        var guard = "Answer only from the verified facts in your standing brief and from what has already been said in this conversation above — earlier answers in this chat are trustworthy, so use them. " +
          "Invent nothing: no counts, no song numbers, no package inclusions, no availability, no dates. " +
          "If the answer is not something you know, say plainly that you are not sure and offer a chat with Schuggie. Keep it to 2-3 sentences.";

        var msgs = history.slice();
        msgs.splice(msgs.length - 1, 0, { role: "system", content: guard });
        streamReply(msgs, facts);
      });
    }

    /* Stream the reply token by token. A message that types itself out reads
       as alive; the same text arriving in one lump after a pause reads as a
       lookup. Falls back to a single non-streamed request if the browser
       cannot read the body stream. */
    function streamReply(msgs, facts){
      busy = true; setChipsBusy(true);
      var bubble = add("bot", ""); bubble.classList.add("cbot__msg--typing");
      bubble.textContent = "…";
      var got = "";

      function finish(text){
        bubble.classList.remove("cbot__msg--typing");
        text = (text || "").trim();
        if (!text) text = facts || fallback();
        bubble.textContent = text;
        history.push({ role: "assistant", content: text });
        trimHistory();
        busy = false; setChipsBusy(false);
        log.scrollTop = log.scrollHeight;
        input.focus();
      }

      fetch(CONFIG.endpoint, {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: MODEL, messages: msgs, stream: true })
      })
      .then(function(r){
        if (!r.ok || !r.body || !r.body.getReader) throw 0;
        var reader = r.body.getReader(), dec = new TextDecoder(), buf = "";
        return (function pump(){
          return reader.read().then(function(res){
            if (res.done) return finish(got);
            buf += dec.decode(res.value, { stream: true });
            var lines = buf.split("\n"); buf = lines.pop();
            lines.forEach(function(line){
              if (!line.trim()) return;
              try {
                var d = JSON.parse(line);
                var piece = d && d.message && d.message.content;
                if (piece){
                  got += piece;
                  bubble.textContent = got;
                  log.scrollTop = log.scrollHeight;
                }
              } catch (e) { /* partial JSON line; the next chunk completes it */ }
            });
            return pump();
          });
        })();
      })
      .catch(function(){
        /* Streaming unavailable — one plain request, then give up gracefully. */
        fetch(CONFIG.endpoint, {
          method: "POST", headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ model: MODEL, messages: msgs, stream: false })
        })
        .then(function(r){ if (!r.ok) throw 0; return r.json(); })
        .then(function(d){ finish(d && d.message && d.message.content); })
        .catch(function(){ ollamaOK = false; finish(facts || fallback()); });
      });
    }

    function reply(text){
      var m = add("bot", text);
      history.push({ role:"assistant", content:text });
      log.scrollTop = log.scrollHeight; return m;
    }
    function fallback(){
      return "Good question — I'm not certain on that one. " + CONTACT + "\nOr ask me about prices, packages, experience, travel, space, outdoor events or booking.";
    }

    form.addEventListener("submit", function(e){ e.preventDefault(); var q = input.value.trim(); input.value=""; ask(q); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", build);
  else build();
})();
