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
  const markdownDir = path.join(process.cwd(), 'blog_posts'); // Ajuste se o diretório for outro
  const filePath = path.join(markdownDir, `${slug}.md`);

  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    // Extrai o título da primeira linha (opcional, mas bom ter)
    const title = content.split('\n')[0].replace('## ', '');
    return { content, title };
  } catch (error) {
    return null; // Retorna null se o arquivo não for encontrado
  }
}

// Componente da página do post
export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  const post = await getPostContent(slug);

  if (!post) {
    notFound(); // Mostra página 404 se o post não for encontrado
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
      <article className="prose lg:prose-xl max-w-none mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md">
        {/* O título pode ser renderizado aqui se necessário, ou já estar no Markdown */}
        {/* <h1>{post.title}</h1> */}
        <ReactMarkdown
          components={{
            // Personalize a renderização de elementos Markdown se necessário
            h2: ({node, ...props}) => <h2 className="text-2xl font-semibold mt-6 mb-3 text-[#D4A38C]" {...props} />,
            h3: ({node, ...props}) => <h3 className="text-xl font-semibold mt-5 mb-2 text-[#E3C1AF]" {...props} />,
            p: ({node, ...props}) => <p className="text-gray-700 leading-relaxed my-4" {...props} />,
            ul: ({node, ...props}) => <ul className="list-disc list-inside text-gray-700 my-4 ml-4" {...props} />,
            li: ({node, ...props}) => <li className="mb-2" {...props} />,
            a: ({node, ...props}) => <a className="text-[#D4A38C] hover:underline" {...props} />,
            strong: ({node, ...props}) => <strong className="font-semibold" {...props} />,
          }}
        >
          {post.content}
        </ReactMarkdown>
      </article>
    </div>
  );
}

// (Opcional) Função para gerar os caminhos estáticos se usar SSG
// export async function generateStaticParams() {
//   const markdownDir = path.join(process.cwd(), 'blog_posts');
//   const filenames = fs.readdirSync(markdownDir);
//   const slugs = filenames.map((filename) => filename.replace('.md', ''));
//   return slugs.map((slug) => ({ slug }));
// }

