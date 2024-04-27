import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";
import React from "react";
import { Usages } from "../../public/assets";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className='flex justify-between w-full items-center'>
      <Card className='w-full flex m-10'>
        <div className='flex flex-col w-full h-full rounded-md'>
          <Image src={Usages.Auth} alt='auth' className='rounded-lg' />
        </div>
        <div className='flex flex-col justify-center items-center w-full gap-20 pr-10'>
          <div className='flex flex-col gap-2'>
            <h1 className='flex font-bold text-3xl'>Create account</h1>
            <p className='flex text-base'>
              Already have an account?
              <span className='text-[#9C9C9D] pl-1'> Login</span>
            </p>
          </div>
          <div className='flex flex-col items-center w-full px-10 gap-4'>
            <form className='flex flex-col gap-4 w-full'>
              <div className='flex gap-2 w-full'>
                <Input type='email' placeholder='First Name' />
                <Input type='email' placeholder='Last Name' />
              </div>
              <div className='flex gap-2 w-full'>
                <Input type='email' placeholder='Email' />
              </div>
              <div className='flex gap-2 w-full'>
                <Input type='password' placeholder='Password' />
              </div>
              <Button className='py-6'>Create Account</Button>
            </form>
            <p>or</p>
            <Button variant='outline' className='w-full py-6'>
              Continue with Google
            </Button>
            <Button variant='outline' className='w-full py-6'>
              Continue with Google
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
