"use client"

import React from "react"

import { Nodes } from "@/components/nodes"
import { Card } from "@mantine/core"

import { Statistics } from "./statistics"

export default function BridgePage() {
  return (
    <div className="mt-4 grid grid-cols-1 gap-6">
      <Statistics />

      <Card shadow="xs" radius="lg" withBorder>
        <Nodes />
      </Card>
    </div>
  )
}
