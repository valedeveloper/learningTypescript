'use client'
import {useState} from "react"
import ImageRandom from '../components/ImageRandom';

const urlFox:string="https://randomfox.ca/images/" //Para definir el tipo de dato que esa variable es simplemente se colocan dos puntos y sep pone si es "string, number, Array, Object, etc"
const getRandomNumber=():number=>{ 
  const newNumber= Math.floor(Math.random() * 30)
  return newNumber
} 
type ImageItem={ id:number,image:string}

function Home():JSX.Element {
  const [images, setImages] = useState<Array<ImageItem>>([
    { 
      id:getRandomNumber(),image:`${urlFox}/${getRandomNumber()}.jpg`
    },
    { 
      id:getRandomNumber(), image:`${urlFox}/${getRandomNumber()}.jpg`
    }
  ]) //Aquí se está siendo explícito en que lo objetos que va a contener el estado son un Array de objetos. Del tipo "ImageItem" este es un tipo que se coloca en explícito lo que lleva

  const getNewImage=():void=>{ 
    const newImage:string=`${urlFox}/${getRandomNumber()}.jpg`
    setImages(
     [ ...images,{
      id:getRandomNumber(),
      image:newImage
    }]
    )
  }
  return (
    <>
    <h1 className="uppercase text-center text-lg text-blue-600 font-bold">Imágenes de Zorro</h1>
    { 
      images.map(({id,image},index)=>(
        <div key={id} className="flex items-center flex-col gap-y-2  shadow-sm shadow-blue-600 m-5">
          <h3>{`Imagen de Zorro ${index+1}`}</h3>
         <ImageRandom id={index} image={image} />
        </div>
      ))
    }
    </>
   

    )
}
export default Home