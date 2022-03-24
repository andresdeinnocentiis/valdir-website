import React from "react";
import { Link } from "react-router-dom";



const ButtonMailto = ({ mailto, label, style }) => {
    return (
        <Link
            style={style}
            to='#'
            onClick={(e) => {
                window.location = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    );
};

export default ButtonMailto;