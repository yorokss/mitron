import React from 'react'
import Image from "next/image";
import newShoeImg from '../../images/newShoe.webp'
const Product = () => {
  return (
    <>
      <div className=" w-[22vw] bg-red-500 flex flex-col items-center justify-around ">
        <Image
          className="h-[50vh] object-cover object-center"
          src={newShoeImg}
          class=""
          alt="no image available"
        />
        <div className="text text-center mt-3">
          <h3>
            Bacca Bucci Urban Genesis ...
          </h3>
          <h4>
            <b>Rs 1999</b>
            <s>Rs 2999</s>{" "}
          </h4>
          <h6>Ratings (count)</h6>
        </div>
      </div>
    </>
  );
}

export default Product