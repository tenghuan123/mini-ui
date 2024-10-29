import { Button } from "./index"

import { Meta, StoryObj } from "@storybook/react"

const meta = {
  title: "Button",
  component: Button,
} satisfies Meta<typeof Button>
    
export default meta

type Story = StoryObj<typeof Button>

export const Normal: Story = {
    render: () => (
        <Button>Button</Button>
    )
}
