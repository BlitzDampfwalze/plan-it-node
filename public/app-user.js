const createUser = () => {

  userCheckLoggedin();

  const loginTab = $('#loginTab');
  const signupTab = $('#signupTab');
  let isSignup = new URLSearchParams(window.location.search).has("signup")

  const showLogin = () => {
    loginTab.addClass('selected')
    signupTab.removeClass('selected')
    isSignup = false;
    $('form').find('#password').attr("placeholder", "password")
  };
  const showSignup = () => {
    signupTab.addClass('selected')
    loginTab.removeClass('selected')
    isSignup = true;
    $('form').find('#password').attr("placeholder", "more than five characters long")
  };

  loginTab.click(showLogin)
  signupTab.click(showSignup)

  if (isSignup) {
    showSignup();
  }

  $('#sign-up-form').submit(event => {
    event.preventDefault();

    const formData = {};

    $('form').find('.inputs').each(function (index, node) {
      formData[node.id] = node.value;
    });
    $('form').find('.inputs').each(function (index, node) {
      node.value = '';
    });

    const url = isSignup ? '/users' : '/users/login';
    const userError = isSignup ? 'username/email taken' : 'Incorrect email and/or password';
    console.log(formData)
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify(formData)
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(userError);
      })
      .then(user => {
        console.log(user);
        localStorage.setItem(TOKEN, user.token)
        localStorage.setItem(ID, user.id)
        window.location = '/recipe-vault.html'

      })
      .catch(err => {
        window.alert(err);
      }
      )

  })
};
createUser();