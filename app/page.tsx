import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { FetchCarsParams } from "@/types";
import { fetchCars } from "@/utils";

export default async function Home(
  {searchParams}
: {
  searchParams: FetchCarsParams;
}) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer||"",
    year: searchParams.year||2022,
    model: searchParams.model||"",
    fuel: searchParams.fuel||"",
    limit: searchParams.limit || 10,
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters items-start">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels}/>
            <CustomFilter title="year" options={yearsOfProduction}/>
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car, index) => (
                <CarCard key={index} car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div>
            <p>OOPS there is no cars now!</p>
          </div>
        )}
      </div>
    </main>
  );
}
