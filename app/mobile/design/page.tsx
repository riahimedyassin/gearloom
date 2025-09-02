"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  Smartphone, 
  Palette, 
  Users, 
  Download, 
  Star, 
  TrendingUp,
  Bug,
  PlayCircle,
  TestTube,
  Globe
} from "lucide-react";

export default function MobileDesignPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Mobile App Design</h1>
        <p className="text-muted-foreground">
          Create intuitive and engaging mobile experiences
        </p>
      </div>

      {/* App Store Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Downloads</CardTitle>
            <Download className="h-4 w-4 ml-auto text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12.5K</div>
            <p className="text-xs text-muted-foreground">+8.2% from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rating</CardTitle>
            <Star className="h-4 w-4 ml-auto text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4.7</div>
            <div className="flex items-center gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-3 w-3 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <Users className="h-4 w-4 ml-auto text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.9K</div>
            <p className="text-xs text-muted-foreground">Daily active users</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Retention</CardTitle>
            <TrendingUp className="h-4 w-4 ml-auto text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">73%</div>
            <Progress value={73} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Design System */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5" />
              Design System
            </CardTitle>
            <CardDescription>Mobile UI components and guidelines</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-sm mb-2">Primary Colors</h4>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 border-2 border-background shadow-sm"></div>
                  <div className="w-8 h-8 rounded-lg bg-green-600 border-2 border-background shadow-sm"></div>
                  <div className="w-8 h-8 rounded-lg bg-orange-600 border-2 border-background shadow-sm"></div>
                  <div className="w-8 h-8 rounded-lg bg-red-600 border-2 border-background shadow-sm"></div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-sm mb-2">Component Library</h4>
                <div className="grid grid-cols-2 gap-2">
                  <Badge variant="secondary">Buttons</Badge>
                  <Badge variant="secondary">Cards</Badge>
                  <Badge variant="secondary">Forms</Badge>
                  <Badge variant="secondary">Navigation</Badge>
                  <Badge variant="outline">Modals</Badge>
                  <Badge variant="outline">Lists</Badge>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-sm mb-2">Screen Sizes</h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>iPhone SE</span>
                    <span>375×667</span>
                  </div>
                  <div className="flex justify-between">
                    <span>iPhone 14</span>
                    <span>390×844</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pixel 7</span>
                    <span>412×915</span>
                  </div>
                </div>
              </div>
            </div>
            
            <Separator />
            
            <Button size="sm" className="w-full">
              <Palette className="h-4 w-4 mr-2" />
              Open Figma Design
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TestTube className="h-5 w-5" />
              User Testing
            </CardTitle>
            <CardDescription>Usability testing and feedback</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Onboarding Flow</span>
                <Badge className="bg-green-100 text-green-800">✓ Completed</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Navigation Testing</span>
                <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Accessibility Audit</span>
                <Badge className="bg-yellow-100 text-yellow-800">Planned</Badge>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">User Satisfaction</span>
                <span className="text-sm text-muted-foreground">87%</span>
              </div>
              <Progress value={87} className="h-2" />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Task Success Rate</span>
                <span className="text-sm text-muted-foreground">92%</span>
              </div>
              <Progress value={92} className="h-2" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Prototypes & Wireframes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Smartphone className="h-5 w-5" />
            Prototypes & Wireframes
          </CardTitle>
          <CardDescription>Interactive prototypes and screen designs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-3">
              <div className="aspect-[9/16] bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg border-2 border-blue-200 flex items-center justify-center">
                <Smartphone className="h-12 w-12 text-blue-400" />
              </div>
              <div className="space-y-1">
                <h4 className="font-medium text-sm">Login Flow</h4>
                <p className="text-xs text-muted-foreground">Authentication screens</p>
                <Button size="sm" variant="outline" className="w-full">
                  <PlayCircle className="h-3 w-3 mr-1" />
                  View Prototype
                </Button>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="aspect-[9/16] bg-gradient-to-b from-green-50 to-green-100 rounded-lg border-2 border-green-200 flex items-center justify-center">
                <Users className="h-12 w-12 text-green-400" />
              </div>
              <div className="space-y-1">
                <h4 className="font-medium text-sm">Dashboard</h4>
                <p className="text-xs text-muted-foreground">Main user interface</p>
                <Button size="sm" variant="outline" className="w-full">
                  <PlayCircle className="h-3 w-3 mr-1" />
                  View Prototype
                </Button>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="aspect-[9/16] bg-gradient-to-b from-purple-50 to-purple-100 rounded-lg border-2 border-purple-200 flex items-center justify-center">
                <Globe className="h-12 w-12 text-purple-400" />
              </div>
              <div className="space-y-1">
                <h4 className="font-medium text-sm">Settings</h4>
                <p className="text-xs text-muted-foreground">User preferences</p>
                <Button size="sm" variant="outline" className="w-full">
                  <PlayCircle className="h-3 w-3 mr-1" />
                  View Prototype
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Development Status */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Development Progress</CardTitle>
            <CardDescription>Current sprint status</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Home Screen Implementation</span>
                <Badge className="bg-green-100 text-green-800">✓ Done</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">User Profile Screen</span>
                <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Push Notifications</span>
                <Badge className="bg-yellow-100 text-yellow-800">Review</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Dark Mode Support</span>
                <Badge variant="outline">Planned</Badge>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Sprint Progress</span>
                <span>7/10 tasks</span>
              </div>
              <Progress value={70} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bug className="h-5 w-5" />
              Quality Assurance
            </CardTitle>
            <CardDescription>Testing and bug reports</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center space-y-1">
                <div className="text-xl font-bold text-red-600">3</div>
                <div className="text-xs text-muted-foreground">Critical Bugs</div>
              </div>
              <div className="text-center space-y-1">
                <div className="text-xl font-bold text-orange-600">8</div>
                <div className="text-xs text-muted-foreground">Medium Issues</div>
              </div>
              <div className="text-center space-y-1">
                <div className="text-xl font-bold text-green-600">94%</div>
                <div className="text-xs text-muted-foreground">Test Coverage</div>
              </div>
              <div className="text-center space-y-1">
                <div className="text-xl font-bold text-blue-600">156</div>
                <div className="text-xs text-muted-foreground">Test Cases</div>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <div className="text-sm font-medium">Device Testing</div>
              <div className="flex flex-wrap gap-1">
                <Badge variant="secondary" className="text-xs">iOS 16+</Badge>
                <Badge variant="secondary" className="text-xs">Android 11+</Badge>
                <Badge variant="outline" className="text-xs">Tablet</Badge>
                <Badge variant="outline" className="text-xs">Foldable</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common mobile development tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Button variant="outline" size="sm">
              <Palette className="h-4 w-4 mr-2" />
              Update Design
            </Button>
            <Button variant="outline" size="sm">
              <TestTube className="h-4 w-4 mr-2" />
              Run Tests
            </Button>
            <Button variant="outline" size="sm">
              <Smartphone className="h-4 w-4 mr-2" />
              Device Preview
            </Button>
            <Button variant="outline" size="sm">
              <Globe className="h-4 w-4 mr-2" />
              Deploy Beta
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
