import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Jumbotron = () => {
  return (
    <>
      <div>
        <div className="h-16 sm:h-20  bg-slate-800 absolute sm:top-[450px] bg-opacity-80 mx-5 rounded-md  sm:mt-1 mt-56 ">
          <div className="flex justify-center ">
            <p className="text-md font-semibold py-5 pl-2 size">Skills:</p>

            <Marquee
              direction="right"
              autoFill={true}
              pauseOnHover={true}
              gradientWidth={500}
            >
              <Image
                src="/contentful.png"
                alt="contentful.png"
                height={30}
                width={30}
              ></Image>
              <Image
                src="/github.png"
                alt="github.png"
                height={30}
                width={30}
              ></Image>
              <Image
                src="/docker.png"
                alt="docker.png"
                height={30}
                width={30}
              ></Image>
              <Image
                src="/typescript.png"
                alt="typescript.png"
                height={30}
                width={30}
              ></Image>
              <Image
                src="/redis.png"
                alt="redis.png"
                height={30}
                width={30}
              ></Image>
              <Image
                src="/tailwind.png"
                alt="tailwind.png"
                height={30}
                width={30}
              ></Image>
              <Image
                src="/redux.png"
                alt="redux.png"
                height={30}
                width={30}
              ></Image>
              <Image
                src="/prisma.png"
                alt="prisma.png"
                height={30}
                width={30}
              ></Image>
              <Image
                src="/mysql.png"
                alt="mysql.png"
                height={30}
                width={30}
              ></Image>
              <Image
                src="/next.js.png"
                alt="nextjs.png"
                height={30}
                width={30}
              ></Image>
              <Image
                src="/react.png"
                alt="react.png"
                height={30}
                width={30}
              ></Image>
              <Image
                src="/javascript.png"
                alt="javascript.png"
                height={30}
                width={30}
              ></Image>
              <Image
                src="/css.png"
                alt="css.png"
                height={30}
                width={30}
              ></Image>
              <Image
                src="/html.png"
                alt="html.png"
                height={30}
                width={30}
              ></Image>
            </Marquee>
          </div>
        </div>
      </div>

      <div className="flex sm:justify-evenly sm:my-14 sm:mx-5 md:mx-5 lg:mx-5 xl:mx-5">
        <div className="sm:mr-96 ml-5">
          <p className="absolute top-32 font-bold text-2xl md:mt-10 mb-1  ">
            Hai, I'm Abdul Faishal Simatupang
          </p>
          <br />
          <p className="absolute top-40 md:font-medium md:text-xl md:mt-16 mt-10 ">
            FULL STACK WEB DEVELOPER
          </p>
          <br />
          <div className=" md:ring-0 ring-2 ring-amber-800 hover:ring-stone-500 ">
            <p className="flex sm:font-semibold font-light md:text-base text-xs sm:mt-14 mt-20 ">
              <Image
                src="/mails.png"
                alt="mail.png"
                width={30}
                height={30}
              ></Image>{" "}
              abdulfaishal111@gmail.com
            </p>
            <p className="flex sm:font-semibold font-light md:text-base text-xs ">
              <Image
                src="/hp.png"
                alt="phone.png"
                width={30}
                height={30}
              ></Image>{" "}
              (+62) 82294922252
            </p>
            <p className="flex sm:font-semibold font-light md:text-base text-xs ">
              <Image
                src="/locations.png"
                alt="location.png"
                width={30}
                height={30}
              ></Image>{" "}
              Jalan Mapilindo No.41c Medan
            </p>
          </div>
        </div>

        <div className="sm:ml-20 lg:ml-20 ">
          <Image
            src="/foto.jpeg"
            alt="myphoto.jpg"
            height={100}
            width={100}
            quality={100}
            useMap="#profile"
            className="rounded-full md:relative md:w-[140px] md:h-[140px] w-10 h-10 absolute   top-3 right-1"
          ></Image>
          <map name="profile">
            <area
              target="_blank"
              coords="0,0,82,126"
              href="/foto.jpeg"
              alt="foto"
            />
          </map>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
