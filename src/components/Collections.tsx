"use client";
import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import Image from "next/image";
import imageData from "../../galleryData.json";
import { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import { useTranslations } from "next-intl";

const Collections = () => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [scrollToTop, setScrollToTop] = useState(false);
  const t = useTranslations("Collection");

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentImages = imageData.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(imageData.length / itemsPerPage);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    setScrollToTop(true);
  };

  useEffect(() => {
    if (scrollToTop) {
      const collectionsSection = document.getElementById("Collections");
      if (collectionsSection) {
        collectionsSection.scrollIntoView({ behavior: "smooth" });
      }
      setScrollToTop(false);
    }
  }, [scrollToTop, currentPage]);

  return (
    <section className="py-10">
      <div
        id="Collections"
        className=" container mx-auto xs:py-2 xs:px-2 md:px-6 lg:px-8 md:pb-2 lg:pb-2"
      >
        <h2 className="text-center mb-[15px] xs:text-26 md:text-30 text-transparent bg-gradient-to-r from-gradientFrom via-gradientVia to-gradientTo bg-clip-text font-semibold">
          {t("collectionsTitle")}
        </h2>
        <PhotoProvider
          overlayRender={() => <div className="fixed inset-10 "></div>}
        >
          <ul className="grid grid-cols-1 md:grid-cols-2    xl:grid-cols-4 gap-4  mx-auto">
            {currentImages.map((image, index) => (
              <motion.li
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                key={image.id}
                className="gallery-item overflow-hidden cursor-pointer"
              >
                <PhotoView src={image.url}>
                  <Image
                    src={image.url}
                    alt={image.alt}
                    width={1200}
                    height={1200}
                    layout="responsive"
                    className="object-contain mx-auto w-full transform transition-transform ease-in-out duration-500 hover:scale-115"
                  />
                </PhotoView>
              </motion.li>
            ))}
          </ul>
        </PhotoProvider>
        <Pagination className="mt-4">
          <PaginationContent className="flex justify-center gap-2 flex-wrap">
            {/* Первая страница */}
            <PaginationItem>
              <PaginationLink
                isActive={currentPage === 1}
                onClick={() => handlePageClick(1)}
                className={`w-10 h-10 rounded-full flex items-center justify-center  ${
                  currentPage === 1
                    ? "bg-buttonHover text-white"
                    : "bg-navBg text-gradientFrom"
                }   transition-all hover:scale-110  hover:bg-buttonHover hover:text-white hover:border-transparent
          outline:none duration-400`}
              >
                1
              </PaginationLink>
            </PaginationItem>

            {/* Многоточие перед серединой, если текущая страница далеко от начала */}
            {currentPage > 4 && <PaginationEllipsis />}

            {/* Средние страницы */}
            {Array.from({ length: 5 }, (_, index) => currentPage - 2 + index)
              .filter((page) => page > 1 && page < totalPages)
              .map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    isActive={page === currentPage}
                    onClick={() => handlePageClick(page)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      page === currentPage
                        ? "bg-buttonHover text-white"
                        : "bg-navBg text-gradientFrom"
                    }   transition-all hover:scale-110  hover:bg-buttonHover hover:text-white hover:border-transparent
          outline:none duration-400`}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}

            {/* Многоточие после серединных страниц, если текущая страница далеко от конца */}
            {currentPage < totalPages - 3 && <PaginationEllipsis />}
            {/* Последняя страница */}
            {totalPages > 1 && (
              <PaginationItem>
                <PaginationLink
                  isActive={currentPage === totalPages}
                  onClick={() => handlePageClick(totalPages)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentPage === totalPages
                      ? "bg-buttonHover text-white"
                      : "bg-navBg text-gradientFrom"
                  }   transition-all hover:scale-110  hover:bg-buttonHover hover:text-white hover:border-transparent
          outline:none duration-400`}
                >
                  {totalPages}
                </PaginationLink>
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
};

export default Collections;
