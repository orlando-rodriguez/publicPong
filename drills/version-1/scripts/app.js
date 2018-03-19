
const url = 'https://quiet-bayou-99554.herokuapp.com/api/v1/contacts'
const charactersList = document.querySelector('#characters')

fetch(url)
    .then((response) => response.json())
    .then((characters) => {
      let characterArray = characters.data
      characterArray.map(function (character) {
        let li = createNode('li'),
            img = createNode('img'),
            p = createNode('p'),
            a = createNode('a'),
            span = createNode('span')
            img.src = character.imageURL
            a.textContent = `Leave ${character.name} a message`
            a.href = `contact.html?character=${character.name}`
            span.textContent = `${character.name} ${character.phone}`
            p.textContent = `${character.message}`
            appendNode(charactersList, li)
            appendNode(li, img)
            appendNode(li, span)
            appendNode(li, a)
            appendNode(li, p)
      })
    })
    .catch(function(err) {
      console.log(err.message);
    });

function createNode (element) {
  return document.createElement(element)
}

function appendNode (parent, element) {
  return parent.appendChild(element)
}
