import { ArticleAccordion } from "./ArticleAccordion"
import { ArticleButtons } from "./ArticleButtons"
import { ArticleImages } from "./ArticleImages"
import { RichText } from "./RichText"

export const ArticleRows = ({item}) => {
  // console.log({item})
  const columns = item.columns
  // console.log({columns})
  return (

<section className={`grid ${item.width === "100%" && "grid-cols-1"} ${item.width === "50%-50%" && "grid-cols-1 md:grid-cols-2 gap-4"} ${item.width === "33%-33%-33%" && "grid-cols-1 lg:grid-cols-3 gap-6"} ${item.width === "25%-25%-25%-25%" && "grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"} ${item.width === "25%-75%" && "grid-cols-1 lg:grid-cols-3 lg:gap-6 gap-0"} mb-3`}>

      {
        columns.map( column => {
          // console.log({column})
          return column.items.map( (itemColumn,index) => {
           console.log({itemColumn})
            if (itemColumn.type === 'Texto Editable') {
              return <RichText key={itemColumn.order_column} itemColumn={itemColumn} item={item} index={index}/>
            }
            if (itemColumn.type === 'Imagenes') {
              return <ArticleImages key={itemColumn.order_column} itemColumn={itemColumn} />
            }
            if (itemColumn.type === 'Lista Desplegable') {
              return <ArticleAccordion key={itemColumn.order_column} itemColumn={itemColumn} />
            }
            if (itemColumn.type === 'Botones') {
              return <ArticleButtons   key={itemColumn.order_column} itemColumn={itemColumn} />
            }

          } )
        } )
      }
    </section>
  )
}