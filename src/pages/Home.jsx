import hero from "../assets/hero.png"
import trick from "../assets/trick.svg"
export default function Home() {
  return (
    <div className="container m-auto">
      {/* hero  */}
      <div className="flex flex-col items-center pt-[50px]">
        <h1 className="text-center  font-sans  lg:text-[80px] md:text-[60px] sm:text-[40px] font-bold font-stretch-ultra-condensed">Zimzim bilan restoraningizni <br /> avtomatlashtirish</h1>
        <p className="font-sans text-center text-gray lg:text-[25px] md:text-[20px] mt-[25px] opacity-40">Bizning dasturiy echimlarimiz sizning biznesingiz har qachongidan ham samarali <br /> ishlashiga yordam beradi</p>
        <button className="btn btn-info mt-[25px] w-[120px] border-white border-2 rounded-2xl">Ulanish</button>

        <img className="mt-[50px]" src={hero} alt="hero" />
      </div>

      {/* main */}
      <div className="mt-[50px]">

        <div>
          <h1 className="text-center  font-sans  font-bold font-stretch-ultra-condensed  lg:text-[80px] md:text-[60px] sm:text-[40px] ">QISH-QISHNING AFZALLIKLARI</h1>
          <p className="font-sans text-center text-gray  mt-[25px] opacity-40  lg:text-[25px] md:text-[20px]">Zim-Zim sizning maksimal qulayligingiz uchun yaratilgan. Qo'shimcha <br /> funktsiyalar yo'q, tugmalar to'plami yo'q, lekin restoran uchun juda ko'p <br /> imkoniyatlar mavjud.</p>
        </div>

        {/* card */}
        <div className="mt-[50px] px-5 pt-8 border-solid border-black border rounded-3xl grid justify-items-center  grid-cols-1
        mb-[50px] pb-[50px] sm:grid-cols-2 lg:grid-cols-3">

          <div className="card card-dash bg-base-100 w-full max-w-md">
            <div className="card-body">
              <img className="mb-4" src={trick} alt="" width={50} height={50} />
              <h2 className="card-title lg:text-[24px] md:text-[16px]  font-semibold  leading-7 mb-2.5">Restoraningizni masofadan <br /> boshqaring.</h2>
              <p className="text-gray-500 leading-7  lg:text-[17px] md:text-[14px] sm:text-[12px] opacity-80">Qaerda bo'lsangiz ham, Zim-Zim sizga Real <br /> vaqt rejimida biznesingiz qanday <br /> ketayotganini va hozirda qancha pul <br /> ishlayotganingizni ko'rsatadi.</p>
            </div>
          </div>

          <div className="card card-dash bg-base-100 w-full max-w-md">
            <div className="card-body">
              <img className="mb-4" src={trick} alt="" width={50} height={50} />
              <h2 className="card-title lg:text-[24px] md:text-[16px] font-semibold  leading-7 mb-2.5">Yangi menyu qo'shish oson.</h2>
              <p className="text-gray-500 leading-7 text-[17px] opacity-80">Intuitiv Zim-Zim interfeysida yangi taomlar, <br /> ingredientlar va qiymat xaritalarini qo'shish <br /> juda oddiy operatsiyaga aylanadi. Sinab <br /> ko'ring, sinab ko'ring, mehmonlaringiz buni <br /> qadrlashadi!</p>
            </div>
          </div>

          <div className="card card-dash bg-base-100 w-full max-w-md">
            <div className="card-body">
              <img className="mb-4" src={trick} alt="" width={50} height={50} />
              <h2 className="card-title lg:text-[24px] md:text-[16px] font-semibold  leading-7 mb-2.5">Hisobotlarni Real vaqtda <br /> oling.</h2>
              <p className="text-gray-500 leading-7  lg:text-[17px] md:text-[14px] sm:text-[12px] opacity-80">Hisob-kitoblarni tekshirish, naqd pul, joriy <br /> daromad yoki oziq-ovqat narxlari, ombor <br /> qoldiqlari va boshqalar bo'lsin, siz doimo <br /> eng dolzarb ma'lumotlarga ega bo'lasiz.</p>
            </div>
          </div>

          <div className="card card-dash bg-base-100 w-full max-w-md">
            <div className="card-body">
              <img className="mb-4" src={trick} alt="" width={50} height={50} />
              <h2 className="card-title lg:text-[24px] md:text-[16px] font-semibold  leading-7 mb-2.5">Har bir bo'lim <br /> samaradorligini oshirish.</h2>
              <p className="text-gray-500 leading-7  lg:text-[17px] md:text-[14px] sm:text-[12px] opacity-80">Har bir xodimning kirish huquqi sozlamalari <br /> mavjud. Har bir xodimning har bir harakati <br /> diqqat bilan nazorat qilinadi va qayd etiladi.</p>
            </div>
          </div>

          <div className="card card-dash bg-base-100 w-full max-w-md">
            <div className="card-body">
              <img className="mb-4" src={trick} alt="" width={50} height={50} />
              <h2 className="card-title lg:text-[24px] md:text-[16px] font-semibold  leading-7 mb-2.5">Har bir tafsilotga e'tibor <br /> bering.</h2>
              <p className="text-gray-500 leading-7  lg:text-[17px] md:text-[14px] sm:text-[12px] opacity-80">Siz barcha xodimlarning harakatlari, pul <br /> harakati va boshqa mablag'larni hisobga <br /> olishingiz mumkin bo'lgan boshqaruv <br /> paneliga kirishingiz mumkin. Keraksiz <br /> ma'lumotlar yo'q, faqat barcha bo'limlarning <br /> to'liq ko'rsatkichlari.</p>
            </div>
          </div>

          <div className="card card-dash bg-base-100 w-full max-w-md">
            <div className="card-body">
              <img className="mb-4" src={trick} alt="" width={50} height={50} />
              <h2 className="card-title lg:text-[24px] md:text-[16px] font-semibold  leading-7 mb-2.5">Smenani ochmasdan va <br /> yopmasdan mahsulot <br /> harakatini ko'rish.</h2>
              <p className="text-gray-500 leading-7  lg:text-[17px] md:text-[14px] sm:text-[12px] opacity-80">Mahsulotlar ro'yxati omborda va hozirda <br /> restoran va barlarda mavjud. Bu sizga <br /> balansingizni istalgan vaqtda bir necha <br /> marta bosish orqali boshqarish imkonini <br /> beradi.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
