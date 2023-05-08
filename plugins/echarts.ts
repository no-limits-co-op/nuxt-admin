import * as echarts from 'echarts'

// TODO: 整体挂载，会引入额外的JS代码
export default defineNuxtPlugin(() => {
  return {
    provide: {
      eCharts: echarts,
    },
  }
})
