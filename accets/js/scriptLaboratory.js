const hamburgerIcon = document.querySelector(".hamburger-icon")
const hamburgerMenu = document.querySelector(".hamburger-menu")
const crossIcon = document.querySelector(".cross-icon")

hamburgerIcon.addEventListener("click", function () {
  console.log(hamburgerMenu.style.transform)
  hamburgerMenu.classList.add("show-hamburger-menu")

})

crossIcon.addEventListener("click", function () {
  hamburgerMenu.classList.remove("show-hamburger-menu")
})

const showMoreMenu = document.querySelector("#show-more-menu")

showMoreMenu.addEventListener("mouseenter", function (e) {
  const ul = e.target.childNodes[5]
  ul.style.animation = "showUp 0.35s 1"
  ul.style.display = "block"
})

window.onclick = function () {
  const ulMenu = document.querySelector("#ul-menu")
  ulMenu.style.display = "none"
}

const titles = [
  "نمونه کد استفاده از درگاه زرین پال به زبان PHP بر اساس استاندارد REST",
  "نمونه کد .Net",
  "نمونه کد پرداخت درون برنامه ای ios به زبانSwift ",
  "نمونه کد درگاه زرین پال Python تحت فریم ورک Django",
  "نمونه کد پرداخت درون برنامه ای اندروید",
  "نمونه کد زبان GO برای درگاه پرداخت زرین پال",
  "نمونه کد جاوا (Java)برای درگاه پرداخت زرین پال",
]

const search = document.querySelector(".search")
const inputBox = document.querySelector("input")
const resultBox = document.querySelector(".result-box")

inputBox.onkeyup = (e) => {
  const userInput = e.target.value
  let resultArray = []

  if (userInput.length > 0) {
    resultArray = titles.filter((title) => {
      if (title.startsWith(userInput)) return title
    })

    resultArray = resultArray.map((title) => {
      return (
        "<li><b>" +
        userInput +
        "</b>" +
        title.substring(userInput.length) +
        "</li>"
      )
    })

    if (resultArray.length > 0) {
      resultBox.innerHTML = resultArray.join(" ")
      search.classList.add("active")
    } else {
      search.classList.remove("active")
    }
  } else {
    search.classList.remove("active")
  }
}

window.onscroll = function () {
  showHeader()
}

const headerTop = document.querySelector(".header-top")

function showHeader() {
  if (document.documentElement.scrollTop > 813) {
    headerTop.classList.remove("header-top")
    headerTop.classList.add("header-top-two")
    let a = document.getElementsByClassName("a")
    for (let i = 0; i < a.length; i++) {
      a[i].style.color = "#000"
    }
  }

  if (
    document.documentElement.scrollTop < 813 ||
    document.documentElement.scrollTop > 1250
  ) {
    headerTop.classList.remove("header-top-two")
    headerTop.classList.add("header-top")
  }
}

const footerInput = document.querySelector(".footer-input-text")

footerInput.addEventListener("focus", () => {
  footerInput.style.direction = "ltr"
  footerInput.placeholder = " "
})

footerInput.addEventListener("blur", () => {
  footerInput.style.direction = "rtl"
  footerInput.placeholder = "آدرس ایمیل خود را وارد نمایید "
})
