class Autenticacion {
  autEmailPass (email, password) {
    //$('#avatar').attr('src', 'imagenes/usuario_auth.png')
    //Materialize.toast(`Bienvenido ${result.user.displayName}`, 5000)
    //$('.modal').modal('close')
   
  }

  crearCuentaEmailPass (email, password, nombres) {
    firebaseConfig.auth().createUserWithEmailAndPassword(email, password)
      .then(result =>{
        result.user.updateProfile({
          displayName : nombres
        })
        const configuracion = {
          url : 'http://127.0.0.1:5500/'
        }
        result.user.sendEmailVerification()
          .catch(error =>{
            console.error(error)
            Materialize.toast(error.messaje, 4000)
          })
          firebaseConfig.auth().signOut()
          Materialize.toast(
            `Bienvenido ${nombres}, debes realizar el proceso de verificación`,
            4000
          )
          $('.modal').modal('close')
      })
      .catch(error =>{
        console.error(error)
        Materialize.toast(error.messaje, 4000)
      })
    
  }

  authCuentaGoogle () {
    //$('#avatar').attr('src', result.user.photoURL)
    //$('.modal').modal('close')
    //Materialize.toast(`Bienvenido ${result.user.displayName} !! `, 4000)
  }

  authCuentaFacebook () {
    //$('#avatar').attr('src', result.user.photoURL)
    //$('.modal').modal('close')
    //Materialize.toast(`Bienvenido ${result.user.displayName} !! `, 4000)
  }

  authTwitter () {
    // TODO: Crear auth con twitter
  }
}
