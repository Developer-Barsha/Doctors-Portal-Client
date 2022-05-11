import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';


const CustomLink=({ children, to, ...props })=> {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ textDecoration: "none", borderRadius:'5px' }}
                className={match ? "bg-accent text-white py-1 px-2" : "accent"}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
  }

export default CustomLink;