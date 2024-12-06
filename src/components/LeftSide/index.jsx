import React from "react"
import './index.css'
import Header from "../Header"
import Form from "../Form"
import Footer from "../Footer"
const LeftSide = () => {
    return (
        <div className="left-side">
            <Header />
            <Form/>
            <Footer/>
         
        </div>
    )
}
export default LeftSide