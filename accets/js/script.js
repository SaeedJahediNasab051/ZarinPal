const hamburgerIcon = document.querySelector(".hamburger-icon")
const hamburgerMenu = document.querySelector(".hamburger-menu")
const crossIcon = document.querySelector(".cross-icon")
const showMoreMenu = document.querySelector("#show-more-menu")
const showProductMenu = document.querySelector("#show-product-menu")

const bell = document.querySelector(".bell")
const goDown = document.querySelector(".go-down")


hamburgerIcon.addEventListener("click", function () {
  console.log(hamburgerMenu.style.transform)
  hamburgerMenu.classList.add("show-hamburger-menu")
})

crossIcon.addEventListener("click", function () {
  hamburgerMenu.classList.remove("show-hamburger-menu")
})

showMoreMenu.addEventListener("mouseenter", function (e) {
  const ul = e.target.childNodes[5]
  console.log(e.target.childNodes)
  ul.style.animation = "showUp 0.35s 1"
  ul.style.display = "block"
})

showMoreMenu.addEventListener("mouseleave", function (e) {
  const ul = e.target.childNodes[5]
  ul.style.display = "none"
})

showProductMenu.addEventListener("mouseenter", function (e) {
  const div = e.target.childNodes[5]
  div.style.animation = "showUp 0.35s 1"
  div.style.display = "flex"
})

showProductMenu.addEventListener("mouseleave", function (e) {
  const div = e.target.childNodes[5]
  div.style.display = "none"
})

window.addEventListener("scroll", function () {
  window.pageYOffset
    ? document.getElementById("header").classList.add("sticky")
    : document.getElementById("header").classList.remove("sticky")
})

bell.addEventListener("mouseenter", () => {
  const bellTex = document.querySelector(".bell-tex")
  bellTex.style.opacity = "1"
})

bell.addEventListener("mouseleave", () => {
  const bellTex = document.querySelector(".bell-tex")
  bellTex.style.opacity = "0"
})


goDown.addEventListener("click", () => {
  window.scrollTo({
    top: 720,
    behavior: "smooth",
  })
})



////////////////////////////

