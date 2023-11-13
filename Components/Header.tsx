

const Header: React.FC = () => (
  <header className="pb-3 mb-4">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a href="#" className="text-decoration-none display-5 lh-sm fw-bold logo">Biccas</a>
                    <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <img src="/icons/menu_bar.svg" alt="" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Product</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">FAQ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Us</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <button className="btn text-gray-color">Login</button>
                            <button className="btn btn-main p-2">Sign Up</button>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
);

export default Header;
