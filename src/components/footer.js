import React from 'react';
import Paypal from './images/Paypal.png';
import Visa from './images/visa.png';
import Mastercard from './images/mastercard.png';




function Footer() {


  // Handle newsletter subscription
  

  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12">

          {/* Company Info Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Bhojan</h3>
            <p>Your favorite food delivery service, delivering the best food to your doorstep.</p>
            <p className="text-sm">&copy; 2026 Bhojan. All rights reserved.</p>
            <div>
              <h4 className="font-bold">Contact Us</h4>
              <p className="text-sm">Phone: +1 234 567 890</p>
              <p className="text-sm">Email: support@bhojan.com</p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="/about" className="hover:text-red-500">About Us</a></li>
              <li><a href="/contact" className="hover:text-red-500">Contact</a></li>
              <li><a href="/privacy" className="hover:text-red-500">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-red-500">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Social Links</h3>
            <div className="flex space-x-6">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                <i className="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="https://x.com/Pratik_ptdr" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
                <i className="fab fa-linkedin-in text-xl"></i>
              </a>
            </div>
          </div>

          {/* Newsletter Subscription Section */}
         

          {/* Location and Payment Methods Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Our Location</h3>
            <p>123 Foodie Street, City Name, Country</p>
            <div>
              <h4 className="font-bold">We Accept</h4>
              <div className="flex space-x-4 w-6 h-6f">
                <img src={Visa} alt="Visa" />
                <img src={Mastercard} alt="MasterCard" />
                <img src={Paypal} alt="Paypal" />
              </div>
            </div>
          </div>
          
 <div className="space-y-6">
            <h3 className="text-xl font-bold">Available in:</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p>Indore</p>
                <p>Bhopal</p>
                <p>Mumbai</p>
                <p>Delhi</p>
                <p>Bangalore</p>
              </div>
              <div>
                <p>Pune</p>
                <p>Ahmedabad</p>
                <p>Kolkata</p>
                <p>Chennai</p>
                <p>Hyderabad</p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </footer>
  );
}

export default Footer;