export default {
  testt () {
    console.log('yes working')
  },
  SET_API (state, val) {
    state.api = val
  },
  LOADING_STATE (state, val) {
    state.isLoading = val
  },
  SET_START_DIRECTORY (state, directory) {
    state.startDirectory = directory
  },
  ADD_BROWSER_HISTORY (state, folder) {
    state.browseHistory.push(folder)
  },
  REMOVE_BROWSER_HISTORY (state) {
    state.browseHistory.pop()
  },
  CHANGE_ITEM_NAME (state, updatedFile) {
    // Rename filename in file info detail
    if (
      state.fileInfoDetail &&
      state.fileInfoDetail.unique_id === updatedFile.unique_id
    ) {
      state.fileInfoDetail = updatedFile
    }

    // Get file
    const file = state.data.find(
      el => el.unique_id === updatedFile.unique_id
    )

    file.file_url = updatedFile.file_url
    file.thumbnail = updatedFile.thumbnail

    if (this._vm.$isMobile()) {
      file.name = updatedFile.name
    }
  },
  CLEAR_FILEINFO_DETAIL (state) {
    state.fileInfoDetail = undefined
  },
  LOAD_FILEINFO_DETAIL (state, item) {
    state.fileInfoDetail = state.data.find(
      el => el.unique_id === item.unique_id
    )
  },
  FILE_INFO_TOGGLE (state, isVisible) {
    state.fileInfoPanelVisible = isVisible

    localStorage.setItem('file_info_visibility', isVisible)
  },
  CHANGE_PREVIEW (state, type) {
    state.preview_type = type
  },
  CHANGE_SEARCHING_STATE (state, searchState) {
    state.isSearching = searchState
  },
  UPLOADING_FILE_PROGRESS (state, percentage) {
    state.uploadingFileProgress = percentage
  },
  UPDATE_FILE_COUNT_PROGRESS (state, payload) {
    state.uploadingFilesCount = payload
  },
  GET_DATA (state, loaded_data) {
    state.data = loaded_data
  },
  ADD_NEW_FOLDER (state, folder) {
    state.data.unshift(folder)
  },
  ADD_NEW_ITEMS (state, items) {
    state.data = state.data.concat(items)
  },
  REMOVE_ITEMS (state, ids) {
    state.data = state.data.filter(
      el => -1 === ids.indexOf(el.unique_id)
    )
  },
  REMOVE_ITEM (state, unique_id) {
    state.data = state.data.filter(el => el.unique_id !== unique_id)
  },
  INCREASE_FOLDER_ITEM (state, unique_id) {
    state.data.map(el => {
      if (el.unique_id && el.unique_id === unique_id) el.items++
    })
  },
  STORE_CURRENT_FOLDER (state, folder) {
    state.currentFolder = folder
  },
  SET_SIZE_TYPE (state, type) {
    state.sizeType = type
  }
}
