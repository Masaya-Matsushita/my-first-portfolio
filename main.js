const abPackage = document.getElementById("about-package")
const abText = document.getElementById("about-text")
const abImage = document.getElementById("about-image")
const abButton = document.getElementById("about-button")

abButton.onclick = function () {
  if (abPackage.classList.contains("my-name")) {
    abText.textContent = "Campus：香川大学"
    abImage.src = "./Images/CampusImage.jpg"
    abImage.alt = "大学の写真です。"
    abPackage.className = "my-campus"
  } else if (abPackage.classList.contains("my-campus")) {
    abText.textContent = "Hobby：テニス"
    abImage.src = "./Images/TennisImage.jpg"
    abImage.alt = "テニスの写真です。"
    abPackage.className = "my-hobby"
  } else if (abPackage.classList.contains("my-hobby")) {
    abText.textContent = "Favorite：甘いもの"
    abImage.src = "./Images/SweetsImage2.jpg"
    abImage.alt = "スイーツの写真です。"
    abPackage.className = "my-favorite"
  } else if (abPackage.classList.contains("my-favorite")) {
    abText.textContent = "Name：松下将也"
    abImage.src = "./Images/MeImage.jpg"
    abImage.alt = "私の写真です。"
    abPackage.className = "my-name"
  }
}

// onclick時の内容書き換える
// 配列&関数でリファクタリングする
