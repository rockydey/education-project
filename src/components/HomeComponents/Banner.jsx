import styles from "./Banner.module.css";
import { TiMediaPlay } from "react-icons/ti";

const Banner = () => {
  return (
    <div className={`${styles.header_bg}`}>
      <div className="hidden lg:flex items-center lg:h-[80vh] inset-0 bg-gradient-to-r from-[#0055A4] to-transparent">
        <div className="lg:w-[70%] oxanium text-white uppercase space-y-5 pl-5">
          <h3 className={`${styles.text_shadow} text-[25px] font-medium`}>
            Saic Polytechnic Institute
          </h3>
          <h2 className={`${styles.text_shadow} text-4xl font-extrabold`}>
            Best Polytechnic Institute In Dhaka
          </h2>
          <h3
            className={`${styles.text_shadow} hidden lg:block hind-siliguri text-[25px] font-semibold`}
          >
            তৈরি করবো প্রকৌশলী দক্ষ, মান সম্মত কর্মসংস্থান আমাদের লক্ষ্য।
          </h3>
          <div className="space-x-5">
            <button className="px-[30px] py-5 rounded-[5px] text-xl font-semibold uppercase text-[#312783] bg-white">
              Online Campus
            </button>
            <button className="px-[30px] py-5 rounded-[5px] text-xl font-semibold uppercase text-[#312783] bg-white">
              Virtual Campus
            </button>
          </div>
        </div>
        <div className="lg:w-[30%] hidden lg:flex justify-center">
          <div className="text-2xl text-[#FF0000] bg-[#ffffff8c] p-7 rounded-full cursor-pointer">
            <TiMediaPlay />
          </div>
        </div>
      </div>
      <div className="lg:hidden h-[180px] w-full inset-0 bg-gradient-to-t from-[#0055A4] to-transparent flex flex-col items-center justify-end uppercase text-white gap-1">
        <h3 className={`${styles.text_shadow} text-lg font-medium m-0`}>
          Welcome to
        </h3>
        <h3 className={`${styles.text_shadow} text-lg font-medium m-0`}>
          Saic Polytechnic Institute
        </h3>
        <div className="space-x-[10px] pb-3">
          <button className="px-3 py-2 rounded-[5px] text-[13px] font-semibold uppercase text-[#312783] bg-white">
            Online Campus
          </button>
          <button className="px-3 py-2 rounded-[5px] text-[13px] font-semibold uppercase text-[#312783] bg-white">
            Virtual Campus
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;