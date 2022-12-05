import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { useState } from 'react';

export default function Portfolio() {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div class="p-4">
        <h3>Portfolio</h3>
        <div class="container">
            <div class="row p-4">
                <div class="col p-4" 
                    style={{
                    backgroundColor: isHovering ? 'salmon' : '',
                    color: isHovering ? 'white' : '',
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                    <img src={require('./images/AutoAuto.jpg')} width="400px" height="400px" alt="AutoAuto website"/>
                    <a href='https://stormy-wildwood-35895.herokuapp.com/'>AutoAuto</a>
                    <a
                    class="btn btn-link btn-floating btn-lg  m-1"
                    href="https://github.com/AdamGabo/eStoreThatSellsCarStuff"
                    role="button"
                    data-mdb-ripple-color="dark">
                        <FaGithub />
                    </a>
                </div>
                <div class="col p-4">
                    <img src={require('./images/the-berg.jpg')} width="400px" height="400px" alt="The Berg directions"/>
                    <a href='https://sahebbhalla.github.io/BERG/'>The BERG</a>
                    <a
                    class="btn btn-link btn-floating btn-lg  m-1"
                    href="https://github.com/sahebbhalla/BERG/"
                    role="button"
                    data-mdb-ripple-color="dark">
                        <FaGithub />
                    </a>
                </div>
            </div>
            <div class="row p-4">
                <div class="col p-4">
                    <img src={require('./images/social-network-api.jpg')} width="400px" height="400px" alt="social network api example using Insomnia"/>
                    <a href='https://github.com/threewide/social-network-api'>Social Network API</a>
                    <a
                    class="btn btn-link btn-floating btn-lg  m-1"
                    href="https://github.com/threewide/social-network-api"
                    role="button"
                    data-mdb-ripple-color="dark">
                        <FaGithub />
                    </a>
                </div>
                <div class="col p-4">
                    <img src={require('./images/regex-tutorial-gist.jpg')} width="400px" height="400px" alt="Regex tutorial"/>
                    <a href='https://gist.github.com/threewide/0139193cd430807e91f0af4e75d4ec9b'>Regex Tutorial: Matching an Email</a>
                    <a
                    class="btn btn-link btn-floating btn-lg  m-1"
                    href="https://github.com/threewide/regex-tutorial"
                    role="button"
                    data-mdb-ripple-color="dark">
                        <FaGithub />
                    </a>
                </div>
            </div>
            <div class="row p-4">
                <div class="col p-4">
                    <img src={require('./images/npm-tests.jpg')} width="400px" height="400px" alt="npm tests passing"/>
                    <a href='https://github.com/threewide/North-Wilkesboro'>Team Profile Generator</a>
                    <a
                    class="btn btn-link btn-floating btn-lg  m-1"
                    href="https://github.com/threewide/North-Wilkesboro"
                    role="button"
                    data-mdb-ripple-color="dark">
                        <FaGithub />
                    </a>
                </div>
                <div class="col p-4">
                    <img src={require('./images/digital-marketing-meeting.jpg')} width="400px" height="400px" alt="Marketing Meeting"/>
                    <a href='https://github.com/threewide/project-find-zoro'>Digital Marketing Code Cleanup</a>
                    <a
                    class="btn btn-link btn-floating btn-lg  m-1"
                    href="https://github.com/threewide/project-find-zoro"
                    role="button"
                    data-mdb-ripple-color="dark">
                        <FaGithub />
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}