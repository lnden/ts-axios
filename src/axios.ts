import { AxiosRequestConfig, AxisoInstance } from './types'
import Axios from './core/Axios'
import { extend } from './helpers/util'
import defaults from './default'

// 定义一个工厂函数创建一个axios实例
function createInstance(config: AxiosRequestConfig): AxisoInstance {
  const context = new Axios(config)
  const instance = Axios.prototype.request.bind(context)
  extend(instance, context)

  return instance as AxisoInstance
}

const axios = createInstance(defaults)

export default axios
