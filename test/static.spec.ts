/*
 * @Description:
 * @Author: Duchin/梁达钦
 * @Date: 2020-04-16 18:24:30
 * @LastEditTime: 2020-04-16 18:25:05
 * @LastEditors: Duchin/梁达钦
 */

import axios from '../src/index'

describe('promise', () => {
  test('should support all', done => {
    let fulfilled = false

    axios.all([true, false]).then(arg => {
      fulfilled = arg[0]
    })

    setTimeout(() => {
      expect(fulfilled).toBeTruthy()
      done()
    }, 100)
  })

  test('should support spread', done => {
    let sum = 0
    let fulfilled = false
    let result: any

    axios
      .all([123, 456])
      .then(
        axios.spread((a, b) => {
          sum = a + b
          fulfilled = true
          return 'hello world'
        })
      )
      .then(res => {
        result = res
      })

    setTimeout(() => {
      expect(fulfilled).toBeTruthy()
      expect(sum).toBe(123 + 456)
      expect(result).toBe('hello world')
      done()
    }, 100)
  })
})
