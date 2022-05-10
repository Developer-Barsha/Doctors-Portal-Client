import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';


const CustomLink=({ children, to, ...props })=> {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ textDecoration: "none", color: match ? "white" : "#3A4256", background: match ? "#3A4256" : "", padding:'5px 7px', borderRadius:'5px' }}
                // className={match ? "btn btn-asset" : "btn btn-ghost"}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
  }

export default CustomLink;