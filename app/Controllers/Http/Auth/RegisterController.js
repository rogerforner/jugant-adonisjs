'use strict'

class RegisterController {
  showRegisterForm ({view}) {
    return view.render('auth.register')
  }
}

module.exports = RegisterController
