var personnel;
var roles;
var apiURL = "https://secure-eyrie-78012.herokuapp.com";

$(document).ready(function(){
    attachHandlers();
    fetchRoles().then(function(result){
        roles = result;
        populateRoleDropdown();
    });
    $(".role-preview").attr("src", [apiURL, "images", "placeholder.jpg"].join("/"));
});

function attachHandlers(){
    $(".save").click(function(event){
        event.preventDefault();
        saveData().then(function(message){
            updateSaveMessage(message);
        });
    });
    $("#role-input").change(function(){
        changePicture(getRole($(this).val()));
    });
}

function populateRoleDropdown(){
    rolesOptions = [];
    for (var i = 0, rolesLength = roles.length; i < rolesLength; i++){
        rolesOptions.push(new roleOption(roles[i]));
    }
    $("#role-input").append(rolesOptions);    
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

    return false;
}

function fetchRoles(){
    return new Promise (function(resolve, reject){
        var endpoint = [apiURL, "roles"].join("/");
        $.get(endpoint, function(result){
            resolve(result);
        });
    });
}

function roleOption(role){
    var option = document.createElement("option");
    option.value = role.id;
    var textNode = document.createTextNode(role.label);
    option.appendChild(textNode);
    return option;
}

function getFormData(){
    var firstName = $("#first-name-input").val();
    var lastName = $("#last-name-input").val();
    var role = $("#role-input").val();

    return {
        firstName: firstName,
        lastName: lastName,
        role: role
    };
}

function changePicture(role){
    var imageURL = [apiURL, "images", role.imageURL].join("/");
    $(".role-preview").attr("src", imageURL);
}

function saveData(){
    return new Promise(function(resolve, reject){
        var endpoint = [apiURL, "users"].join("/");
        $.post(endpoint, getFormData(), function(response){
            resolve(response.message);
        });
    });
}

function updateSaveMessage(message){
    var saveStatusElement = $(".save-status");
    saveStatusElement.text(message);
    saveStatusElement.fadeIn(500).delay(2000).fadeOut(500);
}
