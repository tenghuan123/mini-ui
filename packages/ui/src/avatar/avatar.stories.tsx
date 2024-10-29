import { Meta, StoryObj } from "@storybook/react"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "./index"

const meta = {
  title: "Avatar",
  component: Avatar,
} satisfies Meta<typeof Avatar>
  
export default meta

type Story = StoryObj<typeof Avatar>

export const Normal: Story = {
    render: () => (
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}
  