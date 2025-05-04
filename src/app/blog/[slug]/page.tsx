import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import { notFound } from 'next/navigation';

// Define a interface para as props da página
interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Função para buscar o conteúdo do post em Markdown
async function getPostContent(slug: string) {
  // Os arquivos .md estão na raiz do projeto
  const markdownDir = process.cwd();
  const filePath = path.join(markdownDir, `${slug}.md`);

  try {
    // Verifica se o arquivo existe antes de tentar ler
    if (!fs.existsSync(filePath)) {
      console.error(`Markdown file not found at: ${filePath}`);
      return null;
    }
    const content = fs.readFileSync(filePath, 'utf-8');
    // Extrai o título da primeira linha (H2)
    const titleMatch = content.match(/^##\s*(.*)/);
    const title = titleMatch ? titleMatch[1] : 'Artigo do Blog';
    return { content, title };
  } catch (error) {
    console.error(`Erro ao ler o arquivo: ${filePath}`, error); // Log do erro no servidor
    return null; // Retorna null se o arquivo não for encontrado ou outro erro de leitura
  }
}

// Metadados dinâmicos (Opcional, mas bom para SEO)
export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await getPostContent(params.slug);
  return {
    title: `${post?.title ?? 'Artigo do Blog'} | Dra. Kérellyn Follador`,
  };
}


// Componente da página do post
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  const post = await getPostContent(slug);

  if (!post) {
    notFound(); // Mostra página 404 se o post não for encontrado
  }

  // Remove a linha do título H2 do conteúdo a ser renderizado
  const bodyContent = post.content.replace(/^##\s*(.*)\r?\n/, '');

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
      <article className="prose lg:prose-xl max-w-none mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md">
        {/* Renderiza o título principal da página */}
        <h1 className="text-3xl md:text-4xl font-semibold text-[#8c6b5d] mb-8 text-center">{post.title}</h1>
        {/* Renderiza o corpo do markdown */}
        <ReactMarkdown
          components={{
            // Personalize a renderização de elementos Markdown se necessário
            h3: ({node, ...props}) => <h3 className="text-2xl font-semibold mt-6 mb-3 text-[#D4A38C]" {...props} />,
            h4: ({node, ...props}) => <h4 className="text-xl font-semibold mt-5 mb-2 text-[#E3C1AF]" {...props} />,
            p: ({node, ...props}) => <p className="text-gray-700 leading-relaxed my-4" {...props} />,
            ul: ({node, ...props}) => <ul className="list-disc list-inside text-gray-700 my-4 ml-4" {...props} />,
            li: ({node, ...props}) => <li className="mb-2" {...props} />,
            a: ({node, ...props}) => <a className="text-[#D4A38C] hover:underline" {...props} />,
            strong: ({node, ...props}) => <strong className="font-semibold" {...props} />,
          }}
        >
          {bodyContent}
        </ReactMarkdown>
      </article>
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
