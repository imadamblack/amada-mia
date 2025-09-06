import Link from 'next/link';
import { info } from '../../../info';
import Image from 'next/image';
import logo from '../../../public/logo.svg';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  const path = router.pathname;
  return (
    <header
      className={`fixed top-0 ${path === '/survey' ? 'bg-transparent' : 'bg-white'} backdrop-blur-lg w-screen shadow-lg ${path === '/survey' ? 'h-[4rem]' : 'h-[12rem]'} flex justify-center z-[99] hover:top-0`}
    >
      <div className="flex items-center z-[10]">
        <div className="relative flex items-center h-[8rem] w-[24rem]">
          <Link href="/" passhref>
            <a>
              <Image
                src={logo}
                alt={info.companyName}
                layout="fill"
                objectFit="contain"
                className="filter invert"
              />
            </a>
          </Link>
        </div>
      </div>
    </header>

  );
}
