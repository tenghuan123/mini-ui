import { FontBoldIcon } from "@radix-ui/react-icons"
import { Meta, StoryObj } from "@storybook/react"
import { Toggle } from "./index"

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle italic">
      <FontBoldIcon className="h-4 w-4" />
    </Toggle>
  )
}

const meta = {
  title: "Toggle",
  component: ToggleDemo,
} satisfies Meta<typeof ToggleDemo>

export default meta

type Story = StoryObj<typeof ToggleDemo>

export const Normal: Story = {
  render: () => <ToggleDemo />,
}
