import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import InfoSec from '@/app/components/personalinfo/InfoSec'
import GraduatedSec from '@/app/components/personalinfo/GraduatedSec'
import React from 'react'

const page = () => {
  return (
    <>
        <Navbar />
        <div className="min-h-[40vh]">
            <div className="flex flex-col h-full mx-auto">
                <section className="flex flex-col justify-center items-center pt-6">
                    <div className="grid grid-cols-1 gap-6 container">

                        {/* Profile Image */}
                        <div className="flex justify-center">
                            <img src="test.jpg" className="rounded-full object-cover" width={300} />
                        </div>

                        {/* Intro Text */}
                        <div className="text-center">
                            <h2 className="text-xl font-bold">นางสาวแทมมารีน ตาปราบ</h2>
                            <p className="text-gray-500 mt-2">
                                ดิฉัน นางสาวแทมมารีน ตาปราบ ชอบในการพัฒนาและออกแบบเว็บไซต์ที่ตอบสนองทุกอุปกรณ์ มุ่งมั่นสร้างสรรค์โซลูชันที่ใช้งานง่ายและดูทันสมัย
                            </p>
                        </div>

                    </div>
                </section>
                <InfoSec />
                <GraduatedSec />
            </div>
        </div>
        <Footer />
    </>
  )
}

export default page
