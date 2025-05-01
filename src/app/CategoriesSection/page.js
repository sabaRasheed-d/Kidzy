import Image from "next/image";

export default function CategoriesSection() {
  return (
    <section className="my-12 px-4 md:px-12">
      <h2 className="text-3xl font-extrabold text-orange-500 mb-6">Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative bg-pink-600 text-white rounded-2xl flex items-center p-6 md:p-8 h-64">
          <div className="z-10 space-y-2">
            <p className="text-lg font-semibold">Shop for</p>
            <h3 className="text-3xl md:text-4xl font-extrabold leading-tight">GIRL<br />TOYS</h3>
          </div>
          <Image
            src="https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/categories/April2024/girls.png"
            alt="Girl Toy"
            width={250}
            height={250}
            className="absolute bottom-0 right-0 object-contain z-0"
          />
        </div>
        <div className="relative bg-cyan-500 text-white rounded-2xl flex items-center p-6 md:p-8 h-64">
          <div className="z-10 space-y-2">
            <p className="text-lg font-semibold">Shop for</p>
            <h3 className="text-3xl md:text-4xl font-extrabold leading-tight">BOYS<br />TOYS</h3>
          </div>
          <Image
            src="https://phplaravel-1193282-4443773.cloudwaysapps.com/storage/categories/April2024/boys.png" 
            alt="Boy Toy"
            width={250}
            height={250}
            className="absolute bottom-0 right-0 object-contain z-0"
          />
        </div>
      </div>
      <div className="mt-6 flex justify-center space-x-4">
        <button className="w-10 h-10 flex items-center justify-center bg-orange-500 text-white rounded-full hover:bg-orange-600">
          ←
        </button>
        <button className="w-10 h-10 flex items-center justify-center bg-orange-500 text-white rounded-full hover:bg-orange-600">
          →
        </button>
      </div>
    </section>
  );
}
