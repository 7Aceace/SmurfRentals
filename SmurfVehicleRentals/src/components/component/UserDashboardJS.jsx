
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "../../components/ui/dropdown-menu"
import { TabsTrigger, TabsList, TabsContent, Tabs } from "../../components/ui/tabs"
import { CardTitle, CardHeader, CardContent, CardFooter, Card, CardDescription } from "../../components/ui/card"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "../../components/ui/table"
import { Label } from "../../components/ui/label"
import { UserAuth } from '../../context/AuthContext';
import '../../index.css'
export function UserDashboardJS() {
  const {user} = UserAuth();
  return (

    (
    <div className="w-full bg-white py-12 md:py-24 lg:py-32">
     <h1 className="font-bold text-center">Welcome {user?.firstName}</h1>
    <div className="flex flex-col min-h-screen w-full">
      <main className="flex-1 gap-4 p-4 md:gap-8 md:p-6">
        <Tabs className="w-full" defaultValue="rentals">
          <TabsList className="grid grid-cols-2 border-b">
            <TabsTrigger value="rentals">Rentals</TabsTrigger>
            <TabsTrigger value="account">Account Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="rentals">
            <div className="flex items-center">
              <h1 className="font-semibold text-lg md:text-2xl">My Rentals</h1>
              <Button className="ml-auto" size="sm">
                New Rental
              </Button>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle>Current Rental</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Vehicle:</span>
                      <span>Toyota Corolla</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Rental Dates:</span>
                      <span>May 1 - May 15</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Total Cost:</span>
                      <span>$450</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle>Upcoming Rental</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Vehicle:</span>
                      <span>Honda Civic</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Rental Dates:</span>
                      <span>June 1 - June 15</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Total Cost:</span>
                      <span>$500</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-4">
                  <CardTitle>Past Rental</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Vehicle:</span>
                      <span>Nissan Altima</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Rental Dates:</span>
                      <span>April 1 - April 15</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Total Cost:</span>
                      <span>$400</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            </div>
            <div className="flex items-center">
              <h2 className="font-semibold text-lg md:text-2xl">Past Rentals</h2>
              <Button className="ml-auto" size="sm">
                View All
              </Button>
            </div>
            <div className="border shadow-sm rounded-lg">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Vehicle</TableHead>
                    <TableHead>Rental Dates</TableHead>
                    <TableHead>Total Cost</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Toyota Camry</TableCell>
                    <TableCell>March 1 - March 15</TableCell>
                    <TableCell>$350</TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Honda Accord</TableCell>
                    <TableCell>February 15 - March 1</TableCell>
                    <TableCell>$400</TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Nissan Sentra</TableCell>
                    <TableCell>January 1 - January 15</TableCell>
                    <TableCell>$300</TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          <TabsContent value="account">
            <div className="mt-8 max-w-2xl mx-auto">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Update your account information.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="First Name" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="Last Name" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Email" type="email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" placeholder="Password" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="ml-auto">Save Changes</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      </div>
    </div>)
  );
}

function SearchIcon(props) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}
