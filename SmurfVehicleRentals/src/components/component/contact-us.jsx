
import { Label } from "../../components/ui/label"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "../../components/ui/select"
import { CardContent, CardFooter, Card } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import '../../index.css'
export function ContactUs() {
  return (
    (<div className="mx-auto max-w-md space-y-6">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="text-gray-500 dark:text-gray-400">Fill out the form below to inquire about renting a vehicle.</p>
      </div>
      <Card>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" placeholder="Enter your phone number" type="tel" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Enter your message" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="vehicle">Vehicle Type</Label>
            <Select id="vehicle">
              <SelectTrigger>
                <SelectValue placeholder="Select vehicle type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="car">Car</SelectItem>
                <SelectItem value="suv">SUV</SelectItem>
                <SelectItem value="truck">Truck</SelectItem>
                <SelectItem value="van">Van</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit">Submit</Button>
        </CardFooter>
      </Card>
    </div>)
  );
}
