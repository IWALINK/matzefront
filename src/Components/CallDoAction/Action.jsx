import { BsPlay } from "react-icons/bs";
import { useState } from "react";
import FsLightbox from "fslightbox-react";
const Action = () => {
  const [toggler, setToggler] = useState(false);
  return (
    <div className="dark:bg-mediumBlack dark:z-[-1]">
      <section className="Container mt-[-90px] dark:z-[1]">
        <div className=" w-full grid grid-cols-1 lg:grid-cols-2 items-center ">
          <div
            className="bg-[#f8f6f3] dark:bg-normalBlack space-y-[14px] flex-1 font-Garamond px-5 sm:px-7 md:px-9 lg:pl-[70px] py-10 md:py-[96px] lg:pr-[70px]"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h5 className="text-base text-khaki leading-[26px] font-semibold">
              CHEF
            </h5>
            <h1 className="text-[22px] sm:text-2xl md:text-[28px] xl:text-[32px] 2xl:text-[38px] leading-[38px] lg:leading-[44px] text-lightBlack dark:text-white font-semibold">
              La Matze - Cuisine de marché et spécialités traditionnelles
            </h1>
            <p className="text-sm sm:text-base font-Lora text-gray dark:text-lightGray font-normal leading-[26px]">
              Le chef, Luis Noeme, vous propose une cuisine de marché des quatre saisons, sans oublier les spécialités: la charbonnade,
              les fondues, la raclette, la fameuse entrecôte Matze ainsi qu'une variété de mets de viandes,
              de pâtes ou encore la chasse en saison.
            </p>
            <p className="text-sm sm:text-base font-Lora italic leading-[26px]   text-gray dark:text-lightGray font-normal ">
              Pour vos sorties entre amis, la célébration de vos anniversaires ou vos sorties d'entreprise, le restaurant dispose d'une salle entièrement privée de 32 places.
              Bien servir, c'est notre passion!
            </p>
            <div className="flex items-center space-x-6 pt-5">
              <img
                src="/images/home-1/chef.png"
                className="w-[65px] h-[65px] object-cover rounded-lg"
                alt=""
              />

              <div className="">
                <h4 className="text-lg sm:text-[22px] leading-[26px] text-lightBlack dark:text-white font-semibold font-Garamond">
                  Luis Noeme
                </h4>
                <p className="pt-1 text-base leading-[26px] font-normal text-gray dark:text-lightGray flex items-center font-Lora">
                  <span className="w-5 h-[1px] inline-block text-khaki bg-khaki mr-2"></span>
                  Chef cuisinier
                </p>
              </div>
            </div>
          </div>
          <div
            className="flex-1 h-[100%] w-full relative "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src="/images/home-1/chef.png"
              className="h-full w-full md:h-[80%] lg:h-full 2xl:h-[99%] rounded-lg object-cover"
              alt=""
            />

            {/* <div
              className="w-[70px] h-[70px]  text-white absolute top-1/2 md:top-[35%] lg:top-1/2 left-[45%] bg-khaki rounded-full flex items-center justify-center cursor-pointer z-[1] "
              onClick={() => setToggler(!toggler)}
            >
              <BsPlay className="w-8 h-8" />
            </div>
            <span className=" top-[47%] md:top-[33%] lg:top-[48%] left-[42%] lg:left-[43.5%] border w-[90px] h-[90px] rounded-full absolute border-white video-animation"></span> */}
          </div>
          {/* <FsLightbox
            toggler={toggler}
            sources={["https://youtu.be/fFDyoI73viQ?si=GbDzAagjoa_0Nv2x"]}
          /> */}
        </div>
      </section>
    </div>
  );
};

export default Action;
