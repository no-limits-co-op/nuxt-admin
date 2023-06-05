import * as echarts from 'echarts/core'
import { BarChart, GaugeChart, LineChart, PictorialBarChart, PieChart, RadarChart, ScatterChart } from 'echarts/charts'

import {
  DatasetComponent,
  GridComponent,
  LegendComponent,
  PolarComponent,
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  TransformComponent,
} from 'echarts/components'
import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import { useElementSize } from '@vueuse/core'
import type { ECOption } from '@/types/charts'

echarts.use([
  TitleComponent,
  LegendComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  ToolboxComponent,
  PolarComponent,
  BarChart,
  LineChart,
  PieChart,
  ScatterChart,
  PictorialBarChart,
  RadarChart,
  GaugeChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
])

export default function useEcharts(
  options: Ref<ECOption> | ComputedRef<ECOption>,
  renderFun?: (chartInstance: echarts.ECharts) => void
) {
  const domRef = ref<HTMLElement>()

  const initialSize = { width: 0, height: 0 }
  const { width, height } = useElementSize(domRef, initialSize)

  let chart: echarts.ECharts | null = null

  function canRender() {
    return initialSize.width > 0 && initialSize.height > 0
  }

  function isRendered() {
    return Boolean(domRef.value && chart)
  }

  function update(updateOptions: ECOption) {
    if (isRendered()) {
      chart?.clear()
      chart!.setOption({ ...updateOptions, backgroundColor: 'transparent' })
    }
  }

  async function render() {
    if (domRef.value) {
      await nextTick()
      chart = echarts.init(domRef.value, 'light')
      if (renderFun) renderFun(chart)

      update(options.value)
    }
  }

  function resize() {
    chart?.resize()
  }

  function destroy() {
    chart?.dispose()
  }

  const scope = effectScope()

  scope.run(() => {
    watch([width, height], ([newWidth, newHeight]) => {
      initialSize.width = newWidth
      initialSize.height = newHeight
      if (newWidth === 0 && newHeight === 0) {
        // 节点被删除 将chart置为空
        chart = null
      }
      if (canRender()) {
        if (!isRendered()) render()
        else resize()
      }
    })

    watch(
      options,
      (newValue) => {
        update(newValue)
      },
      { deep: true }
    )
  })

  onScopeDispose(() => {
    destroy()
    scope.stop()
  })

  return {
    domRef,
  }
}
