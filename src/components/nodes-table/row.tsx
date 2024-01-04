"use client"

import { useRouter } from "next/navigation"
import React from "react"

import type { Node } from "@/server/api/types"
import { Table } from "@mantine/core"

export type NodesTableProps = {
  node: Node
}

export const NodesTableRow = ({ node }: NodesTableProps) => {
  const router = useRouter()
  const goToNodeDetail = React.useCallback(
    // FIXME: use node id instead of address
    () => router.push(`/nodes/${node.address}`),
    [router, node.address],
  )

  return (
    <Table.Tr
      onClick={goToNodeDetail}
      className="h-20 hover:bg-zinc-100 cursor-pointer transition-colors"
    >
      <Table.Td>{node.name}</Table.Td>
      <Table.Td>{node.isPublicGood ? "Public Good" : "Normal"}</Table.Td>
      <Table.Td>{node.description}</Table.Td>
      <Table.Td>{node.taxFraction / 100}%</Table.Td>
      <Table.Td>{node.address}</Table.Td>
    </Table.Tr>
  )
}
