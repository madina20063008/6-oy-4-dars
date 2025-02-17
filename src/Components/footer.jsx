import logo from "./logo.png";
export function Footer() {
    return (
        <footer className="bg-black">
            <div className="w-[1110px] mx-auto">
                <div className="flex justify-between py-[47px]">
                    <div>
                        <img src={logo} alt="Logo" />
                    </div>
                    <p className="text-[#4E9F0D] font-bold text-[24px]">+998 90 980 77 23</p>
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
    );
}