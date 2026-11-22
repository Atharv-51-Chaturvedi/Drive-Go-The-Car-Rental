import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
    return (
        <div className='px-6 md:px-16 lg:px-24 xl:px-32 mt-48 text-sm text-gray-500'>
            <div className='flex flex-wrap justify-between items-start gap-10 pb-10 border-b border-borderColor'>
                <div className='max-w-80'>
                    
                    <img src={assets.logo} alt="logo" className='h-10 md:h-9' />
                    <p className='max-w-80 mt-3'>
                        Your trusted platform for renting cars easily, affordably, and conveniently. Find the perfect car for your journey.
                    </p>
                    <div className='flex items-center gap-3 mt-6'>
                        {[assets.facebook_logo, assets.instagram_logo, assets.twitter_logo, assets.gmail_logo].map(
              (logo, i) => (
                <a key={i} href="#">
                  <img src={logo} className="w-5 h-5 hover:opacity-70 transition" />
                </a>
              )
            )}
                    </div>
                </div>

                <div>
                    <h2 className='text-lg text-gray-800'>Quick Links</h2>
                    <ul className='mt-3 flex flex-col gap-1.5'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Browse Cars</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">List Your Car</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-lg text-gray-800">
              Customer Support
            </h2>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Insurance</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-lg text-gray-800'>Contact</h2>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li>📍 24//11 DriveGo, Gomti nagar</li>
                        <li>📍 Lucknow, India</li>
                        <li>📧 support@drivego.com</li>
                        <li>📞 +91 85459 3××××</li>
                    </ul>
                </div>
            </div>
            {/* <hr className='border-gray-300 mt-8' /> */}
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} <a href="#">DriveGo</a>. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a></li>
                    <li>|</li>
                    <li><a href="#">Terms</a></li>
                    <li>|</li>
                    <li><a href="#">Cookies</a></li>
                </ul>
            </div>
        </div>

    )
}
export default Footer;