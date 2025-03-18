import React from 'react'
import { EnterIcon, ProflieIcon } from '../components/Svgicon'

const Cardsec = () => {
  return (
    <section>
        <div className="py-10 flex justify-center">
            <div className="container">
                <div className="flex justify-center items-center gap-6">
                    <div className="w-1/2 flex justify-center items-center shadow-md p-2 rounded-lg hover:transition-all hover:duration-300 hover:scale-105">
                        <div className="text-center flex flex-col items-center justify-center">
                            <ProflieIcon />
                            <span className='text-lg font-semibold'>เกี่ยวกับตัวดิฉัน</span>
                            <p className='text-gray-800'>ดิฉัน นางสาวแทมมารีน ตาปราบ ชอบในการพัฒนาและออกแบบเว็บไซต์ที่ตอบสนองทุกอุปกรณ์ มุ่งมั่นสร้างสรรค์โซลูชันที่ใช้งานง่ายและดูทันสมัย</p>
                            <div className="text-center">
                                <a href="">
                                    <button className=''><EnterIcon/></button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-center items-center shadow-md p-2 rounded-lg hover:transition-all hover:duration-300 hover:scale-105">
                        <div className="">
                            <span>ผลงาน</span>
                        </div>
                    </div>
                    <div className="w-1/2 flex justify-center items-center shadow-md p-2 rounded-lg hover:transition-all hover:duration-300 hover:scale-105">
                        <div className="">
                            <span>ใบเกียรติบัตร</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Cardsec