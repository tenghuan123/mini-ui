import { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "../checkbox"
import { Label } from "./index"

export function LabelDemo() {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
    </div>
  )
}

const meta = {
    title: "Label",
    component: Label,
  } satisfies Meta<typeof Label>
        
  export default meta
    
  type Story = StoryObj<typeof Label>
  
  export const Normal: Story = {
      render: () => (
          <LabelDemo />
      )
  }