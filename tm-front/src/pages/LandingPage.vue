<template>
  <section class="relative">
    <!-- <img class="absolute top-0 left-0" src="@/assets/LOGO_Pooger.svg" alt="" /> -->
    <!-- Header -->
    <div class="flex flex-row items-center justify-between px-4 py-4">
      <div
        class="w-1/12 flex items-center justify-between px-4 py-5 bg-transparent"
      >
        <a href="#">
          <img src="@/assets/LOGO_Pooger.svg" class="h-[50px]" alt="" />
        </a>
      </div>
      <!-- <div
        class="relative z-20 flex items-center justify-between px-4 py-5 bg-transparent"
      > -->
      <div class="w-auto">
        <div class="flex flex-wrap items-center">
          <div class="w-auto hidden lg:block">
            <ul class="flex items-center mr-16">
              <li class="mr-9 font-medium hover:text-gray-700">
                <a href="#">Features</a>
              </li>
              <li class="mr-9 font-medium hover:text-gray-700">
                <a href="#">Solutions</a>
              </li>
              <li class="mr-9 font-medium hover:text-gray-700">
                <a href="#">Resources</a>
              </li>
              <li class="font-medium hover:text-gray-700">
                <a href="#">Pricing</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="w-auto ml-10">
        <div class="flex flex-wrap items-center">
          <div class="w-auto hidden mr-5 lg:block">
            <div class="inline-block">
              <button
                class="py-3 px-5 w-full hover:text-gray-700 font-medium rounded-xl bg-transparent transition ease-in-out duration-200"
                type="button"
              >
                Sign In
              </button>
            </div>
          </div>
          <div class="w-auto hidden lg:block">
            <div class="inline-block">
              <button
                class="py-3 px-5 w-full text-white font-semibold border hover:cursor-pointer border-primary/80 rounded-xl focus:ring focus:ring-primary/40 bg-primary/80 hover:bg-primary/100 transition ease-in-out duration-200"
                type="button"
              >
                Try 14 Days Free Trial
              </button>
            </div>
          </div>
          <div class="w-auto lg:hidden">
            <a href="#">
              <svg
                class="navbar-burger text-indigo-600"
                width="51"
                height="51"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="56" height="56" rx="28" fill="currentColor"></rect>
                <path
                  d="M37 32H19M37 24H19"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <!-- </div> -->
    </div>

    <!-- Hero section -->
    <div class="overflow-hidden pt-16 pb-48">
      <div class="relative container px-4 mx-auto">
        <div class="flex flex-wrap -m-8">
          <div class="w-full md:w-1/2 lg:w-4/12 xl:w-6/12 p-8">
            <img src="@/assets/LOGO_Pooger_square.svg" alt="" />
            <h1
              class="mb-9 text-6xl text-secondary md:text-8xl lg:text-13xl font-bold font-heading md:max-w-2xl leading-none"
            >
              Meet the next useless HR tool
            </h1>
            <div>
              <p class="mb-9 text-xl text-gray-900 font-medium md:max-w-sm">
                Get the best of the nothingness in your company, bring boring
                experiences to your employees and make them hate you.
              </p>
              <div class="mb-12 md:inline-block">
                <button
                  class="py-3 px-5 w-full text-white font-semibold border hover:cursor-pointer border-primary/80 rounded-xl focus:ring focus:ring-primary/40 bg-primary/80 hover:bg-primary/100 transition ease-in-out duration-200"
                  type="button"
                >
                  Try 14 Days Free Trial
                </button>
              </div>
              <h3 class="mb-3 text-gray-900 font-semibold">
                Trusted by not even us
              </h3>
              <div class="flex flex-wrap items-center -m-1">
                <div class="w-auto p-1">
                  <div class="flex flex-wrap -m-0.5">
                    <div class="w-auto p-0.5">
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.707 1.21267C8.02812 0.224357 9.42632 0.224357 9.74744 1.21267L10.8948 4.74387C11.0384 5.18586 11.4503 5.48511 11.915 5.48511H15.6279C16.6671 5.48511 17.0992 6.81488 16.2585 7.42569L13.2547 9.60809C12.8787 9.88126 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.327 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.327 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88126 4.19978 9.60809L1.19596 7.42569C0.355248 6.81488 0.787317 5.48511 1.82649 5.48511H5.53942C6.00415 5.48511 6.41603 5.18586 6.55964 4.74387L7.707 1.21267Z"
                          fill="#9856d0"
                        ></path>
                      </svg>
                    </div>
                    <div class="w-auto p-0.5">
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.707 1.21267C8.02812 0.224357 9.42632 0.224357 9.74744 1.21267L10.8948 4.74387C11.0384 5.18586 11.4503 5.48511 11.915 5.48511H15.6279C16.6671 5.48511 17.0992 6.81488 16.2585 7.42569L13.2547 9.60809C12.8787 9.88126 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.327 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.327 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88126 4.19978 9.60809L1.19596 7.42569C0.355248 6.81488 0.787317 5.48511 1.82649 5.48511H5.53942C6.00415 5.48511 6.41603 5.18586 6.55964 4.74387L7.707 1.21267Z"
                          fill="#9856d0"
                        ></path>
                      </svg>
                    </div>
                    <div class="w-auto p-0.5">
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.707 1.21267C8.02812 0.224357 9.42632 0.224357 9.74744 1.21267L10.8948 4.74387C11.0384 5.18586 11.4503 5.48511 11.915 5.48511H15.6279C16.6671 5.48511 17.0992 6.81488 16.2585 7.42569L13.2547 9.60809C12.8787 9.88126 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.327 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.327 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88126 4.19978 9.60809L1.19596 7.42569C0.355248 6.81488 0.787317 5.48511 1.82649 5.48511H5.53942C6.00415 5.48511 6.41603 5.18586 6.55964 4.74387L7.707 1.21267Z"
                          fill="#9856d0"
                        ></path>
                      </svg>
                    </div>
                    <div class="w-auto p-0.5">
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.707 1.21267C8.02812 0.224357 9.42632 0.224357 9.74744 1.21267L10.8948 4.74387C11.0384 5.18586 11.4503 5.48511 11.915 5.48511H15.6279C16.6671 5.48511 17.0992 6.81488 16.2585 7.42569L13.2547 9.60809C12.8787 9.88126 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.327 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.327 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88126 4.19978 9.60809L1.19596 7.42569C0.355248 6.81488 0.787317 5.48511 1.82649 5.48511H5.53942C6.00415 5.48511 6.41603 5.18586 6.55964 4.74387L7.707 1.21267Z"
                          fill="#9856d0"
                        ></path>
                      </svg>
                    </div>
                    <div class="w-auto p-0.5">
                      <svg
                        width="17"
                        height="16"
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.707 1.21267C8.02812 0.224357 9.42632 0.224357 9.74744 1.21267L10.8948 4.74387C11.0384 5.18586 11.4503 5.48511 11.915 5.48511H15.6279C16.6671 5.48511 17.0992 6.81488 16.2585 7.42569L13.2547 9.60809C12.8787 9.88126 12.7214 10.3654 12.865 10.8074L14.0123 14.3386C14.3335 15.327 13.2023 16.1488 12.3616 15.538L9.35775 13.3556C8.98178 13.0824 8.47266 13.0824 8.09669 13.3556L5.09287 15.538C4.25216 16.1488 3.12099 15.327 3.44211 14.3386L4.58947 10.8074C4.73308 10.3654 4.57575 9.88126 4.19978 9.60809L1.19596 7.42569C0.355248 6.81488 0.787317 5.48511 1.82649 5.48511H5.53942C6.00415 5.48511 6.41603 5.18586 6.55964 4.74387L7.707 1.21267Z"
                          fill="#9856d0"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div class="w-auto p-1">
                  <div class="flex flex-wrap -m-0.5">
                    <div class="w-auto p-0.5">
                      <p class="text-gray-900 font-bold">4.2/5</p>
                    </div>
                    <div class="w-auto p-0.5">
                      <p class="text-gray-600 font-medium">
                        (42k fake Reviews)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="w-full md:w-1/2 lg:w-8/12 xl:w-8/12 xl:absolute xl:right-0 xl:-bottom-20 p-8"
          >
            <div
              class="flex flex-wrap justify-center items-center lg:justify-end -m-3"
            >
              <div class="w-auto lg:w-1/3 xl:pt-28 p-3">
                <div class="flex flex-wrap justify-end">
                  <div class="w-auto">
                    <img
                      class="mx-auto transform hover:-translate-y-16 transition ease-in-out duration-1000"
                      src=""
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="w-auto lg:w-1/3 p-3">
                <div class="flex flex-wrap justify-center -m-3">
                  <div class="w-auto p-3">
                    <a href="#">
                      <img
                        class="mx-auto transform hover:-translate-y-16 transition ease-in-out duration-1000"
                        src=""
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="w-auto p-3">
                    <img
                      class="mx-auto transform hover:-translate-y-16 transition ease-in-out duration-1000"
                      src=""
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="w-auto lg:w-1/3 p-3">
                <div class="flex flex-wrap">
                  <div class="w-auto">
                    <img
                      class="mx-auto transform hover:-translate-y-16 transition ease-in-out duration-1000"
                      src=""
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-16">
    <div class="container px-4 mx-auto mb-10">
      <div class="max-w-xl xl:max-w-6xl mx-auto">
        <div class="flex flex-wrap -mx-4 mb-12">
          <div class="w-full xl:w-1/2 px-4 mb-16 xl:mb-0">
            <div class="sm:pl-20 xl:pl-0 max-w-xl">
              <h2 class="font-heading text-4xl font-black mb-8">
                Lorem ipsum dolor sit amet consectetur
              </h2>
              <p class="max-w-md text-lg font-bold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan
                aliquet orci.
              </p>
            </div>
          </div>
          <div class="w-full xl:w-1/2 px-4">
            <div class="pl-20 relative">
              <img
                class="img-fluid w-full h-67 border-2 border-black rounded-md shadow"
                src="@/assets/images/feuille_de_temps.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-6 bg-ternary">
      <div class="container px-4 mx-auto">
        <div class="max-w-xl xl:max-w-6xl mx-auto">
          <div class="px-6 bg-white border-2 border-black rounded-md shadow">
            <div class="flex flex-wrap items-center justify-between -mx-3">
              <div class="w-full md:w-1/2 xl:w-auto px-3">
                <div class="flex py-5 items-center">
                  <span class="inline-block mr-3">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.6667 20.6667C29.04 20.6667 29.3333 20.9601 29.3333 21.3334V22.6667C29.3333 24.8801 27.5467 26.6667 25.3333 26.6667C25.3333 24.4667 23.5333 22.6667 21.3333 22.6667C19.1333 22.6667 17.3333 24.4667 17.3333 26.6667H14.6667C14.6667 24.4667 12.8667 22.6667 10.6667 22.6667C8.46667 22.6667 6.66667 24.4667 6.66667 26.6667C4.45333 26.6667 2.66667 24.8801 2.66667 22.6667V20.0001C2.66667 19.2667 3.26667 18.6667 4 18.6667H16.6667C18.5067 18.6667 20 17.1734 20 15.3334V8.00008C20 7.26675 20.6 6.66675 21.3333 6.66675H22.4533C23.4133 6.66675 24.2933 7.18675 24.7733 8.01342L25.6267 9.50675C25.7467 9.72008 25.5867 10.0001 25.3333 10.0001C23.4933 10.0001 22 11.4934 22 13.3334V17.3334C22 19.1734 23.4933 20.6667 25.3333 20.6667H28.6667Z"
                        fill="#EE74DA"
                      ></path>
                      <path
                        d="M10.6667 29.3333C12.1394 29.3333 13.3333 28.1394 13.3333 26.6667C13.3333 25.1939 12.1394 24 10.6667 24C9.19391 24 8 25.1939 8 26.6667C8 28.1394 9.19391 29.3333 10.6667 29.3333Z"
                        fill="#EE74DA"
                      ></path>
                      <path
                        d="M21.3333 29.3333C22.8061 29.3333 24 28.1394 24 26.6667C24 25.1939 22.8061 24 21.3333 24C19.8606 24 18.6667 25.1939 18.6667 26.6667C18.6667 28.1394 19.8606 29.3333 21.3333 29.3333Z"
                        fill="#EE74DA"
                      ></path>
                      <path
                        d="M29.3333 16.7067V18.6667H25.3333C24.6 18.6667 24 18.0667 24 17.3333V13.3333C24 12.6 24.6 12 25.3333 12H27.0533L28.9867 15.3867C29.2133 15.7867 29.3333 16.24 29.3333 16.7067Z"
                        fill="#EE74DA"
                      ></path>
                      <path
                        d="M17.44 2.66675H7.58667C4.86667 2.66675 2.66667 4.86675 2.66667 7.58675V16.0934C2.66667 16.8267 3.26667 17.4267 4 17.4267H16.2C17.56 17.4267 18.6667 16.3201 18.6667 14.9601V3.89341C18.6667 3.21341 18.12 2.66675 17.44 2.66675ZM13.4267 9.42675L10.64 12.1201C10.44 12.3067 10.1867 12.4001 9.94667 12.4001C9.69334 12.4001 9.44 12.3067 9.25333 12.1201L7.90667 10.8401C7.50667 10.4534 7.49333 9.81341 7.88 9.41341C8.25333 9.01341 8.89333 9.01341 9.29333 9.38675L9.94667 10.0134L12.04 7.98675C12.44 7.60008 13.0667 7.61341 13.4533 8.01341C13.84 8.41341 13.8267 9.04008 13.4267 9.42675Z"
                        fill="#EE74DA"
                      ></path>
                    </svg>
                  </span>
                  <h4 class="font-bold">Respect de la vie privée</h4>
                </div>
              </div>
              <div class="w-full md:w-1/2 xl:w-auto px-3">
                <div class="flex py-5 items-center">
                  <span class="inline-block mr-3">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25 10.6667V13.4667C24.4133 13.3867 23.7467 13.3467 23 13.3334V10.6667C23 6.46675 21.8133 3.66675 16 3.66675C10.1867 3.66675 9 6.46675 9 10.6667V13.3334C8.25333 13.3467 7.58667 13.3867 7 13.4667V10.6667C7 6.80008 7.93333 1.66675 16 1.66675C24.0667 1.66675 25 6.80008 25 10.6667Z"
                        fill="#EE74DA"
                      ></path>
                      <path
                        d="M25 13.4666C24.4133 13.3866 23.7467 13.3466 23 13.3333H8.99999C8.25332 13.3466 7.58666 13.3866 6.99999 13.4666C3.59999 13.8799 2.66666 15.5466 2.66666 19.9999V22.6666C2.66666 27.9999 3.99999 29.3333 9.33332 29.3333H22.6667C28 29.3333 29.3333 27.9999 29.3333 22.6666V19.9999C29.3333 15.5466 28.4 13.8799 25 13.4666ZM11.6133 22.2799C11.36 22.5199 11.0133 22.6666 10.6667 22.6666C10.4933 22.6666 10.32 22.6266 10.16 22.5599C9.98666 22.4933 9.85332 22.3999 9.71999 22.2799C9.47999 22.0266 9.33332 21.6799 9.33332 21.3333C9.33332 21.1599 9.37332 20.9866 9.43999 20.8266C9.50666 20.6666 9.59999 20.5199 9.71999 20.3866C9.85332 20.2666 9.98666 20.1733 10.16 20.1066C10.6533 19.8933 11.24 20.0133 11.6133 20.3866C11.7333 20.5199 11.8267 20.6666 11.8933 20.8266C11.96 20.9866 12 21.1599 12 21.3333C12 21.6799 11.8533 22.0266 11.6133 22.2799ZM17.2267 21.8399C17.16 21.9999 17.0667 22.1466 16.9467 22.2799C16.6933 22.5199 16.3467 22.6666 16 22.6666C15.64 22.6666 15.3067 22.5199 15.0533 22.2799C14.9333 22.1466 14.84 21.9999 14.7733 21.8399C14.7067 21.6799 14.6667 21.5066 14.6667 21.3333C14.6667 20.9733 14.8133 20.6399 15.0533 20.3866C15.5467 19.8933 16.44 19.8933 16.9467 20.3866C17.1867 20.6399 17.3333 20.9733 17.3333 21.3333C17.3333 21.5066 17.2933 21.6799 17.2267 21.8399ZM22.28 22.2799C22.0267 22.5199 21.68 22.6666 21.3333 22.6666C20.9867 22.6666 20.64 22.5199 20.3867 22.2799C20.1467 22.0266 20 21.6933 20 21.3333C20 20.9733 20.1467 20.6399 20.3867 20.3866C20.8933 19.8933 21.7867 19.8933 22.28 20.3866C22.3333 20.4533 22.3867 20.5199 22.44 20.5999C22.4933 20.6666 22.5333 20.7466 22.56 20.8266C22.6 20.9066 22.6267 20.9866 22.64 21.0666C22.6533 21.1599 22.6667 21.2533 22.6667 21.3333C22.6667 21.6799 22.52 22.0266 22.28 22.2799Z"
                        fill="#EE74DA"
                      ></path>
                    </svg>
                  </span>
                  <h4 class="font-bold">Données confidentielles</h4>
                </div>
              </div>
              <div class="w-full md:w-1/2 xl:w-auto px-3">
                <div class="flex py-5 items-center">
                  <span class="inline-block mr-3">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.1866 24.6532V11.1066C11.1866 10.5732 11.3466 10.0532 11.64 9.61322L15.28 4.19989C15.8533 3.33322 17.28 2.71989 18.4933 3.17322C19.8 3.61322 20.6666 5.07989 20.3866 6.38655L19.6933 10.7466C19.64 11.1466 19.7466 11.5066 19.9733 11.7866C20.2 12.0399 20.5333 12.1999 20.8933 12.1999H26.3733C27.4266 12.1999 28.3333 12.6266 28.8666 13.3732C29.3733 14.0932 29.4666 15.0266 29.1333 15.9732L25.8533 25.9599C25.44 27.6132 23.64 28.9599 21.8533 28.9599H16.6533C15.76 28.9599 14.5066 28.6532 13.9333 28.0799L12.2266 26.7599C11.5733 26.2666 11.1866 25.4799 11.1866 24.6532Z"
                        fill="#EE74DA"
                      ></path>
                      <path
                        d="M6.94669 8.50659H5.57335C3.50669 8.50659 2.66669 9.30659 2.66669 11.2799V24.6933C2.66669 26.6666 3.50669 27.4666 5.57335 27.4666H6.94669C9.01335 27.4666 9.85335 26.6666 9.85335 24.6933V11.2799C9.85335 9.30659 9.01335 8.50659 6.94669 8.50659Z"
                        fill="#EE74DA"
                      ></path>
                    </svg>
                  </span>
                  <h4 class="font-bold">100% Customer Satisfaction</h4>
                </div>
              </div>
              <div class="w-full md:w-1/2 xl:w-auto px-3">
                <div class="flex py-5 items-center">
                  <span class="inline-block mr-3">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16 2.66675C8.65335 2.66675 2.66669 8.65341 2.66669 16.0001C2.66669 23.3467 8.65335 29.3334 16 29.3334C23.3467 29.3334 29.3334 23.3467 29.3334 16.0001C29.3334 8.65341 23.3467 2.66675 16 2.66675ZM22.3734 12.9334L14.8134 20.4934C14.6267 20.6801 14.3734 20.7867 14.1067 20.7867C13.84 20.7867 13.5867 20.6801 13.4 20.4934L9.62669 16.7201C9.24002 16.3334 9.24002 15.6934 9.62669 15.3067C10.0134 14.9201 10.6534 14.9201 11.04 15.3067L14.1067 18.3734L20.96 11.5201C21.3467 11.1334 21.9867 11.1334 22.3734 11.5201C22.76 11.9067 22.76 12.5334 22.3734 12.9334Z"
                        fill="#EE74DA"
                      ></path>
                    </svg>
                  </span>
                  <h4 class="font-bold">Product Guarantee</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section pour rediriger vers la doc -->
  <section class="md:pb-24 lg:pb-80">
    <div class="relative pt-12 lg:pt-20 pb-28 md:pb-64 bg-gray-50">
      <img class="h-24 lg:hidden ml-auto -mt-10 mb-10" src="" alt="" />
      <div class="relative px-4 text-center">
        <div class="md:w-2/12 px-4">
          <img class="hidden lg:block lg:absolute top-0 left-0" src="" alt="" />
        </div>
        <div class="relative w-full lg:w-9/12 mx-auto">
          <div class="max-w-4xl mx-auto mb-12 lg:mb-20">
            <h2 class="mb-10 text-4xl font-semibold">
              The latest version of this excellent product is waiting to deploy.
            </h2>
            <p class="max-w-3xl mx-auto mb-6 lg:mb-12 text-xl text-gray-500">
              If you have ever wondered how to develop your brand, this is the
              place for you. Take a big step forward in growing your business
              with this great tool.
            </p>
            <a
              class="inline-block w-full md:w-auto mb-2 mr-4 py-4 px-14 text-sm text-white font-medium leading-normal bg-red-400 hover:bg-red-300 rounded"
              href="#"
              >Try Demo</a
            >
          </div>
          <div
            class="max-w-max mx-auto flex items-center py-1 bg-gray-200 rounded"
          >
            <button class="px-6 md:px-10 lg:px-20 py-3 text-sm text-gray-500">
              Inactive
            </button>
            <button
              class="px-6 md:px-10 lg:px-20 py-3 text-sm bg-white rounded"
            >
              Active
            </button>
            <button class="px-6 md:px-10 lg:px-20 py-3 text-sm text-gray-500">
              Inactive
            </button>
          </div>
        </div>
        <div class="md:w-2/12 px-4">
          <img
            class="hidden lg:block lg:absolute top-0 right-0 mt-20"
            src=""
            alt=""
          />
        </div>
      </div>
      <div class="lg:absolute inset-x-0 mt-12 lg:mt-16 max-w-6xl px-4 mx-auto">
        <div class="flex flex-wrap -mx-4">
          <div class="w-full md:w-1/3 px-4 mb-4 md:mb-0">
            <div class="p-8 bg-white shadow-md rounded-lg">
              <span
                class="flex items-center justify-center mb-12 w-16 h-16 rounded-full bg-teal-500"
              >
                <svg
                  width="18"
                  height="20"
                  viewbox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.7379 0.761809H5.08493C3.00493 0.753809 1.29993 2.41181 1.25093 4.49081V15.2038C1.20493 17.3168 2.87993 19.0678 4.99293 19.1148C5.02393 19.1148 5.05393 19.1158 5.08493 19.1148H13.0739C15.1679 19.0298 16.8179 17.2998 16.8029 15.2038V6.03781L11.7379 0.761809Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M11.4756 0.75V3.659C11.4756 5.079 12.6236 6.23 14.0436 6.234H16.7986"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M11.2887 13.3585H5.88867"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M9.2437 9.60599H5.8877"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
              <h3 class="mb-6 text-2xl font-semibold">Spectacular team plan</h3>
              <p class="mb-8 text-gray-500">
                Fairly assigning daily tasks to your employees
              </p>
              <a
                class="ml-auto flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500"
                href="#"
              >
                <svg
                  width="19"
                  height="13"
                  viewbox="0 0 19 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.7 6.7487L0.75 6.7487"
                    stroke="#838EA4"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.7002 11.7497L17.6372 6.7487L9.7002 1.7477V11.7497Z"
                    stroke="#838EA4"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-4 mb-4 md:mb-0">
            <div class="p-8 bg-white shadow-md rounded-lg">
              <span
                class="flex items-center justify-center mb-12 w-16 h-16 rounded-full bg-red-500"
              >
                <svg
                  width="21"
                  height="21"
                  viewbox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.38948 7.984H4.45648C2.42148 7.984 0.771484 9.634 0.771484 11.669L0.771484 16.544C0.771484 18.578 2.42148 20.228 4.45648 20.228H15.5865C17.6215 20.228 19.2715 18.578 19.2715 16.544V11.659C19.2715 9.63 17.6265 7.984 15.5975 7.984L14.6545 7.984"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M10.0215 1.19051V13.2315"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M7.10645 4.1188L10.0214 1.1908L12.9374 4.1188"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
              <h3 class="mb-6 text-2xl font-semibold">Sharable showcase</h3>
              <p class="mb-8 text-gray-500">
                Team members will be up to date on the project
              </p>
              <a
                class="ml-auto flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 hover:bg-blue-200 text-gray-500"
                href="#"
              >
                <svg
                  width="19"
                  height="13"
                  viewbox="0 0 19 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.7 6.7487L0.75 6.7487"
                    stroke="#45C1FF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.7002 11.7497L17.6372 6.7487L9.7002 1.7477V11.7497Z"
                    stroke="#45C1FF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-4">
            <div class="p-8 bg-white shadow-md rounded-lg">
              <span
                class="flex items-center justify-center mb-12 w-16 h-16 rounded-full bg-yellow-400"
              >
                <svg
                  width="22"
                  height="20"
                  viewbox="0 0 22 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.9024 6.85114L12.4591 10.4642C11.6196 11.1302 10.4384 11.1302 9.59895 10.4642L5.11816 6.85114"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.9089 19C18.9502 19.0084 21 16.5095 21 13.4384V6.57001C21 3.49883 18.9502 1 15.9089 1H6.09114C3.04979 1 1 3.49883 1 6.57001V13.4384C1 16.5095 3.04979 19.0084 6.09114 19H15.9089Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </span>
              <h3 class="mb-6 text-2xl font-semibold">Generate new messages</h3>
              <p class="mb-8 text-gray-500">
                More interesting writings for your customers
              </p>
              <a
                class="ml-auto flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500"
                href="#"
              >
                <svg
                  width="19"
                  height="13"
                  viewbox="0 0 19 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.7 6.7487L0.75 6.7487"
                    stroke="#838EA4"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.7002 11.7497L17.6372 6.7487L9.7002 1.7477V11.7497Z"
                    stroke="#838EA4"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Section pour montrer les avantages, réutiliser le flyer de théo -->

  <!-- Section why people hate Pooger -->

  <!-- CTA de fin -->
</template>

<style>
body {
  position: relative;
  min-height: 100vh;
}
body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/images/BG_landing_page.svg");
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.5;
  z-index: -1;
}
</style>
