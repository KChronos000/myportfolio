import React from 'react'

const HistoryInfo = () => {
  return (
    <section className='py-4 flex justify-center items-center'>
      <div className="container">
        <div className="flex flex-col justify-center items-center p-2 lg:p-0 gap-4">

          <div className="dark:bg-zinc-800/70 dark:text-gray-300 rounded-md border-2 dark:border-none shadow-md hover:transition-all hover:duration-500 hover:scale-[102.5%]">
            <div className="grid grid-cols-1 lg:flex justify-between gap-2">
              <div className="flex flex-col p-2">
                <h3 className='dark:text-white text-2xl font-semibold text-center'>ประวัติส่วนตัว</h3>
                <p className='text-lg'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu elit a ligula congue egestas sed a mi. Mauris convallis ex at sapien viverra, in finibus nunc congue. Fusce suscipit viverra hendrerit. Fusce a nisl ut lectus interdum placerat vitae vitae lacus. Vivamus eu fringilla sapien, in ornare nisl. Sed efficitur sit amet ipsum eu laoreet. Nunc tempor aliquam posuere. Fusce dignissim leo ut ipsum viverra tristique. In accumsan sodales turpis id tristique. Suspendisse arcu quam, rhoncus et nisl sed, vulputate malesuada diam. Nulla et luctus libero. Duis ut ligula est. Nunc lacinia urna vitae suscipit elementum. Nullam id elit at tortor dignissim elementum. Duis sit amet mattis ex.
                </p>
              </div>
              <div className="flex md:flex-none items-center justify-center p-2">
                <img className='object-cover rounded-md' src="test.jpg" width={200}/>
              </div>
            </div>
          </div>

          <div className="dark:bg-zinc-800/70 dark:text-gray-300 rounded-md border-2 dark:border-none shadow-md hover:transition-all hover:duration-500 hover:scale-[102.5%]">
            <div className="grid grid-cols-1 lg:flex justify-between gap-2">
              <div className="lg:order-2 flex flex-col p-2">
                <h3 className='dark:text-white text-2xl font-semibold text-center'>ทำไมถึงชอบในโปรแกรมคอมพิวเตอร์</h3>
                <p className='text-lg'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu elit a ligula congue egestas sed a mi. Mauris convallis ex at sapien viverra, in finibus nunc congue. Fusce suscipit viverra hendrerit. Fusce a nisl ut lectus interdum placerat vitae vitae lacus. Vivamus eu fringilla sapien, in ornare nisl. Sed efficitur sit amet ipsum eu laoreet. Nunc tempor aliquam posuere. Fusce dignissim leo ut ipsum viverra tristique. In accumsan sodales turpis id tristique. Suspendisse arcu quam, rhoncus et nisl sed, vulputate malesuada diam. Nulla et luctus libero. Duis ut ligula est. Nunc lacinia urna vitae suscipit elementum. Nullam id elit at tortor dignissim elementum. Duis sit amet mattis ex.
                </p>
              </div>
              <div className="flex md:flex-none items-center justify-center p-2">
                <img className='object-cover rounded-md' src="test.jpg" width={200}/>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HistoryInfo