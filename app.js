/* Renders the page from menuData.js. You shouldn't need to edit this. */
const $ = (id) => document.getElementById(id);

// ---- Text content ----
document.title = `${SITE.name} | ${SITE.tagline}`;
$("tagline").textContent = SITE.tagline;
$("subtitle").textContent = SITE.subtitle;
$("trendingTitle").textContent = SITE.trendingTitle;
$("menuTitle").textContent = SITE.menuTitle;
$("feedbackTitle").textContent = SITE.feedbackTitle;
$("feedbackText").textContent = SITE.feedbackText;
$("footName").textContent = SITE.name;
$("footTag").textContent = SITE.tagline;
$("footNote").textContent = SITE.footerNote;
$("logo").src = SITE.logo;
$("footLogo").src = SITE.logoMark || SITE.logo;
$("footLogo").onerror = () => { $("footLogo").style.display = "none"; };
$("logo").onerror = () => {
  $("logo").replaceWith(Object.assign(document.createElement("div"), {
    className: "logo-fallback", textContent: SITE.name
  }));
};

// ---- Cards ----
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const priceText = (i) => `₹${i.price}${i.unit ? " / " + i.unit : ""}`;

function card(item, showTrending) {
  const soldOut = !item.available;
  const badge = showTrending && item.trending && !soldOut ? `<span class="badge">🔥 Trending</span>` : "";
  return `
    <article class="card ${soldOut ? "is-sold" : ""}">
      <div class="photo">
        <span class="emoji" aria-hidden="true">${esc(item.emoji || "🍽️")}</span>
        <img src="${esc(item.image)}" alt="${esc(item.name)}" loading="lazy" width="400" height="400"
             onerror="this.remove()">
        ${badge}
        ${soldOut ? `<span class="sold">SOLD OUT</span>` : ""}
      </div>
      <div class="info">
        <h3>${esc(item.name)}</h3>
        <p class="desc">${esc(item.description || "")}</p>
        <div class="meta">
          <span class="price">${priceText(item)}</span>
          <span class="status ${soldOut ? "off" : "on"}">${soldOut ? "Sold out" : "Available"}</span>
        </div>
      </div>
    </article>`;
}

const trending = MENU.filter((i) => i.trending);
$("trendingList").innerHTML = trending.map((i) => card(i, true)).join("");
if (!trending.length) $("trending").hidden = true;
$("menuList").innerHTML = MENU.map((i) => card(i, true)).join("");

// ---- Feedback ----
let rating = 0;
const stars = $("stars");
for (let n = 1; n <= 5; n++) {
  const b = document.createElement("button");
  b.type = "button";
  b.className = "star";
  b.textContent = "★";
  b.setAttribute("role", "radio");
  b.setAttribute("aria-label", `${n} star${n > 1 ? "s" : ""}`);
  b.onclick = () => {
    rating = n;
    [...stars.children].forEach((s, i) => s.classList.toggle("on", i < n));
  };
  stars.appendChild(b);
}

$("submitFeedback").onclick = () => {
  const thanks = $("thanks");
  if (!rating) { thanks.hidden = false; thanks.textContent = "Please tap a star rating first."; return; }
  const params = new URLSearchParams({ usp: "pp_url" });
  if (SITE.ratingEntryId) params.set(SITE.ratingEntryId, rating);
  if (SITE.commentEntryId && $("comment").value.trim()) params.set(SITE.commentEntryId, $("comment").value.trim());
  const sep = SITE.feedbackFormUrl.includes("?") ? "&" : "?";
  const url = SITE.ratingEntryId || SITE.commentEntryId ? SITE.feedbackFormUrl + sep + params : SITE.feedbackFormUrl;
  window.open(url, "_blank", "noopener");
  thanks.hidden = false;
  thanks.textContent = "Thanks! Please finish sending it in the form that just opened.";
};
