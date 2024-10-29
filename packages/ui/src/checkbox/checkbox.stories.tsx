"use client"

import { Meta, StoryObj } from "@storybook/react"
import { Checkbox } from "./index"

export function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  )
}


const meta = {
    title: "Checkbox",
    component: Checkbox,
  } satisfies Meta<typeof Checkbox>
      
  export default meta
  
  type Story = StoryObj<typeof Checkbox>

  export const Normal: Story = {
    render: () => (
        <CheckboxDemo />
    )
}