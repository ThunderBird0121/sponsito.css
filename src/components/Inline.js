import React from "react";

const Inline = () => {
  return (
    <>
      <h1 class="content__heading">Inline</h1>

      <div class="playground">
        <div class="playground__item">
          This is <a href="#">Anchor Link.</a>.
        </div>
        <div class="playground__item">
          Several species of <mark>salamander</mark> inhabit the temperate
          rainforest of the Pacific Northwest.
        </div>
        <div class="playground__item">
          <s>
            There will be a few tickets available at the box office tonight.
          </s>
        </div>
        <div class="playground__item">
          You could use this element to highlight <u>speling</u> mistakes, so
          the writer can <u>corect</u> them.
        </div>
        <div class="playground__item">
          <small>This line of text is meant to be treated as fine print.</small>
        </div>
        <div class="playground__item">
          ... the most important rule, the rule you can never forget, no matter
          how much he cries, no matter how much he begs:
          <strong>never feed him after midnight</strong>.
        </div>
        <div class="playground__item">
          Get out of bed <em>now</em>!
        </div>
        <div class="playground__item">
          You can use <abbr title="Cascading Style Sheets">CSS</abbr> to style
          your <abbr title="HyperText Markup Language">HTML</abbr>.
        </div>
        <div class="playground__item">
          <samp>Keyboard not found, Press F1 to continue</samp>
        </div>
        <div class="playground__item">
          Please press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to
          re-render an MDN page.
        </div>
        <div class="playground__item">
          Run <code>npm install --save-dev shokika.css</code> to install.
        </div>
      </div>
    </>
  );
};

export default Inline;
