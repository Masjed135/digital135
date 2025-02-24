import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Register from "./auth/register";
import Login from "./auth/login";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

export default function Header() {
    return (
      <>
        <header className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Image
                src="/logo.png"
                alt="خانه فرهنگ و دیجیتال مسجد الزهرا(س)"
                width={90}
                height={90}
            />
          <h1 className={ `font-black text-white text-2xl hidden md:block `}>خانه فرهنگ و دیجیتال مسجد الزهرا
            <sup>(س) </sup>
            برگزار میکند:</h1>

        
          <Dialog>
                <DialogTrigger className="bg-white rounded-sm p-3 font-bold hover:bg-yellow-400 transition-colors">
                ثبت نام
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="mb-5">ثبت نام</DialogTitle>
                   
                    <Register />
                       
                  </DialogHeader>
                </DialogContent>
            </Dialog>   

            

        </header>
        
      </>
    )
}