'use client'
import React, { useState } from 'react';
import { useRegisterMutation } from '@/redux/features/auth/authApi';
import { toast } from 'react-hot-toast';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Image from 'next/image';
import Button from '@/components/ui/button';
import Footer from '@/components/ui/footer';
import InputArea from '@/components/ui/inputarea';
import { useRouter } from 'next/navigation';

interface SignupProps {}

const Signup: React.FC<SignupProps> = () => {
  const [register, { isLoading }] = useRegisterMutation();
  const router = useRouter()

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required('Please enter your name'),
      email: Yup.string().email('Invalid email!').required('Please enter your email'),
      password: Yup.string().required('Please enter your password!').min(8),
    }),
    onSubmit: async (values) => {
      try {
        await register(values).unwrap();
        toast.success('Registration successful!');
        router.push('../verfication');
        
      } catch (error: any) {
        toast.error(error.data?.message || 'Registration failed!');
      }
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <div className="min-h-screen flex flex-col bg-white mt-14">
      {/* Main Content */}
      <div className="flex flex-grow flex-col md:flex-row w-full">
        {/* Left Side with Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto relative">
          <Image
            className="w-full h-full object-cover md:object-contain"
            src="/loginpageimage.jpeg"
            alt="Signup Screen Background"
            width={800}
            height={800}
          />
        </div>

        {/* Right Side with Signup Form */}
        <div className="w-full md:w-1/2 flex justify-center items-center bg-[#f3ebff] p-4 md:p-8">
          <div className="w-full max-w-md bg-[#f3ebff] rounded-lg">
            <div className="text-center text-black text-3xl md:text-5xl font-semibold font-inter leading-tight mb-8">
              Welcome!
            </div>

            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
              <div className="space-y-1">
                <div className="opacity-40 text-black text-sm md:text-base font-normal font-['Poppins'] leading-normal">
                  Name
                </div>
                <InputArea
                  className={`${
                    errors.name && touched.name && 'border-red-500'
                  } h-12 w-full bg-white rounded p-3 text-black`}
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                />
                {errors.name && touched.name && (
                  <span className="text-red-500 pt-2 block">{errors.name}</span>
                )}
              </div>
              <div className="space-y-1">
                <div className="opacity-40 text-black text-sm md:text-base font-normal font-['Poppins'] leading-normal">
                  Email
                </div>
                <InputArea
                  className={`${
                    errors.email && touched.email && 'border-red-500'
                  } h-12 w-full bg-white rounded p-3 text-black`}
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="login@email.com"
                />
                {errors.email && touched.email && (
                  <span className="text-red-500 pt-2 block">{errors.email}</span>
                )}
              </div>
              <div className="space-y-1">
                <div className="opacity-40 text-black text-sm md:text-base font-normal font-['Poppins'] leading-normal">
                  Password
                </div>
                <InputArea
                  className={`${
                    errors.password && touched.password && 'border-red-500'
                  } h-12 w-full bg-white rounded p-3 text-black`}
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  placeholder="Your Password"
                />
                {errors.password && touched.password && (
                  <span className="text-red-500 pt-2 block">{errors.password}</span>
                )}
              </div>
              <div className="space-y-4">
                <div className="w-full">
                  <Button variant="login" title="Sign Up"  />
                </div>
              </div>
            </form>

            <div className="mt-6 flex flex-col sm:flex-row justify-between items-center">
              <div className="text-center sm:text-left text-black/70 text-sm md:text-base font-normal font-poppins leading-normal mb-2 sm:mb-0">
                <span>Already have an account?</span>
                <a href="/login" className="text-[#7e2ee7] ml-1">Log In</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full bg-gray-200">
        <Footer />
      </div>
    </div>
  );
};

export default Signup;