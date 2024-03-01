import React from 'react'
import "../index.css";
const stats = [
    { id: 1, name: 'Indulge in a nutrient-rich morning with our wholesome breakfast options.', value: 'Morning Delights' },
    { id: 2, name: 'Enjoy our warm hospitality and friendly service throughout your stay.', value: 'Feel Like home' },
    { id: 3, name: 'Make your wedding or  special occasion extraordinary.', value: 'Signature Celebrations' },
  ]
const Feature = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3 ">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4 bg-neutral-300 p-10 rounded-lg">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default Feature