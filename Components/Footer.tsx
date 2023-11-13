

const Footer: React.FC = () => (
  <footer  className="pt-3 footer-bg">
        <div  className="container">
            <div  className="row py-5">
                <div  className="col-md-6 mt-5 text-center-md">
                    <h4  className="display-5 lh-sm fw-bold">People are Saying About DoWhith</h4>
                    <p  className="p mt-4 text-gray-color">
                        Everything you need to accept to payment and grow your money of manage anywhere on planet
                    </p>
                    <div  className="review">
                        <img src=" /icons/quotes.svg"  className="d-block mx-auto-md" />
                        <p  className="p mt-4 text-gray-color">I am very helped by this E-wallet application , my days are
                            very easy to use this application and its very helpful in my life , even I can pay a short time 😍</p>
                        <p  className="p mt-5 text-gray-color">_ Aria Zinanrio</p>
                        <div  className="d-flex flex-wrap reviewImg justify-content-center-md">
                            <img src=" /user1.png" alt="" />
                            <img src=" /user2.png" alt="" />
                            <img src=" /user3.png" alt="" />
                            <img src=" /user4.png" alt="" />
                            <img src=" /icons/light_play.svg" alt="" />
                        </div>
                    </div>
                </div>
                <div  className="col-md-6 mt-5">
                    <div  className="formBox">
                        <img src=" /icons/formLogo.svg"  className="d-block mx-auto" alt="" />
                        <p  className="fs-4 fw-bold mt-3 mb-1 text-center">Get Started</p>
                        <form>
                            <div  className="mb-3">
                                <label htmlFor="exampleInputEmail1"  className="form-label">Email</label>
                                <input type="email"  className="form-control" id="exampleInputEmail1"
                                    placeholder="Enter your email"/>
                            </div>
                            <div  className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1"  className="form-label">Message</label>
                                <textarea  className="form-control" id="exampleFormControlTextarea1" rows={3}
                                    placeholder="What are you say ?"></textarea>
                            </div>
                            <button type="submit"  className="btn btn-main w-100">Request Demo</button>
                            <p  className="text-end"><span  className="text-gray-color">or</span> Start Free Trial</p>
                        </form>
                    </div>
                </div>
            </div>
            <div  className="row pt-5 pb-2">
                <div  className="col-md-6">
                    <h4  className="display-5 lh-sm fw-bold logo">Biccas</h4>
                    <p  className="p text-gray-color">Get started noew try our product</p>
                    <form>
                        <div  className="position-relative inputwithButton">
                            <input type="email"  className="form-control rounded-pill" placeholder="Enter your email here"/>
                            <button  className="btn btn-main rounded-circle" type="button">
                                <img src=" /icons/arrow.svg" alt="" />
                            </button>
                        </div>
                    </form>
                </div>
                <div  className="col-md-6">
                    <div  className="row">
                        <div  className="col-md-4 mt-4">
                            <p  className="p">Support</p>
                            <ul  className="navbar-nav">
                                <li  className="nav-item">
                                    <a  className="nav-link px-0 py-1 text-gray-color" aria-current="page" href="#">Help
                                        centre</a>
                                </li>
                                <li  className="nav-item">
                                    <a  className="nav-link px-0 py-1 text-gray-color" aria-current="page" href="#">Account
                                        information</a>
                                </li>
                                <li  className="nav-item">
                                    <a  className="nav-link px-0 py-1 text-gray-color" aria-current="page" href="#">About</a>
                                </li>
                                <li  className="nav-item">
                                    <a  className="nav-link px-0 py-1 text-gray-color" aria-current="page" href="#">Contact
                                        us</a>
                                </li>
                            </ul>
                        </div>
                        <div  className="col-md-4 mt-4">
                            <p  className="p">Help and Solution</p>
                            <ul  className="navbar-nav">
                                <li  className="nav-item">
                                    <a  className="nav-link px-0 py-1 text-gray-color" aria-current="page" href="#">Talk to
                                        support</a>
                                </li>
                                <li  className="nav-item">
                                    <a  className="nav-link px-0 py-1 text-gray-color" aria-current="page" href="#">Support
                                        docs</a>
                                </li>
                                <li  className="nav-item">
                                    <a  className="nav-link px-0 py-1 text-gray-color" aria-current="page" href="#">System
                                        status</a>
                                </li>
                                <li  className="nav-item">
                                    <a  className="nav-link px-0 py-1 text-gray-color" aria-current="page" href="#">Covid
                                        responde</a>
                                </li>
                            </ul>
                        </div>
                        <div  className="col-md-4 mt-4">
                            <p  className="p">Product</p>
                            <ul  className="navbar-nav">
                                <li  className="nav-item">
                                    <a  className="nav-link px-0 py-1 text-gray-color" aria-current="page"
                                        href="#">Update</a>
                                </li>
                                <li  className="nav-item">
                                    <a  className="nav-link px-0 py-1 text-gray-color" aria-current="page"
                                        href="#">Security</a>
                                </li>
                                <li  className="nav-item">
                                    <a  className="nav-link px-0 py-1 text-gray-color" aria-current="page" href="#">Beta
                                        test</a>
                                </li>
                                <li  className="nav-item">
                                    <a  className="nav-link px-0 py-1 text-gray-color" aria-current="page" href="#">Pricing
                                        product</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div  className="d-flex flex-wrap justify-content-between mt-5">
                <p>&copy; 2022 Biccas Inc. Copyright and rights reserved</p>
                <div  className="d-flex">
                    <p><a href="#"  className="nav-link">Terms and Condtions</a></p>
                    <p><a href="#"  className="nav-link ms-3">Privacy Policy</a></p>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
