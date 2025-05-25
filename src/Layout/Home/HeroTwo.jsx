import heroimg from "../../assets/heroImage.png";
import liner from "../../assets/liner.png";

const HeroTwo = () => {
  return (
    <div className="relative">
  <img className="w-full 2xl:-mt-40 md:-mt-24 max-sm:-mt-20" src={heroimg} alt="" />

  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] lg:w-[50%] md:w-[60%] text-center">
    <h2 className="text-4xl md:text-6xl lg:text-4xl xl:text-7xl 2xl:text-[100px] text-white font-bold leading-tight">
      Master the code. <br />Own the logic.
    </h2>
    <img className="lg:w-[50%] md:w-[28%] 2xl:w-[30%] max-sm:w-[30%] lg:ml-28 md:ml-16 max-sm:ml-6 mx-start " src={liner} alt="" />
  </div>
</div>

  );
};

export default HeroTwo;