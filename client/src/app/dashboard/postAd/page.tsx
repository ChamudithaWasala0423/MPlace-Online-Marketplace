"use client";
import React, { useEffect } from "react";
import Textarea from "@/components/textarea";
import InputArea from "@/components/ui/inputarea";
import Button from "@/components/ui/button";
import Footer from "@/components/ui/footer";
import { useCreateAdsMutation } from "@/redux/features/ads/adsApi";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { data } from "autoprefixer";

const schema = Yup.object().shape({
  name: Yup.string().required("Please enter the title"),
  level: Yup.string().required("Please enter the category"),
  tags: Yup.string().required("Please enter the tags"),
  price: Yup.string().required("Please enter the price"),
  estimatedPrice: Yup.string().required("Please enter the estimated price"),
  description: Yup.string().required("Please enter the description"),
  // imageOne: Yup.mixed().required("Please upload an image"),
});

const EditAddPage: React.FC = () => {
  const [createAds, { isLoading, isSuccess, error }] = useCreateAdsMutation();
  const router = useRouter();


  const formik = useFormik({
    initialValues: {
      name: "",
      level: "",
      tags: "",
      price: "",
      estimatedPrice: "",
      description: "",
      imageOne: null,
    },
    validationSchema: schema,
    onSubmit: async ({ name, level, tags, price, estimatedPrice, description}) => {
      console.log(name, level, tags, price, estimatedPrice, description);
      await createAds({ name, level, tags, price, estimatedPrice, description });
    },
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success("Advertisement posted successfully!");
        router.push("../dashboard/profileoverview");
      
    }
    if (error) {
      if (error && "data" in error) {
        const errorData = error as any;
        toast.error(errorData.data.message);
      }
    }
  }, [isSuccess, error]);

  const { errors, touched, values, handleChange, handleSubmit } = formik;



  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-grow px-4 sm:px-6 lg:px-8 ml-2.5 sm:ml-1 lg:ml-15 mr-2.5 sm:mr-1 lg:mr-3.75">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col w-full justify-start mt-10">
            <div className="flex w-full justify-start mt-10">
              <p className="text-sm text-gray-500">
                Home
                <span className="text-black text-base font-bold font-Poppins">
                  /Post An Advertisement
                </span>
              </p>
            </div>
            <h1 className="text-2xl font-bold text-black mb-8 text-left mt-10">
              Basic Information
            </h1>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="block text-black text-base font-bold font-Poppins">
                Title
              </label>
              <p className="text-sm text-gray-500">
                Provide a clear, descriptive title for your advertisement.
              </p>
              <InputArea
                customWidth="w-full"
                customHeight="h-12"
                name="name"
                value={values.name}
                onChange={handleChange}
                type="text"
                placeholder="Enter the title"
              />
              {touched.name && errors.name && (
                <div className="text-red-500 text-sm">{errors.name}</div>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-black text-base font-bold font-Poppins">
                Category
              </label>
              <p className="text-sm text-gray-500">
                Choose the category that best fits your item or service. (e.g.,
                Electronics, Lands, Furniture).
              </p>
              <InputArea
                customWidth="w-full"
                customHeight="h-12"
                name="level"
                value={values.level}
                onChange={handleChange}
                type="text"
                placeholder="Enter the category"
              />
              {touched.level && errors.level && (
                <div className="text-red-500 text-sm">{errors.level}</div>
              )}
            </div>

            <div className="space-y-2">
              <label className="block text-black text-base font-bold font-Poppins">
                Tags
              </label>
              <p className="text-sm text-gray-500">
                Add relevant keywords to help buyers find your ad (e.g., iPhone,
                Samsung).
              </p>
              <InputArea
                type="text"
                customWidth="w-full"
                customHeight="h-12"
                name="tags"
                value={values.tags}
                onChange={handleChange}
                placeholder="Enter tags"
              />
              {touched.tags && errors.tags && (
                <div className="text-red-500 text-sm">{errors.tags}</div>
              )}
            </div>

            <h2 className="text-2xl font-bold text-black mb-8">Content</h2>

            {/* <div className="space-y-2">
              <label className="block text-black text-base font-bold font-Poppins">
                Add photos
              </label>
              <p className="text-sm text-gray-500">
                Upload clear, high-quality photos of your item. Showcase all
                angles to attract buyers.
              </p>
              <input
                type="file"
                name="imageOne"
                onChange={(event) => {
                  setFieldValue(
                    "imageOne",
                    event.currentTarget.files?.[0] || null
                  );
                }}
                className="w-full h-12 border-gray-300 rounded-md"
              />
              {touched.imageOne && errors.imageOne && (
                <div className="text-red-500 text-sm">{errors.imageOne}</div>
              )}
            </div> */}

            <h2 className="text-2xl font-bold text-black mb-8">
              Price Details
            </h2>

            <div className="space-y-2">
              <label className="block text-black text-base font-bold font-Poppins">
                Price details
              </label>
              <div className="flex flex-wrap items-center gap-2">
                <InputArea
                  type="text"
                  customWidth="w-32"
                  customHeight="h-10"
                  name="price"
                  value={values.price}
                  onChange={handleChange}
                  placeholder="Price"
                />
                {touched.price && errors.price && (
                  <div className="text-red-500 text-sm">{errors.price}</div>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-black text-base font-bold font-Poppins">
                Estimated Price details
              </label>
              <div className="flex flex-wrap items-center gap-2">
                <InputArea
                  type="text"
                  customWidth="w-32"
                  customHeight="h-10"
                  name="estimatedPrice"
                  value={values.estimatedPrice}
                  onChange={handleChange}
                  placeholder="Estimated Price"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-black text-base font-bold font-Poppins">
                Details
              </label>
              <p className="text-sm text-gray-500">
                Provide a detailed description of your item. Include key
                features, condition, and any important information buyers should
                know.
              </p>
              <Textarea
                customWidth="w-full"
                customHeight="h-32"
                name="description"
                value={values.description}
                onChange={handleChange}
              />
              {touched.description && errors.description && (
                <div className="text-red-500 text-sm">{errors.description}</div>
              )}
            </div>

            <h2 className="text-2xl font-bold text-black mb-8">Location</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="block text-black text-base font-bold font-Poppins">
                  City
                </label>
                <p className="text-sm text-gray-500">
                  Enter the city where the item is located.
                </p>
                <InputArea
                  customWidth="w-full"
                  customHeight="h-12"
                  value="Colombo"
                  type="text"
                  readOnly 
                />
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <input
                type="submit"
                value="Post Ad"
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 cursor-pointer"
              />
            </div>
          </form>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditAddPage;
