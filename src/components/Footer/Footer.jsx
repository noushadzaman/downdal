import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='footer-first-part'>
                <div>
                    <h2>DownDal</h2>
                    <h5>Unlock your career potential with us,<br></br> a trusted job company like Toptal. We match top talent<br></br> with exceptional opportunities, ensuring your success in <br></br>the ever-evolving job market. Join us for a brighter future.</h5>
                    <img src='public/images/Icons/Group 9969.png' alt="" />
                </div>

                <div>
                    <h2>Company</h2>
                    <p>About Us</p>
                    <p>Work</p>
                    <p>Latest News</p>
                    <p>Careers</p>
                </div>

                <div>
                    <h2>Product</h2>
                    <p>Prototype</p>
                    <p>Plans & Pricing</p>
                    <p>Customers</p>
                    <p>Integrations</p>
                </div>

                <div>
                    <h2>Support</h2>
                    <p>Help Desk</p>
                    <p>Sales</p>
                    <p>Become a Partner</p>
                    <p>Developers</p>
                </div>

                <div>
                    <h2>Contact</h2>
                    <p>524 Broadway , NYC<br></br>
                        +1 777 - 978 - 5570</p>
                </div>
            </div>
            <hr className='footer-hr' />
            <div className='footer-second-part'>
                <p>©2023 CareerHub. All Rights Reserved</p>
                <p>Powered by <span className='careerhub-span'>CareerHub</span></p>
            </div>
        </footer>
    );
};

export default Footer;