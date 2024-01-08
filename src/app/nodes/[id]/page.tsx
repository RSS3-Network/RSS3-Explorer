"use client"

import React from "react"

import { api } from "@/lib/trpc/client"
import { Alert, Card, Text, Title } from "@mantine/core"

export type NodeDetailPage = { params: { id: string } }

export default function NodeDetailPage({ params }: NodeDetailPage) {
  const node = api.nodes.one.useQuery({ id: params.id })
  const data = node.data?.data

  if (node.isError || !data) {
    return (
      <Alert
        title="Error"
        color="red"
        icon={<i className="i-mingcute-alert-line" />}
      >
        {node.error?.message ??
          `Maybe the backend server did not bootstrap properly or has some errors. Please check.`}
      </Alert>
    )
  }

  return (
    <div className="mt-4 grid grid-cols-1 gap-6">
      <Card shadow="xs" radius="lg" withBorder className="col-span-1">
        <Title size="h2">Node Detail</Title>

        <div className="grid grid-cols-4 whitespace-nowrap gap-y-2 mt-4">
          {renderItem("Name", data.name)}
          {renderItem("Kind", data.isPublicGood ? "Public Good" : "Normal")}
          {renderItem("Description", data.description)}
          {renderItem("Tax", `${data.taxFraction / 100}%`)}
          {renderItem("Owner", data.address)}
        </div>
      </Card>
    </div>
  )
}

function renderItem(name: string, value: string | number) {
  return (
    <>
      <Text size="xl" className="col-span-3 capitalize">
        {name}:
      </Text>
      <Text size="xl" className="col-span-1 font-mono font-bold text-right">
        {value}
      </Text>
    </>
  )
}
