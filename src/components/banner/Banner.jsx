import banner from "../../app/assets/home/shanto-vsi2.png";
// import Link from "next/link";
import "./Banner.css";
import TextChangeAnimation from "./TextChangeAnimation";
import { FaArrowDown, FaCaretDown } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
export const Banner = () => {
  return (
    <>
      <div className="  banner px-4 md:flex items-center justify-between">
        {/* ------------------- banner container ---------------- */}
        <div className="  items-center pt-[150px]">
          <div className=" maxWidth mx-auto block px-3 ">
            {/* ---------socail-icon ---------- */}
            <div className="social-icon flex flex-wrap gap-3">
              <a href="/" className="mr-3">
                <i className="text-[25px] text-[#fff]  hover:text-green-500 transition-all duration-500 ">
                  <FaFacebook />
                </i>
              </a>
              <a href="#" className="mr-3">
                <i className="text-[25px] text-[#fff]  hover:text-green-500 transition-all duration-500">
                  <FaLinkedin />
                </i>
              </a>
              <a href="#" className="mr-3">
                <i className="text-[25px] text-[#fff] hover:text-green-500 transition-all duration-500">
                  <FaTwitter />
                </i>
              </a>
              <a href="#" className="mr-3">
                <i className="text-[25px] text-[#fff] hover:text-green-500 transition-all duration-500">
                  <FaGithub />
                </i>
              </a>
              <a href="#" className="mr-3">
                <i className="text-[25px] text-[#fff]  hover:text-green-500 transition-all duration-500">
                  <FaEnvelope />
                </i>
              </a>
            </div>
            {/* ---------- heading text animation---------- */}
            <div className="banner-heading-text mt-[45px]">
              <a href="https://git.io/typing-svg">
                <img
                  src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=43&pause=1000&width=438&height=70&lines=I'm++Shakil+Alam+;My+Services+-"
                  alt="Typing SVG"
                />
              </a>
            </div>

            {/* ------------- animation text box ---------- */}
            <div className="animation-box block w-[100%] mt-[0px]">
              <FaCaretDown className="down-content-out-box flex relative top-[126px] text-[#fff] left-[20px] text-[35px]" />
              <TextChangeAnimation />
            </div>
            <div className=" mt-10">
              <button className="bg-[#F26C4F] p-3 px-6 text-xl text-white">
                Download CV
              </button>
            </div>

            {/* ------------------------ Banner button  -------------- */}
            <div className=" banner-Button flex justify-start  md:mt-[80px]">
              <Link
                href={"#services"}
                className="btn-epic justify-center items-center "
              >
                <div className="hover:border-b-2 border-[#F26C4F]">
                  <span className="flex justify-center items-center ">
                    <FaArrowDown className="text-[#fff] text-[25px] font-[500]" />
                  </span>
                  <span className="flex justify-center items-center ">
                    <FaArrowDown className="text-[#fff] text-[25px] font-[500]" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <Image className="w-[600px] h-[600px] -mt-10" src={banner} alt="" />
        </div>
      </div>
    </>
  );
};
