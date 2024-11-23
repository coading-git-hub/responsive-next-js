
import Image from "next/image";

export default function ProductCard() {
  return (
    <div className="flex flex-col md:flex-wrap md:flex-row lg:flex-row justify-center items-center gap-6">
      {/* 1st card */}
      <div className="border border-amber-900 p-4">
        <div className="flex items-center justify-center my-4">
          <Image
            src="/images (1).jpeg"
            alt="product image"
            width={300}
            height={300}
          />
        </div>
        <p className="text-center pt-10">PKR 5,000</p>
        <div className="flex justify-center items-center my-3">
          <button className="px-4 py-4 bg-blue-600 text-white rounded-md">
            Buy Now
          </button>
        </div>
      </div>

      {/* 2nd card */}
      <div className="border border-amber-950 p-4">
        <div className="flex items-center justify-center my-4">
          <Image
            src="/image(2).jpeg"
            alt="product image"
            width={300}
            height={300}
          />
        </div>
        <p className="text-center pt-10">PKR 5,000</p>
        <div className="flex justify-center items-center my-3">
          <button className="px-4 py-4 bg-blue-600 text-white rounded-md">
            Buy Now
          </button>
        </div>
      </div>

      {/* 3rd card */}
      <div className="border border-amber-950 p-4 ">
        <div className="flex items-center justify-center my-4">
          <Image
            src="/image 3.jpeg"
            alt="product image"
            width={300}
            height={300}
          />
        </div>
        <p className="text-center pt-10">PKR 5,000</p>
        <div className="flex justify-center items-center my-3">
          <button className="px-4 py-4 bg-blue-600 text-white rounded-md">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
