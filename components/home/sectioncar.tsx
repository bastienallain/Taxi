import SliderHome from "./sliderhome";

export default function SectionCar() {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="relative lg:w-1/2">
            <SliderHome />
          </div>
          <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl sm:leading-none">
                un service <br className="hidden md:block" />
                de transport sûr,
                <span className="inline-block text-deep-purple-accent-400">
                  rapide et fiable.
                </span>
              </h2>
              <p className="text-base text-gray-700 dark:text-white md:text-lg">
                Notre priorité est votre satisfaction et votre sécurité.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
