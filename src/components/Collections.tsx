'use client';

import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Image from 'next/image';
import imageData from '../../galleryData.json';
import { useEffect, useState } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
} from '@/components/ui/pagination';
import { useTranslations } from 'next-intl';

const Collections = () => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [scrollToTop, setScrollToTop] = useState(false);
  const t = useTranslations('Collection');

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentImages = imageData.slice(startIndex, startIndex + itemsPerPage);

  const totalPages = Math.ceil(imageData.length / itemsPerPage);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
    setScrollToTop(true);
  };

  useEffect(() => {
    if (scrollToTop) {
      const collectionsSection = document.getElementById('Collections');
      if (collectionsSection) {
        collectionsSection.scrollIntoView({ behavior: 'smooth' });
      }
      setScrollToTop(false);
    }
  }, [scrollToTop, currentPage]);

  return (
    <section className="py-10">
      <div
        id="Collections"
        className=" xl:container mx-auto xs:py-2 xs:px-2 md:px-6 lg:px-8 md:pb-2 lg:pb-2"
      >
        <h2 className="text-center mb-[15px] xs:text-26 md:text-30 text-transparent bg-gradient-to-r from-gradientFrom via-gradientVia to-gradientTo bg-clip-text">
          {t('collectionsTitle')}
        </h2>
        <PhotoProvider>
          <ul className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 gap-4  mx-auto">
            {currentImages.map((image) => (
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
        <Pagination className="mt-4">
          <PaginationContent className="flex justify-center gap-2 flex-wrap">
            {/* Первая страница */}
            <PaginationItem>
              <PaginationLink
                isActive={currentPage === 1}
                onClick={() => handlePageClick(1)}
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentPage === 1
                    ? 'bg-gradient-to-r from-gradientFrom to-gradientTo text-white'
                    : 'bg-navBg text-gradientFrom'
                } transition hover:scale-110`}
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
                        ? 'bg-gradient-to-r from-gradientFrom to-gradientTo text-white'
                        : 'bg-navBg text-gradientFrom'
                    } transition hover:scale-110`}
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
                      ? 'bg-gradient-to-r from-gradientFrom to-gradientTo text-white'
                      : 'bg-navBg text-gradientFrom'
                  } transition hover:scale-110`}
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
