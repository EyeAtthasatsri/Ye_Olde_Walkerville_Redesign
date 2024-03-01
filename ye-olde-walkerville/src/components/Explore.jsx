import React from 'react'
import home_exploringWindsor from '../assests/img/home_exploringWindsor.jpg';

const Explore = () => {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <h2 className="mt-2 text-3xl font-bold tracking-3 text-gray-900 sm:text-4xl">Exploring Windsor</h2>
                  <p className="mt-6 text-lg leading-8 text-gray-600 mb-6">
                  If you love history and architecture, you will be amazed by the Walker mansion, Willistead Manor, 
                  which is just a block away from our B&B. This stunning park and venue hosts many special events throughout
                  the year. You can also admire the other grand homes in the neighborhood as you stroll around the “Olde Walkerville”.
                  </p>

                  <p className="mt-6 text-lg leading-8 text-gray-600 mb-6">
                  For a more urban experience, you can visit Ottawa Street, where you will find a variety of upscale shops,
                  cafes, bars, and restaurants to suit your taste and budget..
                  </p>

                  <p className="mt-6 text-lg leading-8 text-gray-600 mb-6">
                  Whatever you are looking for, we are here to help you discover the best of Windsor. Click here to view
                  a list of helpful links to attractions in and around the Windsor, Ontario area.
                  </p>
              
                </div>
              </div>
              <img
                src={home_exploringWindsor}
                alt="Product screenshot"
                className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-full md:-ml-4 lg:-ml-0"
                // className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-full md:-ml-4 lg:-ml-0"
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>
        
      )
}

export default Explore