import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact,FaNodeJs } from "react-icons/fa";
import {  SiExpress ,SiMongodb, } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
            <a href='/'><FaFacebookF /></a>
            </span>
            <span className="bannerIcon">
            <a href='/'><FaTwitter /></a>
            </span>
            <span className="bannerIcon">
            <a href='/'><FaLinkedinIn /></a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
            <SiMongodb />
            </span>
            <span className="bannerIcon">
            <FaNodeJs />
            </span>
            <span className="bannerIcon">
            <SiExpress />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media