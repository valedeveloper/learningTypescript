'use client'
import { getRandomNumber } from "@/utilities/getRandomNumber"
import {MouseEventHandler, useState} from "react"
import {random} from 'lodash';


const urlFox:string="https://randomfox.ca/images/" //Para definir el tipo de dato que esa variable es simplemente se colocan dos puntos y sep pone si es "string, number, Array, Object, etc"


export const useImageFox=()=>{
    const [images, setImages] = useState<Array<IFoxImageItem>>([])
      const numberRandom=random(1,123)
     
      const addNewImage:MouseEventHandler<HTMLButtonElement> =()=>{ 
        const newImage:IFoxImageItem={
          id:numberRandom,
          image:`${urlFox}/${numberRandom}.jpg`
        }
        setImages(
         [ ...images,newImage]
        )

        // window.plausible("add_fox");
      }
      return{ 
        addNewImage, images
      }
}