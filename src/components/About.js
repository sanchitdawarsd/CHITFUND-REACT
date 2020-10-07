import React, { useState, useEffect } from "react";

const About = ({
  createChitFund,
  ChitFundFactorycount,
  account,
  factories,
}) => {
  const [newChitFund, setNewChitFund] = useState({
    name: "",
    amount: "",
    installments: "",
    participants: "",
  });

  const { name, amount, installments, participants } = newChitFund;
  const onChange = (e) =>
    setNewChitFund({ ...newChitFund, [e.target.name]: e.target.value });

  const onsubmitt = (e) => {
    e.preventDefault();
    createChitFund(
      name,
      window.web3.utils.toWei(amount.toString(), "Ether"),
      installments,
      participants
    );
  };

  return (
    <div>
      <main>
        <div
          class="slider-area slider-height"
          data-background="assets/img/hero/h1_hero.jpg"
        >
          <div class="slider-active">
            <div class="single-slider">
              <div class="slider-cap-wrapper">
                <div class="hero__caption">
                  <p data-animation="fadeInLeft" data-delay=".2s">
                    Achieve your financial goal
                  </p>
                  <h1 data-animation="fadeInLeft" data-delay=".5s">
                    Small Business Loans For Daily Expenses.
                  </h1>
                  <p data-animation="fadeInLeft" data-delay=".2s">
                    <span
                      style={{
                        color: "#000000",
                      }}
                      class="fontfirst"
                    >
                      {/* jackpot:
                      {window.web3.utils.fromWei(viewfund[1], "ether")} ether */}
                    </span>{" "}
                    <span
                      style={{
                        color: "#000000",
                      }}
                      class="fontfirst"
                    >
                      {/* {factories} */}
                      {/* No of Installments :{viewfund[2]} */}
                    </span>
                    <span
                      style={{
                        color: "#000000",
                      }}
                      class="fontfirst"
                    >
                      {/* No of Investors :{viewfund[3]} */}
                    </span>
                    <span
                      style={{
                        color: "#000000",
                      }}
                      class="fontfirst"
                    >
                      {/* No of Investors Joined :{viewfund[6]} */}
                    </span>
                    <span
                      style={{
                        color: "#000000",
                      }}
                      class="fontfirst"
                    >
                      {/* Installment Amount :
                      {window.web3.utils.fromWei(viewfund[5], "ether")} ether{" "} */}
                    </span>
                    <span
                      style={{
                        color: "#000000",
                      }}
                      class="fontfirst"
                    >
                      {/* Fund Balance :
                      {window.web3.utils.fromWei(viewfund[4], "ether")} ether */}
                    </span>
                  </p>
                </div>
                <div class="hero__img">
                  <img src="assets/img/hero/hero_img2.jpg" alt="" />
                </div>
              </div>
            </div>

            {/* <div class="single-slider">
                      <div class="slider-cap-wrapper">
                        <div class="hero__caption">
                          <h1 data-animation="fadeInLeft" data-delay=".5s">
                            Small Business Loans For Daily Expenses.
                          </h1>
                        </div>
                        <div class="hero__img">
                          <img src="assets/img/hero/hero_img2.jpg" alt="" />
                        </div>
                      </div>
                    </div> */}
          </div>

          {/* 
                  <div class="slider-footer section-bg d-none d-sm-block">
                    <div class="footer-wrapper">
                      <div class="single-caption">
                        <div class="single-img">
                          <img src="assets/img/hero/hero_footer.png" alt="" />
                        </div>
                      </div>

                      <div class="single-caption">
                        <div class="caption-icon">
                          <span class="flaticon-clock"></span>
                        </div>
                        <div class="caption">
                          <p>Quick & Easy Loan</p>
                          <p>Approvals</p>
                        </div>
                      </div>
                      <div class="single-caption">
                        <div class="caption-icon">
                          <span class="flaticon-like"></span>
                        </div>
                        <div class="caption">
                          <p>Quick & Easy Loan</p>
                          <p>Approvals</p>
                        </div>
                      </div>
                      <div class="single-caption">
                        <div class="caption-icon">
                          <span class="flaticon-money"></span>
                        </div>
                        <div class="caption">
                          <p>Quick & Easy Loan</p>
                          <p>Approvals</p>
                        </div>
                      </div>
                    </div>
                  </div> */}
        </div>
        <div class="container pt-50 pb-150">
          <form onSubmit={onsubmitt}>
            <div className="form-group">
              <input
                id="name"
                type="text"
                className="form-control"
                placeholder="name"
                name="name"
                value={name}
                onChange={onChange}
                required
              />

              <input
                id="amount"
                type="text"
                className="form-control"
                placeholder="amount"
                name="amount"
                value={amount}
                onChange={onChange}
                required
              />
              <input
                id="installments"
                type="text"
                className="form-control"
                placeholder="installments"
                name="installments"
                value={installments}
                onChange={onChange}
                required
              />
              <input
                id="participants"
                type="text"
                className="form-control"
                placeholder="participants"
                name="participants"
                value={participants}
                onChange={onChange}
                required
              />
            </div>
            <div style={{ position: "absolute", left: "43%" }}>
              <button type="submit" className="btn btn-primary">
                Create a New Chit Fund
              </button>
            </div>
          </form>
        </div>

        {/* 
                <div class="about-low-area section-padding2">
                  <div class="container">
                    <div class="row">
                      <div class="col-lg-6 col-md-12">
                        <div class="about-caption mb-50">
                          <div class="section-tittle mb-35">
                            <span>About Our Company</span>
                            <h2>Detials of our funders of the comapany</h2>
                          </div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, oeiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut eniminixm, quis nostrud
                            exercitation ullamco laboris nisi ut aliquip
                            exeaoauat. Duis aute irure dolor in reprehe.
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, oeiusmod tempor incididunt ut labore et dolore
                            magna aliq.
                          </p>
                          <a href="apply.html" class="btn">
                            Apply for Loan
                          </a>
                        </div>
                      </div>
                      <div class="col-lg-6 col-md-12">
                        <div class="about-img">
                          <div class="about-font-img d-none d-lg-block">
                            <img src="assets/img/gallery/about2.png" alt="" />
                          </div>
                          <div class="about-back-img">
                            <img src="assets/img/gallery/about1.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}

        {/* <div class="support-company-area section-padding3 fix">
                  <div class="container">
                    <div class="row align-items-center">
                      <div class="col-xl-6 col-lg-6">
                        <div class="support-location-img mb-50">
                          <img src="assets/img/gallery/single2.jpg" alt="" />
                          <div class="support-img-cap">
                            <span>Since 1992</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-6 col-lg-6">
                        <div class="right-caption">
                          <div class="section-tittle">
                            <span>Why Choose Our Company</span>
                            <h2>We Promise Sustainable Future For You.</h2>
                          </div>
                          <div class="support-caption">
                            <form onSubmit={onsubmit}>
                              <div className="form-group">
                                <input
                                  id="bidding"
                                  type="text"
                                  className="form-control"
                                  placeholder="bidding price"
                                  name="bidding"
                                  value={bidding}
                                  onChange={onChange}
                                  required
                                />
                              </div>
                              <button type="submit" className="btn btn-primary">
                                Bid For Jackpot
                              </button>
                            </form>

                            <div class="select-suport-items pt-2">
                              <label class="single-items">
                                Aorem ipsum dgolor sitnfd amet dfgbn fbsdg
                                <input
                                  type="checkbox"
                                  checked="checked active"
                                />
                                <span class="checkmark"></span>
                              </label>
                              <label class="single-items">
                                Consectetur adipisicing bfnelit, sedb dvbnfo
                                <input
                                  type="checkbox"
                                  checked="checked active"
                                />
                                <span class="checkmark"></span>
                              </label>
                              <label class="single-items">
                                Eiusmod tempor incididunt vmgldupout labore
                                <input
                                  type="checkbox"
                                  checked="checked active"
                                />
                                <span class="checkmark"></span>
                              </label>
                              <label class="single-items">
                                Admkde mibvnim veniam, quivds cnostrud.
                                <input
                                  type="checkbox"
                                  checked="checked active"
                                />
                                <span class="checkmark"></span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
        {/* team  */}
        {/* <div
                  class="application-area pt-150 pb-140"
                  data-background="assets/img/gallery/section_bg03.jpg"
                >
                  <div class="container">
                    <div class="row justify-content-center">
                      <div class="col-lg-6 col-md-10">
                        <div class="section-tittle section-tittle2 text-center mb-45">
                          <span>Apply in Three Easy Steps</span>
                          <h2>
                            Easy Application Process For Any Types of Loan
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div class="row justify-content-center">
                      <div class="col-lg-9 col-xl-8">
                        <form action="#" class="search-box">
                          <div class="select-form">
                            <div class="select-itms">
                              <select name="select" id="select1">
                                <option value="">Select Amount</option>
                                <option value="">$120</option>
                                <option value="">$700</option>
                                <option value="">$750</option>
                                <option value="">$250</option>
                              </select>
                            </div>
                          </div>
                          <div class="select-form">
                            <div class="select-itms">
                              <select name="select" id="select1">
                                <option value="">Duration Month</option>
                                <option value="">7 Days</option>
                                <option value="">10 Days</option>
                                <option value="">14 Days Days</option>
                                <option value="">20 Days</option>
                              </select>
                            </div>
                          </div>
                          <div class="input-form">
                            <input type="text" placeholder="Return Amount" />
                          </div>
                          <div class="search-form">
                            <a href="apply.html">Apply for Loan</a>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div> */}

        {/* <div class="team-area section-padding30">
                  <div class="container">
                    <div class="row justify-content-center">
                      <div class="cl-xl-7 col-lg-8 col-md-10">
                        <div class="section-tittle text-center mb-70">
                          <span>Our Loan Section Team Mambers</span>
                          <h2>Take a look to our professional team members.</h2>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="single-team mb-30">
                          <div class="team-img">
                            <img
                              src="assets/img/gallery/home_blog1.png"
                              alt=""
                            />

                            <div class="team-social">
                              <li>
                                <a href="#">
                                  <i class="fab fa-facebook-f"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i class="fab fa-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i class="fas fa-globe"></i>
                                </a>
                              </li>
                            </div>
                          </div>
                          <div class="team-caption">
                            <h3>
                              <a href="#">Bruce Roberts</a>
                            </h3>
                            <p>Volunteer leader</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="single-team mb-30">
                          <div class="team-img">
                            <img
                              src="assets/img/gallery/home_blog2.png"
                              alt=""
                            />

                            <div class="team-social">
                              <li>
                                <a href="#">
                                  <i class="fab fa-facebook-f"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i class="fab fa-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i class="fas fa-globe"></i>
                                </a>
                              </li>
                            </div>
                          </div>
                          <div class="team-caption">
                            <h3>
                              <a href="#">Bruce Roberts</a>
                            </h3>
                            <p>Volunteer leader</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="single-team mb-30">
                          <div class="team-img">
                            <img
                              src="assets/img/gallery/home_blog3.png"
                              alt=""
                            />

                            <div class="team-social">
                              <li>
                                <a href="#">
                                  <i class="fab fa-facebook-f"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i class="fab fa-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i class="fas fa-globe"></i>
                                </a>
                              </li>
                            </div>
                          </div>
                          <div class="team-caption">
                            <h3>
                              <a href="#">Bruce Roberts</a>
                            </h3>
                            <p>Volunteer leader</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-lg-3 col-md-4 col-sm-6">
                        <div class="single-team mb-30">
                          <div class="team-img">
                            <img
                              src="assets/img/gallery/home_blog4.png"
                              alt=""
                            />

                            <div class="team-social">
                              <li>
                                <a href="#">
                                  <i class="fab fa-facebook-f"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i class="fab fa-twitter"></i>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i class="fas fa-globe"></i>
                                </a>
                              </li>
                            </div>
                          </div>
                          <div class="team-caption">
                            <h3>
                              <a href="#">Bruce Roberts</a>
                            </h3>
                            <p>Volunteer leader</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
               </div> */}

        {/* 
                <div class="home-blog-area section-padding30">
                  <div class="container">
                    <div class="row justify-content-center">
                      <div class="col-lg-7 col-md-10">
                        <div class="section-tittle text-center mb-70">
                          <span>News form our latest blog</span>
                          <h2>News from around the world selected by us.</h2>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="single-blogs mb-30">
                          <div class="blog-images">
                            <img src="assets/img/gallery/blog1.png" alt="" />
                          </div>
                          <div class="blog-captions">
                            <span>January 28, 2020</span>
                            <h2>
                              <a href="blog_details.html">
                                The advent of pesticides brought in its benefits
                                and pitfalls.
                              </a>
                            </h2>
                            <p>October 6, a2020by Steve</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-6 col-lg-6 col-md-6">
                        <div class="single-blogs mb-30">
                          <div class="blog-images">
                            <img src="assets/img/gallery/blog2.png" alt="" />
                          </div>
                          <div class="blog-captions">
                            <span>January 28, 2020</span>
                            <h2>
                              <a href="blog_details.html">
                                The advent of pesticides brought in its benefits
                                and pitfalls.
                              </a>
                            </h2>
                            <p>October 6, a2020by Steve</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}

        {/* {factories.map((home) => (
          <div>{home.name}</div>
        ))} */}

        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">manager</th>
                <th scope="col">chitfund</th>
              </tr>
            </thead>
            <tbody>
              {factories.map((factory, key) => {
                return (
                  <tr key={factory.count.toString()}>
                    <th scope="row">{factory.count.toString()}</th>
                    <td>{factory.chitfund}</td>

                    <td>{factory.manager}</td>
                    <td>
                      {account !== factory.manager ? (
                        <button
                          className="btn btn-primary"
                          name={factory.manager}
                          value={factory.manager}
                        >
                          Buy
                        </button>
                      ) : (
                        <button className="btn btn-success">Owned</button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default About;
