import React from 'react';

const About = props => {
    return (
        <div>
            <h1>About this app</h1>
            <p className="my-1">
                This is a full stack React App for keeping contacts
            </p>
            <p className="bg-dark p">
                <strong>Version: </strong>1.0.0
            </p>    
        </div>
    )
}

About.propTypes = {

}

export default About
