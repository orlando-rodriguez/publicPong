let roles;
const apiURL = "https://secure-eyrie-78012.herokuapp.com";

attachHandlers();
fetchRoles().then(function(result){
    roles = result;
    populateRoleDropdown();
});
document.querySelector(".role-preview").src = [apiURL, "images", "placeholder.jpg"].join("/");

function attachHandlers(){
    document.querySelector(".save").addEventListener("click", function(event){
        event.preventDefault();
        saveData().then(function(message){
            updateSaveMessage(message);
        });
    });
    document.querySelector("#role").addEventListener("change", function(event){
        changePicture(getRole(event.target.value));
    });
}

function populateRoleDropdown(){
    roles.map(role => new roleOption(role)).forEach($role => {
        document.querySelector("#role").appendChild($role);
    });
}

function getRole(id){
    return findById(roles, id);
}

function findById(collection, id){
    for (var i = 0, collectionLength = collection.length; i < collectionLength; i++){
        if (collection[i].id == id){
            return collection[i];
        }
    }
    return {};
}

function fetchRoles(){
    return fetch(`${apiURL}/roles`).then(response => response.json());
}

function roleOption(role){
    var option = document.createElement("option");
    option.value = role.id;
    var textNode = document.createTextNode(role.label);
    option.appendChild(textNode);
    return option;
}

function getFormData(){
    const data = new FormData(document.querySelector("form"));
    return {
        firstName: data.get("first-name"),
        lastName: data.get("last-name"),
        role: data.get("role")
    };
}

function changePicture(role){
    document.querySelector(".role-preview").src = `${apiURL}/images/${role.imageURL}`;
}

function saveData(){
    return fetch(`${apiURL}/users`, {
        method: "POST",
        headers: new Headers({
            "Content-Type": "application/json"
        }),
        body: JSON.stringify(getFormData())
    }).then(response => response.json())
    .then(response => response.message)
    .catch(console.error);
}

function updateSaveMessage(message){
    var $status = document.querySelector(".save-status");
    $status.textContent = message;
    setTimeout(()=>{
        $status.textContent = "";
    }, 4000);
}
