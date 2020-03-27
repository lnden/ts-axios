import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../types'
import xhr from './xhr'
import { buildURL } from '../helpers/url'
// import { transformRequest, transformResponse } from '../helpers/data'
import { flattenHeaders, processHeaders } from '../helpers/headers'
import tranform from './tranform'

export default function dispatchRequest(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  // config.headers = transfromHeaders(config)
  // config.data = transformRequestData(config)
  config.data = tranform(config.data, config.headers, config.transformRequest)
  config.headers = flattenHeaders(config.headers, config.method!)
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url!, params)
}

// function transformRequestData(config: AxiosRequestConfig): any {
//   return transformRequest(config.data)
// }
//
// function transfromHeaders(config: AxiosRequestConfig): any {
//   const { headers = {}, data } = config
//   return processHeaders(headers, data)
// }

function transformResponseData(res: AxiosResponse): AxiosResponse {
  // res.data = transformResponse(res.data)
  res.data = tranform(res.data, res.headers, res.config.transformResponse)
  return res
}
