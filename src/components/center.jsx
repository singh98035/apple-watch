import React from "react";
import "./center.css";
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
                <img className="watch-1" src="https://inspiring-golick-7dd7d9.netlify.app/static/media/watch.eeb9bdb5cabb2bed109a.png" alt="" />

                <div className="shadow"></div>
                <div className="watch-options">
                    <div className="parent">
                        <div className="gray">

                            <img className="watch-align" src="https://inspiring-golick-7dd7d9.netlify.app/static/media/greyWatch.975a942ebadb5370781f.png" alt="" />
                        </div>
                    </div>
                    <div className="parent">
                        <div className="lightgreen">
                            <img className="watch-align"  src="https://inspiring-golick-7dd7d9.netlify.app/static/media/cyanWatch.198946790f49efc087cb.png" alt="" />
                        </div>
                    </div>
                    <div className="parent">
                        <div className="pink">
                            <img className="watch-align" src="https://inspiring-golick-7dd7d9.netlify.app/static/media/babyPink.84f6bd7d58f50e57c096.png" alt="" />
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