import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
    return(
        <header>
            <section>
            <div>
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
            <Link to="/BookingPage"><button aria-label="On Click">Reserve Table</button></Link>
            </div>
            <div>
                <img src="/images/littlelemonlogo.png" alt="logo"/>
            </div>
            </section>
        </header>
    )
}

export default Header;

