import data from "./../data.json";
import { useState } from "react";

export default function MyProjects() {
    const [index, setIndex] = useState(0);
    const projectData = data.projects;
    const selectedProject = projectData[index];
    function handleClick() {
        if (index < data.projects.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    }
    return (
        <>
            <button onClick={handleClick}>Next</button>
            <h3>{selectedProject.name}</h3>
            <h4>{selectedProject.designer}</h4>
            <img src={selectedProject.photoURL} width="400px" alt={selectedProject.alt}></img >
        </>
    )
}