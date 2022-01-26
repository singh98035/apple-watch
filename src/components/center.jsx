import React from "react";
import "./center.css";
import watch1 from "../images/1.png";
import watch2 from "../images/2.png";
import watch3 from "../images/3.png";
import watch4 from "../images/4.png";

function Center() {
    return <div className="center">
        <div className="text">
            <p className="text-center">
                <b>The Perfect Moment</b><br />
                Between Past And <br />
                Future
            </p>
            <button className="buy-button"> Buy Now</button>
        </div>
        <div className="watch-option">
            <div className="alocation">
                <img className="watch-1" src={watch1} alt="" />

                <div className="shadow"></div>
                <div className="watch-options">
                    <div className="parent">
                        <div className="gray">

                            <img className="watch-align" src={watch2} alt="" />
                        </div>
                    </div>
                    <div className="parent">
                        <div className="lightgreen">
                            <img className="watch-align"  src={watch3} alt="" />
                        </div>
                    </div>
                    <div className="parent">
                        <div className="pink">
                            <img className="watch-align" src={watch4} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="colorbar">
                    <div className="dot"></div>
                    <div className="circle color-1"></div>
                    <div className="circle color-2"></div>
                    <div className="circle color-3"></div>
                    <div className="circle color-4"></div>
                </div>
            </div>
        </div>

    </div>
}


export default Center;