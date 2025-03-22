"use client";

import Link from "next/link";
import { useTranslation } from "./language-provider";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import Logoimage from "../public/assets/photos/logo.jpg";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  // Phone numbers with click-to-call functionality
  const phoneNumbers = [
    { number: "+251 911 215 340", label: "Call +251 911 215 340" },
    { number: "+251 118 304 346", label: "Call +251 118 304 346" },
    { number: "+971 559 690 130", label: "Call +971 559 690 130" },
  ];

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 via-yellow-400 to-black flex items-center justify-center">
                <Image
                  src={Logoimage}
                  alt="Communi Tech Logo"
                  className="text-white rounded-2xl font-bold text-lg"
                  width={40}
                  height={40}
                />
              </div>
              <span className="ml-2 text-xl font-bold">Communi Tech</span>
            </div>
            <p className="text-muted-foreground mb-4">Innovative technology solutions for modern businesses.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/communitechtechnology?igsh=YzljYTk1ODg3Zg=="
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Solutions */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Solutions</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Fraud Prevention
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Smart Document
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Smart Parking
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Network Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Addis Ababa, Ethiopia, Legehar Ameld Building, 2nd Floor Off No 220
                </span>
              </li>
              {/* Phone Numbers with Click-to-Call */}
              {phoneNumbers.map((phone, index) => (
                <li key={index} className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-primary" />
                  <a
                    href={`tel:${phone.number}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                    title={phone.label}
                  >
                    {phone.number}
                  </a>
                </li>
              ))}
              {/* Email with Click-to-Email */}
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <a
                  href="mailto:yilmanovich@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  title="Send an email"
                >
                  yilmanovich@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Communi Tech. {t("allRightsReserved")}.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}