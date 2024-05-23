<!DOCTYPE html>
<HTML lang="eng">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <tittle>DOCUMENT</tittle>
    </head>
    <body>
        <script>
            var products=[
                {
                name:"laptop",
                price:90000,
                photo:'apple.jpg'
            },
            {
                name:"tablet",
                price:1000000,
                photo:'apple.jgp'
            },
            {
                name:"smart watch",
                price:8000,
                photo:'apple .jpg'
            }
            ];
            class category {
                category names="electronics";
        }
         class product extends react.component
        {
        productsdata=products;
         render()
         {
        // const category= new  category()
         return(
            <div classname='card-deck'>
                {
                    this.productsdata.map((product)=>
                    {
                        return (
                            <div classname='card'>
                                <div classname='card-header'>
                                    <h3>{product.naame}</h3>
         </div>
                       <div classname='card-body'>
                      <img src={product.photo} alt='appleimg' width="200" height="200"/>
            </div>
                             <div classname='card-footer'>
                                <h3>{product,price}</h3>
                               <p>{product.mdf.tolocaledatestring()}</p>
                                      <p>{category.categoryname}</p>
                      )  }
          ) }
                           )}
                        }
        </div>
        </div>
     </div>
    
        </script>
    </body>
</html>
