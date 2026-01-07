import React from "react";
import Image from "next/image";

interface SubmitButtonProps {
  loading: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ loading }) => {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-[80vw] max-w-[350px] py-4 px-0 rounded-[30px] border border-accentColor bg-accentColor text-lg text-white hover:opacity-70 flex items-center justify-center font-semibold"
    >
      {loading ? "送信中..." : "送信する"}
    </button>
  );
};

export default SubmitButton;
