document.addEventListener("DOMContentLoaded", function () {
  const apiUrl = "https://api-colombia.com/api/v1/Map";
  const cardsContainer = document.getElementById("cardsContainer");

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((map) => {
        const card = document.createElement("div");
        card.className =
          "bg-white border border-gray-300 rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl";
        card.innerHTML = `
        <img class="w-full h-48 object-cover" src="${map.urlImages[0]}" alt="${map.name}">
        <div class="p-6">
          <h2 class="text-xl font-semibold mb-2 text-gray-800">${map.name}</h2>
          <p class="text-gray-700 text-base mb-4">${map.description}</p>
          <a href="${map.urlSource}" 
             class="inline-block text-white font-semibold py-2 px-4 rounded-md bg-blue-600 hover:bg-blue-700 transition duration-300 ease-in-out" 
             target="_blank">
            Ver más
          </a>
        </div>
      `;

        cardsContainer.appendChild(card);
      });
    })
    .catch((error) => console.error("Error al obtener los mapas:", error));
});

document.getElementById("logoutButton").addEventListener("click", function () {
  Swal.fire({
    title: "¿Estás seguro?",
    text: "¿Quieres salir de la sesión?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, salir",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = "/index.html";
    }
  });
});
