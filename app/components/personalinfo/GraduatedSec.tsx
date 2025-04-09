import React from 'react'

const GraduatedSec = () => {
  return (
    <section>
        <div className="flex flex-col justify-center items-center py-6">
            <h2 className='text-2xl font-bold my-4'>ประวัติการศึกษา</h2>
            <div className="grid grid-cols-3 lg:grid-cols-7 justify-center items-center gap-4 text-center">
                <div className='hover:text-cyan-400 hover:transition-all hover:duration-300 hover:scale-105'>
                    <img src="kinderschool.png" width={100} className="mx-auto bg-white shadow-md hover:shadow-indigo-500 hover:bg-blue-100 hover:transition-all hover:duration-300 object-cover rounded-full" />
                    <p className="mt-2">จบการศึกษาระดับชั้นอนุบาล</p>
                    <span>โรงเรียนอนุบาลเดือนฉาย</span>
                </div>

                <div className="border-4 border-gray-400 dark:border-gray-300 rounded-full"></div>

                <div className='hover:text-green-400 hover:transition-all hover:duration-300 hover:scale-105'>
                    <img src="elementaryschool.png" width={100} className="mx-auto p-1 bg-white shadow-md hover:shadow-teal-500 hover:bg-green-200 hover:transition-all hover:duration-300 object-cover rounded-full" />
                    <p className="mt-2">จบการศึกษาระดับชั้นประถม</p>
                    <span>โรงเรียนภูมิวิทยา</span>
                </div>

                <div className="hidden lg:block border-4 border-gray-400 dark:border-gray-300 rounded-full"></div>

                <div className='hover:text-pink-400 hover:transition-all hover:duration-300 hover:scale-105'>
                    <img src="phukhieo.png" width={100} className="mx-auto px-2 p-1 bg-white shadow-md hover:shadow-fuchsia-500 hover:bg-pink-200 hover:transition-all hover:duration-300 rounded-full" />
                    <p className="mt-2">จบการศึกษาระดับชั้นมัทธยมตอนต้น</p>
                    <span>โรงเรียนภูเขียว</span>
                </div>

                <div className="border-4 border-gray-400 dark:border-gray-300 rounded-full"></div>

                <div className='hover:text-pink-400 hover:transition-all hover:duration-300 hover:scale-105'>
                    <img src="phukhieo.png" width={100} className="mx-auto px-2 p-1 bg-white shadow-md hover:shadow-fuchsia-500 hover:bg-pink-200 hover:transition-all hover:duration-300 rounded-full" />
                    <p className="mt-2">จบการศึกษาระดับชั้นมัทธยมตอนปลาย</p>
                    <span>โรงเรียนภูเขียว</span>
                </div>
            </div>
        </div>

    </section>
  )
}

export default GraduatedSec