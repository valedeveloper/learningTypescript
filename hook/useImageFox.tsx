'use client'
import { getRandomNumber } from "@/utilities/getRandomNumber"
import {MouseEventHandler, useState} from "react"

const urlFox:string="https://randomfox.ca/images/" //Para definir el tipo de dato que esa variable es simplemente se colocan dos puntos y sep pone si es "string, number, Array, Object, etc"
type ImageItem={ id:number,image:string}

export const useImageFox=()=>{
    const [images, setImages] = useState<Array<ImageItem>>([])
      const numberRandom=getRandomNumber()
      const addNewImage:MouseEventHandler<HTMLButtonElement> =()=>{ 
        const newImage:ImageItem={
          id:numberRandom,
          image:`${urlFox}/${numberRandom}.jpg`
        }
        setImages(
         [ ...images,newImage]
        )
      }

      
      return{ 
        addNewImage, images
      }
}