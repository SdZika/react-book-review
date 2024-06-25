import './Footer.styles.css'

const Footer = () => {
    return (
        <footer>
            <div className='flexFooter'>
                <div className='containerFooterOne'>
                    <h3>About Us</h3>
                    <p>We are passionate about books and aim to create a community where book lovers can share reviews and discover new reads.</p>
                </div>
                <div className='containerFooterTwo'>
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>Browse Books</li>
                        <li>Submit Review</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className='containerFooterThree'>
                    <h3>Contact Us</h3>
                    <p>Email: info@bookreview.com</p>
                    <p>Phone: 123-456-789</p>
                </div>
            </div>
            <p>&copy; <span>2024</span> Book Club. All rights reserved.</p>
        </footer>
    )
}

export default Footer;