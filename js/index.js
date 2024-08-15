document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevenir que el formulario se envíe automáticamente

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    if (username === "admin" && password === "1234") {
      errorMessage.classList.add("hidden");
      Swal.fire({
        title: "¡Inicio de sesión exitoso!",
        text: "Has iniciado sesión correctamente.",
        icon: "success",
        confirmButtonText: "Continuar",
      }).then(() => {
        window.location.href = "/dashboard.html";
      });
    } else {
      Swal.fire({
        title: "¡Error!",
        text: "Usuario o contraseña incorrectos.",
        icon: "error",
        confirmButtonText: "Reintentar",
      });
      errorMessage.textContent = "Usuario o contraseña incorrectos";
      errorMessage.classList.remove("hidden");
    }
  });
