import AboutDetails from "@/components/about/AboutDetails";
import FAQ from "@/components/common/FAQ";
import Testimonial from "@/components/home/Testimonial";
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
      <header className="relative z-20 ">
        {/* Hero Container */}
        <div className="mx-auto max-w-7xl px-5 pt-10 md:px-10 md:pt-32">
          {/* Component */}
          <div className="mx-auto w-full max-w-6xl text-center ">
            {/* Hero Title */}
            <h2 className="  px-3 text-xl md:text-3xl capitalize raleway-bold 2xl:text-4xl pb-10">
              Our Journey and Commitment to Quality Beauty Products
            </h2>
          </div>

          <div className="lg:h-[60vh]">
            <video
              src="/moon/videos/about-us.mp4"
              className="  w-full  relative left-0 cursor-pointer h-full object-cover"
              autoPlay
              muted
              loop
            />
          </div>
        </div>
      </header>
      <section className="bg-blue-600  pb-20">
        {/* Container */}
        <div className="h-60 w-full bg-blue-600 absolute -top-60 z-10 hidden lg:block"></div>
        <div className=" mx-auto w-full max-w-7xl px-5 pb-10 md:px-10 ">
          <div className=" bg-white">
            <div className="flex flex-col gap-5  p-10 lg:px-20 lg:py-14">
              <h2 className="text-3xl font-bold md:text-5xl raleway-bold text-center">
                Our Story
              </h2>
              <p className="text-sm text-gray-500 sm:text-base work-sans-regular">
                Aliquet risus feugiat in ante metus. Arcu dui vivamus arcu felis
                bibendum ut. Vestibulum lorem sed risus ultricies tristique
                nulla. Vitae et leo duis ut diam quam. Bibendum arcu vitae
                elementum curabitur vitae nunc. Dictumst vestibulum rhoncus est
                pellentesque. Lectus proin nibh nisl condimentum id. Ullamcorper
                dignissim cras tincidunt lobortis feugiat vivamus.
                <br />
                <br />
                Massa id neque aliquam vestibulum morbi blandit. Nulla
                pellentesque dignissim enim sit amet venenatis.
              </p>
              <p className="text-sm text-gray-500 sm:text-base work-sans-regular">
                Aliquet risus feugiat in ante metus. Arcu dui vivamus arcu felis
                bibendum ut. Vestibulum lorem sed risus ultricies tristique
                nulla. Vitae et leo duis ut diam quam. Bibendum arcu vitae
                elementum curabitur vitae nunc. Dictumst vestibulum rhoncus est
                pellentesque. Lectus proin nibh nisl condimentum id. Ullamcorper
                dignissim cras tincidunt lobortis feugiat vivamus.
                <br />
                <br />
                Massa id neque aliquam vestibulum morbi blandit. Nulla
                pellentesque dignissim enim sit amet venenatis.
              </p>
            </div>
            {/* <Image
              // src="https://assets.website-files.com/6458c625291a94a195e6cf3a/64b7a30c42421ae3cbe5abb9_about%20image.svg"
              src=""
              alt=""
              className="inline-block h-full w-full  object-cover"
            /> */}
          </div>
        </div>
      </section>
      <AboutDetails />
      <Testimonial />
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 mb-10 lg:mb-0 md:px-10 md:pb-10">
          {/* Title */}
          <h2 className="mx-auto  max-w-3xl text-center text-3xl font-bold md:mb-12 md:text-5xl lg:mb-16 raleway-bold">
            Smooth Process. Transformative Outcomes.
          </h2>
          {/* Content */}
          <div className="flex flex-col items-center justify-center bg-contain bg-center pt-10 ">
            {/* <div className="flex flex-col items-center justify-center bg-contain bg-center pt-10 bg-[url('https://assets.website-files.com/6458c625291a94a195e6cf3a/648825fca218588cb636c341_Group%2048114.png')]"> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-10">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="rounded-md border border-solid border-gray-300 bg-white p-6 text-black"
                >
                  <h5 className="mb-2 text-xl raleway-bold">{service.title}</h5>
                  <p className="text-sm work-sans-regular">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQ />
    </section>
  );
};

export default page;
