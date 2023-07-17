"use client";
import { useEffect, useState } from "react";
function Phone() {
  var [date, setDate] = useState(new Date());
  useEffect(() => {
    //begin checking on an interval whether time has changed?
    var timer = setInterval(() => setDate(new Date()), 5000);
    return () => clearInterval(timer);
  });
  return (
    <>
      <div className="phoneContainer relative m-[30px]">
        <p className="absolute flex flex-col w-full h-full top-[-20%] font-black text-4xl items-center text-[#3B321A] justify-center">
          {`${date.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}`}
        </p>
        <img src="/assets/phone.svg" draggable="false" alt="" />
      </div>
    </>
  );
}

export default Phone;
