import React from "react";

const Other = () => {
  return (
    <>
      <h1 class="content__heading">Other Elements</h1>

      <h2 class="content__sub-heading">Table</h2>
      <div class="playground">
        <table>
          <thead>
            <tr>
              <th colspan="2">The table header</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The table body</td>
              <td>with two columns</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="content__sub-heading">Details</h2>
      <div class="playground">
        <details>
          <summary>Summary</summary>
          <p>Paragraph</p>
        </details>
      </div>
    </>
  );
};

export default Other;
