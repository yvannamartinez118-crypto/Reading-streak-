const Racha = document.getElementById("Racha")
const readButton=
  document.getElementById("readButton")
let racha = 0 
readButton.addEventListener("click", function () {racha = racha + 1; Racha.textContent= "Racha:"+racha;})
const registerButton = document.getElementById("registerButton")
const bookList = document.getElementById ("bookList")
const bookName = document.getElementById ("bookName")
const pages = document.getElementById("pages")
let libros = JSON.parse (localStorage.getItem ("libros")) ||[];
let persona= document.getElementById("persona")
let librosYvanna=document.getElementById("librosYvanna")
librosYvanna.textContent=libros.length;
libros.forEach(function(libro, indice){bookList.innerHTML += "<div>" + libro.nombre + "-" + libro.paginas + "paginas <button onclick= 'eliminarLibro("+indice+")'>  Eliminar</button> </div>";});
function eliminarLibro(indice){libros.splice (indice,1); localStorage.setItem("libros", JSON.stringify(libros)); bookList.innerHTML = ""; libros.forEach(function(libro,indice){bookList.innerHTML += "<div>" + libro.nombre + "-" + libro.paginas + "paginas <button onclick= 'eliminarLibro ("+indice+")'> Eliminar</button> </div>";});} 
registerButton.addEventListener("click", function () {libros.push ({nombre: bookName.value, paginas: pages.value, persona: persona.value}) 
  localStorage.setItem("libros", JSON.stringify(libros));
                                                      bookList.innerHTML += "<div>" + bookName.value + "-" + pages.value + "páginas -" + persona.value + "</div>";})