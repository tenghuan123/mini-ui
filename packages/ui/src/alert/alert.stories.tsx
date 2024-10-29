import { RocketIcon } from "@radix-ui/react-icons"
import { Meta, StoryObj } from "@storybook/react"

import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "./index"

const meta = {
  title: "Alert",
  component: Alert,
} satisfies Meta<typeof Alert>

export default meta

type Story = StoryObj<typeof Alert>

export const Normal: Story = {
  render: () => (
    <Alert>
      <RocketIcon className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
}
