import { Meta, StoryObj } from "@storybook/react"
import { Button } from "../button"
import { useToast } from "./use-toast"

export const ToastDemo = () => {
    const { toast } = useToast()
  
    return (
      <Button
        onClick={() => {
          toast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 5:57 PM",
          })
        }}
      >
        Show Toast
      </Button>
    )
  }

const meta = {
  title: "Toast",
  component: ToastDemo,
} satisfies Meta<typeof ToastDemo>

export default meta

type Story = StoryObj<typeof ToastDemo>

export const Normal: Story = {
  render: () => <ToastDemo />,
}
