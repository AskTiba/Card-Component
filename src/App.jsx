import sedan from "./assets/images/icon-sedans.svg";

const App = () => {
  return (
    <article className="">
      <main className="flex">
        <section className="mx-auto p-10 mt-20 rounded-lg bg-bright-orange">
          <div className="flex-col ">
            <img src={sedan} alt="" className="" />
            <h1 className="my-10 text-[24px] font-[700]">SEDANS</h1>
            <p className="mb-20">
              Sedans Choose a sedan for its <br /> affordability and excellent
              <br /> fuel economy. Ideal for <br /> cruising in the city or on
              <br /> your next road trip.
            </p>
            <button className="text-bright-orange">Learn More</button>
          </div>
        </section>
      </main>
    </article>
  );
};

export default App;
