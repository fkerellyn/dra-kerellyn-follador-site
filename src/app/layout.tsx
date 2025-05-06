import React from 'react';
import Header from '@/components/Header'; // Importa o Header
import Footer from '@/components/Footer'; // Importa o Footer
import './globals.css'; // Mantém a importação do CSS global
import { Inter } from 'next/font/google'; // Exemplo de importação de fonte (ajuste se usar outra)

// Configuração da fonte (exemplo, ajuste se necessário)
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Dra. Kérellyn Follador - Ginecologia e Cirurgia Ginecológica',
  description: 'Site profissional da Dra. Kérellyn Follador, especialista em Ginecologia, Cirurgia Ginecológica e Oncologia Ginecológica em Porto Alegre e Cachoeirinha.',
  // Outros metadados como keywords, open graph, etc., podem ser adicionados aqui
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth"> {/* Adiciona scroll-smooth para navegação suave */}
      <head>
        {/* Favicon links, etc. */}
        <link rel="icon" href="/images/logo-simbolo-menu.png" type="image/png" /> {/* Usando o símbolo como favicon */}
      </head>
      {/* Aplica a fonte ao body e garante flex-col e min-h-screen */}
      <body className={`${inter.className} bg-[#fffaf5] text-[#4a4a4a] flex flex-col min-h-screen`}>
        <Header /> {/* Adiciona o Header aqui, antes do conteúdo principal */}
        <main className="flex-grow">{children}</main> {/* Conteúdo da página específica */}
        <Footer /> {/* Adiciona o Footer aqui, depois do conteúdo principal */}
      </body>
    </html>
  );
}
