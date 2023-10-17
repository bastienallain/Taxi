export default function SectionServices() {
  return (
    <div className="relative">
      <img
        src="/businessman.jpg"
        className="absolute inset-0 object-cover w-full h-full"
        alt="Chauffeur professionnel"
      />
      <div className="relative bg-gray-900 bg-opacity-60 md:pt-24">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className="sm:text-3xl text-2xl  title-font text-primary tracking-widest font-bold title-font mb-1">
                Nos Services Premium
              </h2>
            </div>
            <div className="flex flex-wrap -m-4 md:pt-32">
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-gray-100 dark:bg-gray-950  p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-primary text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <h2 className="dark:text-white text-black text-lg title-font font-medium">
                      Réservation facile par téléphone
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      Appelez-nous et nous serons à votre porte en un rien de
                      temps!
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-gray-100 dark:bg-gray-950  p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-primary text-white flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <h2 className="dark:text-white text-blacktext-lg title-font font-medium">
                      Chauffeurs professionnels
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      Nos chauffeurs sont formés, expérimentés et connaissent la
                      ville comme leur poche.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-gray-100 dark:bg-gray-950 p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-primary dark:text-white text-black flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="6" cy="6" r="3"></circle>
                        <circle cx="6" cy="18" r="3"></circle>
                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                      </svg>
                    </div>
                    <h2 className="dark:text-white text-blacktext-lg title-font font-medium">
                      Disponibilité 24/7:
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      Peu importe l'heure, nous sommes là pour répondre à vos
                      besoins de déplacement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>{" "}
      </div>
    </div>
  );
}
