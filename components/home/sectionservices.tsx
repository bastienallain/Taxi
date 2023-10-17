export default function SectionServices() {
  return (
    <div className="relative">
      <img
        src="/businessman.jpg"
        className="absolute inset-0 object-cover w-full h-full"
        alt="Chauffeur professionnel"
      />
      <div className="relative bg-gray-900 bg-opacity-60 pt-12">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-6 mx-auto flex flex-wrap">
            <div className="flex flex-col flex-wrap py-6 w-full pl-4 text-center lg:text-left lg:w-1/2 lg:pl-12">
              {/* Service 1 : Réservation facile par téléphone */}
              <div className="flex flex-col mb-10 items-center lg:items-start">
                <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-primary text-white mb-3 lg:w-24 lg:h-24 lg:mb-5">
                  {/* Icône de téléphone */}
                  <svg
                    className="w-8 h-8 lg:w-12 lg:h-12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 4H5C5 4 7 3 9 5C11 7 4 14 4 14V15C4 15 10 8 14 12C18 16 20 19 20 19V20H21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex-grow text-center lg:text-left">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white py-2 lg:text-3xl">
                    Réservation facile par téléphone
                  </h2>
                  <p className="leading-relaxed text-lg text-gray-100">
                    Appelez-nous et nous serons à votre porte en un rien de
                    temps!
                  </p>
                </div>
              </div>

              {/* ... (Répétez la structure pour les autres services) ... */}
            </div>{" "}
            <div className="w-full mb-6 lg:mb-0 lg:w-1/2"></div>
          </div>
        </section>
      </div>
    </div>
  );
}
