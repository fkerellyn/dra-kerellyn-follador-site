import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';

// Função para buscar o conteúdo do post
async function getPostContent(slug: string): Promise<string | null> {
  const postsDirectory = path.join(process.cwd()); // Diretório raiz do projeto
  // Certifique-se de que o slug corresponda ao nome do arquivo .md
  const filePath = path.join(postsDirectory, `${slug}.md`);

  try {
    // Verifica se o arquivo existe antes de tentar ler
    if (!fs.existsSync(filePath)) {
      console.error(`Markdown file not found at: ${filePath}`);
      return null;
    }
    return fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    console.error(`Error reading markdown file ${filePath}:`, error);
    // Se o arquivo não for encontrado (embora já verificado), retorna null
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return null;
    }
    // Para outros erros, lança a exceção para ser capturada pelo Next.js
    throw error;
  }
}

// Metadados dinâmicos
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const content = await getPostContent(params.slug);
  let title = 'Artigo do Blog';
  if (content) {
    const titleMatch = content.match(/^##\s*(.*)/);
    if (titleMatch) {
      title = titleMatch[1];
    }
  }

  return {
    title: `${title} | Dra. Kérellyn Follador`,
  };
}

// Componente da página do post
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const content = await getPostContent(params.slug);

  if (!content) {
    notFound(); // Retorna 404 se o post não for encontrado
  }

  // Extrai o título do conteúdo Markdown (primeira linha H2)
  const titleMatch = content.match(/^##\s*(.*)/);
  const title = titleMatch ? titleMatch[1] : 'Artigo do Blog';
  // Remove a linha do título H2 do conteúdo a ser renderizado
  const bodyContent = content.replace(/^##\s*(.*)\r?\n/, '');

  return (
    <div className="bg-[#fffaf5] min-h-screen py-16 md:py-20"> {/* Added background and padding */}
      <div className="container mx-auto px-4">
        <article className="prose lg:prose-xl max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-md">
          {/* Renderiza o título principal da página */}
          <h1 className="text-3xl md:text-4xl font-semibold text-[#8c6b5d] mb-8 text-center">{title}</h1>
          {/* Renderiza o corpo do markdown */}
          <ReactMarkdown
            components={{
              // Adiciona estilos específicos usando classes Tailwind
              h3: ({node, ...props}) => <h3 className="text-2xl font-semibold mt-6 mb-3 text-pink-800" {...props} />,
              h4: ({node, ...props}) => <h4 className="text-xl font-semibold mt-5 mb-2 text-pink-700" {...props} />,
              p: ({node, ...props}) => <p className="text-gray-700 mb-4 leading-relaxed" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4 ml-4 text-gray-700 space-y-2" {...props} />,
              li: ({node, ...props}) => <li className="mb-2" {...props} />,
              a: ({node, ...props}) => <a className="text-pink-600 hover:text-pink-800 underline" target="_blank" rel="noopener noreferrer" {...props} />,
              // Adicione mais customizações se necessário
            }}
          >
            {bodyContent}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}

// Função para gerar rotas estáticas
export async function generateStaticParams() {
  const slugs = [
    'blog_cirurgias_comuns',
    'blog_queixas_comuns',
    'blog_videolaparoscopia',
    'blog_histeroscopia'
  ];

  // Verifica se os arquivos .md existem antes de gerar os parâmetros
  const validSlugs = slugs.filter(slug => {
    const filePath = path.join(process.cwd(), `${slug}.md`);
    return fs.existsSync(filePath);
  });

  if (validSlugs.length !== slugs.length) {
     console.warn('Some markdown files for static generation were not found.');
  }

  return validSlugs.map((slug) => ({
    slug: slug,
  }));
}

