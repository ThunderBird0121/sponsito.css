import React from "react";

const Text = () => {
  return (
    <>
      <h1 class="content__heading">Text</h1>

      <h2 class="content__sub-heading">Headings</h2>
      <div class="playground">
        <h1>heading 1</h1>
        <h2>heading 2</h2>
        <h3>heading 3</h3>
        <h4>heading 4</h4>
        <h5>heading 5</h5>
        <h6>heading 6</h6>
      </div>

      <h2 class="content__sub-heading">Paragraph</h2>
      <div class="playground">
        <p>
          The <code>&lt;p&gt;</code> HTML element represents a paragraph.
          Paragraphs are usually represented in visual media as blocks of text
          separated from adjacent blocks by blank lines and/or first-line
          indentation, but HTML paragraphs can be any structural grouping of
          related content, such as images or form fields.
        </p>
      </div>

      <h2 class="content__sub-heading">List</h2>
      <div class="playground">
        <div class="playground__item">
          <ul>
            <li>unordered list</li>
            <li>unordered list</li>
            <li>unordered list</li>
          </ul>
        </div>
        <div class="playground__item">
          <ol>
            <li>ordered list</li>
            <li>ordered list</li>
            <li>ordered list</li>
          </ol>
        </div>
      </div>

      <h2 class="content__sub-heading">Blockquote</h2>
      <div class="playground">
        <blockquote>
          Our mission is to make cloud computing accessible to everyone.
        </blockquote>
      </div>

      <h2 class="content__sub-heading">Preformatted Text (Code Block)</h2>
      <div class="playground">
        <pre>
          <code>npm install --save-dev shokika.css</code>
        </pre>
      </div>

      <h2 class="content__sub-heading">Description List</h2>
      <div class="playground">
        <dl>
          <dt>Beast of Bodmin</dt>
          <dd>A large feline inhabiting Bodmin Moor.</dd>

          <dt>Morgawr</dt>
          <dd>A sea serpent.</dd>

          <dt>Owlman</dt>
          <dd>A giant owl-like creature.</dd>
        </dl>
      </div>

      <h2 class="content__sub-heading">Horizontal Rule</h2>
      <div class="playground">
        <p>This is the first paragraph of text.</p>
        <hr />
        <p>This is the second paragraph of text.</p>
      </div>
    </>
  );
};

export default Text;
