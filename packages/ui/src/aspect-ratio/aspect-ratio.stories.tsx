
import { Meta, StoryObj } from "@storybook/react"
import { AspectRatio } from "./index"

const meta = {
    title: "AspectRatio",
    component: AspectRatio,
  } satisfies Meta<typeof AspectRatio>
  
export default meta

type Story = StoryObj<typeof AspectRatio>

export const Normal: Story = {
    render: () => (
        <AspectRatio ratio={16 / 9} className="bg-muted">
            <img
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Photo by Drew Beamer"
              className="h-full w-full rounded-md object-cover"
            />
        </AspectRatio>
    )
}