import React from 'react';
import { CertificateIcon, EnterIcon, MyWorkIcon, ProflieIcon } from '@/components/Svgicon';
import Link from 'next/link';

const Cardsec = () => {
  return (
    <section className='bg-gray-100 dark:bg-[#121212]'>
      <div className="py-10 flex justify-center items-center">
        <div className="container">
          <div className="lg:p-none p-2 grid md:grid-cols-3 grid-cols-1 justify-center items-center gap-6">
            <Myself />
            <Myworks />
            <MyCertificate />
          </div>
        </div>
      </div>
    </section>
  );
}

export const Myself = () => {
  return (
    <Link href="/personalinfo">
      <div className="flex items-center justify-center">
        <div className="bg-white border dark:border-none md:w-full w-3/4 cursor-pointer flex justify-center items-center dark:bg-neutral-800 shadow-md p-2 rounded-lg hover:transition-all hover:duration-300 hover:scale-105 min-h-[300px]">
          <div className="text-center flex flex-col items-center justify-center h-full w-full">
            <ProflieIcon />
            <span className='text-lg font-semibold'>เกี่ยวกับตัวฉัน</span>
            <p className='text-gray-800 dark:text-gray-300'>ดิฉัน นางสาวแทมมารีน ตาปราบ ชอบในการพัฒนาและออกแบบเว็บไซต์ที่ตอบสนองทุกอุปกรณ์ มุ่งมั่นสร้างสรรค์โซลูชันที่ใช้งานง่ายและดูทันสมัย</p>
            <div className="text-center">
              <button className=''><EnterIcon /></button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export const Myworks = () => {
  return (
    <Link href="/works">
      <div className="flex items-center justify-center">
        <div className="bg-white border dark:border-none md:w-full w-3/4 cursor-pointer flex justify-center items-center dark:bg-neutral-800 shadow-md p-2 rounded-lg hover:transition-all hover:duration-300 hover:scale-105 min-h-[300px]">
          <div className="text-center flex flex-col items-center justify-center h-full w-full">
            <MyWorkIcon />
            <span className='text-lg font-semibold'>ผลงาน</span>
            <p className='text-gray-800 dark:text-gray-300'>ประสบการณ์ในการพัฒนาเว็บไซต์สำหรับโรงเรียน รวมถึงการเข้าร่วมการแข่งขันวิชาการต่างๆ สร้างสรรค์การแก้ไขปัญหาที่เหมาะสมกับความต้องการของผู้ใช้</p>
            <div className="text-center">
              <button className=''><EnterIcon /></button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export const MyCertificate = () => {
  return (
    <Link href="/certificates">
      <div className="flex items-center justify-center">
        <div className="bg-white border dark:border-none md:w-full w-3/4 cursor-pointer flex justify-center items-center dark:bg-neutral-800 shadow-md p-2 rounded-lg hover:transition-all hover:duration-300 hover:scale-105 min-h-[300px]">
          <div className="text-center flex flex-col items-center justify-center h-full w-full">
            <CertificateIcon />
            <span className='text-lg font-semibold'>เกียรติบัตร</span>
            <p className='text-gray-800 dark:text-gray-300'>การได้รับใบเกียรติบัตรจากการทำเว็บที่ตอบโจทย์ด้านประสบการณ์ผู้ใช้ (UX) หรือการพัฒนาระบบหลังบ้าน (Backend)</p>
            <div className="text-center">
              <button className=''><EnterIcon /></button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Cardsec;
