import React from "react";

const TheHeader = () => {
  return (
    <header class="header">
      <h1 class="header__heading">shokika.css</h1>
      <p class="header__sub">A lightly modern reset CSS</p>
      <div class="header-guide">
        <div class="header-guide__item">
          <a href="#example" class="header-guide__button">
            Get started
          </a>
        </div>
        <div class="header-guide__item">
          <a
            href="https://github.com/hiro0218/shokika.css"
            class="header-guide__button--github"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
};

export default TheHeader;
