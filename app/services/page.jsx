import { Wifi, Building, Smartphone, CreditCard, MessageSquare } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      name: "Home Internet",
      icon: Wifi,
      description: "High-speed internet for your home with unlimited data and 24/7 support.",
    },
    {
      name: "Business Internet",
      icon: Building,
      description: "Reliable and fast internet solutions for businesses of all sizes.",
    },
    {
      name: "Hotspot Internet",
      icon: Smartphone,
      description: "Convenient WiFi hotspots for tenants and guests in multi-unit buildings.",
    },
    {
      name: "Billing System",
      icon: CreditCard,
      description: "Efficient billing solutions for ISPs to manage customer accounts and payments.",
    },
    {
      name: "Bulk SMS",
      icon: MessageSquare,
      description: "Mass SMS service for businesses to reach their customers effectively.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <service.icon size={48} className="text-green mb-4" />
            <h2 className="text-2xl font-semibold mb-4">{service.name}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

