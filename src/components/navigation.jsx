import Icon from "./icon";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <li className="capitalize">
          <span>account home</span>
          <Icon icon="chevronDown" />
        </li>
      </ul>
    </nav>
  );
}
