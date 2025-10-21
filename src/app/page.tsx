
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
    {/* SEÇÃO 1 – HERO */}
    <header className="bg-light-blue pt-12 pb-16 text-center overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">
                "Pais cristãos descobriram como <span className="text-primary">memorizar versículos 3x mais rápido</span> sem forçar — o segredo? <span className="text-secondary">30 jogos desenhados por educadores</span> de escola dominical com 15 anos em sala."
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                    "O Clube dos Jogos Bíblicos transforma a hora do devocional na parte favorita do dia — sem briga, sem tédio, só memórias que eles vão carregar pra sempre. Kit digital com mais de 30 jogos cristãos prontos para imprimir e brincar"
                </p>
                <div className="my-8 px-4">
                    <Image src="https://agalves.com/jogos/familiajogando.jpg" alt="Imagem de uma família feliz jogando jogos de tabuleiro" width={896} height={597} className="rounded-2xl shadow-xl mx-auto max-w-2xl w-full" />
                </div>
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-xl py-4 px-10 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-block h-auto">
                    <a href="#ofertas">
                        Quero Comprar Agora
                    </a>
                </Button>

                <div className="mt-6 text-gray-500 flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 text-sm md:text-base">
  
                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4">
                      </path>
                    </svg>
                    Download imediato
                  </span>

                  <span className="hidden sm:block text-gray-400">|</span>

                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z">
                      </path>
                    </svg>
                    Imprima quantas vezes quiser
                  </span>

                  <span className="hidden sm:block text-gray-400">|</span>

                  <span className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v11.494m-9-5.747h18"></path>
                    </svg>
                    100% baseado na Bíblia
                  </span>
                </div>


            </div>
             <div className="mt-12">
                <a href="#o-que-voce-vai-receber" className="text-gray-600 font-semibold hover:text-blue-600 transition-colors">
                    Descubra tudo o que vem no seu kit ↓
                </a>
            </div>
        </div>
    </header>

    {/* SEÇÃO 2 – O QUE VOCÊ VAI RECEBER */}
    <section id="o-que-voce-vai-receber" className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-2xl">🕊️</span> O que você vai receber no Clube dos Jogos Bíblicos
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">
                São mais de 30 jogos incríveis prontos para imprimir e usar — perfeitos para momentos de aprendizado, diversão e fé em família!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
                {/* Card 1: Jogos de Cartas */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-primary transition-transform transform hover:-translate-y-2 duration-300">
                    <h3 className="font-bold text-2xl mb-6 flex items-center"><span className="text-3xl mr-3">🎴</span>Jogos de Cartas</h3>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Toda a coleção UNO</li>
                        <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Super Trunfo Bíblico</li>
                        <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Jogo do Mico da Fé</li>
                        <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Encontre (Spot It)</li>
                        <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Plano de Salvação</li>
                    </ul>
                </div>

                {/* Card 2: Quizzes e Desafios */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-400 transition-transform transform hover:-translate-y-2 duration-300">
                    <h3 className="font-bold text-2xl mb-6 flex items-center"><span className="text-3xl mr-3">🤔</span>Quizzes e Desafios</h3>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Olimpíadas Bíblicas</li>
                        <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Quem Sou Eu? (3 versões)</li>
                        <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Verdade ou Mentira</li>
                        <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Jogo das 3 Pistas</li>
                         <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>E muitos outros!</li>
                    </ul>
                </div>
                
                {/* Card 3: Clássicos da Família */}
                <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-green-500 transition-transform transform hover:-translate-y-2 duration-300">
                    <h3 className="font-bold text-2xl mb-6 flex items-center"><span className="text-3xl mr-3">👨‍👩‍👧‍👦</span>Clássicos da Família</h3>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Bingo Bíblico e de Jesus</li>
                        <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Dominó Cristão</li>
                        <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Jogos da Memória (Vários)</li>
                        <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>Siga a Cristo</li>
                        <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>E muito mais!</li>
                    </ul>
                </div>
            </div>

            <div className="mt-16">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-block h-auto text-lg">
                  <a href="#ofertas">
                      Quero garantir meu kit agora ↓
                  </a>
              </Button>
            </div>
        </div>
    </section>

    {/* SEÇÃO 3 – BENEFÍCIOS */}
    <section className="bg-light-blue py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
                Por que o Clube dos Jogos Bíblicos é diferente?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
                {/* Benefício 1 */}
                <div className="flex flex-col items-center">
                    <div className="bg-white p-5 rounded-full shadow-md mb-4">
                        <span className="text-4xl">📖</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Ensine a Bíblia de forma divertida</h3>
                    <p className="text-gray-600">Transforme lições bíblicas em brincadeiras que as crianças amam.</p>
                </div>
                {/* Benefício 2 */}
                <div className="flex flex-col items-center">
                    <div className="bg-white p-5 rounded-full shadow-md mb-4">
                        <span className="text-4xl">👨‍👩‍👧‍👦</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Fortaleça o vínculo familiar</h3>
                    <p className="text-gray-600">Crie memórias inesquecíveis e fortaleça a união ao redor da Palavra.</p>
                </div>
                {/* Benefício 3 */}
                <div className="flex flex-col items-center">
                    <div className="bg-white p-5 rounded-full shadow-md mb-4">
                        <span className="text-4xl">✝️</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Inspire fé e valores cristãos</h3>
                    <p className="text-gray-600">Plante sementes de fé no coração dos seus filhos de um jeito natural.</p>
                </div>
                {/* Benefício 4 */}
                <div className="flex flex-col items-center">
                    <div className="bg-white p-5 rounded-full shadow-md mb-4">
                        <span className="text-4xl">💡</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Jogos prontos para imprimir</h3>
                    <p className="text-gray-600">Receba tudo no seu e-mail, imprima e comece a diversão em minutos.</p>
                </div>
            </div>
            <div className="mt-12">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 inline-block h-auto">
                    <a href="#ofertas">
                        Ver planos e preços ↓
                    </a>
                </Button>
            </div>
        </div>
    </section>

    {/* SEÇÃO 4 – JOGOS */}
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Veja alguns Bônus que sua família vai amar!
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6">

            <div className="w-full md:w-1/3 max-w-sm p-3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-primary h-full">
                <Image src="https://agalves.com/jogos/pregacoes.jpg" alt="Imagem do jogo UNO da Fé" width={400} height={192} className="w-full h-48 object-cover"/>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg">500 Pregações Poderosas</h3>
                  <p className="text-gray-600 text-sm">Mensagens inspiradoras que fortalecem sua fé e despertam o propósito de Deus em você. 🔥</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 max-w-sm p-3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-blue-400 h-full">
                <Image src="https://agalves.com/jogos/dinamicas.jpg" alt="Imagem do jogo Bingo Bíblico" width={400} height={192} className="w-full h-48 object-cover"/>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg">290 Dinâmicas Bíblicas</h3>
                  <p className="text-gray-600 text-sm">Atividades criativas e divertidas para grupos, células e igrejas crescerem em comunhão. 🙌</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 max-w-sm p-3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-green-400 h-full">
                <Image src="https://agalves.com/jogos/versiculos.jpg" alt="Imagem do jogo Quiz da Palavra" width={400} height={192} className="w-full h-48 object-cover"/>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg">200 Versículos Mais Reveladores</h3>
                  <p className="text-gray-600 text-sm">Desafie seu conhecimento bíblico e descubra novas revelações a cada rodada. 📖✨</p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 max-w-sm p-3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-red-400 h-full">
                <Image src="https://agalves.com/jogos/salmos.jpg" alt="Imagem do Jogo da Memória" width={400} height={192} className="w-full h-48 object-cover"/>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg">150 Salmos Explicados</h3>
                  <p className="text-gray-600 text-sm">Aprenda os ensinamentos dos Salmos de forma prática, leve e memorável. 🧠💛</p>
                </div>
              </div>
            </div>

            <div className="w-full mdW-1/3 max-w-sm p-3">
              <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-purple-400 h-full">
                <Image src="https://agalves.com/jogos/olimpiadas.jpg" alt="Imagem do jogo Quem Sou Eu" width={400} height={192} className="w-full h-48 object-cover"/>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-lg">Olimpíadas Bíblicas</h3>
                  <p className="text-gray-600 text-sm">Descubra personagens e histórias da Bíblia em um jogo cheio de desafios e diversão! 🕵️‍♂️🏆</p>
                </div>
              </div>
            </div>
          </div>

            <div className="mt-12">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 inline-block h-auto">
                <a href="#ofertas">
                    Quero todos esses jogos ↓
                </a>
              </Button>
            </div>

        </div>
      </div>
    </section>

    {/* SEÇÃO 5 – PLANOS E OFERTAS */}
    <section id="ofertas" className="bg-light-blue py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
                Escolha o pacote ideal para sua família
            </h2>
            <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8">
                
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-sm border-2 border-transparent hover:border-primary transition-all cursor-pointer text-center">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Pacote Simples</h3>
                        <p className="text-5xl font-bold mb-6">R$10<span className="text-lg font-normal">,00</span></p>
                        <ul className="text-left space-y-3 text-gray-600 mb-8">
                            <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Mais de 30 Jogos Bíblicos</li>
                        </ul>
                        <div className="bg-primary text-primary-foreground hover:bg-primary/90 w-full font-bold py-3 px-8 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 inline-block h-auto">
                            Quero só os Jogos Bíblicos
                        </div>
                    </div>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="text-center p-8">
                    <AlertDialogHeader>
                      <AlertDialogTitle className="text-2xl font-bold text-green-600">ESPERE! OFERTA ESPECIAL!</AlertDialogTitle>
                      <AlertDialogDescription className="text-gray-600 text-lg">
                        Atualize para o Pacote Completo e receba todos os bônus por um preço que você não vai acreditar.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <div className="my-6">
                      <p className="text-5xl font-bold">Apenas R$18,90</p>
                      <p className="text-gray-500 line-through">De R$27,00</p>
                    </div>
                    <AlertDialogFooter className="flex-col sm:flex-col sm:space-x-0 gap-2 w-full">
                      <AlertDialogAction asChild className="w-full bg-green-500 hover:bg-green-600 text-white text-lg font-bold py-3 px-6 rounded-full h-auto">
                        <a href="#pacote-completo-link">SIM! EU QUERO A OFERTA! →</a>
                      </AlertDialogAction>
                      <AlertDialogCancel asChild className="w-full mt-2">
                        <a href="#pacote-simples-link" className="text-gray-500 hover:underline">
                        Não, obrigado. Quero apenas o Pacote Básico.
                        </a>
                      </AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>


                {/* Pacote Completo */}
                <div id="pacote-completo-link" className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-sm border-4 border-primary relative transform lg:scale-110">
                    <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-red-500 text-white text-sm font-bold px-4 py-1 rounded-full">🔥 Mais Vendido</span>
                    <h3 className="text-2xl font-bold text-yellow-600 mb-4">Pacote Completo</h3>
                    <p className="text-5xl font-bold mb-6">R$27<span className="text-lg font-normal">,00</span></p>
                    <p className="font-semibold mb-4">Tudo do pacote simples + bônus:</p>
                    <ul className="text-left space-y-3 text-gray-600 mb-8">
                        <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>🎁 500 Pregações Poderosas</li>
                        <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>🎁 290 Dinâmicas Bíblicas</li>
                        <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>🎁 200 Versículos Mais Reveladores Explicados</li>
                        <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>🎁 150 Salmos Explicados</li>
                        <li className="flex items-center"><svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>🎁 Olimpíadas Bíblicas</li>
                    </ul>
                    <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90 w-full font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 inline-block h-auto">
                        <a href="#pacote-completo-link">
                            Quero o Pacote Completo
                        </a>
                    </Button>
                    <p className="text-red-500 text-sm mt-4 font-semibold">Oferta por tempo limitado!</p>
                </div>
            </div>
        </div>
    </section>

    {/* SEÇÃO 6 – PROVA SOCIAL */}
    <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Famílias que já estão se divertindo com a Palavra de Deus!
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-12">
                Veja o que quem já adquiriu está dizendo:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Testemunho 1 */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                        <Image src="https://i.imgur.com/ScNU86I.jpeg" alt="Avatar Ana S." width={50} height={50} className="rounded-full mr-4 object-cover"/>
                        <div>
                            <p className="font-bold">Ana S.</p>
                            <div className="flex text-yellow-500">
                                ⭐⭐⭐⭐⭐
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-600 italic">"Meus filhos não largam mais o Uno da Fé! Finalmente um jeito de ensinar a Bíblia que eles amam. Material de ótima qualidade!"</p>
                </div>
                {/* Testemunho 2 */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                        <Image src="https://i.imgur.com/xZQ5nFf.jpeg" alt="Avatar Marcos P." width={50} height={50} className="rounded-full mr-4 object-cover"/>
                        <div>
                            <p className="font-bold">Marcos P.</p>
                            <div className="flex text-yellow-500">
                                ⭐⭐⭐⭐⭐
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-600 italic">"Comprei para usar na escola dominical e foi um sucesso. As crianças ficaram super engajadas. Recomendo demais."</p>
                </div>
                {/* Testemunho 3 */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                    <div className="flex items-center mb-4">
                        <Image src="https://i.imgur.com/SROyMcO.jpeg" alt="Avatar Carla F." width={50} height={50} className="rounded-full mr-4 object-cover"/>
                        <div>
                            <p className="font-bold">Carla F.</p>
                            <div className="flex text-yellow-500">
                                ⭐⭐⭐⭐⭐
                            </div>
                        </div>
                    </div>
                    <p className="text-gray-600 italic">"Que material abençoado! Simples de imprimir e a diversão é garantida. A família toda participa e aprende junto."</p>
                </div>
            </div>
             <div className="mt-12">
                <Button asChild variant="outline" className="text-olive font-bold py-3 px-8 rounded-full border-2 border-green-700 hover:bg-green-700 hover:text-white transition-all duration-300 inline-block h-auto">
                    <a href="#ofertas">
                        Quero fazer parte do Clube ↓
                    </a>
                </Button>
            </div>
        </div>
    </section>


    {/* SEÇÃO 7 – GARANTIA + CTA FINAL */}
    <footer className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 text-center max-w-3xl">
             <div className="flex justify-center items-center mb-6">
                <span className="text-5xl text-yellow-500">🕊️</span>
             </div>
             <p className="text-xl text-gray-700 font-semibold mb-4">
                Garantia de 7 dias: Se você não amar o material, devolvemos 100% do valor.
            </p>
            <p className="text-gray-500 mb-8">
                Acesso digital imediato. Pagamento único. Sem surpresas.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-2xl py-5 px-12 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-block h-auto">
                <a href="#ofertas">
                    Quero Ensinar a Fé Brincando!
                </a>
            </Button>
        </div>
    </footer>
    </div>
  );
}

    