export default function MenuItem({ image, name, ingredients, price }) {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white hover:shadow-lg">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src={image}
          alt="Pizza"
          style={{ width: "250px", height: "250px" }}
        />
      </div>
      <h4 className="font-semibold my-2 text-xl">{name}</h4>
      <p className="text-gray-500 text-sm">{ingredients}</p>
      <p className="text-primary font-semibold text-2xl">${price}</p>
      <button className="bg-primary text-white px-8 py-2 rounded-full mt-4">
        Seleccionar
      </button>
    </div>
  );
}
