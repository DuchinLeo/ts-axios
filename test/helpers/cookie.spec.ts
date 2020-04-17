/*
 * @Description:
 * @Author: Duchin/梁达钦
 * @Date: 2020-04-15 16:08:22
 * @LastEditTime: 2020-04-15 16:30:24
 * @LastEditors: Duchin/梁达钦
 */
import cookie from '../../src/helpers/cookie'

describe('helpers:cookie', () => {
  test('should read cookies', () => {
    document.cookie = 'foo=baz'
    expect(cookie.read('foo')).toBe('baz')
  })

  test('should return null if cookie name is not exist', () => {
    document.cookie = 'foo=baz'
    expect(cookie.read('bar')).toBeNull()
  })
})
