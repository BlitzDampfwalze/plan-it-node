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