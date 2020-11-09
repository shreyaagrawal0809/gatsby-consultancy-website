import React from "react";
import { Link } from "gatsby";
import BlogSidebar from "./BlogSidebar";
import img6 from "../../assets/images/blog/blog-img6.jpg";
import img4 from "../../assets/images/blog/blog-img4.jpg";
import img5 from "../../assets/images/blog/blog-img5.jpg";
import img7 from "../../assets/images/blog/blog-img7.jpg";
import img11 from "../../assets/images/blog/blog-img11.jpg";
import img12 from "../../assets/images/blog/blog-img12.jpg";
import user1 from "../../assets/images/user1.jpg";
import user2 from "../../assets/images/user2.jpg";
import user3 from "../../assets/images/user3.jpg";
import user4 from "../../assets/images/user4.jpg";

const BlogDetailsContent = () => {
  return (
    <section className="blog-details-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="blog-details-desc">
              <div className="article-image">
                <img src={img6} alt="bb" />
              </div>

              <div className="article-content">
                <div className="entry-meta">
                  <ul>
                    <li>
                      <i className="bx bx-folder-open"></i>
                      <span>Category</span>
                      <Link to="#">Fashion</Link>
                    </li>
                    <li>
                      <i className="bx bx-group"></i>
                      <span>View</span>
                      <Link to="#">813,454</Link>
                    </li>
                    <li>
                      <i className="bx bx-calendar"></i>
                      <span>Last Updated</span>
                      <Link to="#">25/04/2020</Link>
                    </li>
                  </ul>
                </div>

                <h3>Reliance - The Debt Free Empire!!</h3>

                <p>
                  Reliance Industries Limited (RIL) is one of the largest
                  private sector conglomerates in India. It is headquartered is
                  Mumbai, Maharashtra. Reliance’s businesses span a large array
                  of sectors, which includes refining and marketing,
                  petrochemicals, retail, oil & gas, digital services and media
                  & entertainment. The bulk of its revenue comes from its
                  operations in refining & marketing with its petrochemicals and
                  retail operations following close behind. Its subsidiaries
                  include Jio platforms, Reliance retail, Reliance Petroleum,
                  Jio Payments Bank, Network 18, Hathaway, DEN Networks,
                  Football Sports Development Ltd., and the Mumbai Indians. With
                  regard to the India, Reliance is one of its most profitable
                  companies accounting for almost 5% of the government’s revenue
                  for excise duty and customs. Reliance had almost $20 billion
                  in liabilities when they made decision official to go debt
                  free in a span of 18 months. Since then the conglomerate has
                  struck multiple deals with various stakeholders, both national
                  and global, and have since managed to raise enough capital to
                  cover more than half of their liabilities.
                </p>

                <p>
                  Reliance sold 22.2% shares in Jio platform & raised more than
                  Inr1.68L crore investment through sales of stake of 9.99% to
                  Facebook for Inr 53124 crore, 1.2% to TPG for Inr 4546 crore,
                  0.5% to L Catterton for Inr 1894 crore. Besides these Reliance
                  attracted some of the leading firms to invest in Reliance.
                  Silver Lake , the world’s largest technology investor
                  purchased 2.08% for more than Inr 10,000 crore . Private
                  Equity firm KKR and Vista have taken 2.32% stake each for Inr
                  11367 crore. Abhu Dhabi wealth fund Mubadala picked up 1.85%
                  for Inr 9093 crore and Abhu Dhabi investment authority
                  invested Inr 5683 crore for 1.16% stake. General Atlantic firm
                  picked 1.34% stake for Inr 6598 cr.
                </p>
                <p>
                  <strong>
                    There are number of internal & external factors, which were
                    helpful in achieving strategic decision of making the
                    company debt free.
                  </strong>
                </p>
                {/* <blockquote>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    <cite>Tom Cruise</cite>
                                </blockquote> */}

                <p>
                  <strong>Internal Factors:</strong>
                </p>

                <p>
                  <strong>Value Factors: </strong>The ethical beliefs, which
                  guide the organization in achieving its objective & mission,
                  are called value system. Any organizations, which value
                  system, is of high quality, they always get success. Value
                  system means organizational behavior towards all stakeholders.
                  If we analyze the value system of Reliance, it is very strong
                  & work towards only betterment of the stakeholders.
                </p>
                <p>
                  <strong>Mission and Objectives: </strong> Mission & objective
                  both are different terms. Objective can be to maximization of
                  the profit but mission is defined is overall purpose in the
                  business. Mission of the company decided in which business and
                  what corporate strategy to be used. In case of Reliance, the
                  mission is to become an excellent company to achieve the
                  global dominance. In current scenario Reliance seems to be
                  excellent company as most of the investors are multinational
                  companies such as Face book.
                </p>
                <p>
                  <strong>Organization Structure: </strong>Organizational
                  structure means composition of overall labor structure of the
                  company, number of independent directors & completely time
                  directors as well as professionals. Reliance overall
                  organizational structures is comprises world class
                  professional in different industries be it petroleum, retail
                  or in jiomart.
                </p>
                <p>
                  <strong>Quality of Human Resources: </strong> Quality of
                  employees is mainly the skills, qualification, experience,
                  capabilities, & attitude. It helps to run any organization to
                  meet objective & mission. Reliance has big & one of the
                  largest pool of dedicated employees who always work for
                  achieving the Reliance mission of becoming a global company.
                </p>
                <p>
                  <strong>Labor Unions: </strong> Labor union plays important
                  role in achieving the organization objectives. Good relations
                  with labor union also helping Reliance to achieving its
                  objective to be debt free.
                </p>
                <p>
                  <strong>
                    Physical Resources and Technological Capabilities:
                  </strong>
                  Physical resources & technological capabilities play an
                  important role in achieving the company mission. Reliance has
                  huge R&D capabilities in different industries be it petroleum,
                  retail, jio, jio mart.
                </p>
                <p>
                  <strong>External Factors for Reliance Industries:</strong>
                </p>
                <p>
                  <strong>Political:</strong> These include Government
                  interventions in working of business units. Government
                  policies play a major role for making a business unit
                  successful. If we analyze the policies of Indian Government,
                  they are not suitable in some cases for Reliance Industries to
                  achieve its objective to be debt free company. Government put
                  hold on selling stake to Saudi Arabia based Aramco delayed the
                  decision , investigation on tax invasion, cut import duties on
                  raw material of yarn also affected overall group towards
                  becoming debt free.
                </p>
                <p>
                  <strong>Economic: </strong>Economic factors are inflation,
                  interest rate, and disposal income of the consumers. In case
                  of India, disposable income of consumers is increasing. People
                  are spending more on luxury, use of internet, retail, and
                  travelling. Reliance industries mainly in all sectors of
                  business and changing the life of the consumers.
                </p>
                <p>
                  <strong>Social: </strong>Social factors are also supporting
                  growth of Reliance Industries. India has highest population of
                  young generation who is spending more on internet, shopping &
                  travelling and this is helping Reliance. The advantage for
                  Reliance is that numbers of users are increasing who are using
                  internet. Reliance has more than 350 Mn user base.
                </p>
                <p>
                  <strong>Technological: </strong>Technological innovation is
                  also helping Reliance. 4G, 5G internet and launch of Jio Mart
                  concept in which customer can order on whatsapp is going to be
                  big success, as it will reduce the delivery time of the
                  grocery items. Reliance is expanding its technological
                  footprints and coming up with new solutions.
                </p>
                <p>
                  <strong>Environmental: </strong>Environmental factors are also
                  stopping Reliance on expanding. Government puts different laws
                  on controlling pollution. However that is good for the country
                  but some how it also stopping the Reliance.
                </p>
                <p>
                  <strong>Legal legislations:</strong> Legal legislations are
                  basically corporate laws & policies formed by government. In
                  India, corporate laws are not so much favorable for businesses
                  .
                </p>
                <p>
                  In nutshell , Reliance Management shown a strategic business
                  action which led to company debt free in span of 18 month.
                </p>
                {/* <ul className="wp-block-gallery columns-3">
                                    <li className="blocks-gallery-item">
                                        <figure>
                                            <img src={img4} alt="bb" />
                                        </figure>
                                    </li>

                                    <li className="blocks-gallery-item">
                                        <figure>
                                            <img src={img5} alt="bb" />
                                        </figure>
                                    </li>

                                    <li className="blocks-gallery-item">
                                        <figure>
                                            <img src={img7} alt="bb" />
                                        </figure>
                                    </li>
                                </ul>

                                <h3>Four major elements that we offer:</h3>

                                <ul className="features-list">
                                    <li><i className='bx bx-badge-check'></i> Scientific skills for getting a better result</li>
                                    <li><i className='bx bx-badge-check'></i> Communication skills to getting in touch</li>
                                    <li><i className='bx bx-badge-check'></i> A career overview opportunity available</li>
                                    <li><i className='bx bx-badge-check'></i> A good work environment for work</li>
                                </ul>

                                <h3>Setting the mood with incense</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

                                <h3>The rise of marketing and why you need it</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                            </div>

                            <div className="article-footer">
                                <div className="article-tags">
                                    <span><i className='bx bx-purchase-tag'></i></span>

                                    <Link to="#">Fashion</Link>
                                    <Link to="#">Games</Link>
                                    <Link to="#">Travel</Link>
                                </div>

                                <div className="article-share">
                                    <ul className="social">
                                        <li><span>Share:</span></li>
                                        <li>
                                            <Link to="#" className="facebook">
                                                <i className='bx bxl-facebook'></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="twitter">
                                                <i className='bx bxl-twitter'></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="linkedin">
                                                <i className='bx bxl-linkedin'></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="instagram">
                                                <i className='bx bxl-instagram'></i>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="article-author">
                                <div className="author-profile-header"></div>
                                <div className="author-profile">
                                    <div className="author-profile-title">
                                        <img src={user1} className="shadow-sm" alt="uu" />
                                        <h4>Chris Orwig</h4>
                                        <span className="d-block">Photographer, Author, Writer</span>
                                        <p>Chris Orwig is a celebrated photographer, author, and writer who brings passion to everything he does. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="tracer-post-navigation">
                                <div className="prev-link-wrapper">
                                    <div className="info-prev-link-wrapper">
                                        <Link to="#">
                                            <span className="image-prev">
                                                <img src={img11} alt="bb" />
                                                <span className="post-nav-title">Prev</span>
                                            </span>

                                            <span className="prev-link-info-wrapper">
                                                <span className="prev-title">What Is The MLB Summer Slugger Program?</span>
                                                <span className="meta-wrapper">
                                                    <span className="date-post">January 21, 2020</span>
                                                </span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="next-link-wrapper">
                                    <div className="info-next-link-wrapper">
                                        <Link to="#">
                                            <span className="next-link-info-wrapper">
                                                <span className="next-title">28 Student-Centered Instructional Strategies</span>
                                                <span className="meta-wrapper">
                                                    <span className="date-post">January 19, 2020</span>
                                                </span>
                                            </span>

                                            <span className="image-next">
                                                <img src={img12} alt="bb" />
                                                <span className="post-nav-title">Next</span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="comments-area">
                                <h3 className="comments-title">2 Comments:</h3>

                                <ol className="comment-list">
                                    <li className="comment">
                                        <div className="comment-body">
                                            <div className="comment-meta">
                                                <div className="comment-author vcard">
                                                    <img src={user1} className="avatar" alt="uu" />
                                                    <b className="fn">John Jones</b>
                                                    <span className="says">says:</span>
                                                </div>

                                                <div className="comment-metadata">
                                                    <span>April 24, 2019 at 10:59 am</span>
                                                </div>
                                            </div>

                                            <div className="comment-content">
                                                <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                            </div>

                                            <div className="reply">
                                                <Link to="#" className="comment-reply-link">
                                                    Reply
                                                </Link>
                                            </div>
                                        </div>

                                        <ol className="children">
                                            <li className="comment">
                                                <div className="comment-body">
                                                    <div className="comment-meta">
                                                        <div className="comment-author vcard">
                                                            <img src={user2} className="avatar" alt="uu" />
                                                            <b className="fn">Steven Smith</b>
                                                            <span className="says">says:</span>
                                                        </div>

                                                        <div className="comment-metadata">
                                                            <a href="#">
                                                                <span>April 24, 2019 at 10:59 am</span>
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div className="comment-content">
                                                        <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                    </div>

                                                    <div className="reply">
                                                        <a href="#" className="comment-reply-link">Reply</a>
                                                    </div>
                                                </div>

                                                <ol className="children">
                                                    <li className="comment">
                                                        <div className="comment-body">
                                                            <div className="comment-meta">
                                                                <div className="comment-author vcard">
                                                                    <img src={user3} className="avatar" alt="uu" />
                                                                    <b className="fn">Sarah Taylor</b>
                                                                    <span className="says">says:</span>
                                                                </div>

                                                                <div className="comment-metadata">
                                                                    <a href="#">
                                                                        <span>April 24, 2019 at 10:59 am</span>
                                                                    </a>
                                                                </div>
                                                            </div>

                                                            <div className="comment-content">
                                                                <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                            </div>

                                                            <div className="reply">
                                                                <Link to="#" className="comment-reply-link">
                                                                    Reply
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </li>

                                    <li className="comment">
                                        <div className="comment-body">
                                            <div className="comment-meta">
                                                <div className="comment-author vcard">
                                                    <img src={user4} className="avatar" alt="uu" />
                                                    <b className="fn">John Doe</b>
                                                    <span className="says">says:</span>
                                                </div>

                                                <div className="comment-metadata">
                                                    <a href="#">
                                                        <span>April 24, 2019 at 10:59 am</span>
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="comment-content">
                                                <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                            </div>

                                            <div className="reply">
                                                <Link to="#" className="comment-reply-link">
                                                    Reply
                                                </Link>
                                            </div>
                                        </div>

                                        <ol className="children">
                                            <li className="comment">
                                                <div className="comment-body">
                                                    <div className="comment-meta">
                                                        <div className="comment-author vcard">
                                                            <img src={user1} className="avatar" alt="uu" />
                                                            <b className="fn">James Anderson</b>
                                                            <span className="says">says:</span>
                                                        </div>

                                                        <div className="comment-metadata">
                                                            <a href="#">
                                                                <span>April 24, 2019 at 10:59 am</span>
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div className="comment-content">
                                                        <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                    </div>

                                                    <div className="reply">
                                                        <Link to="#" className="comment-reply-link">
                                                            Reply
                                                        </Link>
                                                    </div>
                                                </div>
                                            </li>
                                        </ol>
                                    </li>
                                </ol>

                                <div className="comment-respond">
                                    <h3 className="comment-reply-title">Leave a Reply</h3>

                                    <form className="comment-form">
                                        <p className="comment-notes">
                                            <span id="email-notes">Your email address will not be published.</span>
                                            Required fields are marked
                                            <span className="required">*</span>
                                        </p>
                                        <p className="comment-form-author">
                                            <label>Name <span className="required">*</span></label>
                                            <input type="text" id="author" placeholder="Your Name*" name="author" required="required" />
                                        </p>
                                        <p className="comment-form-email">
                                            <label>Email <span className="required">*</span></label>
                                            <input type="email" id="email" placeholder="Your Email*" name="email" required="required" />
                                        </p>
                                        <p className="comment-form-url">
                                            <label>Website</label>
                                            <input type="url" id="url" placeholder="Website" name="url" />
                                        </p>
                                        <p className="comment-form-comment">
                                            <label>Comment</label>
                                            <textarea name="comment" id="comment" cols="45" placeholder="Your Comment..." rows="5" required="required"></textarea>
                                        </p>
                                        <p className="comment-form-cookies-consent">
                                            <input type="checkbox" value="yes" name="comment-cookies-consent" id="comment-cookies-consent" />
                                            <label>Save my name, email, and website in this browser for the next time I comment.</label>
                                        </p>
                                        <p className="form-submit">
                                            <input type="submit" name="submit" id="submit" className="submit" value="Post A Comment" />
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-12">
                        <BlogSidebar />
                    </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsContent;
