import React from "react";

const Form = () => {
  return (
    <>
      <h1 class="content__heading">Form</h1>

      <h2 class="content__sub-heading">Button</h2>
      <div class="playground">
        <button type="button">Button</button>
        <button type="button" disabled>
          Button Disabled
        </button>
      </div>

      <h2 class="content__sub-heading">Input</h2>
      <div class="playground">
        <div class="playground__item">
          <input type="text" placeholder="Text" />
          <input type="text" placeholder="Disabled" disabled />
          <input type="text" readonly value="Readonly" />
        </div>
        <div class="playground__item">
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Disabled" disabled />
          <input type="password" readonly value="Readonly" />
        </div>
        <div class="playground__item">
          <input type="search" placeholder="Search" />
          <input type="search" placeholder="Disabled" disabled />
          <input type="search" readonly value="Readonly" />
        </div>
      </div>

      <h2 class="content__sub-heading">Checkbox</h2>
      <div class="playground">
        <label>
          <input type="checkbox" />
          <span>One Fuji</span>
        </label>
        <label>
          <input type="checkbox" checked /> <span>Two eagles</span>
        </label>
        <label>
          <input type="checkbox" disabled />
          <span>Three eggplants</span>
        </label>
      </div>

      <h2 class="content__sub-heading">Radio</h2>
      <div class="playground">
        <label>
          <input type="radio" name="radio-1" checked />
          <span>One Fuji</span>
        </label>
        <label>
          <input type="radio" name="radio-1" />
          <span>Two eagles</span>
        </label>
        <label>
          <input type="radio" name="radio-1" disabled />
          <span>Three eggplants</span>
        </label>
      </div>

      <h2 class="content__sub-heading">Textarea</h2>
      <div class="playground">
        <textarea></textarea>
        <textarea disabled></textarea>
      </div>

      <h2 class="content__sub-heading">Select</h2>
      <div class="playground">
        <div class="playground__item">
          <select>
            <option>One Fuji</option>
            <option>Two eagles</option>
            <option>Three eggplants</option>
          </select>

          <select disabled>
            <option>One Fuji</option>
            <option>Two eagles</option>
            <option>Three eggplants</option>
          </select>
        </div>

        <div class="playground__item">
          <select multiple>
            <option>One Fuji</option>
            <option>Two eagles</option>
            <option>Three eggplants</option>
          </select>

          <select multiple disabled>
            <option>One Fuji</option>
            <option>Two eagles</option>
            <option>Three eggplants</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Form;
