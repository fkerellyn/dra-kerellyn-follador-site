import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#fbf0e4] text-[#a08476] py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {currentYear} Dra. Kérellyn Follador. Todos os direitos reservados.
        </p>
        <p className="text-xs mt-2">
          Desenvolvido por Manus
          {/* Add links to social media or other relevant info if needed */}
        </p>
        {/* Placeholder for contact info snippets or social links */}
      </div>
    </footer>
  );
};

export default Footer;

