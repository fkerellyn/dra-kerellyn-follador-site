import React from 'react';
import './globals.css'; // Assuming Tailwind CSS setup is here

export const metadata = {
  title: 'Dra. Kérellyn Follador - Ginecologia e Cirurgia Ginecológica',
  description: 'Site profissional da Dra. Kérellyn Follador, especialista em Ginecologia, Cirurgia Ginecológica e Oncologia Ginecológica em Porto Alegre.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Favicon links, etc. can go here */}
        <link rel="icon" href="/favicon.ico" sizes="any" /> {/* Example favicon */}
      </head>
      <body className="bg-[#fdf6ec] text-[#4a4a4a] font-sans flex flex-col min-h-screen">
        {/* Header component will be added later */}
        <main className="flex-grow">{children}</main>
        {/* Footer component will be added later */}
      </body>
    </html>
  );
}

