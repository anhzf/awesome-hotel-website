import React from 'react';
import ImageCards from '../components/ImageCards'

 function Gallery(){
   return(
       <div className="container mx-auto">
          <div className="grid grid-cols-3 gap-4">

                <ImageCards ></ImageCards>
                <ImageCards ></ImageCards>
                <ImageCards ></ImageCards>
                <ImageCards ></ImageCards>
                <ImageCards ></ImageCards>
                <ImageCards ></ImageCards>

          </div>
           
       </div>
   )
}

export default Gallery;