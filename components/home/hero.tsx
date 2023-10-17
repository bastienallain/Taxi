import Link from "next/link";

export default function HomeHero() {
  return (
    <div className="relative w-screen h-auto bg-black dark:bg-black bg-[url('/home-bg.webp')] bg-cover bg-bottom">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24">
        <div className="flex w-full mx-auto text-left">
          <div className="relative inline-flex items-center mx-auto align-middle">
            <div className="pb-12 text-center">
              <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-gray-100 dark:text-gray-100 md:text-5xl lg:text-6xl lg:max-w-7xl">
                FlashCab : Votre Voyage, Notre Priorité
              </h1>

              <p className="py-5 text-lg text-neutral-200 dark:text-gray-400">
                Réservez un taxi en quelques clics et voyagez en toute sérénité.
              </p>

              <div className="mt-4 sm:mt-0 sm:ml-3 ">
                <a href="tel:+33189480099" aria-label="Call us">
                  <button
                    type="submit"
                    value="Subscribe"
                    name="member[subscribe]"
                    id="member_submit"
                    className="mx-auto block w-full md:w-1/3 px-5 py-3 text-base font-medium text-white bg-primary border border-transparent rounded-lg shadow hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 sm:px-10"
                  >
                    Réservez Maintenant
                  </button>
                </a>
              </div>

              <div className="sm:max-w-lg sm:flex md:mx-auto">
                <p className="mt-3 text-xs text-gray-500">
                  En réservant, vous acceptez nos&nbsp;
                  <Link target="_blank" href="/terms">
                    &nbsp; Conditions Générales &nbsp;
                  </Link>
                  et notre&nbsp;
                  <Link target="_blank" href="/privacy">
                    &nbsp; Politique de Confidentialité
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
