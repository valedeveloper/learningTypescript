
type Props={
    id:number,
    image:string
}

function ImageRandom({id,image}:Props):JSX.Element{ 
    return(
        <img src={image} alt={`Imagen ${id}`} className="w-1/2 h-1/3"/>
    )
}
export default ImageRandom
