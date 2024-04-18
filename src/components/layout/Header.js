import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between">
        <Link className="text-primary font-semibold text-2xl" href="">
          Pizzas Caracas
        </Link>
        <nav className="flex gap-8 items-center text-gray-500 font-semibold">
          <Link href={""}>Inicio</Link>
          <Link href={""}>Menú</Link>
          <Link href={""}>Crear Orden</Link>
          <Link href={""}>Contacto</Link>
          {/* <Link
            href={""}
            className="bg-primary rounded-full text-white px-4 py-2"
          >
            Ingresar
          </Link> */}
        </nav>
      </header>
    </>
  );
}
