# Stranger Things Telephone

You are making an app that shows some characters from _Stranger Things_ and allows the user to send a character a message.

You'll need to:
* Read a list of characters and their info from an external URL
* Read values from a text input and textarea
* Send form data to an external URL
* Deploy to a public URL

## Instructions

1. Using the included `app.js` file, make a `GET` request to the URL `https://quiet-bayou-99554.herokuapp.com/api/v1/contacts`.

Once you have the data, add the following elements to the `index.html` page. Please note that the styles are done for you. 😀
* An `li` for each character that includes:
  * An `img` tag that renders the character's image
  * A `span` tag that displays the character's name and phone number
  * A `p` tag that displays the character's Message
  * An `a` tag that says 'Leave `${character.name}` a message' and when clicked takes the user to the `contact.html` page. Add a query string that has a `character` key set to the character's name.
* When finished, your home page should look like this:

![Home Page](assets/home-page.png)

2. Using the included `contact.html` file,
    * Create a form that includes:
        * A name input (with the label 'name')
        * A textarea (with the label 'message')
        * A submit button with the label "Send Message"
        * When finished, your form should look like this:
    * Add an empty `p` tag to display response message in

![Contact Page](assets/contact-page.png)

3. Using the included `form.js` file
    * Populate the `name` input with the value from the `character` key in the query string
    * Add the following behavior when the submit button is clicked:
        * The form values should be `POST`ed to `https://quiet-bayou-99554.herokuapp.com/api/v1/contacts` in the following format:
        ```json
        {
            "data": {
                "character": "Joyce",
                "message": "Chill out."
            }
        }
        ```
        * The `Content-Type` of the response should be the appropriate headers for a `JSON` string
4. If you properly format the data and send it using a `POST` request, you should see "Message received!". If it doesn't work, you will see an error message.
5. Deploy your app and put a link to it [here](#)
