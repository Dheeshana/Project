import React, {Component} from "react";
import {Link} from 'react-router-dom';

class M_navbar extends Component{
    render() {
        return(
            <nav className={"navbar navbar-dark bg-dark navbar-expand-lg"}>
                <Link to={"/"} className={"navbar-brand"}>Home Page</Link>
                <div className={"collapse navbar-collapse"}>
                    <ul className={"navbar-nav mr-auto"}>
                        <li className={"navbar-item"}>
                            <Link to={"/manager"} className={"nav-link"}>Manager</Link>
                        </li>
                        <li className={"navbar-item"}>
                            <Link to={"/create"} className={"nav-link"}>Create Product Details</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default M_navbar;