import React from "react";

const Image = () => {
  return (
    <>
      <h1 class="content__heading">Image</h1>

      <h2 class="content__sub-heading">Basic</h2>
      <div class="playground">
        <img
          src="sample.jpg"
          width="320"
          height="320"
          alt="Tokyo Tower"
          loading="lazy"
        />
      </div>

      <h2 class="content__sub-heading">figure + figcaption</h2>
      <div class="playground">
        <figure>
          <img
            src="sample.jpg"
            width="320"
            height="320"
            alt="Tokyo Tower"
            loading="lazy"
          />
          <figcaption>Tokyo Tower</figcaption>
        </figure>
      </div>
    </>
  );
};

export default Image;
