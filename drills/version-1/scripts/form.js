(function initializePage(){
    populateName(new URL(location).searchParams.get("character"));
    document.querySelector("form").addEventListener("submit", formSubmissionHandler);
})();

function populateName(name){
    $nameInput = document.querySelector("#character");
    $nameInput.value = name;
}

function formSubmissionHandler(event){
    event.preventDefault();

    const apiUrl = "https://quiet-bayou-99554.herokuapp.com/api/v1/contacts";
    const data = new FormData(event.target);
    fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify({
            data: {
                character: data.get("character"),
                message: data.get("message")
            }
        }),
        headers: new Headers({"Content-Type": "application/json"})
    }).then(response => response.json())
    .then(responseToStatus);
}

function responseToStatus(response){
    response.error ? displayStatus(response.error.message) : displayStatus(response.data.message);
}

function displayStatus(status){
    document.querySelector("#status").textContent = status;
}
