import Header from "@/components/header";
import Image from "next/image";
import Countdown from "@/components/countdown";

export default function Home() {
  return (
    <div className="hero-bg min-h-screen ">
      {/* bg-[#1a1624] */}
      <div className="bg-[#030435d2] min-h-screen">
        <Header />

        <div className="container mx-auto px-4 py-4 flex flex-col justify-center items-center">

        <h1 className={ `font-black text-white mb-8 text-center text-sm md:hidden xs:block`}>خانه فرهنگ و دیجیتال مسجد الزهرا
        <sup>(س) </sup>
        برگزار میکند:</h1>

            <h2 className={' text-white text-6xl text-yellow-400 '}>جـام رمضـان</h2>
            <Image
               src="/cod.webp"
               alt="کالاف دیوتی"
               width={700}
               height={510}
            />
            <div className="bg-[#030435d2] text-center p-4 rounded-xl mt-6 mb-10">
            <p className={'font-light text-lg md:text-4xl  text-yellow-400 mb-3'}>درگروه های 3 نفره، نفری 60 هزار تومان</p>

            <p className={'font-light text-xl md:text-4xl  text-pink-500 mb-3'}>چهارشنبه 22 اسفند ماه 1403_ساعت 20</p>
            <p className={'font-light text-lg md:text-4xl  text-cyan-400 '}>کاشان - خیابان شهید صالحی - کوچه جنب مسجد الزهرا<sup>(س)</sup></p>
            </div>
            <Countdown  targetDate="2025-03-12T16:30:00Z" />

            {/* <div className="text-center mt-5">
              <p className="text-white">کسب اطلاعات بیشتر</p>
              <p className="text-white">09921938100</p>
            </div> */}
        </div>
      </div>
    </div>
  );
}
