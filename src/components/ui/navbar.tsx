const Navbar = async () => {
  return (
    <div className="navbar bg-base-100" data-theme="dark">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Journals</a>
            </li>
            <li>
              <a>Posts</a>
              <ul className="p-2">
                <li>
                  <a>Recent</a>
                </li>
                <li>
                  <a>Popular</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Tourist Diary</a>
      </div>
      <div className="navbar-end">
        <a className="btn">Login/Signup</a>
      </div>
    </div>
  );
};

export default Navbar;
