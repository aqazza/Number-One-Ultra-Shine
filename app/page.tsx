"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Droplets,
  Car,
  Sparkles,
  CalendarClock,
  Clock,
  Leaf,
  ShieldCheck,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react"
import { BubbleBackground } from "@/components/bubble-background"
import { WaterButton } from "@/components/water-button"
import { WaveDivider } from "@/components/wave-divider"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative h-10 w-10 overflow-hidden flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-400 rounded-md">
              <Droplets className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
              Number One Ultra Shine
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-sm font-medium hover:text-blue-500 transition-colors relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-sm font-medium hover:text-blue-500 transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-blue-500 transition-colors relative group">
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#why-us" className="text-sm font-medium hover:text-blue-500 transition-colors relative group">
              Why Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-blue-500 transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </a>
            <WaterButton onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Book Now
            </WaterButton>
          </nav>
          <button className="md:hidden p-2 bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M3 12h18M3 6h18M3 18h18"></path>
            </svg>
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/beautiful-car-washing-service.jpg"
              alt="Beautiful Car Washing Service"
              fill
              className="object-cover brightness-[0.8]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-cyan-900/20"></div>
          </div>
          <div className="container relative z-10 text-center text-white">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                Professional Car Wash & Detailing
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
              Experience the art of car care with our expert wash and precision detailing services.
