<script setup lang="ts">
import CalHeatmap from 'cal-heatmap'
import Tooltip from 'cal-heatmap/plugins/Tooltip'
import LegendLite from 'cal-heatmap/plugins/LegendLite'
import CalendarLabel from 'cal-heatmap/plugins/CalendarLabel'
import 'cal-heatmap/cal-heatmap.css'
import dayjs from 'dayjs'

import { useData } from 'vitepress'
import { watch, reactive } from 'vue'
const { isDark } = useData()

type DataType = {
    date: string
    value: number
}

const dateData = reactive<DataType[]>([])

/** 计算当年的数据 */
const initDate = () => {
    // 一年前的日期
    const preYearDate = dayjs().subtract(1, 'year')

    for (let i = 1; i < 366; i++) {
        const str = preYearDate.add(i, 'day').format('YYYY-MM-DD')
        dateData.push({ date: str, value: 0 })
    }
}
initDate();

function paint(cal: CalHeatmap, theme: 'light' | 'dark') {
    cal.paint(
        {
            theme: theme,
            data: {
                source: dateData,
                type: 'json',
                x: 'date',
                y: 'value',
                groupY: 'sum'
            },
            date: {
                start: dayjs().subtract(11, 'month').valueOf(),
                // locale: 'zh',
                timezone: 'Asia/Shanghai'
            },
            range: 12,
            scale: {
                color: {
                    type: 'threshold',
                    range: ['#d2e3f8', '#bbd8fc', '#3b82f680', '#0065c8'],
                    // range: ['#9be9a8', '#40c463', '#30a14e', '#216e39'],
                    domain: [ 0, 2, 4, 6, 8,]
                }
            },
            domain: {
                type: 'month',
                gutter: 3,
                label: { text: 'M月', textAlign: 'middle', position: 'bottom' }
            },
            subDomain: { type: 'ghDay', radius: 2, width: 30, height: 30, gutter: 1, label: 'D' },
            itemSelector: '#cal-heatmap'
        },
        [
            // [
            //     Tooltip,
            //     {
            //         text: function (timestamp: number, value: number, dayjsDate: dayjs.Dayjs) {
            //             if (timestamp > Date.now()) {
            //                 return dayjsDate.format('别急，这一天还没来🫣')
            //             }
            //             if (!value) {
            //                 return dayjsDate.format('YYYY-MM-DD 未更新')
            //             } else {
            //                 return dayjsDate.format('于 YYYY-MM-DD 更新了 ') + value + ' 篇博文'
            //             }
            //         }
            //     }
            // ],
            [
                LegendLite,
                {
                    itemSelector: '#cal-heatmap-legend',
                    includeBlank: true,
                    radius: 2,
                    width: 14,
                    height: 14,
                    gutter: 3
                }
            ],
            [
                CalendarLabel,
                {
                    width: 30,
                    // position: 'left',
                    textAlign: 'middle',
                    text: function () {
                        return ['日','一', '二', '三', '四', '五', '六' ]
                    }
                }
            ]
        ]
    )
}

function destory(cal: CalHeatmap) {
    cal.destroy()
}

let cal: CalHeatmap
watch(
    isDark,
    () => {
        if (isDark.value) {
            if (cal !== undefined) destory(cal)
            cal = new CalHeatmap()
            paint(cal, 'dark')
        } else {
            if (cal !== undefined) destory(cal)
            cal = new CalHeatmap()
            paint(cal, 'light')
        }
    },
    {
        immediate: true
    }
)
</script>
<template>
    <div class="cal-heatmap-container">
        <div class="flex flex-row justify-between items-center cal-heatmap-header">
            <div style="margin-left: 30px;">最近一年的记录</div>
            <div class="flex justify-between cal-heatmap-legend-container">
                <span class="cal-heatmap-legend-text">Less</span>
                <div class="flex items-center" id="cal-heatmap-legend"></div>
                <span class="cal-heatmap-legend-text">More</span>
            </div>
        </div>
        <div id="cal-heatmap"></div>
    </div>
</template>
<style lang="scss">
.cal-heatmap-container {
    display: inline-block;
    max-width: 100%;
    // height: 100%;
    // border: 1px solid green;
}

@media screen and (max-width: 768px) {
    .cal-heatmap-container {
        display: none;
    }
}

.cal-heatmap-header {
    width: 100%;
    height: 2rem;
    font-size: 1rem;
}

.cal-heatmap-legend-container {
    align-content: flex-end;
}

.cal-heatmap-legend-text {
    color: var(--text-color);
    font-size: 0.7rem;
}

#cal-heatmap-legend {
    margin: 0 0.4rem;
}
</style>
