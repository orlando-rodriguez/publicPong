let char = document.getElementById('character');
char.value = document.location.search.split("=")[1]


const url = 'https://quiet-bayou-99554.herokuapp.com/api/v1/contacts'
const button = document.querySelector('.submit')

button.addEventListener('click', function(event){
  event.preventDefault()
  fetch(url, {
    method: "POST",
    headers: new Headers({
      "content-type":
      "application/json"
    }),
    body: JSON.stringify({
      "data": {
        "character": "Joyce",
        "message": "Chill out."
        }
    })
  })
  .then(function(response){
    return response.json()
  })
  .then(function(response) {
    console.log(response)
  })

})
