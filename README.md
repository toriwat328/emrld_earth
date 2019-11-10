# EMRLD EARTH APP

## https://emrld-earth.herokuapp.com/

### Languages/Technologies/Methodologies Used In Creating This App:
HTML, CSS,  Materialize, JavaScript, JQuery, Heroku, MongoDB Atlas, Mongoose, Express, NodeJS, EJS, CRUD, 7 RESTFUL routes, MVC, BCRYPT for Encryption, Authorization

### BACKGROUND
I was inspired to make this full-stack app after seeing Greta Thunberg on TV advocating for fighting climate change. 
It is such a big issue that you almost feel helpless in trying to solve it, but the important thing to note is that if we all do something small daily, we can make a big impact. 
I created EMRLD EARTH as a way to help people track how they are contributing to fighting change so that they can see a tangible impact - even if its just recycling!

### EMRLD EARTH - USER STORIES 
##### Sign Up
* Users should be able to sign up, and log in taking them to their customized dashboard 

##### Carbon Emissions Calculator 
* Users can go to the Carbon Emissions Calculator to understand where they are compared to the US average in CO2 emmissions.
  * Users enter their estimated monthly bill amount per person for Natural Gas, Electricity, Fuel Oil and Propane.
  * When User clicks submit on the form, their information is pushed to their user collection as a sub-document. 
    * On submit, page reloads in order to calculate the new information that was submitted. 
  * At the bottom of the page, the user will see their carbon emissions (calculated by using formulas/factors by EPA.gov)
  
##### EMRLD EARTH 50 Tips
* Users can go to the earth tips page to see 50 tips on how you can incorporate earth friendly habits in your daily routine.
    * These tips are seperated by category: In Your Home, On Your Table, Along Your Commute, In Your Neighborhood. (Tips are from a Curbed Article)
    * I programmatically added them on the page by categorizing each tip and putting them into objects in an array as seed data.
    * On page load, the tips are loaded, each with a button where you can add the tip to your reminders (todo) list. 
    * On click of the 'add to reminders list' button. The individual object is pushed to the todo document as a sub-document and sorted based on the category of the tip/todo.
    
##### Reminders 
* This is where the 7 RESTFUL ROUTES come into play. Users can create new todo items, add from the earth tips list, edit them and delete them.
* I wanted to have a way for users to visually track their programs in tackling their climate change goals. 
  * When a user edits a todo item as complete, the Tracker page is updated.
  
##### Tracker
* For the tracker, when a user lands on the page, the tracker checks to see what todo items are checked or true. 
  * Based on this, I utilized JavaScript and JQuery to push the checked items in an empty array. 
  * For each checked item in the array, a div's background color is updated simulating a visual tracker.
  
### STRUGGLES:

* The initial struggles for me was understanding sub-documents and how they relate to documents since we did not learn this in class. I had to research on my own to figure it out and now I feel very comfortable with it. 
* Another struggle was getting the carbon calculator to work. Since, when a user makes an account, there are no documents in the footprint property, a user would get an error when they get to that page because the formulas count on their being sub-documents within the footprint document.
  * A solution that I though of was pushing inital data into that document on user sign up since that only happens once. That way after sign up, a user can immediately go to the calculator and use it. If i placed this any other place, the initial data would push every time that action occurred which would mess up the formulas.
  
### WHAT I WOULD LIKE TO ADD:
* Smaller features that would make the app more professional like an about page explaining the app. 
* Add to the carbon calculator to add Transportation and Waste factors that account for additional CO2 emmissions.
* Create modals or notifications that reminds a user to interact with the app and create more todos. 
* Also add to the user collection to add levels of membership (have a premium version to the app where users with premium tier they have access to features that standard users don't.


  
