import React from 'react';

const TheHeader = () => {
  return (
    <header className="header">
      <h1 className="header__heading">shokika.css</h1>
      <p className="header__sub">A lightly modern reset CSS</p>
      <div className="header-guide">
        <div className="header-guide__item">
          <a href="#example" className="header-guide__button">
            Get started
          </a>
        </div>
        <div className="header-guide__item">
          <a
            href="https://github.com/hiro0218/shokika.css"
            className="header-guide__button--github"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
};

export default TheHeader;
