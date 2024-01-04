"use client"

import {
  NodesTable,
  NodesTableBody,
  NodesTableHeader,
  NodesTableRow,
} from "@/components/nodes-table"
import { api } from "@/lib/trpc/client"
import { Alert, Button, LoadingOverlay } from "@mantine/core"

import { NodesEmpty } from "./empty"
import { NodesHeader } from "./header"

export const Nodes = () => {
  const nodes = api.nodes.many.useInfiniteQuery(
    { limit: 10 },
    { getNextPageParam: ({ cursor }) => cursor },
  )

  if (nodes.isError) {
    return (
      <Alert
        title="Error"
        color="red"
        icon={<i className="i-mingcute-alert-line" />}
      >
        Maybe the backend server did not bootstrap properly or has some errors.
        Please check.
      </Alert>
    )
  }

  return (
    <div className="space-y-8">
      <div className="mx-[var(--table-horizontal-spacing,var(--mantine-spacing-xs))] mt-4">
        <NodesHeader />
      </div>

      <NodesTable>
        <NodesTableHeader />
        <NodesTableBody>
          <LoadingOverlay visible={nodes.isFetching} />

          {nodes.data?.pages?.map((nodes) =>
            nodes.data.map((node) => (
              <NodesTableRow key={node.address} node={node} />
            )),
          )}

          {nodes.data?.pages.length === 0 && <NodesEmpty />}
        </NodesTableBody>
      </NodesTable>

      {nodes.hasNextPage && (
        <div className="flex justify-center w-full">
          <Button
            loading={nodes.isFetchingNextPage}
            variant="subtle"
            size="xs"
            onClick={() => nodes.fetchNextPage()}
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  )
}
