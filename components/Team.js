import React from 'react'

const Team = () => {
  return (
    <div>
          <section className="grid gap-6 lg:grid-cols-2">
              <Image
                width={1000}
                height={1000}
                src="https://source.unsplash.com/random/360x480"
                alt=""
                className="object-cover w-full rounded-md max-h-96 dark:bg-gray-500"
              />
              <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 bg-gray-400 dark:bg-gray-900">
                <Image
                  width={1000}
                  height={1000}
                  src="https://source.unsplash.com/random/100x100"
                  alt=""
                  className="object-cover w-20 h-20 rounded-full dark:bg-gray-500"
                />
                <blockquote className="max-w-lg text-lg italic font-medium text-center">
                  {" "}
                  Et, dignissimos obcaecati. Recusandae praesentium doloribus
                  vitae? Rem unde atque mollitia!
                </blockquote>
                <div className="text-center dark:text-gray-400">
                  <p>Leroy Jenkins</p>
                  <p>CEO of Company Co.</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    type="button"
                    aria-label="Page 1"
                    className="w-2 h-2 rounded-full dark:bg-gray-50"
                  ></button>
                  <button
                    type="button"
                    aria-label="Page 2"
                    className="w-2 h-2 rounded-full dark:bg-gray-600"
                  ></button>
                  <button
                    type="button"
                    aria-label="Page 3"
                    className="w-2 h-2 rounded-full dark:bg-gray-600"
                  ></button>
                  <button
                    type="button"
                    aria-label="Page 4"
                    className="w-2 h-2 rounded-full dark:bg-gray-600"
                  ></button>
                </div>
              </div>
              <div className="p-8 space-y-8 rounded-md lg:col-span-full lg:py-12 border-gray-900 dark:border-gray-300  bg-gray-400 dark:bg-gray-900">
                <h2 className="text-5xl font-bold dark:text-gray-50">
                  Create with us
                </h2>
                <p className="dark:text-gray-400">
                  We believe in a collaborative and client-centric approach. We
                  take the time to understand your needs and work closely with
                  you throughout the development process. We are committed to
                  delivering high-quality solutions that meet your expectations
                  and exceed your goals.
                </p>
              </div>
            </section>
    </div>
  )
}

export default Team
