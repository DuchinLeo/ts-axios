/*
 * @Description:
 * @Author: Duchin/梁达钦
 * @Date: 2020-04-16 18:16:20
 * @LastEditTime: 2020-04-16 18:17:23
 * @LastEditors: Duchin/梁达钦
 */

import Cancel, { isCancel } from '../../src/cancel/Cancel'

describe('cancel:Cancel', () => {
  test('should returns correct result when message is specified', () => {
    const cancel = new Cancel('Operation has been canceled.')
    expect(cancel.message).toBe('Operation has been canceled.')
  })

  test('should returns true if value is a Cancel', () => {
    expect(isCancel(new Cancel())).toBeTruthy()
  })

  test('should returns false if value is not a Cancel', () => {
    expect(isCancel({ foo: 'bar' })).toBeFalsy()
  })
})
