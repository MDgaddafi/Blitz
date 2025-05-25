import Vectorbar from "../../assets/Vectorbar.png";
import button1 from "../../assets/form/button1.png";
import form from "../../assets/form/form.png";
import email from "../../assets/form/email.png";
import form2 from "../../assets/form/form2.png";
import email2 from "../../assets/form/email2.png";
import ContactForm from "./ContactForm";

const Form = () => {
  return (
    <div className="">
      <div className="text-white text-center my-16 max-sm:mt-0">
        <h2 className="xl:text-8xl md:text-6xl max-sm:text-4xl font-bold">
          GET IN TOUCH
        </h2>
        <img
          className="xl:ml-[500px] 2xl:ml-[750px] max-sm:ml-[180px] md:ml-[320px] md:w-[230px] max-sm:w-[150px] xl:w-[400px]"
          src={Vectorbar}
          alt=""
        />
        <p className="xl:w-[520px] md:w-[70%] max-sm:w-[90%] mx-auto text-[14px] xl:mt-6 max-sm:mt-2 ">
          Heb je vragen of wil je weten welke extra technologieën wij kunnen
          aanbieden? Neem contact met ons op!
        </p>
      </div>
      {/* Form Section */}
      <div className="grid grid-cols-2 lg:grid-cols-2 lg:p-0 md:grid-cols-1 max-sm:grid-cols-1 mx-auto p-16 md:p-1 max-sm:p-5 2xl:w-[60%] xl:w-[80%] max-sm:w-[100%] md:gap-y-24">
        <div
          style={{
            backgroundImage: `url(${form})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className=" h-[347px] grid items-start text-black"
        >
          <div className="w-[385px] xl:ml-10 lg:ml-6 md:ml-36 pl-8 lg:pt-6 md:pt-6 p-12 max-sm:pt-16">
            <div className="flex gap-2 items-center font-semibold text-xl">
              <img src={email} alt="" />
              <h2>Stuur ons een bericht</h2>
            </div>
            <p className=" lg:mt-8 pt-2 max-sm:w-64">
              We staan klaar om je vragen te beantwoorden en je te helpen bij
              het vinden van de juiste opleiding voor jouw behoeften.
            </p>
            <div
              style={{
                backgroundImage: `url(${button1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              className=" text-[#4E57EB] md:mt-28  max-sm:mt-16 max-sm:ml-5 lg:mt-20 mt-16 text-xl max-sm:text-[16px] w-[300px] max-sm:w-[200px] max-sm:h-[50px] h-[100px] grid grid-cols-2 justify-center items-center text-center font-bold"
            >
              <div className="flex mt-5 ml-6 max-sm:ml-2 transform -skew-y-6 max-sm:-skew-y-2 max-sm:mt-2">
                <p>
                  <a href="mailto:info@learninablitz.nl">
                    info@learninablitz.nl
                  </a>
                </p>
                <img className="ml-4" src={email2} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${form2})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="h-[525px] text-black"
        >
          <div className="xl:ml-2 lg:ml-6 md:ml-24 pl-8 lg:pt-6 md:pt-6 p-12 mt-5 max-sm:pt-16">
            <div>
              <ContactForm></ContactForm>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
