import React from 'react'

const GraduatedSec = () => {
  return (
    <section>
        <div className="flex flex-col justify-center items-center py-6">
            <h2 className='text-2xl font-bold my-4'>ประวัติการศึกษา</h2>
            <div className="grid grid-cols-3 lg:grid-cols-7 justify-center items-center gap-4 text-center">
                <div className='hover:transition-all hover:duration-300 hover:scale-105'>
                    <img src="test.jpg" width={100} className="mx-auto rounded-full" />
                    <p className="mt-2">จบการศึกษาระดับชั้นอนุบาล</p>
                    <span>โรงเรียนเดือนฉาย</span>
                </div>

                <div className="border-4 rounded-full"></div>

                <div className='hover:transition-all hover:duration-300 hover:scale-105'>
                    <img src="test.jpg" width={100} className="mx-auto rounded-full" />
                    <p className="mt-2">จบการศึกษาระดับชั้นประถม</p>
                    <span>โรงเรียนภูมิวิทยา</span>
                </div>

                <div className="border-4 rounded-full"></div>

                <div className='hover:transition-all hover:duration-300 hover:scale-105'>
                    <img src="test.jpg" width={100} className="mx-auto rounded-full" />
                    <p className="mt-2">จบการศึกษาระดับชั้นมัทธยมตอนต้น</p>
                    <span>โรงเรียนภูเขียว</span>
                </div>

                <div className="border-4 rounded-full"></div>

                <div className='col-span-3 lg:col-span-1 hover:transition-all hover:duration-300 hover:scale-105'>
                    <img src="test.jpg" width={100} className="mx-auto rounded-full" />
                    <p className="mt-2">จบการศึกษาระดับชั้นมัทธยมตอนปลาย</p>
                    <span>โรงเรียนภูเขียว</span>
                </div>
            </div>
        </div>

    </section>
  )
}

export default GraduatedSec