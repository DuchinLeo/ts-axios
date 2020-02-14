export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
}

export type Method = 'get' | 'GET'
| 'post' | 'POST'
| 'delete' | 'DELETE'
| 'head' | 'HEAD'
| 'options' | 'OPTIONS'
| 'put' | 'PUT'
| 'patch' | 'PATCH'
