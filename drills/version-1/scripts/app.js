(function initializePage(){
    const apiUrl = "https://quiet-bayou-99554.herokuapp.com/api/v1/contacts";
    fetch(apiUrl)
        .then(response => response.json())
        .then(response => response.data)
        .then(data => data.forEach(buildCharacter));
})();

function buildCharacter(character){
    const $li = document.createElement("li");
    const $elements = [
        buildImage(character.imageURL, character.name),
        buildNameplate(character.name, character.phone),
        buildMessage(character.message),
        buildLink(character.name)
    ].forEach($element => $li.appendChild($element));

    document.querySelector("#characters").appendChild($li);
}

function buildImage(imageUrl, altText){
    const $image = document.createElement("img");
    $image.src = imageUrl;
    $image.alt = altText;
    return $image;
}

function buildNameplate(name, phoneNumber){
    return buildElement("span", `${name} - ${phoneNumber}`);
}

function buildMessage(message){
    return buildElement("p", message);
}

function buildLink(name){
    const $a = buildElement("a", `Leave ${name} a message`);
    $a.href = `contact.html?character=${name}`;
    return $a;
}

function buildElement(tagName, text){
    const $element = document.createElement(tagName);
    const $text = document.createTextNode(text);
    $element.appendChild($text);
    return $element;
}
