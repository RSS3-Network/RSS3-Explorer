import { Table } from "@mantine/core"

export const NodesTableHeader = () => {
  return (
    <>
      <Table.Thead>
        <Table.Tr className="h-16">
          <Table.Th>Name</Table.Th>
          <Table.Th>Kind</Table.Th>
          <Table.Th>Description</Table.Th>
          <Table.Th>Tax</Table.Th>
          <Table.Th>Owner</Table.Th>
        </Table.Tr>
      </Table.Thead>
    </>
  )
}
