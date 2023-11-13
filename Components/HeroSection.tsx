import Header from "./Header";

const HeroSection: React.FC = () => (
  <div className="header-bg pb-5 overflow-x-hidden">
        <Header/>

        <div className="container pb-3 mb-4">
            <div className="row">
                <div className="col-md-6 mt-5 text-center-md">
                    <h1 className="display-4 lh-sm fw-bold hero-section-heading">We&#39;re here to Increase your Productivity
                    </h1>
                    <p className="p">Let's make your work more organize and easily using the Taskio
                        Dashboard with many of the latest featuresin managing work every day.</p>
                    <button className="btn btn-main rounded-pill" type="button">Try free trial</button>
                    <button className="btn fs-6" type="button"><img src="/icons/play.svg" className="icons" alt="" />
                        View Demo</button>
                </div>
                <div className="col-md-6 text-end position-relative mt-5">
                    <img src="/heroSectionImg.png" className="heroSectionImg" />
                    <div className="avatar-card p-2 position-absolute" style={{top: "5%", left: "5%"}}>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="fs-6 priceDetails">
                                <p className="card-text text-gray-color mb-2 text-start">Enter amount</p>
                                <p className="card-amt mb-0 fw-bold text-start">$450.00</p>
                            </div>
                            <div className="card-button">
                                <button className="btn rounded-pill px-3 py-1">Send</button>
                            </div>
                        </div>
                        <hr className="mt-1 mb-0" />
                    </div>
                    <div className="avatar-card p-2 position-absolute" style={{width: "125px", bottom: "10%", left: "15%"}}>
                        <div className="d-flex align-items-end justify-content-between">
                            <div className="fs-6 priceDetails">
                                <p className="card-text text-gray-color mb-2 text-start">Total Income</p>
                                <p className="card-amt mb-0 fw-bold  text-start">$450.00</p>
                            </div>
                            <div className="card-button">
                                <img src="/icons/bar_graphy.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <img src="/icons/checkwithBg.svg" className="position-absolute" style={{top: "30%", left: "20%"}}  alt="" />
                    <img src="/icons/DBwithbg.svg" className="position-absolute" style={{top: "10%", right: "-2%"}}  alt="" />
                    <img src="/icons/creditCard.svg" className="position-absolute creditCardImg" style={{bottom: "5%", right: "-15%"}} alt="" />
                    <img src="/icons/msgwithBG.svg" className="position-absolute" style={{bottom: "-8%", left: "65%"}} alt="" />
                </div>
            </div>
        </div>

        <div className="container mt-5 py-5">
            <h4 className="fs-2 fw-bold text-center">More than 25,000 teams use Collabs</h4>
            <div className="d-flex flex-wrap justify-content-center mt-4">
                <img src="/unsplash.png" className="client-logo" alt="" />
                <img src="/notion.png" className="client-logo" alt="" />
                <img src="/intercom.png" className="client-logo" alt="" />
                <img src="/descript.png" className="client-logo" alt="" />
                <img src="/grammarly.png" className="client-logo" alt="" />
            </div>
        </div>
    </div>
);

export default HeroSection;
