'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  fullname: string;
  mobile: string;
  age: string;
  date_added: string;

  fullname_one: string;
  age_one: string;

  fullname_two: string;
  age_two: string;

}

export default function Register() {
    const [Loading, setLoading] = useState(false);

    const [formData, setFormData] = useState<FormData>({
        fullname: "",
        mobile: "",
        age: "",
        date_added: new Date().toString(),
        fullname_one: "",
        age_one: "",

        fullname_two: "",
        age_two: "",
      });
    
      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e: FormEvent) => {
        setLoading(true)
        e.preventDefault();
            if (!/^09[0-9]{9}$/.test(formData.mobile)) {
                alert("شماره موبایل وارد شده معتبر نیست");
                setLoading(false)
                return;
            }
        
          try {
            const response = await fetch("https://sheetdb.io/api/v1/5er2s9oco5z21", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ data: [formData] }),
            });
            if (response.ok) {
              alert("اطلاعات با موفقیت ارسال شد");
              setFormData({ 
                fullname: "",
                mobile: "",
                age: "",
                date_added: new Date().toString(),
                fullname_one: "",
                age_one: "",
                fullname_two: "",
                age_two: "",
            });
            setLoading(false)
            } else {
              alert("خطا در ارسال اطلاعات");
              setLoading(false)
            }
          } catch (error) {
            alert("مشکلی پیش آمد. لطفا دوباره تلاش کنید");
            setLoading(false)
          }
      };
      
    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-2 mt-5 text-start">
                <h3 className="text-xl">سرگروه</h3>

                <div>
                    <Label htmlFor="fullname">نام و نام خانوادگی سرگروه</Label>
                    <Input id="fullname" name="fullname" value={formData.fullname} onChange={handleChange} required disabled={Loading}/>
                </div>
                <div>
                    <Label htmlFor="mobile">شماره تلفن همراه سرگروه</Label>
                    <Input id="mobile" name="mobile" type="tel" value={formData.mobile} onChange={handleChange} required disabled={Loading}/>
                </div>
                <div>
                    <Label htmlFor="age">سن سرگروه</Label>
                    <Input id="age" name="age" type="number" value={formData.age} onChange={handleChange} required disabled={Loading}/>
                </div>

                <Input id="date_added" name="date_added" type="hidden" value={new Date().toString()} onChange={handleChange}/>

                <hr />
                <h3 className="text-xl">عضو اول</h3>
                <div>
                    <Label htmlFor="fullname_one">نام و نام خانوادگی عضو اول</Label>
                    <Input id="fullname_one" name="fullname_one" value={formData.fullname_one} onChange={handleChange} required disabled={Loading}/>
                </div>
                <div>
                    <Label htmlFor="age_one">سن عضو اول</Label>
                    <Input id="age_one" name="age_one" type="number" value={formData.age_one} onChange={handleChange} required disabled={Loading}/>
                </div>
                <hr />
                <h3 className="text-xl">عضو دوم</h3>
                <div>
                    <Label htmlFor="fullname_two">نام و نام خانوادگی عضو دوم</Label>
                    <Input id="fullname_two" name="fullname_two" value={formData.fullname_two} onChange={handleChange} required disabled={Loading}/>
                </div>
                <div>
                    <Label htmlFor="age_two">سن عضو دوم</Label>
                    <Input id="age_two" name="age_two" type="number" value={formData.age_two} onChange={handleChange} required disabled={Loading} />
                </div>

                <Button type="submit" className="w-full" disabled={Loading}>
                    
                    {
                        Loading ? <>
                        درحال ارسال اطلاعات ...
                        </>: <>
                        ثبت نام
                        </>
                    }
                </Button>
            </form>
        </>
    )
}