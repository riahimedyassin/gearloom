"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Target, Users, DollarSign, TrendingUp, Plus } from "lucide-react";

export default function BusinessModelPage() {
  const businessModelElements = [
    {
      title: "Value Propositions",
      description: "What value do we deliver to customers?",
      icon: Target,
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      items: [
        "Fast and reliable service delivery",
        "Cost-effective solution for SMBs",
        "24/7 customer support",
        "User-friendly interface"
      ]
    },
    {
      title: "Customer Segments",
      description: "Who are our customers?",
      icon: Users,
      color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      items: [
        "Small to medium businesses",
        "Tech-savvy entrepreneurs",
        "Remote teams",
        "Project managers"
      ]
    },
    {
      title: "Revenue Streams",
      description: "How do we make money?",
      icon: DollarSign,
      color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      items: [
        "Monthly subscription fees",
        "Premium feature add-ons",
        "Enterprise licensing",
        "Professional services"
      ]
    },
    {
      title: "Key Activities",
      description: "What key activities do we perform?",
      icon: TrendingUp,
      color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      items: [
        "Product development",
        "Customer acquisition",
        "Platform maintenance",
        "Customer support"
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-blue-600" />
            Business Model Canvas
          </h1>
          <p className="text-muted-foreground">
            Define and visualize your business model components
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Component
        </Button>
      </div>

      {/* Business Model Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {businessModelElements.map((element, index) => {
          const Icon = element.icon;
          return (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Icon className="h-5 w-5" />
                  {element.title}
                </CardTitle>
                <CardDescription>{element.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {element.items.map((item, itemIndex) => (
                    <Badge 
                      key={itemIndex} 
                      variant="outline" 
                      className={`${element.color} border-0 text-xs py-1 px-2 block w-fit mb-1`}
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="mt-4 text-xs">
                  <Plus className="h-3 w-3 mr-1" />
                  Add item
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Stats */}
      <Card>
        <CardHeader>
          <CardTitle>Business Model Health</CardTitle>
          <CardDescription>Key metrics and indicators</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">4</div>
              <div className="text-sm text-muted-foreground">Value Props</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">4</div>
              <div className="text-sm text-muted-foreground">Customer Segments</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-600">4</div>
              <div className="text-sm text-muted-foreground">Revenue Streams</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">85%</div>
              <div className="text-sm text-muted-foreground">Completion</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
