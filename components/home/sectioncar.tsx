import Link from "next/link";
import SliderHome from "./sliderhome";

export default function SectionCar() {
  return (
    <>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
          <div className="md:w-1/2 w-full">blabla</div>
          <div className="md:w-1/2 w-full">
            <SliderHome />
          </div>
        </div>
      </div>
    </>
  );
}
