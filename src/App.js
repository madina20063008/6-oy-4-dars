
import React, { createContext, useContext, useState, useEffect } from "react";
import burgerImage from "./Assets/burger.png";
import logo from "./Assets/logo.png";
import two from "./Assets/2.png";
import line from "./Assets/line.png";
import sectionBG from "./Assets/text.png";
const parts = ["Гамбургеры", "Хот Доги", "Пицца", "Напитки", "Соки"];


const LanguageContext = createContext();
const ThemeContext = createContext();

const translations = {
  uz: {
    cart: "Savatcha",
    menu: "Menyu",
    about: "Biz haqimizda",
    contact: "Kontakt",
    bigBurger: "Katta Gamburger",
    beef: "Mol go‘shti",
    description:
      "Yangi xushbo‘y bulochka, salat barglari, tuzlangan bodring piyoz bilan va mayonez hamda ketchup surtilgan kichik kotlet – bu AQShning eng keng tarqalgan ‘tez ovqatlanish’ taomi bo‘lib, har kuni minglab odamlar kasalxonaga tushishiga sabab bo‘ladi.",
    price: "14 500",
    langButton: "RU",
  },
  ru: {
    cart: "Корзина",
    menu: "Меню",
    about: "О нас",
    contact: "Контакты",
    bigBurger: "БОЛЬШОЙ ГАМБУРГЕР",
    beef: "говядина",
    description:
      "Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом, - таков классический портрет гамбургера, наиболее распространенной «быстрой» еды в США, от отравления которой ежедневно на больничных койках оказываются десятки тысяч американцев.",
    price: "14 500",
    langButton: "UZ",
  },
};

export const ContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("uz");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
export const useTheme = () => useContext(ThemeContext);

