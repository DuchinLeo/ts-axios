/*
 * @Description: boot
 * @Author: Duchin/梁达钦
 * @Date: 2020-04-15 14:46:51
 * @LastEditTime: 2020-04-15 18:07:31
 * @LastEditors: Duchin/梁达钦
 */
const JasmineCore = require('jasmine-core')
// @ts-ignore
global.getJasmineRequireObj = function() {
  return JasmineCore
}
require('jasmine-ajax')
 