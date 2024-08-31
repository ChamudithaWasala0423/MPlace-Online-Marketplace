"use client";
import { toast } from "react-hot-toast";
import { useEffect, useRef, useState } from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { useActivationMutation } from "@/redux/features/auth/authApi";
import { useRouter } from "next/navigation";
import Button from "@/components/ui/button";

type VerficationNumber = {
  "0": string;
  "1": string;
  "2": string;
  "3": string;
  "4": string;
  "5": string;
};

export default function Verification() {
  const { token } = useSelector((state: any) => state.auth);
  const [activation, { isSuccess, error }] = useActivationMutation();
  const [invalidError, setInvalidError] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Account activated successfully");
      router.push("../login");
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
        setInvalidError(true);
      } else {
        console.log("An error occured:", error);
      }
    }
  }, [isSuccess, error]);

  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const [verifyNumber, setverifynumber] = useState<VerficationNumber>({
    "0": "",
    "1": "",
    "2": "",
    "3": "",
    "4": "",
    "5": "",
  });

  const verificationHandler = async () => {
    // setInvalidError(true);
    const verificationCode = Object.values(verifyNumber).join("");
    if (verificationCode.length !== 6) {
      setInvalidError(true);
      return;
    }

    await activation({
      activation_token: token,
      activation_code: verificationCode,
    });
  };

  const handleInputChange = (index: number, value: string) => {
    setInvalidError(false);
    const newVerifyNumber = { ...verifyNumber, [index]: value };
    setverifynumber(newVerifyNumber);

    // Check if the value is a number and auto going number box
    if (value === "" && index > 0) {
      inputRefs[index - 1].current?.focus();
    } else if (value.length === 1 && index < 5) {
      inputRefs[index + 1].current?.focus();
    }
  };

  return (
    <div className=" w-full flex items-center justify-center mt-32">
      <div className="w-full flex items-center justify-center flex-col">
        <h1 className=" text-4xl text-black   font-Poppins text-center py-2 font-bold">
          Verify Your Account
        </h1>
        <br />
        <div className="w-[80%] flex items-center justify-center mt-2">
          <div className="w-[80px] h-[80px] rounded-full bg-[#497DF2] flex items-center justify-center">
            <VscWorkspaceTrusted className="text-white text-4xl" />
          </div>
        </div>
        <br />
        <br />
        <div className="1100px:w-[70%] m-auto flex items-center justify-around">
          {Object.keys(verifyNumber).map((key, index) => (
            <input
              key={key}
              ref={inputRefs[index]}
              type="number"
              maxLength={1}
              value={verifyNumber[key as keyof VerficationNumber]}
              onChange={(e) => handleInputChange(index, e.target.value)}
              className={`w-[65px] h-[65px] bg-transparent border-[3px] rounded-[10px] flex-items-center text-black  justify-center text-[18px] font-Poppins outline-none text-center m-1 ${
                invalidError
                  ? "shake border-red-500"
                  : " dark: border-white border-[#0000004a]"
              }`}
            />
          ))}
        </div>
        <br />
        <br />
      

        <Button
          onClick={verificationHandler}
          title="Verify OTP"
          variant={"small"}
        />
      </div>
    </div>
  );
}
