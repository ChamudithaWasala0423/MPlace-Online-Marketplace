import { FunctionComponent } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Import location icon from react-icons

interface ProductDetailsProps {
  productName?: string;
  description?: string;
  price?: string;
  location?: string;
  instructionsToBuyers?: string;
  category?: string;
  seller?: string;
  sellerImage?: string;
  sellerRating?: number;
}

const ProductDetails: FunctionComponent<ProductDetailsProps> = ({
  productName = "Havic HV G-92 Gamepad",
  description = "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
  price = "$192.00",
  location = "Godakawela, Rathnapura, Sabaragamuwa",
  instructionsToBuyers = "Handle with care. Ensure the product is properly packed before shipping.",
  category = "Entertainment > Gaming > Tools",
  seller = "Mr. S.M. Perera",
  sellerImage = "/path-to-your-icons/user.svg", // Use a default image path or fallback to a placeholder
  sellerRating = 4,
}) => {
  return (
    <div className="w-full flex flex-col items-start justify-start p-4 text-left text-black font-sans">
      <div className="flex flex-col items-start justify-start w-full lg:w-[407px] gap-4">
        <div className="w-full flex flex-col gap-2">
          <h1 className="text-2xl font-semibold tracking-wide">{productName}</h1>
          <p className="text-sm leading-6">{description}</p>
          <div className="text-xl font-bold">{price}</div>
        </div>
        <div className="flex items-center gap-2 text-sm text-black/50">
          <FaMapMarkerAlt className="w-4 h-4" />
          <span>{location}</span>
        </div>
      </div>
      
      <div className="w-full lg:w-[407px] mt-6">
        <hr className="opacity-50" />
      </div>

      <div className="flex flex-col w-full lg:w-[407px] mt-6 gap-6">
        <div>
          <h2 className="text-lg font-medium text-black/50">Instructions to Buyers</h2>
          <p className="text-sm leading-6">{instructionsToBuyers}</p>
        </div>
        <div>
          <h2 className="text-lg font-medium text-black/50">Category</h2>
          <p className="text-sm leading-6">{category}</p>
        </div>
      </div>
      
      <div className="w-full lg:w-[407px] mt-6">
        <hr className="opacity-50" />
      </div>

      <div className="flex flex-col w-full lg:w-[407px] mt-6 gap-4">
        <h2 className="text-lg font-medium text-black/50">Seller</h2>
        <div className="flex items-center gap-2">
          {/* <img className="w-8 h-8 rounded-full" alt="seller" src={sellerImage} /> */}
          <span className="text-[14px]">{seller}</span>
          <div className="border-r border-black/50 h-5 mx-2" />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;