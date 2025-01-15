'use client';
import { GrLanguage } from 'react-icons/gr';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '../ui/button';
import { Locale, usePathname, useRouter } from '@/i18n/routing';
import { useParams } from 'next/navigation';

const LocaleSwitcher = () => {
  const router = useRouter();

  const pathname = usePathname();
  const params = useParams();

  const onLocaleChange = (nextLocale: string) => {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: nextLocale as Locale },
    );
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          aria-label="swich button"
          className="bg-transparent text-gradientTo border-gradientTo w-[1.8rem] h-[1.8rem] hover:text-gradientFrom focus:ring-offset-0 focus:ring-gradientFrom focus:outline-none focus:shadow-none"
        >
          <GrLanguage className="h-[1rem] w-[1rem]" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-12 w-20 bg-navBg">
        <DropdownMenuItem onClick={() => onLocaleChange('en')}>
          <span
            className="mr-2 text-gradientTo cursor-pointer"
            role="img"
            aria-label="English Flag"
          >
            En
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onLocaleChange('uk')}>
          <span
            className="mr-2 text-gradientTo cursor-pointer"
            role="img"
            aria-label="Ukrainian Flag"
          >
            Укр
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onLocaleChange('ru')}>
          <span
            className="mr-2 text-gradientTo cursor-pointer"
            role="img"
            aria-label="Russian Flag"
          >
            Рус
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onLocaleChange('cs')}>
          <span
            className="mr-2 text-gradientTo cursor-pointer"
            role="img"
            aria-label="Cz Flag"
          >
            Cs
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LocaleSwitcher;
