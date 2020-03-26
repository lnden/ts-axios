import { AxisoInstance } from './types'
import Axios from './core/Axios'
import { extend } from './helpers/util'

// 定义一个工厂函数创建一个axios实例
function createInstance(): AxisoInstance {
  const context = new Axios()
  const instance = Axios.prototype.request.bind(context)
  extend(instance, context)

  return instance as AxisoInstance
}

const axios = createInstance()

export default axios
