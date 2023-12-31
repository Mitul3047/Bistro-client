
import { Link } from "react-router-dom";
import{ FaShoppingCart} from "react-icons/fa"
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";


const NavBar = () => {

  const { user, logOut } = useAuth();
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .then(error => console.error(error))
  }
  const navOptions = <>

    <li><Link to="/">Home</Link></li>
    <li><Link to="/menu">Our Menu</Link></li>
    <li><Link to="/order/salad">Order Food</Link></li>
    {

      user ? '' : <li><Link to="login">Login</Link></li>
    }

    {/* <li><a>Item 3</a></li> */}
    {/* <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li> */}


  </>


  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

              {navOptions}


            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">

            {navOptions}

          </ul>
        </div>
        <div className="navbar-end">
          <div className="mr-2">
            <Link to={'/dashboard/cart'}>
              <button className="flex justify-between items-center gap-4">
              <FaShoppingCart></FaShoppingCart>
                <div className="badge badge-sm badge-secondary  ">{cart.length}</div>
              </button>
            </Link>
          </div>
          {/* <a className="btn">Button</a> */}
          {
            user ? <div className="dropdown dropdown-end mr-5">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-12 rounded-full">

                  <img alt="Tailwind CSS Navbar component" src={user?.photoURL
} />
                </div>
              </label>
              <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between">
                   {user?.displayName}

                  </a>
                </li>
                {/* <li><a>Settings</a></li> */}
                <li onClick={handleLogOut}><a>Logout</a></li>
              </ul>
            </div>
              :
              ''
          }
        </div>
      </div>
    </>
  );
};

export default NavBar;