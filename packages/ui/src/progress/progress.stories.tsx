"use client"

import * as React from "react"

import { Progress } from "./index"
import { Meta, StoryObj } from "@storybook/react"

export function ProgressDemo() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return <Progress value={progress} className="w-[60%]" />
}

const meta = {
  title: "Progress",
  component: Progress,
} satisfies Meta<typeof Progress>

export default meta

type Story = StoryObj<typeof Progress>

export const Normal: Story = {
  render: () => <ProgressDemo />,
}
