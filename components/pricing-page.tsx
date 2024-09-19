"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const tiers = [
  {
    name: "Basic",
    price: {
      monthly: 29,
      annually: 290,
    },
    features: [
      "Up to 1,000 contacts",
      "Basic CRM features",
      "Email integration",
      "Mobile app access",
    ],
  },
  {
    name: "Professional",
    price: {
      monthly: 79,
      annually: 790,
    },
    features: [
      "Up to 10,000 contacts",
      "Advanced CRM features",
      "Email and calendar integration",
      "Custom fields",
      "API access",
    ],
  },
  {
    name: "Enterprise",
    price: {
      monthly: 199,
      annually: 1990,
    },
    features: [
      "Unlimited contacts",
      "Full CRM suite",
      "Advanced integrations",
      "Dedicated support",
      "Custom development",
    ],
  },
]

export default function PricingPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Pricing Plans</h1>
      <p className="text-center mb-10 text-muted-foreground">
        Choose the perfect plan for your business needs
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {tiers.map((tier) => (
          <Card key={tier.name} className="flex flex-col">
            <CardHeader>
              <CardTitle>{tier.name}</CardTitle>
              <CardDescription>
                <span className="text-3xl font-bold">${tier.price.monthly}</span> /month
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="space-y-2">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Choose {tier.name}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      {/* <div className="mt-16">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Can I change my plan later?</h3>
            <p className="text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">What payment methods do you accept?</h3>
            <p className="text-muted-foreground">We accept all major credit cards and PayPal.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Is there a free trial?</h3>
            <p className="text-muted-foreground">Yes, we offer a 14-day free trial for all plans.</p>
          </div>
        </div>
      </div> */}
    </div>
  )
}