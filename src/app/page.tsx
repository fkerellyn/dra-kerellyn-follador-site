import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Phone, MessageCircle } from 'lucide-react'; // Importar ícones

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#fbf0e4]">
      {/* Seção Inicial com Nova Logomarca */}
      <section id="inicio" className="relative flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-b from-[#fbf0e4] to-[#f8e8d9]">
        <div className="max-w-4xl mx-auto">
          <Image
            src="/images/logo-principal.svg" // Caminho para o novo SVG principal
            alt="Logomarca Dra. Kérellyn Follador"
            width={400} // Ajuste a largura base conforme necessário para o design
            height={200} // Ajuste a altura base conforme necessário para o design
            className="w-full max-w-md md:max-w-lg mx-auto mb-8" // Ajuste max-w-* para controlar o tamanho máximo
            priority
            unoptimized={true} // Tentar forçar renderização SVG direta para máxima qualidade
          />
          <h1 className="text-4xl md:text-5xl font-bold text-[#8c6b5d] mb-4">Dra. Kérellyn Follador</h1>
          <p className="text-xl md:text-2xl text-[#a08476] mb-8">Ginecologia e Obstetrícia</p>
          <Button asChild size="lg" className="bg-[#d4a38c] hover:bg-[#c8937c] text-white">
            <Link href="#contato">Agende sua Consulta</Link>
          </Button>
        </div>
      </section>

      {/* Seção Sobre */}
      <section id="sobre" className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#8c6b5d] mb-8">Sobre Mim</h2>
          <div className="max-w-3xl mx-auto text-left text-gray-700 leading-relaxed space-y-4">
            <p>
              Formada em Medicina pela Universidade do Vale do Itajaí (UNIVALI) em 2015, Dra. Kérellyn Follador completou sua Residência Médica em Ginecologia e Obstetrícia no Hospital Universitário Evangélico Mackenzie, em Curitiba/PR, entre 2017 e 2020.
            </p>
            <p>
              Buscando aprimoramento contínuo, realizou Pós-Graduação em Ginecologia Endócrina, Climatério e Contracepção pela Faculdade de Ciências Médicas da Santa Casa de São Paulo (2020-2021) e Pós-Graduação em Endoscopia Ginecológica (Videolaparoscopia e Histeroscopia) pelo Instituto Crispi de Cirurgias Minimamente Invasivas (2021-2022).
            </p>
            <p>
              Atualmente, atua em seu consultório particular na Clínica Madri e faz parte do corpo clínico dos Hospitais Santa Cruz e Hospital Universitário Evangélico Mackenzie, dedicando-se ao cuidado integral da saúde feminina com foco em cirurgias minimamente invasivas.
            </p>
          </div>
        </div>
      </section>

      {/* Seção Serviços */}
      <section id="servicos" className="py-16 px-4 bg-[#f8e8d9]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#8c6b5d] mb-12">Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-[#a08476]">Consultas Ginecológicas</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">Rotina ginecológica, prevenção, diagnóstico e tratamento de doenças.</CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-[#a08476]">Pré-Natal e Obstetrícia</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">Acompanhamento completo da gestação, parto e pós-parto.</CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-[#a08476]">Cirurgia Ginecológica</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">Procedimentos minimamente invasivos (videolaparoscopia, histeroscopia).</CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-[#a08476]">Ginecologia Endócrina</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">Tratamento de distúrbios hormonais, climatério e menopausa.</CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-[#a08476]">Contracepção</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">Orientação e inserção de métodos contraceptivos (DIU, Implanon).</CardDescription>
              </CardContent>
            </Card>
             <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-[#a08476]">Endoscopia Ginecológica</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">Diagnóstico e tratamento por videolaparoscopia e histeroscopia.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção Blog */}
      <section id="blog" className="py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#8c6b5d] mb-12">Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Exemplo de posts - Idealmente viriam de um CMS ou arquivos Markdown */}
            <Card className="bg-[#f8e8d9] shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-[#a08476]">Queixas Comuns no Consultório</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">Entenda as causas e tratamentos para as queixas ginecológicas mais frequentes.</CardDescription>
                <Button variant="link" asChild className="text-[#d4a38c] p-0 h-auto">
                  <Link href="/blog/blog_queixas_comuns">Leia mais</Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-[#f8e8d9] shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-[#a08476]">Cirurgias Ginecológicas Comuns</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">Conheça os procedimentos cirúrgicos mais realizados na ginecologia.</CardDescription>
                 <Button variant="link" asChild className="text-[#d4a38c] p-0 h-auto">
                  <Link href="/blog/blog_cirurgias_comuns">Leia mais</Link>
                </Button>
              </CardContent>
            </Card>
             <Card className="bg-[#f8e8d9] shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-[#a08476]">Videolaparoscopia Ginecológica</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">Saiba mais sobre esta técnica minimamente invasiva e suas aplicações.</CardDescription>
                 <Button variant="link" asChild className="text-[#d4a38c] p-0 h-auto">
                  <Link href="/blog/blog_videolaparoscopia">Leia mais</Link>
                </Button>
              </CardContent>
            </Card>
             <Card className="bg-[#f8e8d9] shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-[#a08476]">Histeroscopia Diagnóstica e Cirúrgica</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">Entenda como a histeroscopia ajuda no diagnóstico e tratamento intrauterino.</CardDescription>
                 <Button variant="link" asChild className="text-[#d4a38c] p-0 h-auto">
                  <Link href="/blog/blog_histeroscopia">Leia mais</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção Contato */}
      <section id="contato" className="py-16 px-4 bg-[#fbf0e4]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#8c6b5d] mb-8">Contato</h2>
          <div className="max-w-3xl mx-auto text-gray-700 space-y-6">
            <p>Agende sua consulta ou tire suas dúvidas entrando em contato:</p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="text-center">
                <h3 className="font-semibold text-[#a08476] mb-2">Clínica Madri</h3>
                <p>R. Padre Anchieta, 2050, Sala 1001</p>
                <p>Bigorrilho, Curitiba - PR</p>
                <div className="flex justify-center items-center space-x-2 mt-2">
                  <Phone size={18} className="text-[#d4a38c]" />
                  <a href="tel:+554135039580" className="text-[#8c6b5d] hover:text-[#a08476]">(41) 3503-9580</a>
                </div>
                 <div className="flex justify-center items-center space-x-2 mt-2">
                  <MessageCircle size={18} className="text-[#25D366]" />
                  <a href="https://wa.me/5541992250305" target="_blank" rel="noopener noreferrer" className="text-[#8c6b5d] hover:text-[#a08476]">(41)  99225-0305 (WhatsApp)</a>
                </div>
              </div>
              {/* Adicionar mapa ou outras informações se necessário */}
            </div>
          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="py-6 px-4 bg-[#f8e8d9] text-center">
        <p className="text-sm text-[#a08476]">&copy; {new Date().getFullYear()} Dra. Kérellyn Follador. Todos os direitos reservados.</p>
        {/* Links para redes sociais, etc. */}
      </footer>
    </main>
  );
}
