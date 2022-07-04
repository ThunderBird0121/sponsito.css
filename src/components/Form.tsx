import React from 'react';

const Form = () => {
  return (
    <>
      <h1 className="content__heading">Form</h1>

      <h2 className="content__sub-heading">Button</h2>
      <div className="playground">
        <div className="playground__item">
          <div className="content-list">
            <div className="content-list__item">
              <button type="button">Button</button>
            </div>
            <div className="content-list__item">
              <button type="button" disabled>
                Button Disabled
              </button>
            </div>
          </div>
        </div>
        <div className="playground__item">
          <div className="content-list">
            <div className="content-list__item">
              <button type="submit">Submit</button>
            </div>
            <div className="content-list__item">
              <button type="submit" disabled>
                Submit Disabled
              </button>
            </div>
          </div>
        </div>
        <div className="playground__item">
          <div className="content-list">
            <div className="content-list__item">
              <button type="reset">Reset</button>
            </div>
            <div className="content-list__item">
              <button type="reset" disabled>
                Reset Disabled
              </button>
            </div>
          </div>
        </div>
        <div className="playground__item">
          <div className="content-list">
            <div className="content-list__item">
              <input type="button" defaultValue="Input Button" />
            </div>
            <div className="content-list__item">
              <input type="button" defaultValue="Input Button Disabled" disabled />
            </div>
          </div>
        </div>
      </div>

      <h2 className="content__sub-heading">Input</h2>
      <div className="playground">
        <div className="playground__item">
          <div className="content-list">
            <div className="content-list__item">
              <input type="text" placeholder="Text" />
            </div>
            <div className="content-list__item">
              <input type="text" placeholder="Disabled" disabled />
            </div>
            <div className="content-list__item">
              <input type="text" defaultValue="Readonly" placeholder="Readonly" readOnly />
            </div>
          </div>
        </div>
        <div className="playground__item">
          <div className="content-list">
            <div className="content-list__item">
              <input type="password" placeholder="Password" />
            </div>
            <div className="content-list__item">
              <input type="password" placeholder="Disabled" disabled />
            </div>
          </div>
        </div>
        <div className="playground__item">
          <div className="content-list">
            <div className="content-list__item">
              <input type="search" placeholder="Search" />
            </div>
            <div className="content-list__item">
              <input type="search" placeholder="Disabled" disabled />
            </div>
          </div>
        </div>
        <div className="playground__item">
          <div className="content-list">
            <div className="content-list__item">
              <input type="number" placeholder="Number" />
            </div>
            <div className="content-list__item">
              <input type="number" placeholder="Number" disabled />
            </div>
          </div>
        </div>
        <div className="playground__item">
          <div className="content-list">
            <div className="content-list__item">
              <input type="email" placeholder="Email" />
            </div>
            <div className="content-list__item">
              <input type="email" placeholder="Email" disabled />
            </div>
          </div>
        </div>
        <div className="playground__item">
          <div className="content-list">
            <div className="content-list__item">
              <input type="url" placeholder="URL" />
            </div>
            <div className="content-list__item">
              <input type="url" placeholder="URL" disabled />
            </div>
          </div>
        </div>
        <div className="playground__item">
          <div className="content-list">
            <div className="content-list__item">
              <input type="tel" placeholder="Tel" />
            </div>
            <div className="content-list__item">
              <input type="tel" placeholder="Tel" disabled />
            </div>
          </div>
        </div>

        <div className="playground__item">
          <div className="content-list">
            <div className="content-list__item">
              <input type="datetime-local" placeholder="Datetime Local" defaultValue="2021-01-01T10:10:00" />
            </div>
            <div className="content-list__item">
              <input type="datetime-local" placeholder="Datetime Local" defaultValue="2021-01-01T10:10:00" disabled />
            </div>
          </div>
        </div>
        <div className="playground__item">
          <div className="content-list">
            <div className="content-list__item">
              <input type="date" placeholder="Date" defaultValue="2021-01-01" />
            </div>
            <div className="content-list__item">
              <input type="date" placeholder="Date" defaultValue="2021-01-01" disabled />
            </div>
          </div>
        </div>
        <div className="playground__item">
          <div className="content-list">
            <div className="content-list__item">
              <input type="time" placeholder="Time" defaultValue="10:10:00" />
            </div>
            <div className="content-list__item">
              <input type="time" placeholder="Time" defaultValue="10:10:00" disabled />
            </div>
          </div>
        </div>
        <div className="playground__item">
          <div className="content-list">
            <div className="content-list__item">
              <input type="file" aria-label="input type[file] sample" />
            </div>
            <div className="content-list__item">
              <input type="file" aria-label="input type[file] sample" disabled />
            </div>
          </div>
        </div>
        <div className="playground__item">
          <div className="content-list">
            <div className="content-list__item">
              <input type="color" aria-label="input type[color] sample" />
            </div>
            <div className="content-list__item">
              <input type="color" aria-label="input type[color] sample" disabled />
            </div>
          </div>
        </div>
        <div className="playground__item">
          <div className="content-list">
            <div className="content-list__item">
              <input type="range" aria-label="input type[range] sample" />
            </div>
            <div className="content-list__item">
              <input type="range" aria-label="input type[range] sample" disabled />
            </div>
          </div>
        </div>
      </div>

      <h2 className="content__sub-heading">Checkbox</h2>
      <div className="playground">
        <div className="content-list">
          <div className="content-list__item">
            <label>
              <input type="checkbox" />
              <span> One fuji</span>
            </label>
          </div>
          <div className="content-list__item">
            <label>
              <input type="checkbox" defaultChecked />
              <span> Two eagles</span>
            </label>
          </div>
          <div className="content-list__item">
            <label>
              <input type="checkbox" disabled />
              <span> Three eggplants</span>
            </label>
          </div>
        </div>
      </div>

      <h2 className="content__sub-heading">Radio</h2>
      <div className="playground">
        <div className="content-list">
          <div className="content-list__item">
            <label>
              <input type="radio" name="radio-1" defaultChecked />
              <span> One fuji</span>
            </label>
          </div>
          <div className="content-list__item">
            <label>
              <input type="radio" name="radio-1" />
              <span> Two eagles</span>
            </label>
          </div>
          <div className="content-list__item">
            <label>
              <input type="radio" name="radio-1" disabled />
              <span> Three eggplants</span>
            </label>
          </div>
        </div>
      </div>

      <h2 className="content__sub-heading">Textarea</h2>
      <div className="playground">
        <div className="content-list">
          <div className="content-list__item">
            <textarea placeholder="Textarea"></textarea>
          </div>
          <div className="content-list__item">
            <textarea placeholder="Textarea" disabled></textarea>
          </div>
        </div>
      </div>

      <h2 className="content__sub-heading">Select</h2>
      <div className="playground">
        <div className="playground__item">
          <div className="content-list">
            <div className="content-list__item">
              <select aria-label="select sample">
                <option>One fuji</option>
                <option>Two eagles</option>
                <option>Three eggplants</option>
              </select>
            </div>
            <div className="content-list__item">
              <select aria-label="select sample" disabled>
                <option>One fuji</option>
                <option>Two eagles</option>
                <option>Three eggplants</option>
              </select>
            </div>
          </div>
        </div>

        <div className="playground__item">
          <div className="content-list">
            <div className="content-list__item">
              <select aria-label="select sample" multiple>
                <option>One fuji</option>
                <option>Two eagles</option>
                <option>Three eggplants</option>
              </select>
            </div>
            <div className="content-list__item">
              <select aria-label="select sample" multiple disabled>
                <option>One fuji</option>
                <option>Two eagles</option>
                <option>Three eggplants</option>
              </select>
            </div>
          </div>
        </div>

        <div className="playground__item">
          <div className="content-list">
            <div className="content-list__item">
              <select aria-label="select sample">
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
            <div className="content-list__item">
              <select aria-label="select sample" disabled>
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

        <div className="playground__item">
          <div className="content-list">
            <div className="content-list__item">
              <select aria-label="select sample" multiple>
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
            <div className="content-list__item">
              <select aria-label="select sample" aria-disabled="true" multiple disabled>
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

      <h2 className="content__sub-heading">Fieldset and Legend</h2>
      <div className="playground">
        <fieldset>
          <legend>Choose your favorite monster</legend>
          <div className="content-list">
            <div className="content-list__item">
              <label>
                <input type="radio" name="monster" defaultChecked />
                <span> Kraken</span>
              </label>
            </div>
            <div className="content-list__item">
              <label>
                <input type="radio" name="monster" />
                <span> Sasquatch</span>
              </label>
            </div>
            <div className="content-list__item">
              <label>
                <input type="radio" name="monster" />
                <span> Mothman</span>
              </label>
            </div>
          </div>
        </fieldset>
      </div>
    </>
  );
};

export default Form;
