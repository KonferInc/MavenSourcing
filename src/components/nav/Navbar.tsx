import { useState } from "react";
import { Link } from "react-scroll";

import { FaBars, FaTimes } from "react-icons/fa";
import { Logo } from "@assets";

import "./Navbar.css";

interface NavItem {
    name: string;
    to: string;
}

const Navbar: React.FC = () => {
    const [opened, setOpened] = useState<boolean>(false);
    const handleOpen = () => setOpened(!opened);
    const closeMenu = () => setOpened(false);

    const navItems: NavItem[] = [
        { name: "Maven", to: "maven" },
        { name: "About Us", to: "about" },
        { name: "Services", to: "services" },
        { name: "Contact Us", to: "contact" },
    ];

    return (
        <div className="header">
            <nav className="navbar">
                <Link
                    to="maven"
                    className="logo"
                    spy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}
                    style={{ cursor: "pointer" }}
                >
                    <img src={Logo} alt="logo" />
                </Link>

                <div className="burger" onClick={handleOpen}>
                    {opened ? (
                        <FaTimes size={30} style={{ color: "#ffffff" }} />
                        ) : (
                        <FaBars size={30} style={{ color: "#ffffff" }} />
                    )}
                </div>

                <ul className={opened ? "menu active" : "menu"}>
                    {navItems.map((item) => (
                        <li key={item.to} className="item">
                            <Link
                                to={item.to}
                                spy={true}
                                smooth={true}
                                offset={-60}
                                duration={500}
                                style={{ cursor: "pointer" }}
                                onClick={closeMenu}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export { Navbar };