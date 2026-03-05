import React from 'react'


function cardcategories(props) {
  return (
    <div className="w-[150px] h-[200px]  flex-col flex items-center">
      <div className="w-[150px] h-[150px]  rounded-[50%] overflow-hidden ">
      <img src={props.imgurl}  className="w-[140px] h-[140px] object-cover" />
    </div>
    <h1>{props.name}</h1>
    </div>
  );
}

export default cardcategories;
