import { Textarea } from "./index"
import { Meta, StoryObj } from "@storybook/react"

export function TextareaDemo() {
  return <Textarea placeholder="Type your message here." />
}

const meta = {
  title: "Textarea",
  component: TextareaDemo,
} satisfies Meta<typeof TextareaDemo>

export default meta

type Story = StoryObj<typeof TextareaDemo>

export const Normal: Story = {
  render: () => <TextareaDemo />,
}
