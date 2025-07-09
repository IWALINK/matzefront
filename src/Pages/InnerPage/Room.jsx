import { FaStar } from "react-icons/fa";
import BreadCrumb from "../../BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import { BsArrowRight, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { HiArrowLongRight } from "react-icons/hi2";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { IoIosCall } from "react-icons/io";
import { MdEmail, MdOutlineShareLocation } from "react-icons/md";
import Swal from "sweetalert2";
import { useState } from "react";
import FsLightbox from "fslightbox-react";

const Room = () => {
  // facilities slider breckpoints
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 400px)": {
        slides: { origin: "center", perView: 1 },
        spacing: 10,
      },
      "(min-width: 500px)": {
        slides: { origin: "center", perView: 1.5 },
        spacing: 10,
      },
      "(min-width: 600px)": {
        slides: { origin: "center", perView: 1 },
        spacing: 15,
      },
      "(min-width: 768px)": {
        slides: { origin: "center", perView: 1 },
        spacing: 18,
      },
      "(min-width: 992px)": {
        slides: { origin: "center", perView: 2 },
        spacing: 20,
      },
    },
    loop: true,
    initial: 0,
  });

  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  return (
    <section className="">
      <BreadCrumb title="Galerie" home={"/"} />

      {/* All rooms */}

      <div className="bg-whiteSmoke dark:bg-lightBlack py-20 2xl:py-[120px]">
        <div className="Container ">
          {/* section heading */}
          <div
            className=" text-center sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px]  mx-auto  px-5"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {/* Section Logo */}
            <div className="flex items-center justify-center space-x-2">
              <hr className="w-[100px] h-[1px] bg-lightGray dark:bg-gray text-lightGray dark:text-gray" />
              <img
                src="/images/inner/inner-logo.png"
                alt="room_section_logo"
                className="w-[50px] h-[50px]"
              />
              <hr className="w-[100px] h-[1px] bg-lightGray dark:bg-gray text-lightGray dark:text-gray" />
            </div>
            <h1 className="text-[22px] sm:text-2xl md:text-3xl 2xl:text-[38px] leading-7 sm:leading-8 md:leading-9 lg:leading-[42px] 2xl:leading-[52px] text-lightBlack dark:text-white mt-[30px] mb-[24px] font-Garamond font-semibold uppercase">
              Notre galerie d'images
            </h1>
          </div>
          {/* Rooms Slider Container */}

          <div className="mt-14 2xl:mt-[60px] grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-[30px]">
            {/* Images 1 à 17 */}
            {[...Array(17)].map((_, i) => (
              <div
                key={i}
                className="overflow-x-hidden 3xl:w-[410px] group cursor-pointer"
                data-aos="fade-up"
                data-aos-duration="1000"
                onClick={() => setLightboxController({ toggler: !lightboxController.toggler, slide: i + 1 })}
              >
                <div className="relative">
                  <div className="overflow-hidden">
                    <img
                      src={`/images/matze/${i + 1}.JPG`}
                      className="w-full h-64 object-cover group-group-hover:scale-110 transition-all duration-300"
                      alt={`Galerie ${i + 1}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox */}
          <FsLightbox
            toggler={lightboxController.toggler}
            sources={Array.from({ length: 17 }, (_, i) => `/images/matze/${i + 1}.JPG`)}
            slide={lightboxController.slide}
          />

        </div>
      </div>


    </section>
  );
};

export default Room;
