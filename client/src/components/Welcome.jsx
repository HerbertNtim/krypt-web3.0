import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import Loader from "./Loader";

const commonStyle =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="white-glassmorphism my-2 w-full rounded-sm border-none bg-transparent p-2 text-sm text-white outline-none"
  />
);

const Welcome = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex flex-col items-start justify-between px-4 py-12 lg:flex-row md:p-20">
        <div className="flex flex-1 flex-col items-start justify-start md:mr-10">
          <h1 className="text-gradient py-1 text-3xl text-white sm:text-5xl">
            Send Crypto <br /> across the world
          </h1>
          <p className="mt-5 w-11/12 text-left text-base font-light text-white md:w-9/12">
            Explore the crypto world. Buy and Sell cryptocurrencies easily on
            Krypto.
          </p>

          <button className="my-5 flex cursor-pointer flex-row items-center justify-center rounded-md bg-[#2952e3] px-4 py-2 hover:bg-[#2546bd]">
            <AiFillPlayCircle className="mr-2 text-white" />
            <span className="text-base font-semibold text-white">
              Connect Wallet
            </span>
          </button>

          <div className="mt-10 grid w-full grid-cols-2 sm:grid-cols-3">
            <div className={`${commonStyle} rounded-tl-2xl`}>Reliability</div>
            <div className={`${commonStyle}`}>Security</div>
            <div className={`${commonStyle} rounded-tr-2xl`}>Ethereum</div>
            <div className={`${commonStyle} rounded-bl-2xl`}>Web 3.0</div>
            <div className={`${commonStyle}`}>Low Fees</div>
            <div className={`${commonStyle} rounded-br-2xl`}>Blockchain</div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="mt-10 flex w-full flex-1 flex-col items-center justify-start md:mt-0">
          <div className="eth-card white-glassmorphism my-5 flex h-40 w-full flex-col items-start justify-end rounded-xl p-3 sm:w-72">
            <div className="flex h-full w-full flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>

              <div>
                <p className="text-sm font-light text-white">Address</p>
                <p className="text-sm font-semibold text-white">Ethereum</p>
              </div>
            </div>
          </div>
          <div className="blue-glassmorphism flex w-full flex-col items-center justify-start p-5 sm:w-96">
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={() => {}}
            />
            <Input
              placeholder="Amount (ETH)"
              name="amount"
              type="number"
              handleChange={() => {}}
            />
            <Input
              placeholder="Keyword (Gif)"
              name="keyword"
              type="text"
              handleChange={() => {}}
            />
            <Input
              placeholder="Enter Message"
              name="message"
              type="text"
              handleChange={() => {}}
            />

            <div className="my-2 h-[1px] w-full bg-gray-400" />

            {false ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={() => {}}
                className="mt-2 w-full cursor-pointer rounded-full border-[1px] border-[#3d4f7c] p-2 text-white hover:bg-[#3d4f7c]"
              >
                Send now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
