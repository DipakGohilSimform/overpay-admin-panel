/* eslint-disable react/require-default-props */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react'
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis
} from 'recharts'

interface CustomTooltipProps extends TooltipProps<number, string> {
  active?: boolean
  payload?: { value: number }[]
}

function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: 'black',
          color: 'white',
          padding: '5px',
          borderRadius: '5px',
          boxShadow: '0 0 10px rgba(0,0,0,0.2)'
        }}
      >
        <p>{`Amount: ${payload[0].value}`}</p>
      </div>
    )
  }
  return null
}

export default function Chart() {
  const data = [
    { name: 'Item A', amount: 3500, month: 'Jan 10' },
    { name: 'Item B', amount: 5000, month: 'Jan 11' },
    { name: 'Item C', amount: 5100, month: 'Jan 12' },
    { name: 'Item D', amount: 2780, month: 'Jan 13' },
    { name: 'Item E', amount: 4000, month: 'Jan 14' },
    { name: 'Item F', amount: 2090, month: 'Jan 15' },
    { name: 'Item G', amount: 7000, month: 'Jan 16' },
    { name: 'Item H', amount: 7000, month: 'Jan 17' },
    { name: 'Item I', amount: 4500, month: 'Jan 18' }
  ]

  const [focusBar, setFocusBar] = useState<number | null>(null)

  return (
    <ResponsiveContainer width="100%" height={185}>
      <BarChart data={data} barSize={29}>
        <XAxis
          className="chart-text"
          dataKey="month"
          axisLine={false}
          tickLine={false}
          tickMargin={16}
        />
        <YAxis
          className="chart-text"
          ticks={[0, 3000, 5000, 10000]}
          tickFormatter={(tick) => `${tick / 1000}k`}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip cursor={{ fill: 'transparent' }} content={<CustomTooltip />} />
        <Bar
          dataKey="amount"
          barSize={40}
          radius={6}
          fill="var(--neutral-100)"
          onMouseLeave={() => setFocusBar(null)}
        >
          {data.map((_entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={focusBar === index ? 'var(--primary-500)' : 'var(--neutral-100)'}
              onMouseEnter={() => setFocusBar(index)}
              onMouseLeave={() => setFocusBar(null)}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}
