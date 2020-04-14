

import axios, { Canceler } from '../../src/index'

const CancelToken = axios.CancelToken
const source = CancelToken.source()

axios.get('/cancel/get', {
  cancelToken: source.token
}).catch(function(e) {
  if (axios.isCancel(e)) {
    console.log('第一个请求取消Request canceled', e.message)
  }
})

setTimeout(() => {
  source.cancel('Operation canceled by the user-操作取消')

  setTimeout(() => {
    axios.post('/cancel/post', { a: 1 }, { cancelToken: source.token }).catch(function(e) {
      if (axios.isCancel(e)) {
        console.log('setTiout-100延迟', e.message)
        console.log('setTiout-100延迟e', e)
      }
    })
  },100)
}, 100)

let cancel: Canceler
console.log('cancel1', cancel)
axios.get('/cancel/get', {
  cancelToken: new CancelToken(c => {
    cancel = c
  })
}).catch(function(e) {
  if (axios.isCancel(e)) {
    console.log('Request canceled',)
    console.log('Request canceled-e',e)
  }
})
console.log('cancel2', cancel)

setTimeout(() => {
  cancel()
},500)
