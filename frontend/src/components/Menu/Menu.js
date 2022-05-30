import { Link } from "react-router-dom";
import styles from "./Menu.css";

function Menu() {
  return (
    <div className="menuContainer">
      <ul className="menu">
        <li className="menuItem">
          <Link className="btn btn-danger button" to={"/graph"}>
            Graph
          </Link>
        </li>
        <li className="menuItem">
          <Link className="btn btn-info" to={"/"}>
            Input
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
