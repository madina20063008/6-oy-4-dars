
import React, { useEffect, useState } from "react";

const parts = ["Гамбургеры", "Хот Доги", "Пицца", "Напитки", "Соки"];

export function Main() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setData(json));
    }, []);

    console.log(data);

    return (
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
                                <img src={product.image} alt="Product" className="w-full h-[300px]" />

                                <div className="absolute bottom-0 left-0 w-[190px] h-[55px] bg-[#4E9F0D] text-white text-xl font-semibold text-center py-3 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                                    {product.price}
                                </div>

                                <div className="absolute inset-0 bg-[#4E9F0D]/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                                    <span className="text-white text-[24px] font-semibold">Добавить в корзину</span>
                                </div>
                            </div>

                            <h3 className="text-[#4E9F0D] text-xl font-bold my-6">{product.title}</h3>
                            <p className="mt-2">{product.description}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
