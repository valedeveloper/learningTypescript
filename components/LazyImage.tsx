/* eslint-disable @next/next/no-img-element */
'use client'
import {useRef,useEffect,useState} from "react"
import type {ImgHTMLAttributes} from "react"
type LazyImageProps = { src: string,onLazyLoad?:(image:HTMLImageElement)=>void }
// Los sumamos, haciendo que estos sean un solo tipo de dato
type Props = ImgHTMLAttributes<HTMLImageElement> & LazyImageProps; //Aquí está soportando las props que yo le pase, pero también las props que una imagen puede recibir

function LazyImage({src,onLazyLoad,...propsImage}:Props):JSX.Element{ 
    const [currentSrc,setCurrentSrc]=useState<string>("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=")
    const imageRef=useRef<HTMLImageElement>(null) //Se espera null o imagen

    useEffect(()=>{
        const onChange=(entries:Array<Object>)=>{ 
            const element:any=entries[0]
            if(!element.isIntersecting || !imageRef.current)return;
            
            setCurrentSrc(src);

            if (typeof onLazyLoad === "function") {
            onLazyLoad(imageRef.current);
            }
        }
        //Cuál es la función que ejecuto , a quédistancia
        const observer=new window.IntersectionObserver(onChange) //Por parámetro entra la función y la distancia 
        //Cuál es el elemento a observar
        // observer.observe(imageRef.current!) No me digas nada, sé que hago
        imageRef.current !== null && observer.observe(imageRef.current)
        return ()=>{ 
            observer.disconnect()
        }
    
    },[src,onLazyLoad])
    return(
        <img
        ref={imageRef} 
        src={currentSrc} 
        alt={`Imagen zorro `} 
        {...propsImage}/>
    )
}
export default LazyImage
