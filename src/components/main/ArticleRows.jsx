import { ArticleAccordion } from "./ArticleAccordion";
import { ArticleButtons } from "./ArticleButtons";
import { ArticleImages } from "./ArticleImages";
import { RichText } from "./RichText";

export const ArticleRows = ({ item }) => {
  return (
    <section  className={`grid ${item.width === "100%" && "grid-cols-1"} 
    ${
      item.width === "50%-50%" && "grid-cols-1 md:grid-cols-2 gap-4"
    } ${item.width === "33%-33%-33%" && "grid-cols-1 lg:grid-cols-3 gap-6"} ${
      item.width === "25%-25%-25%-25%" &&
      "grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
    } ${
      item.width === "25%-75%" && "grid-cols-1 lg:grid-cols-3 lg:gap-6 gap-0 "
    }
    ${
      item.width === "75%-25%" && "grid-cols-1 lg:grid-cols-3 lg:gap-6 gap-0 "
    }
    mb-3`}>

      {item.columns.map((column) => {
        let position = 0; 
 console.log({position})
        return column.items.map((itemColumn, index) => {
          const colSpan =
            (item.width === "25%-75%" && position === 1) ||
            (item.width === "75%-25%" && position === 0)
              ? "col-span-2"
              : "";

          if (itemColumn.type === "richText") {
          
            return (
              <RichText
                key={itemColumn.order_column}
                itemColumn={itemColumn}
                item={item}
                index={index}
                colSpan={colSpan}
              />
            );
          }
          if (itemColumn.type === "imagenes") {
         
            return (
              <ArticleImages
                key={itemColumn.order_column}
                itemColumn={itemColumn}
                colSpan={colSpan}
              />
            );
          }
          if (itemColumn.type === "acordion") {
          
            return (
              <ArticleAccordion
                key={itemColumn.order_column}
                itemColumn={itemColumn}
                colSpan={colSpan}
              />
            );
          }
          if (itemColumn.type === "botones") {
         
            return (
              <ArticleButtons
                key={itemColumn.order_column}
                itemColumn={itemColumn}
                colSpan={colSpan}
              />
             
            );
          
          }

          
   
          
        });
      })}
    </section>
  );
};
