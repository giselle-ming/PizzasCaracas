import MenuItem from "./MenuItem";

export default function HomeMenu() {
  return (
    <section className="">
      <div className="text-center mb-4">
        <h3 className="uppercase text-gray-500 font-semibold">
          Revisa el menu
        </h3>
        <h2 className="text-primary font-bold text-4xl italic">Menú</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <MenuItem
          name={"Peperoni"}
          image={"/pizza2.png"}
          ingredients={"Masa, queso, tomate y esas cosas"}
          price={"10"}
        />
        <MenuItem
          name={"Peperoni"}
          image={"/pizza2.png"}
          ingredients={"Masa, queso, tomate y esas cosas"}
          price={"10"}
        />
        <MenuItem
          name={"Peperoni"}
          image={"/pizza2.png"}
          ingredients={"Masa, queso, tomate y esas cosas"}
          price={"10"}
        />
      </div>
    </section>
  );
}
