import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Importar o componente Image

const Header = () => {
  return (
    <header className="bg-[#fbf0e4] shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="#inicio" className="flex items-center">
          {/* Usar o componente Image do Next.js para o PNG final */}
          <Image 
            src="/images/logo-simbolo-menu.png" // Caminho para o arquivo PNG na pasta public/images
            alt="Símbolo Dra. Kérellyn Follador" 
            width={64} // Aumentar um pouco a dimensão base para melhor qualidade em telas maiores
            height={64} // Aumentar um pouco a dimensão base para melhor qualidade em telas maiores
            className="h-10 md:h-12 w-auto" // Manter classes de altura responsiva, w-auto para proporção
            priority // Priorizar carregamento da logo
          />
        </Link>
        {/* Menu */}
        <ul className="flex space-x-4 md:space-x-6 text-[#8c6b5d] items-center">
          <li><Link href="#inicio" className="hover:text-[#a08476] transition-colors">Início</Link></li>
          <li><Link href="#sobre" className="hover:text-[#a08476] transition-colors">Sobre</Link></li>
          <li><Link href="#servicos" className="hover:text-[#a08476] transition-colors">Serviços</Link></li>
          <li><Link href="#blog" className="hover:text-[#a08476] transition-colors">Blog</Link></li>
          <li><Link href="#contato" className="hover:text-[#a08476] transition-colors">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
