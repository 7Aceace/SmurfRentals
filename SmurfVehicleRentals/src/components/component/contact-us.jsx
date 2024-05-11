
import { Label } from "../../components/ui/label"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "../../components/ui/select"
import { CardContent, CardFooter, Card } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import '../../index.css'
export function ContactUs() {
  return (
    (
    <>
    <div className="w-full bg-white py-12 md:py-24 lg:py-32">
    <div className=" mx-auto max-w-md space-y-6">
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
      </div>
    </div>
    <section className="w-full bg-white py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet the Team</h2>
            <p className="max-w-[800px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our talented team of experts is dedicated to delivering exceptional results for our clients.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
          <Card className="flex flex-col items-center justify-center space-y-4">
            <img
              alt="John Doe"
              className="h-36 w-36 rounded-full object-cover"
              height={150}
              src="/placeholder.svg"
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width={150}
            />
            <div className="space-y-1 text-center">
              <h3 className="text-lg font-semibold">John Doe</h3>
              <p className="text-gray-500 dark:text-gray-400">CEO</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                John is the visionary behind our company, leading the team with his strategic expertise and innovative
                mindset.
              </p>
            </div>
          </Card>
          <Card className="flex flex-col items-center justify-center space-y-4">
            <img
              alt="Jane Smith"
              className="h-36 w-36 rounded-full object-cover"
              height={150}
              src="/placeholder.svg"
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width={150}
            />
            <div className="space-y-1 text-center">
              <h3 className="text-lg font-semibold">Jane Smith</h3>
              <p className="text-gray-500 dark:text-gray-400">CTO</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Jane is our technical mastermind, driving innovation and ensuring the seamless execution of our
                projects.
              </p>
            </div>
          </Card>
          <Card className="flex flex-col items-center justify-center space-y-4">
            <img
              alt="Michael Johnson"
              className="h-36 w-36 rounded-full object-cover"
              height={150}
              src="/placeholder.svg"
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width={150}
            />
            <div className="space-y-1 text-center">
              <h3 className="text-lg font-semibold">Michael Johnson</h3>
              <p className="text-gray-500 dark:text-gray-400">COO</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Michael is our operations mastermind, ensuring the smooth functioning of our organization and driving
                efficiency.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
    </>
    )
  );
}
