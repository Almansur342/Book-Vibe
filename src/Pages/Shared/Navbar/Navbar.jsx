import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li><a>Listed Books</a></li>
            <li><a>Pages to Read</a></li>
            <li><a>New Releases</a></li>
            <li><a>Best Sellers</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl font-bold">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal flex items-center gap-5 text-lg ">
            <NavLink to="/" className={({isActive})=> isActive? 'text-[#23BE0A] border py-1 rounded px-3 cursor-pointer font-semibold border-[#23BE0A]': 'text-[#131313CC]'}><a>Home</a></NavLink>

            <NavLink to="/Listed Books" className={({isActive})=> isActive? 'text-[#23BE0A] border py-1 rounded cursor-pointer px-3 font-semibold border-[#23BE0A]': 'text-[#131313CC]'}><a>Listed Books</a></NavLink>

            <NavLink to="/Pages to Read" className={({isActive})=> isActive? 'text-[#23BE0A] border py-1 rounded cursor-pointer px-3 font-semibold border-[#23BE0A]': 'text-[#131313CC]'}><a>Pages to Read</a></NavLink>

            <NavLink to="/contact-us" className={({isActive})=> isActive? 'text-[#23BE0A] border py-1 cursor-pointer rounded px-3 font-semibold border-[#23BE0A]': 'text-[#131313CC]'}><a>Contact Us</a></NavLink>

            <NavLink to="/about-us" className={({isActive})=> isActive? 'text-[#23BE0A] border py-1 rounded px-3 cursor-pointer font-semibold border-[#23BE0A]': 'text-[#131313CC]'}><a>About Us</a></NavLink>
          </ul>
        </div>
        <div className="navbar-end space-x-3">
          <a className="border px-5 py-3 text-lg font-semibold text-white rounded bg-[#23BE0A]">Sign In</a>
          <a className="border px-5 py-3 text-lg font-semibold text-white rounded bg-[#59C6D2]">Sign Up</a>
        </div>
      </div>
    </div>

  );
};

export default Navbar;