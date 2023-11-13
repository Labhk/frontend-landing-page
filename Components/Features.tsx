
const Features: React.FC = () => (
  <section  className="details-bgColor  overflow-x-hidden">
        <div  className="container py-5">
            <div  className="row align-items-center">
                <div  className="col-md-4">
                    <h4  className="display-5 lh-sm fw-bold pe-2 text-center-md">Our Features you cab get</h4>
                </div>
                <div  className="col-md text-center-md">
                    <div  className="d-flex align-items-center flex-wrap-md justify-content-center-md">
                        <div  className="flex-grow-1 ms-3">
                            <p  className="p text-gray-color">We offer a variety of interesting features that you can help
                                increase yor productivity at work and manage your projrct esaly</p>
                        </div>
                        <div  className="flex-shrink-0">
                            <button  className="btn btn-main rounded-pill" type="button">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
            <div  className="row py-5">
                <div  className="col-md-4 mt-4 text-center-md">
                    <img src=" /team.svg"  className="w-100 rounded-4" alt="" />
                    <p  className="fs-4 fw-bold mt-3 mb-1">Collboration Teams</p>
                    <p  className="p text-gray-color">Here you can handle projects together with team virtually</p>
                </div>
                <div  className="col-md-4 mt-4 text-center-md">
                    <img src=" /storage.svg"  className="w-100 rounded-4" alt="" />
                    <p  className="fs-4 fw-bold mt-3 mb-1">Cloud Storage</p>
                    <p  className="p text-gray-color">No nedd to worry about storage because we provide storage up to 2 TB
                    </p>
                </div>
                <div  className="col-md-4 mt-4 text-center-md">
                    <img src=" /daily_analytics.svg"  className="w-100 rounded-4" alt="" />
                    <p  className="fs-4 fw-bold mt-3 mb-1">Daily Analytics</p>
                    <p  className="p text-gray-color">We always provide useful informatin to make it easier for you every day
                    </p>
                </div>
            </div>
            <div  className="row position-relative py-5">
                <div  className="col-md-6">
                    <h4  className="display-5 lh-sm fw-bold text-center-md">What Benifit Will You Get</h4>
                    <ul  className="benifitsList">
                        <li  className="p">Free Consulting With Experet Saving Money</li>
                        <li  className="p">Online Banking</li>
                        <li  className="p">Investment Report Every Month</li>
                        <li  className="p">Saving Money For The Future</li>
                        <li  className="p">Online Transection</li>
                    </ul>
                </div>
                <div  className="col-md-6 text-end position-relative">
                    <img src=" /laptop_img.png"  className="heroSectionImg" />
                    <div  className="avatar-card p-2 position-absolute" style={{ width: '125px', top: '30%', right: '-5%' }}>
                        <div  className="d-flex align-items-end justify-content-between">
                            <div  className="fs-6 priceDetails">
                                <p  className="card-text text-gray-color mb-2 text-start">Total Income</p>
                                <p  className="card-amt mb-0 fw-bold  text-start">$450.00</p>
                            </div>
                            <div  className="card-button">
                                <img src=" /icons/bar_graphy.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div  className="avatar-card p-2 position-absolute" style={{ width: '200px', bottom: '-5%', left: '10%' }}>
                        <div  className="d-flex align-items-center">
                            <img src=" /icons/circlewithcheck.svg" alt="" />
                            <p  className="card-text mb-0 ms-1 text-start">Money Transfer Succesfull</p>
                        </div>
                    </div>
                    <div  className="avatar-card p-2 position-absolute" style={{ width: '225px', top: '5%', left: '5%' }}>
                        <div  className="d-flex align-items-center justify-content-evenly">
                            <img src=" /user4.png"  className="rounded-circle" style={{ width: '40px', height: '40px' }} alt="" />
                            <div  className="fs-6 priceDetails">
                                <p  className="card-amt mb-2 fw-bold text-start">Amanda Young</p>
                                <p  className="card-text text-gray-color mb-0 text-start">Expert Saving Money</p>
                            </div>
                            <img src=" /icons/textmsgBG.svg" style={{ width: '30px', height: '30px' }} alt="" />
                        </div>
                    </div>
                    <img src=" /icons/picturewithBG.svg"  className="position-absolute" style={{ top: '35%', left: '10%' }} alt="" />
                </div>
            </div>
            <div  className="py-5">
                <h4  className="display-5 lh-sm fw-bold text-center">Choose Plan <br/> That&#39;s Right For You</h4>
                <p  className="p mt-4 text-center text-gray-color">
                    Choose plan that works best for you, feel free to contact us
                </p>
                <div  className="d-flex justify-content-center">
                    <ul  className="nav nav-pills planTab">
                        <li  className="nav-item">
                            <a  className="nav-link" href="#">Bil Monthly</a>
                        </li>
                        <li  className="nav-item">
                            <a  className="nav-link active" href="#">Bil Yearly</a>
                        </li>
                    </ul>
                </div>
                <div  className="row align-items-center py-5">
                    <div  className="col-md-4">
                        <div  className="planCards">
                            <div  className="text-center">
                                <p  className="fs-4 fw-bold mt-3 mb-1 text-center">Free</p>
                                <p  className="p text-center">Have a go and test your superpowers</p>
                                <p  className="fs-1 fw-bold"><sup  className="fs-5 text-gray-color">$</sup>0</p>
                            </div>
                            <div  className="planCardinBG">
                                <ul  className="benifitsList">
                                    <li  className="p">2 Users</li>
                                    <li  className="p">2 Files</li>
                                    <li  className="p">Public Share & Comments</li>
                                    <li  className="p">Chat Support</li>
                                    <li  className="p">New income apps</li>
                                </ul>
                                <button  className="btn w-100" type="button">Signup for free</button>
                            </div>
                        </div>
                    </div>
                    <div  className="col-md-4">
                        <div  className="planCards active">
                            <div  className="text-center">
                                <p  className="fs-4 fw-bold mt-3 mb-1">Pro</p>
                                <p  className="p">Experiment the power of infinite possibilities</p>
                                <p  className="fs-1 fw-bold"><sup  className="fs-5">$</sup>8</p>
                                <p  className="btn" style={{ backgroundColor: '#85DAB9', color: '#fff' }}>Save $50 a year</p>
                            </div>
                            <div  className="planCardinBG">
                                <ul  className="benifitsList">
                                    <li  className="p">4 Users</li>
                                    <li  className="p">All apps</li>
                                    <li  className="p">Unlimited editable exports</li>
                                    <li  className="p">Folders and collaboration</li>
                                    <li  className="p">All incoming apps</li>
                                </ul>
                                <button  className="btn w-100" type="button">Go to pro</button>
                            </div>
                        </div>
                    </div>
                    <div  className="col-md-4">
                        <div  className="planCards">
                            <div  className="text-center">
                                <p  className="fs-4 fw-bold mt-3 mb-1 text-center">Business</p>
                                <p  className="p text-center">Unveil new superpowers and join the Design Leaque</p>
                                <p  className="fs-1 fw-bold"><sup  className="fs-5 text-gray-color">$</sup>16</p>
                            </div>
                            <div  className="planCardinBG">
                                <ul  className="benifitsList">
                                    <li  className="p">All the features of pro plan</li>
                                    <li  className="p">Account success Manager</li>
                                    <li  className="p">Single Sign-On (SSO)</li>
                                    <li  className="p">Co-conception pogram</li>
                                    <li  className="p">Collaboration-Soon</li>
                                </ul>
                                <button  className="btn w-100" type="button">Go to Business</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Features;
