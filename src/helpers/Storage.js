class AppStorage {
  storeInfo (title, obj) {
    const oneLine = JSON.stringify(obj)
    localStorage.setItem(title, oneLine)
  }
}
export default new AppStorage()