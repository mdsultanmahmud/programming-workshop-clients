import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
const FAQ = () => {
    return (
        <div>
            <h4 className='bg-danger text-white py-4 text-center mt-3'>Frequently Asked Question</h4>
            <Accordion style={{ width: '70%' }} className='mx-auto my-5' defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header> what is cors?</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>What is JavaScript?</Accordion.Header>
                    <Accordion.Body>
                        JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What Is HTML Used For?</Accordion.Header>
                    <Accordion.Body>
                        Hypertext Markup Language, or HTML, is a programming language used to describe the structure of web pages. HTML makes it possible to create static pages with text, headings, tables, lists, images, links, and so on.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>What is CSS explain??</Accordion.Header>
                    <Accordion.Body>

                        Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Is CSS a programming or coding??</Accordion.Header>
                    <Accordion.Body>
                        The main reason why HTML and CSS aren't considered programming languages is because they only determine the structure and the style of the webpage you're building. They don't contain any instructions like the other front-end languages
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
}

export default FAQ;