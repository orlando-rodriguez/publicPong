const API_URL = 'https://quiet-bayou-99554.herokuapp.com/api/v1/contacts';

var form = document.getElementById("message-form");
var nameElement = document.getElementById('txt-name');
var messageElement = document.getElementById('msg');
var submitButton = document.getElementById('submit-btn')

submitButton.onclick = function(event) {
  event.preventDefault()
  let name = nameElement.value;
  let message = messageElement.value
  let voiceMail = {
    "name": name,
    "message": message
  };
  fetch(API_URL, {
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(voiceMail)
    })
    .then((response) => {
      console.log(response.status);
    });
  form.reset()
}
