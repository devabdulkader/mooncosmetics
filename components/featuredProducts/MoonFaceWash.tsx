import Image from "next/image";
import React from "react";

const MoonFaceWash = () => {
  return (
    <div>
      <section>
        {/* Container */}
        <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
          {/* Title */}
          <h2 className="text-center text-3xl font-bold md:text-5xl">
            How it works
          </h2>
          <p className="mx-auto mb-8 mt-4 max-w-3xl text-center text-sm text-gray-500 sm:text-base md:mb-12 lg:mb-16">
            Replicate utilizes cutting-edge Natural Language Processing (NLP)
            algorithms and machine learning to analyze your LinkedIn posts,
            capturing your individual style, tone, and language.
          </p>
          {/* Content */}
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            {/* List */}
            <div className="flex h-full flex-col [grid-area:2/1/3/2] lg:[grid-area:1/2/2/3]">
              {/* Item */}
              <a
                className="mb-8 flex max-w-lg justify-center gap-4  border-b border-solid border-gray-300 px-6 py-5 text-black"
                href="#w-tabs-0-data-w-pane-0"
              >
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gray-100">
                  <p className="text-sm font-bold sm:text-base">1</p>
                </div>
                <div className="ml-4 flex flex-col gap-2">
                  <h5 className="text-xl font-bold">
                    Connect Your LinkedIn Profile
                  </h5>
                  <p className="text-sm text-gray-500">
                    Begin by granting access to your LinkedIn account to
                    initiate the replication process.
                  </p>
                </div>
              </a>
              {/* Item */}
              <a
                className="mb-8 flex max-w-lg justify-center gap-4 px-6 py-5 border-b border-solid border-gray-300 text-black"
                href="#w-tabs-0-data-w-pane-1"
              >
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gray-100">
                  <p className="text-sm font-bold sm:text-base">2</p>
                </div>
                <div className="ml-4 flex flex-col gap-2">
                  <h5 className="text-xl font-bold">Analyze Your Posts</h5>
                  <p className="text-sm text-gray-500">
                    Our intelligent algorithms comprehensively analyze your
                    existing posts, understanding your voice and patterns.
                  </p>
                </div>
              </a>
              {/* Item */}
              <a
                className="mb-8 flex max-w-lg justify-center gap-4 px-6 py-5 border-b border-solid border-gray-300 text-black"
                href="#w-tabs-0-data-w-pane-2"
              >
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gray-100">
                  <p className="text-sm font-bold sm:text-base">3</p>
                </div>
                <div className="ml-4 flex flex-col gap-2">
                  <h5 className="text-xl font-bold">Create Replicas</h5>
                  <p className="text-sm text-gray-500">
                    Upon completing the analysis, Replicate generates authentic
                    replicas of your posts in your tone of voice.
                  </p>
                </div>
              </a>
              {/* Item */}
              <a
                className="mb-8 flex max-w-lg justify-center gap-4 px-6 py-5 text-black"
                href="#w-tabs-0-data-w-pane-2"
              >
                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-gray-100">
                  <p className="text-sm font-bold sm:text-base">4</p>
                </div>
                <div className="ml-4 flex flex-col gap-2">
                  <h5 className="text-xl font-bold">Post with Confidence</h5>
                  <p className="text-sm text-gray-500">
                    Share your replicas directly to your LinkedIn account,
                    knowing your voice remains consistent and influential.
                  </p>
                </div>
              </a>
            </div>
            {/* Image */}
            <Image
              alt=""
              src=""
              className="block h-full w-full overflow-hidden [grid-area:1/1/2/2] lg:[grid-area:1/1/2/2]"
              height={300}
              width={300}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoonFaceWash;
