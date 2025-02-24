'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  fullname: string;
  mobile: string;
  age: string;
}

export default function Register() {
    const [formData, setFormData] = useState<FormData>({
        fullname: "",
        mobile: "",
        age: "",
      });
    
      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!/^09[0-9]{9}$/.test(formData.mobile)) {
            alert("شماره موبایل وارد شده معتبر نیست");
            return;
          }

        console.log(formData);
      };
      
    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-4 mt-5 text-start">
                <div>
                    <Label htmlFor="fullname">نام و نام خانوادگی</Label>
                    <Input id="fullname" name="fullname" value={formData.fullname} onChange={handleChange} required />
                </div>
                <div>
                    <Label htmlFor="mobile">موبایل</Label>
                    <Input id="mobile" name="mobile" type="tel" value={formData.mobile} onChange={handleChange} required />
                </div>
                <div>
                    <Label htmlFor="age">سن</Label>
                    <Input id="age" name="age" type="number" value={formData.age} onChange={handleChange} required />
                </div>
                <Button type="submit" className="w-full">ثبت</Button>
            </form>
        </>
    )
}