import React from 'react';
// REMOVIDO: import Header from '@/components/Header';
// REMOVIDO: import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Instagram } from 'lucide-react';

// Using a generic WhatsApp icon component
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
) ;

// Updated blog post data with correct slugs
const blogPosts = [
  {
    slug: 'blog_cirurgias_comuns',
    title: 'Cirurgias Ginecológicas Comuns: Entendendo os Procedimentos',
    excerpt: 'Entenda quais são as cirurgias ginecológicas mais frequentes e em que situações elas podem ser necessárias para a saúde da mulher.',
  },
  {
    slug: 'blog_queixas_comuns',
    title: 'Queixas Ginecológicas Comuns: Quando a Cirurgia Pode Ser Indicada?',
    excerpt: 'Saiba identificar os sintomas e queixas que podem sinalizar a necessidade de uma avaliação para possível intervenção cirúrgica ginecológica.',
  },
  {
    slug: 'blog_videolaparoscopia',
    title: 'Cirurgia Minimamente Invasiva: Os Benefícios da Videolaparoscopia',
    excerpt: 'Descubra os benefícios das técnicas minimamente invasivas, como recuperação mais rápida e menor desconforto pós-operatório.',
  },
  {
    slug: 'blog_histeroscopia',
    title: 'Histeroscopia: Um Olhar Detalhado Dentro do Útero',
    excerpt: 'Conheça em detalhes essa importante técnica de diagnóstico e tratamento que permite visualizar e tratar problemas dentro do útero.',
  },
];

