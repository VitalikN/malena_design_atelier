'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '../button';

type CategoryFilterProps = {
  categories: string[];
  onCategoryChange: (category: string) => void;
};

const CategoryFilter = ({
  categories,
  onCategoryChange,
}: CategoryFilterProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const t = useTranslations('CategoryFilter');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="mb-6 flex items-center xs:justify-center sm:justify-between xs:flex-wrap sm:flex-nowrap">
      <h3 className="xs:mb-4 sm:mb-0 text-2xl capitalize text-transparent bg-gradient-to-r from-gradientFrom via-gradientVia to-gradientTo bg-clip-text font-semibold">
        {t('title')}
      </h3>
      <ul className="flex gap-4">
        <li
          className={`cursor-pointer ${!selectedCategory ? 'text-buttonHover' : 'text-gradientFrom'} font-bold text-xl capitalize transition ease-in-out hover:scale-[1.05] hover:underline duration-400`}
          onClick={() => handleCategoryChange('')}
        >
          <Button
            variant="link"
            aria-label="filter button"
            className={`cursor-pointer  ${!selectedCategory ? 'text-buttonHover' : 'text-gradientFrom'} font-bold text-xl capitalize transition ease-in-out hover:scale-[1.05] hover:underline duration-400 bg-transparen focus:ring-offset-0 focus-visible:outline-gradientTo`}
          >
            {t('categories.all')}
          </Button>
        </li>
        {categories.map((category) => (
          <li
            key={category}
            className={`cursor-pointer ${selectedCategory === category ? 'text-buttonHover' : 'text-gradientFrom'} font-bold text-xl capitalize transition ease-in-out hover:scale-[1.05] hover:underline duration-400`}
            onClick={() => handleCategoryChange(category)}
          >
            <Button
              variant="link"
              aria-label="filter button"
              className={`cursor-pointer ${selectedCategory === category ? 'text-buttonHover' : 'text-gradientFrom'} font-bold text-xl capitalize transition ease-in-out hover:scale-[1.05] hover:underline duration-400 bg-transparen focus:ring-offset-0 focus-visible:outline-gradientTo`}
            >
              {t(`categories.${category}`)}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
