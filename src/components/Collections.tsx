"use client";

import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Image from "next/image";
import imageData from "../../galleryData.json";

const Collections = () => {
  return (
    <section>
      <div
        id="Collections"
        className=" xl:container mx-auto xs:py-2 xs:px-2 md:px-6 lg:px-8 md:pb-2 lg:pb-2"
      >
        <h2 className="p-2 text-center xs:text-26 md:text-30 text-transparent bg-gradient-to-r from-gradientFrom via-gradientVia to-gradientTo bg-clip-text">
          Collections
        </h2>
        <PhotoProvider>
          <ul className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 gap-4  mx-auto">
            {imageData.map((image) => (
              <li
                key={image.id}
                className="gallery-item overflow-hidden cursor-pointer"
              >
                <PhotoView src={image.url}>
                  <Image
                    src={image.url}
                    alt={image.alt}
                    width={1200}
                    height={1200}
                    className="object-contain mx-auto w-full transform transition-transform ease-in-out duration-500 hover:scale-115"
                  />
                </PhotoView>
              </li>
            ))}
          </ul>
        </PhotoProvider>
      </div>
    </section>
  );
};

export default Collections;
