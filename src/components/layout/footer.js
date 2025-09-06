import { info } from "../../../info";
import Image from 'next/image';
import logoQueara from '../../../public/SVG/logo-queara-white.svg';

export default function Footer() {
  return (
    <footer className="relative mb-0  border-t">
      <div className="bg-black py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-8 text-white p-8">

          <div className="flex relative">
            <p className="ft-1 text-white">Un proyecto de</p>
            <div className="relative w-[20rem] aspect-[5/1] ml-4 bottom-1">
              <Image src={logoQueara} layout="fill" objectFit="contain"/>
            </div>
          </div>

          <p className="text-center ft-0 m-0">
            Todos los derechos reservados. {info.companyName} ©{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
