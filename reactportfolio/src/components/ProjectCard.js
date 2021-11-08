import React, { Fragment } from 'react'

export const ProjectCard = (props) => {
    return (
        <Fragment>
            <figure>
                <img className="apppic" src={props.projectImg} width="320px" alt="placeholder"></img>
            </figure>
            <div className="appdesc">
                <h2 className="apph2">
                    {props.project}
                </h2>
                <p>
                    {props.desc}
                </p>
            
           
                <button className="deploy"> {props.key} Deployed Link</button>
                <button className="github"> {props.key} Github Link</button>
            </div>
            
        </Fragment>
    )
}

// function ProjectCard (props) {

// });