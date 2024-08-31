import React from "react";
import Image from "next/image";

type NotifcardProps = {
  type: string;
  previewImage: string;
  message: string;
};

const Notifcard:React.FC <NotifcardProps> =  ({
  type,previewImage,message}: NotifcardProps) =>{
  return (
    <div
      className="flex w-[320px] h-[80px] flex-row space-x-[10px] bg-terirary-200 hover:bg-terirary-400 rounded-corner p-3 
                    lg:w-[704px] lg:h-[99px] lg:space-x-[20px]"
    >
      <div
        className="flex w-[50px] h-[50px] overflow-hidden items-center rounded-2xl 
                      lg:w-[75px] lg:h-[75px]"
      >
        <Image
          src={previewImage}
          width={50}
          height={50}
          alt={"preview image"}
          className="flex object-cover w-full h-full"
        />
      </div>

      <div
        className="flex w-[240px] h-[50px] items-start gap-2 
                      lg:w-[585px] lg:h-[75px] lg:ml-5 lg:gap-4"
      >
        <p
          className="flex self-center font-sans text-[14px] w-[80px] font-normal text-black text-balance 
                      lg:text-[20px] lg:w-[125px]"
        >
          Ad update
        </p>

        <p
          className="flex self-center font-sans text-[12px] w-[160px] font-normal text-black text-pretty 
                      lg:text-[16px] lg:w-[463px]"
        >
         
        </p>
      </div>
    </div>
  );
};

export default Notifcard;
