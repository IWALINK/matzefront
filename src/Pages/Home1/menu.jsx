import { useEffect, useState } from "react";

const Menu = () => {
    const [menu, setMenu] = useState([]);
    const [showItem, setShowItem] = useState([]);
    const [activeCategory, setActiveCategory] = useState("Spécialités de saison");

    useEffect(() => {
        fetch("/food.menu.json")
            .then((res) => res.json())
            .then((data) => {
                setMenu(data);
                // Afficher uniquement la première catégorie au chargement
                const firstCategory = "Spécialités de saison";
                const filtered = data.filter(item => item.category === firstCategory);
                setShowItem(filtered);
            });
    }, []);

    // Liste des catégories dans l'ordre d'affichage
    const categories = [
        "Spécialités de saison",
        "Salades et mets froids",
        "Pâtes",
        "Soupes",
        "Poissons",
        "Viandes",
        "Pizzas"
    ];

    return (
        <>
            {/* RESTAURANT FOOD MENU */}
            <div id="carte" className="bg-whiteSmoke dark:bg-lightBlack py-20 2xl:py-[120px] ">
                <div className="Container">
                    {/* food menu tab header */}
                    <div
                        className="text-center"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        {/* Section logo */}
                        <div className="flex items-center justify-center space-x-2">
                            <hr className="w-[100px] h-[1px] bg-lightGray dark:bg-gray text-lightGray dark:text-gray" />
                            <img
                                src="/images/inner/inner-logo.png"
                                alt="room_section_logo"
                                className="w-[50px] h-[50px]"
                            />
                            <hr className="w-[100px] h-[1px] bg-lightGray dark:bg-gray text-lightGray dark:text-gray" />
                        </div>
                        <h1 className="text-xl sm:text-2xl md:text-3xl 2xl:text-[38px] leading-[42px] 2xl:leading-[52px] text-lightBlack dark:text-white mt-[10px] mb-[14px] font-Garamond font-semibold uppercase">
                            CARTE DU RESTAURANT
                        </h1>
                    </div>
                    {/* food menu tab  */}
                    <div className="mt-14 2xl:mt-[60px]">
                        {/* Tab Control Button */}
                        <div
                            className="grid grid-cols-2 sm:grid-cols-4 sm:flex items-center justify-center gap-3"
                            data-aos="zoom-in-up"
                            data-aos-duration="1000"
                        >
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    className={`px-5 lg:px-[26px] py-2 lg:py-[10px] rounded text-sm sm:text-[15px] font-Garamond font-medium leading-7 lg:leading-[38px] focus:bg-khaki focus:text-white dark:focus:bg-khaki dark:focus:text-white hover:ring-2 ring-khaki ring-offset-2 dark:ring-offset-lightBlack ${activeCategory === cat
                                            ? "bg-khaki text-white"
                                            : "bg-white dark:bg-normalBlack text-lightBlack dark:text-white"
                                        }`}
                                    onClick={() => {
                                        setActiveCategory(cat);
                                        let items = menu.filter(
                                            (element) => element.category === cat
                                        );
                                        setShowItem(items);
                                    }}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        {/* Tab Items. */}
                        <div
                            className="grid items-center justify-between grid-cols-1 lg:grid-cols-2 gap-5 2xl:gap-[30px] mt-5 md:mt-7 lg:mt-10 xl:mt-[45px]"
                            data-aos="zoom-in-up"
                            data-aos-duration="1000"
                        >
                            {showItem.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="flex flex-col sm:flex-row items-center bg-white dark:bg-normalBlack pl-5 py-5 hover:shadow-custom"
                                    >
                                        {/* <img
                                            src={item.image}
                                            alt="food image"
                                            className="w-[100px] h-[100px] sm:w-fit sm:h-fit rounded-2xl sm:rounded-none mb-5 sm:mb-0 "
                                        /> */}
                                        <div className="px-5 md:px-6 2xl:px-[30px]">
                                            <div className="flex items-center justify-between pb-4">
                                                <h4 className="text-lg sm:text-xl xl:text-2xl 2xl:text-[26px] leading-[26px] md:leading-7 lg:leading-8 xl:leading-[34px] 2xl:leading-[38px] text-lightBlack dark:text-white font-Garamond font-medium">
                                                    {item.title}
                                                </h4>
                                                <h4 className="text-lg sm:text-xl md:text-2xl leading-[26px] md:leading-7 lg:leading-8 xl:leading-[34px] 2xl:leading-[38px] text-khaki font-Garamond font-medium">
                                                    CHF {item.price}
                                                </h4>
                                            </div>
                                            {/* bottom Border  */}
                                            <div className="border-t-[1px] border-dashed border-lightGray dark:border-gray pb-4"></div>
                                            <p className="text-gray dark:text-lightGray leading-6 font-normal font-Lora text-sm md:text-[15px]">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Menu