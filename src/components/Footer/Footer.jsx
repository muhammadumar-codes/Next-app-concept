import Link from "next/link";
// import Image from "next/image";z`


export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-indigo-600 text-white">
      <div  className="grid grid-cols-3 gap-8 p-8 text-sm text-center">
        
      
        {/* About Section */}
        <div  className="w-80">
          <h3 className="font-bold">About Digital Clock</h3>
          <p>
            Our watch app helps you manage time smarter — track, organize, and
            optimize every second of your life with ease.
          </p>
        </div>

        {/* Links */}
        <div >
          <h3 className="font-bold">Quick Links</h3>
          <ul >
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div >
          <h3 className="font-bold">Contact Us</h3>
          <p>Email: muhammadumar.codes@gmail.com</p>
          <p>Phone: +92 3010568885</p>
          <p>Address: Peshawar, Pakistan</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center" >
        <p>© 2025 GHARYAL.com — All Rights Reserved.</p>
      </div>
    </footer>
  );
}
