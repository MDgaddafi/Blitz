import sekloton from "../../assets/sekloton.png";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

const LogoSlider = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${sekloton})` }}
        className="w-full xl:h-[110vh] lg:h-[90vh] items-center justify-center grid md:h-[40vh] max-sm:h-[30vh] bg-cover bg-center bg-no-repeat left-0"
      >
        <div className="flex justify-center overflow-hidden">
          <div className="w-full overflow-hidden">
            <Marquee
              className="gap-[4rem] overflow-hidden [--duration:8s] xl:h-32"
              innerClassName="gap-[4rem] [--gap:4rem]"
              fade={true}
            >
              {["MAKES", "MAKES", "MAKES", "MAKES", "MAKES", "MAKES"].map(
                (text, index) => (
                  <div
                    key={index}
                    style={{
                      fontFamily: "acumin-pro",
                      WebkitTextStroke: "1px black",
                    }}
                    className={`xl:text-9xl text-xl font-extrabold ${
                      index % 2 === 0 ? "text-white" : "text-black"
                    }`}
                  >
                    {text}
                  </div>
                )
              )}
            </Marquee>
            <div>
              <hr className="xl:h-[45vh] h-[12vh] border-none" />
            </div>
           <Marquee
  className="gap-[4rem] overflow-hidden [--duration:8s] xl:h-32"
  innerClassName="gap-[4rem] [--gap:4rem]"
  fade={true}
  reverse={true} >
  {["MAKES", "MAKES", "MAKES", "MAKES", "MAKES", "MAKES"].map(
    (text, index) => (
      <div
        key={index}
        style={{
          fontFamily: "acumin-pro",
          WebkitTextStroke: "1px black",
        }}
        className={`xl:text-9xl text-xl font-extrabold ${
          index % 2 === 0 ? "text-white" : "text-black"
        }`}
      >
        {text}
      </div>
    )
  )}
</Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
