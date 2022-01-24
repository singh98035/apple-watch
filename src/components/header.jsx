import React from "react";
import "./header.css";

function Header() {
    return <header>


        <img className="header-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAyCAYAAAAqRkmtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJVSURBVHgB1ZqBVcIwEIavPAdwhLIBTmCdQJ1A3AAnECZAJwAnUCcAJwAnoBuIE5z320TbkJY+4cHv995JaAz9uVyS6z1EDoiqpmb3ZgszFTZM06nZWAOECefFlW7yISw4kR8a50UYaPCkpy8MmJBJg8iVMOC8qf/dmzNhoSE2cT0VBrTYM2MsaESCSHxiexrKjpzI/lmbTc3ezZZJksxlDyRt/gnTaS99s3Oz1ImBvZrNTUzeYnzP7NIsc5+Ba7mzJT7rz1/KbpBhlep2EH/9MAbd+LHWn06xxdZvq88viGf9GzM3tq24GPdtRG47+g7FpKwriQjF8ZYKB1OL21s0OuWrJnIsPCKxWN/9mx+ParEQOJKFYie4Nm8u/YWyRyfCQ0Uk+BZq3syk2N8YGIUigffojXCQm8hhrMML7QkHj3UdHf093hiY13XAo6lwsI7FpgdCT4WDZVNnR3j4bOpkEtpYkGAS2rigIXQtHPTcDhSFSSgY1HV8JyVI/oQDOK1r29SG83yM5sIBpj6a3Xuhb8LDQCOPIl7oXLgYhmJ9jMLlSJpZTinPg8XrHRrlDB/Fq0z4yM3OykIze+GptFXpVp5Ctairs00/KjEX4RH6KHw84U/oUbZFhUeTLhoVj7oTgcmrI9+IVUrgzYUcP/P/8SbYSPOcV2/l+FyU30TzUVenPGYIjMKaa20h94ghUJlyT22G70IA7s/lcOQSTHlr9HD1UhR+d6svtBCLmzyYXWmpPI4ba1Ey31a9Xu0sMhA7VfejAAfaSMm2HhCR8fhyM7NBm/Ff+mAh7OV1VaUAAAAASUVORK5CYII=" alt="apple logo" />


        <nav>

            <div className="nav-list">
                <li><a href="#">Mac</a></li>
                <li><a href="#">iPhone</a></li>
                <li><a href="#">iPad</a></li>
                <li><div className="watch"><a id="iwatch" href="#">iWatch</a></div></li>
                <li><a href="#">Support</a></li>

            </div>
        </nav>


        <div className="header-right">
          <div className="search-box">
          <input type="text"
                placeholder="Search here"
            />
            <button className="searchbutton">
                <img className="searchIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEPSURBVHgB3ZWNDYIwEIUvTsAGdgRG6AiMgJPoBrBB3aRxAtygbuAIZ6vXcMXQ9kiIiV9yIdF3964/HAB/DSJqH8aHw5mJfutgKz5Z+bBYxgWtpHYo3vp4UoHwvPAi9H+P86qCpq0trljxq48mo218jMxE1RjErkaohBoJ2JKwY/vaVNaPK4mr1jmhIVEPQuicAiYnmkhUd2Bproqrz4newEbW8g+wM9zgQZ0cQQjb1nvO4EbPE8hZNeBdaPbSSK+po9yuJLbF6/adMxRvEBPzUTFUjAqDMxpqwHTYOfwMtnbRxJlpkGlVrYnC9BuwhqWzc2ITMgrzKQyzadGp4VuyaEhmImgmMYE9YCb7GPyEFxKbIdn/jFayAAAAAElFTkSuQmCC"
                    alt=""
                />
            </button>
          </div>
        <div className="line-bag">

        <p className="line">
            <b>|</b>
        </p>
<img className="bag" 
 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADgSURBVHgB7ZXtEYIwDIZTzwEYATdhE9lANrAbwEY6ghvUDWSD2GjvqL2mbSryy+culGs+3gABALYGERtrBuUYyi0RGLGeMVf85AIf1loohGJdDjHUB6VFhlhzygswdmlhHe5KqUMogLAiVuBVe885agkb3cGPSQq42Ta1/jAYw8vzpqqJxDdMzsde7hbd3Bob26Nbr1AC003nvaWD65rs7O33uTpJh93SyKNL6/COt6+3dsHlTaXzjomVC0iQPuSv+QuIBGY6oOBHE+LlzjFnat6lTFwHEy7fnxooV8OWPAGbADDmh3c0ZgAAAABJRU5ErkJggg=="
alt=""
/>
        </div>
        </div>


    </header>
}

export default Header;