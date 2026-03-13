import React from 'react'

function Card(props) {
  return (
    <>
 <div>
  
     <a href={props.pathh}>
    <div className=" w-[220px] h-auto bg-[#F29F67]  rounded-lg border border-[#F29F67] border-[10px]">
     
        <img src={props.imgurl} className="h-[140px] w-[220px] rounded-lg"/>

          <p className="text-orange-950  text-[20px] ml-1 font-bold">{props.name}</p>
          <p className="text-orange-950  text-[20px]  font-bold"><i class="fa-solid fa-indian-rupee-sign"></i>{props.rs}</p>
          <p className="text-orange-950  text-[20px] mb-1 font-bold">{props.p}</p>
          

     <div className="w-full items-row flex justify-center">
      <button className="w-[100px] text-[14px] h-8 border-[1px] border-gray-900 text-white font-semibold rounded-lg  bg-[#431407]">Add to cart</button></div>
    </div>
    </a>


 </div>
    </>
  )
}

export default Card