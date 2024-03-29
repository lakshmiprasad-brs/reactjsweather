import React from "react";
import { Link } from "react-router-dom"

export const Layout = (props) => {

  const { children } = props;

  return (
    <>
      <header>
        <div className="d-flex bg-gradient">
          <div className="d-flex flex-grow-1">
            <nav className="courseTitle">
             
            </nav>
            <div className="flex-grow-1">
              <div className="ReactTitle ps-3  d-flex align-items-center">
                <h3 className="mb-0"> Weather</h3>
              </div>
              <div className="d-flex ps-3 align-items-center">
                <div className="flex-grow-1">
                  <h4> Reactjs Apps with APIs</h4>
                  
                </div>
                <div className="link me-3">
                  <p className="mb-0 py-0">
                    {" "}
                    <a href="https://openweathermap.org/api">
                    https://openweathermap.org/api
                    </a>
                    <img
                      src={require("../../noun-link.png")}
                      className="ms-2"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main role="main" className="container pt-5">
        {children}
      </main>

      <footer className="footer footer-dark">
        <div className="d-flex justify-content-between px-5">
          
        </div>
      </footer>
    </>
  )
}
