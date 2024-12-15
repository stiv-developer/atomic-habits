const translation = {
  "the": "el/la",
    "bat": "bate",
    "smashed": "golpeó",
    "into": "contra",
    "my": "mi",
    "face": "cara",
    "with": "con",
    "such": "tal",
    "force": "fuerza",
    "that": "que",
    "it": "eso",
    "crushed": "aplastó",
    "nose": "nariz",
    "a": "un/una",
    "distorted": "deformada",
    "u-shape": "forma de U",
    "collision": "colisión",
    "sent": "envió",
    "soft": "suave",
    "tissue": "tejido",
    "brain": "cerebro",
    "slamming": "golpeando",
    "inside": "dentro",
    "skull": "cráneo",
    "immediately": "inmediatamente",
    "wave": "ola",
    "swelling": "hinchazón",
    "surged": "aumentó",
    "throughout": "a través de",
    "head": "cabeza",
    "fraction": "fracción",
    "second": "segundo",
    "i": "yo",
    "had": "tenía",
    "broken": "rota",
    "multiple": "múltiples",
    "fractures": "fracturas",
    "two": "dos",
    "shattered": "destrozadas",
    "eye": "ojo",
    "sockets": "cuencas",
    "on": "en",
    "day": "día",
    "of": "de",
    "sophomore": "segundo",
    "year": "año",
    "high": "secundaria",
    "school": "escuela",
    "was": "estaba",
    "in": "en",
    "baseball": "béisbol",
    "as": "como",
    "classmate": "compañero",
    "took": "tomó",
    "full": "completo",
    "swing": "swing/golpe"
}

function prepareText() {
  const container = document.getElementById("text-container");
  const tooltip = document.getElementById("tooltip");
  const translationSpan = document.getElementById("translation");

  // Reemplazar el contenido de cada párrafo con palabras clicables
  container.querySelectorAll("p").forEach(paragraph => {
    const words = paragraph.textContent.split(/\s+/); // Divide las palabras
    paragraph.innerHTML = ""; // Limpia el contenido original

    words.forEach((word, index) => {
      const cleanWord = word.replace(/[^\w\s]/g, "").toLowerCase(); // Eliminar signos de puntuación y convertir a minúsculas
      const span = document.createElement("span");
      span.textContent = word;
      span.className = "word";

      // Evento al hacer clic
      span.addEventListener("click", (event) => {
        const translationText = translation[cleanWord] || "Traducción no disponible"; // Usar 'translation' aquí
        translationSpan.textContent = translationText;

        // Posicionar el tooltip
        tooltip.style.left = `${event.pageX}px`;
        tooltip.style.top = `${event.pageY - 40}px`;
        tooltip.style.display = "block";
      });

      paragraph.appendChild(span);

      // Agregar espacio entre palabras (excepto la última)
      if (index < words.length - 1) {
        paragraph.appendChild(document.createTextNode(" "));
      }
    });
  });

  // Ocultar el tooltip si se hace clic fuera de una palabra
  document.addEventListener("click", (event) => {
    if (!event.target.classList.contains("word")) {
      tooltip.style.display = "none";
    }
  });
}

// Inicializar el texto al cargar la página
prepareText();