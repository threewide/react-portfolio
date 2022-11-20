import React from 'react';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Footer() {
  return (
    <footer class="text-center">
        <div class="container">
            <section class="mb-4">
                <a
                    class="btn btn-link btn-floating btn-lg  m-1"
                    href="https://github.com/threewide"
                    role="button"
                    data-mdb-ripple-color="dark">
                        <FaGithub />
                </a>
                <a
                    class="btn btn-link btn-floating btn-lg  m-1"
                    href="https://www.linkedin.com/in/justin-collver-7a4828236/"
                    role="button"
                    data-mdb-ripple-color="dark">
                        <FaLinkedin />
                </a>
                <a
                    class="btn btn-link btn-floating btn-lg m-1"
                    href="https://www.facebook.com/justin.collver"
                    role="button"
                    data-mdb-ripple-color="dark">
                        <FaFacebook />
                </a>
            </section>
        </div>
    </footer>
  );
}

export default Footer;