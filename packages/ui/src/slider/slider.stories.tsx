import { cn } from "@mini-ui/utils"
import { Slider } from "./index"
import { Meta, StoryObj } from "@storybook/react"

type SliderProps = React.ComponentProps<typeof Slider>

export function SliderDemo({ className, ...props }: SliderProps) {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn("w-[60%]", className)}
      {...props}
    />
  )
}

const meta = {
  title: "Slider",
  component: SliderDemo,
} satisfies Meta<typeof SliderDemo>

export default meta

type Story = StoryObj<typeof SliderDemo>

export const Normal: Story = {
  render: () => <SliderDemo />,
}