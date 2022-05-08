import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1>Blog</h1>
            <div className="row">
                <div className="col-md-12 col-sm-12">
                    <div className="">
                        <h5>Difference between javascript and nodejs?</h5>
                        <p>
                            javascript: JavaScript is a programming language, which runs in web browsers. JavaScript mainly using for any client side activity for a web application. Java Script running any engine like Spider monkey(fire Fox), java Script Core (Safari), V8 (Google Chrome).
                            Node JS: Node js is an interpreter and environment for java Script. Node js mainly using for accessing or performing any non-blocking operation of any operating system. Node Js Only run in V8 engine which mainly using by google chrome.

                            Those are the difference between javascript and nodejs.
                        </p>
                    </div>
                    <div className="">
                        <h5> Differences between sql and nosql databases?</h5>
                        <p>
                            1. SQL databases are relational And NoSQL databases are non-relational.
                            2. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                            3. SQL databases are better for multi-row transactions And NoSQL is better for unstructured data like documents or JSON.
                            4. SQL databases are vertically scalable And NoSQL databases are horizontally scalable.
                            5.SQL databases are table-based And NoSQL databases are document, key-value, graph, or wide-column stores.

                        </p>
                    </div>
                    <div className="">
                        <h5>What is the purpose of jwt and how does it work?</h5>
                        <p>

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;