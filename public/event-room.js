const taskTemplate = (id) => `
<div class="event-entry-overlay">
<div class="events">
<div class="user-name"></div>
<div class="task-name"></div>
<div class="completed"></div>
<div class="task-button-wrapper">
<button><a id="edit-button" href="event-room.html?edit=${id}" task-id="${id}">Edit</a></button>
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
      // console.log(body)
      let task = body.tasks.map(task => {
        // console.log(task);
        let element = $(taskTemplate(task._id));
        element.attr('id', task._id);
        // element.find('.user-name').text(task.username);
        element.find('.task-name').text(task.taskDetails);
        element.find('.completed').html(task.completed);
        return element;
      });
      $('.user-tasks-wrapper').html(task);

    })

  $('.user-tasks-wrapper').on('click', '.delete-button', function (e) {
    let taskID = $(e.currentTarget).attr('task-id');
    console.log(taskID)

    // const authToken = localStorage.getItem(TOKEN);

    fetch(`tasks/${taskID}`, {
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