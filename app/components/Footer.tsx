import React from 'react'
import { FacebookIcon, IGIcon } from './Svgicon';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-500/90 via-violet-400/90 to-sky-300/90 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 items-center justify-center">
          {/* About Me Section */}
          <div className='bg-white dark:bg-gray-800 h-full rounded-md shadow-md p-4'>
            <h3 className="text-xl font-semibold mb-4">เกี่ยวกับฉัน</h3>
            <p className="">
              วิศวคอมพิวเตอร์ วิศวคอมพิวเตอร์ วิศวคอมพิวเตอร์ สาธุ สาธุ สาธุ
            </p>
          </div>

          {/* Social Media Links */}
          <div className='bg-white dark:bg-gray-800 h-full rounded-md shadow-md p-4'>
            <h3 className="text-xl font-semibold mb-4">ช่องทางติดต่อ</h3>
            <div className="flex-col flex gap-4">
              <a href="#" className="flex hover:text-blue-400 hover:transition-all">
                <i className=""><FacebookIcon /></i> : Taemmrin Taprab
              </a>
              <a href="#" className="flex hover:text-pink-500 hover:transition-all">
                <i className=""><IGIcon /></i> : Taemmrin Taprab
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className='md:text-center lg:text-start md:col-span-full lg:col-span-1 h-full bg-white dark:bg-gray-800 rounded-md shadow-md p-4'>
            <h3 className="text-xl font-semibold mb-4">ข้อมูลการติดต่อ</h3>
            <a href='#' className="">
              <span>
                อีเมล: contact@example.com
              </span>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="bg-white/50 dark:bg-gray-900/50 rounded text-center mt-8">
          <p className="text-sm">
            &copy; 2026 Portfolio ของฉัน. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
