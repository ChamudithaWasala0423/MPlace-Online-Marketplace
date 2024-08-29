'use client'
import React, { useEffect, useState } from "react";
import Textarea from "@/components/textarea";
import DragAndDrop from "@/components/ui/draganddrop";
import InputArea from "@/components/ui/inputarea";
import Button from "@/components/ui/button";
import Footer from "@/components/ui/footer";
import { useCreateAdsMutation } from "@/redux/features/ads/adsApi";
import toast from "react-hot-toast";

const EditAddPage: React.FC = () => {
  const [createAds, { isLoading, isSuccess, error }] = useCreateAdsMutation();

  const [adData, setAdData] = useState({
    name: "",
    description: "",
    price: "",
    estimatedPrice: "",
    tags: "",
    level: "",
    imageOne: null, // This will store the image file
  });

  useEffect(() => {
    if (isSuccess) {
      toast.success("Advertisement created successfully");
    }

    if (error) {
      if ("data" in error) {
        const errorMessage = error as any;
        toast.error(errorMessage.data.message);
      }
    }
  }, [isLoading, isSuccess, error]);

  const handleFormSubmit = async (e: any) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Validate required fields
    if (!adData.name || !adData.description || !adData.price || !adData.tags) {
      toast.error("Please fill out all required fields.");
      return;
    }

    const formData = new FormData();

    // Append form fields
    formData.append("name", adData.name);
    formData.append("description", adData.description);
    formData.append("price", adData.price);
    formData.append("estimatedPrice", adData.estimatedPrice || ""); // Optional
    formData.append("tags", adData.tags);
    formData.append("level", adData.level || ""); // Optional
    if (adData.imageOne) {
      formData.append("imageOne", adData.imageOne);
    }

    if (!isLoading) {
      await createAds(formData);
    }
  };

  // const handleFileDrop = (acceptedFiles: File[]) => {
  //   if (acceptedFiles.length > 0) {
  //     setAdData({ ...adData, imageOne: acceptedFiles[0] });
  //   }
  // };

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
          <form className="space-y-6" onSubmit={handleFormSubmit}>
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
                value={adData.name}
                onChange={(e) => setAdData({ ...adData, name: e.target.value })}
                type="text"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-black text-base font-bold font-Poppins">
                Category
              </label>
              <p className="text-sm text-gray-500">
                Choose the category that best fits your item or service.
                (e.g.,Electronics, Lands, Furniture).
              </p>
              <input
                type="text"
                name="level"
                value={adData.level}
                onChange={(e) => setAdData({ ...adData, level: e.target.value })}
                className="w-full h-12 border-gray-300 rounded-md"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-black text-base font-bold font-Poppins">
                Tags
              </label>
              <p className="text-sm text-gray-500">
                Add relevant keywords to help buyers find your ad
                (e.g., iPhone, Samsung).
              </p>
              <InputArea
                type="text"
                customWidth="w-full"
                customHeight="h-12"
                value={adData.tags}
                onChange={(e) => setAdData({ ...adData, tags: e.target.value })}
              />
            </div>

            <h2 className="text-2xl font-bold text-black mb-8">Content</h2>

            <div className="space-y-2">
              <label className="block text-black text-base font-bold font-Poppins">
                Add photos
              </label>
              <p className="text-sm text-gray-500">
                Upload clear, high-quality photos of your item. Showcase all
                angles to attract buyers.
              </p>
              {/* <DragAndDrop /> */}
            </div>

            <h2 className="text-2xl font-bold text-black mb-8">Price Details</h2>

            <div className="space-y-2">
              <label className="block text-black text-base font-bold font-Poppins">
                Price details
              </label>
              <div className="flex flex-wrap items-center gap-2">
                <InputArea
                  type="text"
                  customWidth="w-32"
                  customHeight="h-10"
                  placeholder="Price"
                  value={adData.price}
                  onChange={(e) => setAdData({ ...adData, price: e.target.value })}
                />
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
                  placeholder="Estimated Price"
                  value={adData.estimatedPrice}
                  onChange={(e) => setAdData({ ...adData, estimatedPrice: e.target.value })}
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
                value={adData.description}
                onChange={(e) => setAdData({ ...adData, description: e.target.value })}
              />
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
                  readOnly // ReadOnly for now, as it's hardcoded
                />
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <Button variant="primary" title="Post Adds" />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditAddPage;