$(() => {
  // checkLoggedout();
  const searchParams = new URLSearchParams(window.location.search)
  const isEdit = searchParams.has('edit')
  const taskID = searchParams.get('edit');
  // const authToken = localStorage.getItem(TOKEN);

  if (isEdit) {
    //retrieve data for this recipe, then populate the fields with it.
    fetch(`/tasks/${taskID}`,
      // {
      //   headers: {
      //     "x-auth": authToken,
      //   }
      // }
    ).then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject();
    }).then(body => {
      const task = body.task;
      $('#task-entry').find('.inputs').each(function (index, node) {
        node.value = task[node.id];
      });
    })
  }

  $('#task-entry').submit(task => {
    task.preventDefault();

    const formData = {};

    $('#task-entry').find('.inputs').each(function (index, node) {
      formData[node.id] = node.value;
    });
    $('#task-entry').find('.inputs').each(function (index, node) {
      node.value = '';
    });
    console.log(formData)

    const url = isEdit ? `/tasks/${taskID}` : '/tasks'
    const method = isEdit ? 'PUT' : 'POST'
    console.log("url", url, "method", method)
    fetch(url, {
      headers: {
        // "x-auth": authToken,
        "Content-Type": "application/json; charset=utf-8"
      },
      method: method,
      body: JSON.stringify(formData)
    })
      .then(res => {
        if (res.ok) {
          window.location = '/event-room.html'
          return
        }
        return Promise.reject('INCOMPLETE FIELD - Please fill in all fields');
      })
      .catch(err => {
        window.alert(err);
      }
      )


  })
})
