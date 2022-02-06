const abPackage = document.getElementById("about-package")
const abText = document.getElementById("about-text")
const abImage = document.getElementById("about-image")
const abButton = document.getElementById("about-button")

const tx = [
  "Campus：香川大学",
  "Hobby：テニス",
  "Favorite：甘いもの",
  "Name：松下将也",
]
const im = [
  "./Images/CampusImage.jpg",
  "./Images/TennisImage.jpg",
  "./Images/SweetsImage.jpg",
  "./Images/MeImage.jpg",
]
const al = [
  "大学の写真です。",
  "テニスの写真です。",
  "スイーツの写真です。",
  "私の写真です。",
]
const cl = ["my-name", "my-campus", "my-hobby", "my-favorite"]

const displayContent = function (n) {
  abText.textContent = tx[n]
  abImage.src = im[n]
  abImage.alt = al[n]
  abPackage.className = cl[n + 1]
}

const changeAbout = function () {
  if (abPackage.classList.contains(cl[0])) {
    displayContent(0)
  } else if (abPackage.classList.contains(cl[1])) {
    displayContent(1)
  } else if (abPackage.classList.contains(cl[2])) {
    displayContent(2)
  } else if (abPackage.classList.contains(cl[3])) {
    displayContent(3)
    abPackage.className = cl[0]
  }
}

let opa = 1
let fadeOutId = null
let fadeInId = null

abButton.onclick = function () {
  fadeOutId = setInterval(fadeOut, 10)
}
const fadeOut = function () {
  opa -= 0.1
  abText.style.opacity = opa
  abImage.style.opacity = opa
  if (opa <= 0.2) {
    changeAbout()
    fadeInId = setInterval(fadeIn, 10)
    clearInterval(fadeOutId)
  }
}
const fadeIn = function () {
  opa += 0.1
  abText.style.opacity = opa
  abImage.style.opacity = opa
  if (opa >= 1) {
    clearInterval(fadeInId)
  }
}

const targetTitle = document.querySelectorAll(".section-title")
const targetContent = document.querySelectorAll(".section-content")

document.addEventListener("scroll", function () {
  for (let i = 0; i < targetTitle.length; i++) {
    const getElementDistance = targetTitle[i].getBoundingClientRect().top
    if (getElementDistance < 500) {
      targetTitle[i].classList.add("animation")
      targetContent[i].classList.add("show")
    }
  }
})
