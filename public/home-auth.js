const eventTemplate = (id) => `
<div class="vault-recipes">
<h2 class="event-title"></h2>
<div class="event-description"></div>
<div class="recipe-button-wrapper">
<button><a id="edit-button" href="enter-recipe.html?edit=${id}">Edit</a></button>
<button class="delete-button" event-id="${id}">Delete</button>
</div>`;

// <div class="recipe-type"></div>
// <ul class="recipe-ingredients"></ul>
// <div class="recipe-instructions"></div>
// <div class="recipe-readyInMinutes"></div>
// <div class="recipe-image"></div>
// <div class="recipe-servings"></div>
// <div class="recipe-source"></div>
// <div class="recipe-date">Date: </div>


const getDisplayEvents = () => {
  // checkLoggedout()
  // const authToken = localStorage.getItem(TOKEN);

  fetch('/events', 
  // {
  //   headers: {
  //     "x-auth": authToken,
  //   }
  // }
  )
    .then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject();
    })
    .then(body => {
      let event = body.events.map(event => {
        let element = $(eventTemplate(event._id));
        element.attr('id', event._id);
        element.find('.event-title').text(event.title);
        element.find('event-description').text(event.description);
        // element.find('.recipe-type').text(`Dish type: ${event.dishType}`);
        // element.find('.recipe-ingredients').html(event.ingredients);
        // element.find('.recipe-instructions').text(event.instructions);
        // element.find('.recipe-readyInMinutes').text(`Ready in ${event.readyInMinutes} minutes`);
        // element.find('.recipe-image').text(event.image);
        // element.find('.recipe-servings').text(`Servings: ${event.servings}`);
        // element.find('.recipe-source').text(`Source: ${event.source}`);
        // element.find('.recipe-date').text(`Published on: ${new Date(event.created).toDateString()}`);
        return element;
      });
      $('#events-wrapper').html(event);

    })

  $('#events-wrapper').on('click', '.delete-button', function (e) {
    let eventID = $(e.currentTarget).attr('event-id');
    console.log(eventID)

    const authToken = localStorage.getItem(TOKEN);

    fetch(`events/${eventID}`, 
    // {
    //   headers: {
    //     "x-auth": authToken
    //   },
    //   method: 'DELETE'
    // }
    )
      .then(res => {
        if (res.ok) {
          $(`#${eventID}`).remove()
          console.log(res)
          return
        }
        return Promise.reject();
      })

  });

}

getDisplayEvents();

