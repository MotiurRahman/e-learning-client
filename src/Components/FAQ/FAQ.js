import React from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQ = () => {
  return (
    <div className="container mt-2 mt-lg-5">
      <h4>REACT FAQ</h4>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>How can I make an AJAX call?</Accordion.Header>
          <Accordion.Body>
            You can use any AJAX library you like with React. Some popular ones
            are Axios, jQuery AJAX, and the browser built-in window.fetch.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            How do I pass an event handler (like onClick) to a component?
          </Accordion.Header>
          <Accordion.Body>
            Pass event handlers and other functions as props to child
            components: If you need to have access to the parent component in
            the handler, you also need to bind the function to the component
            instance (see below).
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            How do I bind a function to a component instance?
          </Accordion.Header>
          <Accordion.Body>
            There are several ways to make sure functions have access to
            component attributes like this.props and this.state, depending on
            which syntax and build steps you are using.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>What does setState do?</Accordion.Header>
          <Accordion.Body>
            setState() schedules an update to a component’s state object. When
            state changes, the component responds by re-rendering.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            What is the difference between state and props?
          </Accordion.Header>
          <Accordion.Body>
            props (short for “properties”) and state are both plain JavaScript
            objects. While both hold information that influences the output of
            render, they are different in one important way: props get passed to
            the component (similar to function parameters) whereas state is
            managed within the component (similar to variables declared within a
            function). Here are some good resources for further reading on when
            to use props vs state: Props vs State ReactJS: Props vs. State
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FAQ;
