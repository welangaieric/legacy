import Link from "next/link"
import { Facebook, Youtube, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4 flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h4 className="font-semibold mb-4">Contacts</h4>
          <p>
            <a href="mailto:info@konnektsmartlife.com" className="text-blue hover:text-green transition-colors">
              info@konnektsmartlife.com
            </a>
          </p>
          <p>
            <a href="mailto:support@konnektsmartlife.com" className="text-blue hover:text-green transition-colors">
              support@konnektsmartlife.com
            </a>
          </p>
          <p>+254 799 333 639</p>
          <p>+254 523 000 333</p>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h4 className="font-semibold mb-4">Explore</h4>
          <p>Billing System</p>
          <p>Bulk SMS</p>
          <p>Home & Business Internet Connection</p>
        </div>
        <div className="w-full md:w-1/3">
          <div className="mb-4">
            <img src="/placeholder.svg?height=48&width=48" alt="Konnekt Logo" className="w-12 h-12 object-contain" />
          </div>
          <div className="flex space-x-4 mb-4">
            <Link href="#" className="text-darkgreen hover:text-green transition-colors">
              <Facebook size={24} />
            </Link>
            <Link href="#" className="text-darkgreen hover:text-green transition-colors">
              <Youtube size={24} />
            </Link>
            <Link href="#" className="text-darkgreen hover:text-green transition-colors">
              <Twitter size={24} />
            </Link>
            <Link href="#" className="text-darkgreen hover:text-green transition-colors">
              <Instagram size={24} />
            </Link>
          </div>
          <p>&copy; Konnekt Smart Life 2024</p>
        </div>
      </div>
    </footer>
  )
}

