/*Анимация появляющейся девушки*/
const animationItems = document.querySelectorAll("._animation"); 

if (animationItems.length > 0) {
  window.addEventListener("scroll", animationScroll);
  function animationScroll() {
    for (let index = 0; index < animationItems.length; index++) {
      const animItem = animationItems[index]; 
      const animItemHeight = animItem.offsetHeight; 
      const animItemOffset = offset(animItem).top; 
      const animStart = 4; 

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        scrollY > animItemOffset - animItemPoint &&
        scrollY < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      } else {
        animItem.classList.remove("_active");
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
}

/*Вставка блока .tableTop__images при мобильной версии*/
const mediaQuery = window.matchMedia("(max-width: 320px)");
const tableTopImages = document.querySelector(".tableTop__images");
const insertTableBlockAfter = document.querySelector("#insertTableBlockAfter");
const tableTopWrapper = document.querySelector(".tableTop__wrapper");
const insertGirlBlockAfter = document.querySelector("#insertGirlBlockAfter");
const voicePhrase = document.querySelector(".voiceControl__content-voice-phrase");
const paragraph = document.querySelector(".voiceControl__content-text");

function handlePhoneChange(e) {
  if (e.matches) {
    insertTableBlockAfter.insertAdjacentElement("afterend", tableTopImages);
    insertGirlBlockAfter.insertAdjacentElement("afterend", voicePhrase);
  } else {
    tableTopWrapper.insertAdjacentElement("afterbegin", tableTopImages);
    paragraph.append(voicePhrase);
  }
}

mediaQuery.addEventListener("change", handlePhoneChange);
handlePhoneChange(mediaQuery);

/* Вверх-вниз кнопки*/
const upBtn = document.querySelector(".tableTop__button--up");
const downBtn = document.querySelector(".tableTop__button--down");
const table = document.querySelector(".tableTop__images-top");

upBtn.addEventListener("click", (e) => {
  console.log("target", e.target);
  changeSlide("up");
});

downBtn.addEventListener("click", () => {
  changeSlide("down");
});

function changeSlide(direction) {
  if (direction === "up") {
    if (table.classList.contains("_goUp")) {
      return "";
    } else table.classList.add("_goUp");
  } else if (direction === "down") {
    if (table.classList.contains("_goUp")) {
      table.classList.remove("_goUp");
    } else return "";
  }
}
