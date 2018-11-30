$(() => {
  // checkLoggedout();
  const searchParams = new URLSearchParams(window.location.search)
  const inRoom = searchParams.has('room')
  const roomID = searchParams.get('room');
  // const authToken = localStorage.getItem(TOKEN);

  if (inRoom) {
    console.log(inRoom, roomID)
    //retrieve data for this recipe, then populate the fields with it.
    // fetch(`/events/${roomID}`,
    //   // {
    //   //   headers: {
    //   //     "x-auth": authToken,
    //   //   }
    //   // }
    // ).then(res => {
    //   if (res.ok) {
    //     return res.json()
    //   }
    //   return Promise.reject();
    // }).then(body => {
    //   const event = body.event;
    //   $('form').find('.inputs').each(function (index, node) {
    //     node.value = event[node.id];
    //   });
    // })
  }

  // $('#event-entry').submit(event => {
  //   event.preventDefault();

  //   const formData = {};

  //   $('form').find('.inputs').each(function (index, node) {
  //     formData[node.id] = node.value;
  //   });
  //   $('form').find('.inputs').each(function (index, node) {
  //     node.value = '';
  //   });
  //   console.log(formData)

  //   const url = inRoom ? `/events/${roomID}` : '/events'
  //   const method = inRoom ? 'PUT' : 'POST'

  //   fetch(url, {
  //     headers: {
  //       // "x-auth": authToken,
  //       "Content-Type": "application/json; charset=utf-8"
  //     },
  //     method: method,
  //     body: JSON.stringify(formData)
  //   })
  //     .then(res => {
  //       if (res.ok) {
  //         window.location = '/home-auth.html'
  //         return
  //       }
  //       return Promise.reject('INCOMPLETE FIELD - Please fill in all fields');
  //     })
  //     .catch(err => {
  //       window.alert(err);
  //     }
  //     )


  // })

})

const taskTemplate = (id) => `
<div class="event-entry-overlay">
<div class="events">
<h2 class="event-title"></h2>
<div class="event-description"></div>
<div class="recipe-button-wrapper">
<button><a id="edit-button" href="home-auth.html?edit=${id}" event-id="${id}">Edit</a></button>
<button class="delete-button" event-id="${id}">Delete</button>
<button><a class="join-room-button" href="event-room.html?room=${id}" event-id="${id}">Join</a></button>
</div>
</div>
`;

const getDisplayTasks = () => {

  
}