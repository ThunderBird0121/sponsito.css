import React from "react";

import LayoutContent from "../components/LayoutContent";
import Text from "../components/Text";
import Inline from "../components/Inline";
import Form from "../components/Form";
import Other from "../components/Other";

const TheMain = () => {
  return (
    <main class="container">
      <section class="section-container">
        <h2 class="section-heading" id="installation">
          Installation
        </h2>
        <div class="install-conent">
          <LayoutContent>
            <h2 class="content__heading">npm</h2>
            <pre class="install-conent__preformatted">
              <code>npm install --save-dev shokika.css</code>
            </pre>
          </LayoutContent>

          <LayoutContent>
            <h2 class="content__heading">CDN</h2>
            <pre class="install-conent__preformatted">
              <code>
                https://unpkg.com/shokika.css@latest/dist/shokika.min.css
              </code>
            </pre>
          </LayoutContent>
        </div>
      </section>

      <section class="section-container">
        <h2 class="section-heading" id="example">
          Example
        </h2>
        <div>
          <LayoutContent>
            <Text />
          </LayoutContent>

          <LayoutContent>
            <Inline />
          </LayoutContent>

          <LayoutContent>
            <Form />
          </LayoutContent>

          <LayoutContent>
            <Other />
          </LayoutContent>
        </div>
      </section>
    </main>
  );
};

export default TheMain;
