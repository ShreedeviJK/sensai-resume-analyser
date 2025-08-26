import {Link} from "react-router";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <p className="text-2xl font-bold text-gradient leading-none whitespace-nowrap">
                    RESUMIND
                    <sup className="ml-1 text-[10px] font-medium text-white/70v text-gradient">by sansai</sup>
                </p>
            </Link>
            <Link to="/upload" className="primary-button w-fit">
                Upload Resume
            </Link>
        </nav>
    )
}
export default Navbar
