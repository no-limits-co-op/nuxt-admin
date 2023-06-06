<script setup lang="ts">
import type { ECOption } from '@/types/charts'

const { t } = useI18n()
useHead({
  title: t('menu.analysis'),
})
definePageMeta({
  title: 'menu.analysis',
  icon: 'vaadin:pie-bar-chart',
})

const statisticData = [
  {
    title: '访问量',
    amount: 10000,
    icon: 'material-symbols:monitor-outline-rounded',
    startColor: 'rgb(236, 71, 134)',
    endColor: 'rgb(185, 85, 164)',
  },
  {
    title: '成交额',
    amount: 234567,
    icon: 'streamline:money-cash-file-dollar-common-money-currency-cash-file',
    startColor: 'rgb(134, 94, 192)',
    endColor: 'rgb(81, 68, 180)',
  },
  {
    title: '下载数',
    amount: 6666,
    icon: 'solar:file-download-outline',
    startColor: 'rgb(86, 205, 243)',
    endColor: 'rgb(113, 157, 227)',
  },
  {
    title: '成交数',
    amount: 9999,
    icon: 'solar:bill-list-broken',
    startColor: 'rgb(252, 188, 37)',
    endColor: 'rgb(246, 128, 87)',
  },
]

const activities = [
  {
    content: 'Custom icon',
    timestamp: '2018-04-12 20:46',
    size: 'large',
    type: 'primary',
  },
  {
    content: 'Custom color',
    timestamp: '2018-04-03 20:46',
    color: '#0bbd87',
    type: 'danger',
  },
  {
    content: 'Custom size',
    timestamp: '2018-04-03 20:46',
    type: 'warning',
  },
  {
    content: 'Custom hollow',
    timestamp: '2018-04-03 20:46',
    type: 'info',
    hollow: false,
  },
  {
    content: 'Default node',
    timestamp: '2018-04-03 20:46',
    type: 'success',
  },
]
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

const lineOptions = ref<ECOption>({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985',
      },
    },
  },
  legend: {
    data: ['下载量', '注册数'],
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: ['06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
    },
  ],
  yAxis: [
    {
      type: 'value',
    },
  ],
  series: [
    {
      color: '#8e9dff',
      name: '下载量',
      type: 'line',
      smooth: true,
      stack: 'Total',
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0.25,
              color: '#8e9dff',
            },
            {
              offset: 1,
              color: '#fff',
            },
          ],
        },
      },
      emphasis: {
        focus: 'series',
      },
      data: [4623, 6145, 6268, 6411, 1890, 4251, 2978, 3880, 3606, 4311],
    },
    {
      color: '#26deca',
      name: '注册数',
      type: 'line',
      smooth: true,
      stack: 'Total',
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0.25,
              color: '#26deca',
            },
            {
              offset: 1,
              color: '#fff',
            },
          ],
        },
      },
      emphasis: {
        focus: 'series',
      },
      data: [2208, 2016, 2916, 4512, 8281, 2008, 1963, 2367, 2956, 678],
    },
  ],
}) as Ref<ECOption>

const pieOptions = ref<ECOption>({
  tooltip: {
    trigger: 'item',
  },
  legend: {
    bottom: '1%',
    left: 'center',
    itemStyle: {
      borderWidth: 0,
    },
  },
  series: [
    {
      color: ['#5da8ff', '#8e9dff', '#fedc69', '#26deca'],
      name: '时间安排',
      type: 'pie',
      radius: ['45%', '75%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 1,
      },
      label: {
        show: false,
        position: 'center',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '12',
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 20, name: '学习' },
        { value: 10, name: '娱乐' },
        { value: 30, name: '工作' },
        { value: 40, name: '休息' },
      ],
    },
  ],
}) as Ref<ECOption>

const data = ref<Array<[number, number]>>([])
for (let i = 0; i <= 360; i++) {
  const t = (i / 180) * Math.PI
  const r = Math.sin(2 * t) * Math.cos(2 * t)
  data.value.push([r, i])
}
const polarOptions = ref<ECOption>({
  polar: {
    center: ['50%', '50%'],
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
    },
  },
  angleAxis: {
    type: 'value',
    startAngle: 0,
  },
  radiusAxis: {
    min: 0,
  },
  series: [
    {
      coordinateSystem: 'polar',
      name: 'line',
      type: 'line',
      showSymbol: false,
      data,
    },
  ],
  animationDuration: 2000,
}) as Ref<ECOption>

const { domRef: lineChartRef } = useEcharts(lineOptions)
const { domRef: pieChartRef } = useEcharts(pieOptions)
const { domRef: polarChartRef } = useEcharts(polarOptions)
</script>

<template>
  <div flex-col>
    <div flex gap-4>
      <div flex-center flex-1 rd-2 bg-white p-4>
        <div ref="lineChartRef" h-50 w-75 />
      </div>
      <div flex-center flex-1 rd-2 bg-white p-4>
        <div ref="pieChartRef" h-50 w-75 />
      </div>
      <div flex-center flex-1 rd-2 bg-white p-4>
        <div ref="polarChartRef" h-50 w-75 />
      </div>
    </div>
    <div mt-4 flex gap-4>
      <template v-for="(item, index) in statisticData" :key="index">
        <GradientBg flex-1 :start-color="item.startColor" :end-color="item.endColor">
          <div font-600>
            {{ item.title }}
          </div>
          <div mt-2 flex-y-center justify-between>
            <div>
              <Icon size="20" :name="item.icon" />
            </div>
            <div>{{ item.amount }}</div>
          </div>
        </GradientBg>
      </template>
    </div>
    <div mt-4 flex gap-4>
      <div w-sm rd-2 bg-white p-4>
        <ElTimeline>
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :type="activity.type"
            :color="activity.color"
            :size="activity.size"
            :hollow="activity.hollow"
            :timestamp="activity.timestamp"
          >
            {{ activity.content }}
          </el-timeline-item>
        </ElTimeline>
      </div>
      <div flex-auto rd-2 bg-white p-4>
        <ClientOnly>
          <el-table :data="tableData" :header-cell-style="{ background: '#f7f9f8' }" border style="width: 100%">
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
          </el-table>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>
