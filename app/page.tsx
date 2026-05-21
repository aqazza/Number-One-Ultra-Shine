"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Droplets,
  Car,
  Sparkles,
  CalendarClock,
  Clock,
  Leaf,
  ShieldCheck,
  Phone,
  MapPin,
  Mail,
} from "lucide-react"
import { BubbleBackground } from "@/components/bubble-background"
import { WaterButton } from "@/components/water-button"
import { WaveDivider } from "@/components/wave-divider"
import { ContactForm } from "@/components/contact-form"
import { PromoModal } from "@/components/promo-modal"

const heroImages = [
  { src: "/beautiful-car-washing-service.jpg", alt: "Professional vehicle detailing" },
  { src: "/car-wash-detailing-station.jpg", alt: "Auto detailing station" },
  { src: "/beautiful-car-interior-clean-up-service.jpg", alt: "Interior restoration service" },
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const closeMobileMenu = () => setMobileMenuOpen(false)
  const handleMobileNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 320)
  }
  const [heroIndex, setHeroIndex] = useState(0)

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual"
    }
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    const id = window.setInterval(() => {
      setHeroIndex((i) => (i + 1) % heroImages.length)
    }, 5000)
    return () => window.clearInterval(id)
  }, [])
  return (
    <div className="flex min-h-screen flex-col">
      <PromoModal />
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full">
        {/* Top utility strip */}
        <div className="hidden md:block bg-gradient-to-r from-blue-700 via-cyan-600 to-blue-700 text-white">
          <div className="container mx-auto px-4 max-w-7xl flex h-9 items-center justify-between text-xs">
            <div className="flex items-center gap-6">
              <a
                href="https://maps.google.com/?q=525+E+Route+66+Glendora+CA+91740"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-100 transition-colors"
              >
                <MapPin className="h-3.5 w-3.5" />
                525 E Route 66, Glendora, CA 91740
              </a>
              <a href="tel:6266294916" className="flex items-center gap-1.5 hover:text-cyan-100 transition-colors">
                <Phone className="h-3.5 w-3.5" />
                (626) 629-4916
              </a>
            </div>
            <span className="font-semibold tracking-[0.2em] uppercase text-cyan-50">
              Detailing Excellence Since 1995
            </span>
          </div>
        </div>

        {/* Main nav */}
        <div className="bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-md">
          <div className="container mx-auto px-4 max-w-7xl flex h-20 items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 flex items-center justify-center bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-600 rounded-full shadow-lg shadow-blue-500/30 ring-2 ring-white">
                <Droplets className="h-6 w-6 text-white drop-shadow" />
                <span className="absolute -top-0.5 -right-0.5 h-3 w-3 bg-yellow-400 rounded-full animate-pulse ring-2 ring-white"></span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-extrabold leading-tight bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-700 bg-clip-text text-transparent">
                  Number One Ultra Shine
                </span>
                <span className="hidden sm:block text-[10px] uppercase tracking-[0.25em] text-blue-600/80 font-semibold">
                  Premium Auto Detailing
                </span>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-7">
              <a href="#services" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors relative group">
                Services
                <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
              <a href="#about" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors relative group">
                About
                <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
              <a href="#pricing" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors relative group">
                Pricing
                <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
              <a href="#why-us" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors relative group">
                Why Us
                <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
              <a href="#contact" className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors relative group">
                Contact
                <span className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </a>
              <div className="inline-block ml-2">
                <WaterButton onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                  Book Now
                </WaterButton>
              </div>
            </nav>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
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
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <nav className="flex flex-col gap-4 mt-8">
                <a href="#services" onClick={(e) => handleMobileNavClick(e, "services")} className="text-base font-medium hover:text-blue-500 transition-colors py-2">
                  Services
                </a>
                <a href="#about" onClick={(e) => handleMobileNavClick(e, "about")} className="text-base font-medium hover:text-blue-500 transition-colors py-2">
                  About
                </a>
                <a href="#pricing" onClick={(e) => handleMobileNavClick(e, "pricing")} className="text-base font-medium hover:text-blue-500 transition-colors py-2">
                  Pricing
                </a>
                <a href="#why-us" onClick={(e) => handleMobileNavClick(e, "why-us")} className="text-base font-medium hover:text-blue-500 transition-colors py-2">
                  Why Us
                </a>
                <a href="#contact" onClick={(e) => handleMobileNavClick(e, "contact")} className="text-base font-medium hover:text-blue-500 transition-colors py-2">
                  Contact
                </a>
                <div className="mt-4">
                  <WaterButton
                    onClick={() => {
                      setMobileMenuOpen(false)
                      setTimeout(() => {
                        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })
                      }, 320)
                    }}
                  >
                    Book Now
                  </WaterButton>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
          </div>
          <div className="h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"></div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            {heroImages.map((img, i) => (
              <Image
                key={img.src}
                src={img.src}
                alt={img.alt}
                fill
                className={`object-cover brightness-[0.8] transition-opacity duration-1000 ${i === heroIndex ? "opacity-100" : "opacity-0"}`}
                priority={i === 0}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-cyan-900/20"></div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setHeroIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${i === heroIndex ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"}`}
              />
            ))}
          </div>
          <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center text-white">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                Professional Vehicle Detailing & Maintenance
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto drop-shadow-md">
                Experience 30+ years of auto-detailing with our expert & precision detailing services.
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
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Services</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              We offer a comprehensive range of car detailing and maintenance services to keep your vehicle looking its best.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white hover:bg-gradient-to-b hover:from-blue-50/50 hover:to-cyan-50/50 overflow-hidden group">
                <CardHeader className="text-center">
                  <Car className="w-12 h-12 mx-auto text-blue-500 mb-2 transition-transform duration-300 group-hover:scale-110" />
                  <CardTitle>Exterior Maintenance & Cleaning</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Routine exterior washes and upkeep that keep paint clean, protected, and looking sharp between details.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white hover:bg-gradient-to-b hover:from-blue-50/50 hover:to-cyan-50/50 overflow-hidden group">
                <CardHeader className="text-center">
                  <ShieldCheck className="w-12 h-12 mx-auto text-blue-500 mb-2 transition-transform duration-300 group-hover:scale-110" />
                  <CardTitle>Paint Decontamination & Shield Prep</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Iron, tar, and fallout removal followed by surface prep for wax, sealant, or ceramic coating.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white hover:bg-gradient-to-b hover:from-blue-50/50 hover:to-cyan-50/50 overflow-hidden group">
                <CardHeader className="text-center">
                  <Sparkles className="w-12 h-12 mx-auto text-blue-500 mb-2 transition-transform duration-300 group-hover:scale-110" />
                  <CardTitle>Interior Restoration & Sanitization</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Deep shampoo, extraction, and sanitization that brings worn interiors back to life.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white hover:bg-gradient-to-b hover:from-blue-50/50 hover:to-cyan-50/50 overflow-hidden group">
                <CardHeader className="text-center">
                  <Droplets className="w-12 h-12 mx-auto text-blue-500 mb-2 transition-transform duration-300 group-hover:scale-110" />
                  <CardTitle>Heavy Paint Correction</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Multi-stage cutting and polishing to remove swirls, scratches, and oxidation for a glass-like finish.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mt-12">
              <WaterButton
                size="lg"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book Now
              </WaterButton>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-7xl relative">
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
                  <div className="absolute -bottom-5 -right-3 bg-gradient-to-br from-blue-500 to-cyan-400 px-5 py-3 shadow-xl shadow-blue-500/40 z-20 -rotate-3 rounded-lg ring-2 ring-white">
                    <p className="text-white text-3xl md:text-4xl font-black leading-none drop-shadow-sm">30+</p>
                    <p className="text-white/95 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mt-1">Years Experience</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  About #1 Ultra Shine
                </h2>
                <p className="text-lg mb-6">
                  Founded in 1995 with a passion, Number One Ultra Shine has been providing high-quality car
                  maintenance and detailing services to our community. We take pride in our attention to detail &
                  commitment to customer satisfaction.
                </p>
                <p className="text-lg mb-6">
                  Our experienced professionals use only the highest quality products & equipment to ensure your
                  vehicle receives the care it deserves.
                </p>
                <div className="bg-gradient-to-r from-blue-100 to-cyan-100 p-6 border-l-4 border-blue-500 shadow-inner relative overflow-hidden">
                  <p className="italic relative z-10">
                    "The best car wash in town! My car always looks brand new after a visit to Number One Ultra Shine."
                  </p>
                  <p className="font-medium mt-2 relative z-10">— Louie Sanchez, Loyal Customer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WaveDivider flip={true} />

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4 max-w-7xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Pricing</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Choose the perfect package for your vehicle's needs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                <Card className="border-none shadow-lg relative bg-white overflow-hidden h-full transform transition-transform duration-300 group-hover:-translate-y-1">
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="text-2xl">Outside/Inside Wash & Clean</CardTitle>
                    <div className="text-4xl font-bold my-4 text-gray-900">
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
                      Book Now
                    </WaterButton>
                  </CardContent>
                </Card>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                <Card className="border-none shadow-lg relative bg-white overflow-hidden h-full transform transition-transform duration-300 group-hover:-translate-y-1">
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="text-2xl">Interior Detail</CardTitle>
                    <div className="text-4xl font-bold my-4 text-gray-900">
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
                      Book Now
                    </WaterButton>
                  </CardContent>
                </Card>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-300 blur opacity-30 group-hover:opacity-100 transition duration-500"></div>
                <Card className="border-none shadow-lg relative bg-white overflow-hidden h-full transform transition-transform duration-300 group-hover:-translate-y-1">
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="text-2xl">Exterior Detail</CardTitle>
                    <div className="text-4xl font-bold my-4 text-gray-900">
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
                      Book Now
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
                    <div className="text-4xl font-bold my-4 text-gray-900">
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
                      Book Now
                    </WaterButton>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-us" className="py-24 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white">
          <div className="absolute top-0 -right-32 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 -left-32 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none"></div>

          <div className="container mx-auto px-4 max-w-7xl relative">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-xs font-bold uppercase tracking-[0.25em] rounded-full mb-4 shadow-sm">
                The #1 Ultra Shine Difference
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                Why Choose Us
              </h2>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto text-lg">
                Three decades of craft, real care, and a guarantee that backs every detail.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-400"></div>
                <span className="absolute -top-2 right-4 text-8xl font-black text-emerald-200/70 select-none leading-none pointer-events-none">01</span>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 to-teal-50/0 group-hover:from-emerald-50/60 group-hover:to-teal-50/40 transition-colors duration-500"></div>
                <div className="relative z-10">
                  <div className="relative w-20 h-20 mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-emerald-500/40"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-2xl flex items-center justify-center shadow-xl">
                      <Leaf className="w-10 h-10 text-white drop-shadow" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
                    Eco-Friendly
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We use biodegradable, environmentally safe cleaning products and water reclamation systems to
                    minimize our environmental impact.
                  </p>
                </div>
              </div>

              <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-400"></div>
                <span className="absolute -top-2 right-4 text-8xl font-black text-blue-200/70 select-none leading-none pointer-events-none">02</span>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-indigo-50/0 group-hover:from-blue-50/60 group-hover:to-indigo-50/40 transition-colors duration-500"></div>
                <div className="relative z-10">
                  <div className="relative w-20 h-20 mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-400 rounded-2xl -rotate-6 group-hover:-rotate-12 transition-transform duration-500 shadow-lg shadow-blue-500/40"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-400 rounded-2xl flex items-center justify-center shadow-xl">
                      <Clock className="w-10 h-10 text-white drop-shadow" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
                    Fast Service
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our efficient process ensures you get back on the road quickly without compromising on quality. Most
                    services completed in under 30 minutes.
                  </p>
                </div>
              </div>

              <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 to-orange-400"></div>
                <span className="absolute -top-2 right-4 text-8xl font-black text-amber-200/70 select-none leading-none pointer-events-none">03</span>
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/0 to-orange-50/0 group-hover:from-amber-50/60 group-hover:to-orange-50/40 transition-colors duration-500"></div>
                <div className="relative z-10">
                  <div className="relative w-20 h-20 mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-400 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500 shadow-lg shadow-amber-500/40"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-400 rounded-2xl flex items-center justify-center shadow-xl">
                      <ShieldCheck className="w-10 h-10 text-white drop-shadow" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
                    Satisfaction Guaranteed
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
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
        <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50/60">
          <div className="absolute top-20 -left-32 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-20 -right-32 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl pointer-events-none"></div>

          <div className="container mx-auto px-4 max-w-7xl relative">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-xs font-bold uppercase tracking-[0.25em] rounded-full mb-4 shadow-sm">
                Let's Connect
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 bg-clip-text text-transparent">
                Contact Us
              </h2>
              <p className="text-center text-muted-foreground max-w-2xl mx-auto text-lg">
                Have questions or ready to schedule? Drop by, give us a call, or send a message — we'd love to help.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="relative bg-white p-8 rounded-2xl shadow-xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"></div>
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                  Visit or Reach Out
                </h3>

                <div className="space-y-3 mb-8">
                  <a
                    href="https://maps.google.com/?q=525+E+Route+66+Glendora+CA+91740"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 hover:bg-blue-50/60 -mx-2 px-2 py-3 rounded-lg transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600/80 mb-0.5">Visit Us</p>
                      <p className="text-gray-900 font-semibold">525 E Route 66</p>
                      <p className="text-gray-600 text-sm">Glendora, CA 91740</p>
                    </div>
                  </a>

                  <a
                    href="tel:6266294916"
                    className="flex items-start gap-4 hover:bg-emerald-50/60 -mx-2 px-2 py-3 rounded-lg transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-600/80 mb-0.5">Call Us</p>
                      <p className="text-gray-900 font-semibold text-lg">(626) 629-4916</p>
                    </div>
                  </a>

                  <a
                    href="mailto:1ultrashine@gmail.com"
                    className="flex items-start gap-4 hover:bg-amber-50/60 -mx-2 px-2 py-3 rounded-lg transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-400 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/30">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600/80 mb-0.5">Email Us</p>
                      <p className="text-gray-900 font-semibold break-all">1ultrashine@gmail.com</p>
                    </div>
                  </a>
                </div>

                <WaterButton
                  className="w-full"
                  onClick={() => {
                    const element = document.getElementById("contact-form");
                    element?.scrollIntoView({ behavior: "smooth", block: "center" });
                    element?.classList.add("highlight-pulse");
                    setTimeout(() => element?.classList.remove("highlight-pulse"), 2000);
                  }}
                >
                  Book An Appointment
                </WaterButton>
              </div>

              <div id="contact-form" className="relative bg-white p-8 rounded-2xl shadow-xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400"></div>
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                  Send Us a Message
                </h3>
                <p className="text-gray-500 text-sm mb-6">Drop us a line and we'll get back to you within 24 hours.</p>
                <style jsx>{`
                  @keyframes simplePulse {
                    0% {
                      box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.3);
                    }
                    50% {
                      box-shadow: 0 0 0 15px rgba(59, 130, 246, 0);
                    }
                    100% {
                      box-shadow: 0 0 0 0 rgba(59, 130, 246, 0);
                    }
                  }
                  :global(.highlight-pulse) {
                    animation: simplePulse 2.5s ease-in-out;
                  }
                `}</style>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-blue-900 to-cyan-900 text-white py-12 relative overflow-hidden">
        <BubbleBackground small />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <Droplets className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold">Number One Ultra Shine</span>
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
