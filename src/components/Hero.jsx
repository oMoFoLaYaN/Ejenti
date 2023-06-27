import { BsFillGeoAltFill } from "react-icons/bs";
import { layout } from "../style";
import fontStyle from "../style";
import Stats from "./Stats";

const Hero = () => {
  return (
    <section className={`home ${layout.section}`} id="home">
      <div className={`gap-y-14 pt-16 ${layout.container} grid grid-col-1 md:grid-cols-2`}>

        <div className="home__data h-fit">
          <h1 className={`text-white font-brand ${fontStyle.display} mb-5`}>
            Discover <br /> Most Suitable <br /> Property
          </h1>
          <p
            className={`home__description  ${fontStyle.body} text-emerald-200 mb-8`}
          >
            Find a variety of properties that suit you very easily, forget all
            difficulties in finding a residence for you
          </p>
          <form
            action=""
            className="bg-white flex items-center
          border-emerald-300 mb-8 pl-[0.35rem] pr-[0.35rem] py-[0.35rem]
          rounded-xl border-[3px] border-solid             
      "
          >
            <BsFillGeoAltFill className="text-xl text-emerald-600" />
            <input
              type="search"
              placeholder="Search by location..."
              className="w-[90%] bg-white text-emerald-200 mx-2 my-0"
            />
            <button className="button" type="button">
              Search
            </button>
          </form>
          <Stats />
        </div>

        <div className="home__images relative flex justify-center">
          <div className="home__orbe" />
          <div className="home__img">
            <img src="assets/img/home.jpg" alt="" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
