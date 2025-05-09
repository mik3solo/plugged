import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import type { EVCar } from "@/types/ev"

export function EVCard({ car }: { car: EVCar }) {
  return (
    <Card className="overflow-hidden bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 hover:shadow-lg transition-shadow">
      <div className="relative aspect-[16/9]">
        <Image src={car.image || "/placeholder.svg"} alt={car.name} fill className="object-cover" />
      </div>
      <CardContent className="p-4">
        <div className="text-center space-y-2 mb-4">
          <h3 className="text-lg font-semibold">
            {car.make} {car.model}
          </h3>
        </div>
        <div className="grid grid-cols-3 gap-2 text-sm mb-4">
          <div className="text-center">
            <p className="font-semibold text-logo-blue">{car.range} mi</p>
            <p className="text-xs text-muted-foreground">Range</p>
          </div>
          <div className="text-center">
            <p className="font-semibold">{car.battery} kWh</p>
            <p className="text-xs text-muted-foreground">Battery</p>
          </div>
          <div className="text-center">
            <p className="font-semibold">{car.acceleration}s</p>
            <p className="text-xs text-muted-foreground">0-60 mph</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm border-t pt-4">
          <div className="text-center">
            <p className="font-semibold">${car.taxCredit.toLocaleString()} Est.</p>
            <p className="text-xs text-muted-foreground">Tax Credit</p>
          </div>
          <div className="text-center">
            <p className="font-semibold">${car.msrp.toLocaleString()}</p>
            <p className="text-xs text-muted-foreground">MSRP</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

