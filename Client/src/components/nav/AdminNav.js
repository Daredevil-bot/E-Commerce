import React from "react";
import { Link } from "react-router-dom";       //in this file we will form navbar for user/history page for  password history and wishlist

const AdminNav=()=>{
    return(
    <nav>
        <ul className="nav flex-column  ">
            <li className="nav-item" style={{display:"inline"}}>
                <Link to="/admin/dashboard" className="nav-link"style={{display:"inline-block",margin:'10px 0px 0px 0px '}}>
                    <span>DASHBOARD</span>
                    </Link>

            </li>
            <li className="nav-item" style={{display:"inline"}}>
                <Link to="/admin/product" className="nav-link"style={{display:"inline-block",margin:'10px 0px 0px 0px '}}>
                    PRODUCT
                    </Link>

            </li>
            <li className="nav-item" style={{display:"inline"}}>
                <span><Link to="/admin/products" className="nav-link"style={{display:"inline-block",margin:'10px 0px 0px 0px '}}>
                    PROUCTS
                    </Link>
                    </span>
            </li>
            <li className="nav-item" style={{display:"inline"}}>
                <Link to="/admin/category" className="nav-link"style={{display:"inline-block",margin:'10px 0px 0px 0px '}}>
                    CATEGORY
                    </Link>

            </li>
            <li className="nav-item" style={{display:"inline"}}>
                <Link to="/admin/sub" className="nav-link"style={{display:"inline-block",margin:'10px 0px 0px 0px '}}>
                    SUB_CATEGORY
                    </Link>

            </li>
            {/* <li className="nav-item" style={{display:"inline"}}>
                <Link to="/admin/coupon" className="nav-link" style={{display:'inline-block',margin:'10px 0px 0px 0px '}}>
                    COUPON
                    </Link>

            </li> */}
            <li className="nav-item" style={{display:"inline"}}>
                <Link to="/user/password" className="nav-link" style={{display:"inline-block",margin:'10px 0px 0px 0px '}}>
                    PASSWORD
                    </Link>

            </li>

        </ul>
    </nav>
    )
}
export default AdminNav