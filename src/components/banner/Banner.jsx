import banner from "../../app/assets/home/shanto-vsi2.png";
// import Link from "next/link";
import "./Banner.css";
import pdf from "../../pdf/Shakil_Alam_SQA_3_Years.pdf (4).pdf";
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
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
export const Banner = () => {
  return (
    <>
      <div
        id="home"
        className=" banner px-4 md:flex items-center justify-between"
      >
        {/* ------------------- banner container ---------------- */}
        <div className="  items-center pt-[150px]">
          <h1>lorem</h1>
          <div className=" maxWidth mx-auto block px-3 ">
            {/* ---------socail-icon ---------- */}
            <div className="social-icon flex flex-wrap gap-3">
              <a href="https://www.facebook.com/" className="mr-3">
                <i className="text-[25px] text-[#fff]  hover:text-green-500 transition-all duration-500 ">
                  <FaFacebook />
                </i>
              </a>
              <a
                href="https://www.linkedin.com/in/md-shakil-alam-seu?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="mr-3"
              >
                <i className="text-[25px] text-[#fff]  hover:text-green-500 transition-all duration-500">
                  <FaLinkedin />
                </i>
              </a>
              <a href="https://x.com/home" className="mr-3">
                <i className="text-[25px] text-[#fff] hover:text-green-500 transition-all duration-500">
                  <FaXTwitter />
                </i>
              </a>
              <a href="https://github.com/Shakil-Alam76" className="mr-3">
                <i className="text-[25px] text-[#fff] hover:text-green-500 transition-all duration-500">
                  <FaGithub />
                </i>
              </a>
              <a href="https://leetcode.com/u/shantoseu/" className="mr-3">
                <i className="text-[25px] text-[#fff]  hover:text-green-500 transition-all duration-500">
                  <SiLeetcode />
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
              <a
                href={pdf}
                download="Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-warning my-3 p-4 border border-x-slate-400"
              >
                Download Resume
              </a>
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
          <Image
            className="md:w-[600px]  -mt-10 object-cover"
            src={banner}
            alt=""
          />
        </div>
      </div>
    </>
  );
};
