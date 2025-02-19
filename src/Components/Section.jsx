import line from "./line.png"
import sectionBG from "./text.png"
export function Text() {
    return (
        <section className="relative w-full h-screen bg-black bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${sectionBG})`}}>
            <div className="w-[1110px] mx-auto">
                <h2 className="text-[#4E9F0D] text-[36px] font-bold text-center pt-[42px]">Уникальная рецептура</h2>
                <div className="flex justify-center mt-[15px]"><img src={line} alt="" /></div>
                <p className="text-[18px] mt-[46px] font-normal leading-6">Гамбургер является разновидностью сэндвича, состоящей из жареной рубленой котлеты, что подается внутри разрезанной круглой булки. Он обычно дополняется разнообразными приправами, к примеру, листьями салата, кетчупом и майонезом, дольками маринованного огурца, помидора или кабачка, сырым или поджаренным луком.</p>
                <p className="text-[18px] mt-[25px] font-normal leading-6">Будучи наиболее распространенной «быстрой» едой в США, гамбургер имеет далеко не американское происхождение. Ученые приписывают его авторство кочевникам-скифам, которые клали обжаренное мясо между двумя хлебными ломтиками. А в Новый свет «король» фаст-фуда приехал вместе с немецкими иммигрантами: его назвали, кстати, в честь Гамбурга, второго по масштабам города Германии. Официальной датой продажи первого гамбургера в США считается 27 июля 1900-го - в этот день гастроном из Нью-Хейвена предложил жителям города покупать приправленную кетчупом котлету, «зажатую» между двумя кусками булки. Изначально такая еда была прерогативой бедных слоев населения, но вскоре по всей стране стали открываться «фаст-фудовые» заведения, в которых, быстрым было не только питание, но и обслуживание, и смена клиентов. Эти общепиты взяли курс на оперативное детское питание - и для всегда занятого рабочего класса на тот момент они стали лучшим решением проблемы, где и чем быстро накормить детей.</p>
            </div>
        </section>
    );
}