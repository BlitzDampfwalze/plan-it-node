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
<div class="user-name"></div>
<div class="task-name"></div>
<div class="completed"></div>
<div class="task-button-wrapper">
<button><a id="edit-button" href="home-auth.html?edit=${id}" task-id="${id}">Edit</a></button>
<button class="delete-button" task-id="${id}">Delete</button>
</div>
</div>
`;

const getDisplayTasks = () => {

  // checkLoggedout()
  // const authToken = localStorage.getItem(TOKEN);

  fetch('/tasks',
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
      console.log(body)
      let task = body.tasks.map(task => {
        console.log(task);
        let element = $(taskTemplate(task._id));
        element.attr('id', task._id);
        element.find('.user-name').text(task.userName);
        element.find('.task-name').text(task.taskName);
        element.find('.completed').html(task.completed);
        return element;
      });
      $('.user-tasks-wrapper').html(task);

    })

  $('.user-tasks-wrapper').on('click', '.delete-button', function (e) {
    let taskID = $(e.currentTarget).attr('task-id');
    console.log(taskID)

    // const authToken = localStorage.getItem(TOKEN);

    fetch(`recipes/${recipeID}`, {
      // headers: {
      //   "x-auth": authToken
      // },
      method: 'DELETE'
    })
      .then(res => {
        if (res.ok) {
          $(`#${taskID}`).remove()
          console.log(res)
          return
        }
        return Promise.reject();
      })

  });

}

getDisplayTasks();