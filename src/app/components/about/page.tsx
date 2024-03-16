import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <>
      <hr className="border-t-1 sm:mt-80 mt-60" />
      <div className=" mx-auto text-center text-2xl mt-10">
        <div className="mx-auto flex justify-center">
          <div className="card w-[450px] bg-base-200 shadow-xl flex justify-center">
            <div className="card-body">
              <h2 className="card-title flex justify-center">
                <a></a>ABOUT ME
              </h2>
              <p className="text-base text-justify ">
                <br />
                Web-developer base on medan, Indonenesia. I was graduate from
                diploma majoring in telecomunication and air navigation
                engineering from aviation and safety academy medan with GPA
                3.31. I have web-developers skills when i was join purwadhika
                technology school on February 2024.
              </p>
            </div>
            <div>
              <figure>
                <Image
                  src="/teach.png"
                  alt="about.jpg"
                  width={100}
                  height={100}
                ></Image>
              </figure>
            </div>
          </div>
        </div>
      </div>

      <hr className="mt-10  border-t-1" />
    </>
  );
};

export default About;
