import React from "react";

import { poppins } from "../utils/fonts";

type FormInputProps = {
  role: string
  input: string
  setInput: React.Dispatch<React.SetStateAction<string>>
};

const FormInput = (props: FormInputProps) => {
  const { role, input, setInput } = props;

  return (
    <>
      <label htmlFor={`${role}`} className={`
        ${poppins.className}
        w-fit
        text-[calc(100vw*(34/750))]
        mx-[calc(100vw*(8/750))]

        md:text-[18px]
        md:mx-[8px]
      `}>{`${role.charAt(0).toUpperCase() + role.slice(1)}`}</label>
      <input
        className="
          bg-[#e3e3e3]
          rounded-[calc(100vw*(24/750))]
          border-[1px]
          border-black
          placeholder-[#5b5b5b]
          w-[100%]
          mt-[calc(100vw*(10/750))]
          px-[calc(100vw*(20/750))]
          py-[calc(100vw*(16/750))]

          md:rounded-[15px]
          md:mt-[6px]
          md:px-[10px]
          md:py-[15px]
        "
        type="text"
        name={`${role}`}
        placeholder={`Enter your ${role}`}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
};

export default FormInput;
