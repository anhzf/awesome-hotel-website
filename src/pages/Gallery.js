import React from 'react';
import ImageCards from '../components/ImageCards'
import SubHeader from '../components/SubHeader';

 function Gallery(){
   return(
       
       <div className=" mt-0 md:mt-0">
           <div className="mt-0 md:mt-0">
               <SubHeader></SubHeader>
           </div>
          <div className=" container grid grid-cols-3 gap-4 pt-24 mx-auto">

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