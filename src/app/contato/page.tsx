import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react'; // Using lucide-react icons

export const metadata = {
  title: 'Contato - Dra. Kérellyn Follador',
  description: 'Entre em contato com a Dra. Kérellyn Follador. Agende sua consulta na Santa Casa de Porto Alegre ou na Clínica Madri.',
};

const ContatoPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-light text-center text-[#8c6b5d] mb-10">Contato</h1>
        <p className="text-center text-[#4a4a4a] mb-12 max-w-2xl mx-auto">
          Para agendar sua consulta ou tirar dúvidas, entre em contato através dos canais abaixo. Será um prazer atendê-la!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Local 1: Santa Casa */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-[#fbf0e4]">
            <h2 className="text-2xl font-semibold text-[#8c6b5d] mb-4">Santa Casa de Porto Alegre</h2>
            <div className="space-y-3 text-[#4a4a4a]">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#a08476]" />
                {/* Add address if confirmed, otherwise omit or use a general location */}
                <span>Porto Alegre, RS</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#a08476]" />
                <a href="tel:+555132148000" className="hover:text-[#8c6b5d]">(51) 3214-8000 (Telefone e WhatsApp)</a>
              </div>
              {/* Add website or specific department link if available */}
            </div>
          </div>

          {/* Local 2: Clínica Madri */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-[#fbf0e4]">
            <h2 className="text-2xl font-semibold text-[#8c6b5d] mb-4">Clínica Madri</h2>
            <div className="space-y-3 text-[#4a4a4a]">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#a08476]" />
                {/* Based on Linktree and search results */}
                <span>Cachoeirinha, RS</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#a08476]" />
                {/* Based on Linktree WhatsApp link */}
                <a href="https://wa.me/555134704123" target="_blank" rel="noopener noreferrer" className="hover:text-[#8c6b5d]">(51) 3470-4123 (WhatsApp)</a>
              </div>
              {/* Add website or specific department link if available */}
            </div>
          </div>
        </div>

        {/* Instagram Link */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-semibold text-[#8c6b5d] mb-3">Siga-me no Instagram</h3>
          <a href="https://www.instagram.com/kerellynf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-[#a08476] hover:text-[#8c6b5d]">
            <Instagram className="w-5 h-5" />
            <span>@kerellynf</span>
          </a>
        </div>

        {/* Optional: Contact Form Placeholder */}
        {/* <div className="mt-16 max-w-xl mx-auto">
          <h3 className="text-2xl font-semibold text-center text-[#8c6b5d] mb-6">Ou envie uma mensagem</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#4a4a4a]">Nome</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#a08476] focus:border-[#a08476]" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#4a4a4a]">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#a08476] focus:border-[#a08476]" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#4a4a4a]">Mensagem</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#a08476] focus:border-[#a08476]"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#8c6b5d] hover:bg-[#a08476] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a08476]">
                Enviar Mensagem
              </button>
            </div>
          </form>
        </div> */}

      </main>
      <Footer />
    </div>
  );
};

export default ContatoPage;

