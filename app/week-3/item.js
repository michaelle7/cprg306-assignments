// week-3/item.js

export default function Item({ name, quantity, category }) {
  return (
    <li className="border p-2 mb-2">
      <h2 className="font-bold text-lg">{name}</h2>
      <p>Buy {quantity} in {category}</p>
    </li>
  );
}

