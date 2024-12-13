"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Header = ({ dark }) => {
  const currentPath = usePathname();
  const activeMenuFuntion = (value) =>
    value.some((el) => currentPath.includes(el)) ? "mil-active" : "";
  const [toggle, setToggle] = useState(false);
  return (
    <div className={`mil-top-panel ${dark ? "mil-dark-2" : ""}`}>
      <div className="container">
        <Link href="/" className="mil-logo">
          <img
            src={dark ? "img/wh-logo-white.png" : "img/wh-logo.png"}
            alt="Plax"
            width={250}
            height={250 * .246}
          />
        </Link>
        <nav className={`mil-top-menu ${toggle ? "mil-active" : ""}`}>
          <ul>
            <li className={`${activeMenuFuntion(["rack-rates"])}`}>
              <Link href="rack-rates">Rack Rates</Link>
            </li>
            <li className={`${activeMenuFuntion(["services"])}`}>
              <Link href="#"  style={{cursor: 'not-allowed'}}>Services</Link>
            </li>
          </ul>
        </nav>
        <div className="mil-menu-buttons">
          <Link href="register" className="mil-btn mil-sm">
            Book Tee Time
          </Link>
          <div
            className={`mil-menu-btn ${toggle ? "mil-active" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            <span />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
