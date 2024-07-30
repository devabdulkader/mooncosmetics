const page = () => {
  const services = [
    {
      title: "Heritage of Quality",
      description:
        "With 38 years of expertise, Moon Cosmetics provides high-quality products crafted to suit the diverse climate of Bangladesh.",
    },
    {
      title: "Accessible Beauty",
      description:
        "Our wide range of products is designed to be affordable and accessible for all, ensuring that beauty is within everyone's reach.",
    },
    {
      title: "Commitment to Excellence",
      description:
        "We are dedicated to maintaining international quality standards through innovative manufacturing and skilled craftsmanship.",
    },
  ];

  return (
    <section>
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 bg-[#edf7fa]">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Everything you
              <br className="hidden md:block" />
              can imagine{" "}
              <span className="inline-block text-deep-purple-accent-400">
                is real
              </span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
            <div className="flex items-center">
              <a
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white bg-black transition duration-200 rounded bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Get in touch with us
              </a>
            </div>
          </div>
        </div>
      </div>

      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Title */}
          <h2 className="mx-auto mb-8 max-w-3xl text-center text-3xl font-bold md:mb-12 md:text-5xl lg:mb-16">
            Smooth Process. Transformative Outcomes.
          </h2>
          {/* Content */}
          <div className="flex flex-col items-center justify-center bg-contain bg-center pt-10 bg-[url('https://assets.website-files.com/6458c625291a94a195e6cf3a/648825fca218588cb636c341_Group%2048114.png')]">
            <div className="flex flex-col justify-around gap-4 sm:flex-row">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="rounded-md border border-solid border-gray-300 bg-white p-6 text-black"
                >
                  <h5 className="mb-2 text-xl font-bold">{service.title}</h5>
                  <p className="text-sm">{service.description}</p>
                </div>
              ))}
            </div>
            <div className="max-w-5xl">
              <img
                src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6488257b75d6a7b950248536_Group%2048113.svg"
                alt=""
                className="mt-16 inline-block"
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default page;
