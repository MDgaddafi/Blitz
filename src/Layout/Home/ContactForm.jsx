import button2 from "../../assets/form/button2.png";
import Arrow from "../../assets/form/Arrow.png";

const ContactForm = () => {
  return (
    <div className="items-start px-4 ">
      <div className="relative z-10">
        <form className="space-y-6 max-sm:space-y-3 md:mr-24 max-sm:mr-0 lg:mr-0">
          <div>
            <label htmlFor="naam" className="block text-black font-semibold">Naam</label>
            <input
              id="naam"
              name="naam"
              type="text"
              placeholder="Jouw naam"
              className="w-full mt-1 p-3 max-sm:p-2 border border-black rounded-md bg-transparent placeholder-gray-600"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-black font-semibold">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="jouw@email.nl"
              className="w-full mt-1 p-3 max-sm:p-2 border border-black rounded-md bg-transparent placeholder-gray-600"
            />
          </div>
          <div>
            <label htmlFor="bericht" className="block text-black font-semibold">Bericht</label>
            <textarea
              id="bericht"
              name="bericht"
              rows="4"
              placeholder="Jouw vraag of bericht…"
              className="w-full mt-1 p-3 max-sm:p-2 border border-black rounded-md bg-transparent placeholder-gray-600"
            ></textarea>
          </div>
          <button style={{
                          backgroundImage: `url(${button2})`,
                          backgroundSize: "cover",
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "center",
                        }}
            type="submit"
            className="w-[264px] h-[60px] lg:w-[220px] lg:h-[50px] max-sm:w-[200px] max-sm:h-[30px] text-black font-bold font-grotters lg:text-2xl max-sm:text-sm lg:pl-12 pl-10 md:pl-16 rounded-md transition-all flex items-center gap-2"
          >
            VERZENDEN <span><img src={Arrow} alt="" /></span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
