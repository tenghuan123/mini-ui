"use client"

import { Meta, StoryObj } from "@storybook/react"

import * as React from "react"

import { Calendar } from "./index"

function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow"
    />
  )
}


const meta = {
  title: "Calendar",
  component: Calendar,
} satisfies Meta<typeof Calendar>
    
export default meta

type Story = StoryObj<typeof Calendar>

export const Normal: Story = {
    render: () => (
        <CalendarDemo />
    )
}