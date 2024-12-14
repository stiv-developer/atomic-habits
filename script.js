const textElement = document.getElementById("text-container");
const tooltip = document.getElementById("tooltip");
const originalWordElement = document.getElementById("original-word");
const translatedWordElement = document.getElementById("translated-word");

// Detectar la palabra seleccionada al hacer clic
textElement.addEventListener("mouseup", async (event) => {
  const selection = window.getSelection();
  const word = selection.toString().trim().toLowerCase();

  if (word) {
    // Obtener la posición del cursor
    const rect = selection.getRangeAt(0).getBoundingClientRect();

    // Traducción de la palabra (simulada aquí con un texto fijo)
    const translation = await translateWord(word);

    // Mostrar el cuadro emergente
    originalWordElement.textContent = word;
    translatedWordElement.textContent = translation;
    tooltip.style.display = "block";
    tooltip.style.top = `${window.scrollY + rect.top - tooltip.offsetHeight}px`;
    tooltip.style.left = `${rect.left + rect.width / 2}px`;
  } else {
    tooltip.style.display = "none"; // Ocultar si no hay selección
  }
});

// Función para traducir la palabra usando una API (simulada aquí)
async function translateWord(word) {
  // Aquí puedes integrar una API real como Google Translate o DeepL
  // Simulación de traducción
  const translations = {
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
};


  return translations[word.toLowerCase()] || "Traducción no encontrada";
}

// Ocultar el cuadro emergente si se hace clic fuera del texto
document.addEventListener("click", (event) => {
  if (!textElement.contains(event.target)) {
    tooltip.style.display = "none";
  }
});