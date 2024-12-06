import React from "react"
import './index.css'
import logo from "../../Images/Abb Business logo.png"
const Header = () => {
    return (
        <div className="header">
            <div>
            <img src={logo} alt="Şəkil" />
            </div>
            <div className="language">
                <p className="azn">AZ</p>
                <p>EN</p>
                <p>RU</p>
            </div>
        </div>
    )
}
export default Header