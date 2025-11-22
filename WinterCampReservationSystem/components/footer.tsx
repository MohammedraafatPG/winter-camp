import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">WinterCamp</h3>
            <p className="text-sm opacity-90">Your gateway to unforgettable camping experiences in nature's embrace.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="opacity-90 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="opacity-90 hover:opacity-100 transition-opacity">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/offers" className="opacity-90 hover:opacity-100 transition-opacity">
                  Offers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-90 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 opacity-90">
                <Phone size={16} />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 opacity-90">
                <Mail size={16} />
                <span>info@wintercamp.com</span>
              </li>
              <li className="flex items-center gap-2 opacity-90">
                <MapPin size={16} />
                <span>Mountain View, CA</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="opacity-90 hover:opacity-100 transition-opacity" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} WinterCamp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
