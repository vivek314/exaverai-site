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
          } else {
            setTimeout(function () { cursor.style.display = "none"; }, 1400);
          }
        };
        step();
      });
    }, { threshold: 0.45 });
    twIO.observe(stmt);
  }
})();
