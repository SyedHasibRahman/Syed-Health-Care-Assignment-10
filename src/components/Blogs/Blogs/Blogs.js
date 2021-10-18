import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('syedhealthcare2.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, []);
    console.log(details);
    return (
        <div>
            <h2>This is Blogs</h2>
            <Blog></Blog>
        </div>
    );
};

export default Blogs;