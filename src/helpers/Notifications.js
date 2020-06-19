class Notification {
  constructor () {
    this.generalStyle = {
      iconPack: 'feather',
      icon: 'icon-alert-circle'
    }
    this.primaryColor = {
      color: 'primary'
    }
    this.errorColor = {
      color: 'danger'
    }
    this.successColor = {
      color: 'success'
    }
  }
  customError (target, title) {
    target.notify({
      ...this.generalStyle,
      ...this.errorColor,
      title
    })
  }
  customSuccess (target, title) {
    target.notify({
      ...this.generalStyle,
      ...this.successColor,
      title
    })
  }
  // Show loop of notifications depened on the array
  loopErrors (target, arrayErrors) {
    arrayErrors.forEach((error) => {
      target.notify({
        ...this.generalStyle,
        ...this.errorColor,
        sticky: true,
        buttonClose: true,
        title: error
      })
    })
  }
}
export default new Notification()
