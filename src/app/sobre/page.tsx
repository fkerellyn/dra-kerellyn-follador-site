import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image'; // Using next/image for optimization

export const metadata = {
  title: 'Sobre Mim - Dra. Kérellyn Follador',
  description: 'Conheça a Dra. Kérellyn Follador, médica especialista em Ginecologia, Cirurgia Ginecológica e Oncologia Ginecológica em Porto Alegre.',
};

const SobrePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-light text-center text-[#8c6b5d] mb-10">Sobre Mim</h1>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          <div className="w-full md:w-1/3 flex justify-center">
            <Image
              src="/images/dra-kerellyn-perfil.jpeg"
              alt="Dra. Kérellyn Follador"
              width={300} // Adjust width as needed
              height={400} // Adjust height as needed
              className="rounded-lg shadow-lg object-cover"
              priority // Prioritize loading this image
            />
          </div>
          <div className="w-full md:w-2/3 text-[#4a4a4a]">
            <h2 className="text-2xl font-semibold text-[#8c6b5d] mb-4">Dra. Kérellyn Follador</h2>
            <p className="mb-4">
              Sou médica formada pela Universidade Comunitária da Região de Chapecó (UNOCHAPECÓ) em 2019. Minha paixão pela saúde da mulher me levou a buscar especialização em Ginecologia e Obstetrícia pela Santa Casa de Misericórdia de Porto Alegre.
            </p>
            <p className="mb-4">
              Com o objetivo de oferecer um cuidado ainda mais completo e especializado, realizei subespecialização com ênfase em Oncologia Ginecológica, também na Santa Casa. Atualmente, sou mestranda na mesma instituição, aprofundando meus conhecimentos para trazer o que há de mais atual para minhas pacientes.
            </p>
            <p className="mb-4">
              Estou em constante atualização e, no momento, em capacitação em Cirurgia Robótica, buscando sempre as técnicas mais avançadas e minimamente invasivas. Possuo também o título de Patologista do Trato Genital Inferior, o que me permite um diagnóstico preciso e um tratamento direcionado para diversas condições.
            </p>
            <p className="mb-4">
              Meu compromisso é com o cuidado integral da saúde feminina, oferecendo um atendimento humanizado, ético e baseado nas melhores evidências científicas. Acredito na importância de uma relação de confiança e acolhimento com cada paciente.
            </p>
            <h3 className="text-xl font-semibold text-[#8c6b5d] mt-6 mb-3">Formação e Títulos:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Graduação em Medicina - UNOCHAPECÓ (2019)</li>
              <li>Residência Médica em Ginecologia e Obstetrícia - Santa Casa de Porto Alegre</li>
              <li>Subespecialização com ênfase em Oncologia Ginecológica - Santa Casa de Porto Alegre</li>
              <li>Mestranda - Santa Casa de Porto Alegre</li>
              <li>Capacitação em Cirurgia Robótica (em andamento) - Santa Casa de Porto Alegre</li>
              <li>Título de Patologista do Trato Genital Inferior</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SobrePage;

