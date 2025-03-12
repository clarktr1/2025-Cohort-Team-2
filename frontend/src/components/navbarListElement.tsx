import { Link } from "react-router-dom";

interface NavItemProps {
    to: string;
    navLinkName: string;
}

const NavItem = ({ to, navLinkName }: NavItemProps) => (
    <li>
        <Link
            to={to}
            className="text-orange-100 text-md hover:text-orange-400 hover:font-medium"
        >
            {navLinkName}
        </Link>
    </li>
);

export default NavItem;
