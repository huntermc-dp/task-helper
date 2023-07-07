function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
}
setInterval(refreshTime, 1);

const workBook = document.querySelector(".workbook");
const workInfoBook = document.createElement("div");
const wheading = document.createElement("h1");
function workNotebook() {
  isdatesNotebook = false;
  isworkNotebook = true;
  isschoolNotebook = false;
  ischurchNotebook = false;
  isfunNotebook = false;

  workArea.className = "work-input";

  workArea.textContent = "           Press ENTER to start new line";
  workArea.style.color = "white";

  wheading.textContent = "work";
  wheading.style.marginLeft = "40%";

  workInfoBook.appendChild(wheading);
  workInfoBook.appendChild(workArea);
  workBook.appendChild(workInfoBook);
}

const datesInfoBook = document.createElement("div");
const datesBook = document.querySelector(".datesbook");
const dheading = document.createElement("h1");
function datesNotebook() {
  isdatesNotebook = true;
  isworkNotebook = false;
  isschoolNotebook = false;
  ischurchNotebook = false;
  isfunNotebook = false;

  datesArea.className = "dates-input";
  datesArea.textContent = "           Press ENTER to start new line";
  datesArea.style.color = "white";

  dheading.textContent = "dates";
  dheading.style.marginLeft = "40%";

  datesInfoBook.appendChild(dheading);
  datesInfoBook.appendChild(datesArea);
  datesBook.appendChild(datesInfoBook);
}

const schoolInfoBook = document.createElement("div");
const schoolBook = document.querySelector(".schoolbook");
const sheading = document.createElement("h1");
function schoolNotebook() {
  isdatesNotebook = false;
  isworkNotebook = false;
  isschoolNotebook = true;
  ischurchNotebook = false;
  isfunNotebook = false;

  schoolArea.className = "school-input";
  schoolArea.textContent = "           Press ENTER to start new line";
  schoolArea.style.color = "white";

  sheading.textContent = "school";
  sheading.style.marginLeft = "40%";

  schoolInfoBook.appendChild(sheading);
  schoolInfoBook.appendChild(schoolArea);
  schoolBook.appendChild(schoolInfoBook);
}

const churchBook = document.querySelector(".churchbook");
const churchInfoBook = document.createElement("div");
const cheading = document.createElement("h1");
function churchNotebook() {
  isdatesNotebook = false;
  isworkNotebook = false;
  isschoolNotebook = false;
  ischurchNotebook = true;
  isfunNotebook = false;
  churchArea.className = "church-input";
  churchArea.textContent = "           Press ENTER to start new line";
  churchArea.style.color = "white";

  cheading.textContent = "church";
  cheading.style.marginLeft = "40%";

  churchInfoBook.appendChild(cheading);
  churchInfoBook.appendChild(churchArea);
  churchBook.appendChild(churchInfoBook);
}

const funBook = document.querySelector(".funbook");
const funInfoBook = document.createElement("div");
const fheading = document.createElement("h1");
function funNotebook() {
  isdatesNotebook = false;
  isworkNotebook = false;
  isschoolNotebook = false;
  ischurchNotebook = false;
  isfunNotebook = true;

  funArea.className = "fun-input";
  funArea.textContent = "           Press ENTER to start new line";
  funArea.style.color = "white";

  fheading.textContent = "fun";
  fheading.style.marginLeft = "40%";

  funInfoBook.appendChild(fheading);
  funInfoBook.appendChild(funArea);
  funBook.appendChild(funInfoBook);
}

// function closeitem() {
//   document.addEventListener("click", () => {
//     boot.forEach((btn) => {
//       if (btn.computedStyleMap.display != "none") boot.style.display = none;
//     });
//   });
// }

const workArea = document.createElement("textarea");
const datesArea = document.createElement("textarea");
const schoolArea = document.createElement("textarea");
const churchArea = document.createElement("textarea");
const funArea = document.createElement("textarea");

let isworkNotebook = false;
let isdatesNotebook = false;
let isschoolNotebook = false;
let ischurchNotebook = false;
let isfunNotebook = false;

const boot = document.querySelectorAll(".btn");
console.log(boot);

boot[0].addEventListener("click", () => {
  isworkNotebook ? workBook.removeChild(workInfoBook) : workNotebook();
});
boot[1].addEventListener("click", () => {
  isdatesNotebook ? datesBook.removeChild(datesInfoBook) : datesNotebook();
});
boot[2].addEventListener("click", () => {
  isschoolNotebook ? schoolBook.removeChild(schoolInfoBook) : schoolNotebook();
});
boot[3].addEventListener("click", () => {
  ischurchNotebook ? churchBook.removeChild(churchInfoBook) : churchNotebook();
});
boot[4].addEventListener("click", () => {
  isfunNotebook ? funBook.removeChild(funInfoBook) : funNotebook();
});
