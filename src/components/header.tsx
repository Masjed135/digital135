import Image from "next/image";

export default function Header() {
    return (<>
    <header className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Image
            src="/logo.png"
            alt="خانه فرهنگ و دیجیتال مسجد الزهرا(س)"
            width={90}
            height={90}
        />
      <h1 className={ `font-black text-white text-3xl`}>خانه فرهنگ و دیجیتال مسجد الزهرا
        <sup>(س) </sup>
        برگزار میکند:</h1>

     
        <a href="#" className="text-white hover:text-yellow-400 transition-colors">
          ثبت نام
        </a>

    </header>
    </>)
}