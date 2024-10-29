import { Meta, StoryObj } from "@storybook/react"
import { Input } from "./index"

export function InputDemo() {
  return <Input type="email" placeholder="Email" />
}

const meta = {
    title: "Input",
    component: Input,
  } satisfies Meta<typeof Input>
      
  export default meta
  
  type Story = StoryObj<typeof Input>

  export const Normal: Story = {
    render: () => (
        <InputDemo />
    )
}