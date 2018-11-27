$(() => {
  checkLoggedout();
  const searchParams = new URLSearchParams(window.location.search)
  const isEdit = searchParams.has('edit')
  const recipeID = searchParams.get('edit');
  const authToken = localStorage.getItem(TOKEN);

  if (isEdit) {
    //retrieve data for this recipe, then populate the fields with it.
    fetch(`/recipes/${recipeID}`,
      {
        headers: {
          "x-auth": authToken,
        }
      }
    ).then(res => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject();
    }).then(body => {
      const recipe = body.recipe;
      $('form').find('.inputs').each(function (index, node) {
        node.value = recipe[node.id];
      });
    })
  }

  $('#recipe-entry').submit(event => {
    event.preventDefault();

    const formData = {};

    $('form').find('.inputs').each(function (index, node) {
      formData[node.id] = node.value;
    });
    $('form').find('.inputs').each(function (index, node) {
      node.value = '';
    });
    console.log(formData)

    const url = isEdit ? `/recipes/${recipeID}` : '/recipes'
    const method = isEdit ? 'PUT' : 'POST'

    fetch(url, {
      headers: {
        "x-auth": authToken,
        "Content-Type": "application/json; charset=utf-8"
      },
      method: method,
      body: JSON.stringify(formData)
    })
      .then(res => {
        if (res.ok) {
          window.location = '/recipe-vault.html'
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
