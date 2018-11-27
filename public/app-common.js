const logout = () => {
  const authToken = localStorage.getItem(TOKEN);

  fetch('/users/me/token', {
    headers: {
      "x-auth": authToken,
    },
    method: 'DELETE'
  })
    .then(res => {
      if (res.ok) {
        localStorage.removeItem(TOKEN);
        window.location = '/index.html'
        return
      }
      return Promise.reject();
    })
};

const checkLoggedin = () => {
  const authToken = localStorage.getItem(TOKEN);
  if (!authToken) {
    $('.hidden').show();
    $('#logout').remove();
    return
  }

  fetch('/users/me', {
    headers: {
      "x-auth": authToken,
    }
  })
    .then(res => {
      if (res.ok) {
        $('.hidden').hide();
        $('.signup-login-nav').append('<div class="logout" onclick="logout()">Log-out</div>')
        return
      }
    })

}

const userCheckLoggedin = () => {
  const authToken = localStorage.getItem(TOKEN);
  if (!authToken) {
    return
  }

  fetch('/users/me', {
    headers: {
      "x-auth": authToken,
    }
  })
    .then(res => {
      if (res.ok) {
        window.location = '/recipe-vault.html'
        return
      }
    })
};

const checkLoggedout = () => {
  const authToken = localStorage.getItem(TOKEN);
  if (!authToken) {
    window.location = '/user.html'
    return
  }

  fetch('/users/me', {
    headers: {
      "x-auth": authToken,
    }
  })
    .then(res => {
      if (res.ok) {
        return
      }
      window.location = '/index.html'
    })
};
