import Link from "next/link"

import { Button } from "@mantine/core"

export const NodesHeader = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <h1 className="text-2xl">Latest Nodes</h1>

      <Link href="/nodes/register" passHref={true}>
        <Button>
          <div className="flex gap-2 items-center">
            <div>Register New Node</div>
            <div className="hidden h-2 w-[1px] origin-top-left bg-current lg:block lg:h-3" />
            <i className="i-mingcute-add-circle-fill" />
          </div>
        </Button>
      </Link>
    </div>
  )
}
