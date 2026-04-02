import Link from "next/link";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getAllPosts } from "@/lib/posts";

const Home = async () => {
  const posts = getAllPosts();

  return (
    <div className="flex justify-center w-full min-h-screen">
      <div className="mt-6 w-full max-w-screen-md px-8 md:px-0">
        <Header />
        <div className="space-y-12">
          {/* Introducing myself */}
          <div>
            <p className="text-lg leading-relaxed text-zinc-700">
              {`Meu nome é Ian Vaz Araujo. Eu sou cientista de dados de profissão e desenvolvedor nas horas vagas.
              Por aqui, compartilho alguns textos sobre IA, dados, tecnologia, e outros interesses: finanças, investimentos e empreendedorismo!`}
            </p>
          </div>
          {/* Experience */}
          <section>
            <h2 className="text-base font-semibold uppercase tracking-wider text-zinc-400 mb-6">Experiência</h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-zinc-200"></div>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-8 h-8">
                    <div className="w-2 h-2 rounded-full bg-zinc-600 z-10"></div>
                  </div>
                  <div className="ml-2 space-y-1">
                    <div className="flex items-center gap-3">
                      <h3 className="text-base font-semibold">
                        Analista de Dados
                      </h3>
                      <p className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-600 font-semibold">
                        ATUAL
                      </p>
                    </div>
                    <p className="text-sm text-zinc-500">Turim MFO</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-8 h-8">
                    <div className="w-2 h-2 rounded-full bg-zinc-200 z-10"></div>
                  </div>
                  <div className="ml-2 space-y-1">
                    <h3 className="text-base font-semibold">Analista de Dados</h3>
                    <p className="text-sm text-zinc-500">Ágora Advocacy</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-8 h-8">
                    <div className="w-2 h-2 rounded-full bg-zinc-200 z-10"></div>
                  </div>
                  <div className="ml-2 space-y-1">
                    <h3 className="text-base font-semibold">Pesquisador</h3>
                    <p className="text-sm text-zinc-500">FGV EBAPE</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex items-center justify-center w-8 h-8">
                    <div className="w-2 h-2 rounded-full bg-zinc-200 z-10"></div>
                  </div>
                  <div className="ml-2 space-y-1">
                    <h3 className="text-base font-semibold">Consultor</h3>
                    <p className="text-sm text-zinc-500">
                      Instituto Lima Barreto, Ministério da Educação, TRE-BA
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Latest Posts */}
          <section>
            <h2 className="text-base font-semibold uppercase tracking-wider text-zinc-400 mb-6">Últimas publicações</h2>
            <ul className="space-y-3">
              {posts.slice(0, 3).map((post) => (
                <li
                  key={post.slug}
                  className="w-full border border-zinc-200 rounded-md px-5 py-4 space-y-1 hover:bg-zinc-50 transition-colors"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="font-medium hover:underline">{post.title}</h3>
                  </Link>
                  <p className="text-zinc-500 text-sm">{post.description}</p>
                </li>
              ))}
            </ul>
            {posts.length > 3 && (
              <div className="mt-3">
                <Link href="/blog" className="inline-block group text-sm text-zinc-700 transition duration-300">
                  Ver todas publicações
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-[1.5px] bg-zinc-700"></span>
                </Link>
              </div>
            )}
          </section>
          <section>
            <h2 className="text-base font-semibold uppercase tracking-wider text-zinc-400 mb-6">Contato</h2>
            <p className="text-zinc-700">
              {`Vamos trabalhar juntos! Você pode me mandar mensagem em qualquer rede social.`}
            </p>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
