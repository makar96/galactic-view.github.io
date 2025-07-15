function toggleForms() {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  loginForm.style.display = loginForm.style.display === "none" ? "block" : "none";
  registerForm.style.display = registerForm.style.display === "none" ? "block" : "none";
}

// Логин
document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  const res = await fetch("http://localhost:5000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include", // важно для сессии!
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();
  if (res.ok && data.success) {
    window.location.href = "C:/Users/kiris/OneDrive/Desktop/Makar/Разработка/Проект%20по%20Космосу/Portfolio/Portfolio.html";  // или dashboard
  } else {
    document.getElementById("loginError").innerText = data.error || "Ошибка входа";
  }
});

// Регистрация
document.getElementById("registerForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const username = document.getElementById("registerUsername").value;
  const password = document.getElementById("registerPassword").value;

  const res = await fetch("http://localhost:5000/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();
  if (res.ok && data.success) {
    alert("Регистрация успешна. Теперь войдите.");
    toggleForms();
  } else {
    document.getElementById("registerError").innerText = data.error || "Ошибка регистрации";
  }
});
