export default function SlideContent({ currentSlide, slides, goToSlide }) {
  return (
    <div className="relative z-10 flex flex-col justify-end px-6 lg:px-12 pb-12 lg:pb-20 h-full">
      <h1 className="text-3xl lg:text-6xl text-white font-stencil font-bold uppercase mb-4 lg:mb-6 tracking-wide">
        {slides[currentSlide].title}
      </h1>

      <div className="flex flex-col lg:flex-row items-start lg:items-end gap-3 max-w-[550px]">
        <p className="text-sm max-w-[60%]">
          {slides[currentSlide].description}
        </p>
        <button className="relative h-[50px] text-text font-bold uppercase tracking-wider border border-text px-7 py-3.5 transition-all duration-300 hover:bg-background rounded-[10px] skew-x-[-15deg] cursor-pointer">
          <span className="font-medium skew-x-[15deg]">Find out more</span>
        </button>
      </div>

      {/* Indicators */}
      <div className="flex space-x-2.5 mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 p-0.5 rounded-full inline-flex items-center justify-center ${
              index === currentSlide
                ? "outline-1 outline-offset-[-1px] outline-text"
                : ""
            }`}
          >
            <div
              className={`w-3 h-3 rounded-full border border-text ${
                index === currentSlide && "bg-text"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
