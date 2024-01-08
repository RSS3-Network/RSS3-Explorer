import { Card, Title } from "@mantine/core"

export default function ProfilesPage() {
  return (
    <div className="space-y-8 mt-4">
      <Card radius="md" withBorder className="space-y-4">
        <Title size="h2">Basic Wallet Information</Title>
        <div className="aspect-video bg-gray-300 p-4 rounded-md" />
      </Card>

      <Card radius="md" withBorder className="space-y-4">
        <Title size="h2">Token Information</Title>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="aspect-video bg-gray-300 col-span-1 space-y-4 p-4 rounded-md">
            <Title size="h3">On Ethereum</Title>
            <div>
              <p>100 $RSS3</p>
              <p>2 $RSS3 Node X Chip</p>
              <p>5 $RSS3 Node Y Chip</p>
              <p>...</p>
            </div>
          </div>

          <div className="aspect-video bg-gray-300 col-span-1 space-y-4 p-4 rounded-md">
            <Title size="h3">On RSS3 Chain</Title>
            <div>
              <p>100 $RSS3</p>
              <p>2 $RSS3 Node X Chip</p>
              <p>5 $RSS3 Node Y Chip</p>
              <p>...</p>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <Card
          radius="md"
          withBorder
          className="space-y-4 flex items-center justify-center aspect-square bg-gray-300"
        >
          <Title size="h4">Staking History</Title>
        </Card>

        <Card
          radius="md"
          withBorder
          className="space-y-4 flex items-center justify-center aspect-square bg-gray-300"
        >
          <Title size="h4">Bridging History</Title>
        </Card>

        <Card
          radius="md"
          withBorder
          className="space-y-4 flex items-center justify-center aspect-square bg-gray-300"
        >
          <Title size="h4">Incentives History</Title>
        </Card>

        <Card
          radius="md"
          withBorder
          className="space-y-4 flex items-center justify-center aspect-square bg-gray-300"
        >
          <Title size="h4">Operated Nodes</Title>
        </Card>
      </div>
    </div>
  )
}
