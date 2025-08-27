"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Github, Globe, KeyRound, Lock } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  email: z.email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

type FormValues = z.infer<typeof formSchema>;

const LoginPage = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-background to-muted/40 py-16 md:py-24">
      <div className="">
        <div className="flex min-h-[80vh] flex-col items-center justify-center gap-4">
          <Card className="w-full max-w-md">
            <CardHeader className="items-center space-y-3">
              <div className="relative">
                <div className="absolute -right-2 -top-2">
                  <Lock className="size-6 rounded-full bg-primary p-1 text-primary-foreground" />
                </div>
                <KeyRound className="size-12 rounded-full border-2 border-primary/30 bg-accent p-2.5 text-primary" />
              </div>
              <CardTitle className="text-xl">Log in to your account</CardTitle>
              <CardDescription className="max-w-xs text-center">
                Enter your credentials to access your secure dashboard and
                personal settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="grid gap-4"
                >
                  <Button variant="outline" className="w-full">
                    <Globe className="mr-2 size-4" />
                    Sign in with Google
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Github className="mr-2 size-4" />
                    Sign in with GitHub
                  </Button>
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
                      </span>
                    </div>
                  </div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <Label htmlFor={field.name}>Email</Label>
                        <FormControl>
                          <Input
                            id={field.name}
                            type="email"
                            placeholder="m@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center justify-between">
                          <Label htmlFor={field.name}>Password</Label>
                          <Button
                            variant="link"
                            className="h-auto p-0 text-sm"
                            asChild
                          >
                            <Link href="#">Forgot password?</Link>
                          </Button>
                        </div>
                        <FormControl>
                          <Input
                            id={field.name}
                            type="password"
                            placeholder="Enter your password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">
                    Sign In
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Button variant="link" className="h-auto p-0 text-sm" asChild>
              <Link href="/register">Sign up</Link>
            </Button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
