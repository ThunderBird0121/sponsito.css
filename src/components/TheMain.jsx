import React from "react";

import LayoutContent from "../components/LayoutContent";
import Text from "../components/Text";
import Inline from "../components/Inline";
import Form from "../components/Form";
import Image from "../components/Image";
import Other from "../components/Other";

const TheMain = () => {
  return (
    <main className="container">
      <section className="section-container">
        <h2 className="section-heading" id="installation">
          Installation
        </h2>
        <div className="install-content">
          <LayoutContent>
            <h2 className="content__heading">npm</h2>
            <pre className="install-content__preformatted">
              <code>npm install --save-dev shokika.css</code>
            </pre>
          </LayoutContent>

          <LayoutContent>
            <h2 className="content__heading">CDN</h2>
            <pre className="install-content__preformatted">
              <code>
                https://unpkg.com/shokika.css@latest/dist/shokika.min.css
              </code>
            </pre>
          </LayoutContent>
        </div>
      </section>

      <section className="section-container">
        <h2 className="section-heading" id="example">
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
            <Image />
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
