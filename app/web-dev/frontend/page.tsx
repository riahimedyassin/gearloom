"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  Code, 
  Palette, 
  Zap, 
  CheckCircle, 
  Clock, 
  GitBranch,
  Package,
  Smartphone
} from "lucide-react";

export default function FrontendDevelopmentPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Frontend Development</h1>
        <p className="text-muted-foreground">
          Build modern, responsive, and performant user interfaces
        </p>
      </div>

      {/* Project Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Components</CardTitle>
            <Code className="h-4 w-4 ml-auto text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+3 from last sprint</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Test Coverage</CardTitle>
            <CheckCircle className="h-4 w-4 ml-auto text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87%</div>
            <Progress value={87} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Build Time</CardTitle>
            <Clock className="h-4 w-4 ml-auto text-orange-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.1s</div>
            <p className="text-xs text-muted-foreground">Optimized build</p>
          </CardContent>
        </Card>
      </div>

      {/* Component Library */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            Component Library
          </CardTitle>
          <CardDescription>
            Reusable UI components for consistent design
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-medium">Basic Components</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Button</Badge>
                <Badge variant="secondary">Input</Badge>
                <Badge variant="secondary">Card</Badge>
                <Badge variant="secondary">Modal</Badge>
                <Badge variant="secondary">Dropdown</Badge>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium">Advanced Components</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">DataTable</Badge>
                <Badge variant="outline">Calendar</Badge>
                <Badge variant="outline">FileUpload</Badge>
                <Badge variant="outline">RichEditor</Badge>
                <Badge variant="outline">Charts</Badge>
              </div>
            </div>
          </div>
          
          <Separator />
          
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-muted-foreground">
                24 components • 15 in development • 9 planned
              </p>
            </div>
            <Button size="sm">
              <Code className="h-4 w-4 mr-2" />
              View Storybook
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Current Sprint Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GitBranch className="h-5 w-5" />
              Current Sprint
            </CardTitle>
            <CardDescription>Sprint 12 - Frontend Improvements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Implement dark mode toggle</span>
                <Badge className="bg-green-100 text-green-800">Done</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Optimize bundle size</span>
                <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Add accessibility features</span>
                <Badge className="bg-yellow-100 text-yellow-800">Review</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Mobile responsiveness fixes</span>
                <Badge variant="outline">Todo</Badge>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Sprint Progress</span>
                <span>3/6 completed</span>
              </div>
              <Progress value={50} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="h-5 w-5" />
              Design System
            </CardTitle>
            <CardDescription>Consistent styling and themes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-sm mb-2">Color Palette</h4>
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-blue-600 border-2 border-background"></div>
                  <div className="w-6 h-6 rounded-full bg-green-600 border-2 border-background"></div>
                  <div className="w-6 h-6 rounded-full bg-orange-600 border-2 border-background"></div>
                  <div className="w-6 h-6 rounded-full bg-red-600 border-2 border-background"></div>
                  <div className="w-6 h-6 rounded-full bg-purple-600 border-2 border-background"></div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-sm mb-2">Typography Scale</h4>
                <div className="space-y-1">
                  <div className="text-xs text-muted-foreground">xs • sm • base • lg • xl • 2xl</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-sm mb-2">Spacing System</h4>
                <div className="flex gap-1">
                  {[1, 2, 4, 8, 16, 24].map((size) => (
                    <div 
                      key={size}
                      className="bg-blue-200 h-4"
                      style={{ width: `${size}px` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
            
            <Separator />
            
            <Button size="sm" variant="outline" className="w-full">
              <Palette className="h-4 w-4 mr-2" />
              View Design Tokens
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Performance Metrics
          </CardTitle>
          <CardDescription>Real-time performance monitoring</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-green-600">92</div>
              <div className="text-sm text-muted-foreground">Performance</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-orange-600">78</div>
              <div className="text-sm text-muted-foreground">Accessibility</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-blue-600">85</div>
              <div className="text-sm text-muted-foreground">Best Practices</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-2xl font-bold text-purple-600">90</div>
              <div className="text-sm text-muted-foreground">SEO</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common frontend development tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Button variant="outline" size="sm">
              <Code className="h-4 w-4 mr-2" />
              Generate Component
            </Button>
            <Button variant="outline" size="sm">
              <Palette className="h-4 w-4 mr-2" />
              Update Theme
            </Button>
            <Button variant="outline" size="sm">
              <Zap className="h-4 w-4 mr-2" />
              Run Lighthouse
            </Button>
            <Button variant="outline" size="sm">
              <Smartphone className="h-4 w-4 mr-2" />
              Test Mobile
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
