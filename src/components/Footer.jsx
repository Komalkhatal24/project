import React from 'react'
import './Footer.css'
import img from './images/footer.png'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-container">
            <div className="header">
                <h1 className="heading">features</h1>
            </div>
                <ul>
                    <li>Search</li>
                    <li>Evaluate</li>
                    <li>Rank</li>
                </ul>
        </div>
        <div className="footer-container">
            <div className="header">
                <h1 className="heading">About</h1>
            </div>
                <ul>
                    <li>Company</li>
                    <li>Career</li>
                    <li>Blog</li>
                </ul>
        </div>
        <div className="footer-container">
            <div className="header">
                <h1 className="heading">Support</h1>
            </div>
                <ul>
                    <li>FAQ</li>
                    <li>Contact</li>
                    <li>Terms</li>
                </ul>
        </div>
        <div className="footer-container">
            <img src={img} alt="footer" />
        </div>
    </footer>
  )
}

export default Footer