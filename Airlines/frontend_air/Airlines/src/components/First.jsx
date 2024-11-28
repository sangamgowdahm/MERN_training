import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import coverImg from './coverimg.jpg';
import './First.css';

function First() {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center text-center text-bg-dark"
        style={{
          backgroundImage: `url(${coverImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100vw",
        }}
      >
        <div className="cover-container text-white">
          <header className="mb-4">
            <nav className="nav justify-content-center">
              <a
                className="nav-link fw-bold px-3 active nav-hover"
                aria-current="page"
                href="#"
              >
                Home
              </a>
              <a
                className="nav-link fw-bold px-3 nav-hover"
                href="#"
              >
                Features
              </a>
              <a
                className="nav-link fw-bold px-3 nav-hover"
                href="#"
              >
                Contact
              </a>
            </nav>
          </header>

          <main>
            <h1 className="display-4 title-text">
              EXPLORE THE SKY
            </h1>
            <p className="lead subtitle-text">
              "Travel is the only thing you buy that makes you richer."
            </p>

            <Link
              to="/sign-in"
              className="btn btn-lg btn-light fw-bold border-white bg-white btn-hover"
            >
              Sign up
            </Link>
          </main>
        </div>
      </div>
    </>
  );
}

export default First;
