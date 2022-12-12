const btn = document.getElementById("calculate");

btn.addEventListener("click", function () {
  let height = document.querySelector("#height").value;
  let weight = document.querySelector("#weight").value;

  if (height == "" || weight == "") {
    alert("Veuillez remplir les champs de saisie !");
    return;
  }

  // BMI = weight in KG / (height in m * height in m)

  height = height / 100;

  let BMI = weight / (height * height);

  BMI = BMI.toFixed(2);

  document.querySelector("#result").innerHTML = BMI;

  let status = "";

  if (BMI < 18.5) {
    status = "Insuffisance pondérale (maigreur)";
  }
  if (BMI >= 18.5 && BMI < 25) {
    status = "Corpulence normale";
  }
  if (BMI >= 25 && BMI < 30) {
    status = "Surpoids";
  }
  if (BMI >= 30 && BMI < 35) {
    status = "Obésité modérée";
  }
  if (BMI >= 35 && BMI < 40) {
    status = "Obésité sévère";
  }
    if (BMI >= 40) {
        status = "Obésité morbide ou massive";
    }

  document.querySelector(
    ".comment"
  ).innerHTML = `Votre situation : <span id="comment">${status}</span>`;
});
