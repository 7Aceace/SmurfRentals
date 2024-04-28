import React, { useState } from 'react'
import { TabsTrigger, TabsList, TabsContent, Tabs } from "../../components/ui/tabs"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "../../components/ui/card"
import { Label } from "../../components/ui/label"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { signUp } from '../../functions/auth'

export function LoginSignUp() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const userData = {
    firstName,
    lastName,
    email,
  };


  const handleCreateUser = () => {
    if (password !== confirmPassword){
      alert('Password do not match')
      return;
    } else if (!email)
    {
      alert('Email is required')
      return;
    }
    else if (!password){
      alert('Password is required')
      return;
    }
    else (signUp(email, password, userData));
   
    
  };

 

  return (
    (<div
      className="grid md:grid-cols-2 gap-6 mx-auto max-w-[1000px] h-[600px] shadow-lg rounded-lg border-2 border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-center">
        <img
          alt="Login"
          className="aspect-[5/6] object-cover"
          height={600}
          src="/placeholder.svg"
          width={500} />
      </div>
      <div className="space-y-6 flex flex-col justify-center">
        <Tabs className="w-full" defaultValue="login">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Card className="rounded-lg shadow-md border-2 border-black">
              <CardHeader>
                <CardTitle>Welcome Back</CardTitle>
                <CardDescription>Enter your email and password to access your account.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="name@example.com" type="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" placeholder="********" type="password" />
                </div>
                <div className="flex flex-col gap-2">
                  <Button className="w-full" type="submit">
                    Sign In
                  </Button>
                  <Button className="w-full" variant="outline">
                    <ChromeIcon className="h-5 w-5 mr-2" />
                    Sign in with Google
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="signup">
            <Card className="rounded-lg shadow-md border-2 border-black ">
              <CardHeader>
                <CardTitle>Create an Account</CardTitle>
                <CardDescription>Enter your details to get started.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <p>{firstName}</p>
                    <Input type="text" id="first-name" placeholder="John" 
                    onChange = {(e) =>{
                      setFirstName(e.target.value);
                    }} 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input type="text" id="last-name" placeholder="Doe"  
                    onChange = {(e) =>{
                      setFirstName(e.target.value);
                    }} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="name@example.com" type="email"  
                    onChange = {(e) =>{
                    setEmail(e.target.value);
                    }} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" placeholder="********" type="password"  
                    onChange = {(e) =>{
                      setPassword(e.target.value);
                    }} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input id="confirm-password" placeholder="********" type="password"  
                    onChange = {(e) =>{
                      setConfirmPassword(e.target.value);
                    }} />
                </div>
                <Button className="w-full" type="submit"
                onClick ={handleCreateUser}
                >
                  Sign Up
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>)
  );
}

function ChromeIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>)
  );
}
