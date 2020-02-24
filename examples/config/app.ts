import axios from '../../src/index'
import qs from 'qs'

axios.defaults.headers.common['test2'] = 123
axios.defaults.headers.common['test3'] = 12322222222222

console.log("axios.defaults.headers.common['test2']--",axios.defaults.headers.common['test2'])
console.log('qs',qs.stringify({
  a: 1
}))

axios({
  url: '/config/post',
  method: 'post',
  data: qs.stringify({
    a: 1
  }),
  headers: {
    test: '321'
  }
}).then((res) => {
  console.log('data',res.data)
})
