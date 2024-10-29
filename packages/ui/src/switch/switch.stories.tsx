import { Label } from "../label"
import { Switch } from "./index"
import { Meta, StoryObj } from "@storybook/react"

export function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  )
}

const meta = {
  title: "Switch",
  component: SwitchDemo,
} satisfies Meta<typeof SwitchDemo>

export default meta

type Story = StoryObj<typeof SwitchDemo>

export const Normal: Story = {
  render: () => <SwitchDemo />,
}