function App() {
  const { language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
 
       <div className={theme}>
      {/* HEADER */}
      {/* <header
        className="relative w-full h-screen bg-black bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${burgerImage})` }}
      >
        <div className="w-[1200px] mx-auto">
          <nav className="relative z-10 flex justify-between items-center px-10 py-6">
            <div>
              <img src={logo} alt="Logo" />
            </div>
            <ul className="flex space-x-6 text-[#4E9F0D] text-lg">
              {["cart", "menu", "about", "contact"].map((key, index) => (
                <li
                  key={index}
                  className="cursor-pointer hover:text-white hover:bg-[#4E9F0D] p-[15px] transition flex items-center group"
                >
                  {translations[language][key]}
                  <img
                    className="hidden group-hover:inline-block w-6 ml-2"
                    src={two}
                    alt="Icon"
                  />
                </li>
              ))}
            </ul>
            <button
              onClick={() => setLanguage(language === "uz" ? "ru" : "uz")}
              className="text-white bg-[#4E9F0D] px-4 py-2 rounded"
            >
              {language.toUpperCase()}
            </button>
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="text-white bg-[#4E9F0D] px-4 py-2 rounded ml-4"
            >
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
          </nav>
          <div className="relative z-10 flex flex-col justify-center px-10 mt-24">
            <h1 className="text-6xl font-extrabold leading-tight uppercase text-[#4E9F0D]">
              БОЛЬШОЙ ГАМБУРГЕР
            </h1>
            <h2 className="text-2xl mt-2 text-[#4E9F0D]">говядина</h2>
            <p className="mt-4 leading-relaxed w-[1050px]">
              Свежая хрустящая булочка, листики салата, маринованный огурец с луком и небольшая котлета, сдобренная майонезом и кетчупом, - таков классический портрет гамбургера, наиболее распространенной «быстрой» еды в США, от отравления которой ежедневно на больничных койках оказываются десятки тысяч американцев
            </p>
            <div className="bg-[#4E9F0D] mt-[52px] text-white text-[50px] font-thin w-[280px] h-[80px] flex items-center justify-center">
              14 500
            </div>
          </div>
        </div>
      </header> */}
      <header
      className={`relative w-full h-screen bg-cover bg-center text-white transition-all duration-300 ${
        theme === "dark" ? "bg-gray-900" : "bg-black"
      }`}
      style={{ backgroundImage: `url(${burgerImage})` }}
    >
      <div className="w-[1200px] mx-auto">
        {/* Navigation Bar */}
        <nav className="relative z-10 flex justify-between items-center px-10 py-6">
          <div>
            <img src={logo} alt="Logo" />
          </div>
          {/* Navigation Menu */}
          <ul className="flex space-x-6 text-[#4E9F0D] text-lg">
            {["cart", "menu", "about", "contact"].map((key, index) => (
              <li
                key={index}
                className="cursor-pointer hover:text-white hover:bg-[#4E9F0D] p-[15px] transition flex items-center group"
              >
                {translations[language][key]}
                <img className="hidden group-hover:inline-block w-6 ml-2" src={two} alt="Icon" />
              </li>
            ))}
          </ul>
          <div className="flex space-x-4">
            {/* Language Toggle Button */}
            <button
              onClick={() => setLanguage(language === "uz" ? "ru" : "uz")}
              className="text-white bg-[#4E9F0D] px-4 py-2 rounded"
            >
              {translations[language].langButton}
            </button>
            {/* Dark Mode Toggle Button */}
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="text-white bg-[#4E9F0D] px-4 py-2 rounded ml-4"
            >
              {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="relative z-10 flex flex-col justify-center px-10 mt-24">
          {/* Dynamic Heading & Text */}
          <h1 className="text-6xl font-extrabold leading-tight uppercase text-[#4E9F0D]">
            {translations[language].bigBurger}
          </h1>
          <h2 className="text-2xl mt-2 text-[#4E9F0D]">{translations[language].beef}</h2>
          <p className="mt-4 leading-relaxed w-[1050px]">{translations[language].description}</p>

          {/* Price Box */}
          <div className="bg-[#4E9F0D] mt-[52px] text-white text-[50px] font-thin w-[280px] h-[80px] flex items-center justify-center">
            {translations[language].price}
          </div>
        </div>
      </div>
    </header>

      {/* PRODUCTS SECTION */}
      <div className="bg-black text-white px-10 py-8 overflow-hidden">
        <main className="max-w-[1110px] w-full mx-auto overflow-hidden">
        <nav className="flex flex-wrap space-x-4 text-lg mb-8">
            {parts.map((part, index) => (
              <span key={index} className="cursor-pointer text-gray-400 hover:text-[#4E9F0D]">
                {part}
              </span>
            ))}
          </nav>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {data.map((product, index) => (
              <div key={product.id} className="relative group">
                <div className="relative w-full overflow-hidden">
                  <img
                    src={product.image}
                    alt="Product"
                    className="w-full h-[300px]"
                  />
                  <div className="absolute bottom-0 left-0 w-[190px] h-[55px] bg-[#4E9F0D] text-white text-xl font-semibold text-center py-3 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    {product.price}
                  </div>
                  <div className="absolute inset-0 bg-[#4E9F0D]/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <span className="text-white text-[24px] font-semibold">
                      {translations[language]["add_to_cart"]}
                    </span>
                  </div>
                </div>
                <h3 className="text-[#4E9F0D] text-xl font-bold my-6">
                  {product.title}
                </h3>
                <p className="mt-2">{product.description}</p>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* UNIQUE RECIPE SECTION */}
      <section
        className="relative w-full h-screen bg-black bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${sectionBG})` }}
      >
        <div className="w-[1110px] mx-auto">
          <h2 className="text-[#4E9F0D] text-[36px] font-bold text-center pt-[42px]">
            {translations[language]["unique_recipe"]}
          </h2>
          <div className="flex justify-center mt-[15px]">
            <img src={line} alt="" />
          </div>
          <p className="text-[18px] mt-[46px] font-normal leading-6">Гамбургер является разновидностью сэндвича, состоящей из жареной рубленой котлеты, что подается внутри разрезанной круглой булки. Он обычно дополняется разнообразными приправами, к примеру, листьями салата, кетчупом и майонезом, дольками маринованного огурца, помидора или кабачка, сырым или поджаренным луком.</p>
          <p className="text-[18px] mt-[25px] font-normal leading-6">Будучи наиболее распространенной «быстрой» едой в США, гамбургер имеет далеко не американское происхождение. Ученые приписывают его авторство кочевникам-скифам, которые клали обжаренное мясо между двумя хлебными ломтиками. А в Новый свет «король» фаст-фуда приехал вместе с немецкими иммигрантами: его назвали, кстати, в честь Гамбурга, второго по масштабам города Германии. Официальной датой продажи первого гамбургера в США считается 27 июля 1900-го - в этот день гастроном из Нью-Хейвена предложил жителям города покупать приправленную кетчупом котлету, «зажатую» между двумя кусками булки. Изначально такая еда была прерогативой бедных слоев населения, но вскоре по всей стране стали открываться «фаст-фудовые» заведения, в которых, быстрым было не только питание, но и обслуживание, и смена клиентов. Эти общепиты взяли курс на оперативное детское питание - и для всегда занятого рабочего класса на тот момент они стали лучшим решением проблемы, где и чем быстро накормить детей.</p>
        </div>
      </section>

      {/* MAP */}
      <div className="bg-black h-screen">
        <h2 className="text-[#4E9F0D] text-[36px] font-bold text-center py-[42px]">Наши филиалы</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88399.668446442!2d60.67972497349138!3d41.682437762049396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dfd497a70a1527%3A0xdd439e3fd9f34b09!2sBeruniy%2C%20Republic%20of%20Karakalpakstan%2C%20Uzbekistan!5e1!3m2!1sen!2s!4v1739753650966!5m2!1sen!2s" className="w-full h-[502px]" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      {/* FOOTER */}
      <footer className="bg-black">
        <div className="w-[1110px] mx-auto">
          <div className="flex justify-between py-[47px]">
            <div>
              <img src={logo} alt="Logo" />
            </div>
            <p className="text-[#4E9F0D] font-bold text-[24px]">
              +998 90 980 77 23
            </p>
          </div>
          <ul className="text-white flex w-[700px] justify-between mx-auto font-medium text-[18px]">
            <li>Меню</li>
            <li>О нас</li>
            <li>Контакты</li>
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Telegram Bot</li>
          </ul>
          <div className="text-white mt-[35px] mx-auto font-thin text-[16px] text-center pb-[47px]">
            <span>Сайт разработан в целях обучения © PROWEB 2019</span>
        </div>
        </div>
      </footer>
    </div>

  );
}
export default App;
