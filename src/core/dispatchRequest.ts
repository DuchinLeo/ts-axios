import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from '../types'
import xhr from './xhr'
import { bulidURL } from '../helpers/url'
// import { transformRequest, transformResponse } from '../helpers/data'
import { flattenHeaders } from '../helpers/headers'
import transform from './transform'

export default function dispatchRequest(config: AxiosRequestConfig): AxiosPromise{
  processConfig(config)
  return xhr(config).then((res) => {
    return transformResponseData(res)
  })
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  // config.headers = transformHeaders(config)
  // config.data = transformRequestData(config)
  config.data = transform(config.data, config.headers, config.transformRequest)
  config.headers = flattenHeaders(config.headers, config.method!)
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params} = config
  return bulidURL(url!, params)
}

// function transformRequestData (config: AxiosRequestConfig): any {
//   return transformRequest(config.data)
// }

// function transformHeaders (config: AxiosRequestConfig): any {
//   const { headers = {}, data } = config
//   return processHeaders(headers, data)
// }

function transformResponseData(res: AxiosResponse): AxiosResponse {
  // res.data = transformResponse(res.data)
  res.data = transform(res.data, res.headers, res.config.transformResponse)
  return res
}
