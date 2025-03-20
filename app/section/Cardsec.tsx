import React from 'react';
import { CertificateIcon, EnterIcon, MyWorkIcon, ProflieIcon } from '../components/Svgicon';

const Cardsec = () => {
  return (
    <section>
      <div className="py-10 flex justify-center items-center">
        <div className="container">
          <div className="grid md:grid-cols-3 grid-cols-1 justify-center items-center gap-6">
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
    <div className="flex items-center justify-center">
      <div className="md:w-full w-3/4 cursor-pointer flex justify-center items-center dark:bg-neutral-800 shadow-md p-2 rounded-lg hover:transition-all hover:duration-300 hover:scale-105 min-h-[300px]">
        <div className="text-center flex flex-col items-center justify-center h-full w-full">
          <ProflieIcon />
          <span className='text-lg font-semibold'>เกี่ยวกับตัวฉัน</span>
          <p className='text-gray-800 dark:text-gray-300'>ดิฉัน นางสาวแทมมารีน ตาปราบ ชอบในการพัฒนาและออกแบบเว็บไซต์ที่ตอบสนองทุกอุปกรณ์ มุ่งมั่นสร้างสรรค์โซลูชันที่ใช้งานง่ายและดูทันสมัย</p>
          <div className="text-center">
            <a href="">
              <button className=''><EnterIcon /></button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Myworks = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="md:w-full w-3/4 cursor-pointer flex justify-center items-center dark:bg-neutral-800 shadow-md p-2 rounded-lg hover:transition-all hover:duration-300 hover:scale-105 min-h-[300px]">
        <div className="text-center flex flex-col items-center justify-center h-full w-full">
          <MyWorkIcon />
          <span className='text-lg font-semibold'>ผลงาน</span>
          <p className='text-gray-800 dark:text-gray-300'>ประสบการณ์ในการพัฒนาเว็บไซต์สำหรับโรงเรียน รวมถึงการเข้าร่วมการแข่งขันวิชาการต่างๆ โดยมุ่งมั่นสร้างสรรค์โซลูชันที่เหมาะสมกับความต้องการของผู้ใช้</p>
          <div className="text-center">
            <a href="">
              <button className=''><EnterIcon /></button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export const MyCertificate = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="md:w-full w-3/4 cursor-pointer flex justify-center items-center dark:bg-neutral-800 shadow-md p-2 rounded-lg hover:transition-all hover:duration-300 hover:scale-105 min-h-[300px]">
        <div className="text-center flex flex-col items-center justify-center h-full w-full">
          <CertificateIcon />
          <span className='text-lg font-semibold'>เกียรติบัตร</span>
          <p className='text-gray-800 dark:text-gray-300'>การได้รับใบเกียรติบัตรจากการทำเว็บที่ตอบโจทย์ด้านประสบการณ์ผู้ใช้ (UX) หรือการพัฒนาระบบหลังบ้าน (Backend)</p>
          <div className="text-center">
            <a href="">
              <button className=''><EnterIcon /></button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardsec;
