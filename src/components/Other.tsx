import React from 'react';

const Other = () => {
  return (
    <>
      <h1 className="content__heading">Other Elements</h1>

      <h2 className="content__sub-heading">Table</h2>
      <div className="playground">
        <table>
          <thead>
            <tr>
              <th colSpan={2}>The table header</th>
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

      <h2 className="content__sub-heading">Details</h2>
      <div className="playground">
        <details>
          <summary>Summary</summary>
          <p>Paragraph</p>
        </details>
      </div>
    </>
  );
};

export default Other;
