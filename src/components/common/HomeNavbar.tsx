/**
 * import next packages
 */
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

/**
 * import packages
 */
import { InformationCircleIcon, XMarkIcon } from '@heroicons/react/24/outline';

/**
 * import project files
 */
import imageLogo from '@/images/logo.png';

type GameRulesModalProps = {
  isGameRulesModalOpen: boolean;
  setIsGameRulesModalOpen: (value: boolean) => void;
  t?: any;
}

const HomeNavbar = ({ setIsGameRulesModalOpen, t }: GameRulesModalProps) => {
  const router = useRouter();
  const { locale } = router;

  const openGameRulesModal = () => {
    setIsGameRulesModalOpen(true);
  }

  const navigation = [
    { name: t('HomeNavbar.exploreNow'), href: '#draw' },
    { name: t('HomeNavbar.comingSoon'), href: '#soon' }
  ];

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'jp' : 'en';
    router.push('/', '/', { locale: newLocale });
  }

  return (
    <div className="absolute w-full top-0 px-6 py-2 lg:px-8 z-10">
      <nav className="flex items-center justify-between w-full" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              src={imageLogo}
              alt="tryell logo"
              width={150}
              height={100}
              priority
            />
          </Link>
        </div>
        {/* <div className="flex lg:hidden space-x-1">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900" onClick={openGameRulesModal}>
            <InformationCircleIcon className="h-6 w-6 text-gray-500 animate-bounce" />
          </a>
        </div> */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex lg:flex-1 lg:justify-end items-end space-x-3">
          <a className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer" onClick={openGameRulesModal}>
            <InformationCircleIcon className="h-6 w-6 text-gray-500 animate-bounce" />
          </a>
          <button
            type="button"
            className="inline-flex items-center rounded-md border-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm ring-0"
            onClick={toggleLanguage}
          >
            {t('HomeNavbar.switchLanguage')}
          </button>
        </div>
      </nav>
    </div>
  )
}

export default HomeNavbar;





