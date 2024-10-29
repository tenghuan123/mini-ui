import { Card, CardContent } from "../card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./index"
import { Meta, StoryObj } from "@storybook/react"

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}


const meta = {
    title: "Carousel",
    component: Carousel,
  } satisfies Meta<typeof Carousel>
      
export default meta

type Story = StoryObj<typeof Carousel>

export const Normal: Story = {
  render: () => (
        <CarouselDemo />
    )
}