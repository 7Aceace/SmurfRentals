import React, { useRef, useState} from 'react';
import { Label } from "../../components/ui/label"
import { Input } from "../../components/ui/input"
import { Textarea } from "../../components/ui/textarea"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "../../components/ui/select"
import { CardContent, CardFooter, Card } from "../../components/ui/card"
import { Button } from "../../components/ui/button"
import '../../index.css'

import emailjs from '@emailjs/browser';

export function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [vehicle, setVehicle] = useState('');

  const form = useRef();  
  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      message: message,
      from_vehicle: vehicle,
    };

    emailjs.send('service_9xztwl4', 'template_x617itb', templateParams, 'Qa58PBXG4l8almZK4')
    .then((response) => {
      console.log('Email sent successfully', response.status, response.text);
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setVehicle('');
  })
  .catch((error) => {
    console.log('Email failed to send', error);
  });
  
  
  };

  return (
    (
    <>
    <div className="w-full bg-white py-12 md:py-24 lg:py-32">
    <div className=" mx-auto max-w-md space-y-6">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="text-gray-500 dark:text-gray-400">Fill out the form below to inquire about renting a vehicle.</p>
      </div>
      <form onSubmit={handleSubmit}>
      <Card>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" placeholder="Enter your phone number" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="vehicle">Vehicle Type</Label>
            <Select id="vehicle" value={vehicle} onChange={(e) => setVehicle(e.target.value)}>
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
        <CardFooter className="flex justify-end">
  <Button type="submit">Submit</Button>
</CardFooter>
      </Card>
    </form>
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
              alt="Mark Gelson Panganoron"
              className="h-36 w-36 rounded-full object-cover"
              height={150}
              src="/PANGANORON.png"
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width={150}
            />
            <div className="space-y-1 text-center">
              <h3 className="text-lg font-semibold">Mark Gelson Panganoron</h3>
              <p className="text-gray-500 dark:text-gray-400">Dev</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
              Mark brings over a decade of experience in project management, ensuring our projects run smoothly and efficiently from concept to completion.
              </p>
            </div>
          </Card>
          <Card className="flex flex-col items-center justify-center space-y-4">
            <img
              alt="Chuche Montenegro"
              className="h-36 w-36 rounded-full object-cover"
              height={150}
              src="/MONTENEGRO.jpg"
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width={150}
            />
            <div className="space-y-1 text-center">
              <h3 className="text-lg font-semibold">Chuche Montenegro</h3>
              <p className="text-gray-500 dark:text-gray-400">Dev</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Chuche is our technical mastermind, driving innovation and ensuring the seamless execution of our
                projects.
              </p>
            </div>
          </Card>
          <Card className="flex flex-col items-center justify-center space-y-4">
            <img
              alt="Ace Monte"
              className="h-36 w-36 rounded-full object-cover"
              height={150}
              src="/ace.jpg"
              style={{
                aspectRatio: "150/150",
                objectFit: "cover",
              }}
              width={150}
            />
            <div className="space-y-1 text-center">
              <h3 className="text-lg font-semibold">Ace Monte</h3>
              <p className="text-gray-500 dark:text-gray-400">Dev</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Ace is our operations mastermind, ensuring the smooth functioning of our organization and driving
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
