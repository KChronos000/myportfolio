import React from 'react'

const GraduatedSec = () => {
  return (
    <section>
        <div className="flex flex-col justify-center items-center py-6">
            <h2 className='text-2xl font-bold my-4'>ประวัติการศึกษา</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className='hover:transition-all hover:duration-300 hover:scale-105'>
                    <img src="test.jpg" width={100} className="mx-auto" />
                    <p className="mt-2">จบการศึกษาระดับชั้นอนุบาล</p>
                </div>
                <div className='hover:transition-all hover:duration-300 hover:scale-105'>
                    <img src="test.jpg" width={100} className="mx-auto" />
                    <p className="mt-2">จบการศึกษาระดับชั้นประถม</p>
                </div>
                <div className='hover:transition-all hover:duration-300 hover:scale-105'>
                    <img src="test.jpg" width={100} className="mx-auto" />
                    <p className="mt-2">จบการศึกษาระดับชั้นมัทธยมตอนต้น</p>
                </div>
                <div className='hover:transition-all hover:duration-300 hover:scale-105'>
                    <img src="test.jpg" width={100} className="mx-auto" />
                    <p className="mt-2">จบการศึกษาระดับชั้นมัทธยมตอนปลาย</p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default GraduatedSec