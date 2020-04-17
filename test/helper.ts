/*
 * @Description:
 * @Author: Duchin/梁达钦
 * @Date: 2020-04-16 11:44:55
 * @LastEditTime: 2020-04-16 11:44:56
 * @LastEditors: Duchin/梁达钦
 */
export function getAjaxRequest(): Promise<JasmineAjaxRequest> {
  return new Promise(function(resolve) {
    setTimeout(() => {
      return resolve(jasmine.Ajax.requests.mostRecent())
    }, 0)
  })
}