export default function Home() {
  return (
    // REMOVIDO: <div className="flex flex-col min-h-screen bg-[#fffaf5]">
    // REMOVIDO: <Header />
    <main className="flex-grow">
      {/* Hero Section - Updated to use the correct SVG logo */}
      <section id="inicio" className="text-center py-16 md:py-24 bg-[#fbf0e4]"> 
        <div className="container mx-auto px-4">
          <Image
            src="/images/logo-principal.svg" // <-- CORRIGIDO para usar o SVG correto!
            alt="Logo Dra. Kérellyn Follador - Ginecologia | Cirurgia Ginecológica"
            width={600} // Mantendo ajustes anteriores
            height={300} // Mantendo ajustes anteriores
            className="mx-auto mb-8 w-full max-w-lg md:max-w-xl" // Mantendo ajustes anteriores
            priority
            unoptimized={true} // Mantendo para qualidade SVG
          />
           <p className="text-xl text-[#a08476] mt-4">Cuidado integral e humanizado para a saúde da mulher.</p>
        </div>
      </section>

      {/* Sobre Mim Section */}
      <section id="sobre" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light text-center text-[#8c6b5d] mb-10 md:mb-12">Sobre</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            <div className="w-full md:w-1/3 flex flex-col items-center">
               <Image
                src="/images/dra-kerellyn-perfil.jpeg"
                alt="Dra. Kérellyn Follador"
                width={300}
                height={400}
                className="rounded-lg shadow-lg object-cover mb-6"
              />
            </div>
            <div className="w-full md:w-2/3 text-[#4a4a4a]">
              <h3 className="text-2xl font-semibold text-[#8c6b5d] mb-4">Dra. Kérellyn Follador</h3>
              <p className="mb-4">
                Sou médica formada pela Universidade Comunitária da Região de Chapecó (UNOCHAPECÓ) em 2019. Minha paixão pela saúde da mulher me levou a buscar especialização em Ginecologia e Obstetrícia pela Santa Casa de Misericórdia de Porto Alegre.
              </p>
              <p className="mb-4">
                Com o objetivo de oferecer um cuidado ainda mais completo e especializado, realizei subespecialização em Oncologia Ginecológica, também na Santa Casa. Atualmente, sou mestranda em Patologia na UFCSPA, aprofundando meus conhecimentos para trazer o que há de mais atual para minhas pacientes.
              </p>
              <p className="mb-4">
                Estou em constante atualização e, no momento, em capacitação em Cirurgia Robótica na Santa Casa, buscando sempre as técnicas mais avançadas e minimamente invasivas.
              </p>
              <p className="mb-4">
                 Possuo também o título de Patologista do Trato Genital Inferior, o que me permite um diagnóstico preciso e um tratamento direcionado para diversas condições.
              </p>
              <p className="mb-4">
                Meu compromisso é com o cuidado integral da saúde feminina, oferecendo um atendimento humanizado, ético e baseado nas melhores evidências científicas. Acredito na importância de uma relação de confiança e acolhimento com cada paciente.
              </p>
              <h4 className="text-xl font-semibold text-[#8c6b5d] mt-6 mb-3">Formação e Títulos:</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Graduação em Medicina - UNOCHAPECÓ (2019)</li>
                <li>Residência Médica em Ginecologia e Obstetrícia - Santa Casa de Porto Alegre</li>
                <li>Subespecialização em Oncologia Ginecológica - Santa Casa de Porto Alegre</li>
                <li>Mestranda em Patologia - UFCSPA</li>
                <li>Capacitação em Cirurgia Robótica (em andamento) - Santa Casa de Porto Alegre</li>
                <li>Título de Patologista do Trato Genital Inferior</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section id="servicos" className="py-16 md:py-20 bg-[#fbf0e4]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light text-center text-[#8c6b5d] mb-10 md:mb-12">Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Cards */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-[#8c6b5d] mb-3">Consultas Ginecológicas</h3>
              <p className="text-[#4a4a4a]">Atendimento completo para a saúde da mulher em todas as fases da vida, incluindo exames preventivos, orientação de método contraceptivo (inserção de DIU e Implanon), climatério, acompanhamento de rotina, diagnóstico e tratamento de condições ginecológicas.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-[#8c6b5d] mb-3">Cirurgia Ginecológica</h3>
              <p className="text-[#4a4a4a]">Realização de procedimentos cirúrgicos para tratamento de diversas patologias ginecológicas, utilizando técnicas modernas e seguras.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-[#8c6b5d] mb-3">Oncologia Ginecológica</h3>
              <p className="text-[#4a4a4a]">Diagnóstico, tratamento e acompanhamento de cânceres ginecológicos (colo do útero, ovário, endométrio, vulva), com abordagem multidisciplinar e foco no bem-estar da paciente.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-[#8c6b5d] mb-3">Cirurgia Minimamente Invasiva</h3>
              <p className="text-[#4a4a4a]">Utilização de técnicas como videolaparoscopia e histeroscopia para procedimentos cirúrgicos com menor tempo de recuperação, menos dor e melhores resultados estéticos.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-[#8c6b5d] mb-3">Cirurgia Robótica</h3>
              <p className="text-[#4a4a4a]">Capacitação em andamento para oferecer procedimentos com auxílio de robô, proporcionando maior precisão e segurança em cirurgias complexas.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold text-[#8c6b5d] mb-3">Patologia do Trato Genital Inferior</h3>
              <p className="text-[#4a4a4a]">Diagnóstico e tratamento especializado de lesões e infecções no colo do útero, vagina e vulva, incluindo acompanhamento de HPV e realização de colposcopia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light text-center text-[#8c6b5d] mb-10 md:mb-12">Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <div key={post.slug} className="bg-white p-6 rounded-lg shadow-md border border-[#fbf0e4] flex flex-col">
                <h3 className="text-xl font-semibold text-[#8c6b5d] mb-3">
                  <Link href={`/blog/${post.slug}`} className="hover:text-[#a08476]">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-[#4a4a4a] mb-4 flex-grow">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-[#a08476] hover:text-[#8c6b5d] font-semibold mt-auto">
                  Leia mais &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-16 md:py-20 bg-[#fbf0e4]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-light text-center text-[#8c6b5d] mb-10">Contato</h2>
          <p className="text-center text-[#4a4a4a] mb-12 max-w-2xl mx-auto">
            Para agendar sua consulta ou tirar dúvidas, entre em contato através dos canais abaixo. Será um prazer atendê-la!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Local 1: Santa Casa */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-2xl font-semibold text-[#8c6b5d] mb-4">Santa Casa de Porto Alegre</h3>
              <div className="space-y-3 text-[#4a4a4a]">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#a08476] mt-1 flex-shrink-0" />
                  <span>R. Prof. Annes Dias, 295 - Centro Histórico, Porto Alegre - RS, 90020-090</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="flex-shrink-0">(51) 3214-8000</span>
                  <a href="tel:+555132148000" title="Ligar" className="hover:text-[#8c6b5d] ml-2">
                    <Phone className="w-5 h-5 text-[#a08476]" />
                  </a>
                  <a href="https://wa.me/555132148000" title="WhatsApp" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                    <WhatsAppIcon />
                  </a>
                </div>
              </div>
            </div>
            {/* Local 2: Clínica Madri */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-2xl font-semibold text-[#8c6b5d] mb-4">Clínica Madri</h3>
              <div className="space-y-3 text-[#4a4a4a]">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-[#a08476] mt-1 flex-shrink-0" />
                  <span>Av. Gen. Flores da Cunha, 1811 - Vila Imbui, Cachoeirinha - RS, 94940-111</span>
                </div>
                <div className="flex items-center space-x-3">
                   <span className="flex-shrink-0">(51)  3470-4123</span>
                   <a href="tel:+555134704123" title="Ligar" className="hover:text-[#8c6b5d] ml-2">
                    <Phone className="w-5 h-5 text-[#a08476]" />
                  </a>
                  <a href="https://wa.me/555134704123" title="WhatsApp" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
                    <WhatsAppIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Instagram Link */}
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold text-[#8c6b5d] mb-3">Siga-me no Instagram</h3>
            <a href="https://www.instagram.com/kerellynf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-[#a08476] hover:text-[#8c6b5d]">
              <Instagram className="w-6 h-6" />
              <span className="text-lg">@kerellynf</span>
            </a>
          </div>
        </div>
      </section>

    </main>
    // REMOVIDO: <Footer />
    // REMOVIDO: </div>
  ) ;
}
