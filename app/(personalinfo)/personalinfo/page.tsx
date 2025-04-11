import InfoSec from '@/app/components/personalinfo/InfoSec'
import GraduatedSec from '@/app/components/personalinfo/GraduatedSec'
import React from 'react'
import HistoryInfo from '@/app/components/personalinfo/HistoryInfo'

const page = () => {
  return (
    <>
        <div className="min-h-[40vh]">
            <div className="flex flex-col h-full mx-auto">
                <section className="flex flex-col justify-center items-center pt-[5.5rem]">
                    <div className="grid grid-cols-1 gap-6 container">

                        {/* Profile Image */}
                        <div className="flex justify-center">
                            <div className="flex flex-col justify-center items-center bg-gray-500 w-full md:h-[400] lg:h-[390] h-[420] sm:p-2 md:p-none rounded-lg area">
                                <ul className="circles z-[0]">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                                <img src="test.jpg" className="z-10 rounded-full object-cover" width={300} />
                                <div className="text-center z-10">
                                    <h2 className="text-3xl font-bold">นางสาวแทมมารีน ตาปราบ</h2>
                                    <p className="text-violet-300 text-gray-500 mt-2">
                                        ดิฉัน นางสาวแทมมารีน ตาปราบ ชอบในการพัฒนาและออกแบบเว็บไซต์ที่ตอบสนองทุกอุปกรณ์ มุ่งมั่นสร้างสรรค์โซลูชันที่ใช้งานง่ายและดูทันสมัย
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Intro Text */}

                    </div>
                </section>
                <InfoSec />
                <GraduatedSec />
                <HistoryInfo />
            </div>
        </div>
    </>
  )
}

export default page
