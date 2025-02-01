import Link from "next/link"

export default function PackagesPage() {
  const packages = [
    { name: "Basic", speed: "10 Mbps", price: 1500, features: ["Unlimited Data", "24/7 Support"] },
    {
      name: "Standard",
      speed: "25 Mbps",
      price: 2500,
      features: ["Unlimited Data", "24/7 Support", "Free Installation"],
    },
    {
      name: "Premium",
      speed: "50 Mbps",
      price: 4000,
      features: ["Unlimited Data", "24/7 Support", "Free Installation", "Static IP"],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold text-center mb-12">Our Packages</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">{pkg.name}</h2>
            <p className="text-3xl font-bold mb-4">Ksh {pkg.price}/mo</p>
            <p className="text-lg mb-4">{pkg.speed}</p>
            <ul className="mb-6">
              {pkg.features.map((feature, i) => (
                <li key={i} className="mb-2">
                  ✓ {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="bg-green text-white px-4 py-2 rounded-lg hover:bg-darkgreen transition-colors"
            >
              Get Started
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

