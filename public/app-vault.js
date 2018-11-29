const recipeTemplate = (id) => `
<div class="events">
<h2 class="recipe-title"></h2>
<div class="recipe-type"></div>
<ul class="recipe-ingredients"></ul>
<div class="recipe-instructions"></div>
<div class="recipe-readyInMinutes"></div>
<div class="recipe-image"></div>
<div class="recipe-servings"></div>
<div class="recipe-source"></div>
<div class="recipe-date">Date: </div>
<div class="recipe-button-wrapper">
<button><a id="edit-button" href="enter-recipe.html?edit=${id}">Edit</a></button>
<button class="delete-button" data-recipe-id="${id}">Delete</button>
</div>
</div>`;


const getDisplayVaultRecipes = () => {
  checkLoggedout()
  const authToken = localStorage.getItem(TOKEN);

  fetch('/recipes', {
    headers: {
      "x-auth": authToken,
    }
  })
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject();
    })
    .then(body => {
      // console.log(body)
      let recipe = body.recipes.map(post => {
        // console.log(post);
        let element = $(recipeTemplate(post._id));
        element.attr('id', post._id);
        element.find('.recipe-title').text(post.title);
        element.find('.recipe-type').text(`Dish type: ${post.dishType}`);
        element.find('.recipe-ingredients').html(post.ingredients);
        element.find('.recipe-instructions').text(post.instructions);
        element.find('.recipe-readyInMinutes').text(`Ready in ${post.readyInMinutes} minutes`);
        element.find('.recipe-image').text(post.image);
        element.find('.recipe-servings').text(`Servings: ${post.servings}`);
        element.find('.recipe-source').text(`Source: ${post.source}`);
        element.find('.recipe-date').text(`Published on: ${new Date(post.created).toDateString()}`);
        return element;
      });
      $('#events-wrapper').html(recipe);

    })

  $('#events-wrapper').on('click', '.delete-button', function (e) {
    let recipeID = $(e.currentTarget).attr('data-recipe-id');
    console.log(recipeID)

    const authToken = localStorage.getItem(TOKEN);

    fetch(`recipes/${recipeID}`, {
      headers: {
        "x-auth": authToken
      },
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) {
          $(`#${recipeID}`).remove()
          console.log(res)
          return
        }
        return Promise.reject();
      })

  });

}

getDisplayVaultRecipes();

