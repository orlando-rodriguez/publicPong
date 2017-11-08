# Galvanize Personnel

You are making an app for your new company that assigns roles to employees. You'll need to:

* Build a form
* Read a list from an external URL
* Read values from a text input and a drop down
* Send form data to an external URL
* Respond to change events
* Manipulate the DOM
* Respond to callbacks
* Deploy to a public URL

## Steps

1. In the `index.html` file create a form that includes:
    * A first name input (with a label)
      * When the form loads, the user's focus should automatically start in this input field
    * A last name input (with a label)
    * A drop-down menu for roles (with a label and a disabled placeholder that says "Select an option here")
    * An 275px by 275px image from [placehold.it](https://placehold.it) as a placeholder, with the css class "role-preview"
      * For accessibility, add a descriptive `alt` tag
    * A submit button with the class "save" and text of "Save"
    * An empty paragraph with the class "save-status"
    * When finished, your form should look like this:

        ![](./mockups/a_no_bs.png)

1. Using the included `./assets/scripts/app.js` file, add the following behavior:
    * Dynamically generate the option list of roles by making a GET request to the following API endpoint:
      * STRETCH: first sort the roles by title, then generate the option list

        ```
        https://galvanize-student-apis.herokuapp.com/gpersonnel/roles
        ```

    * Whenever the role is changed, the image should be updated with the `img` of that role.
    * Whenever the save button is clicked, *the default behavior should be prevented*, and a POST request should be made to the following API endpoint:

        ```
        https://galvanize-student-apis.herokuapp.com/gpersonnel/users
        ```

    * The format of the body for the POST request should be:

      ```js
      {
        firstName: 'First',
        lastName: 'Last',
        role: 'Selected Role'
      }
      ```
    * No key or value in the POST body can be empty and the role must match one of the roles returned from the initial API call.
    * When the result of the `POST` from the save button returns, you should display the resulting `message` in a paragraph with the `.save-status` class
      * You will need to `show` the `.save-status` paragraph after setting the message.
      * The message should be faded in over 500ms
      * Display the message for 2000ms
      * Fade out the message over 500ms.
    * When finished, your form should be able to do this: ![Filled out form](./mockups/b_no_bs.png)

1. Valid `POST` requests will return a message of `Success!`. Invalid messages will return `Not quite.`.

## Deploy!

1. Deploy to firebase and add the deployed URL to this readme.
1. Make a pull request!
