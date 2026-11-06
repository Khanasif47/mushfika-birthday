// Birthday date: 7 November. Change the year only if you reuse this site later.
const birthday = new Date(2026, 10, 7, 0, 0, 0); // Month is zero-based: 10 = November.
const $ = (selector) => document.querySelector(selector);

function updateCountdown() {
  const now = new Date();
  let target = birthday;
  // If the birthday has passed, show the celebration state instead of a negative countdown.
  if (now > target) {
    $("#days").textContent = "00";
    $("#hours").textContent = "00";
    $("#minutes").textContent = "00";
    $("#seconds").textContent = "00";
    $("#countdownCaption").textContent = "It's your day! Happy birthday, Mushfika ♡";
    return;
  }
  const diff = target - now;
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const seconds = Math.floor((diff % 60000) / 1000);
  $("#days").textContent = String(days).padStart(2, "0");
  $("#hours").textContent = String(hours).padStart(2, "0");
  $("#minutes").textContent = String(minutes).padStart(2, "0");
  $("#seconds").textContent = String(seconds).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

$("#enterButton").addEventListener("click", () => {
  $("#countdown").scrollIntoView({ behavior: "smooth" });
  burstHearts(12);
});

// Interactive cake: each candle can be tapped to blow it out.
const candles = [...document.querySelectorAll(".candle")];
candles.forEach((candle) => {
  candle.addEventListener("click", () => {
    candle.classList.remove("lit");
    const remaining = candles.filter((item) => item.classList.contains("lit")).length;
    $("#wishMessage").textContent = remaining
      ? `${remaining} candle${remaining === 1 ? "" : "s"} left! Make your wish, pretty girl ✨`
      : "All candles are out! May every wish of yours come true, Mushfika 💗";
    if (remaining === 0) burstHearts(28);
  });
});
$("#wishButton").addEventListener("click", () => {
  candles.forEach((candle) => candle.classList.remove("lit"));
  $("#wishMessage").textContent = "Wish sent straight to the universe. Happy birthday, my love! ♡";
  burstHearts(30);
});

function openGift() {
  $("#giftWrap").classList.add("open");
  $("#finalMessage").hidden = false;
  $("#finalMessage").scrollIntoView({ behavior: "smooth", block: "center" });
  burstHearts(35);
}
$("#giftWrap").addEventListener("click", openGift);
$("#giftWrap").addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openGift();
  }
});

// Small floating hearts, created locally (no external library needed).
function burstHearts(amount = 8) {
  const layer = $(".sparkle-layer");
  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");
    heart.className = "float-heart";
    heart.textContent = ["♡", "♥", "✦", "🎀"][Math.floor(Math.random() * 4)];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${14 + Math.random() * 22}px`;
    heart.style.animationDuration = `${3 + Math.random() * 3}s`;
    layer.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove());
  }
}
setInterval(() => burstHearts(1), 1800);
