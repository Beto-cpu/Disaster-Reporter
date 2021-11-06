import Head from 'next/head';
import Link from 'next/link';
import Navbar from './components/navbar';
import Footer from './components/footer';
import dynamic from "next/dynamic";

export default function Home() {
  const Map = dynamic(() => import("./components/map"), {
    ssr: false
  });

  return (
    <div className="flex flex-col items-center min-h-screen justify-between">
      <Head>
        <title>Denuncia Ambiental</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <main className="flex flex-col items-center space-y-8 max-w-4xl w-full py-16">
        <h1 className="font-bold text-2xl md:text-3xl text-scary-gray capitalize underline">Formato de Denuncia</h1>

        <form className="flex flex-col w-full items-center space-y-12">
          {/* Datos del Denunciante */}
          <fieldset  className="relative flex flex-col bg-gray-200 pt-2 pb-7 px-3 md:px-12 w-full space-y-4 md:text-lg">
            <legend className="text-xl md:text-2xl font-semibold">Datos Generales del Denunciante</legend>
            
            <div className="flex flex-col md:flex-row w-full justify-between items-center">
              <label htmlFor="whistleblower-name" className="font-semibold md:w-64 mr-4">*Nombre Completo</label>
              <input type="text" name="whistleblower-name" className="w-full px-5 py-1 shadow-sm border-gray-300 rounded-md"/>
            </div>

            <div className="flex flex-col md:flex-row w-full justify-between items-center">
              <label htmlFor="whistleblower-phone" className="font-semibold md:w-64 mr-4">Teléfono</label>
              <input type="tel" name="whistleblower-phone" className="w-full px-5 py-1 shadow-sm border-gray-300 rounded-md"/>
            </div>

            <div className="flex flex-col md:flex-row w-full justify-between items-center">
              <label htmlFor="whistleblower-email" className="font-semibold md:w-64 mr-4">Correo electrónico</label>
              <input type="email" name="whistleblower-email" className="w-full px-5 py-1 shadow-sm border-gray-300 rounded-md"/>
            </div>

            <div className="flex flex-col md:flex-row w-full justify-between items-center">
              <label htmlFor="whistleblower-anonymous" className="font-semibold md:w-64 mr-4">¿Desea que sus datos sean anónimos?</label>
              <div className="flex flex-row space-x-4 w-full justify-center md:justify-start">
                <div className="flex items-center">
                  <input id="whistleblower-anonymous-yes" name="whistleblower-anonymous" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                  <label htmlFor="whistleblower-anonymous-yes" className="ml-3 block font-medium text-gray-700" checked={true}>
                    Sí
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="whistleblower-anonymous-no" name="whistleblower-anonymous" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                  <label htmlFor="whistleblower-anonymous-no" className="ml-3 block font-medium text-gray-700">
                    No
                  </label>
                </div>
              </div>
            </div>
          </fieldset>

          {/* Existe Denunciado */}
          <fieldset className="flex flex-row text-xl">
            <label htmlFor="denounced-exist" className="font-semibold md:w-64 mr-4">¿Existe un denunciado?</label>
            <div className="flex flex-row space-x-4 w-full justify-center md:justify-start">
              <div className="flex items-center">
                <input id="denounced-exist-yes" name="denounced-exist" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                <label htmlFor="denounced-exist-yes" className="ml-3 block font-medium text-gray-700">
                  Sí
                </label>
              </div>
              <div className="flex items-center">
                <input id="denounced-exist-no" name="denounced-exist" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                <label htmlFor="denounced-exist-no" className="ml-3 block font-medium text-gray-700">
                  No
                </label>
              </div>
            </div>
          </fieldset>

          {/* Datos del Denunciado */}
          <fieldset  className="relative flex flex-col bg-gray-200 pt-2 pb-7 px-3 md:px-12 w-full space-y-4 md:text-lg">
            <legend className="text-xl md:text-2xl font-semibold">Datos Generales del Denunciado</legend>
            
            <div className="flex flex-col md:flex-row w-full justify-between items-center">
              <label htmlFor="denounced-name" className="font-semibold md:w-64 mr-4">*Nombre</label>
              <input type="text" name="denounced-name" className="w-full px-5 py-1 shadow-sm border-gray-300 rounded-md"/>
            </div>

            <div className="flex flex-col md:flex-row w-full justify-between items-center">
              <label htmlFor="denounced-person-type" className="font-semibold md:w-64 mr-4">*Tipo de Persona</label>
              <div className="flex flex-row space-x-4 w-full justify-center md:justify-start">
                <div className="flex items-center">
                  <input id="denounced-person-type-a" name="denounced-person-type" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                  <label htmlFor="denounced-person-type-a" className="ml-3 block font-medium text-gray-700">
                    Física
                  </label>
                </div>
                <div className="flex items-center">
                  <input id="denounced-person-type-b" name="denounced-person-type" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"/>
                  <label htmlFor="denounced-person-type-b" className="ml-3 block font-medium text-gray-700">
                    Moral
                  </label>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row w-full justify-between items-center">
              <label htmlFor="denounced-direction" className="font-semibold md:w-64 mr-4">Dirección</label>
              <input type="text" name="denounced-direction" className="w-full px-5 py-1 shadow-sm border-gray-300 rounded-md"/>
            </div>

            <div className="flex flex-col md:flex-row w-full justify-between items-center">
              <label htmlFor="denounced-state" className="font-semibold md:w-64 mr-4">Estado</label>
              <input type="text" name="denounced-state" className="w-full px-5 py-1 shadow-sm border-gray-300 rounded-md"/>
            </div>

            <div className="flex flex-col md:flex-row w-full justify-between items-center">
              <label htmlFor="denounced-municipality" className="font-semibold md:w-64 mr-4">Municipio</label>
              <input type="text" name="denounced-municipality" className="w-full px-5 py-1 shadow-sm border-gray-300 rounded-md"/>
            </div>

            
          </fieldset>
          
          {/* Datos del hecho */}
          <fieldset  className="relative flex flex-col bg-gray-200 pt-2 pb-7 px-3 md:px-12 w-full space-y-4 md:text-lg">
            <legend className="text-xl md:text-2xl font-semibold">Datos Generales del Hecho</legend>
            
            <div className="flex flex-col md:flex-row w-full justify-between items-center">
              <label htmlFor="event-type" className="font-semibold md:w-64 mr-4">*Tipo de Violación</label>
              <select id="event-type" name="event-type" className="w-full px-5 py-1 border border-gray-300 rounded-md">
                <option>Incendio</option>
                <option>Basura</option>
                <option>Mexico</option>
              </select>
            </div>

            <div className="flex flex-col md:flex-row w-full justify-between justify-center">
              <label htmlFor="event-priority" className="font-semibold md:w-64 mr-4">*Prioridad</label>
              <select id="event-priority" name="event-type" className="w-full px-5 py-1 border border-gray-300 rounded-md">
                <option>Alta</option>
                <option>Media</option>
                <option>Baja</option>
              </select>
            </div>

            <div className="flex flex-col w-full justify-between">
              <label htmlFor="event-description" className="font-semibold md:w-64 mr-4">*Descripción del Hecho</label>
              <textarea id="event-description" name="event-description" rows="4" className="w-full px-5 py-1 shadow-sm border-gray-300 rounded-md">
              </textarea>
            </div>

            <div className="flex flex-col w-full justify-between">
              <label htmlFor="event-location" className="font-semibold md:w-64 mr-4">*Localización del Hecho</label>
              <div className="w-full h-64">
                <Map/>
              </div>
            </div>

            <div>
              <label htmlFor="event-images" className="font-semibold md:w-64 mr-4">Imágenes</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label htmlFor="event-images" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span>Upload a file</span>
                      <input id="event-images" name="event-images" type="file" className="sr-only" onChange={(e)=>{console.log(e.target.value)}}/>
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>

          </fieldset>

          <button type="submit" className="bg-natural-green hover:bg-suspicious-yellow py-2 px-5 border border-black font-semibold">Enviar</button>

        </form>
      </main>

      <Footer/>

    </div>
  )
}
