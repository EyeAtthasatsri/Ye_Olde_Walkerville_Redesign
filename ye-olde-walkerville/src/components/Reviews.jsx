import React from 'react'
// import defaultIcon from '../assests/img/defaulf_profile_icon.png';

const posts = [
    {
      id: 1,
      title: '"Wonderful hospitality – great food and friendly host and staff. A good place to stay."',
      href: '#',
      // description:
      //   'Wonderful hospitality – great food and friendly host and staff. A good place to stay.',
      date: '2023',
      datetime: '2020-03-16',
      category: { title: 'Unknown', href: '#' },
      author: {
        name: 'Dan & Joyce, Chelsea',
        role: 'Quebec',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 2,
      title: '"Yet another fantastic experience & stay! Thank you Renee & Richard for always making it feel like I’m coming home to visit. 😊"',
      href: '#',
      // description:
      //   'Yet another fantastic experience & stay! Thank you Renee & Richard for always making it feel like I’m coming home to visit. 😊',
      date: '2023',
      datetime: '2020-03-16',
      category: { title: 'Unknown', href: '#' },
      author: {
        name: 'Talin Awrham',
        role: ' - ',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      id: 3,
      title: '"Wow what a real pleasant surprise in getting to stay at this very well-preserved home. Our stay in the suite at the top was very comfortable and the breakfast was fantastic."',
      href: '#',
      // description:
      //   'Wow what a real pleasant surprise in getting to stay at this very well-preserved home. Our stay in the suite at the top was very comfortable and the breakfast was fantastic.',
      date: '2023',
      datetime: '2020-03-16',
      category: { title: 'Unknown', href: '#' },
      author: {
        name: 'Mike & Cathy',
        role: '-',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    }
  ]
const Reviews = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-full lg:mx-0 w-full">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl text-center">Reviews</h2> 
      </div>
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime={post.datetime} className="text-gray-500">
                {post.date}
              </time>
              <a
                href={post.category.href}
                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              >
                {post.category.title}
              </a>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </a>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4">
              {/* <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" /> */}
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                  <a href={post.author.href}>
                    <span className="absolute inset-0" />
                    {post.author.name}
                  </a>
                </p>
                <p className="text-gray-600">{post.author.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Reviews  