document.getElementById("download-btn").addEventListener("click", () => {
  const fileUrl = "https://t.me/softelmax/8";

  const a = document.createElement("a");
  a.href = fileUrl;
  a.target = "_blank"; // Yangi oynada ochilmasligi uchun
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
});

// Yulduzcha baholash tizimi
const stars = document.querySelectorAll(".star");
const ratingValue = document.getElementById("rating-value");

stars.forEach((star) => {
  star.addEventListener("click", () => {
    const value = star.getAttribute("data-value");
    ratingValue.value = value;

    stars.forEach((s) => {
      s.classList.remove("active");
      if (s.getAttribute("data-value") <= value) {
        s.classList.add("active");
      }
    });
  });
});

document.getElementById("feedback-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const rating = ratingValue.value;
  if (!rating) {
    alert("Iltimos, baho qo‘ying!");
    return;
  }
  alert(`Fikringiz qabul qilindi! Baho: ${rating}/5`);
  e.target.reset();
  stars.forEach((s) => s.classList.remove("active"));
  ratingValue.value = "";
});

document.getElementById("support-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("So‘rovingiz yuborildi!");
  e.target.reset();
});
