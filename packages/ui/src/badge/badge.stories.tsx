import { Meta, StoryObj } from "@storybook/react"
import { Badge } from "./index"

const meta = {
  title: "Badge",
  component: Badge,
} satisfies Meta<typeof Badge>
    
export default meta

type Story = StoryObj<typeof Badge>

export const Normal: Story = {
    render: () => (
        <Badge>Badge</Badge>
    )
}