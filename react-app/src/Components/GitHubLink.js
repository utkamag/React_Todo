import React from 'react';
import GitHubSVG from '../assets/IMG/github-svgrepo-com.svg'

const GitHubLink = () => {
    return (
        <div className="gitHub">
            <img src={GitHubSVG} alt="GItHub"/>
            <a href="https://github.com/utkamag" className="gitHub_text">
                <div>utkamag</div>
            </a>
        </div>
    );
};

export default GitHubLink;