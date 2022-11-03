import React from 'react';

const Blogs = () => {
    return (
        <div className="container">
            <h1 className="text-center text-primary">Question and Answer</h1>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne"
                            aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOne"
                        >
                            Difference between javascript and nodejs
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="panelsStayOpen-headingOne"
                    >
                        <div className="accordion-body">
                            JavaScript is a programming language. It is running in any web
                            browser with a proper browser engine. It is an interpreter and
                            environment for JavaScript with some specific useful libraries
                            which JavaScript programming can use separately.Mainly using for
                            any client-side activity for a web application, like possible
                            attribute validation or refreshing the page in a specific interval
                            or provide some dynamic changes in web pages without refreshing
                            the page. It mainly used for accessing or performing any
                            non-blocking operation of any operating system, like creating or
                            executing a shell script or accessing any hardware-specific
                            information or running any backend job.JavaScript running any
                            engine like Spider monkey (FireFox), JavaScript Core (Safari), V8
                            (Google Chrome).Node JS only run in a V8 engine which mainly used
                            by google chrome. And javascript program which will be written
                            under this Node JS will be always run in V8 Engine.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseTwo"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseTwo"
                        >
                            When should you use nodejs and when should you use mongodb..???
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingTwo"
                    >
                        <div className="accordion-body">
                            NodeJS and MongoDB are two different process.NodeJS is a
                            JavaScript runtime environment. It's actually helps JavaScript to
                            run outside of server. It's used in server side development.But,
                            MongoDB is NoSQL database which is document oriented. It
                            represents data as of JSON documents. It's used for store data.The
                            summary is MongoDB is a database where we can store data and
                            NodeJS helps us to to connect our client site to database by it's
                            server site.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThree"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree"
                        >
                            Differences between sql and nosql databases..???
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingThree"
                    >
                        <div className="accordion-body">
                            SQL databases are relational, NoSQL databases are
                            non-relational.SQL databases use structured query language and
                            have a predefined schema. NoSQL databases have dynamic schemas for
                            unstructured data.SQL databases are vertically scalable, while
                            NoSQL databases are horizontally scalable.SQL databases are
                            table-based, while NoSQL databases are document, key-value, graph,
                            or wide-column stores.SQL databases are better for multi-row
                            transactions, while NoSQL is better for unstructured data like
                            documents or JSON.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThree"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree"
                        >
                            What is the purpose of jwt and how does it work..???
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseFour"
                        className="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingFour"
                    >
                        <div className="accordion-body">
                            JWT, or JSON Web Token, is an open standard used to share security
                            information between two parties — a client and a server.JWTs
                            differ from other web tokens in that they contain a set of claims.
                            Claims are used to transmit information between two parties. What
                            these claims are depends on the use case at hand. For example, a
                            claim may assert who issued the token, how long it is valid for,
                            or what permissions the client has been granted.In short, JWTs are
                            used as a secure way to authenticate users and share
                            information.Typically, a private key, or secret, is used by the
                            issuer to sign the JWT. The receiver of the JWT will verify the
                            signature to ensure that the token hasn’t been altered after it
                            was signed by the issuer. It is difficult for unauthenticated
                            sources to guess the signing key and attempt to change the claims
                            within the JWT.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;