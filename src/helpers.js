
import store from '@/store/store.js'

const Helpers = {
  install (Vue) {
    Vue.prototype.$isMobile = function () {
      const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
      ]

      return toMatch.some(toMatchItem => {
        return navigator.userAgent.match(toMatchItem)
      })
    }

    Vue.prototype.$isMinimalScale = function () {
      const sizeType = this.$store.getters['filemanage/sizeType']

      return sizeType === 'minimal-scale'
    }

    Vue.prototype.$isCompactScale = function () {
      const sizeType = this.$store.getters['filemanage/sizeType']

      return sizeType === 'compact-scale'
    }

    Vue.prototype.$isFullScale = function () {
      const sizeType = this.$store.getters['filemanage/sizeType']

      return sizeType === 'full-scale'
    }

    Vue.prototype.$openImageOnNewTab = function (source) {
      const win = window.open(source, '_blank')
      win.focus()
    }

    Vue.prototype.$createFolder = function (folderName) {
      this.$store.dispatch('filemanage/createFolder', folderName)
    }

    Vue.prototype.$uploadFiles = async function (files) {
      // Prevent submit empty files
      if (files && files.length === 0) return

      const fileCount = files.length
      let fileCountSucceed = 1

      this.$store.commit('filemanage/UPDATE_FILE_COUNT_PROGRESS', {
        current: fileCountSucceed,
        total: fileCount
      })
      

      // Get parent id
      const rootFolder = this.$store.getters['filemanage/currentFolder'] ? this.$store.getters['filemanage/currentFolder'].unique_id : 0

      for (let i = files.length - 1; i >= 0; i--) {
        const formData = new FormData()

        // Append data
        formData.append('file', files[i])

        // Append form data
        formData.append('parent_id', rootFolder)


        // Display the key/value pairs
        for (const pair of formData.entries()) {
          console.log(`${pair[0] }, ${  pair[1]}`) 
        }

        // Upload data
        await this.$store.dispatch('filemanage/uploadFiles', formData).then(() => {
          // Progress file log
          store.commit('filemanage/UPDATE_FILE_COUNT_PROGRESS', {
            current: fileCountSucceed,
            total: fileCount
          })

          // Uploading finished
          if (fileCount === fileCountSucceed) {
            store.commit('filemanage/UPDATE_FILE_COUNT_PROGRESS', undefined)
          } else {
            // Add uploaded file
            fileCountSucceed++
          }
        })
      }
    }

    Vue.prototype.$downloadFile = function (url, filename) {
      const anchor = document.createElement('a')

      anchor.href = url

      anchor.download = filename

      document.body.appendChild(anchor)

      anchor.click()
    }
  }
}

export default Helpers
