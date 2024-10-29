import { Meta, StoryObj } from "@storybook/react"
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "./index"
  
  export function InputOTPDemo() {
    return (
      <InputOTP maxLength={6}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    )
  }

const meta = {
  title: "InputOTP",
  component: InputOTP,
} satisfies Meta<typeof InputOTP>
      
export default meta
  
type Story = StoryObj<typeof InputOTP>

export const Normal: Story = {
    render: () => (
        <InputOTPDemo />
    )
}