"use client";
import Image from "next/image";

import imageData from "../../galleryData.json";

const Collections = () => {
  return (
    <section>
      <div className="container mx-auto xs:py-2 xs:px-2 md:px-6 lg:px-8 md:pb-2 lg:pb-2">
        <h2 className="p-2 text-center xs:text-26 md:text-30 text-transparent bg-gradient-to-r from-gradientFrom via-gradientVia to-gradientTo bg-clip-text">
          Collections
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:max-w-screen-md mx-auto">
          {imageData.map((image) => (
            <li
              key={image.id}
              className="gallery-item overflow-hidden cursor-pointer"
            >
              <Image
                src={image.url}
                alt={image.alt}
                width={1200}
                height={1200}
                className="object-contain mx-auto w-full transform transition-transform ease-in-out duration-500 hover:scale-125"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Collections;
