import React from "react";

const Card = ({ userData, deletetionHandler, updateHandler }) => {
  return (
    <div>
      <div className="h-screen">
        <section className="md:h-full flex items-center text-gray-600">
          <div className="container px-5 mx-auto">
            <div className="text-center mb-12 sm:pt-0">
              <h1 className="text-4xl md:text-6xl text-gray-700 font-semibold md:mt-8 sm:mt-2">
                Blogs
              </h1>
            </div>
            <div className="flex flex-wrap -m-4">
              {userData?.length > 0 &&
                userData?.map((item) => {
                  return (
                    <>
                      <div key={item.id} className="p-4 sm:w-1/2 lg:w-1/3">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                          <img
                            className="lg:h-72 md:h-48 w-full object-cover object-center"
                            src={"https://picsum.photos/id/188/720/400"}
                            alt="blog"
                          />

                          <div className="p-6 hover:bg-indigo-700 hover:text-white transition duration-300 ease-in">
                            <h2 className="text-base font-medium text-indigo-300 mb-1">
                              {item.auther}
                            </h2>
                            <h1 className="text-2xl font-bold mb-3">
                              {item.title}
                            </h1>
                            <p className="leading-relaxed mb-3 line-clamp-3">
                              {item.content}
                            </p>
                            <div className="flex items-center flex-wrap justify-between">
                              <a className="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">
                                Read More
                              </a>
                              <button
                                onClick={() => deletetionHandler(item.id)}
                                className="px-1 text-white inline-flex items-center md:mb-2 lg:mb-0"
                              >
                                Delete
                              </button>
                              <button
                                onClick={() => updateHandler(item.id)}
                                className="px-1 text-white inline-flex items-center md:mb-2 lg:mb-0"
                              >
                                Update
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Card;