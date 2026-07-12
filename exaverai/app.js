/* Exaver AI — interactions (static, no framework) */
(function () {
  "use strict";

  // ---- Calendly ----
  var CALENDLY_URL = "https://calendly.com/contact-exaverai/30min";
  document.querySelectorAll("[data-calendly]").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      if (window.Calendly && window.Calendly.initPopupWidget) window.Calendly.initPopupWidget({ url: CALENDLY_URL });
      else window.open(CALENDLY_URL, "_blank", "noopener");
    });
  });

  // ---- Mobile menu ----
  var menuBtn = document.getElementById("menuBtn");
  var mobileMenu = document.getElementById("mobileMenu");
  menuBtn.addEventListener("click", function () {
    var open = mobileMenu.hasAttribute("hidden");
    if (open) { mobileMenu.removeAttribute("hidden"); menuBtn.setAttribute("aria-expanded", "true"); menuBtn.textContent = "CLOSE"; }
    else { mobileMenu.setAttribute("hidden", ""); menuBtn.setAttribute("aria-expanded", "false"); menuBtn.textContent = "MENU"; }
  });
  mobileMenu.querySelectorAll(".mlink").forEach(function (l) {
    l.addEventListener("click", function () {
      mobileMenu.setAttribute("hidden", ""); menuBtn.setAttribute("aria-expanded", "false"); menuBtn.textContent = "MENU";
    });
  });

  // ---- Scroll reveal ----
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: "-24px" });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

  // ---- Keep the service-row highlight in sync with the cursor while scrolling ----
  // Browsers don't re-fire :hover during a scroll (cursor is still, page moves), so the
  // row under the pointer wouldn't light up on fast scroll. We track the pointer and, on
  // scroll, resolve the row actually under it. Mouse movement falls back to native :hover.
  (function () {
    var index = document.querySelector(".index");
    if (!index) return;
    var px = -1, py = -1, current = null, ticking = false;
    var set = function (row) {
      if (current === row) return;
      if (current) current.classList.remove("cursor-hover");
      current = row;
      if (current) current.classList.add("cursor-hover");
    };
    window.addEventListener("pointermove", function (e) {
      px = e.clientX; py = e.clientY;
      set(null); // let native :hover take over while the mouse is moving
    }, { passive: true });
    window.addEventListener("scroll", function () {
      if (ticking || px < 0) return;
      ticking = true;
      requestAnimationFrame(function () {
        ticking = false;
        var el = document.elementFromPoint(px, py);
        set(el && el.closest ? el.closest(".index .row") : null);
      });
    }, { passive: true });
  })();

  // ---- Nav CTA becomes the primary once the hero CTA scrolls out of view ----
  var heroCta = document.querySelector(".hero-side .stamp");
  var navCta = document.getElementById("navCta");
  if (heroCta && navCta) {
    var navTick = false;
    var updateNav = function () {
      navTick = false;
      navCta.classList.toggle("cta-solid", heroCta.getBoundingClientRect().bottom < 8);
    };
    window.addEventListener("scroll", function () {
      if (!navTick) { navTick = true; requestAnimationFrame(updateNav); }
    }, { passive: true });
    updateNav();
  }

  // ---- Pipeline lights (re)start from the first step when it scrolls into view ----
  var pipeline = document.querySelector(".pipeline");
  if (pipeline) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          pipeline.classList.remove("run");
          void pipeline.offsetWidth; // force reflow so the animation restarts from Ingest
          pipeline.classList.add("run");
        } else {
          pipeline.classList.remove("run");
        }
      });
    }, { threshold: 0.35 }).observe(pipeline);
  }

  // ---- Enterprise panels: drop in on scroll down, lift back up on scroll up ----
  var dropIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { en.target.classList.toggle("shown", en.isIntersecting); });
  }, { threshold: 0.2 });
  document.querySelectorAll(".drop-rev").forEach(function (el) { dropIO.observe(el); });

  // ---- Contact form ----
  var form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var f = new FormData(form);
      var company = f.get("company");
      var subject = encodeURIComponent("New inquiry from " + f.get("name") + (company ? " (" + company + ")" : ""));
      var body = [
        "Name: " + f.get("name"),
        "Email: " + f.get("email"),
        company ? "Company: " + company : "",
        "",
        f.get("message")
      ].filter(Boolean).join("%0D%0A");
      window.location.href = "mailto:contact@exaverai.com?subject=" + subject + "&body=" + body;
      form.setAttribute("hidden", "");
      document.getElementById("formSuccess").removeAttribute("hidden");
    });
  }

  // ---- Typewriter for the founder statement ----
  var stmt = document.querySelector(".statement");
  if (stmt) {
    var full = stmt.textContent.replace(/\s+/g, " ").trim();
    var typed = false;
    var twIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting || typed) return;
        typed = true;
        twIO.unobserve(stmt);
        stmt.style.minHeight = stmt.offsetHeight + "px"; // reserve space so nothing jumps
        var textEl = document.createElement("span");
        var cursor = document.createElement("span");
        cursor.className = "tw-cursor";
        stmt.textContent = "";
        stmt.appendChild(textEl);
        stmt.appendChild(cursor);
        var i = 0;
        var step = function () {
          if (i <= full.length) {
            textEl.textContent = full.slice(0, i);
            i++;
            setTimeout(step, 42);
          }
          // cursor stays blinking after typing completes
        };
        step();
      });
    }, { threshold: 0.45 });
    twIO.observe(stmt);
  }
})();
