const STORAGE_KEY = 'vue-test-vueJs'
const STORAGE_KEY_STRING = 'vue-test-string'
const STORAGE_KEY_NUM = 'vue-test-num'
export default {
  fetch: function () {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '[]')
  },
  save: function (items) {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  },
  fetchObj: function () {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY_STRING))
  },
  saveObj: function (items) {
    window.sessionStorage.setItem(STORAGE_KEY_STRING, JSON.stringify(items))
  },
  fetchNum: function () {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY_NUM))
  },
  saveNum: function (items) {
    window.sessionStorage.setItem(STORAGE_KEY_NUM, JSON.stringify(items))
  }
}
