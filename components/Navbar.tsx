import styles from "./Navbar.module.css";
import { ActiveLink } from "./ActiveLink";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const Navbar = () => {
  return (
    <nav className={styles["menu-container"]}>
      {menuItems.map((i) => (
        <ActiveLink key={i.href} text={i.text} href={i.href} />
      ))}
    </nav>
  );
};
