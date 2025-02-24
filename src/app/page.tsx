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
            <h2 className={' text-white text-6xl text-yellow-400'}>جـام رمضـان</h2>
            <Image
               src="/cod.webp"
               alt="کالاف دیوتی"
               width={700}
               height={510}
            />
            <div className="bg-[#030435d2] p-4 rounded-xl mb-10">
            <p className={'font-light text-4xl  text-pink-500 mb-5'}>چهارشنبه و پنجشنبه و جمعه 16 و 17 و 18 اسفند ماه 1403</p>
            <p className={'font-light text-4xl  text-cyan-400'}>کاشان - خیابان شهید صالحی - کوچه جنب مسجد الزهرا<sup>(س)</sup></p>
            </div>
            <Countdown  targetDate="2025-03-01T12:00:00" />
        </div>
      </div>
    </div>
  );
}
