import React from "react"
import './index.css'
const Form = () => {
  return (
    <div className="form">
      <div className="main">
        <div className="title">
          <p>ASAN IMZA</p>
          <p>/KOBIL OTP</p>
        </div>
        <div className="mobilphone">
          <label htmlFor="tel">Asan imza mobil nömrəsi</label>
          <input type="text" name="tel" />
        </div>

        <div className="asanUserId">
          <label htmlFor="userId">Asan imza istifadəçi İD-si</label>
          <input type="userId" name="userId" />
        </div>
        <button className="continue">Davam et</button>
        <p className="or">ve ya</p>
        <button className="register">Qeydiyyat</button>
      </div>

    </div>
  )
}
export default Form