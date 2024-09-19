"use client";
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, BookOpen, MessageCircle, LifeBuoy, FileQuestion } from 'lucide-react'

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Support Center</h1>
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search for help..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>
      <Tabs defaultValue="kb" className="space-y-4">
        <TabsList>
          <TabsTrigger value="kb">Knowledge Base</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
          <TabsTrigger value="contact">Contact Us</TabsTrigger>
        </TabsList>
        <TabsContent value="kb">
          <Card>
            <CardHeader>
              <CardTitle>Knowledge Base</CardTitle>
              <CardDescription>Find answers to common questions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <Button variant="outline" className="justify-start">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Getting Started Guide
                </Button>
                <Button variant="outline" className="justify-start">
                  <FileQuestion className="mr-2 h-4 w-4" />
                  FAQ
                </Button>
                <Button variant="outline" className="justify-start">
                  <LifeBuoy className="mr-2 h-4 w-4" />
                  Troubleshooting
                </Button>
                <Button variant="outline" className="justify-start">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Feature Requests
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="community">
          <Card>
            <CardHeader>
              <CardTitle>Community Forum</CardTitle>
              <CardDescription>Connect with other users and share knowledge</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Community forum features will be implemented here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="contact">
          <Card>
            <CardHeader>
              <CardTitle>Contact Support</CardTitle>
              <CardDescription>Get in touch with our support team</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Email Support</h3>
                <p className="text-muted-foreground">support@example.com</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Phone Support</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Live Chat</h3>
                <Button>Start Chat</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}