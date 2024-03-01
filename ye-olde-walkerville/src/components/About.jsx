import React from 'react'
import home_welcome from '../assests/img/home_welcome.jpg';


const About = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Welcome to Ye Olde Walkerville
                Bed & Breakfast</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 mb-6">
              We aim to make your stay with us a delightful experience. 
              Whether you are here for business, leisure, or a romantic getaway,
              we offer you a cozy, friendly, and relaxing environment that respects
              your personal needs and preferences.</p>
              
              

              <p className="mt-6 text-lg leading-8 text-gray-600 mb-6">At <strong>Ye Olde Walkerville Bed & Breakfast</strong>, we uphold the highest 
              standards of cleanliness, comfort, and quality in our facilities
              and equipment. We serve delicious and nutritious food and drinks,
              and we create a charming and elegant ambiance in our Bed & Breakfast facility. 
              Don’t wait, book your room today!  
              </p>
          
            </div>
          </div>
          <img
            src={home_welcome}
            alt="Product screenshot"
            className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-full md:-ml-4 lg:-ml-0"
            width={959}
            height={959}
          />
        </div>
      </div>
    </div>
  )
}

export default About