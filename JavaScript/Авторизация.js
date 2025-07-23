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

  const res = await fetch("http://127.0.0.1:5000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include", // важно для сессии!
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();
  if (res.ok && data.success) {
    window.location.href = "../../Portfolio/portfolio.html";  // или другой относительный путь
  } else {
    document.getElementById("loginError").innerText = data.error || "Ошибка входа";
  }
});

// Регистрация
document.getElementById("registerForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const username = document.getElementById("registerUsername").value;
  const password = document.getElementById("registerPassword").value;

  const res = await fetch("http://127.0.0.1:5000/register", {
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
