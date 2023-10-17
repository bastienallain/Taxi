import SliderHome from "./sliderhome";

export default function SectionCar() {
  return (
    <>
      <div className="container mx-auto md:h-[450px]">
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-0 px-4 md:items-center">
          <div className="px-4 md:px-12">
            <SliderHome />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl sm:leading-none">
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
    </>
  );
}
