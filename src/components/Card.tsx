import React from "react";

interface CardProps {
  mode: "light" | "dark";
  cardNumber: string;
  amount: string;
  cardName: string;
  expiryDate: string;
}

const Card: React.FC<CardProps> = ({
  mode,
  amount,
  cardNumber,
  expiryDate,
  cardName,
}) => {
  const isDarkMode = mode === "dark";

  return (
    <div
      className={`flex justify-between flex-col 3xl:min-w-[350px] 2xl:min-w-[350px] 3xl:w-full 2xl:w-full md:w-full md:min-w-[300px] 3xl:h-[235px] 2xl:h-[235px] min-w-[265px] h-[170px] xl:h-[220px] lg:h-[200px] border border-gray-200 ${
        isDarkMode ? "bg-card-gradient" : "bg-white"
      } items-center rounded-[25px]`}
    >
      <div className="flex items-center justify-between w-full 3xl:pt-6 2xl:pt-6 pt-5 3xl:px-6 2xl:px-6 px-5">
        <div className="flex flex-col">
          <p
            className={`font-normal 3xl:text-[12px] 2xl:text-[12px] text-[11px] font-lato ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Balance
          </p>
          <p
            className={`font-lato 3xl:text-[20px] 2xl:text-[20px] text-[1rem] 3xl:leading-6 2xl:leading-6 ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            {amount}
            {/* $5,756 */}
          </p>
        </div>
        <img
          src={isDarkMode ? "/Chip_Card.png" : "/Chip-Card-Light.png"}
          alt="Chip Card"
          className="3xl:w-[35px] 2xl:w-[35px] 3xl:h-[35px] 2xl:h-[35px] w-[29px] h-[29px]"
        />
      </div>

      <div className="w-full flex items-center 3xl:px-6 2xl:px-6 px-5 3xl:space-x-12 2xl:space-x-12 space-x-10">
        <div className="flex flex-col">
          <p
            className={`3xl:text-[12px] 2xl:text-[12px] text-[10px] ${
              isDarkMode ? "text-[#FFFFFFB2]" : "text-gray-500"
            }`}
          >
            CARD HOLDER
          </p>
          <p
            className={`3xl:text-[15px] 2xl:text-[15px] text-[13px] ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            {cardName}
            {/* Eddy Cusuma */}
          </p>
        </div>
        <div className="flex flex-col">
          <p
            className={`3xl:text-[12px] 2xl:text-[12px] text-[10px] ${
              isDarkMode ? "text-[#FFFFFFB2]" : "text-gray-500"
            }`}
          >
            VALID THRU
          </p>
          <p
            className={`3xl:text-[15px] 2xl:text-[15px] text-[13px] ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            {expiryDate}
            {/* 12/22 */}
          </p>
        </div>
      </div>

      <div
        className={`w-full rounded-b-[25px] px-5 3xl:px-6 2xl:px-6 3xl:h-[70px] 2xl:h-[70px] h-[51px] flex justify-between items-center ${
          isDarkMode ? "bg-white-to-transparent" : "bg-gray-100"
        }`}
      >
        <h3
          className={`font-semibold 3xl:text-[22px] 2xl:text-[22px] text-[15px] ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          {cardNumber}
          {/* 3778 **** **** 1234 */}
        </h3>
        <img
          src={isDarkMode ? "/mastercard-dark.png" : "/mastercard-light.png"}
          alt="Mastercard Logo"
          className="3xl:w-[44px] 2xl:w-[44px] 3xl:h-[30px] 2xl:h-[30px] w-[27px] h-[18px]"
        />
      </div>
    </div>
  );
};

export default Card;
