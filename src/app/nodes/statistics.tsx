import React from "react"

import { AreaChart } from "@mantine/charts"
import { Card, Text, Title } from "@mantine/core"

const data = generateData(new Date("2023-12-10"), new Date(), 80, 100)

const data2 = [
  { title: "Staking $RSS3 Total", value: getRandomData(1, 9999) },
  { title: "Stakers Total", value: getRandomData(1, 9999) },
  { title: "Nodes Total", value: getRandomData(1, 9999) },
  { title: "Activities Total", value: getRandomData(1, 9999) },
  { title: "Incentive $RSS3 Total", value: getRandomData(1, 9999) },
]

export function Statistics() {
  return (
    <div className="grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-8 gap-6">
      <Card
        shadow="xs"
        radius="lg"
        withBorder
        className="col-span-1 lg:col-span-5"
      >
        <Text>Daily transactions</Text>
        <Title>43.26K</Title>

        <AreaChart
          h={120}
          data={data}
          dataKey="date"
          series={[{ name: "data", color: "blue.6" }]}
          gridAxis="none"
          withXAxis={false}
          withYAxis={false}
          withDots={false}
        />
      </Card>

      <Card
        shadow="xs"
        radius="lg"
        withBorder
        className="col-span-1 lg:col-span-3"
      >
        <div className="grid grid-cols-4 whitespace-nowrap gap-y-2">
          {data2.map(({ title, value }) => (
            <React.Fragment key={title}>
              <Text size="xl" className="col-span-3">
                {title}:
              </Text>
              <Text
                size="xl"
                className="col-span-1 font-mono font-bold text-right"
              >
                {value}
              </Text>
            </React.Fragment>
          ))}
        </div>
      </Card>
    </div>
  )
}

function getRandomData(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function generateData(
  startDate: Date,
  endDate: Date,
  minData: number,
  maxData: number,
) {
  const data = []
  let currentDate = new Date(startDate)

  while (currentDate.getTime() <= endDate.getTime()) {
    data.push({
      date: currentDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
      data: getRandomData(minData, maxData),
    })

    currentDate.setDate(currentDate.getDate() + 1)
  }

  return data
}
