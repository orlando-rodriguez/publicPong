# Stranger Things Telephone

You are making an app that shows characters from _Stranger Things_ and allows the user to send a character a message

You'll need to:
* Read a list of characters and their info from an external URL
* Read values from a text input and textarea
* Send form data to an external URL
* Deploy to a public URL

## Steps

1. Using the included `app.js` file, make a `GET` request using the fetch API to the URL `https://quiet-bayou-99554.herokuapp.com/api/v1/contacts`. Once you have the data, add the following elements to the `index.html` file. (Note: the styles are done for you.)
* An `li` for each character that includes:
  * An `img` tag that renders the character's image
  * A `span` tag that displays the character's name and phone number
  * A `p` tag that displays the character's Message
  * An `a` tag that
* When finished, your home page should look like this: ![Home Page](assets/home-page.png)

1. Using the included `contact.html` file, create a form that includes:
    * A name input (with a label)
    * A textarea (with a label)
    * A save button with the class "save"
    * When finished, your form should look like this: ![Basic form](assets/galvanize_personnel_1.png)
1. Using the included `form.js` file, add the following behavior
    * The list of roles in the dropdown menu should be pulled from [this API]("https://secure-eyrie-78012.herokuapp.com/roles") and appended to your drop-down
    * Whenever the role is changed, the image should be updated with the `imageURL` of that role
    * Whenever the save button is clicked, *the default behavior should be prevented*, and the form values should be `POST`ed to `https://secure-eyrie-78012.herokuapp.com/roles` in the following format:
        * `{firstName: "Kyle", lastName: "Coberly", role: 1}`
    * When the result of the `POST` from the save button returns, you should display the resulting `message` should be faded in over 500ms to the `.save-status` paragraph, displayed for 2000ms, and faded out over 500ms.
    * When finished, your form should be able to do this: ![Filled out form](assets/galvanize_personnel_2.png)
1. If you do it right, the following combinations should return `Success!`
    * Kyle Coberly, Assassin
    * Danny Fritz, Commando
    * Roberto Ortega, Commando
    * Elana Kopelevich, Siren
    * All other combinations should return `Not quite.`
