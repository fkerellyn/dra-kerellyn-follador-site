import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Blog - Dra. Kérellyn Follador',
  description: 'Artigos e informações sobre saúde da mulher, ginecologia, cirurgias e bem-estar pela Dra. Kérellyn Follador.',
};

// Placeholder data for blog posts
const blogPosts = [
  {
    slug: 'cirurgias-ginecologicas-comuns',
    title: 'Cirurgias Ginecológicas Comuns: Quando são Indicadas?',
    excerpt: 'Entenda quais são as cirurgias ginecológicas mais frequentes e em que situações elas podem ser necessárias para a saúde da mulher.',
  },
  {
    slug: 'sinais-necessidade-cirurgia',
    title: 'Principais Queixas Femininas que Podem Indicar Cirurgia Ginecológica',
    excerpt: 'Saiba identificar os sintomas e queixas que podem sinalizar a necessidade de uma avaliação para possível intervenção cirúrgica ginecológica.',
  },
  {
    slug: 'cirurgia-minimamente-invasiva',
    title: 'O que é Cirurgia Minimamente Invasiva em Ginecologia?',
    excerpt: 'Descubra os benefícios das técnicas minimamente invasivas, como recuperação mais rápida e menor desconforto pós-operatório.',
  },
  {
    slug: 'videolaparoscopia-histeroscopia',
    title: 'Videolaparoscopia e Histeroscopia: Aliadas da Saúde Feminina',
    excerpt: 'Conheça em detalhes essas duas importantes técnicas de diagnóstico e tratamento que revolucionaram a cirurgia ginecológica.',
  },
  // Add more posts as needed
];

const BlogPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-light text-center text-[#8c6b5d] mb-10">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div key={post.slug} className="bg-white p-6 rounded-lg shadow-md border border-[#fbf0e4]">
              <h2 className="text-xl font-semibold text-[#8c6b5d] mb-3">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="text-[#4a4a4a] mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="text-[#a08476] hover:text-[#8c6b5d] font-semibold">
                Leia mais &rarr;
              </Link>
            </div>
          ))}
        </div>
        {/* Add pagination if needed */}
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;

