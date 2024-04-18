import Image from "next/image";
import { Right } from "../Icons/Right";

export default function Hero() {
  return (
    <section className="hero flex">
      <div className="py-16 center-items flex flex-col justify-center">
        <h1 className="text-4xl font-semibold">
          Todo es mejor con una buena{" "}
          <span className="text-primary">Pizza</span>!
        </h1>
        <p className="text-2xl my-4 my-6 text-gray-500">
          Disfruta de nuestras deliciosas{" "}
          <span className="text-primary">pizzas</span> como si estuvieses en
          casa!
        </p>
        <div className="flex gap-4">
          <button className="bg-primary flex gap-2 items-center text-white px-8 py-2 rounded-full">
            Ordena ahora
            <Right />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image src={"/pizza1.png"} alt="Pizza" layout={"fill"} />
      </div>
    </section>
  );
}
