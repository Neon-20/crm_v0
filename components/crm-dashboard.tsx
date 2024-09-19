'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, Users, DollarSign, Activity, LayoutDashboard, Settings, CreditCard, LifeBuoy, LogOut, ChevronLeft, ChevronRight } from 'lucide-react'

// Import the other page components
import SettingsPage from './settings-page';
import PricingPage from './pricing-page'
import SupportPage from './support-page'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

// Mock data for the table
const users = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", signInDate: "2023-05-15", status: "Active" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", signInDate: "2023-05-14", status: "Inactive" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com", signInDate: "2023-05-13", status: "Active" },
  { id: 4, name: "Diana Prince", email: "diana@example.com", signInDate: "2023-05-12", status: "Active" },
  { id: 5, name: "Ethan Hunt", email: "ethan@example.com", signInDate: "2023-05-11", status: "Inactive" },
]

export function CrmDashboard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true)
  const [activePage, setActivePage] = useState("dashboard")

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded)
  }

  const renderContent = () => {
    switch (activePage) {
      case "dashboard":
        return (
          <>
            <h1 className="text-3xl font-bold tracking-tight mb-6">Dashboard</h1>
            
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{users.length}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Users</CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{users.filter(user => user.status === "Active").length}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Inactive Users</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{users.filter(user => user.status === "Inactive").length}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                </CardContent>
              </Card>
            </div>

            <div className="flex items-center space-x-2 mb-4">
              <Search className="h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search users..."
                className="w-[300px]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Sign-in Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.id}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.signInDate}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          user.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {user.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="mt-4">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </>
        )
      case "settings":
        return <SettingsPage />
      case "pricing":
        return <PricingPage />
      case "support":
        return <SupportPage />
      default:
        return <div>Page not found</div>
    }
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className={`bg-muted/40 p-4 flex flex-col transition-all duration-300 ease-in-out ${isSidebarExpanded ? 'w-64' : 'w-20'}`}>
        <div className="flex items-center justify-between mb-8">
          {isSidebarExpanded && <div className="text-2xl font-bold">CRM System</div>}
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="ml-auto">
            {isSidebarExpanded ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>
        </div>
        <nav className="flex-1">
          <ul className="space-y-2">
            <li>
              <Button
                variant={activePage === "dashboard" ? "default" : "ghost"}
                className={`w-full justify-start ${!isSidebarExpanded && 'px-2'}`}
                onClick={() => setActivePage("dashboard")}
              >
                <LayoutDashboard className="h-4 w-4" />
                {isSidebarExpanded && <span className="ml-2">Dashboard</span>}
              </Button>
            </li>
            <li>
              <Button
                variant={activePage === "settings" ? "default" : "ghost"}
                className={`w-full justify-start ${!isSidebarExpanded && 'px-2'}`}
                onClick={() => setActivePage("settings")}
              >
                <Settings className="h-4 w-4" />
                {isSidebarExpanded && <span className="ml-2">Settings</span>}
              </Button>
            </li>
            <li>
              <Button
                variant={activePage === "pricing" ? "default" : "ghost"}
                className={`w-full justify-start ${!isSidebarExpanded && 'px-2'}`}
                onClick={() => setActivePage("pricing")}
              >
                <CreditCard className="h-4 w-4" />
                {isSidebarExpanded && <span className="ml-2">Pricing</span>}
              </Button>
            </li>
            <li>
              <Button
                variant={activePage === "support" ? "default" : "ghost"}
                className={`w-full justify-start ${!isSidebarExpanded && 'px-2'}`}
                onClick={() => setActivePage("support")}
              >
                <LifeBuoy className="h-4 w-4" />
                {isSidebarExpanded && <span className="ml-2">Support</span>}
              </Button>
            </li>
          </ul>
        </nav>
        <div className="mt-auto">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className={`w-full justify-start ${!isSidebarExpanded && 'px-2'}`}>
              <Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
                {isSidebarExpanded && <span className="ml-2">John Doe</span>}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 overflow-auto">
        {renderContent()}
      </main>
    </div>
  )
}