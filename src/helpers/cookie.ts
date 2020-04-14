/*
 * @Description: cookie
 * @Author: Duchin/梁达钦
 * @Date: 2020-04-14 14:48:03
 * @LastEditTime: 2020-04-14 15:03:02
 * @LastEditors: Duchin/梁达钦
 */

  const cookie = {
    read(name: string): string | null {
      const match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)')) // 传一个字符串以|;|隔开变量，看cookie中是否有name(变量)
      return match ? decodeURIComponent(match[3]): null
    }
  }

  export default cookie
