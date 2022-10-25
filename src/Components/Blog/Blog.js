import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="mt-5">
      <h4 className="text-center">Welcome to the knowledge-sharing session</h4>
      <section className="queAnsSec">
        <h3>1. what is cors</h3>
        <p>
          <b>Answer: </b>Cross-Origin Resource Sharing (CORS) is an HTTP-header
          based mechanism that allows a server to indicate any origins (domain,
          scheme, or port) other than its own from which a browser should permit
          loading resources. CORS also relies on a mechanism by which browsers
          make a "preflight" request to the server hosting the cross-origin
          resource, in order to check that the server will permit the actual
          request. In that preflight, the browser sends headers that indicate
          the HTTP method and headers that will be used in the actual request.
        </p>
      </section>
      <section className="queAnsSec">
        <h3>
          2. Why are you using firebase? What other options do you have to
          implement authentication?
        </h3>
        <p>
          <b>Answer: </b>Firebase is a perfect platform for building an
          application that requires a bare minimum of options for integration
          with third-party tools and services as well as apps that do not need
          to process a lot of information or enable complex authentication
          requirements.
          <br />
          <br />
          <b>As and Altenative I can use following</b>
          <li>Back4App</li>
          <li>Parse</li>
          <li>AWS Amplify</li>
          <li>Backendless</li>
          <li>Kuzzle</li>
          <li>Supabase</li>
          <li>appwrite</li>
          <li>Hasura</li>
          <li>Nhost</li>
          <li>Deployd</li>
        </p>
      </section>
      <section className="queAnsSec">
        <h3>3. How does the private route work?</h3>
        <p>
          <b>Answer: </b>The react private route component renders child
          components ( children ) if the user is logged in. If not logged in the
          user is redirected to the /login page with the return url passed in
          the location state property.
        </p>
      </section>
      <section className="queAnsSec">
        <h3>4. What is Node? How does Node work?</h3>
        <p>
          <b>Answer: </b>Node is an open-source, cross-platform, back-end
          JavaScript runtime environment that runs on a JavaScript Engine and
          executes JavaScript code outside a web browser, which was designed to
          build scalable network applications.
          <br /> <br />
          It is a used as backend service where javascript works on the
          server-side of the application. This way javascript is used on both
          frontend and backend. Node. js runs on chrome v8 engine which converts
          javascript code into machine code, it is highly scalable, lightweight,
          fast, and data-intensive.
        </p>
      </section>
    </div>
  );
};

export default Blog;
