import React from "react";
import "./FooterComp.css";

const FooterComp = () => {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <p className="col-sm">
                        &copy; {new Date().getFullYear()} Maciej Kłonicki | All rights reserved | Terms of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    )
}

export default FooterComp;