var price = 100;
var yourPrice = prompt("Summani kiriting").trim();
var bodyText = document.createElement("h1");
bodyText.style.color = "white";
bodyText.style.fontWeight = "bold";
bodyText.style.textAlign = "center";


if(yourPrice >= price) {
  document.body.style.backgroundColor = "lightgreen";
  bodyText.textContent = "mablag'ingiz yetarli rahmat!";
  document.body.append(bodyText);
} else{
  document.body.style.backgroundColor = "red";
  bodyText.textContent = "mablag'ingizda yetarli summa mavjud emas uzur!";
  document.body.append(bodyText);
}
