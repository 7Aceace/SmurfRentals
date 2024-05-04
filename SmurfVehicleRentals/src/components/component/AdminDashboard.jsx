
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "../../components/ui/dropdown-menu"
import { Label } from "../../components/ui/label"
import { Textarea } from "../../components/ui/textarea"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "../../components/ui/select"
import { CardContent, Card } from "../../components/ui/card"

export function AdminDashboard() {
  return (
    (<div className="flex flex-col max-w-2xl mx-auto">
      <header
        className="flex h-14 items-center gap-4 border-b bg-[#f0f9ff] px-6 dark:bg-[#0b1521]">
        <div className="flex-1">
          <form>
            <div className="relative">
              <SearchIcon
                className="absolute left-2.5 top-2.5 h-4 w-4 text-[#94a3b8] dark:text-[#94a3b8]" />
              <Input
                className="w-full bg-white shadow-none appearance-none pl-8 dark:bg-[#0b1521]"
                placeholder="Search products..."
                type="search" />
            </div>
          </form>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="rounded-full border border-[#e2e8f0] w-8 h-8 dark:border-[#1e293b]"
              size="icon"
              variant="ghost">
              <img
                alt="Avatar"
                className="rounded-full"
                height="32"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "32/32",
                  objectFit: "cover",
                }}
                width="32" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-lg text-[#0369a1]">Admin Dashboard - Product Management</h1>
        </div>
        <div
          className="bg-[#f0f9ff] dark:bg-[#0b1521] p-6 rounded-lg flex items-center justify-center">
          <img
            alt="Admin Avatar"
            className="rounded-full mr-4"
            height="64"
            src="/placeholder.svg"
            style={{
              aspectRatio: "64/64",
              objectFit: "cover",
            }}
            width="64" />
          <div>
            <h2 className="text-[#0369a1] font-semibold text-lg">Admin</h2>
            <p className="text-[#475569] dark:text-[#94a3b8]">
              Welcome to the product management dashboard. You can add new products here.
            </p>
          </div>
        </div>
        <Card>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label className="text-base" htmlFor="name">
                Product Name
              </Label>
              <Input id="name" placeholder="Enter product name" />
            </div>
            <div className="grid gap-2">
              <Label className="text-base" htmlFor="description">
                Description
              </Label>
              <Textarea id="description" placeholder="Enter product description" />
            </div>
            <div className="grid gap-2">
              <Label className="text-base" htmlFor="price">
                Price
              </Label>
              <Input id="price" placeholder="Enter product price" type="number" />
            </div>
            <div className="grid gap-2">
              <Label className="text-base" htmlFor="image">
                Product Image
              </Label>
              <Input id="image" type="file" />
            </div>
            <div className="grid gap-2">
              <Label className="text-base" htmlFor="category">
                Category
              </Label>
              <Select id="category">
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="clothing">Clothing</SelectItem>
                  <SelectItem value="home">Home & Garden</SelectItem>
                  <SelectItem value="sports">Sports & Outdoors</SelectItem>
                  <SelectItem value="beauty">Beauty & Personal Care</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button className="w-full" size="lg">
              Add Product
            </Button>
          </CardContent>
        </Card>
      </main>
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
