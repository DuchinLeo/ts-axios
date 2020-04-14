/*
 * @Description:
 * @Author: Duchin/梁达钦
 * @Date: 2020-04-14 10:32:38
 * @LastEditTime: 2020-04-14 16:31:45
 * @LastEditors: Duchin/梁达钦
 */

import axios from '../../src/index'
import NProgress from 'nprogress'

// document.cookie = 'a=b'
// document.cookie = 'c=d'

// axios.get('/more/get').then(res => {
//   console.log('more-get', res)
// })


// axios({
//   url: 'http://127.0.0.1:8088/more/server2',
//   withCredentials: true,
//   method: 'post'
// }).then(res => {
//     console.log('post-res', res)
//   })
// axios({
//   url: 'http://47.103.28.97:3001/banner',
//   withCredentials: true,
//   method: 'post'
// }).then(res => {
//     console.log('post-res', res)
//   })

// const instance = axios.create({
//   xsrfCookieName: 'XSRF-TOKEN-D',
//   xsrfHeaderName: 'X-XSRF-TOKEN-D'
// })

// instance.get('/more/get').then(res => {
//   console.log('res',res)
// })


// =============================================   上传和下载进度

// const instance = axios.create()

// function calculatePercentage(loaded: number, total: number) {
//   return Math.floor(loaded * 1.0) / total
// }

// function loadProgressBar() {
//   const setupStartProgress = () => {
//     instance.interceptors.request.use(config => {
//       NProgress.start()
//       return config
//     })
//   }

//   const setupUpdateProgress = () => {
//     const update = (e: ProgressEvent) => {
//       console.log(e)
//       NProgress.set(calculatePercentage(e.loaded, e.total))
//     }
//     instance.defaults.onDownloadProgress = update
//     instance.defaults.onUploadProgress = update
//   }

//   const setupStopProgress = () => {
//     instance.interceptors.response.use(response => {
//       NProgress.done()
//       return response
//     }, error => {
//       NProgress.done()
//       return Promise.reject(error)
//     })
//   }

//   setupStartProgress()
//   setupUpdateProgress()
//   setupStopProgress()
// }

// loadProgressBar()

// const downloadEl = document.getElementById('download')

// downloadEl!.addEventListener('click', e => {
//   instance.get('https://img.mukewang.com/5cc01a7b0001a33718720632.jpg')
// })

// const uploadEl = document.getElementById('upload')

// uploadEl!.addEventListener('click', e => {
//   const data = new FormData()
//   const fileEl = document.getElementById('file') as HTMLInputElement
//   if (fileEl.files) {
//     data.append('file', fileEl.files[0])

//     instance.post('/more/upload', data)
//   }
// })


// ======================= HTTP授权

axios.post('/more/post', {
  a: 1
}, {
  auth: {
    username: 'Yee',
    password: '123456'
  }
}).then(res => {
  console.log(res)
})
