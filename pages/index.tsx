'use client'
import {useImageFox} from '../hook/useImageFox';
import LazyImage from '../components/LazyImage';


function Home():JSX.Element {
  const {addNewImage,images}=useImageFox()
  return (
    <div className='text-center : space-y-5 w-full h-screen my-10'>
    <h3 className=': uppercase font-bold text-lila'>Curso React con Typescript</h3>
    <h1 className="uppercase text-center text-3xl font-bold ">Componente Lazy Image</h1>
    <p className='text-lg text-gray-500 font-thin'>Un componente genérico de React para cargar imágenes con Lazy Loading</p>
    <p className='text-lg text-gray-500 font-thin'>Las imágenes agregadas no se descargarán hasta que no sean visibles en la pantalla</p>
    <button className=" bg-lila px-5 py-2 text-white  rounded  uppercase font-bold" onClick={addNewImage}>Add New Image</button>
     { 
      images.map(({id,image},index)=>(
        <div key={id} className='w-full flex flex-col  items-center '>
         <LazyImage 
              src={image}
              width="320"
              height="auto"
              className="mx-auto rounded-md bg-gray-300"
              onClick={() => {
                console.log("holi!");
              }} 
              onLazyLoad={(img) => {
                console.log(`Image #${index + 1} cargada. Nodo:`, img);
              }}
              />
        </div>
      ))
    } 
    
    </div>
    )

}
export default Home