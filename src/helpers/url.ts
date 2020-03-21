/**
 * url 相关辅助函数
 */

import { isDate, isObject } from './util'

function encode(val: string): string {
  // 带字母要加i大小不区分，g是全局搜索
  return encodeURIComponent(val)
    .replace(/%40/g, '@')
    .replace(/%3A/gi, ':')
    .replace(/%24/g, '$')
    .replace(/%2C/gi, ',')
    .replace(/%20/g, '+')
    .replace(/%5B/gi, '[')
    .replace(/%5D/gi, ']')
}

export function buildURL(url: string, params?: any): string {
  // 如果参数不存在直接返回url
  if (!params) {
    return url
  }
  // 如果存在需要遍历参数
  const parts: string[] = []
  Object.keys(params).forEach(key => {
    const val = params[key]
    if (val === null || typeof val === 'undefined') {
      // forEach 里面的 return 会跳到下一次循环
      return
    }

    // 统一处理为数组
    let values = []
    if (Array.isArray(val)) {
      values = val
      key += '[]'
    } else {
      values = [val]
    }
    values.forEach(val => {
      if (isDate(val)) {
        val = val.toISOString()
      } else if (isObject(val)) {
        val = JSON.stringify(val)
      }
      parts.push(`${encode(key)}=${encode(val)}`)
    })
  })

  let serializedParams = parts.join('&')
  if (serializedParams) {
    const marIndex = url.indexOf('#')
    if (marIndex !== -1) {
      // !==-1说明url后面有#
      url = url.slice(0, marIndex)
    }
    // === -1 说明url后面没有?问号
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams
  }
  return url
}
