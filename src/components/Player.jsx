export default function Player({ name, symbol }) {
  return (
    <li>
      <span>
        <span>{name}</span>
        <span>{symbol}</span>
        <button>Edit</button>
      </span>
    </li>
  );
}
