import Image from "next/image";

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
      <header>
        {/* Hero Container */}
        <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Component */}
          <div className="mx-auto mb-8 w-full max-w-3xl text-center md:mb-12 lg:mb-16">
            {/* Hero Title */}
            <h1 className="mb-4 text-4xl font-bold md:text-6xl">
              The Website You Want Without The Dev Time.
            </h1>
            <p className="mx-auto mb-5 max-w-lg text-sm text-gray-500 sm:text-xl md:mb-6 lg:mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus
            </p>
            {/* Hero Button */}
          </div>
          {/* Hero Image */}
          <img
            src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
            alt=""
            className="inline-block max-h-[512px] w-full object-cover"
          />
        </div>
      </header>
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
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Component */}
          <div className="flex flex-col gap-8 sm:gap-20 lg:flex-row-reverse lg:items-center">
            {/* Item */}
            <div className="lg:w-1/2">
              {/* Title */}
              <h2 className="mb-4 max-w-3xl text-3xl font-bold md:text-5xl">
                Understand sales performance better
              </h2>
              <p className="mb-6 max-w-lg text-sm text-gray-500 sm:text-base md:mb-10 lg:mb-12">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam, purus sit amet luctus venenatis, lectus
              </p>
              <div className="mb-12 mt-12 h-0 w-40 border [border-top-style:solid]"></div>
              {/* List */}
              <ul className="flex flex-col">
                <li className="mb-2 flex items-center">
                  <img
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                    alt=""
                    className="mr-2 inline-block h-4 w-4"
                  />
                  <p className="text-gray-500 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </p>
                </li>
                <li className="mb-2 flex items-center">
                  <img
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                    alt=""
                    className="mr-2 inline-block h-4 w-4"
                  />
                  <p className="text-gray-500 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </p>
                </li>
                <li className="mb-2 flex items-center">
                  <img
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                    alt=""
                    className="mr-2 inline-block h-4 w-4"
                  />
                  <p className="text-gray-500 text-sm sm:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </p>
                </li>
                <li className="flex items-center">
                  <img
                    src="https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94a84be6cf60_check-mark.svg"
                    alt=""
                    className="mr-2 inline-block h-4 w-4"
                  />
                  <p className="text-gray-500 max-[479px]:text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                  </p>
                </li>
              </ul>
            </div>
            {/* Item */}
            <div className="lg:w-1/2">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default page;
