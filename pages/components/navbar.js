import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="w-full px-3 py-4 flex bg-scary-gray justify-center">
      <nav className="w-full flex flex-col md:flex-row items-center md:justify-between max-w-7xl space-y-5 md:space-y-0">
        <div className="flex flex-row items-center">
          <Link href='/'><a><img src="/assets/logo.png" alt="Logo" width={70} height={70} /></a></Link>
          <Link href='/'><a><span className="ml-3 text-white uppercase font-extrabold text-3xl hover:text-natural-green">Disaster Reporter</span></a></Link>
        </div>

        <ul className="flex flex-row text-white underline capitalize text-xl space-x-16">
          <li>
            <Link href='/denuncia'><a className="hover:text-suspicious-yellow">Denuncia Ambiental</a></Link>
          </li>
          <li>
            <Link href='/reporteo'><a className="hover:text-suspicious-yellow">Reporteo</a></Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
