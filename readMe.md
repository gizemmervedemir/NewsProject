iconButton.js :

  Step 1: Write a function named 'IconButton' that will create and return the HTML button structure below.

  <button class="btn btn-{btnColor}">
    <i class="{iconClass}" />
    {btnText}
  </button>

  The 'IconButton' function will take 3 arguments: 
  - btnText: text inside the button
  - btnColor: background color of the button [ blue | orange | can take [red] values
  - iconClass: FontAwesome library icon class name 

Step 2: Create the following buttons using this function: 

    1. { btnText: "Open", btnColor: "blue", iconClass: "fa fa-folder-open" }
    2. { btnText: "Edit", btnColor: "orange", iconClass: "fa fa-pen" }
    3. { btnText: "Delete", btnColor: "red", iconClass: "fa fa-trash" }

Step 3: Add the buttons you created into div#icon-buttons

card.js :
  Step 1: Write a function named 'card' that will create the following HTML structure for the Card component.

      <div class="card">
        <img src="{imgURL}" />
        <h2>{header}</h2>
        <hr />
        <div class="card-content">
          <p>
            {paragraph}
          </p>
          <a href="{navigationURL}">More...</a>
        </div>
      </div>

  The 'card' function will take 4 arguments: 
  - imgURL: img URL information to be displayed in the card
  - header: card title
  - paragraph: card description text
  - navigationURL: The URL to which the Continue link will direct

  Step 2: Create a card component for each record in the cardList array using this function: 

  Step 3: Add the card components you created into div.container

news.js:

  Step 1: Create a component called 'HaberMaker' to create news.
  Your component will be a function that takes a news object as an argument,
  and it will return and create a DOM node that looks like this:
  
  <div class="article">
    <h2>{news title}</h2>
    <p class="date">{news date}</p>
  
    {three separate paragraph elements}
  
    <button class="expandButton">+</button>
  </div>
  
  Step 2: We are still inside the `NewsMaker` function, add a click event listener to button.expandButton.
  This listener will add/remove (toggle) the 'article-open' class to the div.article element.
  
  Step 3: Don't forget to return an element from your function.
  
  
  Step 4: Loop the data containing all the news outside your function. 
  Create a div.article element using the 'HaberYapici' component you wrote and add it to the div.articles node in the DOM. (see index.html).
  
  
  Step 5: For the news above, try adding a technology news you find to the array named data. Make sure that it has the same structure as other news objects.

  menu.js:

  Step 1: Write a component called 'MenuBuilder' to create a menu containing the news headlines in the array named menuelements.
  This 'MenuBuilder' function will take the array of menu elements as a single argument and return an item with the following structure.
  
  <div class="menu">
    <ul>
      {all menu elements inside <li>}
    </ul>
  </div>
  
  Step 2: Inside the function, loop using the array as argument and add a list item(<li>) to <ul>
  
  Step 3: We are still inside the function, select the menu button from the DOM (element with `menu-button` class in `index.html`) and add a `click` event listener to it. Each time the button is clicked, `menu--open` will be added/toggled to the div.menu class (the div with the 'menu' class).
  
  Step 4: Don't forget to return the div.menu created in the 'MenuBuilder' function.
  
  Step 5: Create the menu using the 'MenuConstructor' function and the 'menuElemenlari' array, and add the returned menu to the div with the header class.
  
  