import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFtechGifs";

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs ( category );

  console.log( isLoading );

  return (
    <>
        <h3>{ category }</h3>

        { 
          // isLoading ? (<h2>Cargando</h2>) : null 
          isLoading && (<h2>Cargando</h2>)  // ternario mas corto, si es true ejecuta la segunda parte si es false ya no continúa
        }

        <div className="card-grid">
          {
            images.map( (image) => (
              <GifItem 
                key={image.id}
                { ...image } // todas las propiedas que venga en image lo estoy esparciendo en el componente GifItem
              />
            ))
          }
        </div>
    </>
  )
}
