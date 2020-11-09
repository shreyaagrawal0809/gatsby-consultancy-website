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

                <h3>Pricing Strategies!!</h3>

                <p>
                  Deciding the price factor for any product is an important task
                  for any organization & product success is dependent on pricing
                  strategies. Right pricing can make a hit for a product however
                  wrong pricing may lead to failure of a product sales &
                  acceptance by the consumers. Prices for any products are based
                  on following pricing strategies-
                </p>

                <p>
                  <strong>Markup Pricing: </strong>It is the most elementary
                  type of pricing. It is formulated by adding as standard mark
                  up to the production cost. Markups prices are generally higher
                  seasonal items, items with high storage and handling cost &
                  demand inelastic items like life-saving drugs.
                </p>
                <p>
                  <strong>Target-Return Pricing: </strong>The firms determine
                  the price that would yield its target ROI. This can be
                  calculated only when the firm has estimated its unit cost and
                  estimated sales & demand are accurately known. It uses a
                  rational approach to arrive at mark up costs.
                </p>
                {/* <blockquote>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                    <cite>Tom Cruise</cite>
                                </blockquote> */}

                <p>
                  <strong>Perceived-Value Pricing: </strong>Perceived value
                  pricing is made up of several elements such as buyer's image
                  of the performance of the products, quality, customers
                  support, warranty, firm's reputation, and brand equity. The
                  purpose of pricing is not only to cover the cost but also to
                  capture the value of the product perceived by the customer.
                </p>

                <p>
                  <strong>Value Pricing: </strong>Value-based is pricing is
                  based on the customer's perception of the product of any
                  company. Price is determined based on how much the customer
                  wants to pay for a certain type of product & how is he
                  perceiving the value of the product.
                </p>
                <p>
                  <strong>EDLP: </strong>The EDLP prices mean Everyday low
                  prices for the products irrespective of the seasonality or
                  promotions. Companies ensure that customer gets everyday low
                  pricing. This strategy is used in big retail chains like
                  Wal-Mart.
                </p>
                <p>
                  <strong>Going-Rate Pricing: </strong>The firm bases its price
                  mainly on the competitor's price, charging the same, more or
                  less than the price of major competitors or market leaders.
                  The smaller firm follows the leader and changes the price only
                  when the market leader changes the prices.
                </p>
                <p>
                  <strong>Auction-Type Pricing </strong>In this type of pricing
                  products are auctioned basis on the online site especially in
                  the case of electronic products. Online companies run the
                  prices as the deal for 12 hours or more to clear off the
                  excess inventory.
                </p>
                <p>
                  From the above mentioned different pricing methods, companies
                  chose the right pricing methods according to the market in
                  which the company is operating or planning to operate.
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