</p>
              <WaterButton
                size="lg"
                className="animate-pulse-subtle"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Book Now
              </WaterButton>
            </div>
          </div>
        </section>


        <WaveDivider />

        {/* Services Section */}
        <section id="services" className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Services</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              We offer a comprehensive range of car washing and detailing services to keep your vehicle looking its best
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white hover:bg-gradient-to-b hover:from-blue-50/50 hover:to-cyan-50/50 overflow-hidden group">
                <CardHeader className="text-center">
                  <Car className="w-12 h-12 mx-auto text-blue-500 mb-2 transition-transform duration-300 group-hover:scale-110" />
                  <CardTitle>Exterior Wash</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Complete exterior cleaning with premium soaps and spot-free rinse technology.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white hover:bg-gradient-to-b hover:from-blue-50/50 hover:to-cyan-50/50 overflow-hidden group">
                <CardHeader className="text-center">
                  <Sparkles className="w-12 h-12 mx-auto text-blue-500 mb-2 transition-transform duration-300 group-hover:scale-110" />
                  <CardTitle>Interior Detailing</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Deep cleaning of all interior surfaces, vacuuming, and protection treatments.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white hover:bg-gradient-to-b hover:from-blue-50/50 hover:to-cyan-50/50 overflow-hidden group">
                <CardHeader className="text-center">
                  <Droplets className="w-12 h-12 mx-auto text-blue-500 mb-2 transition-transform duration-300 group-hover:scale-110" />
                  <CardTitle>Waxing & Polishing</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Premium wax application for long-lasting shine and paint protection.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white hover:bg-gradient-to-b hover:from-blue-50/50 hover:to-cyan-50/50 overflow-hidden group">
                <CardHeader className="text-center">
                  <CalendarClock className="w-12 h-12 mx-auto text-blue-500 mb-2 transition-transform duration-300 group-hover:scale-110" />
                  <CardTitle>Monthly Plans</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Save with our subscription plans for regular maintenance and cleaning.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20 relative overflow-hidden">
          <div className="container relative">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-4 bg-blue-200 transform rotate-3"></div>
                  <div className="relative z-10 grid grid-cols-2 gap-4">
                    <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                      <Image
                        src="/beautiful-car-interior-clean-up-service.jpg"
                        alt="Car detailing process"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    </div>
                    <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                      <Image
                        src="/close-up-car-care-washing.jpg"
                        alt="Interior cleaning"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    </div>
                    <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                      <Image
                        src="/close-up-car-care-washing (1).jpg"
                        alt="Exterior washing"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    </div>
                    <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                      <Image
                        src="/car-wash-detailing-station.jpg"
                        alt="Car polishing and detailing"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-blue-500 to-cyan-400 p-4 shadow-lg z-20">
                    <p className="text-white font-bold">10+ Years Experience</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  About Number One Ultra Shine
                </h2>
                <p className="text-lg mb-6">
                  Founded with a passion for automotive care, Number One Ultra Shine has been providing premium car
                  washing and detailing services to our community for years. We take pride in our attention to detail
                  and commitment to customer satisfaction.
                </p>
                <p className="text-lg mb-6">
                  Our team of experienced professionals uses only the highest quality products and equipment to ensure
                  your vehicle receives the care it deserves.
                </p>
                <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 border-l-4 border-blue-500 shadow-inner relative overflow-hidden">
                  <p className="italic relative z-10">
                    "The best car wash in town! My car always looks brand new after a visit to Number One Ultra Shine."
                  </p>
                  <p className="font-medium mt-2 relative z-10">— Amr M., Loyal Customer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WaveDivider flip={true} />

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Pricing</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Choose the perfect package for your vehicle's needs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                <Card className="border-none shadow-lg relative bg-white overflow-hidden h-full transform transition-transform duration-300 group-hover:-translate-y-1">
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="text-2xl">Outside/Inside Wash & Clean</CardTitle>
                    <div className="text-4xl font-bold my-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                      $100
                    </div>
                    <p className="text-sm text-muted-foreground">(sedan)</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-green-500 mr-2"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Premium hand wash
                      </li>
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-green-500 mr-2"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Wipe/vacuum interior
                      </li>
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-green-500 mr-2"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Clean windows
                      </li>
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-green-500 mr-2"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Spray wax
                      </li>
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-green-500 mr-2"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Tire shine
                      </li>
                    </ul>
                    <WaterButton
                      variant="outline"
                      className="w-full"
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Select Package
                    </WaterButton>
                  </CardContent>
                </Card>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                <Card className="border-none shadow-lg relative bg-white overflow-hidden h-full transform transition-transform duration-300 group-hover:-translate-y-1">
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="text-2xl">Interior Detail</CardTitle>
                    <div className="text-4xl font-bold my-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                      $200
                    </div>
                    <p className="text-sm text-muted-foreground">(sedan & no wash included)</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-green-500 mr-2"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Wash/extract up to 4 mats
                      </li>
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-green-500 mr-2"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Shampoo seats/carpet
                      </li>
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-green-500 mr-2"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Wipe dash, clean cupholders
                      </li>
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-green-500 mr-2"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Clean vents & door pockets
                      </li>
                    </ul>
                    <WaterButton
                      variant="outline"
                      className="w-full"
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Select Package
                    </WaterButton>
                  </CardContent>
                </Card>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                <Card className="border-none shadow-lg relative bg-white overflow-hidden h-full transform transition-transform duration-300 group-hover:-translate-y-1">
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="text-2xl">Exterior Detail</CardTitle>
                    <div className="text-4xl font-bold my-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                      $200
                    </div>
                    <p className="text-sm text-muted-foreground">(sedan & no interior cleaning)</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-green-500 mr-2"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Wash outside & clean windows
                      </li>
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-green-500 mr-2"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Premium Clay Wax & Hand Wax
                      </li>
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-green-500 mr-2"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Polish the paint
                      </li>
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-green-500 mr-2"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Tire shine
                      </li>
                    </ul>
                    <WaterButton
                      variant="outline"
                      className="w-full"
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Select Package
                    </WaterButton>
                  </CardContent>
                </Card>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
                <Card className="border-none shadow-xl relative bg-white overflow-hidden h-full transform transition-transform duration-300 group-hover:-translate-y-1">
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center py-2 font-medium">
                    Best Value
                  </div>
                  <CardHeader className="text-center pb-2 pt-10">
                    <CardTitle className="text-2xl">Full Detail</CardTitle>
                    <div className="text-4xl font-bold my-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                      $350
                    </div>
                    <p className="text-sm text-muted-foreground">(sedan)</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center mb-4 font-medium">Interior Detail + Exterior Detail</p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-green-500 mr-2"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Complete interior detailing
                      </li>
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-green-500 mr-2"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Complete exterior detailing
                      </li>
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-green-500 mr-2"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Premium Clay & Hand Wax
                      </li>
                      <li className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-green-500 mr-2"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        Full interior shampoo
                      </li>
                    </ul>
                    <WaterButton
                      className="w-full"
                      onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                      Select Package
                    </WaterButton>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-us" className="py-20 relative overflow-hidden">
          <div className="container relative">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Why Choose Us</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              We're committed to providing the best car wash experience
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-6 w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                    <Leaf className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">Eco-Friendly</h3>
                  <p className="text-center">
                    We use biodegradable, environmentally safe cleaning products and water reclamation systems to
                    minimize our environmental impact.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-6 w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                    <Clock className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">Fast Service</h3>
                  <p className="text-center">
                    Our efficient process ensures you get back on the road quickly without compromising on quality. Most
                    services completed in under 30 minutes.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-6 w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                    <ShieldCheck className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-center">Satisfaction Guaranteed</h3>
                  <p className="text-center">
                    If you're not completely satisfied with our service, we'll make it right. Your satisfaction is our
                    top priority.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WaveDivider flip={true} />

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Contact Us</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Have questions or ready to schedule? Get in touch with us today
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="bg-white p-8 shadow-lg relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                      Business Hours
                    </h3>
                    <div className="space-y-2 mb-8">
                      <div className="flex justify-between">
                        <span>Monday - Friday</span>
                        <span className="font-medium">8:00 AM - 7:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span className="font-medium">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="font-medium">9:00 AM - 5:00 PM</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                      Location
                    </h3>
                    <address className="not-italic mb-4 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-blue-500 mr-2"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      123 Wash Street
                      <br />
                      Anytown, ST 12345
                    </address>

                    <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                      Contact Information
                    </h3>
                    <div className="space-y-2">
                      <p className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-blue-500 mr-2"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        Phone: (626) 629-4916
                      </p>
                      <p className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5 text-blue-500 mr-2"
                        >
                          <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                        </svg>
                        Email: info@numberoneultrashine.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="bg-white p-8 shadow-lg relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                      Send Us a Message
                    </h3>
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-cyan-900 text-white py-12 relative overflow-hidden">
        <BubbleBackground small />
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <Droplets className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold">Number One Ultra Shine</span>
            </div>
            <div className="flex gap-6 mb-6 md:mb-0">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-blue-400 transition-colors transform hover:scale-110 transition-transform duration-300"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-blue-400 transition-colors transform hover:scale-110 transition-transform duration-300"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-blue-400 transition-colors transform hover:scale-110 transition-transform duration-300"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="border-t border-blue-800/50 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; {new Date().getFullYear()} Number One Ultra Shine. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
