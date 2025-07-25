import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useKeenSlider } from "keen-slider/react";
import "../../Components4/Testimonial/testimonials.css";
import "keen-slider/keen-slider.min.css";

const LatestBlog = () => {
  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 320px)": {
        slides: { perView: 1, spacing: 20 },
      },
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width:992px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
    loop: true,
    initial: 0,
  });
  return (
    <div className="dark:bg-normalBlack">
      <div className="bg-[url('/images/home-1/section-shape2.png')] bg-no-repeat bg-top bg-opacity-[0.07]">
        <section className="Container py-20 lg:py-[120px]">
          {/* Section Header */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className=" text-center mx-auto  px-5 sm:px-8 md:px-[80px] lg:px-[120px] xl:px-[200px] 2xl:px-[335px]"
          >
            {/* Section logo */}
            <div className="flex items-center justify-center space-x-2 mb-4  ">
              <hr className="w-[100px] h-[1px] text-[#dedbd4] dark:text-[#3b3b3b] " />
              <img
                src="/images/home-1/section-shape1.png"
                alt="room_section_logo"
                className="w-[50px] h-[50px]"
              />
              <hr className="w-[100px] h-[1px] text-[#dedbd4] dark:text-[#3b3b3b] " />
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl 2xl:text-[38px] leading-[44px] lg:leading-[52px] text-lightBlack dark:text-white  font-Garamond font-semibold uppercase mb-[8px]">
              Galerie photos
            </h1>
            {/* <p className="font-Lora leading-[26px] text-gray dark:text-lightGray font-normal text-sm sm:text-base">
              Proactively morph optimal infomediaries rather than accurate
              expertise. Intrinsicly progressive resources rather than
              resource-leveling
            </p> */}
          </div>
          {/* all blogs are here */}
          <div className="relative">
            <div className="mt-14 2xl:mt-[60px] keen-slider" ref={sliderRef}>
              {/* slide - 1 */}
              <div className="keen-slider__slide number-slide1 ">
                <div
                  className="overflow-hidden 3xl:w-[410px] group"
                  data-aos="fade-up-right"
                  data-aos-duration="1000"
                >
                  <div className="relative">
                    <img
                      src="/images/home-1/gal_1.JPG"
                      className="w-full object-cover h-[300px]"
                      alt=""
                    />
                  </div>
                  <div className="font-Garamond border border-[#e8e8e8] dark:border-[#424242] border-t-0">
                    <div className="  border-t-[1px] border-[#e8e8e8] dark:border-[#424242]  py-2 lg:py-3">
                      <Link
                        to={"/galerie"}
                        className="px-[30px] flex items-center justify-between "
                      >
                        <button className=" text-sm sm:text-base flex items-center ">
                          <span className="ml-[10px] leading-[38px] uppercase text-lightBlack dark:text-white font-medium group-hover:text-khaki hover:underline  underline-offset-1">
                            Voir Plus d'image de la gallerie
                          </span>
                        </button>
                        <div>
                          <BsArrowRight
                            className="text-gray dark:text-lightGray group-hover:text-khaki"
                            size={"24px"}
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* slide - 2 */}
              <div className="keen-slider__slide number-slide1 ">
                <div
                  className="overflow-hidden 3xl:w-[410px] group"
                  data-aos="fade-up-right"
                  data-aos-duration="1000"
                >
                  <div className="relative">
                    <img
                      src="/images/home-1/gal_2.png"
                      className="w-full object-cover h-[300px]"
                      alt=""
                    />
                  </div>
                  <div className="font-Garamond border border-[#e8e8e8] dark:border-[#424242] border-t-0">
                    <div className="  border-t-[1px] border-[#e8e8e8] dark:border-[#424242]  py-2 lg:py-3">
                      <Link
                        to={"/galerie"}
                        className="px-[30px] flex items-center justify-between "
                      >
                        <button className=" text-sm sm:text-base flex items-center ">
                          <span className="ml-[10px] leading-[38px] uppercase text-lightBlack dark:text-white font-medium group-hover:text-khaki hover:underline  underline-offset-1">
                            Voir Plus d'image de la gallerie
                          </span>
                        </button>
                        <div>
                          <BsArrowRight
                            className="text-gray dark:text-lightGray group-hover:text-khaki"
                            size={"24px"}
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* slide - 3 */}
              <div className="keen-slider__slide number-slide1 ">
                <div
                  className="overflow-hidden 3xl:w-[410px] group"
                  data-aos="fade-up-right"
                  data-aos-duration="1000"
                >
                  <div className="relative">
                    <img
                      src="/images/home-1/gal_3.png"
                      className="w-full object-cover h-[300px]"
                      alt=""
                    />
                  </div>
                  <div className="font-Garamond border border-[#e8e8e8] dark:border-[#424242] border-t-0">
                    <div className="  border-t-[1px] border-[#e8e8e8] dark:border-[#424242]  py-2 lg:py-3">
                      <Link
                        to={"/galerie"}
                        className="px-[30px] flex items-center justify-between "
                      >
                        <button className=" text-sm sm:text-base flex items-center ">
                          <span className="ml-[10px] leading-[38px] uppercase text-lightBlack dark:text-white font-medium group-hover:text-khaki hover:underline  underline-offset-1">
                            Voir Plus d'image de la gallerie
                          </span>
                        </button>
                        <div>
                          <BsArrowRight
                            className="text-gray dark:text-lightGray group-hover:text-khaki"
                            size={"24px"}
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LatestBlog;
