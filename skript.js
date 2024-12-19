const button = document.querySelector("button");
button.addEventListener("click", updateName);

function updateName() {
  const name = prompt("Введите новое имя");
  const paragraph = document.querySelector("p.orange");
  paragraph.textContent = `Меня зовут ${name}. Я студент`;
}
