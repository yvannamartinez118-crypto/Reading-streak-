const supabaseURL = "https://atancwsnbtntjvfseahw.supabase.co";
const supabaseKEY = "sb_publishable_p39AzJ_ZxZ82imeUgRAZug_KRPIPcAV";

const supabaseClient = window.supabase.createClient(
  supabaseURL,
  supabaseKEY
);


// Racha
const Racha = document.getElementById("Racha");
const readButton = document.getElementById("readButton");

let racha = 0;

readButton.addEventListener("click", function () {
  racha = racha + 1;
  Racha.textContent = "Racha:" + racha;
});


// Libros
const registerButton = document.getElementById("registerButton");
const bookList = document.getElementById("bookList");
const bookName = document.getElementById("bookName");
const pages = document.getElementById("pages");
const persona = document.getElementById("persona");
const librosYvanna = document.getElementById("librosYvanna");


// Cargar libros desde Supabase
async function cargarLibros() {

  const { data, error } = await supabaseClient
    .from("libros")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error("Error al cargar libros:", error);
    return;
  }

  librosYvanna.textContent = data.length;

  bookList.innerHTML = "";

  data.forEach(function (libro) {

    bookList.innerHTML +=
      "<div>" +
      libro.nombre +
      " - " +
      libro.paginas +
      " páginas - " +
      (libro.persona || "") +
      "</div>";

  });
}


// Registrar un libro
registerButton.addEventListener("click", async function () {

  const nombre = bookName.value;
  const paginas = pages.value;
  const personaValue = persona.value;

  const { error } = await supabaseClient
    .from("libros")
    .insert([
      {
        nombre: nombre,
        paginas: paginas,
        persona: personaValue
      }
    ]);

  if (error) {
  console.log(error);
  alert(error.message);
  return;
}

  bookName.value = "";
  pages.value = "";
  persona.value = "";

  cargarLibros();
});


// Cargar libros al abrir la página
cargarLibros();
