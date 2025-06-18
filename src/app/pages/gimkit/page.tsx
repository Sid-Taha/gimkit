import { Outfit, Roboto, Inter  } from "next/font/google";
import Image from "next/image";

const font = Roboto({ subsets: ["latin"] });
const inter = Inter({subsets: ["latin"], weight: ["500"], variable: "--font-inter"});

const Page = () => {

  return (
    <div className="relative bg-[url('/imagePattern.png')] bg-repeat min-h-screen">
      <div className="absolute inset-0 bg-[#000003] opacity-70 z-0" />

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="h-[343.636px] w-[520px] bg-[#ffffff] shadow-lg rounded-[7px] px-5 pt-[7px]">
          <div className="h-[90px] w-full border-b-[1px] border-gray-100 flex items-center px-4">
            <Image
              src="/svgLogo.svg"
              alt="gimkit"
              height={42}
              width={168.812}
              className="mx-auto"
            />
          </div>

          <button className="h-[43px] w-[202px] flex items-center gap-[12px] mx-auto border-[1px] border-[#d9d9d9] rounded-[6px] shadow-lg shadow-[rgba(0,0,0,0.02)] mt-[24px] transition duration-300 hover:bg-gray-100 hover:border-gray-300">
            <Image
              src="https://www.gimkit.com/client/img/signup/google.svg"
              alt="Google icon"
              height={18}
              width={18}
              className="mt-[1px] ml-[20px]"
            />
            <p className={`${inter.className} text-[13px] mt-[1px] -tracking-[0.2px] text-black`}>
              Continue with Google
            </p>
          </button>

          <div className="flex items-center justify-center mt-[19px] mb-5">
            <span className="border-[1px] border-gray-100 w-1/2"></span>
            <p className={`font-sans text-[16px] font-semibold mx-3 -mt-[4px] -tracking-[0.5px] text-black`}>or</p>
            <span className="border-[1px] border-gray-100 w-1/2"></span>
          </div>

          <div>
            <h1
              style={{ fontWeight: 800 }} 
              className={`${font.className} text-[18px] text-black -mt-[1px]`}
            >
              Continue with email...
            </h1>
            <input
              type="email"
              placeholder="Email address..."
              className="h-[40px] w-[480px] text-[15px] px-[11px] rounded-lg focus:outline-none border-[1px] -mt-[2px] hover:border-[#1677ff] focus:shadow-sm focus:shadow-[#1677ff] focus:border-[#1677ff]"
            />
          </div>

          <button
            className={`
              h-[32px] w-[480px] text-center rounded-[7PX] text-gray-400 text-[13px] mt-[5px] transition border-[1px] border-[#d9d9d9]  bg-[#F5F5F5] shadow-lg shadow-[rgba(0,0,0,0.02)]
            `}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
