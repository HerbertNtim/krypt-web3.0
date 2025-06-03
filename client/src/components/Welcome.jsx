import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

const commonStyle =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Welcome = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col justify-between items-start md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            Send Crypto <br /> across the world
          </h1>
          <p className="font-light text-white text-base md:w-9/12 w-11/12 text-left mt-5">
            Explore the crypto world. Buy and Sell cryptocurrencies easily on
            Krypto.
          </p>

          <button className="flex flex-row justify-center items-center bg-[#2952e3] cursor-pointer hover:bg-[#2546bd] text-white my-5 py-2 px-4 rounded-md">
            Connect Wallet
          </button>

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`${commonStyle} rounded-tl-2xl`}>Reliability</div>
            <div className={`${commonStyle}`}>Security</div>
            <div className={`${commonStyle} rounded-tr-2xl`}>Ethereum</div>
            <div className={`${commonStyle} rounded-bl-2xl`}>Web 3.0</div>
            <div className={`${commonStyle}`}>Low Fees</div>
            <div className={`${commonStyle} rounded-br-2xl`}>Blockchain</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
