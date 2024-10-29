import { Meta, StoryObj } from "@storybook/react"
import { Button } from "../button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./index"

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

const meta = {
  title: "Tooltip",
  component: TooltipDemo,
} satisfies Meta<typeof TooltipDemo>

export default meta

type Story = StoryObj<typeof TooltipDemo>

export const Normal: Story = {
  render: () => <TooltipDemo />,
}
