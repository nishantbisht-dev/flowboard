"use client";

import { SignInButton, SignUpButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import {
  CheckSquare,
  Users,
  Zap,
  Shield,
  ArrowRight,
  LayoutDashboard,
} from "lucide-react";
import Navbar from "@/components/navbar";

export default function HomePage() {
  const { isSignedIn, user } = useUser();

  const features = [
    {
      icon: CheckSquare,
      title: "Task tracking",
      description: "Keep every task visible and easy to move through your workflow.",
    },
    {
      icon: Users,
      title: "Team sync",
      description: "Share updates, align priorities, and move faster together.",
    },
    {
      icon: Zap,
      title: "Fast setup",
      description: "Launch boards quickly with a polished Next.js experience.",
    },
    {
      icon: Shield,
      title: "Reliable security",
      description: "Protect your workspace with Clerk-powered authentication.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-violet-50">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Keep every project moving,{" "}
            <span className="text-sky-600">with clarity.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Plan work, connect with your team, and move confidently from idea to done. FlowBoard helps your days feel more organized and productive.
          </p>

          {!isSignedIn && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SignUpButton>
                <Button
                  size="lg"
                  className="text-lg px-8 rounded-full bg-sky-600 text-white shadow-xl hover:bg-sky-700"
                >
                  Start for free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </SignUpButton>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            All the tools you need to stay on top
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Smart features designed to keep your team aligned and your work moving forward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border border-slate-200 bg-white/95 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-sky-600" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-700 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to build a better routine
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Join modern teams turning chaotic work into calm progress.
          </p>

          {!isSignedIn && (
            <SignUpButton>
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 rounded-full bg-white/95 text-sky-700 shadow-xl hover:bg-white"
              >
                Start your free trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </SignUpButton>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <LayoutDashboard className="h-6 w-6 text-sky-400" />
              <span className="text-xl font-bold">FlowBoard</span>
            </div>
            <div className="flex items-center space-x-6 text-sm text-slate-400">
              <span>© 2026 FlowBoard. All rights reserved.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
