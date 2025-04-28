'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { useToast } from "@/hooks/use-toast"
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { ArrowRight, Code, Zap, Star, Sparkles, Rocket, ArrowUpRight } from 'lucide-react'

export default function Home() {
  const { toast } = useToast()

  const showToast = () => {
    toast({
      title: "Welcome!",
      description: "Thanks for checking out my awesome website!",
    })
  }

  return (
    <div className="min-h-full">
      {/* Hero Section with Gradient Background */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background pt-32 pb-24">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,rgba(255,255,255,0.5),transparent)]"></div>
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-[800px] text-center">
            <Badge className="mb-4 px-3 py-1 text-sm" variant="outline">
              ✨ Welcome to my site
            </Badge>
            <h1 className="animate-fade-up bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-5xl font-bold tracking-tight text-transparent lg:text-6xl">
              Creating Digital Experiences
            </h1>
            <p className="mt-6 animate-fade-up text-xl text-muted-foreground">
              Transforming ideas into beautiful, functional, and user-friendly digital solutions.
            </p>
            <div className="mt-10 flex animate-fade-up flex-wrap justify-center gap-4">
              <Button size="lg" className="gap-2 px-8">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 px-8" onClick={showToast}>
                Learn More <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Carousel */}
      <section className="container mx-auto px-4 py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Featured Projects</h2>
            <p className="mt-4 text-muted-foreground">
              Check out some of my recent work
            </p>
          </div>
          <Carousel className="mx-auto w-full max-w-5xl">
            <CarouselContent>
              {[1, 2, 3].map((item) => (
                <CarouselItem key={item} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-2">
                    <Card className="overflow-hidden">
                      <div className="aspect-video bg-muted/40"></div>
                      <CardContent className="p-6">
                        <Badge className="mb-2" variant="secondary">Project {item}</Badge>
                        <h3 className="text-xl font-semibold">Project Title {item}</h3>
                        <p className="mt-2 text-muted-foreground">
                          A brief description of this amazing project and the technologies used.
                        </p>
                        <Button variant="ghost" size="sm" className="mt-4 gap-1">
                          View Details <ArrowRight className="h-3 w-3" />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </section>

      {/* Services Section with Tabs */}
      <section className="container mx-auto px-4 py-24 bg-muted/30">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Services</h2>
            <p className="mt-4 text-muted-foreground">
              Explore the range of services I offer
            </p>
          </div>
          
          <Tabs defaultValue="web" className="mx-auto max-w-3xl">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="web">Web Development</TabsTrigger>
              <TabsTrigger value="design">UI/UX Design</TabsTrigger>
              <TabsTrigger value="consulting">Consulting</TabsTrigger>
            </TabsList>
            <TabsContent value="web" className="mt-6 space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Web Development</h3>
                      <p className="text-muted-foreground">
                        Creating responsive, fast, and modern web applications using the latest technologies.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="design" className="mt-6 space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Sparkles className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">UI/UX Design</h3>
                      <p className="text-muted-foreground">
                        Crafting beautiful interfaces and seamless user experiences that delight users.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="consulting" className="mt-6 space-y-4">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Zap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Consulting</h3>
                      <p className="text-muted-foreground">
                        Providing expert advice on technology choices, architecture, and digital strategy.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Why Choose Me</h2>
            <p className="mt-4 text-muted-foreground">
              Here's what sets my work apart
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-none shadow-none bg-transparent">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Fast Performance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Optimized for speed and efficiency, ensuring your users have the best experience.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-none bg-transparent">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Quality Code</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Clean, maintainable code that follows best practices and industry standards.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-none bg-transparent">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Creative Solutions</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Innovative approaches to solve complex problems with elegant solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-24 bg-primary/5 rounded-3xl my-12">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-[600px] mx-auto">
            Let's work together to bring your ideas to life. Get in touch today to discuss your project.
          </p>
          <Button size="lg" className="px-8 gap-2">
            Contact Me <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  )
}
