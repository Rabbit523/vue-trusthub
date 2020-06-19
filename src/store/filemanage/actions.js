
import { events } from '@/bus'
import axios from '@/axios.js'

export default {
  goToFolder: (context, [folder, back = false, init = false]) => {
    context.commit('GET_DATA', [])
    context.commit('LOADING_STATE', true)

    if (context.state.isSearching) {
      context.commit('CHANGE_SEARCHING_STATE', false)
      events.$emit('clear-query')
    }

    axios
      .get(`${context.state.api  }/folder/${  folder.unique_id}`)
      .then(response => {
        context.commit('GET_DATA', response.data)
        context.commit('LOADING_STATE', false)
        context.commit('STORE_CURRENT_FOLDER', folder)

        events.$emit('scrollTop')

        if (back) {
          context.commit('REMOVE_BROWSER_HISTORY')
        } else if (!init) context.commit('ADD_BROWSER_HISTORY', folder)
      })
      .catch(() => {
        // Show error message
        events.$emit('alert:open', {
          title: 'Whooops, something went wrong :(',
          message:
            'Something went wrong and we can\'t continue. Please contact us.'
        })
      })
  },
  createFolder: (context, folderName) => {
    const parent_id = context.state.currentFolder
      ? context.state.currentFolder.unique_id
      : 0

    axios
      .post(`${context.state.api  }/create-folder`, {
        parent_id,
        name: folderName
      })
      .then(response => {
        context.commit('ADD_NEW_FOLDER', response.data)
      })
      .catch(() => {
        // Show error message
        events.$emit('alert:open', {
          title: 'Whooops, something went wrong :(',
          message:
            'Something went wrong and we can\'t continue. Please contact us.'
        })
      })
  },
  removeItems: (context, [ids, items]) => {
    context.commit('REMOVE_ITEMS', ids)

    // Remove file preview
    context.commit('CLEAR_FILEINFO_DETAIL')

    axios
      .post(`${context.state.api  }/remove-items`, {
        items
      })
      .catch(() => {
        // Show error message
        events.$emit('alert:open', {
          title: 'Whooops, something went wrong :(',
          message:
            'Something went wrong and we can\'t continue. Please contact us.'
        })
      })
  },
  removeItem: (context, data) => {
    // Remove file
    context.commit('REMOVE_ITEM', data.unique_id)

    // Remove file preview
    context.commit('CLEAR_FILEINFO_DETAIL')

    axios
      .post(`${context.state.api  }/remove-item`, {
        type: data.type,
        unique_id: data.unique_id
      })
      .catch(() => {
        // Show error message
        events.$emit('alert:open', {
          title: 'Whooops, something went wrong :(',
          message:
            'Something went wrong and we can\'t continue. Please contact us.'
        })
      })
  },
  uploadFiles: (context, files) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${context.state.api  }/upload-file`, files, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          onUploadProgress: progressEvent => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) /
                progressEvent.total
            )

            context.commit(
              'UPLOADING_FILE_PROGRESS',
              percentCompleted
            )
          }
        })
        .then(response => {
          context.commit('ADD_NEW_ITEMS', response.data)
          resolve(response)
        })
        .catch(error => {
          reject(error)

          // Show error message
          events.$emit('alert:open', {
            title: 'Whooops, something went wrong :(',
            message:
              'Something went wrong and we can\'t continue. Please contact us.'
          })

          context.commit('UPDATE_FILE_COUNT_PROGRESS', undefined)
        })
    })
  },
  changeItemName: (context, data) => {
    axios
      .post(`${context.state.api  }/rename-item`, data)
      .then(response => {
        context.commit('CHANGE_ITEM_NAME', response.data)
      })
      .catch(() => {
        // Show error message
        events.$emit('alert:open', {
          title: 'Whooops, something went wrong :(',
          message:
            'Something went wrong and we can\'t continue. Please contact us.'
        })
      })
  },
  getSearchResult: (context, query) => {
    context.commit('LOADING_STATE', true)
    context.commit('CHANGE_SEARCHING_STATE', true)

    axios
      .get(`${context.state.api  }/search`, {
        params: { query }
      })
      .then(response => {
        context.commit('LOADING_STATE', false)
        context.commit('GET_DATA', response.data)
      })
      .catch(() => {
        // Show error message
        events.$emit('alert:open', {
          title: 'Whooops, something went wrong :(',
          message:
            'Something went wrong and we can\'t continue. Please contact us.'
        })
      })
  },
  changePreviewType: context => {
    // Get preview type
    const previewType = localStorage.getItem('preview_type') == 'list' ? 'grid' : 'list'

    // Store preview type to localStorage
    localStorage.setItem('preview_type', previewType)

    // Turn on spinner
    context.commit('LOADING_STATE', true)
    context.commit('GET_DATA', [])
    context.commit('CHANGE_PREVIEW', previewType)

    // Load current folder
    if (context.state.currentFolder) {
      axios
        .get(
          `${context.state.api 
          }/folder/${ 
            context.state.currentFolder.unique_id}`
        )
        .then(response => {
          context.commit('GET_DATA', response.data)
          context.commit('LOADING_STATE', false)
        })
        .catch(() => {
          // Show error message
          events.$emit('alert:open', {
            title: 'Whooops, something went wrong :(',
            message:
              'Something went wrong and we can\'t continue. Please contact us.'
          })
        })
    } else {
      // Load home folder
      axios
        .get(`${context.state.api  }/init`)
        .then(response => {
          context.commit('GET_DATA', response.data)
          context.commit('LOADING_STATE', false)
        })
        .catch(() => {
          // Show error message
          events.$emit('alert:open', {
            title: 'Whooops, something went wrong :(',
            message:
              'Something went wrong and we can\'t continue. Please contact us.'
          })
        })
    }
  },
  fileInfoToggle: (context, visibility = undefined) => {
    if (!visibility) {
      if (context.state.fileInfoPanelVisible) {
        context.commit('FILE_INFO_TOGGLE', false)
      } else {
        context.commit('FILE_INFO_TOGGLE', true)
      }
    } else {
      context.commit('FILE_INFO_TOGGLE', visibility)
    }
  },
  loadFileInfoDetail: (context, item) => {
    context.commit('LOAD_FILEINFO_DETAIL', item)
  },
  moveItem: (context, [item_from, to_item]) => {
    axios
      .post(`${context.state.api  }/move-item`, {
        from_unique_id: item_from.unique_id,
        from_type: item_from.type,
        to_unique_id: to_item.unique_id
      })
      .then(() => {
        context.commit('REMOVE_ITEM', item_from.unique_id)
        context.commit('INCREASE_FOLDER_ITEM', to_item.unique_id)
      })
      .catch(() => {
        // Show error message
        events.$emit('alert:open', {
          title: 'Whooops, something went wrong :(',
          message:
            'Something went wrong and we can\'t continue. Please contact us.'
        })
      })
  }
}
