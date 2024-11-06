// week-8/item.js

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li //fixed the color leaking out of the border
      className="p-2 mb-2 cursor-pointer hover:bg-orange-700 bg-gray-900 border" onClick={() => onSelect({ name, quantity, category })}>
      <h2 className="font-bold text-lg">{name}</h2>
      <p>Buy {quantity} in {category}</p>
    </li>
  );
}
