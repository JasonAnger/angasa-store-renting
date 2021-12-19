let services = [{ services: ["$10/month per user", "Unlimited number of projects", "Cancel anytime"] }, { services: ["$10/month per user", "Unlimited number of projects", "Cancel anytime"] }, { services: ["$10/month per user", "Unlimited number of projects", "Cancel anytime"] }]
function Pricing() {
  return <section id="services" className="bg-yellow-500">
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Bảng giá</h1>
      <div className="card-container flex lg:justify-center overflow-x-scroll lg:overflow-visible max-w-max">
        {services.map(item =>
          <div class="rounded-lg shadow-lg overflow-hidden mb-4 mx-2 lg:mx-6 min-w-min">
            <div class="px-6 py-8 bg-white dark:bg-gray-800 sm:p-10 sm:pb-6">
              <div class="flex justify-center">
                <span class="inline-flex px-4 py-1 dark:text-white rounded-full text-sm leading-5 font-semibold tracking-wide uppercase">
                  Team Plan
                </span>
              </div>
              <div class="mt-4 flex justify-center text-6xl leading-none font-extrabold dark:text-white">
                <span class="ml-1 mr-3 text-xl leading-8 font-medium text-gray-500 dark:text-gray-400">
                  from
                </span>
                $10
                <span class="ml-1 pt-8 text-2xl leading-8 font-medium text-gray-500 dark:text-gray-400">
                  /month
                </span>
              </div>
            </div>
            <div class="px-6 pt-6 pb-8 bg-white dark:bg-gray-800 sm:p-10 sm:pt-6">
              <ul>
                {item.services.map(ele =>
                  <li class="mt-4 flex items-start">
                    <div class="flex-shrink-0">
                      <svg class="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" width="6" height="6" stroke="currentColor" fill="#10b981" viewBox="0 0 1792 1792">
                        <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z">
                        </path>
                      </svg>
                    </div>
                    <p class="ml-3 text-base leading-6 text-gray-700 dark:text-gray-200">
                      {ele}
                    </p>
                  </li>
                )}
              </ul>
              <div class="mt-6 rounded-md shadow">
                <a href="#" class="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                  Start team plan
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </section>
}

export default Pricing
