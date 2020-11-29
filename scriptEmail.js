//console.log("Scripti toimii");

const emailnappi = document.querySelector('.lahetanappi');

emailnappi.addEventListener('click', e => {
  e.preventDefault();
  sendJSON();
});

function sendJSON(){
  let xhr = new XMLHttpRequest();
  let url = "https://salpausemail.azurewebsites.net/api/HttpTriggerCSharp1?code=lWOELqiU07AqsBviOQYzuNIrQP7xoV7NV7C5W2ctgjIRcf7nXE2biw==";

  xhr.open("POST", url, true);

  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
      console.log("valmis, yhteys toimii");
    }
  };
  var data = JSON.stringify({
    "EmailMsg": "Tähän tulee postin sisältö",  //Kirjoittaa sisällön 
    "EmailAddress": "mira.vorne@salpaus.fi", //viestin kirjoittajan sähköposti
    "EmailTo": "mira@miravorne.fi", //oma sähköpostisi!!!!
    "EmailName": "Teppo Tyyppi" //Nimi-kentän sisältö
  });
  xhr.send(data);
}