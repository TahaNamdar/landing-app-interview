// app/components/Hero.jsx
import Image from "next/image";
import HeroSvg from "../../public/icons/d-heroFrame.svg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-right">
            <div className="max-w-lg mx-auto lg:mx-0">
              <h1 className="text-4xl sm:text-5xl md:text-3xl font-bold mb-6">
                کمپین‌های بازاریابی و تبلیغاتی
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8">
                آیا به دنبال راهی مطمئن برای دیده شدن برندتان هستید؟ مشاوره
                رایگان ما به شما کمک می‌کند تا مسیر موفقیت را پیدا کنید. همین
                حالا قدم اول را بردارید!
              </p>

              <p>جهت دریافت مشاوره رایگان با شماره‌ی زیر تماس بگیرید</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-primary text-white px-6 sm:px-8 py-3 mt-4 md:mt-8 rounded-lg transition-all duration-300 font-semibold">
                  دریافت مشاوره
                </button>
              </div>
            </div>
          </div>

          {/* SVG Section - 50% width on desktop */}
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="w-full max-w-md sm:max-w-lg lg:max-w-full">
              <Image
                src={HeroSvg}
                alt="Hero illustration"
                width={690}
                height={428}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
