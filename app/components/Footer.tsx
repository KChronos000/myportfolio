import React from 'react'
import { FacebookIcon, IGIcon } from './Svgicon';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-500/90 via-violet-400/90 to-sky-300/90 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Me Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">เกี่ยวกับฉัน</h3>
            <p className="text-white">
              สวัสดีค่ะ ฉันเป็นนักพัฒนาเว็บไซต์ที่หลงใหลในการออกแบบและพัฒนาเว็บที่ใช้งานได้ดีบนทุกอุปกรณ์
              มุ่งมั่นในการสร้างประสบการณ์การใช้งานที่ดีและดูทันสมัย
            </p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">ติดต่อฉัน</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-100 hover:text-blue-400">
                <i className=""></i> <FacebookIcon />
              </a>
              <a href="#" className="text-gray-100 hover:text-pink-500">
                <i className=""></i> <IGIcon />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">ข้อมูลการติดต่อ</h3>
            <p className="text-gray-400">อีเมล: contact@example.com</p>
            <p className="text-gray-400">เบอร์โทร: 123-456-7890</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            &copy; 2026 Portfolio ของฉัน. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
