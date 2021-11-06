import Head from 'next/head';
import Link from 'next/link';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { useState } from 'react';

export default function Home() {
  const [city, setCity] = useState('Mexicali');
  const [sortBy, setSortBy] = useState(0);
  const [actual, setActual] = useState({sortType: 0, parameter: ''});
  const [dataAct, setDataAct] = useState({...localStorage.dataAct})

  const setActualSortType = (e) => {
    e.preventDefault();

    setSortBy(e.target.selectedIndex);
  }

  return (
    <div className="flex flex-col items-center min-h-screen justify-between">
      <Head>
        <title>Disaster Reporter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <main className="flex flex-col w-full items-center">
        <section className="flex flex-row justify-center w-full max-w-7xl px-2 items-center my-6">
          <span>Ciudad: {city}</span>
          <h1 className="font-bold text-3xl text-scary-gray mx-auto underline">Reporteo</h1>
          <div className="flex flex-col justify-between items-center">
              <label htmlFor="sort-by" className="font-semibold mr-4">Ordenar por:</label>
              <select id="sort-by" name="sort-by" className="px-5 py-1 border border-gray-300 rounded-md" onChange={setActualSortType}>
                <option>Importancia</option>
                <option>Tipo</option>
              </select>
            </div>
        </section>

        <section className="w-full max-w-7xl items-center">
        <table className="table-auto mx-auto text-center border border-black">
          <tr>
            <th className="w-64 border border-black bg-blue-300">{sortBy? 'Importancia' : 'Tipo'}</th>
            <th className="w-64 border border-black bg-blue-300">Cantidad</th>
          </tr>
          <tbody>
            {
              (sortBy? getTableType(dataAct) : getTablePriority(dataAct)).map( (val, index) => {
                return (<tr>
                  <td onClick={(e) => {setActual({parameter: val.type})}} className={`hover:text-suspicious-yellow hover:underline hover:cursor-pointer w-64 border border-black ${index%2 != 0? 'bg-blue-100' : ''}`}>{val.type}</td>
                  <td className={`w-64 border border-black ${index%2 != 0? 'bg-blue-100' : ''}`}>{val.quantity}</td>
                </tr>);
              })
            }
          </tbody>
        </table>
        </section>
      </main>

      <section className="w-full max-w-7xl">
        {actual.parameter && 
          (
            <>
            <h1>{(actual.sortType? 'Importancia' : 'Tipo')+': '+actual.parameter}</h1>
            <table className="table-auto mx-auto text-center border border-black">
              <tr>
                <th className="w-64 border border-black bg-blue-300">id</th>
                <th className="w-64 border border-black bg-blue-300">Tipo</th>
                <th className="w-64 border border-black bg-blue-300">Lugar</th>
                <th className="w-64 border border-black bg-blue-300">Fecha</th>
                <th className="w-64 border border-black bg-blue-300">Prioridad</th>
              </tr>
              <tbody>
              {
                  actual.parameter &&
                  (dataAct.map( (val, index) => {
                      return (
                        val.tipo == actual.parameter &&
                        <tr>
                          <td className={`w-64 border border-black ${index%2 != 0? 'bg-blue-100' : ''}`}>{val.id}</td>
                          <td className={`w-64 border border-black ${index%2 != 0? 'bg-blue-100' : ''}`}>{val.tipo}</td>
                          <td className={`w-64 border border-black ${index%2 != 0? 'bg-blue-100' : ''}`}>{val.lugar}</td>
                          <td className={`w-64 border border-black ${index%2 != 0? 'bg-blue-100' : ''}`}>{val.fecha}</td>
                          <td className={`w-64 border border-black ${index%2 != 0? 'bg-blue-100' : ''}`}>{val.prioridad}</td>
                        </tr>
                      )
                    }
                  )
                )
              }
              </tbody>
            </table>
            </>
          )
        }
      </section>
  

      <Footer/>

    </div>
  )
}

const getTablePriority = (data)=>{
  const result = [{type: 'Muy alto', quantity: 0}, {type: 'Alto', quantity: 0}, {type: 'Medio', quantity: 0}, {type: 'Bajo', quantity: 0}];

  for(let i of data){
    result[(Math.floor((i.prioridad)/25))].quantity++;
  }
  return result;
}
const getTableType = (data)=>{
  const result = [{type: 'Tira de Basura', quantity: 0}, {type: 'Incendio', quantity: 0}, {type: 'Tala de arboles', quantity: 0}, {type: 'Contaminación del agua', quantity: 0}, {type: 'Emision de gases', quantity: 0}];

  for(let i of data){
    for(let j of result){
      if(i.tipo == j.type){
        j.quantity++;
        break;
      }
    }
  }
  return result;
}

