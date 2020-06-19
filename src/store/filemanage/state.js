/*=========================================================================================
  File Name: moduleCalendarState.js
  Description: Calendar Module State
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

export default {
  fileInfoPanelVisible:
  localStorage.getItem('file_info_visibility') === 'true' || false,
  preview_type: localStorage.getItem('preview_type') || 'grid',
  fileInfoDetail: undefined,
  currentFolder: undefined,
  sizeType: undefined,
  browseHistory: [],
  isLoading: true,
  data: [],
  isSearching: false,
  uploadingFileProgress: 0,
  uploadingFilesCount: {
    current: null,
    total: null
  },
  api: undefined,
  startDirectory: undefined
}
