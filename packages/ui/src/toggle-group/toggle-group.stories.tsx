import {
    FontBoldIcon,
    FontItalicIcon,
    UnderlineIcon,
  } from "@radix-ui/react-icons"
  
  import {
    ToggleGroup,
    ToggleGroupItem,
  } from "./index"
import { Meta, StoryObj } from "@storybook/react"
  
  export function ToggleGroupDemo() {
    return (
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="bold" aria-label="Toggle bold">
          <FontBoldIcon className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Toggle italic">
          <FontItalicIcon className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="strikethrough" aria-label="Toggle strikethrough">
          <UnderlineIcon className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    )
  }
  
  const meta = {
    title: "ToggleGroup",
    component: ToggleGroupDemo,
  } satisfies Meta<typeof ToggleGroupDemo>
  
  export default meta
  
  type Story = StoryObj<typeof ToggleGroupDemo>
  
  export const Normal: Story = {
    render: () => <ToggleGroupDemo />
}