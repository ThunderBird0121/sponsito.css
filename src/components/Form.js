import React from "react";

const Form = () => {
  return (
    <>
      <h1 class="content__heading">Form</h1>

      <h2 class="content__sub-heading">Button</h2>
      <div class="playground">
        <div class="playground__item">
          <div class="content-list">
            <div class="content-list__item">
              <button type="button">Button</button>
            </div>
            <div class="content-list__item">
              <button type="button" disabled>
                Button Disabled
              </button>
            </div>
          </div>
        </div>
        <div class="playground__item">
          <div class="content-list">
            <div class="content-list__item">
              <input type="button" value="Input Button" />
            </div>
            <div class="content-list__item">
              <input type="button" value="Input Button Disabled" disabled />
            </div>
          </div>
        </div>
      </div>

      <h2 class="content__sub-heading">Input</h2>
      <div class="playground">
        <div class="playground__item">
          <div class="content-list">
            <div class="content-list__item">
              <input type="text" placeholder="Text" />
            </div>
            <div class="content-list__item">
              <input type="text" placeholder="Disabled" disabled />
            </div>
            <div class="content-list__item">
              <input type="text" readonly value="Readonly" />
            </div>
          </div>
        </div>
        <div class="playground__item">
          <div class="content-list">
            <div class="content-list__item">
              <input type="password" placeholder="Password" />
            </div>
            <div class="content-list__item">
              <input type="password" placeholder="Disabled" disabled />
            </div>
            <div class="content-list__item">
              <input type="password" readonly value="Readonly" />
            </div>
          </div>
        </div>
        <div class="playground__item">
          <div class="content-list">
            <div class="content-list__item">
              <input type="search" placeholder="Search" />
            </div>
            <div class="content-list__item">
              <input type="search" placeholder="Disabled" disabled />
            </div>
            <div class="content-list__item">
              <input type="search" readonly value="Readonly" />
            </div>
          </div>
        </div>
      </div>

      <h2 class="content__sub-heading">Checkbox</h2>
      <div class="playground">
        <div class="content-list">
          <div class="content-list__item">
            <label>
              <input type="checkbox" />
              <span> One fuji</span>
            </label>
          </div>
          <div class="content-list__item">
            <label>
              <input type="checkbox" checked />
              <span> Two eagles</span>
            </label>
          </div>
          <div class="content-list__item">
            <label>
              <input type="checkbox" disabled />
              <span> Three eggplants</span>
            </label>
          </div>
        </div>
      </div>

      <h2 class="content__sub-heading">Radio</h2>
      <div class="playground">
        <div class="content-list">
          <div class="content-list__item">
            <label>
              <input type="radio" name="radio-1" checked />
              <span> One fuji</span>
            </label>
          </div>
          <div class="content-list__item">
            <label>
              <input type="radio" name="radio-1" />
              <span> Two eagles</span>
            </label>
          </div>
          <div class="content-list__item">
            <label>
              <input type="radio" name="radio-1" disabled />
              <span> Three eggplants</span>
            </label>
          </div>
        </div>
      </div>

      <h2 class="content__sub-heading">Textarea</h2>
      <div class="playground">
        <div class="content-list">
          <div class="content-list__item">
            <textarea></textarea>
          </div>
          <div class="content-list__item">
            <textarea disabled></textarea>
          </div>
        </div>
      </div>

      <h2 class="content__sub-heading">Select</h2>
      <div class="playground">
        <div class="playground__item">
          <div class="content-list">
            <div class="content-list__item">
              <select>
                <option>One fuji</option>
                <option>Two eagles</option>
                <option>Three eggplants</option>
              </select>
            </div>
            <div class="content-list__item">
              <select disabled>
                <option>One fuji</option>
                <option>Two eagles</option>
                <option>Three eggplants</option>
              </select>
            </div>
          </div>
        </div>

        <div class="playground__item">
          <div class="content-list">
            <div class="content-list__item">
              <select multiple>
                <option>One fuji</option>
                <option>Two eagles</option>
                <option>Three eggplants</option>
              </select>
            </div>
            <div class="content-list__item">
              <select multiple disabled>
                <option>One fuji</option>
                <option>Two eagles</option>
                <option>Three eggplants</option>
              </select>
            </div>
          </div>
        </div>

        <div class="playground__item">
          <div class="content-list">
            <div class="content-list__item">
              <select>
                <optgroup label="1st group">
                  <option>One fuji</option>
                  <option>Two eagles</option>
                  <option>Three eggplants</option>
                </optgroup>
                <optgroup label="2nd group">
                  <option>One fuji</option>
                  <option>Two eagles</option>
                  <option>Three eggplants</option>
                </optgroup>
              </select>
            </div>
            <div class="content-list__item">
              <select disabled>
                <optgroup label="1st group">
                  <option>One fuji</option>
                  <option>Two eagles</option>
                  <option>Three eggplants</option>
                </optgroup>
                <optgroup label="2nd group">
                  <option>One fuji</option>
                  <option>Two eagles</option>
                  <option>Three eggplants</option>
                </optgroup>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
