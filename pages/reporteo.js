import Head from 'next/head';
import Link from 'next/link';
import Navbar from './components/navbar';
import Footer from './components/footer';

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen justify-between">
      <Head>
        <title>Disaster Reporter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      {/* <main className="my-16 flex flex-row items-center justify-between mx-4 w-full max-w-7xl space-x-5">
        <div className="mx-6">
          <img src="/assets/fire.jpg"/>
        </div>
        <div className="max-w-xl flex flex-col space-y-8 px-2">
          <h1 className="font-bold text-3xl text-scary-gray mx-auto">Denuncia Ambiental</h1>
          <p className="text-2xl">En México, todos los ciudadanos tenemos el derecho presentar denuncias ante las autoridades sobre hechos, actos u omisiones que produzcan o puedan producir desequilibrio ecológico o daños al ambiente o a los recursos naturales.</p>
          <Link href="/denuncia"><a className="text-2xl text-natural-green underline font-bold hover:text-suspicious-yellow">Empezar</a></Link>
        </div>
      </main> */}

      <Footer/>

    </div>
  )
}
