const eventTemplate = (id) => `
<div class="event-entry-overlay">
<div class="events">
<h2 class="event-title"></h2>
<div class="event-description"></div>
<div class="recipe-button-wrapper">
<button><a id="edit-button" href="home-auth.html?edit=${id}" event-id="${id}">Edit</a></button>
<button class="delete-button" event-id="${id}">Delete</button>
<button class="join-room-button" event-id="${id}">Join</button>
</div>
</div>
`;

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
        element.find('.event-description').text(event.description);
        return element;
      });
      $('#events-wrapper').html(event);

    })

  $('#events-wrapper').on('click', '.delete-button', function (e) {
    let eventID = $(e.currentTarget).attr('event-id');
    console.log(eventID)

    // const authToken = localStorage.getItem(TOKEN);

    fetch(`events/${eventID}`,
      {
        // headers: {
        //   "x-auth": authToken
        // },
        method: 'DELETE'
      }
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

