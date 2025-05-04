import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Serviços - Dra. Kérellyn Follador',
  description: 'Conheça os serviços oferecidos pela Dra. Kérellyn Follador, incluindo consultas ginecológicas, cirurgia ginecológica, oncologia ginecológica e procedimentos minimamente invasivos.',
};

const ServicosPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-light text-center text-[#8c6b5d] mb-10">Serviços</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1: Consultas Ginecológicas */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-[#fbf0e4]">
            <h2 className="text-xl font-semibold text-[#8c6b5d] mb-3">Consultas Ginecológicas</h2>
            <p className="text-[#4a4a4a]">
              Atendimento completo para a saúde da mulher em todas as fases da vida, incluindo exames preventivos, acompanhamento de rotina, diagnóstico e tratamento de condições ginecológicas.
            </p>
          </div>

          {/* Service 2: Cirurgia Ginecológica */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-[#fbf0e4]">
            <h2 className="text-xl font-semibold text-[#8c6b5d] mb-3">Cirurgia Ginecológica</h2>
            <p className="text-[#4a4a4a]">
              Realização de procedimentos cirúrgicos para tratamento de diversas patologias ginecológicas, utilizando técnicas modernas e seguras.
            </p>
          </div>

          {/* Service 3: Oncologia Ginecológica */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-[#fbf0e4]">
            <h2 className="text-xl font-semibold text-[#8c6b5d] mb-3">Oncologia Ginecológica</h2>
            <p className="text-[#4a4a4a]">
              Diagnóstico, tratamento e acompanhamento de cânceres ginecológicos (colo do útero, ovário, endométrio, vulva), com abordagem multidisciplinar e foco no bem-estar da paciente.
            </p>
          </div>

          {/* Service 4: Cirurgia Minimamente Invasiva */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-[#fbf0e4]">
            <h2 className="text-xl font-semibold text-[#8c6b5d] mb-3">Cirurgia Minimamente Invasiva</h2>
            <p className="text-[#4a4a4a]">
              Utilização de técnicas como videolaparoscopia e histeroscopia para procedimentos cirúrgicos com menor tempo de recuperação, menos dor e melhores resultados estéticos.
            </p>
          </div>

          {/* Service 5: Cirurgia Robótica */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-[#fbf0e4]">
            <h2 className="text-xl font-semibold text-[#8c6b5d] mb-3">Cirurgia Robótica</h2>
            <p className="text-[#4a4a4a]">
              Capacitação em andamento para oferecer procedimentos com auxílio de robô, proporcionando maior precisão e segurança em cirurgias complexas.
            </p>
          </div>

          {/* Service 6: Patologia do Trato Genital Inferior */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-[#fbf0e4]">
            <h2 className="text-xl font-semibold text-[#8c6b5d] mb-3">Patologia do Trato Genital Inferior</h2>
            <p className="text-[#4a4a4a]">
              Diagnóstico e tratamento especializado de lesões e infecções no colo do útero, vagina e vulva, incluindo acompanhamento de HPV e realização de colposcopia.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicosPage;

