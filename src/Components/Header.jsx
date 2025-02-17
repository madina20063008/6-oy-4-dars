
import React from "react";
import burgerImage from "./burger.png"; 
import logo from "./logo.png";
import two from "./2.png";

export function Header() {
    return (
        <header className="relative w-full h-screen bg-black bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${burgerImage})`}}>
            <div className="w-[1200px] mx-auto" >
                <nav className="relative z-10 flex justify-between items-center px-10 py-6">
                    <div>
                        <img src={logo} alt="Logo" />
                    </div>
                    <ul className="flex space-x-6 text-[#4E9F0D] text-lg">
                        {["КОРЗИНА", "МЕНЮ", "О НАС", "КОНТАКТЫ"].map((text, index) => (
                            <li key={index} className="cursor-pointer hover:text-white hover:bg-[#4E9F0D] p-[15px] transition flex items-center group">
                                {text}
                                <img className="hidden group-hover:inline-block w-6 ml-2" src={two} alt="Icon" />
                            </li>
                        ))}
                    </ul>
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
        </header>
    );
}
