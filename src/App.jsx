import sedan from "./assets/images/icon-sedans.svg";
import suv from "./assets/images/icon-suvs.svg";
import luxury from "./assets/images/icon-luxury.svg";

const App = () => {
  return (
    <article className="">
      <main className="flex justify-center">
        <section className="flex-col p-10 mt-24 rounded-l-lg bg-bright-orange ">
          <img src={sedan} alt="" className="" />
          <h1 className="my-10 text-[24px] font-[700]">SEDANS</h1>
          <p className="mb-20">
            Choose a sedan for its <br /> affordability and excellent
            <br /> fuel economy. Ideal for <br /> cruising in the city or on
            <br /> your next road trip.
          </p>
          <button className="text-bright-orange">Learn More</button>
        </section>
        <section className="flex-col p-10 mt-24 bg-dark-cyan">
          <img src={suv} alt="" className="" />
          <h1 className="my-10 text-[24px] font-[700]">SUVS</h1>
          <p className="mb-20">
            Take an SUV for its spacious <br /> interior, power, and <br />{" "}
            versatility. Perfect for your <br /> next family vacation and <br />{" "}
            off-road adventures.
          </p>
          <button className="text-bright-orange">Learn More</button>
        </section>
        <section className="flex-col p-10 mt-24 rounded-r-lg bg-very-dark-cyan ">
          <img src={luxury} alt="" className="" />
          <h1 className="my-10 text-[24px] font-[700]">SEDANS</h1>
          <p className="mb-20">
            Cruise in the best car brands <br /> without the bloated prices.{" "}
            <br /> Enjoy the enhanced comfort <br /> of a luxury rental and
            arrive <br /> in style.
          </p>
          <button className="text-bright-orange">Learn More</button>
        </section>
      </main>
    </article>
  );
};

export default App;
