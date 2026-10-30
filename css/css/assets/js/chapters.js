// data-full.js - All CSS Tutorial Topics
const topics = [
  {
    id: 'quick-guide',
    title: 'Quick Guide',
    content: `
  <div class="topic-header">
    <span class="topic-badge">Topic 1</span>
    <h1>Quick Guide</h1>
  </div>
  <div class="topic-section">
    <h2>WHAT IS CSS?</h2>
    <p>Cascading Style Sheets, fondly referred to as CSS, is a simple design language intended to simplify the process of making web pages presentable.</p>
    <p>CSS handles the look and feel part of a web page. Using CSS, you can control the color of the text, the style of fonts, the spacing between paragraphs, how columns are sized and laid out, what background images or colors are used, layout designs, variations in display for different devices and screen sizes as well as a variety of other effects.</p>
    <p>CSS is easy to learn and understand but it provides powerful control over the presentation of an HTML document. Most commonly, CSS is combined with the markup languages HTML or XHTML, and it continues to support the latest browsers as well.</p>
    <h2>Advantages of CSS</h2>
    <table class="css-table">
  <thead>
    <tr><th>Advantage</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td>CSS saves time</td><td>You can write CSS once and then reuse the same sheet in multiple HTML pages. You can define a style for each HTML element and apply it to as many web pages as you want.</td></tr>
    <tr><td>Pages load faster</td><td>If you are using CSS, you do not need to write HTML tag attributes every time. Just write one CSS rule for a tag and apply it to all occurrences of that tag, so less code means faster download times.</td></tr>
    <tr><td>Easy maintenance</td><td>To make a global change, simply change the style, and all elements across all web pages will be updated automatically.</td></tr>
    <tr><td>Superior styles to HTML</td><td>CSS has a much wider array of attributes than HTML, so you can give a far better look to your HTML page compared to using HTML attributes alone.</td></tr>
    <tr><td>Multiple device compatibility</td><td>Style sheets allow content to be optimized for more than one type of device &mdash; the same HTML document can be presented differently for handheld devices, PDAs, cell phones, or for printing.</td></tr>
    <tr><td>Global web standards</td><td>HTML presentation attributes are being deprecated in favor of CSS, so using CSS keeps your pages compatible with future browsers.</td></tr>
    <tr><td>Offline browsing</td><td>CSS can help store web applications locally with the help of an offline cache, ensuring faster loading and better overall performance when revisiting a site.</td></tr>
    <tr><td>Platform independence</td><td>CSS-styled websites render consistently across different operating systems and browsers, since CSS is a web standard supported everywhere, not tied to any specific platform.</td></tr>
  </tbody>
</table>

    <h2>Who Creates and Maintains CSS?</h2>
    <p>CSS was invented by Håkon Wium Lie on October 10, 1994 and maintained through a group of people within the W3C called the CSS Working Group. The CSS Working Group creates documents called specifications. When a specification has been discussed and officially ratified by W3C members, it becomes a recommendation.</p>
    <p>These ratified specifications are called recommendations because the W3C has no control over the actual implementation of the language. Independent companies and organizations create that software.</p>
    <p>NOTE − The World Wide Web Consortium, or W3C is a group that makes recommendations about how the Internet works and how it should evolve.</p>
    <h2>CSS Versions</h2>
    <p>Cascading Style Sheets, level 1 CSS1 came out of W3C as a recommendation in December 1996. This version describes the CSS language as well as a simple visual formatting model for all the HTML tags.</p>
    <p>CSS2 became a W3C recommendation in May 1998 and builds on CSS1. This version adds support for media-specific style sheets e.g. printers and aural devices, downloadable fonts, element positioning and tables.</p>
    <p>Unlike CSS1 and CSS2, CSS3 is not a single specification. Development on CSS3 began around 1999, and instead of one document, CSS3 is split into separate <code>"modules"</code> (such as Selectors, Backgrounds and Borders, Box Model, Animations, and more). Each module has its own specification and reaches W3C Recommendation status independently — some modules became official recommendations years later, and a few are still evolving today. Each module builds on the features defined in CSS2.</p>
    <p>Some of the key differences between CSS2 and CSS3 are summarized below −</p>
    <table class="css-table">
      <thead>
        <tr><th>Feature</th><th>CSS2</th><th>CSS3</th></tr>
      </thead>
      <tbody>
        <tr><td>Media Queries</td><td>Basic media types (print, screen)</td><td>Advanced media queries based on device characteristics</td></tr>
        <tr><td>Namespaces</td><td>No native support</td><td>Allows defining XML namespaces in CSS</td></tr>
        <tr><td>Selectors</td><td>Basic element and class targeting</td><td>Enhanced selectors (Level 3) for more precise element targeting</td></tr>
        <tr><td>Color</td><td>Basic color keywords and hex codes</td><td>New color formats like HSL, RGBA, and opacity support</td></tr>
        <tr><td>Structure</td><td>Single monolithic specification</td><td>Modular approach with separate specifications for different features</td></tr>
      </tbody>
    </table>
    <h2>CSS3 Modules</h2>
    <p>CSS3 Modules are having old CSS specifications as well as extension features.</p>
    <h3>Selectors</h3>
    <p>This module introduces advanced selectors for precise element targeting, such as attribute selectors and <code>nth-child</code>.</p>
    <h3>Box Model</h3>
    <p>Defines how elements are structured with margins, borders, and padding, including the flexible <code>box-sizing</code> property.</p>
    <h3>Backgrounds and Borders</h3>
    <p>Enhances styling with support for multiple background images, rounded corners (<code>border-radius</code>), and box shadows.</p>
    <h3>Image Values and Replaced Content</h3>
    <p>Provides tools for manipulating images and gradients natively within CSS without requiring external image editors.</p>
    <h3>Text Effects</h3>
    <p>Introduces typographic control like <code>text-shadow</code>, word wrapping, and custom web fonts (via <code>@font-face</code>).</p>
    <h3>2D/3D Transformations</h3>
    <p>Allows elements to be scaled, rotated, translated, and skewed in both two-dimensional and three-dimensional space.</p>
    <h3>Animations</h3>
    <p>Enables keyframe-based animations, allowing complex state changes without relying on JavaScript.</p>
    <h3>Multiple Column Layout</h3>
    <p>Provides a native way to flow content into multiple columns, similar to newspaper layouts.</p>
    <h3>User Interface</h3>
    <p>Enhances form controls, outline properties, and resizing capabilities for a better interactive experience.</p>


<h2>Practical Examples</h2><p>Since the Quick Guide introduces the history and structure of CSS, the most practical example is understanding how modern CSS modules are typically combined in a real stylesheet structure:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;style&gt;
/* 1. CSS3 Variables Module */
:root {
   --main-color: #3498db;
}

/* 2. CSS3 Box Model &amp; Selectors Module */
* {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
}

/* 3. CSS3 Flexbox Module */
.layout {
   display: flex;
   align-items: center;
}
&lt;/style&gt;

&lt;div class="layout" style="height: 100vh; background: var(--main-color, #3498db); color: white; justify-content: center;"&gt;&lt;h1&gt;Hello CSS3!&lt;/h1&gt;&lt;/div&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Treating CSS like a programming language</strong> − CSS is a declarative style sheet language, not a procedural programming language. It relies on the cascade rather than step-by-step execution.</li><li><strong>Ignoring browser compatibility for new modules</strong> − Assuming every brand new CSS4 specification works in older browsers. Always check compatibility for bleeding-edge features.</li><li><strong>Thinking CSS3 is a single monolithic version</strong> − CSS3 is actually divided into dozens of independent modules (Flexbox, Grid, Colors) that evolve at their own pace.</li><li><strong>Writing CSS without a reset</strong> − Forgetting that browsers apply their own default styles (User Agent stylesheets) which cause inconsistencies across Chrome, Safari, and Firefox. A reset removes these inconsistent default margins, padding, and font-sizes so your CSS starts from a predictable baseline.<br><pre><code>* { margin: 0; padding: 0; box-sizing: border-box; }</code></pre></li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Embrace the Modular Approach</strong> − Learn CSS one module at a time. Master the Box Model before moving to Flexbox, and master Flexbox before moving to Grid.</li><li><strong>Use a CSS Reset or Normalize</strong> − Always start your projects with a basic CSS reset (like setting margin and padding to 0 on the universal selector) to create a level playing field. A reset removes browsers' inconsistent default margins, padding, and font-sizes so your CSS starts from a predictable baseline.<br><pre><code>* { margin: 0; padding: 0; box-sizing: border-box; }</code></pre></li><li><strong>Stay Updated</strong> − Because CSS modules evolve independently, keep an eye on resources like MDN or CanIUse to know when new features gain widespread support.</li><li><strong>Keep CSS separated from HTML</strong> − Even as a beginner, resist the urge to write inline styles. Always use external stylesheets.</li></ul><h2>Interview Questions</h2><p><strong>Q: What does CSS stand for and what is its primary purpose?</strong></p><p>A: Cascading Style Sheets. Its primary purpose is to separate the presentation (layout, colors, fonts) of a document from its structure (HTML).</p><p><strong>Q: What is the main difference between CSS2 and CSS3?</strong></p><p>A: CSS3 was split into independent <code>"modules"</code> (such as Selectors, Media Queries, Flexbox), allowing different features to be updated and supported by browsers independently, whereas CSS2 was a single monolithic specification.</p><p><strong>Q: What is a CSS Module?</strong></p><p>A: A module is a specific subdivision of the CSS3 specification that focuses on a single feature or capability, like the <code>"CSS Color Module"</code> or <code>"CSS Grid Layout Module"</code>.</p><p><strong>Q: Do I need to declare a specific CSS version in my HTML document?</strong></p><p>A: No. CSS is backwards compatible and browsers continuously implement new modules. There is no version declaration for CSS inside HTML.</p><p><strong>Q: What is a User Agent Stylesheet?</strong></p><p>A: It is the default CSS applied by the browser to standard HTML elements (like adding bold font to <code>&lt;h1&gt;</code> or bullet points to <code>&lt;li&gt;</code>) before any author CSS is loaded.</p><h2>Summary</h2><p>CSS (Cascading Style Sheets) is the foundational language for styling the web. Modern CSS (CSS3 and beyond) is divided into independent modules that allow browsers to adopt new features gradually. Understanding that CSS is a declarative language focused on the presentation layer, separate from HTML structure, is the first critical step to mastering web design.</p>
  </div>`
  },
  {
    id: 'syntax',
    title: 'Syntax',
    content: `
  <div class="topic-header">
    <span class="topic-badge">Topic 2</span>
    <h1>Syntax</h1>
  </div>
  <div class="topic-section">
    <p>A CSS comprises of style rules that are interpreted by the browser and then applied to the corresponding elements in your document. A style rule is made of three parts −</p>
    <table class="css-table">
  <thead>
    <tr><th>Term</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td>Selector</td><td>A selector is an HTML tag at which a style will be applied. This could be any tag like <code>&lt;h1&gt;</code> or <code>&lt;table&gt;</code> etc.</td></tr>
    <tr><td>Property</td><td>A property is a type of attribute of HTML tag. Put simply, all the HTML attributes are converted into CSS properties. They could be color, border etc.</td></tr>
    <tr><td>Value</td><td>Values are assigned to properties. For example, the <code>color</code> property can have a value like red or #F1F1F1 etc.</td></tr>
  </tbody>
</table>
    <p>You can put a CSS Style Rule Syntax as follows − <code>selector { property: value }</code> Example: You can define a table border as follows −</p>
    <div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy">Copy</button></div></div><pre class="code-block"><code>table { border: 1px solid #C00; }</code></pre></div>
    <p>Here <code>table</code> is a selector and <code>border</code> is a property and the given value <code>1px solid #C00</code> is the value of that property.</p>
    <p>You can define selectors in various simple ways based on your comfort. Let me put these selectors one by one.</p>


<h2>Practical Examples</h2><p>A practical, complete CSS rule demonstrating the syntax structure (Selector, Property, and Value) used to style a realistic UI component like an alert box:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;style&gt;
/* Selector */
.alert-box {
   /* Property : Value ; */
   background-color: #f8d7da;
   color: #721c24;
   padding: 15px;
   border-radius: 4px;
   border: 1px solid #f5c6cb;
}
&lt;/style&gt;

&lt;div class="alert-box"&gt;&lt;strong&gt;Success!&lt;/strong&gt; Your CSS syntax is correct.&lt;/div&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Forgetting the trailing semicolon</strong> − Missing the semicolon at the end of a declaration causes the browser to ignore the current property AND the next property, breaking the layout silently.</li><li><strong>Missing curly braces</strong> − Forgetting to close a <code>}</code> will cause all subsequent CSS rules in the file to break.</li><li><strong>Using an equals sign instead of a colon</strong> − Writing <code>color = red;</code> instead of <code>color: red;</code> is a common syntax error for developers coming from JavaScript.</li><li><strong>Typos in property names</strong> − Writing <code>backgroud-color</code> instead of <code>background-color</code>. Browsers silently ignore invalid properties, making typos hard to debug.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>One Declaration Per Line</strong> − Always place each property-value pair on its own line. It makes the CSS vastly easier to read and allows version control systems (like Git) to track changes cleanly.</li><li><strong>Consistent Indentation</strong> − Indent the declarations inside the curly braces (usually by 2 or 4 spaces) to clearly separate the selector from the properties.</li><li><strong>Always include the last semicolon</strong> − Even though the semicolon on the very last property inside a block is technically optional in CSS, you should always include it to prevent errors when adding new properties later.</li><li><strong>Use Comments for Structure</strong> − Use CSS comments <code>/* ... */</code> to group related rules together in large stylesheets.</li></ul><h2>Interview Questions</h2><p><strong>Q: What are the three main components of a CSS rule?</strong></p><p>A: The Selector (which elements to style), the Property (what aspect to style), and the Value (the specific style to apply).</p><p><strong>Q: What is a CSS Declaration?</strong></p><p>A: A declaration is a single property and its value, separated by a colon and ended with a semicolon (e.g., <code>color: blue;</code>).</p><p><strong>Q: What happens if a browser encounters a CSS property or value it doesn't understand?</strong></p><p>A: The browser will completely ignore that specific declaration and gracefully continue parsing the rest of the CSS rules.</p><p><strong>Q: Is white-space significant in CSS syntax?</strong></p><p>A: Generally no. You can use spaces, tabs, and newlines freely to format your CSS for readability without affecting how it works.</p><p><strong>Q: How do you write a comment in CSS?</strong></p><p>A: CSS comments start with <code>/*</code> and end with <code>*/</code>. They can span multiple lines.</p><h2>Summary</h2><p>The syntax of CSS is simple but strict. Every rule consists of a selector pointing to an HTML element, followed by a declaration block enclosed in curly braces <code>{}</code>. Inside the block, declarations are written as <code>property: value;</code> pairs. Maintaining consistent formatting, avoiding typos, and remembering semicolons are crucial habits for writing maintainable CSS.</p>
  </div>`
  },
  {
    id: 'inclusion',
    title: 'Inclusion',
    content: `
  <div class="topic-header">
    <span class="topic-badge">Topic 3</span>
    <h1>Inclusion</h1>
  </div>
  <div class="topic-section">
    <p>There are four ways to associate styles with your HTML document. Most commonly used methods are inline CSS and External CSS.</p>
    <h2>1. Embedded CSS - The &lt;style&gt; Element</h2>
    <p>You can put your CSS rules into an HTML document using the &lt;style&gt; element. This tag is placed inside &lt;head&gt;...&lt;/head&gt; tags. Rules defined using this syntax will be applied to all the elements available in the document. Here is the generic syntax −</p>
    <p>Following is the example of embed CSS based on the above syntax −</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style type = <code>"text/css"</code> media = <code>"all"</code>&gt;
         body {
            background-color: linen;
         }
         h1 {
            color: maroon;
            margin-left: 40px;
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;h1&gt;This is a heading&lt;/h1&gt;
&lt;p&gt;This is a paragraph.&lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>Attributes</h3>
    <p>Attributes associated with &lt;style&gt; elements are −</p>
    <table class="css-table">
      <thead>
        <tr><th>Attribute</th><th>Value</th><th>Description</th></tr>
      </thead>
      <tbody>
        <tr><td>type</td><td>text/css</td><td>Specifies the style sheet language as a content-type MIME type. This is a required attribute.</td></tr>
        <tr><td>media</td><td>screen, tty, tv, projection, handheld, print, braille, aural, all</td><td>Specifies the device the document will be displayed on. Default value is all. This is an optional attribute.</td></tr>
      </tbody>
    </table>
    <h2>2. Inline CSS - The style Attribute</h2>
    <p>You can use style attribute of any HTML element to define style rules. These rules will be applied to that element only. Here is the generic syntax −</p>

    <table class="css-table">
  <thead>
    <tr><th>Attribute</th><th>Value</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td>style</td><td>style rules</td><td>The value of the style attribute is a combination of style declarations separated by semicolons.</td></tr>
  </tbody>
</table>
    <h3>Example</h3>
    <p>Following is the example of inline CSS based on the above syntax −</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;h1 style = <code>"color:#36C;"</code>&gt; This is inline CSS &lt;/h1&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h2>3. External CSS - The &lt;link&gt; Element</h2>
    <p>The &lt;link&gt; element can be used to include an external stylesheet file in your HTML document.</p>
    <p>An external style sheet is a separate text file with .css extension. You define all the Style rules within this text file and then you can include this file in any HTML document using &lt;link&gt; element.</p>
    <p>Here is the generic syntax of including external CSS file −</p>

    <p>&lt;link type = <code>"text/css"</code> href = <code>"..."</code> media = <code>"..."</code> /&gt;</p>

    <h3>Attributes</h3>
    <p>Attributes associated with &lt;style&gt; elements are −</p>
    <table class="css-table">
  <thead>
    <tr><th>Attribute</th><th>Value</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td>type</td><td>text/css</td><td>Specifies the style sheet language as a content-type MIME type. This attribute is required.</td></tr>
    <tr><td>href</td><td>URL</td><td>Specifies the style sheet file having style rules. This attribute is required.</td></tr>
    <tr><td>media</td><td>screen, tty, tv, projection, handheld, print, braille, aural, all</td><td>Specifies the device the document will be displayed on. Default value is all. This is an optional attribute.</td></tr>
  </tbody>
</table>
    <h3>Example</h3>
    <p>Consider a simple style sheet file with a name <code>mystyle.css</code> having the following rules −</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>h1, h2, h3 {
   color: #36C;
   font-weight: normal;
   letter-spacing: .4em;
   margin-bottom: 1em;
   text-transform: lowercase;
}</code></pre>
    </div>
    <p>Now you can include this file <code>mystyle.css</code> in any HTML document as follows −</p>

    <p>&lt;link type = <code>"text/css"</code> href = <code>"<code>mystyle.css</code>"</code> media = <code>" all"</code> /&gt;</p>

    <h2>4. Imported CSS - <code>@import</code> Rule</h2>
    <p><code>@import</code> is used to import an external stylesheet in a manner similar to the &lt;link&gt; element. Here is the generic syntax of the <code>@import</code> rule.</p>

    <div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy">Copy</button></div></div><pre class="code-block"><code>@import <code>"URL"</code>;</code></pre></div>

    <p>Here URL is the URL of the style sheet file having style rules. You can use another syntax as well −</p>

    <div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy">Copy</button></div></div><pre class="code-block"><code>@import url("URL");</code></pre></div>

    <h3>Example</h3>
    <p>Following is the example showing you how to import a style sheet file into HTML document −</p>

    <p>This is the alternate string-based syntax for <code>@import</code> (as opposed to the <code>url()</code> form shown just above).</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions"><button type="button" class="btn-copy">Copy</button></div>
      </div>
      <pre class="code-block"><code>@import "<code>mystyle.css</code>";</code></pre>
    </div>

    <h2>CSS Rules Overriding</h2>
    <p>We have discussed four ways to include style sheet rules in an HTML document. Here is the rule to override any Style Sheet Rule.</p>
    <p>Any inline style sheet takes highest priority. So, it will override any rule defined in &lt;style&gt;...&lt;/style&gt; tags or rules defined in any external style sheet file.</p>
    <p>Any rule defined in &lt;style&gt;...&lt;/style&gt; tags will override rules defined in any external style sheet file.</p>
    <p>Any rule defined in external style sheet file takes lowest priority, and rules defined in this file will be applied only when above two rules are not applicable.</p>
    <h2>Handling old Browsers</h2>
    <p>There are still many old browsers who do not support CSS. So, we should take care while writing our Embedded CSS in an HTML document. The following snippet shows how you can use comment tags to hide CSS from older browsers −</p>

    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;style type="text/css"&gt;
&lt;!--
body, td {
   color: blue;
}
--&gt;
&lt;/style&gt;</code></pre>
    </div>
    <h2>CSS Comments</h2>
    <p>Many times, you may need to put additional comments in your style sheet blocks. So, it is very easy to comment any part in style sheet. You can simply put your comments inside /*.....this is a comment in style sheet.....*/.</p>
    <p>You can use /* ....*/ to comment multi-line blocks in similar way you do in C and C++ programming languages.</p>
    <h3>Example</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         p {
            color: red;
            /* This is a single-line comment */
            text-align: center;
         }
/* This is a multi-line comment */
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;p&gt;Hello World!&lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>



<h2>Practical Examples</h2><p>The standard, best-practice way to include CSS using an External stylesheet linked in the HTML head:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
   &lt;title&gt;My Website&lt;/title&gt;
   &lt;!-- External Inclusion (Best Practice) --&gt;
   &lt;link rel="stylesheet" type="text/css" href="styles.css"&gt;
&lt;/head&gt;
&lt;body&gt;
   &lt;h1 class="title"&gt;Hello World&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Overusing Inline Styles</strong> − Writing <code>style="..."</code> directly on HTML elements makes your code impossible to maintain, ruins caching, and creates massive specificity issues.</li><li><strong>Putting <code>&lt;style&gt;</code> tags in the body</strong> − Internal stylesheets should exclusively be placed inside the <code>&lt;head&gt;</code> section. Putting them in the body can cause the page to flash unstyled content (FOUC).</li><li><strong>Incorrect link paths</strong> − Writing <code>href="style.css"</code> when the file is actually inside a folder like <code>href="css/style.css"</code>. A 404 error on the CSS file results in a completely broken layout.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Always Use External Stylesheets</strong> − Keep your HTML and CSS completely separated. This allows the browser to cache the CSS file across multiple page loads, drastically improving performance. Be mindful, however, that too many external stylesheet <code>&lt;link&gt;</code> requests can slow down initial page render compared to bundling them into a single file.</li><li><strong>Order Matters</strong> − If you link multiple external stylesheets (e.g., Bootstrap followed by your custom styles), always link YOUR custom stylesheet last so it can override the framework.</li><li><strong>Avoid @import</strong> − Avoid using the CSS <code>@import</code> rule to include stylesheets inside other stylesheets, as it blocks parallel downloading and slows down page load times. Use multiple <code>&lt;link&gt;</code> tags in HTML instead.</li></ul><h2>Interview Questions</h2><p><strong>Q: What are the three ways to include CSS in an HTML document?</strong></p><p>A: Inline (using the <code>style</code> attribute), Internal (using the <code>&lt;style&gt;</code> tag in the head), and External (using the <code>&lt;link&gt;</code> tag).</p><p><strong>Q: Which inclusion method has the highest priority/specificity?</strong></p><p>A: Inline CSS has the highest specificity (1,0,0,0) and will override internal and external stylesheets.</p><p><strong>Q: Why is External CSS considered the best practice?</strong></p><p>A: It separates content from presentation, keeps HTML clean, allows the same stylesheet to control multiple pages, and enables the browser to cache the CSS file for faster loading.</p><p><strong>Q: What is a FOUC?</strong></p><p>A: Flash Of Unstyled Content. It happens when HTML loads and renders before the CSS is fully downloaded and applied. Placing CSS in the <code>&lt;head&gt;</code> prevents this.</p><p><strong>Q: Can you use multiple external stylesheets on one page?</strong></p><p>A: Yes, you can use multiple <code>&lt;link&gt;</code> tags. The browser will process them sequentially from top to bottom.</p><h2>Summary</h2><p>While you can inject CSS directly onto elements (Inline) or into the document head (Internal), using External stylesheets via the <code>&lt;link&gt;</code> tag is the undisputed industry standard. It enforces a clean separation of concerns, ensures maintainability, and maximizes web performance through browser caching.</p>
  </div>`
  },
  {
    id: 'selectors',
    title: 'CSS Selectors',
    content: `<div class="topic-header"><span class="topic-badge">Topic 4</span><h1>CSS Selectors</h1></div><div class="topic-section"><p>CSS selectors are used to <code>"find"</code> (or select) the HTML elements you want to style. We can divide CSS selectors into several categories.</p><h3>Universal Selector (<code>*</code>)</h3><p>Rather than selecting elements of a specific type, the universal selector matches the name of any element type.</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>* {
   color: #000000;
}</code></pre></div><h3>Type/Element Selector</h3><p>The element selector selects HTML elements based on the element name.</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>h1 {
   color: #36CFFF;
}</code></pre></div><h3>Class Selector</h3><p>The class selector selects HTML elements with a specific <code>class</code> attribute. To select elements with a specific class, write a period (<code>.</code>) character, followed by the class name.</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>.black {
   color: #000000;
}</code></pre></div><h3>ID Selector</h3><p>The ID selector uses the <code>id</code> attribute of an HTML element to select a specific element. The <code>id</code> of an element is unique within a page, so the ID selector is used to select one unique element!</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>#black {
   color: #000000;
}</code></pre></div><h3>Grouping Selector</h3><p>The grouping selector selects all the HTML elements with the same style definitions. To group selectors, separate each selector with a comma.</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>h1, h2, p {
   text-align: center;
   color: red;
}</code></pre></div><h3>Attribute Selectors</h3><p>You can also apply styles to HTML elements with particular attributes. The style rule below will match all the <code>input</code> elements having a <code>type</code> attribute with a value of <code>"text"</code>:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>input[type="text"] {
   color: #000000;
}</code></pre></div>

<h2>Practical Examples</h2><p>A realistic form styling scenario where different types of selectors (Class, Attribute, ID, and Grouping) are used together efficiently:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;style&gt;
/* Class Selector for general styling */
.form-input {
   padding: 10px;
   border: 1px solid #ccc;
}

/* Attribute Selector for specific input types */
input[type="text"],
input[type="email"] { /* Grouping Selector */
   width: 100%;
}

/* ID Selector for a unique element */
#submit-btn {
   background-color: blue;
   color: white;
}
&lt;/style&gt;

&lt;h1 id="main-title"&gt;Hello World&lt;/h1&gt;
&lt;p&gt;A standard paragraph.&lt;/p&gt;
&lt;p class="highlight"&gt;A highlighted paragraph!&lt;/p&gt;
&lt;input type="text" placeholder="Type here..."&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Overusing ID selectors (#)</strong> − Using IDs for styling creates specificity nightmares later on. IDs should be reserved for JavaScript hooks or anchor links.</li><li><strong>Confusing the period (.) and hash (#)</strong> − Trying to select <code>&lt;div class="box"&gt;</code> by writing <code>#box</code> instead of <code>.box</code>.</li><li><strong>Using invalid characters in class names</strong> − Starting a class name with a number (e.g., <code>.1container</code>). CSS class names must start with a letter, underscore, or hyphen.</li><li><strong>Forgetting commas in grouping selectors</strong> − Writing <code>h1 h2 h3 { color: red; }</code> instead of <code>h1, h2, h3 { color: red; }</code>. Without commas, it looks for an h3 inside an h2 inside an h1!</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Class-Based Architecture</strong> − Rely almost entirely on Class selectors (<code>.classname</code>) for styling. This keeps your CSS reusable and your specificity low.</li><li><strong>Use naming conventions</strong> − Adopt a CSS naming methodology like BEM (Block Element Modifier) to write predictable and scalable class names. BEM structures classes into independent blocks, elements within those blocks, and modifiers that change their state or appearance:<br><pre><code>.card { }\n.card__title { }\n.card--highlighted { }</code></pre></li><li><strong>Avoid the Universal Selector (*) for broad styling</strong> − Aside from a basic CSS reset (like setting <code>box-sizing</code>), avoid using <code>*</code> as it applies to every single element and can cause performance and overriding issues. The universal selector and deeply nested selectors are more expensive for the browser to evaluate. However, a small CSS reset is recommended to remove browsers' inconsistent default margins and padding so your CSS starts from a predictable baseline:<br><pre><code>* { margin: 0; padding: 0; box-sizing: border-box; }</code></pre></li><li><strong>Keep selectors short</strong> − Avoid overly specific element selectors like <code>div.header p.text</code>. Just use <code>.header-text</code>.</li></ul><h2>Interview Questions</h2><p><strong>Q: What is the difference between an ID selector and a Class selector?</strong></p><p>A: An ID selector (<code>#name</code>) targets a single, unique element on the page. A Class selector (<code>.name</code>) can target multiple elements sharing the same class attribute.</p><p><strong>Q: How do you select all elements with the class <code>"active"</code> that are also <code>&lt;a&gt;</code> tags?</strong></p><p>A: By chaining the type and class selector without a space: <code>a.active</code>.</p><p><strong>Q: What does the Universal Selector <code>*</code> do?</strong></p><p>A: It matches every single element in the HTML document.</p><p><strong>Q: How would you select all elements that have a <code>disabled</code> attribute, regardless of its value?</strong></p><p>A: Using the attribute selector: <code>[disabled]</code>.</p><p><strong>Q: What is the purpose of the Grouping Selector?</strong></p><p>A: It allows you to apply the exact same CSS rules to multiple different selectors by separating them with commas (e.g., <code>h1, h2 { font-weight: bold; }</code>), reducing code duplication.</p><h2>Summary</h2><p>CSS selectors are the hooks that connect your style rules to the HTML document. While there are many types—Universal, Type, ID, and Attribute—the Class selector is the backbone of modern CSS architecture. Utilizing grouping selectors correctly and avoiding the rigidness of ID selectors ensures your stylesheets remain clean, reusable, and easy to maintain.</p>
  </div>`
  },
  {
    id: 'combinators',
    title: 'CSS Combinators',
    content: `<div class="topic-header"><span class="topic-badge">Topic 5</span><h1>CSS Combinators</h1></div><div class="topic-section"><p>A combinator is something that explains the relationship between the selectors. A CSS selector can contain more than one simple selector. Between the simple selectors, we can include a combinator.</p><h3>Descendant Combinator (space)</h3><p>The descendant combinator matches all elements that are descendants of a specified element.</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>div p {
   background-color: yellow;
}</code></pre></div><h3>Child Combinator (<code>&gt;</code>)</h3><p>The child combinator selects all elements that are the children of a specified element.</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>div > p {
   background-color: yellow;
}</code></pre></div><h3>Adjacent Sibling Combinator (<code>+</code>)</h3><p>The adjacent sibling combinator is used to select an element that is directly after another specific element. Sibling elements must have the same parent element.</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>h1 + p {
   background-color: yellow;
}</code></pre></div><h3>General Sibling Combinator (<code>~</code>)</h3><p>The general sibling combinator selects all elements that are next siblings of a specified element.</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>h1 ~ p {
   background-color: yellow;
}</code></pre></div><h3>Combinators Summary</h3><table class="css-table"><thead><tr><th>Symbol</th><th>Name</th><th>What it Selects</th></tr></thead><tbody><tr><td>(space)</td><td>Descendant combinator</td><td>All elements that are inside the specified element.</td></tr><tr><td><code>&gt;</code></td><td>Child combinator</td><td>All elements that are direct children of the specified element.</td></tr><tr><td><code>+</code></td><td>Adjacent sibling combinator</td><td>The element that is placed immediately after the specified element.</td></tr><tr><td><code>~</code></td><td>General sibling combinator</td><td>All elements that are placed after the specified element on the same DOM level.</td></tr></tbody></table>

<h2>Practical Examples</h2><p>A realistic dropdown menu scenario utilizing child (<code>&gt;</code>) and adjacent sibling (<code>+</code>) combinators to prevent styling bleed into nested sub-menus:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;style&gt;
/* Direct Child Combinator: Only styles the top-level list items */
.nav-menu > li {
   display: inline-block;
   margin-right: 20px;
}

/* Adjacent Sibling: Adds a border between adjacent menu items */
.nav-menu > li + li {
   border-left: 1px solid #ccc;
   padding-left: 20px;
}
&lt;/style&gt;

&lt;div class="card"&gt;
  &lt;h2&gt;Combinators&lt;/h2&gt;
  &lt;p&gt;Adjacent sibling paragraph.&lt;/p&gt;
  &lt;p&gt;General sibling paragraph.&lt;/p&gt;
  &lt;div&gt;
    &lt;p&gt;Descendant, but not direct child.&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Confusing Descendant (space) with Child (&gt;)</strong> − Using a space selects ALL descendants (even grandchildren). Using <code>&gt;</code> selects ONLY direct children. Confusing them causes unintended styling on deeply nested elements.</li><li><strong>Over-nesting descendant combinators</strong> − Writing <code>.main .sidebar .widget ul li a</code>. This creates fragile CSS that breaks if the HTML structure changes slightly, and makes it incredibly hard to override later.</li><li><strong>Misunderstanding Sibling Combinators</strong> − The <code>+</code> combinator only selects the sibling IMMEDIATELY following the first element. If there is a <code>&lt;br&gt;</code> tag between them, the selector fails.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Prefer the Child Combinator (&gt;)</strong> − Whenever possible, use <code>&gt;</code> instead of a space. It strictly scopes your styles to direct children and prevents <code>"style leaking"</code> into nested components.</li><li><strong>Limit Combinator Depth</strong> − A strict rule of thumb is never to exceed a depth of 3 combinators (e.g., <code>.card > .body > h2</code>). If you go deeper, you should probably just add a new class to the target element.</li><li><strong>Use Adjacent Siblings for Spacing</strong> − The <code>* + *</code> selector (known as the lobotomized owl) is highly effective for adding top-margins only between adjacent sibling elements in a stack.</li><li><strong>Keep selectors shallow</strong> − Overly complex or deeply nested selector chains can slow down CSS matching on large pages. Simpler selectors perform better.</li></ul><h2>Interview Questions</h2><p><strong>Q: What is the exact difference between <code>div p</code> and <code>div &gt; p</code>?</strong></p><p>A: <code>div p</code> (descendant) selects all <code>&lt;p&gt;</code> tags that exist anywhere inside the <code>div</code>, no matter how deeply nested. <code>div &gt; p</code> (child) selects only <code>&lt;p&gt;</code> tags that are direct children of the <code>div</code>.</p><p><strong>Q: How does the adjacent sibling combinator <code>+</code> work?</strong></p><p>A: It selects an element that is placed immediately after a specified element, provided they share the same parent (e.g., <code>h1 + p</code> targets only the very first paragraph directly after an <code>h1</code>).</p><p><strong>Q: What does the general sibling combinator <code>~</code> do?</strong></p><p>A: It selects ALL sibling elements that follow the specified element on the same level, not just the immediately adjacent one.</p><p><strong>Q: Why might deeply nested descendant combinators cause performance issues?</strong></p><p>A: Browsers read CSS selectors from right-to-left. For <code>.container div span a</code>, the browser first finds all <code>a</code> tags on the page, then checks if they have a <code>span</code> parent, then a <code>div</code> grandparent, etc., which is computationally expensive.</p><p><strong>Q: Write a selector to target a <code>&lt;ul&gt;</code> that immediately follows an element with the class <code>.header</code>.</strong></p><p>A: <code>.header + ul</code></p><h2>Summary</h2><p>Combinators define the relationship between multiple simple selectors. By mastering the descendant (space), child (<code>&gt;</code>), adjacent sibling (<code>+</code>), and general sibling (<code>~</code>) combinators, you can precisely target elements based on their exact location in the DOM tree without needing to clutter your HTML with excessive classes.</p>
  </div>`
  },
  {
    id: 'specificity',
    title: 'CSS Specificity',
    content: `
<div class="topic-header">
    <span class="topic-badge">Topic 6</span>
    <h1>CSS Specificity</h1>
  </div>
  <div class="topic-section">
    <p>CSS Specificity is the set of rules that browsers use to decide which CSS styles should be applied to an HTML element when there are multiple conflicting rules.</p>
    <p>Imagine you have multiple CSS rules trying to change the color of the same text. One rule says the text should be red, and another says it should be blue. The browser needs a way to decide which rule wins. Specificity is the scoring system that makes this decision.</p>

    <h3>Simple Example</h3>
    <p>Let us look at a very simple example where two rules target the same element.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;style&gt;
    p {
      color: blue;
    }
    .text-red {
      color: red;
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;p class="text-red"&gt;This text will be red.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>
    <p>In this example, the class selector <code>.text-red</code> wins over the element selector <code>p</code>, so the text becomes red. We will learn exactly why this happens as we explore the priority rules.</p>

    <h3>CSS Specificity Priority</h3>
    <p>To understand which CSS rule wins, you must know the basic priority order. From strongest to weakest, the order is:</p>
    <p><strong>Inline Style &gt; ID &gt; Class / Attribute / Pseudo-class &gt; Element / Pseudo-element</strong></p>
    <p>Let us look at each level of this priority system separately.</p>

    <h3>Inline Styles</h3>
    <p>An inline style is written directly inside an HTML tag using the <code>style</code> attribute.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;h1 style="color: purple;"&gt;This is a heading&lt;/h1&gt;</code></pre>
    </div>
    <p>Inline styles have the highest priority. They will override almost any style written inside a CSS file because they are attached directly to the specific element.</p>

    <h3>ID Selectors</h3>
    <p>An ID selector uses the <code>id</code> attribute of an HTML element to target it. In CSS, an ID is selected using the hash (<code>#</code>) symbol.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
      <pre class="code-block"><code>#main-title {
  color: green;
}</code></pre>
    </div>
    <p>An ID is meant to be unique on a webpage, meaning it targets only one specific element. Because of this, it has a very high specificity and will always beat class and element selectors.</p>

    <h3>Class, Attribute, and Pseudo-class Selectors</h3>
    <p>These selectors have medium priority. They are stronger than basic element selectors but weaker than IDs.</p>
    <ul class="list">
      <li><strong>Class selectors:</strong> Target elements with a specific class, starting with a dot (like <code>.button</code>).</li>
      <li><strong>Attribute selectors:</strong> Target elements based on their HTML attributes (like <code>[type="text"]</code>).</li>
      <li><strong>Pseudo-classes:</strong> Target elements in a specific state (like <code>:hover</code> or <code>:focus</code>).</li>
    </ul>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
      <pre class="code-block"><code>.highlight { color: yellow; } /* Class */
input[type="text"] { border: 1px solid black; } /* Attribute */
a:hover { color: orange; } /* Pseudo-class */</code></pre>
    </div>

    <h3>Element and Pseudo-element Selectors</h3>
    <p>These are the weakest selectors in CSS.</p>
    <ul class="list">
      <li><strong>Element selectors:</strong> Target generic HTML tags directly (like <code>p</code>, <code>div</code>, or <code>h1</code>).</li>
      <li><strong>Pseudo-elements:</strong> Target specific parts of an element (like <code>::before</code> or <code>::after</code>).</li>
    </ul>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
      <pre class="code-block"><code>p { color: gray; } /* Element */
p::first-letter { font-size: 24px; } /* Pseudo-element */</code></pre>
    </div>

    <h3>Specificity Score</h3>
    <p>Now that you understand the basic priority, let us introduce the numerical scoring system behind it. Every CSS selector is given a score in four categories. This is often written as four numbers separated by commas: <code>0,0,0,0</code>.</p>
    <ul class="list">
      <li><strong>Inline Style</strong> gives a score of <code>1,0,0,0</code>.</li>
      <li><strong>ID</strong> gives a score of <code>0,1,0,0</code>.</li>
      <li><strong>Class, Attribute, or Pseudo-class</strong> gives a score of <code>0,0,1,0</code>.</li>
      <li><strong>Element or Pseudo-element</strong> gives a score of <code>0,0,0,1</code>.</li>
    </ul>
    <p>You can think of these numbers simply as thousands, hundreds, tens, and ones to easily see which score is larger.</p>

    <h3>How to Calculate Specificity</h3>
    <p>To calculate the total specificity score of a CSS rule, you just count how many of each type of selector it contains.</p>
    <ul class="list">
      <li><code>.button</code> (One class) = <strong>0,0,1,0</strong></li>
      <li><code>.nav .menu-item</code> (Two classes) = <strong>0,0,2,0</strong></li>
      <li><code>#header .logo</code> (One ID, one class) = <strong>0,1,1,0</strong></li>
      <li><code>div p a</code> (Three elements) = <strong>0,0,0,3</strong></li>
    </ul>

    <h3>Important Specificity Rule</h3>
    <p>When comparing scores, the browser checks the highest-priority category first (from left to right). A higher priority category will always win, no matter how many lower priority selectors you combine.</p>
    <p>For example, a score of <strong>0,1,0,0</strong> (one ID) will easily beat a score of <strong>0,0,5,0</strong> (five classes). This is because the ID category is stronger than the Class category.</p>

    <h3>Same Specificity</h3>
    <p>What happens if two rules have the exact same specificity score? The rule that is written <strong>later</strong> in your CSS code will win. This is the "Cascading" behavior of CSS.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
      <pre class="code-block"><code>.text {
    color: blue;
}

.text {
    color: red;
}</code></pre>
    </div>
    <p>Since both selectors are identical classes, they have the exact same score. The text will be red because the red rule is written later.</p>

    <h3>The !important Rule</h3>
    <p>The <code>!important</code> rule is a special CSS keyword that overrides all normal specificity rules.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
      <pre class="code-block"><code>p {
    color: red !important;
}</code></pre>
    </div>
    <p>Even if another rule has a very high specificity (like an ID or an inline style), the rule with <code>!important</code> will still win. However, it should not be used as a quick fix for every CSS problem. Excessive use of <code>!important</code> makes your CSS very difficult to maintain and debug because it breaks the natural cascading rules.</p>

    <h3>Specificity Cheat Sheet</h3>
    <table class="css-table">
      <thead>
        <tr>
          <th>Selector Type</th>
          <th>Example</th>
          <th>Specificity</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Inline Style</td>
          <td><code>style="color:red"</code></td>
          <td>1,0,0,0</td>
        </tr>
        <tr>
          <td>ID</td>
          <td><code>#header</code></td>
          <td>0,1,0,0</td>
        </tr>
        <tr>
          <td>Class</td>
          <td><code>.button</code></td>
          <td>0,0,1,0</td>
        </tr>
        <tr>
          <td>Attribute</td>
          <td><code>[type="text"]</code></td>
          <td>0,0,1,0</td>
        </tr>
        <tr>
          <td>Pseudo-class</td>
          <td><code>:hover</code></td>
          <td>0,0,1,0</td>
        </tr>
        <tr>
          <td>Element</td>
          <td><code>div</code></td>
          <td>0,0,0,1</td>
        </tr>
        <tr>
          <td>Pseudo-element</td>
          <td><code>::before</code></td>
          <td>0,0,0,1</td>
        </tr>
      </tbody>
    </table>

    <h2>Practical Examples</h2>
    
    <h3>Element vs Class</h3>
    <p>A class selector has a higher specificity (0,0,1,0) than an element selector (0,0,0,1). The text will be blue.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
      <pre class="code-block"><code>p { color: red; } /* 0,0,0,1 */
.highlight { color: blue; } /* 0,0,1,0 (Wins) */</code></pre>
    </div>

    <h3>Class vs ID</h3>
    <p>An ID selector has a higher specificity (0,1,0,0) than a class selector (0,0,1,0). The text will be green.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
      <pre class="code-block"><code>.highlight { color: blue; } /* 0,0,1,0 */
#unique-text { color: green; } /* 0,1,0,0 (Wins) */</code></pre>
    </div>

    <h3>Multiple Classes vs ID</h3>
    <p>Even if you combine multiple classes, they cannot beat a single ID. The ID category is fundamentally stronger. The text will be purple.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
      <pre class="code-block"><code>.box .inner .text { color: orange; } /* 0,0,3,0 */
#main-box { color: purple; } /* 0,1,0,0 (Wins) */</code></pre>
    </div>

    <h3>Same Specificity</h3>
    <p>When two rules have the exact same specificity, the one written last in the CSS file will win. The text will be orange.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
      <pre class="code-block"><code>.message { color: yellow; }
.message { color: orange; } /* Written later (Wins) */</code></pre>
    </div>

    <h3>Inline Style vs ID</h3>
    <p>An inline style (1,0,0,0) will always override an ID (0,1,0,0). The text will be pink.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;style&gt;
  #title { color: black; } /* 0,1,0,0 */
&lt;/style&gt;

&lt;h1 id="title" style="color: pink;"&gt;Hello World&lt;/h1&gt; &lt;!-- 1,0,0,0 (Wins) --&gt;</code></pre>
    </div>

    <h2>Common Mistakes</h2>
    <ul class="list">
      <li><strong>Using !important everywhere:</strong> Beginners often use <code>!important</code> when their CSS is not working. This is a bad habit that makes future styling changes incredibly difficult.</li>
      <li><strong>Using unnecessary IDs for styling:</strong> Avoid styling with IDs unless absolutely necessary. Classes are much easier to override and reuse across your project.</li>
      <li><strong>Writing overly complicated selectors:</strong> A selector like <code>div ul li a.active span</code> is too specific and hard to manage. A simple class like <code>.nav-link-active</code> is much better.</li>
      <li><strong>Not checking specificity:</strong> When a CSS rule is not applying as expected, it is almost always because another rule has a higher specificity score.</li>
      <li><strong>Assuming length equals strength:</strong> A very long selector containing many elements (like 10 elements) will still lose to a single simple class selector, because classes are in a higher priority category.</li>
    </ul>

    <h2>Best Practices</h2>
    <ul class="list">
      <li><strong>Prefer simple class selectors:</strong> Build your styles primarily around classes (like <code>.card</code>, <code>.btn</code>, <code>.header</code>). This keeps specificity low and predictable.</li>
      <li><strong>Keep specificity low:</strong> It is much easier to manage a website where all CSS rules have relatively low specificity scores.</li>
      <li><strong>Use IDs for JavaScript or HTML anchors:</strong> Use IDs for identifying elements in JavaScript or creating page anchors, rather than for general CSS styling.</li>
      <li><strong>Use !important only when genuinely needed:</strong> Reserve <code>!important</code> for absolute exceptions, such as overriding a third-party library's styling that you cannot change otherwise.</li>
    </ul>

    <h2>Interview Questions</h2>
    <p><strong>Q: What is CSS Specificity?</strong></p>
    <p>A: It is the set of rules browsers use to determine which CSS styles should be applied to an element when multiple conflicting rules target the same element.</p>
    
    <p><strong>Q: Why is CSS Specificity important?</strong></p>
    <p>A: It ensures that browsers know exactly how to resolve styling conflicts, allowing developers to predictably override and manage styles in large applications.</p>
    
    <p><strong>Q: What is the specificity priority order?</strong></p>
    <p>A: Inline Style &gt; ID &gt; Class / Attribute / Pseudo-class &gt; Element / Pseudo-element.</p>
    
    <p><strong>Q: Which is stronger: a class or an ID?</strong></p>
    <p>A: An ID is always stronger than a class.</p>
    
    <p><strong>Q: Which wins: <code>.nav ul li a</code> or <code>#navbar a</code>?</strong></p>
    <p>A: <code>#navbar a</code> wins because it contains an ID selector, which automatically beats any number of classes and elements.</p>
    
    <p><strong>Q: What happens when two selectors have the exact same specificity?</strong></p>
    <p>A: The rule that appears later in the CSS document will win.</p>
    
    <p><strong>Q: What is !important?</strong></p>
    <p>A: It is a special keyword added to a CSS declaration that overrides all normal specificity rules, including inline styles.</p>
    
    <p><strong>Q: Is a longer CSS selector always more specific?</strong></p>
    <p>A: No. A short selector with an ID (<code>#header</code>) will always beat a very long selector that only contains elements and classes.</p>
    
    <p><strong>Q: Why should unnecessary IDs be avoided for styling?</strong></p>
    <p>A: IDs have extremely high specificity, making them very difficult to override later if you need to reuse or slightly change a component's design.</p>

    <h2>Summary</h2>
    <p>CSS Specificity acts as a scoring system to resolve styling conflicts. The fundamental rule you must remember is the priority order:</p>
    <p><strong>Inline Style &gt; ID &gt; Class / Attribute / Pseudo-class &gt; Element / Pseudo-element</strong></p>
    <p>When two rules have the exact same specificity, <strong>the later rule wins</strong>. By keeping your selectors simple and prioritizing classes over IDs, you will write cleaner, more maintainable CSS code that rarely requires the use of <code>!important</code>.</p>
  </div>>`
  },
  {
    id: 'inheritance',
    title: 'CSS Inheritance',
    content: `<div class="topic-header"><span class="topic-badge">Topic 7</span><h1>CSS Inheritance</h1></div><div class="topic-section"><p>Inheritance in CSS controls what happens when no value is specified for a property on an element. Some CSS properties inherit by default, while others do not.</p><h3>Inherited vs Non-Inherited Properties</h3><p><strong>Inherited properties:</strong> When no value for an inherited property has been specified on an element, the element gets the computed value of that property on its parent element. Examples include typography properties like <code>color</code> and <code>font-family</code>.</p><p><strong>Non-inherited properties:</strong> When no value for a <code>non-inherited</code> property has been specified on an element, the element gets the initial value of that property (as specified in the property's summary). Examples include layout properties like <code>margin</code> and <code>border</code>.</p><h3>Inheritance Keywords</h3><p>CSS provides four special universal property values for controlling inheritance:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>/* Forces a property to inherit its value from its parent */
.child { color: inherit; }

/* Sets a property to its initial (default) value */
.box { border: initial; }

/* Acts as inherit for inherited properties, and initial for non-inherited ones */
.text { font-weight: unset; }

/* Reverts the cascaded value to the user agent's default style */
.element { display: revert; }</code></pre></div><h3>Common Properties Table</h3><table class="css-table"><thead><tr><th>Inherited Properties (Naturally passed down)</th><th>Non-Inherited Properties (Not passed down)</th></tr></thead><tbody><tr><td><code>color</code></td><td><code>background</code> (color, image)</td></tr><tr><td><code>font</code> (family, size, weight, style)</td><td><code>border</code>, <code>outline</code></td></tr><tr><td><code>line-height</code>, <code>letter-spacing</code></td><td><code>margin</code>, <code>padding</code></td></tr><tr><td><code>text-align</code>, <code>text-transform</code></td><td><code>width</code>, <code>height</code>, <code>max-width</code></td></tr><tr><td><code>visibility</code></td><td><code>position</code>, <code>display</code></td></tr></tbody></table>

<h2>Practical Examples</h2><p>A practical example showing how to force form elements (which normally reject inherited typography) to inherit the font stack of the body:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;style&gt;
body {
   font-family: 'Helvetica', sans-serif;
   color: #333;
}

/* Form elements do NOT inherit fonts by default. We must force it: */
button, input, textarea {
   font-family: inherit;
   color: inherit;
}
&lt;/style&gt;

&lt;div style="padding:20px;"&gt;This text inherits the font from the body.&lt;br&gt;&lt;br&gt;
  &lt;button class="custom-button"&gt;This button breaks inheritance&lt;/button&gt;
&lt;/div&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Assuming layout properties inherit</strong> − Beginners often wonder why a child <code>div</code> doesn't inherit the <code>border</code> or <code>padding</code> of its parent. Layout properties are explicitly non-inherited.</li><li><strong>Forgetting about User Agent defaults</strong> − Assuming <code>&lt;a&gt;</code> tags will inherit text color from the body. Browsers apply a default blue color to links, which overrides inheritance. You must explicitly set <code>a { color: inherit; }</code> if you want it to blend in.</li><li><strong>Using inherit blindly</strong> − Setting <code>width: inherit</code> on everything can cause layout chaos. It's better to let block elements naturally fill space (auto) rather than forcing inheritance.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Rely on natural inheritance for Typography</strong> − Set your <code>font-family</code>, <code>line-height</code>, and primary <code>color</code> on the <code>body</code> or <code>:root</code> element and let it cascade down naturally.</li><li><strong>Use <code>currentColor</code> for SVG icons</strong> − If you want an SVG icon to inherit the text color of its parent button, set its fill to <code>fill: currentColor;</code>, which relies on inheritance.</li><li><strong>Use <code>unset</code> to clear complex properties</strong> − If you need to strip all styling off a custom component, using <code>unset</code> is safer than guessing whether a property was originally inherited or not.</li></ul><h2>Interview Questions</h2><p><strong>Q: What is the difference between an inherited property and a <code>non-inherited</code> property?</strong></p><p>A: Inherited properties (like <code>color</code> and <code>font-size</code>) automatically pass down to child elements. Non-inherited properties (like <code>margin</code> and <code>border</code>) do not pass down and reset to their initial values.</p><p><strong>Q: What does the <code>inherit</code> keyword do?</strong></p><p>A: It forces a property that normally wouldn't inherit (like a border) to explicitly take the computed value of its parent element.</p><p><strong>Q: What is the difference between <code>initial</code> and <code>inherit</code>?</strong></p><p>A: <code>initial</code> sets the property to the browser's default CSS specification value (e.g., black for color). <code>inherit</code> sets it to whatever value the parent has.</p><p><strong>Q: What does the <code>unset</code> keyword do?</strong></p><p>A: It acts as a hybrid: if the property is naturally inheritable, it acts like <code>inherit</code>. If it is naturally non-inheritable, it acts like <code>initial</code>.</p><p><strong>Q: Why don't input fields inherit the body's font family automatically?</strong></p><p>A: Because browsers apply a User Agent stylesheet that explicitly sets font properties on form elements (like inputs and buttons), which overrides the natural inheritance cascade.</p><h2>Summary</h2><p>Inheritance is what makes CSS <code>"cascading."</code> Typography properties naturally flow down the DOM tree, while layout properties stay contained to their specific boxes. By mastering the <code>inherit</code>, <code>initial</code>, and <code>unset</code> keywords, you can control exactly how styles pass from parents to children, saving you from writing repetitive code.</p>
  </div>`
  },
  {
    id: 'colors',
    title: 'Colors — Basics',
    content: `
  <div class="topic-header">
    <span class="topic-badge">Topic 8</span>
    <h1>Colors — Basics</h1>
  </div>
  <div class="topic-section">
    <p>CSS uses color values to specify colors for text, backgrounds, borders, and other decorative effects. You can specify colors in several formats: Hex codes, RGB values, and keyword names.</p>

    <h3>Color Formats</h3>
    <table class="css-table">
  <thead>
    <tr><th>Format</th><th>Syntax</th><th>Example</th></tr>
  </thead>
  <tbody>
    <tr><td>Hex Code</td><td><code>#RRGGBB</code></td><td><code>p { color: #FF0000; }</code></td></tr>
    <tr><td>Short Hex</td><td><code>#RGB</code></td><td><code>p { color: #F00; }</code></td></tr>
    <tr><td>RGB</td><td><code>rgb(r, g, b)</code></td><td><code>p { color: rgb(255,0,0); }</code></td></tr>
    <tr><td>RGB %</td><td><code>rgb(r%, g%, b%)</code></td><td><code>p { color: rgb(50%,0%,0%); }</code></td></tr>
    <tr><td>Keyword</td><td><code>color-name</code></td><td><code>p { color: red; }</code></td></tr>
  </tbody>
</table>
  </div>

  <div class="topic-section">
    <h3>Color Swatches</h3>
    <p>Hover over any color to see it lift up. Click the hex code to copy it!</p>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:14px;margin:20px 0;">
        <div style="background:#000000;border-radius:12px;padding:20px 12px 14px;display:flex;flex-direction:column;align-items:center;gap:8px;box-shadow:0 4px 14px rgba(0,0,0,0.15);cursor:default;transition:transform .2s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
          <div style="width:40px;height:40px;border-radius:50%;background:#000000;border:3px solid #ffffff22;"></div>
          <span style="font-weight:700;font-size:13px;color:#ffffff;letter-spacing:.5px;">Black</span>
          <code style="font-size:11px;background:#ffffff22;color:#ffffff;padding:3px 8px;border-radius:6px;font-family:'Fira Code',monospace;">#000000</code>
        </div>
        <div style="background:#FF0000;border-radius:12px;padding:20px 12px 14px;display:flex;flex-direction:column;align-items:center;gap:8px;box-shadow:0 4px 14px rgba(0,0,0,0.15);cursor:default;transition:transform .2s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
          <div style="width:40px;height:40px;border-radius:50%;background:#FF0000;border:3px solid #ffffff22;"></div>
          <span style="font-weight:700;font-size:13px;color:#ffffff;letter-spacing:.5px;">Red</span>
          <code style="font-size:11px;background:#ffffff22;color:#ffffff;padding:3px 8px;border-radius:6px;font-family:'Fira Code',monospace;">#FF0000</code>
        </div>
        <div style="background:#00FF00;border-radius:12px;padding:20px 12px 14px;display:flex;flex-direction:column;align-items:center;gap:8px;box-shadow:0 4px 14px rgba(0,0,0,0.15);cursor:default;transition:transform .2s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
          <div style="width:40px;height:40px;border-radius:50%;background:#00FF00;border:3px solid #1e293b22;"></div>
          <span style="font-weight:700;font-size:13px;color:#1e293b;letter-spacing:.5px;">Green</span>
          <code style="font-size:11px;background:#1e293b22;color:#1e293b;padding:3px 8px;border-radius:6px;font-family:'Fira Code',monospace;">#00FF00</code>
        </div>
        <div style="background:#0000FF;border-radius:12px;padding:20px 12px 14px;display:flex;flex-direction:column;align-items:center;gap:8px;box-shadow:0 4px 14px rgba(0,0,0,0.15);cursor:default;transition:transform .2s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
          <div style="width:40px;height:40px;border-radius:50%;background:#0000FF;border:3px solid #ffffff22;"></div>
          <span style="font-weight:700;font-size:13px;color:#ffffff;letter-spacing:.5px;">Blue</span>
          <code style="font-size:11px;background:#ffffff22;color:#ffffff;padding:3px 8px;border-radius:6px;font-family:'Fira Code',monospace;">#0000FF</code>
        </div>
        <div style="background:#FFFF00;border-radius:12px;padding:20px 12px 14px;display:flex;flex-direction:column;align-items:center;gap:8px;box-shadow:0 4px 14px rgba(0,0,0,0.15);cursor:default;transition:transform .2s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
          <div style="width:40px;height:40px;border-radius:50%;background:#FFFF00;border:3px solid #1e293b22;"></div>
          <span style="font-weight:700;font-size:13px;color:#1e293b;letter-spacing:.5px;">Yellow</span>
          <code style="font-size:11px;background:#1e293b22;color:#1e293b;padding:3px 8px;border-radius:6px;font-family:'Fira Code',monospace;">#FFFF00</code>
        </div>
        <div style="background:#00FFFF;border-radius:12px;padding:20px 12px 14px;display:flex;flex-direction:column;align-items:center;gap:8px;box-shadow:0 4px 14px rgba(0,0,0,0.15);cursor:default;transition:transform .2s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
          <div style="width:40px;height:40px;border-radius:50%;background:#00FFFF;border:3px solid #1e293b22;"></div>
          <span style="font-weight:700;font-size:13px;color:#1e293b;letter-spacing:.5px;">Cyan</span>
          <code style="font-size:11px;background:#1e293b22;color:#1e293b;padding:3px 8px;border-radius:6px;font-family:'Fira Code',monospace;">#00FFFF</code>
        </div>
        <div style="background:#FF00FF;border-radius:12px;padding:20px 12px 14px;display:flex;flex-direction:column;align-items:center;gap:8px;box-shadow:0 4px 14px rgba(0,0,0,0.15);cursor:default;transition:transform .2s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
          <div style="width:40px;height:40px;border-radius:50%;background:#FF00FF;border:3px solid #ffffff22;"></div>
          <span style="font-weight:700;font-size:13px;color:#ffffff;letter-spacing:.5px;">Magenta</span>
          <code style="font-size:11px;background:#ffffff22;color:#ffffff;padding:3px 8px;border-radius:6px;font-family:'Fira Code',monospace;">#FF00FF</code>
        </div>
        <div style="background:#C0C0C0;border-radius:12px;padding:20px 12px 14px;display:flex;flex-direction:column;align-items:center;gap:8px;box-shadow:0 4px 14px rgba(0,0,0,0.15);cursor:default;transition:transform .2s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
          <div style="width:40px;height:40px;border-radius:50%;background:#C0C0C0;border:3px solid #1e293b22;"></div>
          <span style="font-weight:700;font-size:13px;color:#1e293b;letter-spacing:.5px;">Silver</span>
          <code style="font-size:11px;background:#1e293b22;color:#1e293b;padding:3px 8px;border-radius:6px;font-family:'Fira Code',monospace;">#C0C0C0</code>
        </div>
        <div style="background:#FFFFFF;border-radius:12px;padding:20px 12px 14px;display:flex;flex-direction:column;align-items:center;gap:8px;box-shadow:0 4px 14px rgba(0,0,0,0.15);cursor:default;transition:transform .2s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
          <div style="width:40px;height:40px;border-radius:50%;background:#FFFFFF;border:3px solid #1e293b22;"></div>
          <span style="font-weight:700;font-size:13px;color:#1e293b;letter-spacing:.5px;">White</span>
          <code style="font-size:11px;background:#1e293b22;color:#1e293b;padding:3px 8px;border-radius:6px;font-family:'Fira Code',monospace;">#FFFFFF</code>
        </div>
        <div style="background:#FFA500;border-radius:12px;padding:20px 12px 14px;display:flex;flex-direction:column;align-items:center;gap:8px;box-shadow:0 4px 14px rgba(0,0,0,0.15);cursor:default;transition:transform .2s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
          <div style="width:40px;height:40px;border-radius:50%;background:#FFA500;border:3px solid #1e293b22;"></div>
          <span style="font-weight:700;font-size:13px;color:#1e293b;letter-spacing:.5px;">Orange</span>
          <code style="font-size:11px;background:#1e293b22;color:#1e293b;padding:3px 8px;border-radius:6px;font-family:'Fira Code',monospace;">#FFA500</code>
        </div>
        <div style="background:#800080;border-radius:12px;padding:20px 12px 14px;display:flex;flex-direction:column;align-items:center;gap:8px;box-shadow:0 4px 14px rgba(0,0,0,0.15);cursor:default;transition:transform .2s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
          <div style="width:40px;height:40px;border-radius:50%;background:#800080;border:3px solid #ffffff22;"></div>
          <span style="font-weight:700;font-size:13px;color:#ffffff;letter-spacing:.5px;">Purple</span>
          <code style="font-size:11px;background:#ffffff22;color:#ffffff;padding:3px 8px;border-radius:6px;font-family:'Fira Code',monospace;">#800080</code>
        </div>
        <div style="background:#800000;border-radius:12px;padding:20px 12px 14px;display:flex;flex-direction:column;align-items:center;gap:8px;box-shadow:0 4px 14px rgba(0,0,0,0.15);cursor:default;transition:transform .2s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
          <div style="width:40px;height:40px;border-radius:50%;background:#800000;border:3px solid #ffffff22;"></div>
          <span style="font-weight:700;font-size:13px;color:#ffffff;letter-spacing:.5px;">Maroon</span>
          <code style="font-size:11px;background:#ffffff22;color:#ffffff;padding:3px 8px;border-radius:6px;font-family:'Fira Code',monospace;">#800000</code>
        </div>
        <div style="background:#000080;border-radius:12px;padding:20px 12px 14px;display:flex;flex-direction:column;align-items:center;gap:8px;box-shadow:0 4px 14px rgba(0,0,0,0.15);cursor:default;transition:transform .2s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
          <div style="width:40px;height:40px;border-radius:50%;background:#000080;border:3px solid #ffffff22;"></div>
          <span style="font-weight:700;font-size:13px;color:#ffffff;letter-spacing:.5px;">Navy</span>
          <code style="font-size:11px;background:#ffffff22;color:#ffffff;padding:3px 8px;border-radius:6px;font-family:'Fira Code',monospace;">#000080</code>
        </div>
        <div style="background:#008080;border-radius:12px;padding:20px 12px 14px;display:flex;flex-direction:column;align-items:center;gap:8px;box-shadow:0 4px 14px rgba(0,0,0,0.15);cursor:default;transition:transform .2s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
          <div style="width:40px;height:40px;border-radius:50%;background:#008080;border:3px solid #ffffff22;"></div>
          <span style="font-weight:700;font-size:13px;color:#ffffff;letter-spacing:.5px;">Teal</span>
          <code style="font-size:11px;background:#ffffff22;color:#ffffff;padding:3px 8px;border-radius:6px;font-family:'Fira Code',monospace;">#008080</code>
        </div>
        <div style="background:#808000;border-radius:12px;padding:20px 12px 14px;display:flex;flex-direction:column;align-items:center;gap:8px;box-shadow:0 4px 14px rgba(0,0,0,0.15);cursor:default;transition:transform .2s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
          <div style="width:40px;height:40px;border-radius:50%;background:#808000;border:3px solid #ffffff22;"></div>
          <span style="font-weight:700;font-size:13px;color:#ffffff;letter-spacing:.5px;">Olive</span>
          <code style="font-size:11px;background:#ffffff22;color:#ffffff;padding:3px 8px;border-radius:6px;font-family:'Fira Code',monospace;">#808000</code>
        </div>
        <div style="background:#FF6347;border-radius:12px;padding:20px 12px 14px;display:flex;flex-direction:column;align-items:center;gap:8px;box-shadow:0 4px 14px rgba(0,0,0,0.15);cursor:default;transition:transform .2s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
          <div style="width:40px;height:40px;border-radius:50%;background:#FF6347;border:3px solid #1e293b22;"></div>
          <span style="font-weight:700;font-size:13px;color:#1e293b;letter-spacing:.5px;">Coral</span>
          <code style="font-size:11px;background:#1e293b22;color:#1e293b;padding:3px 8px;border-radius:6px;font-family:'Fira Code',monospace;">#FF6347</code>
        </div>
        <div style="background:#FFD700;border-radius:12px;padding:20px 12px 14px;display:flex;flex-direction:column;align-items:center;gap:8px;box-shadow:0 4px 14px rgba(0,0,0,0.15);cursor:default;transition:transform .2s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
          <div style="width:40px;height:40px;border-radius:50%;background:#FFD700;border:3px solid #1e293b22;"></div>
          <span style="font-weight:700;font-size:13px;color:#1e293b;letter-spacing:.5px;">Gold</span>
          <code style="font-size:11px;background:#1e293b22;color:#1e293b;padding:3px 8px;border-radius:6px;font-family:'Fira Code',monospace;">#FFD700</code>
        </div>
        <div style="background:#4B0082;border-radius:12px;padding:20px 12px 14px;display:flex;flex-direction:column;align-items:center;gap:8px;box-shadow:0 4px 14px rgba(0,0,0,0.15);cursor:default;transition:transform .2s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
          <div style="width:40px;height:40px;border-radius:50%;background:#4B0082;border:3px solid #ffffff22;"></div>
          <span style="font-weight:700;font-size:13px;color:#ffffff;letter-spacing:.5px;">Indigo</span>
          <code style="font-size:11px;background:#ffffff22;color:#ffffff;padding:3px 8px;border-radius:6px;font-family:'Fira Code',monospace;">#4B0082</code>
        </div>
        <div style="background:#EE82EE;border-radius:12px;padding:20px 12px 14px;display:flex;flex-direction:column;align-items:center;gap:8px;box-shadow:0 4px 14px rgba(0,0,0,0.15);cursor:default;transition:transform .2s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
          <div style="width:40px;height:40px;border-radius:50%;background:#EE82EE;border:3px solid #1e293b22;"></div>
          <span style="font-weight:700;font-size:13px;color:#1e293b;letter-spacing:.5px;">Violet</span>
          <code style="font-size:11px;background:#1e293b22;color:#1e293b;padding:3px 8px;border-radius:6px;font-family:'Fira Code',monospace;">#EE82EE</code>
        </div>
        <div style="background:#A52A2A;border-radius:12px;padding:20px 12px 14px;display:flex;flex-direction:column;align-items:center;gap:8px;box-shadow:0 4px 14px rgba(0,0,0,0.15);cursor:default;transition:transform .2s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
          <div style="width:40px;height:40px;border-radius:50%;background:#A52A2A;border:3px solid #ffffff22;"></div>
          <span style="font-weight:700;font-size:13px;color:#ffffff;letter-spacing:.5px;">Brown</span>
          <code style="font-size:11px;background:#ffffff22;color:#ffffff;padding:3px 8px;border-radius:6px;font-family:'Fira Code',monospace;">#A52A2A</code>
        </div>
        <div style="background:#FFC0CB;border-radius:12px;padding:20px 12px 14px;display:flex;flex-direction:column;align-items:center;gap:8px;box-shadow:0 4px 14px rgba(0,0,0,0.15);cursor:default;transition:transform .2s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
          <div style="width:40px;height:40px;border-radius:50%;background:#FFC0CB;border:3px solid #1e293b22;"></div>
          <span style="font-weight:700;font-size:13px;color:#1e293b;letter-spacing:.5px;">Pink</span>
          <code style="font-size:11px;background:#1e293b22;color:#1e293b;padding:3px 8px;border-radius:6px;font-family:'Fira Code',monospace;">#FFC0CB</code>
        </div>
        <div style="background:#32CD32;border-radius:12px;padding:20px 12px 14px;display:flex;flex-direction:column;align-items:center;gap:8px;box-shadow:0 4px 14px rgba(0,0,0,0.15);cursor:default;transition:transform .2s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
          <div style="width:40px;height:40px;border-radius:50%;background:#32CD32;border:3px solid #1e293b22;"></div>
          <span style="font-weight:700;font-size:13px;color:#1e293b;letter-spacing:.5px;">Lime</span>
          <code style="font-size:11px;background:#1e293b22;color:#1e293b;padding:3px 8px;border-radius:6px;font-family:'Fira Code',monospace;">#32CD32</code>
        </div>
        <div style="background:#DC143C;border-radius:12px;padding:20px 12px 14px;display:flex;flex-direction:column;align-items:center;gap:8px;box-shadow:0 4px 14px rgba(0,0,0,0.15);cursor:default;transition:transform .2s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
          <div style="width:40px;height:40px;border-radius:50%;background:#DC143C;border:3px solid #ffffff22;"></div>
          <span style="font-weight:700;font-size:13px;color:#ffffff;letter-spacing:.5px;">Crimson</span>
          <code style="font-size:11px;background:#ffffff22;color:#ffffff;padding:3px 8px;border-radius:6px;font-family:'Fira Code',monospace;">#DC143C</code>
        </div>
        <div style="background:#D2B48C;border-radius:12px;padding:20px 12px 14px;display:flex;flex-direction:column;align-items:center;gap:8px;box-shadow:0 4px 14px rgba(0,0,0,0.15);cursor:default;transition:transform .2s;" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='translateY(0)'">
          <div style="width:40px;height:40px;border-radius:50%;background:#D2B48C;border:3px solid #1e293b22;"></div>
          <span style="font-weight:700;font-size:13px;color:#1e293b;letter-spacing:.5px;">Tan</span>
          <code style="font-size:11px;background:#1e293b22;color:#1e293b;padding:3px 8px;border-radius:6px;font-family:'Fira Code',monospace;">#D2B48C</code>
        </div>
    </div>
  </div>

  <div class="topic-section">
    <h3>Hex Color Reference Table</h3>
    <p>Each color name, its hex code, and RGB equivalent:</p>
    <table class="css-table">
      <thead>
        <tr>
          <th>Color Name</th>
          <th>Hex Code</th>
          <th>RGB Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div style="display:flex;align-items:center;gap:10px;">
              <span style="display:inline-block;width:28px;height:28px;border-radius:6px;background:#000000;border:1px solid var(--border-light);flex-shrink:0;"></span>
              <strong>Black</strong>
            </div>
          </td>
          <td><code>#000000</code></td>
          <td><code>rgb(0, 0, 0)</code></td>
        </tr>
        <tr>
          <td>
            <div style="display:flex;align-items:center;gap:10px;">
              <span style="display:inline-block;width:28px;height:28px;border-radius:6px;background:#FF0000;border:1px solid var(--border-light);flex-shrink:0;"></span>
              <strong>Red</strong>
            </div>
          </td>
          <td><code>#FF0000</code></td>
          <td><code>rgb(255, 0, 0)</code></td>
        </tr>
        <tr>
          <td>
            <div style="display:flex;align-items:center;gap:10px;">
              <span style="display:inline-block;width:28px;height:28px;border-radius:6px;background:#00FF00;border:1px solid var(--border-light);flex-shrink:0;"></span>
              <strong>Green</strong>
            </div>
          </td>
          <td><code>#00FF00</code></td>
          <td><code>rgb(0, 255, 0)</code></td>
        </tr>
        <tr>
          <td>
            <div style="display:flex;align-items:center;gap:10px;">
              <span style="display:inline-block;width:28px;height:28px;border-radius:6px;background:#0000FF;border:1px solid var(--border-light);flex-shrink:0;"></span>
              <strong>Blue</strong>
            </div>
          </td>
          <td><code>#0000FF</code></td>
          <td><code>rgb(0, 0, 255)</code></td>
        </tr>
        <tr>
          <td>
            <div style="display:flex;align-items:center;gap:10px;">
              <span style="display:inline-block;width:28px;height:28px;border-radius:6px;background:#FFFF00;border:1px solid var(--border-light);flex-shrink:0;"></span>
              <strong>Yellow</strong>
            </div>
          </td>
          <td><code>#FFFF00</code></td>
          <td><code>rgb(255, 255, 0)</code></td>
        </tr>
        <tr>
          <td>
            <div style="display:flex;align-items:center;gap:10px;">
              <span style="display:inline-block;width:28px;height:28px;border-radius:6px;background:#00FFFF;border:1px solid var(--border-light);flex-shrink:0;"></span>
              <strong>Cyan</strong>
            </div>
          </td>
          <td><code>#00FFFF</code></td>
          <td><code>rgb(0, 255, 255)</code></td>
        </tr>
        <tr>
          <td>
            <div style="display:flex;align-items:center;gap:10px;">
              <span style="display:inline-block;width:28px;height:28px;border-radius:6px;background:#FF00FF;border:1px solid var(--border-light);flex-shrink:0;"></span>
              <strong>Magenta</strong>
            </div>
          </td>
          <td><code>#FF00FF</code></td>
          <td><code>rgb(255, 0, 255)</code></td>
        </tr>
        <tr>
          <td>
            <div style="display:flex;align-items:center;gap:10px;">
              <span style="display:inline-block;width:28px;height:28px;border-radius:6px;background:#C0C0C0;border:1px solid var(--border-light);flex-shrink:0;"></span>
              <strong>Silver</strong>
            </div>
          </td>
          <td><code>#C0C0C0</code></td>
          <td><code>rgb(192, 192, 192)</code></td>
        </tr>
        <tr>
          <td>
            <div style="display:flex;align-items:center;gap:10px;">
              <span style="display:inline-block;width:28px;height:28px;border-radius:6px;background:#FFFFFF;border:1px solid var(--border-light);flex-shrink:0;"></span>
              <strong>White</strong>
            </div>
          </td>
          <td><code>#FFFFFF</code></td>
          <td><code>rgb(255, 255, 255)</code></td>
        </tr>
        <tr>
          <td>
            <div style="display:flex;align-items:center;gap:10px;">
              <span style="display:inline-block;width:28px;height:28px;border-radius:6px;background:#FFA500;border:1px solid var(--border-light);flex-shrink:0;"></span>
              <strong>Orange</strong>
            </div>
          </td>
          <td><code>#FFA500</code></td>
          <td><code>rgb(255, 165, 0)</code></td>
        </tr>
        <tr>
          <td>
            <div style="display:flex;align-items:center;gap:10px;">
              <span style="display:inline-block;width:28px;height:28px;border-radius:6px;background:#800080;border:1px solid var(--border-light);flex-shrink:0;"></span>
              <strong>Purple</strong>
            </div>
          </td>
          <td><code>#800080</code></td>
          <td><code>rgb(128, 0, 128)</code></td>
        </tr>
        <tr>
          <td>
            <div style="display:flex;align-items:center;gap:10px;">
              <span style="display:inline-block;width:28px;height:28px;border-radius:6px;background:#800000;border:1px solid var(--border-light);flex-shrink:0;"></span>
              <strong>Maroon</strong>
            </div>
          </td>
          <td><code>#800000</code></td>
          <td><code>rgb(128, 0, 0)</code></td>
        </tr>
        <tr>
          <td>
            <div style="display:flex;align-items:center;gap:10px;">
              <span style="display:inline-block;width:28px;height:28px;border-radius:6px;background:#000080;border:1px solid var(--border-light);flex-shrink:0;"></span>
              <strong>Navy</strong>
            </div>
          </td>
          <td><code>#000080</code></td>
          <td><code>rgb(0, 0, 128)</code></td>
        </tr>
        <tr>
          <td>
            <div style="display:flex;align-items:center;gap:10px;">
              <span style="display:inline-block;width:28px;height:28px;border-radius:6px;background:#008080;border:1px solid var(--border-light);flex-shrink:0;"></span>
              <strong>Teal</strong>
            </div>
          </td>
          <td><code>#008080</code></td>
          <td><code>rgb(0, 128, 128)</code></td>
        </tr>
        <tr>
          <td>
            <div style="display:flex;align-items:center;gap:10px;">
              <span style="display:inline-block;width:28px;height:28px;border-radius:6px;background:#808000;border:1px solid var(--border-light);flex-shrink:0;"></span>
              <strong>Olive</strong>
            </div>
          </td>
          <td><code>#808000</code></td>
          <td><code>rgb(128, 128, 0)</code></td>
        </tr>
        <tr>
          <td>
            <div style="display:flex;align-items:center;gap:10px;">
              <span style="display:inline-block;width:28px;height:28px;border-radius:6px;background:#FF6347;border:1px solid var(--border-light);flex-shrink:0;"></span>
              <strong>Coral</strong>
            </div>
          </td>
          <td><code>#FF6347</code></td>
          <td><code>rgb(255, 99, 71)</code></td>
        </tr>
        <tr>
          <td>
            <div style="display:flex;align-items:center;gap:10px;">
              <span style="display:inline-block;width:28px;height:28px;border-radius:6px;background:#FFD700;border:1px solid var(--border-light);flex-shrink:0;"></span>
              <strong>Gold</strong>
            </div>
          </td>
          <td><code>#FFD700</code></td>
          <td><code>rgb(255, 215, 0)</code></td>
        </tr>
        <tr>
          <td>
            <div style="display:flex;align-items:center;gap:10px;">
              <span style="display:inline-block;width:28px;height:28px;border-radius:6px;background:#4B0082;border:1px solid var(--border-light);flex-shrink:0;"></span>
              <strong>Indigo</strong>
            </div>
          </td>
          <td><code>#4B0082</code></td>
          <td><code>rgb(75, 0, 130)</code></td>
        </tr>
        <tr>
          <td>
            <div style="display:flex;align-items:center;gap:10px;">
              <span style="display:inline-block;width:28px;height:28px;border-radius:6px;background:#EE82EE;border:1px solid var(--border-light);flex-shrink:0;"></span>
              <strong>Violet</strong>
            </div>
          </td>
          <td><code>#EE82EE</code></td>
          <td><code>rgb(238, 130, 238)</code></td>
        </tr>
        <tr>
          <td>
            <div style="display:flex;align-items:center;gap:10px;">
              <span style="display:inline-block;width:28px;height:28px;border-radius:6px;background:#A52A2A;border:1px solid var(--border-light);flex-shrink:0;"></span>
              <strong>Brown</strong>
            </div>
          </td>
          <td><code>#A52A2A</code></td>
          <td><code>rgb(165, 42, 42)</code></td>
        </tr>
        <tr>
          <td>
            <div style="display:flex;align-items:center;gap:10px;">
              <span style="display:inline-block;width:28px;height:28px;border-radius:6px;background:#FFC0CB;border:1px solid var(--border-light);flex-shrink:0;"></span>
              <strong>Pink</strong>
            </div>
          </td>
          <td><code>#FFC0CB</code></td>
          <td><code>rgb(255, 192, 203)</code></td>
        </tr>
        <tr>
          <td>
            <div style="display:flex;align-items:center;gap:10px;">
              <span style="display:inline-block;width:28px;height:28px;border-radius:6px;background:#32CD32;border:1px solid var(--border-light);flex-shrink:0;"></span>
              <strong>Lime</strong>
            </div>
          </td>
          <td><code>#32CD32</code></td>
          <td><code>rgb(50, 205, 50)</code></td>
        </tr>
        <tr>
          <td>
            <div style="display:flex;align-items:center;gap:10px;">
              <span style="display:inline-block;width:28px;height:28px;border-radius:6px;background:#DC143C;border:1px solid var(--border-light);flex-shrink:0;"></span>
              <strong>Crimson</strong>
            </div>
          </td>
          <td><code>#DC143C</code></td>
          <td><code>rgb(220, 20, 60)</code></td>
        </tr>
        <tr>
          <td>
            <div style="display:flex;align-items:center;gap:10px;">
              <span style="display:inline-block;width:28px;height:28px;border-radius:6px;background:#D2B48C;border:1px solid var(--border-light);flex-shrink:0;"></span>
              <strong>Tan</strong>
            </div>
          </td>
          <td><code>#D2B48C</code></td>
          <td><code>rgb(210, 180, 140)</code></td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="topic-section">
    <h3>Code Example</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
      <pre class="code-block"><code>/* Hex color */
h1 { color: #FF0000; }       /* Red */

/* RGB color */
p  { color: rgb(0, 128, 0); } /* Green */

/* Keyword color */
body { background-color: navy; }

/* Hex shorthand */
a  { color: #0F0; }           /* Same as #00FF00 */</code></pre>
    </div>


<h2>Practical Examples</h2><p>A standard button component utilizing HEX colors for the background, border, and text to ensure exact color matching:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;style&gt;
.btn-primary {
   /* Named colors are rarely used in production */
   background-color: #3b82f6;
   color: #ffffff;
   border: 1px solid #2563eb;
}

.btn-primary:hover {
   background-color: #1d4ed8;
}
&lt;/style&gt;

&lt;button class="btn-primary"&gt;Primary Action&lt;/button&gt;
&lt;button class="btn-secondary"&gt;Secondary Action&lt;/button&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Forgetting the hash (#) in HEX colors</strong> − Writing <code>color: 333333;</code> instead of <code>color: #333333;</code>. The browser will ignore the invalid value entirely.</li><li><strong>Using unreadable color names</strong> − Relying on named colors like <code>color: goldenrod;</code> which provides very little control over exact branding shades and often fails contrast tests.</li><li><strong>Low Contrast Ratios</strong> − Using light gray text on a white background (e.g., <code>color: #cccccc</code> on <code>#ffffff</code>). This makes the text unreadable and fails accessibility guidelines.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Stick to HEX or RGB in Production</strong> − They provide millions of exact shades, allowing you to match brand guidelines perfectly.</li><li><strong>Use 3-Digit HEX Shorthand</strong> − You can abbreviate HEX codes if the pairs match. <code>#ff0000</code> can be written as <code>#f00</code> to save space.</li><li><strong>Check Contrast for Accessibility</strong> − Color contrast between text and background matters greatly for readability, especially for low-vision users. A common guideline is to check contrast ratios via a contrast checker tool to ensure a minimum of 4.5:1, rather than relying purely on visual judgment.</li></ul><h2>Interview Questions</h2><p><strong>Q: How many characters does a valid HEX color code contain?</strong></p><p>A: Either 3 (shorthand, like <code>#fff</code>), 6 (standard, like <code>#ffffff</code>), or 8 (if including an alpha transparency channel at the end).</p><p><strong>Q: What does the RGB format stand for?</strong></p><p>A: Red, Green, Blue. It defines colors by specifying the intensity of those three light colors on a scale from 0 to 255.</p><p><strong>Q: How do you represent pure black in both HEX and RGB?</strong></p><p>A: HEX: <code>#000000</code>. RGB: <code>rgb(0, 0, 0)</code>.</p><p><strong>Q: Why are CSS named colors rarely used in professional web design?</strong></p><p>A: There are only 140 named colors, which is far too limiting for exact brand color matching, and their names can be ambiguous across different screen calibrations.</p><h2>Summary</h2><p>Colors breathe life into your web layout. While CSS offers simple named colors for quick prototyping, mastering 6-digit HEX codes and RGB values gives you access to the entire visual spectrum. Always prioritize high contrast between your text and backgrounds to ensure your site is readable for everyone.</p>
  </div>`
  },
  {
    id: 'colors-advanced',
    title: 'Colors — Advanced (RGBA, HSL &amp; Opacity)',
    content: `
  <div class="topic-header">
    <span class="topic-badge">Topic 9</span>
    <h1>Colors — Advanced (RGBA, HSL &amp; Opacity)</h1>
  </div>
  <div class="topic-section">
        <h3>RGBA colors</h3>
    <p>RGBA stands for Red Green Blue Alpha. It is an extension of CSS2, Alpha specifies the opacity of a color and parameter number is a numerical between 0.0 to 1.0. A Sample syntax of RGBA as shown below −</p>
    <div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy">Copy</button></div></div><pre class="code-block"><code>#d1 { background-color: rgba(255, 0, 0, 0.5); }
#d2 { background-color: rgba(0, 255, 0, 0.5); }
#d3 { background-color: rgba(0, 0, 255, 0.5); }</code></pre></div>
    <h3>HSL colors</h3>
    <p>HSL stands for hue, saturation, lightness. Here Hue is a degree on the color wheel, saturation and lightness are percentage values between 0 to 100%. A Sample syntax of HSL as shown below −</p>
    <div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy">Copy</button></div></div><pre class="code-block"><code>#g1 { background-color: hsl(120, 100%, 50%); }
#g2 { background-color: hsl(120, 100%, 75%); }
#g3 { background-color: hsl(120, 100%, 25%); }</code></pre></div>
    <h3>HSLA colors</h3>
    <p>HSLA stands for hue, saturation, lightness and alpha. Alpha value specifies the opacity as shown RGBA. A Sample syntax of HSLA as shown below −</p>
    <div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy">Copy</button></div></div><pre class="code-block"><code>#g1 { background-color: hsla(120, 100%, 50%, 0.3); }
#g2 { background-color: hsla(120, 100%, 75%, 0.3); }
#g3 { background-color: hsla(120, 100%, 25%, 0.3); }</code></pre></div>
    <p>opacity is a thinner paints need black added to increase opacity. A sample syntax of opacity is as shown below −</p>
    <div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy">Copy</button></div></div><pre class="code-block"><code>#g1 { background-color: rgb(255, 0, 0); opacity: 0.6; }
#g2 { background-color: rgb(0, 255, 0); opacity: 0.6; }
#g3 { background-color: rgb(0, 0, 255); opacity: 0.6; }</code></pre></div>
    <h3>The following example shows <code>rgba</code> <code>color</code> property</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         #p1 {background-color:rgba(255,0,0,0.3);}
         #p2 {background-color:rgba(0,255,0,0.3);}
         #p3 {background-color:rgba(0,0,255,0.3);}
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;p&gt;RGBA colors:&lt;/p&gt;
      &lt;p &gt;Red&lt;/p&gt;
      &lt;p &gt;Green&lt;/p&gt;
      &lt;p &gt;Blue&lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>The following example shows <code>HSL</code> <code>color</code> property</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         #g1 {background-color:hsl(120, 100%, 50%);}
         #g2 {background-color:hsl(120,100%,75%);}
         #g3 {background-color:hsl(120,100%,25%);}
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;p&gt;HSL colors:&lt;/p&gt;
      &lt;p &gt;Green&lt;/p&gt;
      &lt;p &gt;Normal Green&lt;/p&gt;
      &lt;p &gt;Dark Green&lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>The following example shows <code>HSLA</code> <code>color</code> property</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         #d1 {background-color:hsla(120,100%,50%,0.3);}
         #d2 {background-color:hsla(120,100%,75%,0.3);}
         #d3 {background-color:hsla(120,100%,25%,0.3);}
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;p&gt;HSLA colors:&lt;/p&gt;
      &lt;p &gt;Less opacity green&lt;/p&gt;
      &lt;p &gt;Green&lt;/p&gt;
      &lt;p &gt;Green&lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>The following example shows <code>opacity</code> property</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         #m1 {background-color:rgb(255,0,0);opacity:0.6;}
         #m2 {background-color:rgb(0,255,0);opacity:0.6;}
         #m3 {background-color:rgb(0,0,255);opacity:0.6;}
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;p&gt;HSLA colors:&lt;/p&gt;
      &lt;p &gt;Red&lt;/p&gt;
      &lt;p &gt;Green&lt;/p&gt;
      &lt;p &gt;Blue&lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>



<h2>Practical Examples</h2><p>Creating a modern <code>"glassmorphism"</code> card using an RGBA background for transparency without affecting the text inside:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;style&gt;
.glass-card {
   /* The background is 50% transparent white */
   background-color: rgba(255, 255, 255, 0.5);

   /* The text remains 100% solid black */
   color: rgb(0, 0, 0);

   border: 1px solid hsla(0, 0%, 100%, 0.3);
   backdrop-filter: blur(10px); /* Adds the frosted glass effect */
}
&lt;/style&gt;

&lt;div style="background:url('https://via.placeholder.com/400x300/0000FF/808080') center/cover; padding:50px;"&gt;
  &lt;div class="glass-card" style="padding:30px; border-radius:10px;"&gt;
    &lt;h2&gt;Glassmorphism&lt;/h2&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Using the <code>opacity</code> property for background transparency</strong> − Applying <code>opacity: 0.5</code> to a parent div makes everything inside it (including the text and images) 50% transparent. If you only want a see-through background, you MUST use <code>rgba()</code> or <code>hsla()</code> instead.</li><li><strong>Forgetting the <code>"a"</code> in the function name</strong> − Writing <code>color: rgb(255, 255, 255, 0.5);</code> in older codebases will fail. You must write <code>rgba</code> to utilize the alpha channel. (Note: Modern CSS Level 4 allows <code>rgb()</code> to take an alpha channel, but <code>rgba</code> is safer for legacy support).</li><li><strong>Misunderstanding HSL degrees</strong> − Trying to use percentages for the Hue value in HSL. Hue is measured in degrees (0 to 360) on the color wheel.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Use HSL for Design Systems</strong> − HSL (Hue, Saturation, Lightness) is incredibly human-readable. If you have a primary blue button (<code>hsl(210, 100%, 50%)</code>) and want a darker hover state, you just lower the Lightness to <code>40%</code>. No need for complex HEX math!</li><li><strong>Use CSS Variables with RGBA</strong> − Store your RGB values in a CSS variable (e.g., <code>--brand: 59, 130, 246;</code>) so you can inject them into <code>rgba()</code> functions with different opacities later: <code>rgba(var(--brand), 0.5)</code>.</li></ul><h2>Interview Questions</h2><p><strong>Q: What is the crucial difference between setting <code>opacity: 0.5</code> on a container vs setting its <code>background-color</code> to <code>rgba(0,0,0, 0.5)</code>?</strong></p><p>A: The <code>opacity</code> property makes the element AND all of its children (text, images) globally transparent. <code>rgba()</code> only makes the specific color transparent, leaving the child content fully solid and readable.</p><p><strong>Q: What do the letters HSL stand for?</strong></p><p>A: Hue (the color type, 0-360 degrees), Saturation (the intensity of the color, 0-100%), and Lightness (how bright or dark the color is, 0-100%).</p><p><strong>Q: What does the <code>"A"</code> stand for in RGBA and HSLA?</strong></p><p>A: Alpha, which represents the alpha transparency channel on a scale from 0 (completely transparent) to 1 (completely solid).</p><h2>Summary</h2><p>Advanced color functions unlock the ability to design nuanced, modern interfaces. While HEX is great for solid brand colors, <code>rgba()</code> is mandatory for transparent overlays that don't ruin text legibility. Meanwhile, <code>hsl()</code> provides a mathematically logical way to build color palettes and manage light/dark mode variations effortlessly.</p>
  </div>`
  },
  {
    id: 'box-model',
    title: 'Box Model',
    content: `

  <div class="topic-header">
    <span class="topic-badge">Topic 10</span>
    <h1>Box Model</h1>
  </div>
  <div class="topic-section">



    <h2>Introduction to the CSS Box Model</h2>
    <p>The <b>CSS Box Model</b> is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content.</p>
    <p>The box model allows us to add a border around elements, and to define space between elements. Understanding it is crucial for creating accurate layouts and aligning items on a webpage.</p>

    <h3>The Four Areas of the Box Model</h3>
    <table class="css-table">
  <thead>
    <tr><th>Property</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Content</strong></td><td>The actual content of the box, where text and images appear.</td></tr>
<tr><td><strong>Padding</strong></td><td>Clears an area around the content. The padding is transparent.</td></tr>
<tr><td><strong>Border</strong></td><td>A border that goes around the padding and content.</td></tr>
<tr><td><strong>Margin</strong></td><td>Clears an area outside the border. The margin is transparent.</td></tr>
  </tbody>
</table>

    <div style="background:var(--border-light); padding:20px; text-align:center; margin: 20px 0; border:1px solid var(--border); border-radius: var(--radius-sm);">
        <div style="background:#fcd34d; padding:20px; border:2px dashed #b45309; display:inline-block;">
            <div style="margin-bottom:10px; font-weight:bold; color:#78350f;">Margin</div>
            <div style="background:#6ee7b7; padding:20px; border:2px solid #047857; display:inline-block;">
                <div style="margin-bottom:10px; font-weight:bold; color:#064e3b;">Border</div>
                <div style="background:#93c5fd; padding:20px; border:2px dashed #1d4ed8; display:inline-block;">
                    <div style="margin-bottom:10px; font-weight:bold; color:#1e3a8a;">Padding</div>
                    <div style="background:white; padding:20px; border:1px solid #ccc; display:inline-block; font-weight:bold; color:#333;">
                        Content Area
                    </div>
                </div>
            </div>
        </div>
    </div>




    <h2>Content Area</h2>
    <p>The content area is the innermost part of the box model. It contains the actual content of the element, such as text, images, or other nested elements.</p>
    <p>The dimensions of this area are typically defined by the <code>width</code> and <code>height</code> properties (unless <code>box-sizing: border-box</code> is used).</p>


  <h2>Dimensions</h2>

    <p>You have seen the border that surrounds every box ie. element, the padding that can appear inside each box and the margin that can go around them. In this tutorial we will how we can change the dimensions of boxes.</p>
    <p>We have the following properties that allow you to control the dimensions of a box.</p>
    <table class="css-table">
  <thead>
    <tr><th>Property</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><code>height</code></td><td>Used to set the height of a box.</td></tr>
<tr><td><code>width</code></td><td>Used to set the width of a box.</td></tr>
<tr><td><code>line-height</code></td><td>Used to set the height of a line of text.</td></tr>
<tr><td><code>max-height</code></td><td>Used to set a maximum height that a box can be.</td></tr>
<tr><td><code>min-height</code></td><td>Used to set the minimum height that a box can be.</td></tr>
<tr><td><code>max-width</code></td><td>Used to set the maximum width that a box can be.</td></tr>
<tr><td><code>min-width</code></td><td>Used to set the minimum width that a box can be.</td></tr>
  </tbody>
</table>
    <h3>The Height and Width Properties</h3>
    <p>The height and <code>width</code> properties allow you to set the height and width for boxes. They can take values of a length, a percentage, or the keyword auto.</p>
    <h3>Example</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="width:400px; height:100px;border:1px solid red;padding:5px;
margin:10px;"&gt;
      This paragraph is 400pixels wide and 100 pixels high
   &lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>The line-height Property</h3>
    <p>The <code>line-height</code> property allows you to increase the space between lines of text. The value of the <code>line-height</code> property can be a number, a length, or a percentage.</p>
    <h3>Example</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
&lt;body&gt;
      &lt;p style="width:400px; height:100px;border:1px solid red;padding:5px;
margin:10px;line-height:30px;"&gt;
This paragraph is 400pixels wide and 100 pixels high and here line height is  30pixels.
This paragraph is 400 pixels wide and 100 pixels high and here line height is 30pixels.
&lt;/p&gt;
&lt;/body&gt;
&lt;/head&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>The max-height Property</h3>
    <p>The <code>max-height</code> property allows you to specify maximum height of a box. The value of the <code>max-height</code> property can be a number, a length, or a percentage.</p>
    <p>NOTE − This property does not work in either Netscape 7 or IE 6.</p>
    <h3>Example</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="width:400px; max-height:10px;border:1px solid red;padding:5px;
margin:10px;"&gt;
      This paragraph is 400px wide and max height is 10px
      This paragraph is 400px wide and max height is 10px
      This paragraph is 400px wide and max height is 10px
      This paragraph is 400px wide and max height is 10px
      &lt;/p&gt;
      &lt;br&gt;
      &lt;br&gt;
      &lt;br&gt;
      &lt;img alt="logo" src="../assets/images/demo-logo.png" width="150" width="195" height="84" /&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>The min-height Property</h3>
    <p>The <code>min-height</code> property allows you to specify minimum height of a box. The value of the <code>min-height</code> property can be a number, a length, or a percentage.</p>
    <p>NOTE − This property does not work in either Netscape 7 or IE 6.</p>
    <h3>Example</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="width:400px; min-height:200px;border:1px solid red;padding:5px;
margin:10px;"&gt;
      This paragraph is 400px wide and min height is 200px
      This paragraph is 400px wide and min height is 200px
      This paragraph is 400px wide and min height is 200px
      This paragraph is 400px wide and min height is 200px
      &lt;/p&gt;
      &lt;img alt="logo" src="../assets/images/demo-logo.png" width="150" width="95" height="84" /&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>The max-width Property</h3>
    <p>The <code>max-width</code> property allows you to specify maximum width of a box. The value of the <code>max-width</code> property can be a number, a length, or a percentage.</p>
    <p>NOTE − This property does not work in either Netscape 7 or IE 6.</p>
    <h3>Example</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="max-width:100px; height:200px;border:1px solid red;padding:5px;
margin:10px;"&gt;
      This paragraph is 200px high and max width is 100px
      This paragraph is 200px high and max width is 100px
      &lt;/p&gt;
      &lt;img alt="logo" src="../assets/images/demo-logo.png" width="150" width="95" height="84" /&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>The min-width Property</h3>
    <p>The <code>min-width</code> property allows you to specify minimum width of a box. The value of the <code>min-width</code> property can be a number, a length, or a percentage.</p>
    <p>NOTE − This property does not work in either Netscape 7 or IE 6.</p>
    <h3>Example</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="min-width:400px; height:100px;border:1px solid red;padding:5px;
margin:10px;"&gt;
      This paragraph is 100px high and min width is 400px
      This paragraph is 100px high and min width is 400px
      &lt;img alt="logo" src="../assets/images/demo-pattern.png" width="95" height="84" /&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>



    <h3>Aspect Ratio</h3>
    <p>The <code>aspect-ratio</code> property lets you set a fixed width-to-height ratio for an element, so it scales proportionally without needing a fixed height. This is particularly useful for responsive video wrappers or image containers to prevent layout shifts as the page loads.</p>
    <div class="code-wrap">
      <div class="code-header">
    <div class="code-header-left">
      <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
      <span class="code-lang-tag">CSS</span>
    </div>
    <div class="code-actions">
      <button type="button" class="btn-copy">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
        Copy
      </button>
      <button type="button" class="btn-try">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
        Try It Yourself
      </button>
    </div>
      </div>
      <pre class="code-block"><code>.video-wrapper {
  aspect-ratio: 16 / 9;
  width: 100%;
}</code></pre>
    </div>
    <h2>Padding</h2>

    <p>The <code>padding</code> property allows you to specify how much space should appear between the content of an element and its border − The value of this attribute should be either a length, a percentage, or the word inherit. If the value is inherit, it will have the same padding as its parent element. If a percentage is used, the percentage is of the containing box.</p>
    <p>The following CSS properties can be used to control lists. You can also set different values for the padding on each side of the box using the following properties −</p>
    <table class="css-table">
  <thead>
    <tr><th>Property</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><code>padding-bottom</code></td><td>Specifies the bottom padding of an element.</td></tr>
<tr><td><code>padding-top</code></td><td>Specifies the top padding of an element.</td></tr>
<tr><td><code>padding-left</code></td><td>Specifies the left padding of an element.</td></tr>
<tr><td><code>padding-right</code></td><td>Specifies the right padding of an element.</td></tr>
<tr><td><code>padding</code></td><td>Serves as shorthand for the preceding properties.</td></tr>
  </tbody>
</table>
    <p>Now, we will see how to use these properties with examples.</p>
    <h3>The padding-bottom Property</h3>
    <p>The <code>padding-bottom</code> property sets the bottom padding space of an element. This can take a value in terms of length of %.</p>
    <h3>Example</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="padding-bottom: 15px; border:1px solid black;"&gt;
      This is a paragraph with a specified bottom padding
      &lt;/p&gt;
      &lt;p style="padding-bottom: 5%; border:1px solid black;"&gt;
      This is another paragraph with a specified bottom padding in percent
      &lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>The padding-top Property</h3>
    <p>The <code>padding-top</code> property sets the top padding space of an element. This can take a value in terms of length of %.</p>
    <h3>Example</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="padding-top: 15px; border:1px solid black;"&gt;
      This is a paragraph with a specified top padding
      &lt;/p&gt;
      &lt;p style="padding-top: 5%; border:1px solid black;"&gt;
      This is another paragraph with a specified top padding in percent
      &lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>The padding-left Property</h3>
    <p>The <code>padding-left</code> property sets the left padding space of an element. This can take a value in terms of length of %.</p>
    <h3>Example</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="padding-left: 15px; border:1px solid black;"&gt;
      This is a paragraph with a specified left padding
      &lt;/p&gt;
      &lt;p style="padding-left: 15%; border:1px solid black;"&gt;
      This is another paragraph with a specified left padding in percent
      &lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>The padding-right Property</h3>
    <p>The <code>padding-right</code> property sets the right padding space of an element. This can take a value in</p>
    <p>terms of length of %.</p>
    <h3>Example</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="padding-right: 15px; border:1px solid black;"&gt;
      This is a paragraph with a specified right padding
      &lt;/p&gt;
      &lt;p style="padding-right: 5%; border:1px solid black;"&gt;
      This is another paragraph with a specified right padding in percent
      &lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>The Padding Property</h3>
    <p>The <code>padding</code> property sets the left, right, top and bottom padding space of an element. This can take a value in terms of length of %.</p>
    <h3>Example</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="padding: 15px; border:1px solid black;"&gt;
      all four padding will be 15px
      &lt;/p&gt;
      &lt;p style="padding:10px 2%; border:1px solid black;"&gt;
      top and bottom padding will be 10px, left and right
      padding will be 2% of the total width of the document.
      &lt;/p&gt;
      &lt;p style="padding: 10px 2% 10px; border:1px solid black;"&gt;
      top padding will be 10px, left and right padding will
      be 2% of the total width of the document, bottom padding will be 10px
      &lt;/p&gt;
      &lt;p style="padding: 10px 2% 10px 10px; border:1px solid black;"&gt;
      top padding will be 10px, right padding will be 2% of
      the total width of the document, bottom padding and top padding will be 10px
      &lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>


  <h2>Borders</h2>

    <p>The <code>border</code> properties allow you to specify how the border of the box representing an element should look. There are three properties of a border you can change:</p>
    <p>The <code>border-color</code> specifies the color of a border.</p>
    <p>The <code>border-style</code> specifies whether a border should be solid, dashed line, double line, or one of the other possible values.</p>
    <p>The <code>border-width</code> specifies the width of a border.</p>
    <p>Now, we will see how to use these properties with examples.</p>
    <h3>The border-color Property</h3>
    <p>The <code>border-color</code> property allows you to change the color of the border surrounding an element. You can individually change the color of the bottom, left, top and right sides of an element's border using the properties −</p>
    <table class="css-table">
  <thead>
    <tr><th>Property</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><code>border-bottom-color</code></td><td>Changes the color of bottom border.</td></tr>
<tr><td><code>border-top-color</code></td><td>Changes the color of top border.</td></tr>
<tr><td><code>border-left-color</code></td><td>Changes the color of left border.</td></tr>
<tr><td><code>border-right-color</code></td><td>Changes the color of right border.</td></tr>
  </tbody>
</table>
    <p>The following example shows the effect of all these properties −</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style type="text/css"&gt;
         p.example1{
            border:1px solid;
            border-bottom-color:#009900; /* Green */
            border-top-color:#FF0000;    /* Red */
            border-left-color:#330000;   /* Black */
            border-right-color:#0000CC;  /* Blue */
         }
         p.example2{
            border:1px solid;
            border-color:#009900;        /* Green */
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;p class="example1"&gt;This example is showing all borders in different colors.&lt;/p&gt;
      &lt;p class="example2"&gt;This example is showing all borders in green color only.&lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>




    <h3>The border-style Property</h3>
    <p>The <code>border-style</code> property allows you to select one of the following styles of border −</p>
    <table class="css-table">
  <thead>
    <tr><th>Property</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><code>none</code></td><td>No border. Equivalent to border-width: 0.</td></tr>
    <tr><td><code>solid</code></td><td>Border is a single solid line.</td></tr>
    <tr><td><code>dotted</code></td><td>Border is a series of dots.</td></tr>
    <tr><td><code>dashed</code></td><td>Border is a series of short lines.</td></tr>
    <tr><td><code>double</code></td><td>Border is two solid lines.</td></tr>
    <tr><td><code>groove</code></td><td>Border looks as though it is carved into the page.</td></tr>
    <tr><td><code>ridge</code></td><td>Border looks the opposite of groove.</td></tr>
    <tr><td><code>inset</code></td><td>Border makes the box look like it is embedded in the page.</td></tr>
    <tr><td><code>outset</code></td><td>Border makes the box look like it is coming out of the canvas.</td></tr>
    <tr><td><code>hidden</code></td><td>Same as none, except in terms of border-conflict resolution for table elements.</td></tr>
  </tbody>
</table>

    <p>You can individually change the style of the bottom, left, top, and right borders of an element using the following properties −</p>
    <table class="css-table">
  <thead>
    <tr><th>Property</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><code>border-bottom-style</code></td><td>Changes the style of bottom border.</td></tr>
<tr><td><code>border-top-style</code></td><td>Changes the style of top border.</td></tr>
<tr><td><code>border-left-style</code></td><td>Changes the style of left border.</td></tr>
<tr><td><code>border-right-style</code></td><td>Changes the style of right border.</td></tr>
  </tbody>
</table>
    <p>The following example shows all these border styles −</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;.
      &lt;p style="border-width:4px; border-style:none;"&gt;
      This is a border with none width.
      &lt;/p&gt;
      &lt;p style="border-width:4px; border-style:solid;"&gt;
      This is a solid border.
      &lt;/p&gt;
      &lt;p style="border-width:4px; border-style:dashed;"&gt;
      This is a dashed border.
      &lt;/p&gt;
      &lt;p style="border-width:4px; border-style:double;"&gt;
      This is a double border.
      &lt;/p&gt;
      &lt;p style="border-width:4px; border-style:groove;"&gt;
      This is a groove border.
      &lt;/p&gt;
      &lt;p style="border-width:4px; border-style:ridge"&gt;
      This is a ridge  border.
      &lt;/p&gt;
      &lt;p style="border-width:4px; border-style:inset;"&gt;
      This is a inset border.
      &lt;/p&gt;
      &lt;p style="border-width:4px; border-style:outset;"&gt;
      This is a outset border.
      &lt;/p&gt;
      &lt;p style="border-width:4px; border-style:hidden;"&gt;
      This is a hidden border.
      &lt;/p&gt;
      &lt;p style="border-width:4px;border-top-style:solid;
      border-bottom-style:dashed;border-left-style:groove;border-right-style:double;"&gt;
      This is a a border with four different styles.
      &lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

<p>The border-width Property −</p>
    <p>The <code>border-width</code> property allows you to set the width of an element borders. The value of this property could be either a length in px, pt or cm or it should be set to thin, medium or thick.</p>
    <p>You can individually change the width of the bottom, top, left, and right borders of an element using the following properties −</p>
    <table class="css-table">
  <thead>
    <tr><th>Property</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><code>border-bottom-width</code></td><td>Changes the width of bottom border.</td></tr>
<tr><td><code>border-top-width</code></td><td>Changes the width of top border.</td></tr>
<tr><td><code>border-left-width</code></td><td>Changes the width of left border.</td></tr>
<tr><td><code>border-right-width</code></td><td>Changes the width of right border.</td></tr>
  </tbody>
</table>
    <p>The following example shows all these border width −</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="border-width:4px; border-style:solid;"&gt;
      This is a solid border whose width is 4px.
      &lt;/p&gt;
      &lt;p style="border-width:4pt; border-style:solid;"&gt;
      This is a solid border whose width is 4pt.
      &lt;/p&gt;
      &lt;p style="border-width:thin; border-style:solid;"&gt;
      This is a solid border whose width is thin.
      &lt;/p&gt;
      &lt;p style="border-width:medium; border-style:solid;"&gt;
      This is a solid border whose width is medium;
      &lt;/p&gt;
      &lt;p style="border-width:thick; border-style:solid;"&gt;
      This is a solid border whose width is thick.
      &lt;/p&gt;
      &lt;p style="border-bottom-width:4px;border-top-width:10px;
      border-left-width: 2px;border-right-width:15px;border-style:solid;"&gt;
      This is a a border with four different width.
      &lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>Border Properties Using Shorthand</h3>
    <p>The <code>border</code> property allows you to specify color, style, and width of lines in one property −</p>
    <p>The following example shows how to use all the three properties into a single property. This is the most frequently used property to set border around any element.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="border:4px solid red;"&gt;
      This example is showing shorthand property for border.
      &lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>


  <h2>Margins</h2>

    <p>The <code>margin</code> property defines the space around an HTML element. It is possible to use negative values to overlap content.</p>
    <p>The values of the <code>margin</code> property are not inherited by the child elements. Remember that the adjacent vertical margins (top and bottom margins) will collapse into each other so that the distance between the blocks is not the sum of the margins, but only the greater of the two margins or the same size as one margin if both are equal.</p>
    <p>We have the following properties to set an element margin.</p>
    <table class="css-table">
  <thead>
    <tr><th>Property</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><code>margin</code></td><td>Specifies a shorthand property for setting the <code>margin</code> properties in one declaration.</td></tr>
<tr><td><code>margin-bottom</code></td><td>Specifies the bottom margin of an element.</td></tr>
<tr><td><code>margin-top</code></td><td>Specifies the top margin of an element.</td></tr>
<tr><td><code>margin-left</code></td><td>Specifies the left margin of an element.</td></tr>
<tr><td><code>margin-right</code></td><td>Specifies the right margin of an element.</td></tr>
  </tbody>
</table>
    <p>Now, we will see how to use these properties with examples.</p>
    <h3>The Margin Property</h3>
    <p>The <code>margin</code> property allows you set all of the properties for the four margins in one declaration. Here is the syntax to set margin around a paragraph −</p>
    <h3>Example</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="margin: 15px; border:1px solid black;"&gt;
      all four margins will be 15px
      &lt;/p&gt;
      &lt;p style="margin:10px 2%; border:1px solid black;"&gt;
      top and bottom margin will be 10px, left and right margin will be 2% of the total
width of the document.
      &lt;/p&gt;
      &lt;p style="margin: 10px 2% -10px; border:1px solid black;"&gt;
      top margin will be 10px, left and right margin will be 2% of the total width of
the document, bottom margin will be -10px
      &lt;/p&gt;
      &lt;p style="margin: 10px 2% -10px auto; border:1px solid black;"&gt;
      top margin will be 10px, right margin will be 2% of the total width of the
document, bottom margin will be -10px, left margin will be set by the browser
      &lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>The margin-bottom Property</h3>
    <p>The <code>margin-bottom</code> property allows you set bottom margin of an element. It can have a value in length, % or auto.</p>
    <h3>Example</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="margin-bottom: 15px; border:1px solid black;"&gt;
      This is a paragraph with a specified bottom margin.
      &lt;/p&gt;
      &lt;p style="margin-bottom: 5%; border:1px solid black;"&gt;
      This is another paragraph with a specified bottom margin in percent
      &lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>The margin-top Property</h3>
    <p>The <code>margin-top</code> property allows you set top margin of an element. It can have a value in length, % or auto.</p>
    <h3>Example</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="margin-top: 15px; border:1px solid black;"&gt;
      This is a paragraph with a specified top margin
      &lt;/p&gt;
      &lt;p style="margin-top: 5%; border:1px solid black;"&gt;
      This is another paragraph with a specified top margin in percent
      &lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>The margin-left Property</h3>
    <p>The <code>margin-left</code> property allows you set left margin of an element. It can have a value in length, % or auto.</p>
    <h3>Example</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="margin-left: 15px; border:1px solid black;"&gt;
      This is a paragraph with a specified left margin
      &lt;/p&gt;
      &lt;p style="margin-left: 5%; border:1px solid black;"&gt;
      This is another paragraph with a specified top margin in percent
      &lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>The margin-right Property</h3>
    <p>The <code>margin-right</code> property allows you set right margin of an element. It can have a value in length, % or auto.</p>
    <h3>Example</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="margin-right: 15px; border:1px solid black;"&gt;
      This is a paragraph with a specified right margin
      &lt;/p&gt;
      &lt;p style="margin-right: 5%; border:1px solid black;"&gt;
      This is another paragraph with a specified right margin in percent
      &lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>




    <h2>Total Width &amp; Height Calculation</h2>
    <p>When you set the <code>width</code> and <code>height</code> properties of an element with CSS, you just set the width and height of the <b>content area</b>.</p>
    <p>To calculate the full size of an element, you must also add padding, borders and margins.</p>
    <ul class="list">
        <li><b>Total Width</b> = width + left padding + right padding + left border + right border + left margin + right margin</li>
        <li><b>Total Height</b> = height + top padding + bottom padding + top border + bottom border + top margin + bottom margin</li>
    </ul>
    <p>For example, if you set a width of 300px, 20px padding, 5px border, and 10px margin, the total horizontal space the element takes is: <code>300 + 20 + 20 + 5 + 5 + 10 + 10 = 370px</code>.</p>


  <h2>Box Sizing</h2>

    <p>Box sizing property is using to change the height and width of element.</p>
    <p>Since CSS2, the box property has worked as shown below −</p>
    <p>width + padding + border = actual visible/rendered width of an element's box</p>
    <p>height + padding + border = actual visible/rendered height of an element's box</p>
    <p>Means when you set the height and width, it appears a little bit bigger than the given size because the element's border and padding are added to the element's height and width.</p>
    <h3>CSS2 sizing property</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         .div1 {
            width: 200px;
            height: 100px;
            border: 1px solid green;
         }
         .div2 {
            width: 200px;
            height: 100px;
            padding: 50px;
            border: 1px solid pink;
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;div id="multibackground"&gt;Hello World&lt;/div&gt;&lt;/br&gt;
&lt;div class="div2"&gt;Hello World&lt;/div&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <p>Above image is having same width and height of two element but giving result is different, because the second one is included <code>padding</code> property.</p>
    <h3>CSS3 box sizing property</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         .div1 {
            width: 300px;
            height: 100px;
            border: 1px solid blue;
            box-sizing: border-box;
         }
         .div2 {
            width: 300px;
            height: 100px;
            padding: 50px;
            border: 1px solid red;
            box-sizing: border-box;
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;div id="multibackground"&gt;Hello World&lt;/div&gt;&lt;/br&gt;
&lt;div class="div2"&gt;Hello World&lt;/div&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>
    <p>Above sample is having same height and width with <code>box-sizing: border-box</code>. Here the result is shown below.</p>
    <ul class="list">
        <li>Above elements are having same height and width with <code>box-sizing: border-box</code> so result is always same for both elements as shown above.</li>
    </ul>






  <h2>Outlines</h2>

    <p>An outline does not take up space.</p>
    <p>Outlines do not have to be rectangular.</p>
    <p>Outline is always the same on all sides; you cannot specify different values for different sides of an element.</p>
    <p>NOTE − The outline properties are not supported by IE 6 or Netscape 7.</p>
    <ul class="list">
        <li>You can set the following outline properties using CSS.</li>
    </ul>

    <p>You can set the following outline properties using CSS.</p>
    <table class="css-table">
  <thead>
    <tr><th>Property</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><code>outline-width</code></td><td>Used to set the width of the outline.</td></tr>
<tr><td><code>outline-style</code></td><td>Used to set the line style for the outline.</td></tr>
<tr><td><code>outline-color</code></td><td>Used to set the color of the outline.</td></tr>
<tr><td><code>outline</code></td><td>Used to set all the above three properties in a single statement.</td></tr>
  </tbody>
</table>
    <h3>The outline-width Property</h3>
    <p>The <code>outline-width</code> property specifies the width of the outline to be added to the box. Its value should be a length or one of the values thin, medium, or thick, just like the border-width attribute.</p>
    <p>A width of zero pixels means no outline.</p>
    <h3>Example</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="outline-width:thin; outline-style:solid;"&gt;
      This text is having thin outline.
      &lt;/p&gt;
      &lt;br /&gt;
      &lt;p style="outline-width:thick; outline-style:solid;"&gt;
      This text is having thick outline.
      &lt;/p&gt;
      &lt;br /&gt;
      &lt;p style="outline-width:5px; outline-style:solid;"&gt;
      This text is having 5x outline.
      &lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>The outline-style Property</h3>
    <p>The <code>outline-style</code> property specifies the style for the line solid, dotted, or dashed that goes around an element. It can take one of the following values −</p>
    <table class="css-table">
  <thead>
    <tr><th>Property</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><code>none</code></td><td>No border. Equivalent to outline-width: 0;</td></tr>
<tr><td><code>solid</code></td><td>Outline is a single solid line.</td></tr>
<tr><td><code>dotted</code></td><td>Outline is a series of dots.</td></tr>
<tr><td><code>dashed</code></td><td>Outline is a series of short lines.</td></tr>
<tr><td><code>double</code></td><td>Outline is two solid lines.</td></tr>
<tr><td><code>groove</code></td><td>Outline looks as though it is carved into the page.</td></tr>
<tr><td><code>ridge</code></td><td>Outline looks the opposite of groove.</td></tr>
<tr><td><code>inset</code></td><td>Outline makes the box look like it is embedded in the page.</td></tr>
<tr><td><code>outset</code></td><td>Outline makes the box look like it is coming out of the canvas.</td></tr>
<tr><td><code>hidden</code></td><td>Same as none.</td></tr>
  </tbody>
</table>
    <h3>Example</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="outline-width:thin; outline-style:solid;"&gt;
      This text is having thin solid  outline.
      &lt;/p&gt;
      &lt;br /&gt;
      &lt;p style="outline-width:thick; outline-style:dashed;"&gt;
      This text is having thick dashed outline.
      &lt;/p&gt;
      &lt;br /&gt;
      &lt;p style="outline-width:5px;outline-style:dotted;"&gt;
      This text is having 5x dotted outline.
      &lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>The outline-color Property</h3>
    <p>The <code>outline-color</code> property allows you to specify the color of the outline. Its value should either be a color name, a hex color, or an RGB value, as with the color and <code>border-color</code> properties.</p>
    <h3>Example</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="outline-width:thin; outline-style:solid;outline-color:red"&gt;
      This text is having thin solid red  outline.
      &lt;/p&gt;
      &lt;br /&gt;
      &lt;p style="outline-width:thick; outline-style:dashed;outline-color:#009900"&gt;
      This text is having thick dashed green outline.
      &lt;/p&gt;
      &lt;br /&gt;
      &lt;p style="outline-width:5px;outline-style:dotted;outline-color:rgb(13,33,232)"&gt;
      This text is having 5x dotted blue outline.
      &lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>The outline Property</h3>
    <p>The <code>outline</code> property is a shorthand property that allows you to specify values for any of the three properties discussed previously in any order but in a single statement.</p>
    <h3>Example</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="outline:thin solid red;"&gt;
      This text is having thin solid red outline.
      &lt;/p&gt;
      &lt;br /&gt;
      &lt;p style="outline:thick dashed #009900;"&gt;
      This text is having thick dashed green outline.
      &lt;/p&gt;
      &lt;br /&gt;
      &lt;p style="outline:5px dotted rgb(13,33,232);"&gt;
      This text is having 5x dotted blue outline.
      &lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>


  <h2>Rounded Corners (Border Radius)</h2>

    <p>CSS3 Rounded corners are used to add special colored corner to body or text by using the <code>border-radius</code> property. A simple syntax of rounded corners is as follows −</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>#rcorners7 {
   border-radius: 60px/15px;
   background: #FF0000;
   padding: 20px;
   width: 200px;
   height: 150px;
}</code></pre>
    </div>
    <p>The following table shows the possible values for Rounded corners as follows −</p>
    <table class="css-table">
      <thead>
        <tr>
          <th>Value</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>border-radius</td>
          <td>Use this element for setting four border radius property</td>
        </tr>
        <tr>
          <td>border-top-left-radius</td>
          <td>Use this element for setting the border of top left corner</td>
        </tr>
        <tr>
          <td>border-top-right-radius</td>
          <td>Use this element for setting the border of top right corner</td>
        </tr>
        <tr>
          <td>border-bottom-right-radius</td>
          <td>Use this element for setting the border of bottom right corner</td>
        </tr>
        <tr>
          <td>border-bottom-left-radius</td>
          <td>Use this element for setting the border of bottom left corner</td>
        </tr>
      </tbody>
    </table>
    <h3>Example</h3>
    <p>This property can have three values. The following example uses both the values:</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         #rcorners1 {
            border-radius: 25px;
            background: #8AC007;
            padding: 20px;
            width: 200px;
            height: 150px;
         }
         #rcorners2 {
            border-radius: 25px;
            border: 2px solid #8AC007;
            padding: 20px;
            width: 200px;
            height: 150px;
         }
         #rcorners3 {
            border-radius: 25px;
            background: url(paper.gif);
            background-position: left top;
            background-repeat: repeat;
            padding: 20px;
            width: 200px;
            height: 150px;
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;p &gt;Rounded corners!&lt;/p&gt;
&lt;p &gt;Rounded corners!&lt;/p&gt;
&lt;p &gt;Rounded corners!&lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>Each Corner property</h3>
    <p>We can specify the each corner property as shown below example</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         #rcorners1 {
            border-radius: 15px 50px 30px 5px;
            background: #a44170;
            padding: 20px;
            width: 100px;
            height: 100px;
         }
         #rcorners2 {
            border-radius: 15px 50px 30px;
            background: #a44170;
            padding: 20px;
            width: 100px;
            height: 100px;
         }
         #rcorners3 {
            border-radius: 15px 50px;
            background: #a44170;
            padding: 20px;
            width: 100px;
            height: 100px;
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;p id="rcorners1"&gt;Four values: 15px 50px 30px 5px&lt;/p&gt;
      &lt;p id="rcorners2"&gt;Three values: 15px 50px 30px&lt;/p&gt;
      &lt;p id="rcorners3"&gt;Two values: 15px 50px&lt;/p&gt;
   &lt;/body&gt;
&lt;body&gt;
      &lt;/html&gt;</code></pre>
    </div>


  <h2>Box Shadow</h2>

    <h3>Text shadow</h3>
<p>CSS3 supported to add shadow effects to text. Following is the example to add shadow effects to text.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         h1 {
            text-shadow: 2px 2px;
         }
         h2 {
            text-shadow: 2px 2px red;
         }
         h3 {
            text-shadow: 2px 2px 5px red;
         }
         h4 {
            color: white;
            text-shadow: 2px 2px 4px #000000;
         }
         h5 {
            text-shadow: 0 0 3px #FF0000;
         }
         h6 {
            text-shadow: 0 0 3px #FF0000, 0 0 5px #0000FF;
         }
         p {
            color: white;
            text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;h1&gt;Hello World&lt;/h1&gt;
&lt;h2&gt;Hello World&lt;/h2&gt;
&lt;h3&gt;Hello World&lt;/h3&gt;
&lt;h4&gt;Hello World&lt;/h4&gt;
&lt;h5&gt;Hello World&lt;/h5&gt;
&lt;h6&gt;Hello World&lt;/h6&gt;
&lt;p&gt;Hello World&lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>Box Shadow</h3>
    <p>Used to add shadow effects to elements,Following is the example to add shadow effects to element.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         div {
            width: 300px;
            height: 100px;
            padding: 15px;
            background-color: red;
            box-shadow: 10px 10px;
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;div&gt;This is a div element with a box-shadow&lt;/div&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <p>CSS3 contained several extra features, which is added later on</p>

  <h2>Scrollbars &amp; Overflow</h2>

    <p>There may be a case when an element's content might be larger than the amount of space allocated to it. CSS provides a property called <strong>overflow</strong> which tells the browser what to do if the box's contents is larger than the box itself.</p>
    <table class="css-table">
  <thead>
    <tr><th>Value</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><code>visible</code></td><td>Allows the content to overflow the borders of its containing element.</td></tr>
    <tr><td><code>hidden</code></td><td>Content is cut off at the border and no scrollbars are visible.</td></tr>
    <tr><td><code>scroll</code></td><td>Scrollbars are added so the user can scroll to see the content.</td></tr>
    <tr><td><code>auto</code></td><td>Same as scroll, but the scrollbar is only shown if the content does overflow.</td></tr>
  </tbody>
</table>
    <h3>Example</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style type="text/css"&gt;
         .scroll {
            display: block;
            border: 1px solid red;
            padding: 5px;
            margin-top: 5px;
            width: 300px;
            height: 50px;
            overflow: scroll;
         }
         .auto {
            display: block;
            border: 1px solid red;
            padding: 5px;
            margin-top: 5px;
            width: 300px;
            height: 50px;
            overflow: auto;
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;p&gt;Example of scroll value:&lt;/p&gt;
      &lt;div class="scroll"&gt;
         I am going to keep a lot of content here just to show you how scrollbars works
         if there is an overflow in an element box. This provides your horizontal
         as well as vertical scrollbars.
      &lt;/div&gt;
      &lt;br /&gt;
      &lt;p&gt;Example of auto value:&lt;/p&gt;
      &lt;div class="auto"&gt;
         I am going to keep a lot of content here just to show you how scrollbars works
         if there is an overflow in an element box. This provides your horizontal
         as well as vertical scrollbars.
      &lt;/div&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>




    <h3>Scroll Snapping</h3>
    <p>The <code>scroll-snap</code> properties let a scrolling container "snap" to specific child elements as the user scrolls. When combined with a scrollable overflow container, this makes it incredibly easy to build native-feeling image carousels and galleries without complex JavaScript.</p>
    <div class="code-wrap">
      <div class="code-header">
    <div class="code-header-left">
      <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
      <span class="code-lang-tag">CSS</span>
    </div>
    <div class="code-actions">
      <button type="button" class="btn-copy">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
        Copy
      </button>
      <button type="button" class="btn-try">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
        Try It Yourself
      </button>
    </div>
      </div>
      <pre class="code-block"><code>.gallery {
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
}
.gallery img {
  scroll-snap-align: center;
}</code></pre>
    </div>
    <h2>Practical Examples</h2>
    <p>Here is a complete example bringing all the box model properties together:</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;style&gt;
.box {
  width: 250px;
  padding: 20px;
  border: 5px solid gray;
  margin: 15px;
  background-color: lightblue;
  box-shadow: 4px 4px 10px rgba(0,0,0,0.2);
  border-radius: 8px;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;div class="box"&gt;
  This box has a width of 250px, but takes up 300px of actual space (250 + 20 + 20 + 5 + 5).
&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>




    <h2>Common Mistakes</h2>
    <ul class="list">
        <li><b>Forgetting Total Size:</b> Setting an element to <code>width: 100%</code> and then adding padding, which causes it to overflow its container. Solution: use <code>box-sizing: border-box</code>.</li>
        <li><b>Margin Collapse:</b> Vertical margins of adjacent elements sometimes collapse into a single margin. This is normal behavior but can be confusing for beginners.</li>
        <li><b>Inline Elements:</b> Trying to set top/bottom margins or width/height on inline elements (like <code>&lt;span&gt;</code> or <code>&lt;a&gt;</code>). These properties only work on block or inline-block elements.</li>
    </ul>




    <h2>Best Practices</h2>
    <ul class="list">
        <li><b>Universal Border-Box:</b> It is highly recommended to apply <code>box-sizing: border-box;</code> to all elements using the universal selector <code>*</code> to make sizing much more intuitive.</li>
        <li><b>Use Shorthands:</b> Instead of writing four separate <code>margin</code> properties, use the shorthand <code>margin: 10px 20px;</code> to keep your CSS clean.</li>
        <li><b>Avoid Magic Numbers:</b> Instead of randomly tweaking margins/paddings by 1px until it looks right, stick to a consistent spacing system (e.g., multiples of 4px or 8px).</li>
    </ul>




    <h2>Interview Questions</h2>
    <ul class="list">
        <li><b>What is the CSS Box Model and what are its elements?</b><br>It's a box wrapping every HTML element, consisting of content, padding, borders, and margins.</li>
        <li><b>What is the difference between content-box and border-box?</b><br>In <code>content-box</code>, padding and borders are added to the width/height. In <code>border-box</code>, the width/height includes the padding and borders.</li>
        <li><b>What is Margin Collapsing?</b><br>When the top margin of one block element touches the bottom margin of another, they combine into a single margin (the larger of the two).</li>
    </ul>




    <h2>Summary</h2>
    <p>The CSS Box Model is the fundamental building block of web layout. Every element is a rectangular box. By mastering how width, height, padding, borders, and margins interact, you gain full control over the spacing and alignment of your web pages. Always remember the magic of <code>box-sizing: border-box</code> to make layout math easier!</p>




  </div>`
  },
  {
    id: 'display',
    title: 'CSS Display',
    content: `<div class="topic-header"><span class="topic-badge">Topic 11</span><h1>CSS Display</h1></div><div class="topic-section"><p>The <code>display</code> property is the most important CSS property for controlling layout. Every HTML element has a default display value depending on what type of element it is.</p><h3>Display Values</h3><table class="css-table"><thead><tr><th>Value</th><th>Description</th></tr></thead><tbody><tr><td><code>block</code></td><td>Takes up the full width available and starts on a new line (e.g. <code>&lt;div&gt;</code>, <code>&lt;h1&gt;</code>).</td></tr><tr><td><code>inline</code></td><td>Takes up only as much width as necessary and does not start on a new line (e.g. <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>).</td></tr><tr><td><code>inline-block</code></td><td>Like inline elements, they do not start on a new line, but you CAN set width and height values on them.</td></tr><tr><td><code>none</code></td><td>Removes the element completely from the document. It will not take up any space.</td></tr></tbody></table><p><em>Note: Modern layouts typically use <strong>flex</strong> or <strong>grid</strong>, which are incredibly powerful and have their own dedicated chapters later in this tutorial!</em></p><h3>Example</h3><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>.box-block {
   display: block;
}

.box-inline {
   display: inline;
}

.box-hidden {
   display: none;
}</code></pre></div><h3>Comparison Table</h3><table class="css-table"><thead><tr><th>Display</th><th>Starts on new line?</th><th>Respects width/height?</th><th>Margin/Padding behavior</th></tr></thead><tbody><tr><td><code>block</code></td><td>Yes</td><td>Yes</td><td>Top/Bottom and Left/Right margins both work.</td></tr><tr><td><code>inline</code></td><td>No</td><td>No</td><td>Top/Bottom margins/padding do not push other elements away.</td></tr><tr><td><code>inline-block</code></td><td>No</td><td>Yes</td><td>Fully respects margin and padding on all sides.</td></tr></tbody></table>

<h2>Practical Examples</h2><p>Converting a standard unordered list into a horizontal navigation bar using <code>inline-block</code>:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;style&gt;
.nav-list {
   list-style: none;
   padding: 0;
}

.nav-item {
   /* Elements sit side-by-side but respect padding and margins */
   display: inline-block;
   margin-right: 20px;
}

.nav-link {
   display: block;
   padding: 10px 15px;
   background-color: #eee;
}
&lt;/style&gt;

&lt;ul class="nav-list"&gt;
  &lt;li class="nav-item"&gt;&lt;a class="nav-link" href="#"&gt;Home&lt;/a&gt;&lt;/li&gt;
  &lt;li class="nav-item"&gt;&lt;a class="nav-link" href="#"&gt;About&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Setting width/height on inline elements</strong> − Beginners often try to set a <code>height</code> on a <code>&lt;span&gt;</code> or <code>&lt;a&gt;</code> tag. Inline elements completely ignore width, height, and top/bottom margins. You must change them to <code>inline-block</code> or <code>block</code> first.</li><li><strong>Confusing <code>display: none</code> with <code>visibility: hidden</code></strong> − <code>display: none</code> completely removes the element from the document flow (as if it doesn't exist). <code>visibility: hidden</code> makes it invisible, but it still takes up empty physical space in the layout.</li><li><strong>Forgetting the whitespace gap</strong> − <code>inline-block</code> elements will have a small ~4px gap between them if there is a line break in the HTML source code, which can unexpectedly break pixel-perfect grid layouts.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Use <code>display: block</code> to increase click targets</strong> − Always change <code>&lt;a&gt;</code> tags inside menus from <code>inline</code> to <code>block</code> so the entire padded area becomes clickable, not just the text itself.</li><li><strong>Limit <code>inline-block</code> for complex layouts</strong> − While great for simple button rows, if you are building complex multi-column layouts, use Flexbox or Grid instead of fighting with <code>inline-block</code> whitespace gaps.</li></ul><h2>Interview Questions</h2><p><strong>Q: What is the difference between <code>block</code> and <code>inline-block</code>?</strong></p><p>A: A <code>block</code> element forces a line break before and after it, taking up the full width available. An <code>inline-block</code> element sits side-by-side with other inline elements, but unlike a pure <code>inline</code> element, it allows you to set width, height, and vertical margins.</p><p><strong>Q: Why can't I set a top margin on an inline element?</strong></p><p>A: Because inline elements are designed to flow with text. They only affect horizontal spacing (left/right margin and padding), ignoring vertical spacing to prevent disrupting the line-height of the paragraph.</p><p><strong>Q: What is the difference between <code>display: none</code> and <code>visibility: hidden</code>?</strong></p><p>A: <code>display: none</code> removes the element entirely from the flow. <code>visibility: hidden</code> leaves the element in the flow, occupying space, but makes it completely transparent.</p><h2>Summary</h2><p>The <code>display</code> property is the most fundamental concept in CSS layout. Knowing exactly how <code>block</code>, <code>inline</code>, and <code>inline-block</code> elements behave by default—and knowing when to override them—is the first step to mastering web structure before moving on to advanced systems like Flexbox.</p>
  </div>`
  },
  {
    id: 'positioning',
    title: 'Positioning',
    content: `
  <div class="topic-header">
    <span class="topic-badge">Topic 12</span>
    <h1>Positioning</h1>
  </div>
  <div class="topic-section">
    <p>CSS helps you to position your HTML element. You can put any HTML element at whatever location you like. You can specify whether you want the element positioned relative to its natural position in the page or absolute based on its parent element.</p>
    <p>Now, we will see all the CSS positioning related properties with examples −</p>
    <h3>Relative Positioning</h3>
    <p>Relative positioning changes the position of the HTML element relative to where it normally appears. So <code>"left:20"</code> adds 20 pixels to the element's LEFT position.</p>
    <p>You can use two values <code>top</code> and <code>left</code> along with the <code>position</code> property to move an HTML element anywhere in the HTML document.</p>
    <table class="css-table">
  <thead>
    <tr><th>Action</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Move Left</strong></td><td>Use a negative value for <code>left</code>.</td></tr>
    <tr><td><strong>Move Right</strong></td><td>Use a positive value for <code>left</code>.</td></tr>
    <tr><td><strong>Move Up</strong></td><td>Use a negative value for <code>top</code>.</td></tr>
    <tr><td><strong>Move Down</strong></td><td>Use a positive value for <code>top</code>.</td></tr>
  </tbody>
</table>
    <p>NOTE − You can use bottom or right values as well in the same way as <code>top</code> and <code>left</code>. Here is the example −</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;div style="position:relative;left:80px;top:2px;background-color:yellow;"&gt;
      This div has relative positioning.
      &lt;/div&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>Absolute Positioning</h3>
    <p>An element with <code>position: absolute</code> is removed from the normal document flow and positioned relative to its nearest ancestor that has a position value other than <code>static</code> (i.e. an ancestor with <code>position: relative</code>, <code>absolute</code>, <code>fixed</code>, or <code>sticky</code>). If no such ancestor exists, it is positioned relative to the initial containing block (roughly the html element / viewport).</p>
    <p>You can use two values <code>top</code> and <code>left</code> along with the <code>position</code> property to move an HTML element anywhere in the HTML document.</p>
    <table class="css-table">
  <thead>
    <tr><th>Action</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Move Left</strong></td><td>Use a negative value for <code>left</code>.</td></tr>
    <tr><td><strong>Move Right</strong></td><td>Use a positive value for <code>left</code>.</td></tr>
    <tr><td><strong>Move Up</strong></td><td>Use a negative value for <code>top</code>.</td></tr>
    <tr><td><strong>Move Down</strong></td><td>Use a positive value for <code>top</code>.</td></tr>
  </tbody>
</table>
    <p>NOTE − You can use bottom or right values as well in the same way as <code>top</code> and <code>left</code>.</p>
    <h3>Example</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;div style="position:absolute;left:80px;top:20px;background-color:yellow;"&gt;
      This div has absolute positioning.
      &lt;/div&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>
    <h3>Fixed Positioning</h3>
    <p>Fixed positioning allows you to fix the position of an element to a particular spot on the page, regardless of scrolling. Specified coordinates will be relative to the browser window.</p>
    <p>You can use two values <code>top</code> and <code>left</code> along with the <code>position</code> property to move an HTML element anywhere in the HTML document.</p>
    <table class="css-table">
  <thead>
    <tr><th>Action</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Move Left</strong></td><td>Use a negative value for <code>left</code>.</td></tr>
    <tr><td><strong>Move Right</strong></td><td>Use a positive value for <code>left</code>.</td></tr>
    <tr><td><strong>Move Up</strong></td><td>Use a negative value for <code>top</code>.</td></tr>
    <tr><td><strong>Move Down</strong></td><td>Use a positive value for <code>top</code>.</td></tr>
  </tbody>
</table>
    <p>NOTE − You can use bottom or right values as well in the same way as <code>top</code> and <code>left</code>.</p>
    <h3>Example</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;div style="position:fixed;left:80px;top:20px;background-color:yellow;"&gt;
      This div has fixed positioning.
      &lt;/div&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>


<h2>Practical Examples</h2><p>The classic absolute-in-relative pattern used to place a close button perfectly in the top-right corner of a modal card:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;style&gt;
.modal-card {
   position: relative; /* Establishes the coordinate boundary */
   width: 400px;
   padding: 20px;
   background: white;
}

.close-btn {
   position: absolute; /* Positions itself relative to .modal-card */
   top: 10px;
   right: 10px;
}
&lt;/style&gt;

&lt;div class="modal-card" style="border:1px solid #ccc; height:200px; width:300px; position:relative; background:#fff;"&gt;
  &lt;h3&gt;Modal Content&lt;/h3&gt;
  &lt;button class="close-btn"&gt;X&lt;/button&gt;
&lt;/div&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Forgetting <code>position: relative</code> on the parent</strong> − If you set a child to <code>position: absolute</code> but forget to set the parent to <code>relative</code>, the child will fly all the way up and position itself relative to the entire page (the <code>&lt;body&gt;</code>).</li><li><strong>Using absolute positioning for layout structure</strong> − Using absolute coordinates to build multi-column layouts is a disaster for responsiveness. Absolute positioning should be reserved for overlays, tooltips, and small UI tweaks.</li><li><strong>Misusing fixed positioning on mobile</strong> − Fixed headers can glitch on iOS Safari when the URL bar shrinks or expands, causing the fixed element to jump unexpectedly.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>The "Relative Parent, Absolute Child" Rule</strong> − Memorize this pattern. You will use it on almost every website to precisely place badges, tooltips, and icons.</li><li><strong>Use Sticky for modern headers</strong> − Instead of writing complex JavaScript scroll listeners to make a header lock to the top, simply use <code>position: sticky; top: 0;</code> for native, buttery-smooth performance.</li><li><strong>Use absolute positioning sparingly</strong> − Excessive absolutely-positioned elements can increase the browser's repaint and reflow costs, negatively impacting performance.</li></ul><h2>Interview Questions</h2><p><strong>Q: What is the containing block for an absolutely positioned element?</strong></p><p>A: It is the nearest ancestor element that has a <code>position</code> value other than <code>static</code> (usually <code>relative</code>).</p><p><strong>Q: What is the difference between <code>fixed</code> and <code>absolute</code> positioning?</strong></p><p>A: <code>absolute</code> positions the element relative to its closest positioned ancestor and scrolls with the page. <code>fixed</code> positions it relative to the browser viewport itself, meaning it stays locked in place even when the user scrolls.</p><p><strong>Q: How does <code>position: sticky</code> work?</strong></p><p>A: It acts like <code>relative</code> positioning until the user scrolls past a specified threshold (e.g., <code>top: 0</code>), at which point it acts like <code>fixed</code> and locks to the screen.</p><h2>Summary</h2><p>Positioning breaks elements out of the normal, top-to-bottom document flow. <code>relative</code> nudges elements, <code>absolute</code> places them precisely inside boundaries, <code>fixed</code> locks them to the screen, and <code>sticky</code> creates modern scroll effects. These properties are the scalpel in a CSS developer's toolkit.</p>
  </div>`
  },
  {
    id: 'float',
    title: 'CSS Float',
    content: `<div class="topic-header"><span class="topic-badge">Topic 13</span><h1>CSS Float</h1></div><div class="topic-section"><p>The <code>float</code> property is used for positioning and formatting content e.g. let an image float left to the text in a container.</p><p><em>Important Note: While floats were historically used for entire website layouts, <strong>Flexbox</strong> and <strong>Grid</strong> are the modern, preferred approaches. Today, float should mainly be used for its original purpose: wrapping text around images.</em></p><h3>Float Values</h3><table class="css-table"><thead><tr><th>Value</th><th>Description</th></tr></thead><tbody><tr><td><code>left</code></td><td>The element floats to the left of its container.</td></tr><tr><td><code>right</code></td><td>The element floats to the right of its container.</td></tr><tr><td><code>none</code></td><td>The element does not float (default).</td></tr></tbody></table><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>img {
   float: right;
   margin: 0 0 10px 10px;
}</code></pre></div><h3>The Clearfix Problem</h3><p>If a floating element is taller than the containing element, it will <code>"overflow"</code> outside of its container. We can fix this using a <code>"clearfix"</code>.</p><p><strong>Legacy method:</strong> Add an empty element after the float and apply <code>clear: both;</code>.</p><p><strong>Modern Hack (<code>::after</code>):</strong> The modern way to fix this is to use the <code>::after</code> pseudo-element on the container:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>.clearfix::after {
   content: "";
   clear: both;
   display: table;
}</code></pre></div>

<h2>Practical Examples</h2><p>The classic, appropriate use case for a float: wrapping text around an article image, utilizing the modern clearfix hack on the parent container:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;style&gt;
.article-img {
   float: left;
   margin-right: 20px;
   margin-bottom: 10px;
   width: 300px;
}

/* The modern Clearfix hack applied to the parent container */
.clearfix::after {
   content: "";
   display: table;
   clear: both;
}
&lt;/style&gt;

&lt;div class="clearfix" style="border:1px solid #ccc; padding:10px;"&gt;
  &lt;img class="article-img" src="../assets/images/demo-photo.jpg" alt="Placeholder" style="width:100px;"&gt;
  &lt;p&gt;This text flows around the floated image. The clearfix ensures the parent container expands to fit the image height!&lt;/p&gt;
&lt;/div&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Using floats for page layout</strong> − Building 3-column layouts using <code>float: left</code> (the 2010 way). This requires complex math, clearing hacks, and breaks easily. Always use Flexbox or Grid for structural layouts today.</li><li><strong>Forgetting to clear floats (Container Collapse)</strong> − If a parent container only contains floated children, the parent's height will collapse to 0 pixels, causing the background to disappear and subsequent elements to overlap.</li><li><strong>Using the wrong clear value</strong> − Using <code>clear: left</code> when you actually have elements floated to the right. <code>clear: both</code> is almost always the safest and most reliable choice.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Restrict float to typography</strong> − Only use floats for their original intended purpose: allowing text to naturally wrap around an image or a pull-quote.</li><li><strong>Use a utility class for clearing</strong> − Keep a standard <code>.clearfix</code> utility class in your global stylesheet so you can easily apply it to any parent container that holds floated elements.</li></ul><h2>Interview Questions</h2><p><strong>Q: What does the <code>float</code> property actually do?</strong></p><p>A: It removes an element from the normal document flow and pushes it to the left or right of its container, allowing text and inline elements to wrap around it.</p><p><strong>Q: What is the <code>"clearfix"</code> hack?</strong></p><p>A: It is a CSS technique using the <code>::after</code> pseudo-element to force a parent container to expand and contain its floated children, preventing it from collapsing to zero height.</p><p><strong>Q: Why don't we use floats for grid layouts anymore?</strong></p><p>A: Because floats were designed for text wrapping, not layout structure. They require complex math, manual clearing, and lack the alignment and distribution capabilities built natively into modern tools like Flexbox and CSS Grid.</p><h2>Summary</h2><p>While <code>float</code> has been retired as a primary layout tool in favor of Flexbox and Grid, it remains an essential tool for editorial design (wrapping text around images). Understanding how floats affect the document flow and how to <code>"clear"</code> them is still a required skill for any CSS developer.</p>
  </div>`
  },
  {
    id: 'visibility',
    title: 'Visibility',
    content: `
  <div class="topic-header">
    <span class="topic-badge">Topic 14</span>
    <h1>Visibility</h1>
  </div>
  <div class="topic-section">
    <p>A property called <code>visibility</code> allows you to hide an element from view. You can use this property along with JavaScript to create very complex menu and webpage layouts.</p>
    <p><strong>NOTE:</strong> Remember that the source code will still contain whatever is in the invisible element, so you should not use this to hide sensitive information such as credit card details or passwords.</p>
    <table class="css-table">
  <thead>
    <tr><th>Value</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><code>visible</code></td><td>The box and its contents are shown to the user (default).</td></tr>
    <tr><td><code>hidden</code></td><td>The box and its content are made invisible, although they still affect the layout of the page.</td></tr>
    <tr><td><code>collapse</code></td><td>This is for use only with dynamic table columns and row effects.</td></tr>
  </tbody>
</table>
    <h3>Example</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p&gt;This paragraph is visible in normal way.&lt;/p&gt;
      &lt;p style="visibility:hidden;"&gt;This paragraph is hidden (still takes space).&lt;/p&gt;
      &lt;p&gt;This paragraph is also visible.&lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>


<h2>Practical Examples</h2><p>Fading out an element while keeping its physical space intact, ensuring the layout below it doesn't jump:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;style&gt;
.hidden-element {
   /* Visually hidden, but still takes up space */
   visibility: hidden;
   opacity: 0;
   transition: visibility 0s 0.3s, opacity 0.3s linear;
}

.hidden-element.active {
   visibility: visible;
   opacity: 1;
   transition: opacity 0.3s linear;
}
&lt;/style&gt;

&lt;div class="hidden-element active" style="padding:20px; background:blue; color:white;"&gt;I fade out smoothly! (Remove the 'active' class via JS)&lt;/div&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Confusing visibility with display</strong> − <code>display: none</code> removes the element entirely, causing surrounding text to collapse and fill the space. <code>visibility: hidden</code> leaves an empty <code>"hole"</code> exactly the size of the element. This difference matters for accessibility: content hidden with <code>visibility: hidden</code> can still confuse screen reader users in some cases, and may remain in the tab order in certain browsers.</li><li><strong>Trying to transition visibility alone</strong> − You cannot smoothly animate <code>visibility</code> (it snaps instantly from hidden to visible). You must pair it with <code>opacity</code> to get a smooth fade effect.</li><li><strong>Assuming hidden elements can be clicked</strong> − A <code>visibility: hidden</code> element cannot be clicked, whereas an <code>opacity: 0</code> element (without hidden visibility) CAN still be clicked!</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Use visibility for UI states</strong> − It is perfect for hiding validation error messages beneath form inputs before the user types anything, preserving the form's height so it doesn't jump around.</li><li><strong>Combine with Opacity for animations</strong> − Always toggle both <code>opacity</code> and <code>visibility</code> together when fading out interactive elements (like modals) to ensure they look good AND block unwanted clicks.</li></ul><h2>Interview Questions</h2><p><strong>Q: What is the main difference between <code>visibility: hidden</code> and <code>display: none</code>?</strong></p><p>A: <code>display: none</code> completely removes the element from the document flow, meaning it takes up zero physical space. <code>visibility: hidden</code> makes the element invisible, but it still occupies its exact original dimensions in the layout.</p><p><strong>Q: What does <code>visibility: collapse</code> do?</strong></p><p>A: It is specifically designed for table rows (<code>&lt;tr&gt;</code>) or columns. It acts exactly like <code>display: none</code> for those elements (collapsing the row), but acts like <code>visibility: hidden</code> on standard elements.</p><p><strong>Q: Will screen readers announce text inside a <code>visibility: hidden</code> element?</strong></p><p>A: No. Screen readers ignore both <code>display: none</code> and <code>visibility: hidden</code> content.</p><h2>Summary</h2><p>The <code>visibility</code> property is a subtle but vital layout tool. It allows you to hide elements while preserving the structural integrity of your grid or page flow. Mastering its relationship with <code>opacity</code> and <code>display</code> is crucial for building smooth, non-jumping UI animations.</p>
  </div>`
  },
  {
    id: 'text',
    title: 'Text',
    content: `
  <div class="topic-header">
    <span class="topic-badge">Topic 15</span>
    <h1>Text</h1>
  </div>
  <div class="topic-section">
    <p>This chapter teaches you how to manipulate text using CSS properties. You can set following text properties of an element −</p>
    <table class="css-table">
  <thead>
    <tr><th>Property</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><code>color</code></td><td>is used to set the color of a text.</td></tr>
    <tr><td><code>direction</code></td><td>is used to set the text direction.</td></tr>
    <tr><td><code>letter-spacing</code></td><td>is used to add or subtract space between the letters that make up a word.</td></tr>
    <tr><td><code>word-spacing</code></td><td>is used to add or subtract space between the words of a sentence.</td></tr>
    <tr><td><code>text-indent</code></td><td>is used to indent the text of a paragraph.</td></tr>
    <tr><td><code>text-align</code></td><td>is used to align the text of a document.</td></tr>
    <tr><td><code>text-decoration</code></td><td>is used to underline, overline, and strikethrough text.</td></tr>
    <tr><td><code>text-transform</code></td><td>is used to capitalize text or convert text to uppercase or lowercase letters.</td></tr>
    <tr><td><code>white-space</code></td><td>is used to control the flow and formatting of text.</td></tr>
    <tr><td><code>text-shadow</code></td><td>is used to set the text shadow around a text.</td></tr>
  </tbody>
</table>

    <h3>Set the Text Color</h3>
    <p>The following example demonstrates how to set the text color. Possible value could be any color name in any valid format.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="color:red;"&gt;
      This text will be written in red.
      &lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>Set the Text Direction</h3>
    <p>The following example demonstrates how to set the direction of a text. Possible values are <code>ltr</code> or <code>rtl</code>.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="direction:rtl;"&gt;
      This text will be renedered from right to left
      &lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>Set the Space between Characters</h3>
    <p>The following example demonstrates how to set the space between characters. Possible values are <code>normal</code> or a number specifying space.</p>


    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="letter-spacing:5px;"&gt;
      This text is having space between letters.
      &lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>Set the Space between Words</h3>
    <p>The following example demonstrates how to set the space between words. Possible values are <code>normal</code> or a number specifying space.</p>


    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="word-spacing:5px;"&gt;
      This text is having space between words.
      &lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>Set the Text Indent</h3>
    <p>The following example demonstrates how to indent the first line of a paragraph. Possible values are % or a number specifying indent space.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="text-indent:1cm;"&gt;
      This text will have first line indented by 1cm and this line will remain at
      its actual position this is done by CSS text-indent property.
      &lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>Set the Text Alignment</h3>
    <p>The following example demonstrates how to align a text. Possible values are <code>left</code>, <code>right</code>, <code>center</code>, <code>justify</code>.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="text-align:right;"&gt;
      This will be right aligned.
      &lt;/p&gt;
      &lt;p style="text-align:center;"&gt;
      This will be center aligned.
      &lt;/p&gt;
      &lt;p style="text-align:left;"&gt;
      This will be left aligned.
      &lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>Decorating the Text</h3>
    <p>The following example demonstrates how to decorate a text. Possible values are <code>none</code>, <code>underline</code>, <code>overline</code>, <code>line-through</code>, <code>blink</code>.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="text-decoration:underline;"&gt;
      This will be underlined
      &lt;/p&gt;
      &lt;p style="text-decoration:line-through;"&gt;
      This will be striked through.
      &lt;/p&gt;
      &lt;p style="text-decoration:overline;"&gt;
      This will have a over line.
      &lt;/p&gt;
      &lt;p style="text-decoration:blink;"&gt;
      This text will have blinking effect
      &lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>Set the Text Cases</h3>
    <p>The following example demonstrates how to set the cases for a text. Possible values are <code>none</code>, <code>capitalize</code>, <code>uppercase</code>, <code>lowercase</code>.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="text-transform:capitalize;"&gt;
      This will be capitalized
      &lt;/p&gt;
      &lt;p style="text-transform:uppercase;"&gt;
      This will be in uppercase
      &lt;/p&gt;
      &lt;p style="text-transform:lowercase;"&gt;
      This will be in lowercase
      &lt;/p&gt;
      &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>Set the White Space between Text</h3>
    <p>The following example demonstrates how white space inside an element is handled. Possible values are <code>normal</code>, <code>pre</code>, <code>nowrap</code>.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="white-space:pre;"&gt;
      This text has a line break and the white-space pre setting tells the browser to
honor
      it just like the HTML pre tag.&lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>Set the Text Shadow</h3>
    <p>The following example demonstrates how to set the shadow around a text. This may not be supported by all the browsers.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="text-shadow:4px 4px 8px blue;"&gt;
      If your browser supports the CSS text-shadow property, this text will have a blue
shadow.
      &lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>



<h2>Practical Examples</h2><p>Styling an article heading with capitalization and a paragraph with comfortable reading spacing:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;style&gt;
.article-title {
   text-align: center;
   text-transform: uppercase;
   letter-spacing: 2px;
}

.article-body {
   /* Increases space between lines for readability */
   line-height: 1.6;
   color: #333333;
}
&lt;/style&gt;

&lt;h1 class="article-title"&gt;Breaking News&lt;/h1&gt;
&lt;p class="article-body"&gt;This is an article body with beautifully spaced and aligned text, demonstrating good typographic readability.&lt;/p&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Using <code>text-align: justify</code> on web</strong> − Unlike print, web browsers don't hyphenate well automatically. Justified text creates ugly, uneven <code>"rivers of whitespace"</code> between words, hurting readability.</li><li><strong>Ignoring line-height</strong> − Leaving <code>line-height</code> at its default makes multi-line paragraphs feel cramped and extremely hard to read.</li><li><strong>Using underlines for non-links</strong> − Using <code>text-decoration: underline</code> for emphasis on normal text. Users have been trained for decades that underlined text is clickable. This causes immense UX confusion.</li><li><strong>Typing ALL CAPS in HTML</strong> − Writing <code>&lt;h1&gt;WELCOME&lt;/h1&gt;</code> in HTML. Screen readers might read this out letter-by-letter. Write normal case in HTML and use <code>text-transform: uppercase;</code> in CSS.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Set a comfortable Line Height</strong> − Always set paragraph <code>line-height</code> between <code>1.4</code> and <code>1.6</code> to give the text room to breathe.</li><li><strong>Keep Line Lengths Optimal</strong> − For maximum readability, limit your paragraph widths to about 60-75 characters per line (e.g., using <code>max-width: 65ch;</code>).</li><li><strong>Use Text-Transform for styling</strong> − Keep your source HTML semantically accurate (Sentence case) and use <code>text-transform</code> to visually alter case.</li><li><strong>Optimize for readability</strong> − Sufficient line-height (usually 1.5 or higher) and adequate font-size significantly improve readability for users with dyslexia or low vision.</li></ul><h2>Interview Questions</h2><p><strong>Q: What is the difference between <code>text-align</code> and <code>justify-content</code>?</strong></p><p>A: <code>text-align</code> is used to align inline content (like text) inside a block container. <code>justify-content</code> is a Flexbox/Grid property used to align entire elements within a layout.</p><p><strong>Q: How do you remove the default underline from a link?</strong></p><p>A: By applying <code>text-decoration: none;</code> to the <code>&lt;a&gt;</code> tag.</p><p><strong>Q: What property modifies the spacing between individual letters?</strong></p><p>A: The <code>letter-spacing</code> property.</p><p><strong>Q: Why is <code>line-height</code> usually written as a unitless number (e.g., <code>1.5</code>) rather than pixels (<code>24px</code>)?</strong></p><p>A: A unitless number acts as a multiplier based on the element's font size. If the font size scales up, the line height scales proportionately. Fixed pixels do not.</p><h2>Summary</h2><p>While the <code>fonts</code> properties control what typeface is drawn, the <code>text</code> properties control how that type is arranged, spaced, and formatted. Mastering properties like <code>line-height</code>, <code>text-align</code>, and <code>text-transform</code> is the key to creating highly legible and professional-looking content on the web.</p>
  </div>`
  },
  {
    id: 'fonts',
    title: 'Fonts',
    content: `
  <div class="topic-header">
    <span class="topic-badge">Topic 16</span>
    <h1>Fonts</h1>
  </div>
  <div class="topic-section">
    <p>This chapter teaches you how to set fonts of a content, available in an HTML element. You can set following font properties of an element −</p>
    <table class="css-table">
  <thead>
    <tr><th>Property</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><code>font-family</code></td><td>is used to change the face of a font.</td></tr>
    <tr><td><code>font-style</code></td><td>is used to make a font italic or oblique.</td></tr>
    <tr><td><code>font-variant</code></td><td>is used to create a small-caps effect.</td></tr>
    <tr><td><code>font-weight</code></td><td>is used to increase or decrease how bold or light a font appears.</td></tr>
    <tr><td><code>font-size</code></td><td>is used to increase or decrease the size of a font.</td></tr>
    <tr><td><code>font</code></td><td>is used as shorthand to specify a number of other font properties.</td></tr>
  </tbody>
</table>



    <h3>Set the Font Family</h3>
    <p>Following is the example, which demonstrates how to set the font family of an element. Possible value could be any font family name.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="font-family:georgia,garamond,serif;"&gt;
      This text is rendered in either georgia, garamond, or the default serif font
      depending on which font  you have at your system.
      &lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>Set the Font Style</h3>
    <p>Following is the example, which demonstrates how to set the font style of an element. Possible values are <code>normal</code>, <code>italic</code> and <code>oblique</code>.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="font-style:italic;"&gt;
      This text will be rendered in italic style
      &lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>Set the Font Variant</h3>
    <p>The following example demonstrates how to set the font variant of an element. Possible values are <code>normal</code> and <code>small-caps</code>.</p>


    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="font-variant:small-caps;"&gt;
      This text will be rendered as small caps
      &lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>Set the Font Weight</h3>
    <p>The following example demonstrates how to set the font weight of an element. The font-weight property provides the functionality to specify how bold a font is. Possible values could be <code>normal</code>, <code>bold</code>, <code>bolder</code>, <code>lighter</code>, <code>100</code>, <code>200</code>, <code>300</code>, <code>400</code>, <code>500</code>, <code>600</code>, <code>700</code>, <code>800</code>, <code>900</code>.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="font-weight:bold;"&gt;This font is bold.&lt;/p&gt;
      &lt;p style="font-weight:bolder;"&gt;This font is bolder.&lt;/p&gt;
      &lt;p style="font-weight:500;"&gt;This font is 500 weight.&lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>Set the Font Size</h3>
    <p>The following example demonstrates how to set the font size of an element. The <code>font-size</code> property is used to control the size of fonts. Possible values could be <code>xx-small</code>, <code>x-small</code>, <code>small</code>, <code>medium</code>, <code>large</code>, <code>x-large</code>, <code>xx-large</code>, <code>smaller</code>, <code>larger</code>, size in pixels or in <code>%</code>.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="font-size:20px;"&gt;This font size is 20 pixels&lt;/p&gt;
      &lt;p style="font-size:small;"&gt;This font size is small&lt;/p&gt;
      &lt;p style="font-size:large;"&gt;This font size is large&lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>Set the Font Size Adjust</h3>
    <p>The following example demonstrates how to set the font size adjust of an element. This property enables you to adjust the x-height to make fonts more legible. Possible value could be any number.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="font-size-adjust:0.61;"&gt;
         This text is using a font-size-adjust value.
      &lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>Set the Font Stretch</h3>
    <p>The following example demonstrates how to set the font stretch of an element. This property relies on the user's computer to have an expanded or condensed version of the font being used. Possible values could be <code>normal</code>, <code>wider</code>, <code>narrower</code>, <code>ultra-condensed</code>, <code>extra-condensed</code>, <code>condensed</code>, <code>semi-condensed</code>, <code>semi-expanded</code>, <code>expanded</code>, <code>extra-expanded</code>, <code>ultra-expanded</code>.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="font-stretch:ultra-expanded;"&gt;
         If this doesn't appear to work, it is likely that your computer doesn't have a
         condensed or expanded version of the font being used.
      &lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>Shorthand Property</h3>
    <p>You can use the font property to set all the font properties at once. For example −</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p style="font:italic small-caps bold 15px georgia;"&gt;
      Applying all the properties on the text at once.
      &lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>



<h2>Practical Examples</h2><p>Establishing a robust, accessible baseline typography system using a fallback font stack and <code>rem</code> units:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;style&gt;
body {
   /* Provide a safe fallback stack ending in a generic family */
   font-family: <code>"Open Sans"</code>, <code>"Helvetica Neue"</code>, Arial, sans-serif;
   font-size: 16px; /* The base root size */
}

h1 {
   font-size: 2.5rem; /* 40px relative to root */
   font-weight: 700;  /* Bold */
   font-style: italic;
}
&lt;/style&gt;

&lt;div&gt;This is standard text.
  &lt;h1 class="brand-heading"&gt;And this is a brand heading!&lt;/h1&gt;
&lt;/div&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Forgetting generic fallbacks</strong> − Writing <code>font-family: <code>"Roboto"</code>;</code>. If Roboto fails to load or isn't installed, the browser falls back to Times New Roman. Always end with <code>sans-serif</code> or <code>serif</code>.</li><li><strong>Loading too many font weights</strong> − Importing 100, 200, 300, 400, 500, 700, and 900 weights from Google Fonts. This massively slows down page load times.</li><li><strong>Not quoting font names with spaces</strong> − Writing <code>font-family: Times New Roman;</code> instead of <code>font-family: <code>"Times New Roman"</code>;</code>. Browsers can misinterpret unquoted names with spaces.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Limit Font Families</strong> − Use a maximum of two custom font families per website (e.g., one for headings, one for body text) to keep design cohesive and performance fast.</li><li><strong>Use Numeric Font Weights</strong> − Prefer using <code>font-weight: 700;</code> over <code>bold</code>, and <code>400</code> over <code>normal</code>. It provides far more accuracy when working with custom web fonts.</li><li><strong>Use REM for Font Sizing</strong> − As covered in measurement units, always use <code>rem</code> for <code>font-size</code> to respect user accessibility preferences.</li><li><strong>Use Relative Units</strong> − Always use <code>rem</code> or <code>em</code> for font sizing instead of <code>px</code>. <code>rem</code> units respect the user's browser font-size setting, so users who increase their default font size for readability still get a properly scaled page.</li><li><strong>Limit font families and weights</strong> − Loading too many font weights or font families increases page load time significantly. Only include the weights you actually use.</li></ul><h2>Interview Questions</h2><p><strong>Q: What is a generic font family?</strong></p><p>A: A broad categorization of fonts built into every browser, such as <code>serif</code>, <code>sans-serif</code>, or <code>monospace</code>. They act as the ultimate fallback if specific fonts fail.</p><p><strong>Q: What is the difference between serif and sans-serif fonts?</strong></p><p>A: Serif fonts have small decorative strokes (serifs) at the ends of their letters (like Times New Roman). Sans-serif fonts do not have these strokes, offering a cleaner, more modern look (like Arial).</p><p><strong>Q: What does <code>font-weight: 400</code> correspond to?</strong></p><p>A: It corresponds to standard <code>normal</code> weight text. <code>700</code> corresponds to <code>bold</code>.</p><p><strong>Q: In a font stack like <code>font-family: <code>"Arial"</code>, sans-serif;</code>, how does the browser choose?</strong></p><p>A: It reads left to right. It first looks for <code>"Arial"</code> on the user's system. If it doesn't exist, it falls back to the system's default <code>sans-serif</code> font.</p><h2>Summary</h2><p>Typography is the cornerstone of web design. By carefully selecting your font families, managing your weights, and ensuring you always provide a generic fallback stack, you can create highly readable, professional, and performant web interfaces.</p>
  </div>`
  },
  {
    id: 'web-fonts',
    title: 'Web Fonts',
    content: `
  <div class="topic-header">
    <span class="topic-badge">Topic 17</span>
    <h1>Web Fonts</h1>
  </div>
  <div class="topic-section">
    <p>Web Fonts allows you to use fonts that are not installed on the user's computer.</p>
    <p>You can use the <code>@font-face</code> rule to define a Web Font. When you have found or bought the font you wish to use, just include the font file on your web server, and it will be automatically downloaded to the user when needed.</p>

    <h3>Different web fonts formats</h3>
    <table class="css-table">
  <thead>
    <tr><th>Format</th><th>Extension</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>TrueType Fonts</strong></td><td><code>.ttf</code></td><td>Developed by Apple and Microsoft. Very common font format for both Mac and Windows operating systems.</td></tr>
    <tr><td><strong>OpenType Fonts</strong></td><td><code>.otf</code></td><td>Built on TrueType, developed by Microsoft and Adobe. Scalable computer font format.</td></tr>
    <tr><td><strong>Web Open Font Format</strong></td><td><code>.woff</code></td><td>Font format for use in web pages, essentially TrueType/OpenType with compression.</td></tr>
    <tr><td><strong>WOFF 2.0</strong></td><td><code>.woff2</code></td><td>Provides better compression than WOFF 1.0.</td></tr>
    <tr><td><strong>SVG Fonts</strong></td><td><code>.svg / .svgz</code></td><td>Use SVG elements to define glyphs. Excellent for mobile devices.</td></tr>
    <tr><td><strong>Embedded OpenType</strong></td><td><code>.eot</code></td><td>Compact form of OpenType designed by Microsoft for use as embedded fonts.</td></tr>
  </tbody>
</table>

    <h3>Defining a Web Font</h3>
    <p>To use a web font, you define it with the <code>@font-face</code> rule and then apply it via <code>font-family</code>.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
      <pre class="code-block"><code>@font-face {
   font-family: myFirstFont;
   src: url(https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2);
}
div {
   font-family: myFirstFont;
}</code></pre>
    </div>


<h2>Practical Examples</h2><p>Declaring a custom local font using <code>@font-face</code> and applying it to the document with modern performance best practices:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;style&gt;
/* Define the custom font */
@font-face {
   font-family: <code>"MyCustomFont"</code>;
   src: url("https://fonts.gstatic.com/s/opensans/v34/memvYaGs126MiZpBA-UvWbX2vVnXBbObj2OVTS-mu0SC55I.woff2") format(<code>"woff2"</code>);
   font-weight: 400;
   font-style: normal;

   /* Crucial for performance: prevents invisible text while loading */
   font-display: swap;
}

body {
   /* Apply the font with a safe generic fallback */
   font-family: <code>"MyCustomFont"</code>, sans-serif;
}
&lt;/style&gt;

&lt;div&gt;
  &lt;h1&gt;Custom Font Heading&lt;/h1&gt;
  &lt;p&gt;Custom font text.&lt;/p&gt;
&lt;/div&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Using heavy, unoptimized font formats</strong> − Loading massive <code>.ttf</code> or <code>.otf</code> files directly. Always convert your web fonts to the highly compressed <code>.woff2</code> format to drastically improve page speed.</li><li><strong>Forgetting <code>font-display: swap</code></strong> − By default, browsers hide text entirely until the custom font finishes downloading (Flash of Invisible Text). Adding <code>font-display: swap</code> forces the browser to show the fallback font immediately, swapping in the custom font once it loads. This ensures text remains visible and readable while a custom web font loads.</li><li><strong>Loading unused font weights</strong> − Importing 100, 200, 300, 400, 500, 600, 700, 800, and 900 weights from Google Fonts when your design only actually uses 400 and 700.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Preload Critical Fonts</strong> − If a custom font is used for your main headings above the fold, add <code>&lt;link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin&gt;</code> in your HTML <code>&lt;head&gt;</code> to download it instantly.</li><li><strong>Limit Font Families</strong> − Every new font family adds HTTP requests and rendering time. Stick to a maximum of 2 custom web font families per site.</li></ul><h2>Interview Questions</h2><p><strong>Q: What is the preferred file format for web fonts today?</strong></p><p>A: WOFF2 (Web Open Font Format 2). It offers the best compression algorithms specifically designed for the web, resulting in the smallest file sizes.</p><p><strong>Q: What does the <code>font-display: swap</code> property do?</strong></p><p>A: It instructs the browser to immediately render text using the system fallback font, and then <code>"swap"</code> the custom font in as soon as it finishes downloading, preventing invisible text delays.</p><p><strong>Q: How do you serve different styles (like italic or bold) of the same font?</strong></p><p>A: You write multiple <code>@font-face</code> rules that share the exact same <code>font-family</code> name, but define different <code>font-weight</code> or <code>font-style</code> values, pointing to their respective font files.</p><h2>Summary</h2><p>Web Fonts break developers free from the limited pool of <code>"web-safe"</code> system fonts. By utilizing the <code>@font-face</code> rule and sticking to highly compressed <code>.woff2</code> formats, you can deliver stunning typography without crippling your website's load time.</p>
  </div>`
  },
  {
    id: 'icons',
    title: 'CSS Icons',
    content: `<div class="topic-header"><span class="topic-badge">Topic 18</span><h1>CSS Icons</h1></div><div class="topic-section"><p>Icons in modern CSS are typically added via icon libraries rather than raw image files. You insert a small <code>&lt;i&gt;</code> or <code>&lt;span&gt;</code> tag with a specific class name, and the library's CSS or font renders the icon.</p><p>Because they are scalable vectors, you can easily resize and recolor them using plain CSS properties like <code>font-size</code> and <code>color</code>.</p><h3>Font Awesome</h3><p>To use Font Awesome, include their script kit link in the <code>&lt;head&gt;</code>. Then, add classes to an <code>&lt;i&gt;</code> tag.</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">HTML/CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;i class="fas fa-cloud"&gt;&lt;/i&gt;
  &lt;i class="fas fa-heart"&gt;&lt;/i&gt;
  &lt;i class="fas fa-car"&gt;&lt;/i&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre></div><h3>Bootstrap Icons</h3><p>You can include Bootstrap Icons via a CDN <code>&lt;link&gt;</code> stylesheet and use the <code>bi</code> classes.</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">HTML/CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;i class="bi bi-alarm"&gt;&lt;/i&gt;
  &lt;i class="bi bi-apple"&gt;&lt;/i&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre></div><h3>Google Material Icons</h3><p>Include the Google Fonts stylesheet. Unlike others, the icon name goes <em>inside</em> the tag as text.</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">HTML/CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;i class="material-icons"&gt;favorite&lt;/i&gt;
  &lt;i class="material-icons"&gt;thumb_up&lt;/i&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre></div><h3>Styling Icons with CSS</h3><p>Once an icon is added to the page, it acts like normal text. You can change its size, color, and add interactive effects.</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">HTML/CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"&gt;
  &lt;style&gt;
    .styled-icon {
      font-size: 48px;
      color: #3b82f6;
      transition: color 0.3s, transform 0.3s;
      cursor: pointer;
    }
    .styled-icon:hover {
      color: #ef4444;
      transform: scale(1.2);
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;i class="material-icons styled-icon"&gt;star&lt;/i&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre></div><h2>Practical Examples</h2><p>Old vs New Way: Replacing traditional raster images with modern font icons for UI buttons.</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">HTML/CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"&gt;
  &lt;style&gt;
    .btn { display: inline-flex; align-items: center; gap: 8px; padding: 10px 20px; background: #eee; border: none; border-radius: 4px; font-size: 16px; }
    .icon-img { width: 24px; height: 24px; }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;p&gt;Old Way (Using an image):&lt;/p&gt;
  &lt;button class="btn"&gt;&lt;img src="../assets/images/demo-icon.png" class="icon-img" alt="Icon"&gt; Save&lt;/button&gt;
  &lt;br&gt;&lt;br&gt;
  &lt;p&gt;New Way (Using a font icon):&lt;/p&gt;
  &lt;button class="btn"&gt;&lt;i class="material-icons"&gt;save&lt;/i&gt; Save&lt;/button&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Using images for small UI icons</strong> − Raster images (PNG/JPG) pixelate on high-DPI screens when resized, and require multiple files for different colors. Icon fonts solve this by being scalable vector text.</li><li><strong>Forgetting to link the library</strong> − If your <code>&lt;i&gt;</code> tags are rendering as empty spaces or blank squares, you likely forgot to include the CDN <code>&lt;link&gt;</code> or <code>&lt;script&gt;</code> tag in the head.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Use semantic tags or aria attributes</strong> − While <code>&lt;i&gt;</code> is historically common, for accessibility it's good to add <code>aria-hidden="true"</code> to decorative icons so screen readers skip them.</li><li><strong>Pick one library</strong> − Loading Font Awesome, Bootstrap Icons, AND Material Icons on the same site will bloat your page load time. Pick one and stick with it.</li><li><strong>Ensure accessibility</strong> − Icon-only buttons or links need an <code>aria-label</code> or visually-hidden text, since screen readers cannot interpret an icon glyph alone.</li></ul><h2>Interview Questions</h2><p><strong>Q: How do you change the color and size of a font icon?</strong></p><p>A: Because font icons are treated as text characters by the browser, you simply use the standard CSS <code>color</code> and <code>font-size</code> properties.</p><p><strong>Q: What is the main advantage of an icon font over an image sprite?</strong></p><p>A: Icon fonts are vector-based, meaning they can scale to any size without losing quality, and they can be styled dynamically with CSS (e.g., hover states) without needing additional image files.</p><h2>Summary</h2><p>Icon libraries like Font Awesome, Bootstrap Icons, and Material Icons are the standard way to add vector icons to web projects. By treating icons as text elements, you gain the full power of CSS typography tools to scale, color, and animate them seamlessly.</p></div>`
  },
  {
    id: 'links',
    title: 'Links',
    content: `
  <div class="topic-header">
    <span class="topic-badge">Topic 19</span>
    <h1>Links</h1>
  </div>
  <div class="topic-section">
    <p>We will revisit the same properties when we will discuss Pseudo-Classes of CSS.</p>
    <p>The <code>:link</code> signifies unvisited hyperlinks.</p>
    <p>The <code>:visited</code> signifies visited hyperlinks.</p>
    <p>The <code>:hover</code> signifies an element that currently has the user's mouse pointer hovering over it.</p>
    <p>The <code>:active</code> signifies an element on which the user is currently clicking.</p>
    <p>Usually, all these properties are kept in the header part of the HTML document.</p>
    <p><strong>Remember:</strong> <code>a:hover</code> MUST come after <code>a:link</code> and <code>a:visited</code> in the CSS definition in order to be effective. Also, <code>a:active</code> MUST come after <code>a:hover</code> in the CSS definition as follows:</p>
    <pre class="code-block" style="background:var(--bg-code,#1e293b); color:#e2e8f0; padding:16px; margin: 16px 0; border-radius: 8px;"><code>a:link {color: #000000;}
a:visited {color: #006600;}
a:hover {color: #FFCC00;}
a:active {color: #FF00CC;}</code></pre>
    <p>Now, we will see how to use these properties to give different effects to hyperlinks.</p>
    <h3>Color of Links</h3>
    <p>The following example demonstrates how to set the link color. Possible values could be any color name in any valid format.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style type="text/css"&gt;
         a:link {color:#000000}
     &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;a href="#"&gt;Link&lt;/a&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>Color of Visited Links</h3>
    <p>The following example demonstrates how to set the color of visited links. Possible values could be any color name in any valid format.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style type="text/css"&gt;
         a:visited {color: #006600}
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;a href="#"&gt;Click this link&lt;/a&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>
    <p>It will produce the following link. Once you will click this link, it will change its color to green.</p>
    <h3>Color of Links when Mouse is Over</h3>
    <p>The following example demonstrates how to change the color of links when we bring a mouse pointer over that link. Possible values could be any color name in any valid format.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style type="text/css"&gt;
         a:hover {color: #FFCC00}
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;a href="#"&gt;Link&lt;/a&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>
    <p>It will produce the following link. Now, you bring your mouse over this link and you will see that it changes its color to yellow.</p>
    <h3>Color of Active Links</h3>
    <p>The following example demonstrates how to change the color of active links. Possible values could be any color name in any valid format.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style type="text/css"&gt;
         a:active {color: #FF00CC}
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;a href="#"&gt;Link&lt;/a&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>
    <p>It will produce the following link. It will change its color to pink when the user clicks it.</p>


<h2>Practical Examples</h2><p>Styling a link with distinct visual feedback for hover and focus states, adhering strictly to the LVHA cascade order:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;style&gt;
/* 1. Link (Unvisited) */
a:link {
   color: #3b82f6;
   text-decoration: underline;
}

/* 2. Visited */
a:visited {
   color: #6366f1; /* Slightly different color for visited state */
}

/* 3. Hover &amp; Focus (Accessibility) */
a:hover,
a:focus {
   color: #1d4ed8;
   text-decoration: none; /* Provide clear feedback by removing underline */
}

/* 4. Active (While clicking) */
a:active {
   color: #1e3a8a;
}
&lt;/style&gt;

&lt;a href="#" class="nav-link"&gt;Hover over me!&lt;/a&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Writing pseudo-classes in the wrong order</strong> − Putting <code>:hover</code> before <code>:visited</code>. Because of the cascade, if the link is visited, the visited style will permanently override the hover style.</li><li><strong>Removing focus outlines</strong> − Writing <code>a:focus { outline: none; }</code> without providing alternative styling. This completely destroys the site for users navigating with a keyboard.</li><li><strong>Relying entirely on color</strong> − Removing underlines from links in paragraph text and relying only on a slightly different color. Colorblind users will not know it's a link.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Follow the LVHA Order</strong> − Always declare link states in this exact order: Link, Visited, Hover, Active. (Mnemonic: LoVe? HA!).</li><li><strong>Provide Visual Feedback</strong> − Links should react when a user hovers over them. Changing color, swapping underlines, or adding slight transitions makes the site feel alive and usable.</li><li><strong>Preserve Accessibility</strong> − Never remove underlines from links within blocks of text, and ensure the <code>:focus</code> state is clearly visible for keyboard navigators.</li><li><strong>Preserve accessibility</strong> − Removing default link underlines and color cues can make links hard to distinguish from plain text for some users. Always ensure links stand out clearly from surrounding content.</li></ul><h2>Interview Questions</h2><p><strong>Q: What is the correct order to define CSS link pseudo-classes?</strong></p><p>A: Link, Visited, Hover, Active (LVHA).</p><p><strong>Q: Why is the LVHA order strictly necessary?</strong></p><p>A: Because these pseudo-classes share the exact same specificity weight. Therefore, the cascade resolves conflicts purely based on source order. If <code>:hover</code> comes before <code>:visited</code>, a visited link will never show its hover state.</p><p><strong>Q: What does the <code>:focus</code> pseudo-class target?</strong></p><p>A: It targets an element when it receives focus, typically by the user tabbing through the page with a keyboard.</p><p><strong>Q: Can you style a <code>:visited</code> link to have a different font-size?</strong></p><p>A: No. For security and privacy reasons (to prevent sites from sniffing your browsing history), browsers heavily restrict what can be styled with <code>:visited</code>. You can generally only change the color.</p><h2>Summary</h2><p>Links are the interactive connective tissue of the web. Proper link styling goes beyond just changing colors—it requires strict adherence to the LVHA cascade order to ensure states don't override each other. By providing clear visual feedback on hover and preserving accessibility outlines, you ensure a superior user experience.</p>
  </div>`
  },
  {
    id: 'lists',
    title: 'Lists',
    content: `
  <div class="topic-header">
    <span class="topic-badge">Topic 20</span>
    <h1>Lists</h1>
  </div>
  <div class="topic-section">
    <p>Lists are very helpful in conveying a set of either numbered or bulleted points. This chapter teaches you how to control list type, position, style, etc., using CSS.</p>
    <p>We have the following CSS properties, which can be used to control lists:</p>
    <table class="css-table">
  <thead>
    <tr><th>Property</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><code>list-style-type</code></td><td>allows you to control the shape or appearance of the marker.</td></tr>
    <tr><td><code>list-style-position</code></td><td>specifies whether a long point that wraps to a second line should align with the first line or start underneath the start of the marker.</td></tr>
    <tr><td><code>list-style-image</code></td><td>specifies an image for the marker rather than a bullet point or number.</td></tr>
    <tr><td><code>list-style</code></td><td>serves as shorthand for the preceding properties.</td></tr>
    <tr><td><code>marker-offset</code></td><td>specifies the distance between a marker and the text in the list.</td></tr>
  </tbody>
</table>
  </div>

  <div class="topic-section">
    <h3>The list-style-type Property</h3>
    <p>The <code>list-style-type</code> property allows you to control the shape or style of bullet point (also known as a marker) in the case of unordered lists and the style of numbering characters in ordered lists.</p>

    <h3 style="margin-top: 24px; margin-bottom: 12px; font-size: 1.1em; color: var(--white);">Unordered List Values</h3>
    <table class="css-table">
  <thead>
    <tr><th>Value</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><code>none</code></td><td>NA (Removes the marker)</td></tr>
    <tr><td><code>disc</code></td><td>A filled-in circle (default)</td></tr>
    <tr><td><code>circle</code></td><td>An empty circle</td></tr>
    <tr><td><code>square</code></td><td>A filled-in square</td></tr>
  </tbody>
</table>

    <h3 style="margin-top: 24px; margin-bottom: 12px; font-size: 1.1em; color: var(--white);">Ordered List Values</h3>
    <table class="css-table">
  <thead>
    <tr><th>Value</th><th>Description</th><th>Example</th></tr>
  </thead>
  <tbody>
    <tr><td><code>decimal</code></td><td>Number</td><td>1, 2, 3, 4, 5</td></tr>
    <tr><td><code>decimal-leading-zero</code></td><td>0 before the number</td><td>01, 02, 03, 04, 05</td></tr>
    <tr><td><code>lower-alpha</code></td><td>Lowercase alphanumeric characters</td><td>a, b, c, d, e</td></tr>
    <tr><td><code>upper-alpha</code></td><td>Uppercase alphanumeric characters</td><td>A, B, C, D, E</td></tr>
    <tr><td><code>lower-roman</code></td><td>Lowercase Roman numerals</td><td>i, ii, iii, iv, v</td></tr>
    <tr><td><code>upper-roman</code></td><td>Uppercase Roman numerals</td><td>I, II, III, IV, V</td></tr>
    <tr><td><code>lower-greek</code></td><td>The marker is lower-greek</td><td>alpha, beta, gamma</td></tr>
  </tbody>
</table>
  </div>

  <div class="topic-section">
    <h3>Example</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         ul { list-style-type: square; }
         ol { list-style-type: upper-alpha; }
         ol.roman { list-style-type: lower-roman; }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;h3&gt;Unordered List&lt;/h3&gt;
      &lt;ul&gt;
         &lt;li&gt;Square Item 1&lt;/li&gt;
         &lt;li&gt;Square Item 2&lt;/li&gt;
      &lt;/ul&gt;

      &lt;h3&gt;Ordered List&lt;/h3&gt;
      &lt;ol&gt;
         &lt;li&gt;First item (A)&lt;/li&gt;
         &lt;li&gt;Second item (B)&lt;/li&gt;
      &lt;/ol&gt;

      &lt;ol class="roman"&gt;
         &lt;li&gt;First roman item (i)&lt;/li&gt;
         &lt;li&gt;Second roman item (ii)&lt;/li&gt;
      &lt;/ol&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>


<h2>Practical Examples</h2><p>Styling a list to remove default browser styling, and replacing the bullets with a custom SVG icon using the <code>::before</code> pseudo-element (which offers better alignment control than <code>list-style-image</code>):</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;style&gt;
.custom-list {
   list-style: none; /* Remove default bullets */
   padding: 0;       /* Remove default indentation */
}

.custom-list li {
   position: relative;
   padding-left: 30px;
   margin-bottom: 10px;
}

.custom-list li::before {
   content: <code>"✓"</code>;
   position: absolute;
   left: 0;
   color: #10b981; /* Green checkmark */
   font-weight: bold;
}
&lt;/style&gt;

&lt;ul class="custom-list"&gt;
  &lt;li&gt;First custom item&lt;/li&gt;
  &lt;li&gt;Second custom item&lt;/li&gt;
&lt;/ul&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Removing padding without replacing it</strong> − Browsers add default left-padding to <code>&lt;ul&gt;</code> to make room for bullets. If you set <code>padding: 0;</code> but keep <code>list-style-type: disc</code>, the bullets will render outside the screen edge.</li><li><strong>Using <code>list-style-position: inside</code> carelessly</strong> − If a list item wraps to a second line, <code>inside</code> causes the text to wrap directly under the bullet point rather than aligning cleanly with the text above it.</li><li><strong>Using <code>list-style-image</code> for complex icons</strong> − This property is notoriously difficult to position vertically. Using a background image or a pseudo-element is much easier to align.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Reset lists when used for layout</strong> − If you are using a <code>&lt;ul&gt;</code> for a navigation bar, immediately apply <code>list-style: none;</code> and <code>padding: 0;</code> to reset it to a clean slate.</li><li><strong>Prefer pseudo-elements for custom bullets</strong> − As shown in the practical example, <code>::before</code> gives you pixel-perfect control over the size, color, and vertical alignment of custom bullet icons.</li></ul><h2>Interview Questions</h2><p><strong>Q: How do you completely remove the bullets from an unordered list?</strong></p><p>A: Apply <code>list-style: none;</code> or <code>list-style-type: none;</code>.</p><p><strong>Q: What is the difference between <code>list-style-position: inside</code> and <code>outside</code>?</strong></p><p>A: <code>outside</code> (the default) places the bullet outside the text flow, so multi-line text aligns perfectly. <code>inside</code> brings the bullet into the text block, meaning wrapped text will sit directly underneath the bullet.</p><p><strong>Q: Can you style the default bullet color without changing the text color?</strong></p><p>A: Yes, in modern CSS you can use the <code>::marker</code> pseudo-element (e.g., <code>li::marker { color: red; }</code>) to style the bullet independently.</p><h2>Summary</h2><p>While lists are simple by nature, they form the structural backbone of navigation menus and feature sets. Understanding how to reset their default padding, control bullet positioning, and inject custom icons via pseudo-elements allows you to transform boring lists into engaging UI components.</p>
  </div>`
  },
  {
    id: 'tables',
    title: 'Tables',
    content: `
  <div class="topic-header">
    <span class="topic-badge">Topic 21</span>
    <h1>Tables</h1>
  </div>
  <div class="topic-section">
    <p>This tutorial will teach you how to set different properties of an HTML table using CSS. You can set following properties of a table −</p>
    <table class="css-table">
  <thead>
    <tr><th>Property</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><code>border-collapse</code></td><td>Specifies whether the browser should control the appearance of the adjacent borders that touch each other or whether each cell should maintain its style.</td></tr>
    <tr><td><code>border-spacing</code></td><td>Specifies the width that should appear between table cells.</td></tr>
    <tr><td><code>caption-side</code></td><td>Captions are presented in the &lt;caption&gt; element. By default, these are rendered above the table in the document. You use the <code>caption-side</code> property to control the placement of the table caption.</td></tr>
    <tr><td><code>empty-cells</code></td><td>Specifies whether the border should be shown if a cell is empty.</td></tr>
    <tr><td><code>table-layout</code></td><td>Allows browsers to speed up layout of a table by using the first <code>width</code> properties it comes across for the rest of a column rather than having to load the whole table before rendering it.</td></tr>
  </tbody>
</table>
    <p>Now, we will see how to use these properties with examples. The border-collapse Property: This property can have two values <code>collapse</code> and <code>separate</code>. The following example uses both the values:</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
   &lt;style type="text/css"&gt;
      table.one {border-collapse:collapse;}
      table.two {border-collapse:separate;}
      td.a {
         border-style:dotted;
         border-width:3px;
         border-color:#000000;
         padding: 10px;
      }
      td.b {
         border-style:solid;
         border-width:3px;
         border-color:#333333;
         padding:10px;
      }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;table class="one"&gt;
&lt;caption&gt;Collapse Border Example&lt;/caption&gt;
&lt;tr&gt;&lt;td class="a"&gt; Cell A Collapse Example&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td class="b"&gt; Cell B Collapse Example&lt;/td&gt;&lt;/tr&gt;
&lt;/table&gt;
&lt;br /&gt;
&lt;table class="two"&gt;
&lt;caption&gt;Separate Border Example&lt;/caption&gt;
&lt;tr&gt;&lt;td class="a"&gt; Cell A Separate Example&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td class="b"&gt; Cell B Separate Example&lt;/td&gt;&lt;/tr&gt;
&lt;/table&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h2>The border-spacing Property</h2>
    <p>The <code>border-spacing</code> property specifies the distance that separates adjacent cells'. borders. It can take either one or two values; these should be units of length.</p>
    <p>If you provide one value, it will applies to both vertical and horizontal borders. Or you can specify two values, in which case, the first refers to the horizontal spacing and the second to the vertical spacing − NOTE − Unfortunately, this property does not work in Netscape 7 or IE 6.</p>

    <p><strong>Example — one value:</strong></p>
    <div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy">Copy</button></div></div><pre class="code-block"><code>table.example { border-spacing: 10px; }</code></pre></div>
    <p><strong>Example — two values:</strong></p>
    <div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy">Copy</button></div></div><pre class="code-block"><code>table.example { border-spacing: 10px 15px; }</code></pre></div>

    <p>Now let's modify the previous example and see the effect −</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
   &lt;style type="text/css"&gt;
      table.one {.
         border-collapse:separate;
         width:400px;
         border-spacing:10px;
      }
      table.two {
         border-collapse:separate;
         width:400px;
         border-spacing:10px 50px;
      }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;table class="two"&gt;
&lt;caption&gt;Separate Border Example with border-spacing&lt;/caption&gt;
&lt;tr&gt;&lt;td class="a"&gt; Cell A Collapse Example&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td class="b"&gt; Cell B Collapse Example&lt;/td&gt;&lt;/tr&gt;
&lt;/table&gt;
&lt;br /&gt;
&lt;table class="two"&gt;
&lt;caption&gt;Separate Border Example with border-spacing&lt;/caption&gt;
&lt;tr&gt;&lt;td class="a"&gt; Cell A Separate Example&lt;/td&gt;&lt;/tr&gt;
&lt;tr&gt;&lt;td class="b"&gt; Cell B Separate Example&lt;/td&gt;&lt;/tr&gt;
&lt;/table&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h2>The caption-side Property</h2>
    <p>The <code>caption-side</code> property allows you to specify where the content of a &lt;caption&gt; element should be placed in relationship to the table. This property can have one of the four values <code>top</code>, <code>bottom</code>, <code>left</code> or <code>right</code>. The following example uses each value.</p>



    <p>NOTE: These properties may not work with your IE Browser.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style type="text/css"&gt;
         caption.top {caption-side:top}
         caption.bottom {caption-side:bottom}
         caption.left {caption-side:left}
         caption.right {caption-side:right}
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;table style="width:400px; border:1px solid black;"&gt;
      &lt;caption&gt;
         This caption will appear at the top
      &lt;/caption&gt;
      &lt;tr&gt;&lt;td&gt; Cell A&lt;/td&gt;&lt;/tr&gt;
      &lt;tr&gt;&lt;td&gt; Cell B&lt;/td&gt;&lt;/tr&gt;
      &lt;/table&gt;
      &lt;br /&gt;
      &lt;table style="width:400px; border:1px solid black;"&gt;
      &lt;caption&gt;
         This caption will appear at the bottom
      &lt;/caption&gt;
      &lt;tr&gt;&lt;td&gt; Cell A&lt;/td&gt;&lt;/tr&gt;
      &lt;tr&gt;&lt;td&gt; Cell B&lt;/td&gt;&lt;/tr&gt;
      &lt;/table&gt;
      &lt;br /&gt;
      &lt;table style="width:400px; border:1px solid black;"&gt;
      &lt;caption&gt;
         This caption will appear at the left
      &lt;/caption&gt;
      &lt;tr&gt;&lt;td&gt; Cell A&lt;/td&gt;&lt;/tr&gt;
      &lt;tr&gt;&lt;td&gt; Cell B&lt;/td&gt;&lt;/tr&gt;
      &lt;/table&gt;
      &lt;br /&gt;
      &lt;table style="width:400px; border:1px solid black;"&gt;
      &lt;caption&gt;
         This caption will appear at the right
      &lt;/caption&gt;
      &lt;tr&gt;&lt;td&gt; Cell A&lt;/td&gt;&lt;/tr&gt;
      &lt;tr&gt;&lt;td&gt; Cell B&lt;/td&gt;&lt;/tr&gt;
      &lt;/table&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h2>The empty-cells Property</h2>
    <p>The <code>empty-cells</code> property indicates whether a cell without any content should have a border displayed.</p>
    <p>This property can have one of the three values <code>show</code>, <code>hide</code> or <code>inherit</code>.</p>
    <p>Here is the <code>empty-cells</code> property used to hide borders of empty cells in the &lt;table&gt; element.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style type="text/css"&gt;
         table.empty{
            width:350px;
            border-collapse:separate;
            empty-cells:hide;
         }
         td.empty{
            padding:5px;
            border-style:solid;
            border-width:1px;
            border-color:#999999;
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;table&gt;
&lt;tr&gt;
&lt;th&gt;&lt;/th&gt;
&lt;th&gt;Title one&lt;/th&gt;
&lt;th&gt;Title two&lt;/th&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;th&gt;Row Title&lt;/th&gt;
&lt;td&gt;value&lt;/td&gt;
&lt;td&gt;value&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;th&gt;Row Title&lt;/th&gt;
&lt;td&gt;value&lt;/td&gt;
&lt;td&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h2>The table-layout Property</h2>
    <p>The <code>table-layout</code> property is supposed to help you control how a browser should render or lay out a table.</p>
    <p>This property can have one of the three values: <code>fixed</code>, <code>auto</code> or <code>inherit</code>.</p>
    <p>The following example shows the difference between these properties.</p>
    <p>NOTE − This property is not supported by many browsers so do not rely on this property.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style type="text/css"&gt;
         table.auto {
            table-layout: auto
         }
         table.fixed{
            table-layout: fixed
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;table&gt;
&lt;tr&gt;
&lt;td width="20%"&gt;1000000000000000000000000000&lt;/td&gt;
&lt;td width="40%"&gt;10000000&lt;/td&gt;
&lt;td width="40%"&gt;100&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;
&lt;br /&gt;
&lt;table&gt;
&lt;tr&gt;
&lt;td width="20%"&gt;1000000000000000000000000000&lt;/td&gt;
&lt;td width="40%"&gt;10000000&lt;/td&gt;
&lt;td width="40%"&gt;100&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>



<h2>Practical Examples</h2><p>A clean, modern data table with collapsed borders, distinct headers, and a striped row effect for readability:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;style&gt;
.data-table {
   width: 100%;
   border-collapse: collapse;
   table-layout: fixed;
}

.data-table th,
.data-table td {
   border: 1px solid #ddd;
   padding: 12px;
   text-align: left;
}

.data-table th {
   background-color: #f4f4f4;
   font-weight: bold;
}

/* Zebra Striping */
.data-table tr:nth-child(even) {
   background-color: #fafafa;
}

/* Hover Effect */
.data-table tr:hover {
   background-color: #f1f5f9;
}
&lt;/style&gt;

&lt;table class="data-table"&gt;
  &lt;tr&gt;&lt;th&gt;Name&lt;/th&gt;&lt;th&gt;Age&lt;/th&gt;&lt;/tr&gt;
  &lt;tr&gt;&lt;td&gt;Alice&lt;/td&gt;&lt;td&gt;25&lt;/td&gt;&lt;/tr&gt;
  &lt;tr&gt;&lt;td&gt;Bob&lt;/td&gt;&lt;td&gt;30&lt;/td&gt;&lt;/tr&gt;
&lt;/table&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Forgetting <code>border-collapse</code></strong> − By default, tables use <code>border-collapse: separate</code>, which creates an ugly double-border effect between cells if you apply borders to both the table and the <code>td</code>.</li><li><strong>Ignoring mobile responsiveness</strong> − Tables do not shrink well. If a table has too many columns, it will break the mobile layout. You must wrap the table in a container with <code>overflow-x: auto</code> to allow horizontal scrolling on small screens.</li><li><strong>Using HTML attributes for styling</strong> − Using old HTML attributes like <code>cellpadding="10"</code> or <code>border="1"</code> instead of applying padding and borders via CSS.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Use <code>table-layout: fixed</code></strong> − This property makes table rendering much faster and column widths predictable (based on the first row or specific width definitions), rather than the browser guessing based on content volume.</li><li><strong>Use <code>:nth-child</code> for striping</strong> − Zebra-striping rows using <code>tr:nth-child(even)</code> makes reading wide rows of data significantly easier for the user.</li><li><strong>Align numbers to the right</strong> − In data tables, always align numerical data (like prices or quantities) to the right so decimal points line up vertically.</li></ul><h2>Interview Questions</h2><p><strong>Q: What is the difference between <code>border-collapse: collapse</code> and <code>border-collapse: separate</code>?</strong></p><p>A: <code>separate</code> leaves a gap between the borders of adjacent cells (creating double borders). <code>collapse</code> merges adjacent borders into a single, clean border line.</p><p><strong>Q: How do you change the space between cells if the borders are separated?</strong></p><p>A: Using the <code>border-spacing</code> property.</p><p><strong>Q: What does <code>table-layout: fixed</code> do?</strong></p><p>A: It forces the table to obey defined widths regardless of the cell content, preventing a single long word from blowing out the width of the entire column.</p><h2>Summary</h2><p>While tables should never be used for overall page layout anymore, they remain the absolute best tool for displaying tabular data. Mastering properties like <code>border-collapse</code>, <code>table-layout</code>, and pseudo-classes for row striping will allow you to build clean, readable, and professional data grids.</p>
  </div>`
  },
  {
    id: 'background',
    title: 'Background',
    content: `
  <div class="topic-header">
    <span class="topic-badge">Topic 22</span>
    <h1>Background</h1>
  </div>
  <div class="topic-section">
    <p>This chapter teaches you how to set backgrounds of various HTML elements. You can set the following <code>background</code> properties of an element −</p>
    <table class="css-table">
  <thead>
    <tr><th>Property</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><code>background-color</code></td><td>is used to set the background color of an element.</td></tr>
    <tr><td><code>background-image</code></td><td>is used to set the background image of an element.</td></tr>
    <tr><td><code>background-repeat</code></td><td>is used to control the repetition of an image in the background.</td></tr>
    <tr><td><code>background-position</code></td><td>is used to control the position of an image in the background.</td></tr>
    <tr><td><code>background-attachment</code></td><td>is used to control the scrolling of an image in the background.</td></tr>
    <tr><td><code>background</code></td><td>is used as a shorthand to specify a number of other <code>background</code> properties.</td></tr>
  </tbody>
</table>

    <h3>Set the Background Color</h3>
    <p>Following is the example which demonstrates how to set the background color for an element.</p>


    <h3>Repeat the Background Image</h3>
    <p>The following example demonstrates how to repeat the background image if an image is small.</p>
    <p>You can use the <code>no-repeat</code> value for the <code>background-repeat</code> property if you don't want to repeat an image; in this case the image will display only once. By default, the <code>background-repeat</code> property will have the <code>repeat</code> value.</p>

    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         body {
            background-image: url('assets/images/demo-pattern.png');
            background-size: 100px;
            background-repeat: repeat;
            min-height: 100vh;
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;p&gt;Image repeats in both directions (default)&lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <p>The following example which demonstrates how to repeat the background image vertically.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         body {
            background-image: url('assets/images/demo-pattern.png');
            background-size: 100px;
            background-repeat: repeat-y;
            min-height: 100vh;
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;p&gt;Image repeats vertically (repeat-y)&lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <p>The following example demonstrates how to repeat the background image horizontally.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         body {
            background-image: url('assets/images/demo-pattern.png');
            background-size: 100px;
            background-repeat: repeat-x;
            min-height: 100vh;
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;p&gt;Image repeats horizontally (repeat-x)&lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>Set the Background Image Position</h3>
    <p>The following example demonstrates how to set the background image position 100 pixels away from the left side.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         body {
            background-image: url('assets/images/demo-pattern.png');
            background-size: 100px;
            background-position:100px;
            background-repeat: no-repeat;
            min-height: 100vh;
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;p&gt;Positioned 100px from left&lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <p>The following example demonstrates how to set the background image position 100 pixels away from the left side and 200 pixels down from the top.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         body {
            background-image: url('assets/images/demo-pattern.png');
            background-size: 100px;
            background-position:100px 200px;
            background-repeat: no-repeat;
            min-height: 100vh;
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;p&gt;Positioned 100px left, 200px top&lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>Set the Background Attachment</h3>
    <p>Background attachment determines whether a background image is fixed or scrolls with the rest of the page.</p>
    <p>The following example demonstrates how to set the fixed background image.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         body {
            background-image: url('assets/images/demo-logo.png');
            background-repeat: no-repeat;
            background-attachment: fixed;
            min-height: 100vh;
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;p&gt;The background-image is fixed. Try to scroll down the page.&lt;/p&gt;
      &lt;p&gt;The background-image is fixed. Try to scroll down the page.&lt;/p&gt;
      &lt;p&gt;The background-image is fixed. Try to scroll down the page.&lt;/p&gt;
      &lt;p&gt;The background-image is fixed. Try to scroll down the page.&lt;/p&gt;
      &lt;p&gt;The background-image is fixed. Try to scroll down the page.&lt;/p&gt;
      &lt;p&gt;The background-image is fixed. Try to scroll down the page.&lt;/p&gt;
      &lt;p&gt;The background-image is fixed. Try to scroll down the page.&lt;/p&gt;
      &lt;p&gt;The background-image is fixed. Try to scroll down the page.&lt;/p&gt;
      &lt;p&gt;The background-image is fixed. Try to scroll down the page.&lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <p>The following example demonstrates how to set the scrolling background image.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         body {
            background-image: url('assets/images/demo-logo.png');
            background-repeat: no-repeat;
            background-attachment: scroll;
            min-height: 100vh;
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;p&gt;The background-image is fixed. Try to scroll down the page.&lt;/p&gt;
      &lt;p&gt;The background-image is fixed. Try to scroll down the page.&lt;/p&gt;
      &lt;p&gt;The background-image is fixed. Try to scroll down the page.&lt;/p&gt;
      &lt;p&gt;The background-image is fixed. Try to scroll down the page.&lt;/p&gt;
      &lt;p&gt;The background-image is fixed. Try to scroll down the page.&lt;/p&gt;
      &lt;p&gt;The background-image is fixed. Try to scroll down the page.&lt;/p&gt;
      &lt;p&gt;The background-image is fixed. Try to scroll down the page.&lt;/p&gt;
      &lt;p&gt;The background-image is fixed. Try to scroll down the page.&lt;/p&gt;
      &lt;p&gt;The background-image is fixed. Try to scroll down the page.&lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>Shorthand Property</h3>
    <p>You can use the <code>background</code> property to set all the <code>background</code> properties at once. For example −</p>
    <div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">HTML/CSS</span></div><div class="code-actions"><button type="button" class="btn-copy">Copy</button></div></div><pre class="code-block"><code>&lt;p style="background:url(assets/images/demo-pattern.png);
            background-size: 100px repeat fixed;"&gt;
This paragraph has fixed repeated background image.
&lt;/p&gt;</code></pre></div>



<h2>Practical Examples</h2><p>A common <code>"Hero Section"</code> pattern utilizing the background shorthand property to display a large, centered, non-repeating cover image:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;style&gt;
/* Shorthand: color image repeat attachment position */
.hero-section {
   /* Note: The fallback color #333 loads if the image fails */
   background: #333 url("assets/images/demo-photo.jpg") no-repeat center center;

   /* Force the image to cover the entire container */
   background-size: cover;
   height: 400px;
}
&lt;/style&gt;

&lt;div class="hero-section"&gt;
  &lt;h2&gt;Hero Title&lt;/h2&gt;
&lt;/div&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Forgetting a fallback color</strong> − If you apply a background image behind white text, but the image fails to load (or loads slowly), the white text will become invisible against the default white page. Always provide a fallback <code>background-color</code>.</li><li><strong>Using massive, unoptimized images</strong> − Loading a 5MB image for a background causes massive performance delays. Always compress background images before deploying.</li><li><strong>Not preventing repeat</strong> − By default, background images tile (repeat) endlessly. Forgetting <code>background-repeat: no-repeat;</code> often results in ugly tiled layouts on large screens.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Use <code>background-size: cover</code> for full-width sections</strong> − This ensures your image scales beautifully to fill the container without distorting its aspect ratio.</li><li><strong>Add Overlays for Text Legibility</strong> − If you put text over a busy background image, use a semi-transparent dark overlay (e.g., using a linear-gradient) to ensure the text remains readable.</li><li><strong>Master the Shorthand</strong> − Use the <code>background</code> shorthand to declare the color, image, repeat, and position in a single line to keep your CSS clean.</li><li><strong>Optimize background images</strong> − Large unoptimized background images can severely slow down page load times. Always compress background images before uploading them.</li></ul><h2>Interview Questions</h2><p><strong>Q: What is the difference between <code>background-size: cover</code> and <code>contain</code>?</strong></p><p>A: <code>cover</code> scales the image to completely fill the container (cropping the edges if necessary). <code>contain</code> scales the image so the entire image is visible (leaving empty letterbox space if the aspect ratios don't match).</p><p><strong>Q: How do you create a <code>"parallax"</code> scrolling effect with a background image?</strong></p><p>A: By using <code>background-attachment: fixed;</code>, which locks the background image to the viewport while the rest of the page scrolls over it.</p><p><strong>Q: What is the default behavior of a background image if it is smaller than its container?</strong></p><p>A: It will repeat (tile) horizontally and vertically until it fills the entire container.</p><p><strong>Q: Can an element have multiple background images?</strong></p><p>A: Yes! You can separate multiple images with commas in the <code>background-image</code> property. The first image listed will appear on top.</p><h2>Summary</h2><p>The <code>background</code> properties allow you to style the layer underneath your content. Whether you are using solid colors or complex images, mastering properties like <code>background-size</code> and <code>background-repeat</code> ensures your visual design scales perfectly across all device sizes. Always remember your fallback color!</p>
  </div>`
  },
  {
    id: 'multi-background',
    title: 'Multi Background',
    content: `
  <div class="topic-header">
    <span class="topic-badge">Topic 23</span>
    <h1>Multi Background</h1>
  </div>
  <div class="topic-section">
    <h3>Multi Background</h3>
    <p>CSS Multi <code>background</code> property is used to add one or more images at a time without HTML code. We can add images as per our requirement. A sample syntax of multi background images is as follows −</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>#multibackground {
   background-image: url(assets/images/demo-logo.png), url(assets/images/demo-pattern.png);
   background-size: 100px, 200px;
   background-position: left top, left top;
   background-repeat: no-repeat, repeat;
   padding: 75px;
}</code></pre>
    </div>
    <p>the most commonly used values are shown below −</p>
    <table class="css-table">
      <thead>
        <tr>
          <th>Value</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>background</code></td>
          <td>Used to setting all the background image properties in one section</td>
        </tr>
        <tr>
          <td><code>background-clip</code></td>
          <td>Used to declare the painting area of the background</td>
        </tr>
        <tr>
          <td><code>background-image</code></td>
          <td>Used to specify the background image</td>
        </tr>
        <tr>
          <td><code>background-origin</code></td>
          <td>Used to specify position of the background images</td>
        </tr>
        <tr>
          <td><code>background-size</code></td>
          <td>Used to specify size of the background images</td>
        </tr>
      </tbody>
    </table>
    <h3>Example</h3>
    <p>Following is the example which demonstrate the multi background images</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         #multibackground {
            background-image: url(assets/images/demo-logo.png), url(assets/images/demo-pattern.png);
            background-size: 100px, 200px;
            background-position: left top, left top;
            background-repeat: no-repeat, repeat;
            padding: 75px;
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;div id="multibackground"&gt;
&lt;h1&gt;Hello World&lt;/h1&gt;
&lt;p&gt;This is a sample paragraph used to demonstrate the CSS property. You can write your own text here to see how it looks and behaves on the page. Adding more text helps you visualize how the layout handles larger amounts of content, including line breaks, alignment, overflow, and other typographic styling options.&lt;/p&gt;
&lt;/div&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>Size of Multi background</h3>
    <p>Multi <code>background</code> property is accepted to add different sizes for different images.A sample syntax is as shown below −</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>#multibackground {
   background: url(assets/images/demo-logo.png) left top no-repeat,
               url(assets/images/demo-border.svg) right bottom no-repeat,
               url(assets/images/demo-pattern.png);
   background-size: 50px, 130px, auto;
}</code></pre>
    </div>
    <p>As shown above an example, each image is having specific sizes as 50px, 130px and auto size.</p>
    <p>CSS3 has Supported additional <code>color</code> properties as follows −</p>


<h2>Practical Examples</h2><p>Layering a semi-transparent dark gradient overlay on top of a high-resolution photograph to ensure white text remains readable:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;style&gt;
.hero-banner {
   /* Note: The FIRST background in the list is the TOP layer */
   background-image:
      linear-gradient(rgba(0,0,0, 0.6), rgba(0,0,0, 0.6)),
      url("assets/images/demo-photo.jpg");

   /* You can pair properties for each layer via commas */
   background-size: cover, cover;
   background-position: center, center;
}
&lt;/style&gt;

&lt;div class="hero-banner" style="height:300px; color:white; display:flex; align-items:center; justify-content:center;"&gt;
  &lt;h1&gt;Hero Text Over Gradient!&lt;/h1&gt;
&lt;/div&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Listing the layers in the wrong order</strong> − Developers often list the photo first and the gradient second, expecting the gradient to lay on top. In CSS, the FIRST background listed in the comma-separated sequence is the TOP layer (closest to the user).</li><li><strong>Applying <code>background-color</code> to multiple layers</strong> − You can only declare a <code>background-color</code> once, and it must be applied to the very bottom layer (or defined entirely separately outside the shorthand).</li><li><strong>Forgetting to comma-separate supporting properties</strong> − If you have two images, you must provide two comma-separated values for <code>background-size</code> and <code>background-repeat</code>, or else the single value will apply to all layers.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Use Gradients as Overlays</strong> − Instead of creating an empty <code>&lt;div class="overlay"&gt;</code> in your HTML to darken an image, use multiple backgrounds to keep your DOM perfectly clean.</li><li><strong>Combine Patterns with Photos</strong> − You can layer a tiny repeating 2x2 pixel grid (like a scanline effect) over a large photo to create a vintage aesthetic without needing Photoshop.</li></ul><h2>Interview Questions</h2><p><strong>Q: In a comma-separated list of multiple background images, which one appears on the top layer?</strong></p><p>A: The very first image in the list is rendered on the topmost layer. Subsequent images are rendered behind it.</p><p><strong>Q: Can you apply a different <code>background-size</code> to each background image?</strong></p><p>A: Yes, by providing a comma-separated list to the <code>background-size</code> property that corresponds directly to the order of the images in the <code>background-image</code> property.</p><p><strong>Q: Why is it common to use a <code>linear-gradient</code> as a background image layer?</strong></p><p>A: It is frequently used to create semi-transparent color overlays (tinting) on top of photographic backgrounds, ensuring that text placed over the image maintains a high contrast ratio and remains readable.</p><h2>Summary</h2><p>Multiple backgrounds dramatically reduce the need for extra wrapper divs in HTML. By simply separating URLs and gradients with commas, you can construct complex, layered visuals directly in CSS. The golden rule to remember: the first image listed is the topmost layer.</p>
  </div>`
  },
  {
    id: 'gradients',
    title: 'Gradients',
    content: `
  <div class="topic-header">
    <span class="topic-badge">Topic 24</span>
    <h1>Gradients</h1>
  </div>
  <div class="topic-section">
    <h2>What is Gradients?</h2>
    <p>Gradients display the combination of two or more colors as shown below:</p>
    <h2>Types of gradients</h2>
    <table class="css-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Linear Gradients</td>
          <td>down/up/left/right/diagonally</td>
        </tr>
        <tr>
          <td>Radial Gradients</td>
          <td>defined by their center</td>
        </tr>
      </tbody>
    </table>
    <h3>Linear gradients</h3>
    <p>Linear gradients are used to arrange two or more colors in linear formats like top to bottom.</p>
    <h3>Top to bottom</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         #grad1 {
            height: 100px;
            background: -webkit-linear-gradient(pink,green);
            background: -o-linear-gradient(pink,green);
            background: -moz-linear-gradient(pink,green);
            background: linear-gradient(pink,green);
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;div id="grad1"&gt;&lt;/div&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>Left to right</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         #grad1 {
            height: 100px;
            background: -webkit-linear-gradient(left, red , blue);
            background: -o-linear-gradient(right, red, blue);
            background: -moz-linear-gradient(right, red, blue);
            background: linear-gradient(to right, red , blue);
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;div id="grad1"&gt;&lt;/div&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>Diagonal</h3>
    <p>Diagonal gradients can start at the top-left and go to the bottom-right.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         #grad1 {
            height: 100px;
            background: -webkit-linear-gradient(left top, red , blue);
            background: -o-linear-gradient(bottom right, red, blue);
            background: -moz-linear-gradient(bottom right, red, blue);
            background: linear-gradient(to bottom right, red , blue);
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;div id="grad1"&gt;&lt;/div&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>Multi color</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         #grad2 {
            height: 100px;
            background: -webkit-linear-gradient(red, orange, yellow, red, blue,
green,pink);
            background: -o-linear-gradient(red, orange, yellow, red, blue, green,pink);
            background: -moz-linear-gradient(red, orange, yellow, red, blue,
green,pink);
            background: linear-gradient(red, orange, yellow, red, blue, green,pink);
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;div id="grad1"&gt;&lt;/div&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>CSS3 Radial Gradients</h3>
    <p>Radial gradients appear at the center by default.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         #grad1 {
            height: 100px;
            width: 550px;
            background: -webkit-radial-gradient(red 5%, green 15%, pink 60%);
            background: -o-radial-gradient(red 5%, green 15%, pink 60%);
            background: -moz-radial-gradient(red 5%, green 15%, pink 60%);
            background: radial-gradient(red 5%, green 15%, pink 60%);
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;div id="grad1"&gt;&lt;/div&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>CSS3 Repeat Radial Gradients</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         #grad1 {
            height: 100px;
            width: 550px;
            background: -webkit-repeating-radial-gradient(blue, yellow 10%, green 15%);
            background: -o-repeating-radial-gradient(blue, yellow 10%, green 15%);
            background: -moz-repeating-radial-gradient(blue, yellow 10%, green 15%);
            background: repeating-radial-gradient(blue, yellow 10%, green 15%);
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;div id="grad1"&gt;&lt;/div&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>




<h2>Practical Examples</h2><p>A vibrant, modern button with an angled linear gradient, and a striped progress bar utilizing a repeating linear gradient:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;style&gt;
/* Standard Angled Gradient */
.btn-gradient {
   background-image: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
   color: white;
}

/* Striped Progress Bar Effect */
.progress-bar {
   background-image: repeating-linear-gradient(
      45deg,
      #3b82f6,
      #3b82f6 10px,
      #2563eb 10px,
      #2563eb 20px
   );
}
&lt;/style&gt;

&lt;button class="btn-gradient" style="padding:15px 30px; border:none; border-radius:5px; margin-bottom:20px; color:white;"&gt;Cool Button&lt;/button&gt;
&lt;div class="progress-bar" style="height:30px; width:100%; border-radius:15px;"&gt;&lt;/div&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Treating gradients as a color</strong> − Gradients cannot be applied to the <code>background-color</code> property. They are generated by the browser as an image, and must be applied to <code>background-image</code> (or the <code>background</code> shorthand).</li><li><strong>Failing to provide a solid fallback</strong> − Older environments or email clients strip out gradients. Always declare a solid <code>background-color</code> right before your gradient rule so the layout survives.</li><li><strong>The <code>"Gray Dead Zone"</code> in Safari</strong> − Fading from a solid color to <code>transparent</code> can create an ugly grayish-black artifact in Safari. Best practice is to fade to an invisible version of the same color (e.g., <code>rgba(255,0,0, 1)</code> to <code>rgba(255,0,0, 0)</code>).</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Use degrees for angles</strong> − While <code>to bottom right</code> is easy to read, using degrees (like <code>135deg</code>) provides far more precision and consistency, especially when syncing design files from Figma.</li><li><strong>Use Hard Stops for sharp lines</strong> − As shown in the progress bar example, if two color stops share the exact same percentage (e.g., red stops at 50%, blue starts at 50%), the gradient creates a razor-sharp dividing line instead of a soft blend.</li></ul><h2>Interview Questions</h2><p><strong>Q: Are CSS gradients applied to the <code>background-color</code> or <code>background-image</code> property?</strong></p><p>A: <code>background-image</code>. The browser dynamically generates an image from the gradient math.</p><p><strong>Q: How do you create a sharp, distinct line between two colors in a gradient instead of a smooth fade?</strong></p><p>A: By placing two color stops at the exact same location (e.g., <code>linear-gradient(to right, red 50%, blue 50%)</code>).</p><p><strong>Q: What is the difference between a linear and a radial gradient?</strong></p><p>A: A linear gradient flows in a straight line from one side to another. A radial gradient radiates outward in a circle or ellipse from a central point.</p><h2>Summary</h2><p>CSS Gradients eliminate the need for hefty background images just to create smooth color transitions. By understanding color stops, angles, and the power of repeating gradients (for stripes and patterns), you can build highly performant, visually stunning UI components directly in code.</p>
  </div>`
  },
  {
    id: 'border-image',
    title: 'Border Image',
    content: `
  <div class="topic-header">
    <span class="topic-badge">Topic 25</span>
    <h1>Border Image</h1>
  </div>
  <div class="topic-section">
    <p>CSS Border Image property is used to add an image border to some elements. You don't need to use any HTML code to call the border image. A sample syntax of a border image is as follows −</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>#borderimg {
   border: 10px solid transparent;
   padding: 15px;
}</code></pre>
    </div>
    <p>The most commonly used values are shown below −</p>
    <table class="css-table">
      <thead>
        <tr>
          <th>Value</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>border-image-source</code></td>
          <td>Used to set the image path</td>
        </tr>
        <tr>
          <td><code>border-image-slice</code></td>
          <td>Used to slice the border image</td>
        </tr>
        <tr>
          <td><code>border-image-width</code></td>
          <td>Used to set the border image width</td>
        </tr>
        <tr>
          <td><code>border-image-repeat</code></td>
          <td>Used to set the border image as rounded, repeated and stretched</td>
        </tr>
      </tbody>
    </table>
    <h3>Example</h3>
    <p>Following is the example which demonstrates to set image as a border for elements</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         #borderimg1 {
            border: 10px solid transparent;
            padding: 15px;
            border-image-source: url(assets/images/demo-border.svg);
            border-image-repeat: round;
            border-image-slice: 30;
            border-image-width: 10px;
         }
         #borderimg2 {
            border: 10px solid transparent;
            padding: 15px;
            border-image-source: url(assets/images/demo-border.svg);
            border-image-repeat: round;
            border-image-slice: 30;
            border-image-width: 20px;
         }
         #borderimg3 {
            border: 10px solid transparent;
            padding: 15px;
            border-image-source: url(assets/images/demo-border.svg);
            border-image-repeat: round;
            border-image-slice: 30;
            border-image-width: 30px;
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;p id="borderimg1"&gt;This is an image border example.&lt;/p&gt;
&lt;p id="borderimg2"&gt;This is an image border example.&lt;/p&gt;
&lt;p id="borderimg3"&gt;This is an image border example.&lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>



<h2>Practical Examples</h2><p>Creating an intricate, resizable vintage picture frame around a photo using a single 9-slice image:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;style&gt;
.vintage-frame {
   /* 1. Provide a physical width for the image to exist inside */
   border: 20px solid transparent;

   /* 2. Set the source image */
   border-image-source: url("assets/images/demo-border.svg");

   /* 3. Slice the corners at 30px (unitless) and stretch the edges */
   border-image-slice: 30;
   border-image-repeat: stretch;
}
&lt;/style&gt;

&lt;div class="vintage-frame" style="width:200px; padding:20px; text-align:center; margin:20px;"&gt;I have a vintage border!&lt;/div&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Forgetting to define a standard <code>border-width</code></strong> − A <code>border-image</code> paints itself INSIDE the element's border area. If you don't define <code>border: 10px solid transparent;</code>, there is no physical space for the image to render, and nothing will appear.</li><li><strong>Adding units (px) to the slice property</strong> − Writing <code>border-image-slice: 30px;</code> is a syntax error. The slice property expects a unitless number (representing pixels for raster images) or a percentage.</li><li><strong>Not providing a solid fallback</strong> − If the image URL 404s, your element will have a transparent border. Always provide a fallback like <code>border: 10px solid black;</code>.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Use SVGs for border images</strong> − Since border images are stretched and tiled, using vector SVG files ensures the borders look perfectly crisp on high-DPI (Retina) displays.</li><li><strong>Understand 9-Slice Scaling</strong> − <code>border-image-slice</code> cuts the image into 9 zones (4 corners, 4 edges, 1 center). The corners remain fixed, while the edges stretch or repeat. Visualizing this grid is key to mastering the property.</li></ul><h2>Interview Questions</h2><p><strong>Q: Does <code>border-image-slice</code> require a unit like <code>px</code>?</strong></p><p>A: No, it requires a unitless integer (which implies pixels for raster images) or a percentage.</p><p><strong>Q: What does the <code>fill</code> keyword do when added to <code>border-image-slice</code>?</strong></p><p>A: By default, the center slice (the 9th zone) of the border image is discarded. Adding the <code>fill</code> keyword forces the center slice to act as the background image of the element.</p><p><strong>Q: What happens to a <code>border-image</code> if no <code>border-width</code> is defined on the element?</strong></p><p>A: It will not be visible, because the physical border area width is 0.</p><h2>Summary</h2><p>The <code>border-image</code> property brings complex, decorative borders to the web without needing massive, unscalable background images. By understanding how the 9-slice grid works and remembering to provide a physical <code>border-width</code> for it to paint on, you can create highly detailed, responsive UI frames.</p>
  </div>`
  },
  {
    id: 'using-images',
    title: 'Using Images',
    content: `
  <div class="topic-header">
    <span class="topic-badge">Topic 26</span>
    <h1>Using Images</h1>
  </div>
  <div class="topic-section">
    <p>Images play an important role in any webpage. Though it is not recommended to include a lot of images, but it is still important to use good images wherever required.</p>
    <p>CSS plays a good role to control image display. You can set the following image properties using CSS.</p>
    <p>The <code>border</code> property is used to set the width of an image border.</p>
    <p>The <code>height</code> property is used to set the height of an image.</p>
    <p>The <code>width</code> property is used to set the width of an image.</p>
    <p>The -moz-<code>opacity</code> property is used to set the opacity of an image.</p>
    <h3>The Image Border Property</h3>
    <p>The <code>border</code> property of an image is used to set the width of an image border. This property can have a value in length or in %.</p>
    <p>A width of zero pixels means no border. Here is the example −</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;img style="border:0px;" src="../assets/images/demo-logo.png" width="150" /&gt;
      &lt;br /&gt;
      &lt;img style="border:3px dashed red;" src="../assets/images/demo-logo.png" width="150" /&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>The Image Height Property</h3>
    <p>The <code>height</code> property of an image is used to set the height of an image. This property can have a value in length or in %. While giving value in %, it applies it in respect of the box in which an image is available.</p>
    <h3>Example</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;img style="border:1px solid red; height:100px;" src="../assets/images/demo-logo.png" width="150" /&gt;
      &lt;br /&gt;
      &lt;img style="border:1px solid red; height:50%;" src="../assets/images/demo-logo.png" width="150" /&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>The Image Width Property</h3>
    <p>The <code>width</code> property of an image is used to set the width of an image. This property can have a value in length or in %. While giving value in %, it applies it in respect of the box in which an image is available.</p>
    <h3>Example</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;img style="border:1px solid red; width:150px;" src="../assets/images/demo-logo.png" width="150" /&gt;
      &lt;br /&gt;
      &lt;img style="border:1px solid red; width:100%;" src="../assets/images/demo-logo.png" width="150" /&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>The -moz-opacity Property</h3>
    <p>The -moz-<code>opacity</code> property of an image is used to set the opacity of an image. This property is used to create a transparent image in Mozilla. IE uses filter:alphaopacity = x to create transparent images.</p>
    <p>In Mozilla <code>-moz-opacity: x</code>, <code>x</code> can be a value from 0.0 - 1.0. A lower value makes the element more transparent. The same thing goes for the CSS3 - valid syntax is <code>opacity: x</code>.</p>
    <p>In IE <code>filter: alpha(opacity=x)</code>, <code>x</code> can be a value from 0 - 100. A lower value makes the element more transparent.</p>
    <h3>Example</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;img style="border:1px solid red;-moz-opacity:0.4;filter:alpha(opacity=40);"
src="../assets/images/demo-logo.png" width="150" /&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>





<h2>Practical Examples</h2><p>Creating a foolproof responsive image class and a circular profile avatar modifier:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;style&gt;
/* 1. Make all images responsive by default */
img {
   max-width: 100%;
   height: auto;
   display: block; /* Removes weird bottom spacing */
}

/* 2. Create a circular avatar class */
.avatar-circle {
   width: 150px;
   height: 150px;
   border-radius: 50%;
   object-fit: cover; /* Prevents stretching if image isn't a perfect square */
}
&lt;/style&gt;

&lt;img class="avatar-circle" src="../assets/images/demo-photo.jpg" alt="Avatar"&gt;</code></pre></div>
    <h3>Clipping &amp; Masking</h3>
    <p>The <code>clip-path</code> property allows you to cut an element down to a defined shape, hiding everything outside its boundaries. This gives you powerful control over what part of an image or element is visible, enabling complex geometric designs without an image editor.</p>
    <div class="code-wrap">
      <div class="code-header">
    <div class="code-header-left">
      <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
      <span class="code-lang-tag">CSS</span>
    </div>
    <div class="code-actions">
      <button type="button" class="btn-copy">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
        Copy
      </button>
      <button type="button" class="btn-try">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
        Try It Yourself
      </button>
    </div>
      </div>
      <pre class="code-block"><code>img {
  clip-path: circle(50%);
}</code></pre>
    </div>
    <h2>Common Mistakes</h2><ul class="list"><li><strong>Not setting max-width: 100%</strong> − If an image is 1200px wide but viewed on a 400px phone screen, it will blow out the layout and create horizontal scrolling.</li><li><strong>Forgetting <code>height: auto</code></strong> − If you set <code>max-width: 100%</code> but hardcode a height attribute in the HTML, the image will squish and distort. <code>height: auto</code> preserves the aspect ratio.</li><li><strong>Baking borders/shadows into the image file</strong> − Using Photoshop to add a drop shadow to an image. If the site theme changes, the image is ruined. Always use CSS <code>box-shadow</code> and <code>border</code> on the image element instead.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Global Responsive Rule</strong> − Add <code>img { max-width: 100%; height: auto; }</code> to your base CSS reset to ensure no image ever breaks out of its container.</li><li><strong>Always include the alt attribute</strong> − While technically an HTML requirement, missing alt tags can mess up layout alignment if the image fails to load. More importantly, the <code>alt</code> text is essential for screen readers to describe the image to visually impaired users.</li><li><strong>Use <code>object-fit: cover</code> for fixed dimensions</strong> − If you must force an image into a specific box size (like a square grid), use <code>object-fit: cover</code> to crop it beautifully without distorting the pixels.</li></ul><h2>Interview Questions</h2><p><strong>Q: How do you make an image responsive in CSS?</strong></p><p>A: By applying <code>max-width: 100%;</code> and <code>height: auto;</code>. This allows the image to scale down to fit its container without stretching.</p><p><strong>Q: What does the <code>object-fit</code> property do?</strong></p><p>A: It dictates how an <code>&lt;img&gt;</code> or <code>&lt;video&gt;</code> should be resized to fit its container. <code>cover</code> fills the box by cropping, while <code>contain</code> fits it inside entirely.</p><p><strong>Q: Why is there often a small gap (few pixels) directly below an <code>&lt;img&gt;</code> tag, and how do you remove it?</strong></p><p>A: Images are <code>inline</code> elements by default, so they sit on the text baseline, leaving space for descenders (like the tail of a <code>"y"</code>). Fix it by setting <code>display: block;</code> on the image.</p><p><strong>Q: How do you create a perfect circle from a square image?</strong></p><p>A: Apply <code>border-radius: 50%;</code> to the image.</p><h2>Summary</h2><p>Images are the heaviest visual elements on most websites. Ensuring they behave responsively (never exceeding their container width) and maintain their aspect ratios is critical. Modern properties like <code>object-fit</code> give developers Photoshop-like cropping control directly in the browser.</p>
  </div>`
  },
  {
    id: 'measurement-units-absolute',
    title: 'Measurement Units — Absolute',
    content: `
  <div class="topic-header">
    <span class="topic-badge">Topic 27</span>
    <h1>Measurement Units — Absolute</h1>
  </div>
  <div class="topic-section">
    <p>CSS supports absolute measurement units such as inches, centimeters, points, pixels, etc. These values represent a physical measurement and are generally considered to always be the same size.</p>
    <h2>Absolute Units</h2>
    <table class="css-table">
      <thead>
        <tr>
          <th>Unit</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
<tr>
          <td>cm</td>
          <td>Defines a measurement in centimeters.</td>
          <td>div { margin-bottom: 2cm; }</td>
        </tr>
<tr>
          <td>in</td>
          <td>Defines a measurement in inches.</td>
          <td>p { word-spacing: .15in; }</td>
        </tr>
<tr>
          <td>mm</td>
          <td>Defines a measurement in millimeters.</td>
          <td>p { word-spacing: 15mm; }</td>
        </tr>
<tr>
          <td>pc</td>
          <td>Defines a measurement in picas. A pica is equivalent to 12 points; 6 picas per inch.</td>
          <td>p { font-size: 20pc; }</td>
        </tr>
<tr>
          <td>pt</td>
          <td>Defines a measurement in points. 1 point = 1/72nd of an inch.</td>
          <td>body { font-size: 18pt; }</td>
        </tr>
<tr>
          <td>px</td>
          <td>Defines a measurement in screen pixels.</td>
          <td>p { padding: 25px; }</td>
        </tr>
      </tbody>
    </table>
    <h2>Code Examples</h2>

    <h3>Pixels (px)</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
      <pre class="code-block"><code>p {
   padding: 25px;
   font-size: 18px;
}</code></pre>
    </div>

    <h3>Points (pt)</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
      <pre class="code-block"><code>body {
   font-size: 18pt;
}</code></pre>
    </div>


    <h3>Centimeters (cm)</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
      <pre class="code-block"><code>div {
   margin-bottom: 2cm;
}</code></pre>
    </div>

    <h3>Inches (in)</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
      <pre class="code-block"><code>p {
   word-spacing: 0.15in;
}</code></pre>
    </div>

    <h3>Millimeters (mm)</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
      <pre class="code-block"><code>p {
   word-spacing: 15mm;
}</code></pre>
    </div>

    <h3>Picas (pc)</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
      <pre class="code-block"><code>p {
   font-size: 20pc;
}</code></pre>
    </div>
<h2>Practical Examples</h2><p>Using absolute units for precise print styling or tiny decorative borders where scaling isn't desired:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;style&gt;
@media print {
   /* Print layouts often use pt and in */
   .print-text {
      font-size: 12pt;
      margin: 1in;
   }
}

.hairline-border {
   /* A 1px border is common because we don't want it scaling */
   border-bottom: 1px solid #333;
   padding-bottom: 10px;
   margin-bottom: 15px;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;

&lt;div class="hairline-border"&gt;
  This text has a 1px solid border below it that will never scale up or down.
&lt;/div&gt;

&lt;div class="print-text"&gt;
  If you were to print this page, this text would have a 1 inch margin and a 12pt font size.
&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;
</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Using px for font sizes</strong> − Absolute units like <code>px</code> ignore the user's browser accessibility settings. If a user sets their default browser font to be large, a hardcoded <code>16px</code> font will remain stubbornly small.</li><li><strong>Using physical units on screens</strong> − Using <code>cm</code> or <code>in</code> for screen layouts. Screens have varying pixel densities, so 1 inch on a low-res monitor might appear wildly different in size on a high-res Retina screen.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Limit absolute units to tiny details</strong> − Use <code>px</code> only for borders, subtle box-shadows, or extremely small spacing tweaks where responsiveness is not a factor.</li><li><strong>Use pt and in for Print Styles</strong> − If you are writing a print stylesheet (using <code>@media print</code>), absolute physical units like points and inches are perfectly acceptable because they translate accurately to paper.</li></ul><h2>Interview Questions</h2><p><strong>Q: What is the primary drawback of using <code>px</code> for typography?</strong></p><p>A: Pixels are absolute and do not scale dynamically with the user's browser accessibility preferences, which can make text unreadable for visually impaired users.</p><p><strong>Q: Is 1 pixel (px) in CSS always exactly one hardware pixel on the monitor?</strong></p><p>A: No. A CSS pixel is a logical unit. On high-density screens (like Apple's Retina displays), one CSS pixel might actually map to 4 (2x2) or even 9 (3x3) physical hardware pixels.</p><p><strong>Q: When would you ever use <code>cm</code> or <code>in</code> in CSS?</strong></p><p>A: Almost exclusively for print stylesheets where the physical output dimensions are known and guaranteed.</p><h2>Summary</h2><p>Absolute units represent a fixed physical or logical measurement. While <code>px</code> remains incredibly popular for small UI details, relying on absolute units for layout dimensions and typography makes websites rigid and inaccessible. Modern CSS development favors relative units for layout and typography, reserving absolute units for print media and minor pixel-perfect decorative borders.</p>

  </div>

      `
  },
  {
    id: 'math-functions',
    title: 'CSS Math Functions',
    content: `<div class="topic-header"><span class="topic-badge">Topic 28</span><h1>CSS Math Functions</h1></div><div class="topic-section"><p>CSS math functions allow mathematical expressions to be used as property values.</p><h2>1. calc()</h2><p>The <code>calc()</code> function performs a calculation to be used as the property value. It is incredibly useful because it allows you to mix different units (like percentages and pixels).</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>.sidebar {
   /* 100% of the parent width MINUS 40px */
   width: calc(100% - 40px);
}</code></pre></div><h2>2. min() and max()</h2><p>The <code>min()</code> function sets the smallest (most negative) value from a list of comma-separated expressions as the property value. <code>max()</code> does the opposite.</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>.container {
   /* Width will be 50vw, but will NEVER exceed 500px */
   width: min(50vw, 500px);
}

.header {
   /* Height will be 10vh, but will NEVER be smaller than 100px */
   height: max(10vh, 100px);
}</code></pre></div><h2>3. clamp()</h2><p>The <code>clamp()</code> function is extremely powerful for responsive design. It takes three parameters: a minimum value, a preferred value, and a maximum allowed value.</p><p>It works like this: <code>clamp(MINIMUM, PREFERRED, MAXIMUM);</code></p><p>It will use the preferred value as long as it sits between the minimum and maximum. If it drops below the min, the min is used. If it goes above the max, the max is used.</p><p><strong>Example: Responsive Typography</strong></p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>h1 {
   /* Font size scales with viewport width, but stays between 1rem and 2rem */
   font-size: clamp(1rem, 2vw, 2rem);
}</code></pre></div>

<h2>Practical Examples</h2><p>Using <code>clamp()</code> to create fluid typography that seamlessly scales between a minimum and maximum size, and using <code>calc()</code> to mix incompatible units:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;style&gt;
.fluid-heading {
   /* font-size: clamp(MIN, PREFERRED, MAX); */
   /* Scales smoothly from 1.5rem up to 3rem based on viewport width */
   font-size: clamp(1.5rem, 5vw, 3rem);
}

.sidebar {
   /* Mixes percentages and pixels */
   width: calc(100% - 250px);
}
&lt;/style&gt;

&lt;div style="display:flex;"&gt;
  &lt;div class="sidebar" style="background:#eee; height:100px; padding:10px;"&gt;Sidebar&lt;/div&gt;
  &lt;div style="flex-grow:1; padding:10px;"&gt;
    &lt;h1 class="fluid-heading"&gt;Fluid Heading&lt;/h1&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Forgetting spaces around operators in <code>calc()</code></strong> − Writing <code>calc(100%-20px)</code> will fail silently. The browser requires spaces around the minus and plus operators: <code>calc(100% - 20px)</code>.</li><li><strong>Overusing <code>calc()</code> for simple grids</strong> − Using <code>calc(33.333% - 20px)</code> to build a three-column layout. Modern CSS Grid handles gap math automatically, making <code>calc()</code> unnecessary for grid layouts.</li><li><strong>Putting the wrong unit order in <code>clamp()</code></strong> − Writing <code>clamp(3rem, 5vw, 1rem)</code>. The minimum value must come first, followed by the preferred fluid value, followed by the maximum value.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Use <code>clamp()</code> for Fluid Typography</strong> − Instead of writing 5 different media queries to adjust font sizes for different screens, use a single <code>clamp()</code> rule to make text scale fluidly.</li><li><strong>Use <code>calc()</code> for unit mixing</strong> − <code>calc()</code> shines when you need to subtract a fixed pixel value from a relative percentage or viewport unit (e.g., a 100vh height minus a 60px fixed header).</li></ul><h2>Interview Questions</h2><p><strong>Q: Why are spaces required around the <code>+</code> and <code>-</code> operators in <code>calc()</code>?</strong></p><p>A: Because without spaces, the browser might interpret the <code>-</code> as a negative number rather than a subtraction operator.</p><p><strong>Q: How many arguments does the <code>clamp()</code> function take?</strong></p><p>A: Three. The minimum value, the preferred (fluid) value, and the maximum value.</p><p><strong>Q: What does <code>min(50%, 300px)</code> evaluate to if the parent container is 1000px wide?</strong></p><p>A: It evaluates to 300px. (50% of 1000px is 500px, and the function chooses the smaller of the two values).</p><h2>Summary</h2><p>CSS math functions bring programmatic logic directly into stylesheets. <code>calc()</code> frees you from rigid unit constraints, while <code>min()</code>, <code>max()</code>, and <code>clamp()</code> allow you to build highly responsive, fluid designs without relying on a massive list of brittle media queries.</p>
  </div>`
  },
  {
    id: 'measurement-units-relative',
    title: 'Measurement Units — Relative',
    content: `
  <div class="topic-header">
    <span class="topic-badge">Topic 29</span>
    <h1>Measurement Units — Relative</h1>
  </div>
  <div class="topic-section">
    <p>CSS supports relative measurement units such as percentages, ems, rems, and viewport units. These specify a length relative to another length property, making them ideal for responsive design.</p>
    <h2>Relative Units</h2>
    <table class="css-table">
      <thead>
        <tr>
          <th>Unit</th>
          <th>Description</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
<tr>
          <td>%</td>
          <td>Defines a measurement as a percentage relative to another value, typically an enclosing element.</td>
          <td>p { font-size: 16%; }</td>
        </tr>
<tr>
          <td>em</td>
          <td>A relative measurement equal to the current font size. If font is 12pt, then 1em = 12pt; 2em = 24pt.</td>
          <td>p { letter-spacing: 7em; }</td>
        </tr>
<tr>
          <td>ex</td>
          <td>Defines a measurement relative to a font's x-height — the height of the lowercase letter 'x'.</td>
          <td>p { line-height: 3ex; }</td>
        </tr>
<tr>
          <td>vh</td>
          <td>1% of viewport height.</td>
          <td>h2 { font-size: 3.0vh; }</td>
        </tr>
<tr>
          <td>vw</td>
          <td>1% of viewport width.</td>
          <td>h1 { font-size: 5.9vw; }</td>
        </tr>
<tr>
          <td>vmin</td>
          <td>1vw or 1vh, whichever is smaller.</td>
          <td>p { font-size: 2vmin; }</td>
        </tr>

        <tr>
          <td>rem</td>
          <td>A relative measurement equal to the root element's font size.</td>
          <td>p { margin-bottom: 1.5rem; }</td>
        </tr>

        <tr>
          <td>vmax</td>
          <td>1vw or 1vh, whichever is larger.</td>
          <td>div { padding: 5vmax; }</td>
        </tr>
      </tbody>
    </table>
    <h2>Code Examples</h2>

    <h3>Percentage (%)</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
      <pre class="code-block"><code>p {
   font-size: 16pt;
   line-height: 125%;
}</code></pre>
    </div>


    <h3>em Unit</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
      <pre class="code-block"><code>body {
   font-size: 16px;  /* base font */
}
h1 {
   font-size: 2em;   /* 2 x 16px = 32px */
}
p {
   letter-spacing: 0.5em;
}</code></pre>
    </div>



    <h3>ex Unit</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
      <pre class="code-block"><code>p {
   line-height: 3ex;
}</code></pre>
    </div>

    <h3>rem Unit</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
      <pre class="code-block"><code>html {
   font-size: 16px; /* Root font */
}
p {
   margin-bottom: 1.5rem; /* 1.5 * 16px = 24px */
}</code></pre>
    </div>

    <h3>Viewport Units (vh, vw, vmin, vmax)</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
      <pre class="code-block"><code>h2 {
   font-size: 3.0vh;  /* 3% of viewport height */
}
h1 {
   font-size: 5.9vw;  /* 5.9% of viewport width */
}
p {
   font-size: 2vmin;  /* 2% of smaller dimension */
}
div {
   padding: 5vmax;    /* 5% of larger dimension */
}</code></pre>
    </div>



<h2>Practical Examples</h2><p>A responsive layout pattern using a mix of absolute (px) and relative (rem, %) units for scalability:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;style&gt;
.container {
   /* Layout uses relative percentages */
   width: 90%;
   max-width: 1200px; /* Absolute cap */
   margin: 0 auto;
}

.card {
   /* Spacing and typography use rem for accessibility */
   padding: 2rem;
   border-radius: 8px; /* px is fine for small decorative touches */
}

.card-title {
   font-size: 1.5rem;
   margin-bottom: 0.5em; /* em is relative to this element's font-size */
}
&lt;/style&gt;

&lt;div class="container"&gt;
  &lt;div class="responsive-box"&gt;I scale based on the root font size and container width!&lt;/div&gt;
&lt;/div&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Using px for font sizes</strong> − Hardcoding <code>font-size: 16px;</code> ignores the user's browser accessibility settings. If a visually impaired user scales up their default text size, <code>px</code> values will stubbornly remain small.</li><li><strong>Confusing em and rem</strong> − <code>em</code> compounds wildly when nested (a <code>2em</code> font inside a <code>2em</code> font becomes 4x the size). <code>rem</code> always relates to the root HTML, making it predictable.</li><li><strong>Setting fixed heights in px</strong> − Setting <code>height: 300px;</code> on a container. If text wraps on mobile, the content will overflow the fixed box. Use <code>min-height</code> instead.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Typography &amp; Spacing = REM</strong> − Use <code>rem</code> for all font sizes, margins, and paddings so your site scales perfectly with user accessibility preferences.</li><li><strong>Layout Widths = % or VW</strong> − Use percentages or viewport units for container widths to ensure they shrink fluidly on mobile devices.</li><li><strong>Borders &amp; Small Details = PX</strong> − It is perfectly fine to use <code>px</code> for 1px borders or subtle box-shadows where scaling isn't necessary.</li><li><strong>Accessibility benefits</strong> − Relative units like <code>rem</code> and <code>em</code> scale dynamically with user font-size preferences, unlike fixed <code>px</code> units, making them essential for accessible typography.</li></ul><h2>Interview Questions</h2><p><strong>Q: What is the difference between <code>rem</code> and <code>em</code>?</strong></p><p>A: <code>rem</code> (root em) is relative to the font-size of the root HTML element. <code>em</code> is relative to the font-size of the element's direct parent, which can cause compounding size issues if nested.</p><p><strong>Q: What does <code>100vh</code> mean?</strong></p><p>A: It stands for 100 Viewport Height. It means the element will take up exactly 100% of the visible height of the browser window.</p><p><strong>Q: Why is using <code>px</code> for font sizes considered bad practice?</strong></p><p>A: Because <code>px</code> is an absolute unit. It overrides the user's browser-level font size preferences, creating accessibility barriers for visually impaired users.</p><p><strong>Q: How do you make an element exactly half the width of the screen?</strong></p><p>A: <code>width: 50vw;</code> (50 Viewport Width).</p><h2>Summary</h2><p>Choosing the right CSS measurement unit determines whether your website is rigid and broken, or fluid and accessible. Modern CSS architecture relies heavily on relative units like <code>rem</code> and <code>%</code> to build responsive layouts that respect user accessibility settings, while reserving absolute <code>px</code> for minor decorative borders.</p>
  </div>`
  },
  {
    id: 'pseudo-classes',
    title: 'Pseudo Classes',
    content: `
  <div class="topic-header">
    <span class="topic-badge">Topic 30</span>
    <h1>Pseudo Classes</h1>
  </div>
  <div class="topic-section">
    <p>CSS pseudo-classes are used to add special effects to some selectors. You do not need to use JavaScript or any other script to use these classes. The syntax of pseudo-classes is:</p>

    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS Syntax</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
        </div>
      </div>
      <pre class="code-block"><code>/* Basic pseudo-class syntax */
selector:pseudo-class { property: value; }

/* CSS classes combined with pseudo-classes */
selector.class:pseudo-class { property: value; }</code></pre>
    </div>

    <h2>Common Pseudo-Classes</h2>
    <table class="css-table">
      <thead><tr>
        <th>Pseudo-Class</th>
        <th>Description</th>
      </tr></thead>
      <tbody>
        <tr><td>:link</td><td>Applies to unvisited links.</td></tr>
        <tr><td>:visited</td><td>Applies to links that have been visited.</td></tr>
        <tr><td>:hover</td><td>Applies when the mouse is placed over an element.</td></tr>
        <tr><td>:active</td><td>Applies when the element is being activated (e.g., clicked).</td></tr>
        <tr><td>:focus</td><td>Applies when an element has keyboard focus.</td></tr>
        <tr><td>:first-child</td><td>Applies to an element that is the first child of its parent.</td></tr>
        <tr><td>:lang</td><td>Applies based on the language setting of a document.</td></tr>
      </tbody>
    </table>

    <h3><code>hover</code> Pseudo-Class</h3>
    <p>The most popular use of pseudo-classes is to change the color of links when you hover over them.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style type="text/css"&gt;
         a:link    { color: #000000; }  /* Unvisited link */
         a:visited { color: #006600; }  /* Visited link */
         a:hover   { color: #FFCC00; }  /* Mouse over link */
         a:active  { color: #FF00CC; }  /* Selected link */
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;a href="#"&gt;Bring Mouse Here&lt;/a&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3><code>focus</code> Pseudo-Class</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style type="text/css"&gt;
         a:focus { color: #0000FF; }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;a href="#"&gt;Click This Link&lt;/a&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3><code>first-child</code> Pseudo-Class</h3>
    <p>The <code>:first-child</code> pseudo-class matches a specified element that is the first child of another element and adds special style to it.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style type="text/css"&gt;
         div &gt; p:first-child {
            text-indent: 25px;
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;div&gt;
         &lt;p&gt;First paragraph in div. This will be indented.&lt;/p&gt;
         &lt;p&gt;Second paragraph in div. This will NOT be indented.&lt;/p&gt;
      &lt;/div&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3><code>lang</code> Pseudo-Class</h3>
    <p>The <code>:lang</code> pseudo-class allows constructing selectors based on the language setting of specific tags. This is useful in documents that must appeal to multiple languages.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style type="text/css"&gt;
         /* Quote styles for different languages */
         :lang(en) { quotes: '"' '"' <code>"'"</code> <code>"'"</code>; }
         :lang(fr) { quotes: <code>"&lt;&lt;"</code> <code>"&gt;&gt;"</code> <code>"&lt;"</code> <code>"&gt;"</code>; }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;p&gt;..&lt;q lang="fr"&gt;A French quote&lt;/q&gt;..&lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>


<h2>Practical Examples</h2><p>Enhancing a list with zebra striping and providing accessible focus states for keyboard users:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;style&gt;
/* Zebra Striping using structural pseudo-classes */
li:nth-child(even) {
   background-color: #f3f4f6;
}

/* Highlighting the very first item */
li:first-child {
   font-weight: bold;
   border-top: 2px solid blue;
}

/* Modern Accessibility: Show outline only for keyboard focus, not mouse clicks */
button:focus-visible {
   outline: 3px solid #3b82f6;
}
&lt;/style&gt;

&lt;ul&gt;
  &lt;li&gt;Item 1&lt;/li&gt;
  &lt;li&gt;Item 2&lt;/li&gt;
  &lt;li&gt;Item 3&lt;/li&gt;
&lt;/ul&gt;
&lt;button&gt;Click to focus (or use Tab)&lt;/button&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Removing focus outlines blindly</strong> − Using <code>*:focus { outline: none; }</code>. This makes the website completely unusable for users navigating with the Tab key. Never remove a focus ring without replacing it with a custom visible style.</li><li><strong>Using hover effects on mobile</strong> − Mobile devices don't have a hover state. Tap interactions often trigger <code>:hover</code> and it gets <code>"stuck"</code> until the user taps elsewhere, creating a confusing UI.</li><li><strong>Misunderstanding nth-child vs nth-of-type</strong> − <code>:nth-child(2)</code> selects the 2nd child of a parent, regardless of what tag it is. <code>:nth-of-type(2)</code> selects the 2nd child that matches a specific tag type.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Use <code>:focus-visible</code></strong> − This modern pseudo-class solves the <code>"ugly focus ring on click"</code> problem. It only shows the outline when the browser detects keyboard navigation, hiding it for mouse users.</li><li><strong>Pair <code>:hover</code> with <code>:focus</code></strong> − Whenever you add a hover effect to a button or link, apply the same effect to the focus state (e.g., <code>a:hover, a:focus</code>) to ensure keyboard users get the same visual feedback.</li><li><strong>Pair Hover and Focus</strong> − Always provide a <code>:focus</code> style when you provide a <code>:hover</code> style for accessibility. The <code>:focus</code> state applies when a form element (input, textarea, button, link) is actively selected or tabbed into. Removing the default focus outline without providing a visible replacement makes it impossible for keyboard-only users to see where they are on the page. For example:<br><pre><code>input:focus {\n  outline: 2px solid #1a73e8;\n}</code></pre></li></ul><h2>Interview Questions</h2><p><strong>Q: What is the difference between a pseudo-class and a pseudo-element?</strong></p><p>A: A pseudo-class (<code>:hover</code>) targets the STATE of an existing element. A pseudo-element (<code>::before</code>) actually injects new virtual content into the DOM.</p><p><strong>Q: How does <code>:nth-child(2n)</code> work?</strong></p><p>A: The <code>n</code> acts as a counter starting from 0. It selects every 2nd element (2*0=0, 2*1=2, 2*2=4, etc.). It is identical to <code>:nth-child(even)</code>.</p><p><strong>Q: What does the <code>:not()</code> pseudo-class do?</strong></p><p>A: It is an exclusion selector. For example, <code>div:not(.hidden)</code> selects all divs EXCEPT those that have the class <code>hidden</code>.</p><h2>Summary</h2><p>Pseudo-classes allow you to style elements based on user interaction (like hovering or focusing) or their structural position in the DOM (like the first or last child). They are essential for creating dynamic, interactive, and accessible user interfaces without writing complex JavaScript event listeners.</p>
  </div>`
  },
  {
    id: 'pseudo-elements',
    title: 'Pseudo Elements',
    content: `
  <div class="topic-header">
    <span class="topic-badge">Topic 31</span>
    <h1>Pseudo Elements</h1>
  </div>
  <div class="topic-section">
    <p>CSS pseudo-elements are used to add special effects to some selectors. You do not need to use JavaScript or any other script to use those effects. A simple syntax of pseudo-element is as follows:</p>
    <div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS Syntax</span></div><div class="code-actions"><button type="button" class="btn-copy">Copy</button></div></div><pre class="code-block"><code>selector:pseudo-element {property: value}</code></pre></div>
    <p>CSS classes can also be combined with pseudo-elements:</p>
    <div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS Syntax</span></div><div class="code-actions"><button type="button" class="btn-copy">Copy</button></div></div><pre class="code-block"><code>selector.class:pseudo-element {property: value}</code></pre></div>
    <p>The most commonly used pseudo-elements are as follows:</p>
    <table class="css-table">
      <thead><tr>
        <th>Pseudo-Element</th>
        <th>Description</th>
      </tr></thead>
      <tbody>
        <tr><td>:first-line</td><td>Adds special styles to the first line of the text in a selector.</td></tr>
        <tr><td>:first-letter</td><td>Adds special style to the first letter of the text in a selector.</td></tr>
        <tr><td>:before</td><td>Inserts some content before an element.</td></tr>
        <tr><td>:after</td><td>Inserts some content after an element.</td></tr>
      </tbody>
    </table>
    <h3><code>first-line</code> pseudo-element</h3>
    <p>The following example demonstrates how to use the <code>::first-line</code> element to add special effects to the first line of elements in the document.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style type="text/css"&gt;
         p:first-line { text-decoration: underline; }
         p.noline:first-line { text-decoration: none; }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;p class="normal"&gt;This line would not have any underline because this belongs to normal class.&lt;/p&gt;
      &lt;p&gt;The first line of this paragraph will be underlined as defined in the CSS rule
above. Rest of the lines in this paragraph will remain normal. This example shows how to
use :first-line pseudo element to give effect to the first line of any HTML element.&lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3><code>first-letter</code> pseudo-element</h3>
    <p>The following example demonstrates how to use the <code>::first-letter</code> element to add special effects to the first letter of elements in the document.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style type="text/css"&gt;
         p:first-letter { font-size: 5em; }
         p.normal:first-letter { font-size: 10px; }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;p class="normal"&gt;First character of this paragraph will be normal and will have font size 10px;&lt;/p&gt;
      &lt;p&gt;The first character of this paragraph will be 5em big  as  defined in the CSS
rule above. Rest of the characters in this paragraph will remain normal. This example
shows how to use :first-letter pseudo element to give effect to the first characters  of
any HTML element.&lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3><code>before</code> pseudo-element</h3>
    <p>The following example demonstrates how to use the <code>::before</code> element to add some content before any element.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style type="text/css"&gt;
         p::before {
            content: "🔥 ";
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;p&gt;This line will be preceded by a fire emoji.&lt;/p&gt;
      &lt;p&gt;This line will also be preceded by a fire emoji.&lt;/p&gt;
      &lt;p&gt;Pseudo-elements make adding icons easy!&lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3><code>after</code> pseudo-element</h3>
    <p>The following example demonstrates how to use the <code>::after</code> element to add some content after any element.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style type="text/css"&gt;
         .new-item::after {
            content: " New!";
            color: white;
            background-color: red;
            font-size: 10px;
            padding: 2px 5px;
            margin-left: 5px;
            border-radius: 3px;
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;p&gt;Regular Item&lt;/p&gt;
      &lt;p class="new-item"&gt;Special Limited Item&lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>



<h2>Practical Examples</h2><p>Injecting decorative quotation marks around a blockquote purely via CSS, keeping the HTML semantic and clean:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;style&gt;
blockquote {
   position: relative;
   padding: 20px 40px;
}

blockquote::before {
   content: <code>"“"</code>; /* Injecting the opening quote */
   position: absolute;
   left: 10px;
   top: -10px;
   font-size: 4rem;
   color: #ccc;
}

blockquote::after {
   content: <code>"”"</code>; /* Injecting the closing quote */
   /* Position logic goes here */
}
&lt;/style&gt;

&lt;blockquote&gt;CSS is awesome!&lt;/blockquote&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Forgetting the <code>content</code> property</strong> − <code>::before</code> and <code>::after</code> will not render at all unless you include the <code>content</code> property. Even if it is empty, you must declare <code>content: "";</code>.</li><li><strong>Using them for critical content</strong> − Injecting important text or images via pseudo-elements is bad for SEO and screen readers. They should be used strictly for decorative flourishes.</li><li><strong>Using single colons (<code>:before</code>)</strong> − While older browsers supported single colons, the modern CSS3 standard requires double colons (<code>::</code>) to clearly distinguish pseudo-elements from pseudo-classes.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Use for purely visual elements</strong> − Use pseudo-elements for custom bullet points, custom checkboxes, quotation marks, or gradient overlays. This keeps your HTML DOM lean and semantic.</li><li><strong>Display block</strong> − By default, <code>::before</code> and <code>::after</code> render as inline elements. If you want to give them width/height, you must set them to <code>display: block</code> or <code>inline-block</code> (unless they are absolutely positioned).</li><li><strong>Keep essential content in HTML</strong> − Content inserted via <code>::before</code> and <code>::after</code> with the <code>content:</code> property is often invisible to screen readers. It should only be used for decorative elements, not essential information.</li></ul><h2>Interview Questions</h2><p><strong>Q: Why is the <code>content</code> property mandatory for <code>::before</code> and <code>::after</code>?</strong></p><p>A: Because pseudo-elements are virtually injected into the DOM. Without the <code>content</code> property, the browser assumes there is nothing to inject, so the element is never generated.</p><p><strong>Q: Can you interact with pseudo-elements using JavaScript?</strong></p><p>A: Not directly. Because they are not part of the actual HTML DOM (they only exist in the CSS rendering tree), you cannot attach event listeners (like clicks) directly to a pseudo-element.</p><p><strong>Q: What does the <code>::selection</code> pseudo-element do?</strong></p><p>A: It allows you to style the background color and text color of the text that a user highlights/selects with their mouse.</p><h2>Summary</h2><p>Pseudo-elements act like virtual HTML tags created entirely within CSS. They allow you to add decorative content, icons, and complex stylistic overlays to elements without bloating your actual HTML markup. Always remember the double colon syntax and the mandatory <code>content</code> property.</p>
  </div>`
  },
  {
    id: 'media-types',
    title: 'Media Types',
    content: `
  <div class="topic-header">
    <span class="topic-badge">Topic 32</span>
    <h1>Media Types</h1>
  </div>
  <div class="topic-section">
    <p>One of the most important features of style sheets is that they specify how a document is to be presented on different media: on the screen, on paper, with a speech synthesizer, with a braille device, etc.</p>
    <p>We have currently two ways to specify media dependencies for style sheets −</p>
    <ul class="list">
      <li>Specify the target medium from a style sheet with the <code>@media</code> or <code>@import</code> at-rules.</li>
      <li>Specify the target medium within the document language.</li>
    </ul>
    <h2>The @media rule</h2>
    <p>An @media rule specifies the target media types separated by commas, of a set of rules. Given below is an example −</p>

    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style type="text/css"&gt;
         /* Default screen style */
         @media screen {
            body { font-family: Arial; font-size: 16px; background-color: #e0f7fa; }
            .box { padding: 20px; border: 2px solid #00acc1; border-radius: 8px; }
         }

         /* Print style */
         @media print {
            body { font-family: serif; font-size: 12pt; background-color: white; color: black; }
            .box { padding: 10px; border: 1px solid black; }
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;div class="box"&gt;
         &lt;h2&gt;The @media Rule&lt;/h2&gt;
         &lt;p&gt;This box has a light blue background on the screen. If you print this page (Ctrl+P), the background will disappear and the text will resize to save ink!&lt;/p&gt;
      &lt;/div&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>
    <h3>The Document Language</h3>
    <p>In HTML 4.0, the media attribute on the LINK element specifies the target media of an external style sheet − Following is an example −</p>

    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;title&gt;Link Media Attribute&lt;/title&gt;
      &lt;style&gt;
         body { font-family: Arial; background-color: #f8fafc; color: #334155; padding: 20px; }
      &lt;/style&gt;
      &lt;!-- The browser will ONLY load this CSS file when printing the page --&gt;
      &lt;link rel="stylesheet" type="text/css" media="print" href="print-styles.css"&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;h2&gt;Media Attribute Example&lt;/h2&gt;
      &lt;p&gt;This is a normal paragraph visible on screens.&lt;/p&gt;
      &lt;p&gt;The &lt;code&gt;media="print"&lt;/code&gt; attribute on the &lt;code&gt;&amp;lt;link&amp;gt;&lt;/code&gt; tag tells the browser to ONLY apply that specific stylesheet when the document is being printed.&lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>
    <h3>Recognized Media Types</h3>
    <p>The names chosen for CSS media types reflect target devices for which the relevant properties make sense. They give a sense of what device the media type is meant to refer to. Given below is a list of various media types −</p>
    <table class="css-table">
      <thead>
        <tr>
          <th>Value</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>all</td>
          <td>Suitable for all devices.</td>
        </tr>
        <tr>
          <td>aural</td>
          <td>Intended for speech synthesizers.</td>
        </tr>
        <tr>
          <td>braille</td>
          <td>Intended for braille tactile feedback devices.</td>
        </tr>
        <tr>
          <td>embossed</td>
          <td>Intended for paged braille printers.</td>
        </tr>
        <tr>
          <td>handheld</td>
          <td>Intended for handheld devices typically small screen, monochrome, limited bandwidth.</td>
        </tr>
        <tr>
          <td>print</td>
          <td>Intended for paged, opaque material and for documents viewed on screen in print preview mode. Please consult the section on paged media.</td>
        </tr>
        <tr>
          <td>projection</td>
          <td>Intended for projected presentations, for example projectors or print to transparencies. Please consult the section on paged media.</td>
        </tr>
        <tr>
          <td>screen</td>
          <td>Intended primarily for color computer screens.</td>
        </tr>
        <tr>
          <td>tty</td>
          <td>Intended for media using a fixed-pitch character grid, such as teletypes, terminals, or portable devices with limited display capabilities.</td>
        </tr>
        <tr>
          <td>tv</td>
          <td>Intended for television-type devices.</td>
        </tr>
      </tbody>
    </table>
    <p>NOTE − Media type names are case-insensitive.</p>
    <h2>CSS PAGED MEDIA - @PAGE RULE</h2>
    <p>Paged media differ from continuous media in that the content of the document is split into one or more discrete pages. Paged media includes paper, transparencies, pages that are displayed on computer screens, etc.</p>
    <p>The CSS2 standard introduces some basic pagination control features that let authors help the browser figure out how to best print their documents.</p>
    <p>The CSS2 page model specifies how a document is formatted within a rectangular area -- the page box -- that has a finite width and height. These features fall into two groups −</p>
    <ul class="list">
      <li>CSS2 features that define a particular page layout.</li>
      <li>CSS2 features that control the pagination of a document.</li>
    </ul>
    <h3>Defining Pages : the @page rule</h3>
    <p>The CSS2 defines a <code>"page box"</code>, a box of finite dimensions in which content is rendered. The page box is a rectangular region that contains two areas −</p>
    <ul class="list">
      <li><strong>The page area</strong> − The page area includes the boxes laid out on that page. The edges of the page area act as the initial containing block for layout that occurs between page breaks.</li>
      <li><strong>The margin area</strong> − It surrounds the page area.</li>
    </ul>
    <p>You can specify the dimensions, orientation, margins, etc., of a page box within an @page rule.</p>
    <p>The dimensions of the page box are set with the <code>size</code> property. The dimensions of the page area are the dimensions of the page box minus the margin area.</p>
    <p>For example, the following <code>@page</code> rule sets the page box size to 8.5 × 11 inches and creates <code>2cm</code> margin on all sides between the page box edge and the page area −</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>@page { size:8.5in 11in; margin: 2cm }</code></pre>
    </div>

    <p>You can use the <code>margin</code>, <code>margin-top</code>, <code>margin-bottom</code>, <code>margin-left</code>, and <code>margin-right</code> properties within the <code>@page</code> rule to set margins for your page.</p>
    <p>Finally, the <code>marks</code> property is used within the <code>@page</code> rule to create crop and registration marks outside the page box on the target sheet. By default, no marks are printed. You may use one or both of the crop and cross keywords to create crop marks and registration marks, respectively, on the target print page.</p>
    <h3>Setting Page Size</h3>
    <p>The <code>size</code> property specifies the size and orientation of a page box. There are four values which can be used for page size −</p>
    <table class="css-table">
      <thead>
        <tr>
          <th>Value</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>auto</td>
          <td>The page box will be set to the size and orientation of the target sheet.</td>
        </tr>
        <tr>
          <td>landscape</td>
          <td>Overrides the target's orientation. The page box is the same size as the target, and the longer sides are horizontal.</td>
        </tr>
        <tr>
          <td>portrait</td>
          <td>Overrides the target's orientation. The page box is the same size as the target, and the shorter sides are horizontal.</td>
        </tr>
        <tr>
          <td>length</td>
          <td>Length values for the 'size' property create an absolute page box. If only one length value is specified, it sets both the width and height of the page box. Percentage values are not allowed for the 'size' property.</td>
        </tr>
      </tbody>
    </table>
    <p>In the following example, the outer edges of the page box will align with the target. The percentage value on the <code>margin</code> property is relative to the target size so if the target sheet dimensions are 21.0cm × 29.7cm i. e. , A4, the margins are 2.10cm and 2.97cm.</p>

    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>@page {
   size: auto;   /* auto is the initial value */
   margin: 10%;
}</code></pre>
    </div>
    <p>The following example sets the width of the page box to be 8.5 inches and the height to be 11 inches. The page box in this example requires a target sheet size of 8.5" × 11" or larger.</p>

    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>@page {
   size: 8.5in 11in;  /* width height */
}</code></pre>
    </div>
    <p>Once you create a named page layout, you can use it in your document by adding the <code>page</code> property to a style that is later applied to an element in your document. For example, this style renders all the tables in your document on landscape pages −</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>@page { size : portrait }
@page rotated { size : landscape }
table { page : rotated }</code></pre>
    </div>

    <p>Due to the above rule, while printing, if the browser encounters a <code>&lt;table&gt;</code> element in your document and the current page layout is the default portrait layout, it starts a new page and prints the table on a landscape page.</p>
    <h3>Left, Right, and First pages</h3>
    <p>When printing double-sided documents, the page boxes on left and right pages should be different. It can be expressed through two CSS pseudo-classes as follows −</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>@page :left {
   margin-left: 4cm;
   margin-right: 3cm;
}
@page :right {
   margin-left: 3cm;
   margin-right: 4cm;
}</code></pre>
    </div>
    <p>You can specify the style for the first page of a document with the :first pseudo-class −</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>@page { margin: 2cm } /* All margins set to 2cm */
@page :first {
   margin-top: 10cm    /* Top margin on first page 10cm */
}</code></pre>
    </div>
    <h3>Controlling Pagination</h3>
    <p>Unless you specify otherwise, page breaks occur only when the page format changes or when the content overflows the current page box. To otherwise force or suppress page breaks, use the <code>page-break-before</code>, <code>page-break-after</code>, and <code>page-break-inside</code> properties.</p>
    <p>Both the <code>page-break-before</code> and <code>page-break-after</code> accept the <code>auto</code>, <code>always</code>, <code>avoid</code>, <code>left</code>, and <code>right</code> keywords.</p>
    <p>The keyword <code>auto</code> is the default, it lets the browser generate page breaks as needed. The keyword <code>always</code> forces a page break before or after the element, while <code>avoid</code> suppresses a page break immediately before or after the element. The <code>left</code> and <code>right</code> keywords force one or two page breaks, so that the element is rendered on a left-hand or right-hand page.</p>
    <p>Using pagination properties is quite straightforward. Suppose your document has level-1 headers start new chapters with level-2 headers to denote sections. You'd like each chapter to start on a new, right-hand page, but you don't want section headers to be split across a page break from the subsequent content. You can achieve this using following rule −</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>h1 { page-break-before : right }
h2 { page-break-after : avoid }</code></pre>
    </div>

    <p>Use only the <code>auto</code> and <code>avoid</code> values with the <code>page-break-inside</code> property. If you prefer that your tables not be broken across pages if possible, you would write the rule −</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>table { page-break-inside : avoid }</code></pre>
    </div>

    <h3>Controlling Widows and Orphans</h3>
    <p>In typographic lingo, orphans are those lines of a paragraph stranded at the bottom of a page due to a page break, while widows are those lines remaining at the top of a page following a page break. Generally, printed pages do not look attractive with single lines of text stranded at the top or bottom. Most printers try to leave at least two or more lines of text at the top or bottom of each page.</p>
    <p>The <code>orphans</code> property specifies the minimum number of lines of a paragraph that must be left at the bottom of a page.</p>
    <p>The <code>widows</code> property specifies the minimum number of lines of a paragraph that must be left at the top of a page.</p>
    <p>Here is the example to create 4 lines at the bottom and 3 lines at the top of each page −</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>@page{orphans:4; widows:2;}</code></pre>
    </div>



<h2>Practical Examples</h2><p>A classic print media query ensuring that when a user prints the page, navigation bars are hidden and text is optimized for paper:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;style&gt;
/* Standard screen styles */
body {
   font-family: sans-serif;
   color: #333;
}

/* Print-specific styles */
@media print {
   .navbar, .footer, .ad-banner {
      display: none; /* Hide UI elements to save ink */
   }

   body {
      font-family: serif; /* Serifs read better on paper */
      color: #000;
      background: transparent;
   }
}
&lt;/style&gt;

&lt;div class="navbar"&gt;Nav&lt;/div&gt;
&lt;div class="ad-banner"&gt;Ad&lt;/div&gt;
&lt;p&gt;Press Ctrl+P (or Cmd+P) to see how this page prints (nav and ads will hide).&lt;/p&gt;
&lt;div class="footer"&gt;Footer&lt;/div&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Targeting specific phone models</strong> − Writing media queries for exactly 375px or 414px (iPhone sizes). New devices are released constantly; your layout will break. Always set breakpoints where the layout naturally breaks, not based on device specs.</li><li><strong>Forgetting the print stylesheet</strong> − Assuming your webpage looks fine when printed. Users printing articles often get 10 pages of broken navigation menus and black backgrounds wasting their ink.</li><li><strong>Max-width chaos</strong> − Building a desktop site first and using dozens of <code>max-width</code> queries to squeeze it down to mobile. This results in heavy, convoluted CSS.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Mobile-First Design (min-width)</strong> − Write the base CSS for mobile phones first. Then, use <code>@media (min-width: 768px)</code> to ADD complexity as the screen gets larger. This keeps CSS leaner and faster for mobile users.</li><li><strong>Always provide a basic print media query</strong> − Hiding the navigation, footers, and forcing text to black is a 5-minute task that vastly improves user experience for printed documents (like recipes or articles).</li><li><strong>Minimize unused media types</strong> − Loading unnecessary print or speech stylesheets on every page adds network overhead. Only include them where they are genuinely needed.</li></ul><h2>Interview Questions</h2><p><strong>Q: What is the difference between <code>@media screen</code> and <code>@media print</code>?</strong></p><p>A: <code>screen</code> applies styles only when viewed on digital displays (monitors, phones). <code>print</code> applies styles only when the user is printing the document to physical paper or saving it as a PDF.</p><p><strong>Q: What does the <code>"Mobile-First"</code> approach mean in relation to media queries?</strong></p><p>A: It means writing the default CSS rules for the smallest screens first, and then using <code>min-width</code> media queries to layer on more complex layout styles as the viewport becomes wider.</p><p><strong>Q: How do you target a device in landscape mode?</strong></p><p>A: Using the orientation feature: <code>@media (orientation: landscape) { ... }</code>.</p><h2>Summary</h2><p>Media types and media queries are the engines of Responsive Web Design. They allow a single HTML document to adapt beautifully to a smartphone, a massive desktop monitor, or a piece of printed paper. Adopting a mobile-first, <code>min-width</code> approach is the industry standard for scalable, clean CSS architecture.</p>
  </div>`
  },
  {
    id: 'responsive',
    title: 'Responsive',
    content: `
  <div class="topic-header">
    <span class="topic-badge">Topic 33</span>
    <h1>Responsive</h1>
  </div>
  <div class="topic-section">
    <p>Responsive web design provides an optimal experience, easy reading and easy navigation with a minimum of resizing on different devices such as desktops, mobiles and tablets.</p>
    <h3>Responsive structure</h3>
    <p>Below image shows the responsive structure of web pages.</p>
    <h3>Flexible Grid demo</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         body {
            font: 600 14px/24px <code>"Open Sans"</code>, <code>"HelveticaNeue-Light"</code>, "Helvetica Neue
Light", <code>"Helvetica Neue"</code>, Helvetica, Arial, <code>"Lucida Grande"</code>, Sans-Serif;
         }
         h1 {
            color: #9799a7;
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 6px;
         }
         .container:before, .container:after {
            content: "";
            display: table;
         }
         .container:after {
            clear: both;
         }
         .container {
            background: #eaeaed;
            margin-bottom: 24px;
            *zoom: 1;
         }
         .container-75 {
            width: 75%;
         }
         .container-50 {
            margin-bottom: 0;
            width: 50%;
         }
         .container, section, aside {
            border-radius: 6px;
         }
         section, aside {
            background: #2db34a;
            color: #fff;
            margin: 1.858736059%;
            padding: 20px 0;
            text-align: center;
         }
         section {
            float: left;
            width: 63.197026%;
         }
         aside {
            float: right;
            width: 29.3680297%;
         }
&lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;h1&gt;100% Wide Container&lt;/h1&gt;
&lt;div class="div2"&gt;
&lt;section&gt;Section&lt;/section&gt;
&lt;aside&gt;Aside&lt;/aside&gt;
&lt;/div&gt;
&lt;h1&gt;75% Wide Container&lt;/h1&gt;
&lt;div class="container container-75"&gt;
&lt;section&gt;Section&lt;/section&gt;
&lt;aside&gt;Aside&lt;/aside&gt;
&lt;/div&gt;
&lt;h1&gt;50% Wide Container&lt;/h1&gt;
&lt;div class="container container-50"&gt;
&lt;section&gt;Section&lt;/section&gt;
&lt;aside&gt;Aside&lt;/aside&gt;
&lt;/div&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>Media queries</h3>
    <p>Media queries is for different style rules for different size devices such as mobiles, desktops, etc.,</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         body {
            background-color: lightpink;
         }
         @media screen and (max-width: 420px) {
            body {
               background-color: lightblue;
            }
}
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
         &lt;p&gt;If screen size is less than 420px, then it will show lightblue color, or else it will show light pink color&lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>Container Queries</h3>
    <p>While <code>@media</code> queries react to the overall viewport size, container queries (<code>@container</code>) let a component change its styles based on the size of its own parent container. This is highly useful when the same component (like a card) needs different layouts depending on where it's placed on the page, regardless of screen size. Note that this is a newer feature, so checking current browser support is worthwhile before relying on it in production.</p>
    <div class="code-wrap">
      <div class="code-header">
    <div class="code-header-left">
      <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
      <span class="code-lang-tag">CSS</span>
    </div>
    <div class="code-actions">
      <button type="button" class="btn-copy">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
        Copy
      </button>
      <button type="button" class="btn-try">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
        Try It Yourself
      </button>
    </div>
      </div>
      <pre class="code-block"><code>.card-wrapper {
  container-type: inline-size;
}
@container (min-width: 400px) {
  .card {
    display: flex;
  }
}</code></pre>
    </div>
    <h3>Bootstrap responsive web design</h3>
    <p>Bootstrap is the most popular web design framework based on HTML, CSS and JavaScript and it helps you to design web pages in a responsive way for all devices.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;meta charset="utf-8"&gt;
      &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
      &lt;link rel="stylesheet"
href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"&gt;
      &lt;style&gt;
         body{
            color:green;
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
         &lt;div class="container"&gt;
      &lt;div class="jumbotron"&gt;
         &lt;h1&gt;Hello World&lt;/h1&gt;
         &lt;p&gt;This is an Hello World used to demonstrate CSS styling. It provides enough content to see how text wrapping, spacing, and other typographic properties affect the layout of your web page.&lt;/p&gt;
      &lt;/div&gt;

      &lt;div class="row"&gt;
         &lt;div class="col-sm-4"&gt;
            &lt;h2&gt;Android&lt;/h2&gt;
            &lt;p&gt;Android is an open source and Linux-based operating system for mobile devices such as smartphones and tablet computers. Android was developed by the Open Handset Alliance, led by Google, and other companies.&lt;/p&gt;
         &lt;/div&gt;

         &lt;div class="col-sm-4"&gt;
            &lt;h2&gt;CSS&lt;/h2&gt;
            &lt;p&gt;Cascading Style Sheets, fondly referred to as CSS, is a simple design language intended to simplify the process of making web pages presentable.&lt;/p&gt;
         &lt;/div&gt;

         &lt;div class="col-sm-4"&gt;
            &lt;h2&gt;Java&lt;/h2&gt;
            &lt;p&gt;Java is a high-level programming language originally developed by Sun Microsystems and released in 1995. Java runs on a variety of platforms, such as Windows, Mac OS, and the various versions of UNIX. This tutorial gives a complete understanding of Java.&lt;/p&gt;
         &lt;/div&gt;
      &lt;/div&gt;
   &lt;/div&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>





<h2>Practical Examples</h2><p>The standard <code>"Mobile-First"</code> responsive boilerplate: ensuring the viewport is configured correctly in HTML, and using a <code>min-width</code> media query in CSS to scale up to desktop:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;!-- MUST be placed in the HTML &lt;head&gt; for responsiveness to work --&gt;
&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;

&lt;style&gt;
/* --- CSS --- */
/* 1. Mobile-First Base Layout (Applies to ALL screens) */
.grid-container {
   display: grid;
   grid-template-columns: 1fr; /* Single column on mobile */
   gap: 20px;
}

/* 2. Scale up for Tablets and Desktop */
@media (min-width: 768px) {
   .grid-container {
      grid-template-columns: repeat(3, 1fr); /* 3 columns on larger screens */
   }
}
&lt;/style&gt;

&lt;div class="grid-container"&gt;
  &lt;div style="background:#eee; padding:20px; border:1px solid #ccc;"&gt;1&lt;/div&gt;
  &lt;div style="background:#eee; padding:20px; border:1px solid #ccc;"&gt;2&lt;/div&gt;
  &lt;div style="background:#eee; padding:20px; border:1px solid #ccc;"&gt;3&lt;/div&gt;
&lt;/div&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Forgetting the HTML Viewport Meta Tag</strong> − Without <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code> in your HTML, mobile browsers will assume your site is a desktop site and render it completely zoomed out, rendering all CSS media queries useless.</li><li><strong>Designing Desktop-First (using <code>max-width</code>)</strong> − Writing complex desktop CSS first, then writing dozens of <code>max-width</code> queries to try and squish it down to mobile. This results in heavy, bloated code. Mobile browsers have to download and override complex desktop styles they don't need.</li><li><strong>Targeting specific device resolutions</strong> − Creating breakpoints exactly at 375px (iPhone) or 768px (iPad). Device sizes change constantly. Breakpoints should be determined by when the content itself starts looking bad, not by specific phone models.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Embrace Mobile-First (<code>min-width</code>)</strong> − Start by writing CSS for the smallest screen possible. Then, slowly drag the browser wider. When the layout looks stretched or broken, add a <code>min-width</code> media query to add complexity (like changing a 1-column layout to a 3-column layout).</li><li><strong>Use Fluid Units</strong> − A truly responsive site doesn't just snap at specific breakpoints. Use relative units (<code>%</code>, <code>vw</code>, <code>rem</code>, <code>clamp()</code>) so the layout stretches and breathes smoothly between the media query breakpoints.</li><li><strong>Use responsive images universally</strong> − Add <code>img { max-width: 100%; height: auto; }</code> to your base CSS so images never break their containers on small screens.</li></ul><h2>Interview Questions</h2><p><strong>Q: What does the viewport meta tag actually do?</strong></p><p>A: It instructs the mobile browser to set the width of the page to match the screen's physical device width, preventing the browser from artificially zooming out to display a desktop-sized canvas.</p><p><strong>Q: What is the difference between Adaptive Design and Responsive Design?</strong></p><p>A: Adaptive design serves entirely different fixed layouts based on the device detected. Responsive design uses a single flexible HTML layout that smoothly fluidly adapts to any screen size using CSS media queries and relative units.</p><p><strong>Q: Why is <code>"Mobile-First"</code> CSS architecture considered better for performance?</strong></p><p>A: Because mobile devices (which often have slower CPUs and internet connections) only have to parse the base CSS. They don't have to process complex desktop grid calculations only to immediately override them with media queries.</p><h2>Summary</h2><p>Responsive Web Design is no longer an optional feature; it is the fundamental baseline of modern web development. By combining the HTML viewport meta tag with fluid CSS units and a strict Mobile-First (<code>min-width</code>) media query strategy, you guarantee that your website provides a flawless user experience on a smartwatch, a smartphone, or a 4K TV.</p>
  </div>`
  },
  {
    id: 'flexbox',
    title: 'CSS Flexbox',
    content: `<div class="topic-header"><span class="topic-badge">Topic 34</span><h1>CSS Flexbox</h1></div><div class="topic-section"><h2>Introduction to Flexbox</h2><p>The Flexible Box Layout Module (Flexbox) makes it easier to design flexible responsive layout structure without using float or positioning.</p><p>Before Flexbox, layouts were built using block, inline, table, or float. Flexbox solves the problem of aligning items in 1-Dimensional layouts (either a row or a column), especially when the size of the items is unknown or dynamic.</p><p>You initiate a flex formatting context by setting <code>display: flex</code> (block-level) or <code>display: inline-flex</code> (inline-level).</p><p><strong>Main Axis vs Cross Axis:</strong> Flexbox relies on two axes. If <code>flex-direction</code> is <code>row</code>, the Main Axis runs left-to-right, and the Cross Axis runs top-to-bottom. Alignment properties apply relative to these axes.</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>.container {
   display: flex;
}</code></pre></div><h2>Flex Container Properties</h2>
<p>The following properties apply to the flex container (the parent element that holds the flex items).</p>
<h3><code>flex-direction</code></h3><p>Defines the direction flex items are placed in the flex container (the Main Axis).</p><table class="css-table">
  <thead>
    <tr>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>row</code> (default)</td>
      <td>Left to right.</td>
    </tr>
    <tr>
      <td><code>row-reverse</code></td>
      <td>Right to left.</td>
    </tr>
    <tr>
      <td><code>column</code></td>
      <td>Top to bottom.</td>
    </tr>
    <tr>
      <td><code>column-reverse</code></td>
      <td>Bottom to top.</td>
    </tr>
  </tbody>
</table><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>.container {
   display: flex;
   flex-direction: row-reverse;
}</code></pre></div><h3><code>flex-wrap</code></h3><p>Specifies whether the flex items should wrap or not if there isn't enough room.</p><table class="css-table">
  <thead>
    <tr>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>nowrap</code> (default)</td>
      <td>All items fit on one line.</td>
    </tr>
    <tr>
      <td><code>wrap</code></td>
      <td>Items wrap onto multiple lines.</td>
    </tr>
    <tr>
      <td><code>wrap-reverse</code></td>
      <td>Items wrap in reverse order.</td>
    </tr>
  </tbody>
</table><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>.container {
   display: flex;
   flex-wrap: wrap;
}</code></pre></div><h3><code>flex-flow</code></h3><p>A shorthand for both <code>flex-direction</code> and <code>flex-wrap</code>.</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>.container {
   flex-flow: row wrap;
}</code></pre></div><h3><code>justify-content</code></h3><p>Aligns items along the <strong>Main Axis</strong>.</p><table class="css-table">
  <thead>
    <tr>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>flex-start</code> (default)</td>
      <td>Items packed at start.</td>
    </tr>
    <tr>
      <td><code>flex-end</code></td>
      <td>Items packed at end.</td>
    </tr>
    <tr>
      <td><code>center</code></td>
      <td>Items packed at center.</td>
    </tr>
    <tr>
      <td><code>space-between</code></td>
      <td>Items evenly distributed; first line at start, last at end.</td>
    </tr>
    <tr>
      <td><code>space-around</code></td>
      <td>Items evenly distributed with equal space around them.</td>
    </tr>
    <tr>
      <td><code>space-evenly</code></td>
      <td>Items evenly distributed with equal space between them and edges.</td>
    </tr>
  </tbody>
</table><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>.container {
   display: flex;
   justify-content: space-between;
}</code></pre></div><h3><code>align-items</code></h3><p>Aligns items along the <strong>Cross Axis</strong>.</p><table class="css-table">
  <thead>
    <tr>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>stretch</code> (default)</td>
      <td>Items stretch to fill the container height.</td>
    </tr>
    <tr>
      <td><code>flex-start</code></td>
      <td>Items placed at the start of cross axis.</td>
    </tr>
    <tr>
      <td><code>flex-end</code></td>
      <td>Items placed at the end of cross axis.</td>
    </tr>
    <tr>
      <td><code>center</code></td>
      <td>Items placed in the middle.</td>
    </tr>
    <tr>
      <td><code>baseline</code></td>
      <td>Items aligned by their text baseline.</td>
    </tr>
  </tbody>
</table><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>.container {
   display: flex;
   align-items: center;
}</code></pre></div><h3><code>align-content</code></h3><p>Aligns flex <strong>lines</strong> when there is extra space in the cross-axis. (Only applies if <code>flex-wrap: wrap</code> is set and there are multiple lines).</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>.container {
   display: flex;
   flex-wrap: wrap;
   align-content: space-around;
}</code></pre></div><h3><code>gap / row-gap / column-gap</code></h3><p>Defines the space between flex items.</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>.container {
   display: flex;
   gap: 20px; /* 20px gap between all items */
}</code></pre></div><h2>Flex Item Properties</h2>
<p>The following properties apply directly to the individual flex items (the child elements).</p>
<h3><code>order</code></h3><p>Controls the order in which items appear. Default is 0.</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>.item-first {
   order: -1;
}</code></pre></div><h3><code>flex-grow</code></h3><p>Defines how much a flex item will grow relative to the rest of the flex items. Default is 0 (don't grow).</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>.item {
   flex-grow: 1; /* Take up remaining space */
}</code></pre></div><h3><code>flex-shrink</code></h3><p>Defines how much an item will shrink relative to the rest. Default is 1.</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>.item {
   flex-shrink: 0; /* Do not shrink */
}</code></pre></div><h3><code>flex-basis</code></h3><p>Specifies the initial main size of a flex item before free space is distributed.</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>.item {
   flex-basis: 200px;
}</code></pre></div><h3><code>flex (Shorthand)</code></h3><p>Shorthand for <code>flex-grow</code>, <code>flex-shrink</code>, and <code>flex-basis</code>.</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>.item {
   flex: 1 1 200px;
   /* Commonly used as flex: 1 to make items grow evenly */
}</code></pre></div><h3><code>align-self</code></h3><p>Overrides the container's <code>align-items</code> value for this specific item.</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>.item {
   align-self: flex-end;
}</code></pre></div><h2>Responsive Example</h2><p>A common navigation bar layout that collapses to a column on mobile:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>.nav {
   display: flex;
   flex-direction: row;
   justify-content: space-between;
}

@media (max-width: 600px) {
   .nav {
      flex-direction: column;
      align-items: center;
   }
}</code></pre></div><h2>Practical Examples</h2>
<p>Here is a complete, working example of a Flexbox layout.</p>
<div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">HTML/CSS</span></div><div class="code-actions"><button type="button" class="btn-copy">Copy</button><button type="button" class="btn-try">Try It Yourself</button></div></div><pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         .flex-container {
            display: flex;
            justify-content: space-around;
            background-color: DodgerBlue;
            padding: 10px;
         }
         .flex-container &gt; div {
            background-color: #f1f1f1;
            width: 100px;
            margin: 10px;
            text-align: center;
            line-height: 75px;
            font-size: 30px;
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;h1&gt;Flexbox Example&lt;/h1&gt;
      &lt;div class="flex-container"&gt;
         &lt;div&gt;1&lt;/div&gt;
         &lt;div&gt;2&lt;/div&gt;
         &lt;div&gt;3&lt;/div&gt;
      &lt;/div&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre></div>
<h2>Common Mistakes</h2><ul class="list"><li><b>Forgetting to set height:</b> <code>align-items: center</code> won't vertically center an item if the flex container doesn't have a defined height.</li><li><b>Misunderstanding justify vs align:</b> Remember: <code>justify-content</code> works on the Main Axis, <code>align-items</code> works on the Cross Axis. If you change <code>flex-direction: column</code>, they swap visual directions!</li></ul><h2>Best Practices</h2><ul class="list"><li><b>Use Shorthand:</b> Prefer using the <code>flex</code> shorthand on flex items instead of writing grow, shrink, and basis separately.</li><li><b>Use Gap:</b> Instead of putting margins on flex items (and fighting with the outer margins), use the <code>gap</code> property on the flex container.</li></ul><h2>Interview Questions</h2><ul class="list"><li><b>What is the difference between align-items and align-content?</b><br><code>align-items</code> aligns individual items on the cross axis. <code>align-content</code> aligns multiple lines of items when they wrap.</li><li><b>What does flex: 1 mean?</b><br>It is shorthand for <code>flex: 1 1 0%</code>. It tells the item to grow to fill space, shrink if needed, and start with a basis of 0.</li></ul><h2>Summary</h2><p>Flexbox is a 1-dimensional layout model that excels at distributing space and aligning items in a single row or column. By understanding the main and cross axes, and the separation between container properties and item properties, you can build complex, responsive layouts with minimal code.</p>
</div>`
  },
  {
    id: 'css-grid',
    title: 'CSS Grid',
    content: `<div class="topic-header"><span class="topic-badge">Topic 35</span><h1>CSS Grid</h1></div><div class="topic-section"><h2>Introduction to CSS Grid</h2><p>CSS Grid Layout is the most powerful layout system available in CSS. It is a 2-dimensional system, meaning it can handle both columns and rows, unlike Flexbox which is largely a 1-dimensional system.</p><p><b>Flexbox vs Grid:</b> Use Flexbox for alignment in one direction (a row of buttons). Use Grid for overall page layout or complex layouts requiring strict control over both rows and columns.</p><p>Set an element to grid using <code>display: grid</code> (block-level) or <code>display: inline-grid</code> (inline-level).</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>.grid-container {
   display: grid;
}</code></pre></div><h2>Grid Container Properties</h2>
<p>The following properties apply to the grid container (the parent element).</p>
<h3><code>grid-template-columns</code></h3><p>Defines the number of columns and their widths. You can use the <code>fr</code> (fractional) unit to distribute remaining space.</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>.grid-container {
   /* 3 columns: 200px, 1 fraction, 2 fractions */
   grid-template-columns: 200px 1fr 2fr;
}</code></pre></div><p>Use <code>repeat()</code> and <code>minmax()</code> for responsive grids without media queries:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>.grid-container {
   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}</code></pre></div><h3><code>grid-template-rows</code></h3><p>Defines the heights of the rows in the grid.</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>.grid-container {
   grid-template-rows: 100px auto 100px;
}</code></pre></div><h3><code>grid-template-areas</code></h3><p>Allows you to name sections of the grid and place items intuitively.</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>.grid-container {
   grid-template-areas:
      <code>"header header header"</code>
      <code>"sidebar content content"</code>
      <code>"footer footer footer"</code>;
}</code></pre></div><h3><code>gap / row-gap / column-gap</code></h3><p>Defines the space between the rows and columns.</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>.grid-container {
   gap: 20px;
}</code></pre></div><h3><code>justify-items &amp; align-items</code></h3><p><code>justify-items</code> aligns items horizontally inside their grid cells. <code>align-items</code> aligns them vertically.</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>.grid-container {
   justify-items: center;
   align-items: center;
}</code></pre></div><h3><code>justify-content &amp; align-content</code></h3><p>Used to align the entire grid inside the container, if the grid is smaller than the container itself.</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>.grid-container {
   justify-content: center;
}</code></pre></div><h2>Grid Item Properties</h2>
<p>The following properties apply to the individual grid items (the child elements).</p>
<h3><code>grid-column &amp; grid-row</code></h3><p>Shorthands for specifying where an item starts and ends. You can use <code>span</code> to stretch across tracks.</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>.item1 {
   grid-column: 1 / 3; /* Start at column line 1, end at 3 */
   grid-row: span 2;  /* Stretch across 2 rows */
}</code></pre></div><h3><code>grid-area</code></h3><p>Used to place an item into a named area created by <code>grid-template-areas</code>.</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>.item-header {
   grid-area: header;
}</code></pre></div><h3><code>justify-self &amp; align-self</code></h3><p>Overrides the container's alignment for a single specific item inside its cell.</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>.item1 {
   justify-self: end;
   align-self: end;
}</code></pre></div><h2>Responsive 12-Column Example</h2><p>Building a classic 12-column grid layout is incredibly simple with CSS Grid:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>.grid-12 {
   display: grid;
   grid-template-columns: repeat(12, 1fr);
   gap: 16px;
}

.span-4 {
   grid-column: span 4;
}

.span-8 {
   grid-column: span 8;
}</code></pre></div><h2>Practical Examples</h2>
<p>Here is a complete, working example of a Grid layout.</p>
<div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">HTML/CSS</span></div><div class="code-actions"><button type="button" class="btn-copy">Copy</button><button type="button" class="btn-try">Try It Yourself</button></div></div><pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         .grid-container {
            display: grid;
            grid-template-columns: auto auto auto;
            background-color: #2196F3;
            padding: 10px;
            gap: 10px;
         }
         .grid-item {
            background-color: rgba(255, 255, 255, 0.8);
            border: 1px solid rgba(0, 0, 0, 0.8);
            padding: 20px;
            font-size: 30px;
            text-align: center;
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;h1&gt;Grid Layout Example&lt;/h1&gt;
      &lt;div class="grid-container"&gt;
         &lt;div class="grid-item"&gt;1&lt;/div&gt;
         &lt;div class="grid-item"&gt;2&lt;/div&gt;
         &lt;div class="grid-item"&gt;3&lt;/div&gt;
         &lt;div class="grid-item"&gt;4&lt;/div&gt;
         &lt;div class="grid-item"&gt;5&lt;/div&gt;
         &lt;div class="grid-item"&gt;6&lt;/div&gt;
      &lt;/div&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre></div>
<h2>Common Mistakes</h2><ul class="list"><li><b>Overusing Grid:</b> Using Grid for everything. If you just need to align an icon and text, Flexbox is much simpler!</li><li><b>Confusing lines vs tracks:</b> <code>grid-column: 1 / 3</code> means it spans from line 1 to line 3 (which covers 2 columns, not 3).</li></ul><h2>Best Practices</h2><ul class="list"><li><b>auto-fit and minmax():</b> Use these functions to create highly responsive grids that wrap automatically without needing complex media queries.</li><li><b>Named Areas:</b> For page layouts, <code>grid-template-areas</code> makes your CSS incredibly readable and easy to maintain.</li></ul><h2>Interview Questions</h2><ul class="list"><li><b>What is the difference between auto-fill and auto-fit in Grid?</b><br><code>auto-fill</code> fills the row with as many columns as it can, even if they are empty. <code>auto-fit</code> collapses empty columns and stretches the filled ones to fit the space.</li><li><b>What is the fr unit?</b><br>It stands for fractional unit. It represents a fraction of the available free space in the grid container.</li></ul><h2>Summary</h2><p>CSS Grid is a robust 2D layout tool. While it has a steeper learning curve than Flexbox, its ability to control both rows and columns simultaneously, and create complex responsive designs with minimal code (via named areas and the <code>fr</code> unit), makes it an essential tool for modern web development.</p>
</div>`
  },
  {
    id: 'multi-columns',
    title: 'Multi Columns',
    content: `
  <div class="topic-header">
    <span class="topic-badge">Topic 36</span>
    <h1>Multi Columns</h1>
  </div>
  <div class="topic-section">
    <p>CSS3 supported multi columns to arrange the text as news paper structure.</p>
    <p>Some of most common used multi columns properties as shown below −</p>
    <table class="css-table">
      <thead>
        <tr>
          <th>Value</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>column-count</code></td>
          <td>Used to count the number of columns that element should be divided</td>
        </tr>
        <tr>
          <td><code>column-fill</code></td>
          <td>Used to decide, how to fill the columns</td>
        </tr>
        <tr>
          <td><code>column-gap</code></td>
          <td>Used to decide the gap between the columns</td>
        </tr>
        <tr>
          <td><code>column-rule</code></td>
          <td>Used to specifies the number of rules</td>
        </tr>
        <tr>
          <td><code>rule-color</code></td>
          <td>Used to specifies the column rule color</td>
        </tr>
        <tr>
          <td><code>rule-style</code></td>
          <td>Used to specifies the style rule for column</td>
        </tr>
        <tr>
          <td><code>rule-width</code></td>
          <td>Used to specifies the width</td>
        </tr>
        <tr>
          <td><code>column-span</code></td>
          <td>Used to specifies the span between columns</td>
        </tr>
      </tbody>
    </table>
    <h3>Example</h3>
    <p>Below example shows the arrangement of text as new paper structure.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         .multi {
            /* Column count property */
            -webkit-column-count: 4;
            -moz-column-count: 4;
            column-count: 4;
            /* Column gap property */
            -webkit-column-gap: 40px;
            -moz-column-gap: 40px;
            column-gap: 40px;
            /* Column style property */
            -webkit-column-rule-style: solid;
            -moz-column-rule-style: solid;
            column-rule-style: solid;
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;div class="multi"&gt;
         This is an Hello World used to demonstrate CSS styling.
         Tutorials Point originated from the idea that there exists a class of readers who respond better to online content and prefer to learn new skills at their own pace from the comforts of their drawing rooms. The journey commenced with a single tutorial on HTML in 2006 and elated by the response it generated, we worked our way to adding fresh tutorials to our repository which now proudly flaunts a wealth of tutorials and allied articles on topics ranging from programming languages to web designing to academics and much more.
      &lt;/div&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <p>For suppose, if user wants to make text as new paper without line, we can do this by removing style syntax as shown below</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>.multi {
   /* Column count property */
   -webkit-column-count: 4;
   -moz-column-count: 4;
   column-count: 4;
   /* Column gap property */
   -webkit-column-gap: 40px;
   -moz-column-gap: 40px;
   column-gap: 40px;
}</code></pre>
    </div>



<h2>Practical Examples</h2><p>A classic, responsive card grid (like Pinterest) built using the CSS Multi-column layout module, ensuring cards aren't sliced in half:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;style&gt;
.card-masonry {
   column-width: 300px; /* Responsive: browsers calculate how many columns fit */
   column-gap: 20px;
}

.card {
   /* CRITICAL: Prevents the card from being cut in half across two columns */
   break-inside: avoid;
   margin-bottom: 20px;
   background: #fff;
   border-radius: 8px;
}
&lt;/style&gt;

&lt;div class="card-masonry"&gt;
  &lt;div class="card" style="height:100px; background:#eee; margin-bottom:10px; padding:10px;"&gt;Card 1&lt;/div&gt;
  &lt;div class="card" style="height:150px; background:#ddd; margin-bottom:10px; padding:10px;"&gt;Card 2&lt;/div&gt;
  &lt;div class="card" style="height:80px; background:#ccc; margin-bottom:10px; padding:10px;"&gt;Card 3&lt;/div&gt;
  &lt;div class="card" style="height:120px; background:#bbb; margin-bottom:10px; padding:10px;"&gt;Card 4&lt;/div&gt;
&lt;/div&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Using CSS Columns for UI grids</strong> − CSS Columns read vertically (top-to-bottom, then left-to-right). If you have a list of products (1, 2, 3, 4), they will stack vertically. If you want a traditional horizontal grid (1, 2 across the top row), you MUST use CSS Grid, not CSS Columns.</li><li><strong>Forgetting <code>break-inside: avoid</code></strong> − If you put cards or paragraphs in a multi-column layout without this property, the browser will literally slice the card in half at the bottom of Column 1 and render the bottom half at the top of Column 2.</li><li><strong>Using <code>column-count</code> instead of <code>column-width</code></strong> − <code>column-count: 3</code> forces exactly 3 columns even on a narrow smartphone, crushing the content. <code>column-width</code> is natively responsive.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Use for Masonry Image Galleries</strong> − CSS Grid struggles with true masonry (Pinterest-style) layouts where items have varying heights. CSS Multi-columns handles varying heights beautifully, making it the best tool for masonry image galleries.</li><li><strong>Use <code>column-rule</code> for neat dividers</strong> − Instead of hacking borders onto child elements, use <code>column-rule: 1px solid #ccc;</code> to automatically draw perfect vertical lines between your columns.</li></ul><h2>Interview Questions</h2><p><strong>Q: What CSS property prevents an element from being split across two columns in a multi-column layout?</strong></p><p>A: <code>break-inside: avoid;</code>.</p><p><strong>Q: How does <code>column-width</code> act responsively without media queries?</strong></p><p>A: It acts as a minimum optimal width. The browser will automatically divide the container width by the <code>column-width</code> value to determine how many columns can fit. As the screen shrinks, the number of columns naturally decreases.</p><p><strong>Q: How do you make a headline span completely across all columns?</strong></p><p>A: Apply <code>column-span: all;</code> to the headline element.</p><h2>Summary</h2><p>The CSS Multi-column Layout module mimics classic newspaper typesetting. While it shouldn't be used for main structural UI layouts, it remains the absolute best, most responsive tool for flowing long text natively and building varying-height masonry layouts like Pinterest.</p>
  </div>`
  },
  {
    id: 'layouts',
    title: 'Layouts',
    content: `
  <div class="topic-header">
    <span class="topic-badge">Topic 37</span>
    <h1>Layouts</h1>
  </div>
  <div class="topic-section">
    <p>Hope you are very comfortable with HTML tables and you are efficient in designing page layouts using HTML Tables. But you know CSS also provides plenty of controls for positioning elements in a document. Since CSS is the wave of the future, why not learn and use CSS instead of tables for page layout purposes?</p>
    <p>The following list collects a few pros and cons of both the technologies −</p>
    <table class="css-table">
      <thead>
        <tr>
          <th>Aspect</th>
          <th>Tables</th>
          <th>CSS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Browser Support</td>
          <td>Most browsers support tables</td>
          <td>CSS support is being slowly adopted</td>
        </tr>
        <tr>
          <td>Responsiveness</td>
          <td>More forgiving when browser window size changes - morphing content and wrapping to accommodate changes accordingly</td>
          <td>CSS positioning tends to be exact and fairly inflexible</td>
        </tr>
        <tr>
          <td>Ease of Learning</td>
          <td>Much easier to learn and manipulate</td>
          <td>CSS rules can be more complex</td>
        </tr>
      </tbody>
    </table>
    <p>But each of these arguments can be reversed −</p>
    <table class="css-table">
      <thead>
        <tr>
          <th>Aspect</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Future Support</td>
          <td>CSS is pivotal to the future of Web documents and will be supported by most browsers</td>
        </tr>
        <tr>
          <td>Precision</td>
          <td>CSS is more exact than tables, allowing your document to be viewed as you intended, regardless of the browser window</td>
        </tr>
        <tr>
          <td>Organization</td>
          <td>Keeping track of nested tables can be a real pain. CSS rules tend to be well organized, easily read, and easily changed</td>
        </tr>
      </tbody>
    </table>
    <p>Finally, we would suggest you to use whichever technology makes sense to you and use what you know or what presents your documents in the best way.</p>
    <p>CSS also provides <code>table-layout</code> property to make your tables load much faster. Following is an example −</p>
    <div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">HTML/CSS</span></div><div class="code-actions"><button type="button" class="btn-copy">Copy</button></div></div><pre class="code-block"><code>&lt;table style="table-layout:fixed;width:600px;"&gt;
  &lt;tr&gt;
    &lt;td width="150"&gt;CSS table layout cell 1&lt;/td&gt;
    &lt;td width="200"&gt;CSS table layout cell 2&lt;/td&gt;
    &lt;td width="250"&gt;CSS table layout cell 3&lt;/td&gt;
  &lt;/tr&gt;
&lt;/table&gt;</code></pre></div>
    <p>You will notice the benefits more on large tables. With traditional HTML, the browser had to calculate every cell before finally rendering the table. When you set the table-layout algorithm to fixed, however, it only needs to look at the first row before rendering the whole table. It means your table will need to have fixed column widths and row heights.</p>
    <h3>Sample Column Layout</h3>
    <p>Here are the steps to create a simple Column Layout using CSS −</p>
    <p>Set the margin and padding of the complete document as follows −</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>body {
   margin:9px 9px 0 9px;
   padding:0;
   background:#FFF;
}</code></pre>
    </div>
    <p>Now, we will define a column with yellow color and later, we will attach this rule to a &lt;div&gt;:</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>#level0 {
   background:#FC0;
}</code></pre>
    </div>
    <p>Upto this point, we will have a document with yellow body, so let us now define another division inside level0 −</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>#level1 {
   margin-left:143px;
   padding-left:9px;
   background:#FFF;
}</code></pre>
    </div>
    <p>Now, we will nest one more division inside level1, and we will change just background color −</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>#level2 {
   background:#FFF3AC;
}</code></pre>
    </div>
    <p>Finally, we will use the same technique, nest a level3 division inside level2 to get the visual layout for the right column −</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>#level3 {
   margin-right:143px;
   padding-right:9px;
   background:#FFF;
}
#main {
   background:#CCC;
}</code></pre>
    </div>
    <p>Complete the source code as follows −</p>

    <div class="code-wrap">
      <div class="code-header">
         <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         body {
   margin:9px 9px 0 9px;
   padding:0;
   background:#FFF;
}
#level0 {background:#FC0;}
#level1 {
   margin-left:143px;
   padding-left:9px;
   background:#FFF;
}
#level2 {background:#FFF3AC;}
#level3 {
   margin-right:143px;
   padding-right:9px;
   background:#FFF;
}
#main {background:#CCC;}
&lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;div id="level0"&gt;
         &lt;div id="level1"&gt;
            &lt;div id="level2"&gt;
               &lt;div id="level3"&gt;
                  &lt;div id="main"&gt;
                     Final Content goes here...
                  &lt;/div&gt;
               &lt;/div&gt;
            &lt;/div&gt;
         &lt;/div&gt;
      &lt;/div&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>
    <p>Similarly, you can add a top navigation bar or an ad bar at the top of the page.</p>



<h2>Practical Examples</h2><p>A masonry-style newspaper layout that flows text gracefully across multiple columns while preventing awkward breaks inside paragraphs:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;style&gt;
.newspaper-article {
   /* Creates responsive columns that won't get thinner than 250px */
   column-width: 250px;
   column-gap: 30px;
   column-rule: 1px solid #ccc; /* Draws a line between columns */
}

.newspaper-article p {
   /* Prevents a single paragraph from being split across two columns */
   break-inside: avoid;
   margin-bottom: 1rem;
}
&lt;/style&gt;

&lt;div class="newspaper-article"&gt;
  &lt;p&gt;First paragraph of news. This is a very interesting story.&lt;/p&gt;
  &lt;p&gt;Second paragraph of news. CSS Layouts are awesome.&lt;/p&gt;
  &lt;p&gt;Third paragraph of news. Multi-column makes it easy.&lt;/p&gt;
&lt;/div&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Using CSS Columns for structural grids</strong> − Trying to build a dashboard layout with <code>column-count</code>. CSS Columns flow content top-to-bottom first, then over to the next column. If you want content to read left-to-right (row-by-row), you must use CSS Grid instead.</li><li><strong>Hardcoding <code>column-count: 4</code></strong> − Forcing 4 columns looks great on desktop but creates illegibly thin columns on mobile. Always use <code>column-width</code> instead so the browser can reduce the column count automatically on small screens.</li><li><strong>Setting fixed heights</strong> − Setting a fixed height on the multi-column container prevents the columns from balancing their content evenly.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Use <code>column-width</code> for intrinsic responsiveness</strong> − Declaring a width (e.g., 300px) tells the browser "give me as many columns as will fit, but never thinner than 300px." This eliminates the need for media queries!</li><li><strong>Utilize <code>break-inside: avoid</code></strong> − Always apply this to child elements (like blockquotes, images, or cards) inside the column layout to prevent them from being awkwardly sliced in half at the bottom of a column.</li></ul><h2>Interview Questions</h2><p><strong>Q: What is the main difference between <code>column-count</code> and <code>column-width</code>?</strong></p><p>A: <code>column-count</code> forces an exact number of columns regardless of the screen size, which can break on mobile. <code>column-width</code> defines an ideal minimum width, allowing the browser to calculate how many columns can fit, making it inherently responsive.</p><p><strong>Q: How do you make an element span across all columns (like a large headline in an article)?</strong></p><p>A: By applying <code>column-span: all;</code> to that specific element.</p><p><strong>Q: In what direction does content flow inside a CSS Multi-column layout?</strong></p><p>A: Vertically (top-to-bottom) filling the first column entirely before spilling over into the next column.</p><h2>Summary</h2><p>The CSS Multi-column layout module is highly specialized. While it is terrible for building overall page structures (leave that to Flexbox and Grid), it is absolutely unmatched for flowing text-heavy content like newspaper articles, or building pure-CSS masonry image galleries using <code>break-inside: avoid</code>.</p>
  </div>`
  },
  {
    id: 'transitions',
    title: 'CSS Transitions',
    content: `<div class="topic-header"><span class="topic-badge">Topic 38</span><h1>CSS Transitions</h1></div><div class="topic-section"><p>CSS transitions allow you to change property values smoothly, over a given duration, rather than having them snap instantly. (e.g. from state A to state B).</p><p><em>Note: Transitions are distinct from <strong>Animations</strong>. Transitions require a trigger (like <code>:hover</code>) and go from state A to B. Animations (using <code>@keyframes</code>) can run automatically, loop, and have multiple complex steps. We cover Animations in a separate chapter!</em></p><h3>Transition Properties</h3><table class="css-table">
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>transition-property</code></td>
      <td>The specific CSS property you want to transition (e.g., <code>background-color</code>).</td>
    </tr>
    <tr>
      <td><code>transition-duration</code></td>
      <td>How long the transition takes (e.g., <code>0.3s</code>).</td>
    </tr>
    <tr>
      <td><code>transition-timing-function</code></td>
      <td>The speed curve of the transition.</td>
    </tr>
    <tr>
      <td><code>transition-delay</code></td>
      <td>A delay before the transition starts.</td>
    </tr>
    <tr>
      <td><code>transition</code></td>
      <td>The shorthand property for the 4 properties above.</td>
    </tr>
  </tbody>
</table><h3>Common Timing Functions</h3><table class="css-table">
  <thead>
    <tr>
      <th>Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ease</code></td>
      <td>Slow start, then fast, then end slowly (default).</td>
    </tr>
    <tr>
      <td><code>linear</code></td>
      <td>Same speed from start to end.</td>
    </tr>
    <tr>
      <td><code>ease-in</code></td>
      <td>Slow start.</td>
    </tr>
    <tr>
      <td><code>ease-out</code></td>
      <td>Slow end.</td>
    </tr>
    <tr>
      <td><code>ease-in-out</code></td>
      <td>Slow start and end.</td>
    </tr>
    <tr>
      <td><code>cubic-bezier(n,n,n,n)</code></td>
      <td>Lets you define your own custom speed curve.</td>
    </tr>
  </tbody>
</table><h3>Examples</h3><p><strong>Example 1: Button Hover Color Change</strong></p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>.btn {
   background-color: blue;
   transition: background-color 0.3s ease-in-out;
}

.btn:hover {
   background-color: red;
}</code></pre></div><p><strong>Example 2: Scale Transformation</strong></p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>.card {
   transform: scale(1);
   transition: transform 0.2s linear;
}

.card:hover {
   transform: scale(1.1);
}</code></pre></div>

<h2>Practical Examples</h2><p>A modern, interactive button that smoothly changes color and scales up slightly when hovered:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;style&gt;
.btn-interactive {
   background-color: #3b82f6;
   color: white;
   padding: 10px 20px;
   transform: scale(1);

   /* Apply the transition to the DEFAULT state, not the hover state */
   transition: background-color 0.3s ease, transform 0.2s ease-in-out;
}

.btn-interactive:hover {
   background-color: #1d4ed8;
   transform: scale(1.05);
}
&lt;/style&gt;

&lt;div style="padding:20px; text-align:center;"&gt;
  &lt;button class="btn-interactive"&gt;Hover Me!&lt;/button&gt;
&lt;/div&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Putting the transition on the <code>:hover</code> state</strong> − If you put the <code>transition</code> property inside <code>.btn:hover</code>, the animation will play smoothly when the mouse enters, but will instantly snap back abruptly when the mouse leaves. Always put it on the default state!</li><li><strong>Transitioning <code>display</code></strong> − You cannot transition an element from <code>display: none</code> to <code>display: block</code>. It will snap instantly. You must transition <code>opacity</code> or <code>visibility</code> instead.</li><li><strong>Transitioning <code>width</code> or <code>height</code></strong> − Animating layout properties (like width, height, margin) forces the browser to recalculate the layout on every single frame, causing horrible lag. Transition <code>transform</code> instead.</li><li><strong>Making transitions too slow</strong> − A 1-second hover transition feels incredibly sluggish to users. Hover effects should feel snappy.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Keep it snappy (0.2s - 0.3s)</strong> − The sweet spot for UI interactions (like hovers and clicks) is between 200ms and 300ms.</li><li><strong>Animate Hardware-Accelerated Properties</strong> − Whenever possible, only transition <code>transform</code> (scale, translate) and <code>opacity</code>. The browser hands these off to the GPU, guaranteeing a buttery-smooth 60fps. Transitioning these performs vastly better than transitioning <code>width</code>, <code>height</code>, <code>top</code>, or <code>left</code>, because the former do not trigger layout recalculation.</li><li><strong>Specify the property</strong> − Avoid using <code>transition: all</code>. It forces the browser to monitor everything, which can cause performance drops. Explicitly state the properties you want to animate.</li></ul><h2>Interview Questions</h2><p><strong>Q: What is the default <code>timing-function</code> of a transition?</strong></p><p>A: <code>ease</code>, which starts slow, goes fast in the middle, and ends slowly.</p><p><strong>Q: Why should you transition <code>transform: scale()</code> instead of <code>width</code>?</strong></p><p>A: Transitioning <code>width</code> triggers layout recalculations and repaints on every frame, causing performance lag. <code>transform</code> is handled by the GPU and does not affect surrounding elements, resulting in a smooth animation.</p><p><strong>Q: How do you transition multiple properties at different speeds?</strong></p><p>A: By separating them with commas: <code>transition: opacity 0.2s, transform 0.5s;</code>.</p><h2>Summary</h2><p>Transitions are the easiest way to make a website feel premium and interactive. By applying transitions to the default state (not the hover state) and keeping durations short and snappy, you can dramatically improve the user experience. Always prioritize animating <code>opacity</code> and <code>transform</code> for optimal performance.</p>
  </div>`
  },
  {
    id: 'animation',
    title: 'Animation',
    content: `
  <div class="topic-header">
    <span class="topic-badge">Topic 39</span>
    <h1>Animation</h1>
  </div>
  <div class="topic-section">
    <p>Animation is process of making shape changes and creating motions with elements.</p>
    <div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">HTML/CSS</span></div><div class="code-actions"><button type="button" class="btn-copy">Copy</button><button type="button" class="btn-try">Try It Yourself</button></div></div><pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         h1 {
            animation: slidein 4s infinite alternate;
         }
         @keyframes slidein {
            from {
               margin-left: 100%;
               width: 300%;
            }
            75% {
               font-size: 300%;
               margin-left: 25%;
               width: 150%;
               color: red;
            }
            to {
               margin-left: 0%;
               width: 100%;
               color: blue;
            }
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;h1&gt;Hello World&lt;/h1&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre></div>





<h2>Practical Examples</h2><p>A smooth, infinitely pulsing <code>"Live"</code> indicator dot using the <code>@keyframes</code> rule:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">HTML/CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;style&gt;
@keyframes pulse {
   0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.7);
   }
   70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(220, 38, 38, 0);
   }
   100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(220, 38, 38, 0);
   }
}

.live-indicator {
   width: 12px;
   height: 12px;
   background-color: #dc2626;
   border-radius: 50%;
   /* name | duration | timing-function | delay | iteration-count | direction */
   animation: pulse 2s infinite;
}
&lt;/style&gt;

&lt;div style="display:flex; align-items:center; gap:10px; padding:20px;"&gt;
  &lt;div class="live-indicator"&gt;&lt;/div&gt;
  &lt;span&gt;Live Now&lt;/span&gt;
&lt;/div&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Animations snapping back to start</strong> − By default, an element immediately snaps back to its <code>0%</code> state when an animation finishes. If you want the element to stay in its <code>100%</code> state permanently, you must add <code>animation-fill-mode: forwards;</code>.</li><li><strong>Animating layout properties</strong> − Using <code>@keyframes</code> to animate <code>margin</code>, <code>top/left</code>, or <code>width</code>. This forces layout recalculations and destroys framerates. Always animate <code>transform</code> and <code>opacity</code>.</li><li><strong>Forgetting <code>prefers-reduced-motion</code></strong> − Some users suffer from motion sickness. Failing to wrap infinite or aggressive animations in a <code>@media (prefers-reduced-motion: reduce)</code> query fails accessibility standards.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Use CSS Variables in Keyframes</strong> − If you want multiple elements to pulse to different sizes, use <code>transform: scale(var(--pulse-size, 1.2))</code> inside your keyframes. This allows you to reuse one animation rule across dozens of elements.</li><li><strong>Use <code>alternate</code> for smooth looping</strong> − If you want an animation to bounce back and forth smoothly (like a floating ghost), use <code>animation-direction: alternate;</code> so it plays 0% to 100%, then 100% back to 0%.</li><li><strong>Respect user preferences</strong> − Use the <code>prefers-reduced-motion</code> media query to disable or reduce animations for users who get motion sickness from excessive movement on screen.</li></ul><h2>Interview Questions</h2><p><strong>Q: What is the primary difference between a CSS <code>transition</code> and a CSS <code>animation</code>?</strong></p><p>A: A <code>transition</code> strictly requires a trigger (like a hover state or JS class change) to move from an initial state to a final state. An <code>animation</code> (using <code>@keyframes</code>) can run automatically on page load, loop infinitely, and pass through multiple complex intermediate steps (e.g., 25%, 50%, 75%).</p><p><strong>Q: What does <code>animation-fill-mode: forwards</code> do?</strong></p><p>A: It instructs the element to retain the styling values defined in the final keyframe (100%) after the animation finishes playing, preventing it from snapping back to its original state.</p><p><strong>Q: How do you pause a CSS animation?</strong></p><p>A: By setting <code>animation-play-state: paused;</code>.</p><h2>Summary</h2><p>CSS Animations via the <code>@keyframes</code> rule offer incredibly powerful, multi-step sequence controls. They completely replace the need for heavy JavaScript animation libraries for most UI interactions. By mastering keyframe percentages and the <code>animation</code> shorthand properties, you can bring complex, performant motion to your web apps.</p>
  </div>`
  },
  {
    id: '2d-transforms',
    title: '2d Transforms',
    content: `
  <div class="topic-header">
    <span class="topic-badge">Topic 40</span>
    <h1>2d Transforms</h1>
  </div>
  <div class="topic-section">
    <p>2D transforms are used to re-change the element structure as translate, rotate, scale, and skew. The following table has contained common values which are used in 2D transforms</p>
    <table class="css-table">
      <thead>
        <tr>
          <th>Value</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>matrix(n, n, n, n, n, n)</code></td>
          <td>Used to defines matrix transforms with six values</td>
        </tr>
        <tr>
          <td><code>translate(x, y)</code></td>
          <td>Used to transforms the element along with x-axis and y-axis</td>
        </tr>
        <tr>
          <td><code>translateX(n)</code></td>
          <td>Used to transforms the element along with x-axis</td>
        </tr>
        <tr>
          <td><code>translateY(n)</code></td>
          <td>Used to transforms the element along with y-axis</td>
        </tr>
        <tr>
          <td><code>scale(x, y)</code></td>
          <td>Used to change the width and height of element</td>
        </tr>
        <tr>
          <td><code>scaleX(n)</code></td>
          <td>Used to change the width of element</td>
        </tr>
        <tr>
          <td><code>scaleY(n)</code></td>
          <td>Used to change the height of element</td>
        </tr>
        <tr>
          <td><code>rotate(angle)</code></td>
          <td>Used to rotate the element based on an angle</td>
        </tr>
        <tr>
          <td><code>skewX(angle)</code></td>
          <td>Used to defines skew transforms along with x axis</td>
        </tr>
        <tr>
          <td><code>skewY(angle)</code></td>
          <td>Used to defines skew transforms along with y axis</td>
        </tr>
      </tbody>
    </table>
    <p>The following examples are shown the sample of all above properties</p>
    <h3>Rotate 20 degrees</h3>
    <p>Box rotation with 20 degrees angle as shown below</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         div {
            width: 300px;
            height: 100px;
            background-color: pink;
            border: 1px solid black;
         }
         div#myDiv {
            /* IE 9 */
            -ms-transform: rotate(20deg);
            /* Safari */
            -webkit-transform: rotate(20deg);
            /* Standard syntax */
            transform: rotate(20deg);
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
            &lt;div id="myDiv"&gt;Hello World!&lt;/div&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>Rotate -20 degrees</h3>
    <p>Box rotation with -20 degrees angle as shown below</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         div {
            width: 300px;
            height: 100px;
            background-color: pink;
            border: 1px solid black;
         }
         div#myDiv {
            /* IE 9 */
            -ms-transform: rotate(-20deg);
            /* Safari */
            -webkit-transform: rotate(-20deg);
            /* Standard syntax */
            transform: rotate(-20deg);
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
            &lt;div id="myDiv"&gt;Hello World!&lt;/div&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>


    <h3>Skew X axis</h3>
    <p>Box rotation with skew x-axis as shown below</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         div {
            width: 300px;
            height: 100px;
            background-color: pink;
            border: 1px solid black;
         }
         div#skewDiv {
            /* IE 9 */
            -ms-transform: skewX(20deg);
            /* Safari */
            -webkit-transform: skewX(20deg);
            /* Standard syntax */
            transform: skewX(20deg);
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
            &lt;div id="skewDiv"&gt;Hello World!&lt;/div&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>


    <h3>Skew Y axis</h3>
    <p>Box rotation with skew y-axis as shown below</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         div {
            width: 300px;
            height: 100px;
            background-color: pink;
            border: 1px solid black;
         }
         div#skewDiv {
            /* IE 9 */
            -ms-transform: skewY(20deg);
            /* Safari */
            -webkit-transform: skewY(20deg);
            /* Standard syntax */
            transform: skewY(20deg);
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
            &lt;div id="skewDiv"&gt;Hello World!&lt;/div&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>


    <h3>Matrix transform</h3>
    <p>Box rotation with Matrix transforms as shown below</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         div {
            width: 300px;
            height: 100px;
            background-color: pink;
            border: 1px solid black;
         }
         div#myDiv1 {
            /* IE 9 */
            -ms-transform: matrix(1, -0.3, 0, 1, 0, 0);
            /* Safari */
            -webkit-transform: matrix(1, -0.3, 0, 1, 0, 0);
            /* Standard syntax */
            transform: matrix(1, -0.3, 0, 1, 0, 0);
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
            &lt;div id="myDiv1"&gt;Hello World!&lt;/div&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>


    <h3>Matrix transforms with another direction</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         div {
            width: 300px;
            height: 100px;
            background-color: pink;
            border: 1px solid black;
         }
         div#myDiv2 {
            /* IE 9 */
            -ms-transform: matrix(1, 0, 0.5, 1, 150, 0);
            /* Safari */
            -webkit-transform: matrix(1, 0, 0.5, 1, 150, 0);
            /* Standard syntax */
            transform: matrix(1, 0, 0.5, 1, 150, 0);
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
            &lt;div id="myDiv2"&gt;Hello World!&lt;/div&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>



<h2>Practical Examples</h2><p>The industry standard method for perfectly centering an element horizontally and vertically inside its parent, regardless of its exact dimensions:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;style&gt;
.centered-modal {
   position: absolute;
   top: 50%; /* Pushes the top edge down 50% of the parent */
   left: 50%; /* Pushes the left edge right 50% of the parent */

   /* Pulls the element back up and left by 50% of ITS OWN width/height */
   transform: translate(-50%, -50%);
}
&lt;/style&gt;

&lt;div style="position:relative; height:300px; background:#f0f0f0;"&gt;
  &lt;div class="centered-modal" style="background:white; padding:20px; box-shadow:0 0 10px rgba(0,0,0,0.1);"&gt;Perfectly Centered!&lt;/div&gt;
&lt;/div&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Animating margins instead of transforms</strong> − Trying to slide a menu onto the screen by transitioning <code>margin-left</code>. Margins force the browser to recalculate the entire page layout on every frame (laggy). <code>transform: translateX()</code> is hardware-accelerated (smooth).</li><li><strong>Forgetting <code>transform-origin</code></strong> − When rotating an element (like a dropdown arrow), it rotates around its absolute center by default. If you want it to swing like a door, you must change the <code>transform-origin</code> to <code>left</code> or <code>right</code>.</li><li><strong>Overwriting transforms</strong> − Writing <code>transform: scale(2);</code> and then on hover writing <code>transform: rotate(45deg);</code>. The rotation will completely overwrite and destroy the scale. You must combine them: <code>transform: scale(2) rotate(45deg);</code>.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Always use transforms for UI animations</strong> − Limit your CSS transitions strictly to <code>transform</code> (translate, scale, rotate) and <code>opacity</code> to guarantee silky smooth 60fps animations, even on low-end mobile devices.</li><li><strong>Use individual <code>transform</code> properties (Modern CSS)</strong> − In modern CSS, you can now write <code>translate: 50px 100px;</code> or <code>scale: 2;</code> independently without needing to bundle everything inside the monolithic <code>transform: ...</code> property.</li></ul><h2>Interview Questions</h2><p><strong>Q: What is the difference between <code>translate(50px)</code> and <code>margin-left: 50px</code>?</strong></p><p>A: <code>margin</code> affects the document flow, pushing surrounding elements out of the way. <code>translate</code> moves the element visually but leaves its original physical space intact, completely ignoring surrounding elements.</p><p><strong>Q: What does <code>transform-origin: center center;</code> mean?</strong></p><p>A: It is the default setting. It means any rotation, scale, or skew operations will originate from the exact middle of the element.</p><p><strong>Q: How do you combine multiple transforms on a single element?</strong></p><p>A: Space-separate them within the single property: <code>transform: translateX(10px) scale(1.5) rotate(90deg);</code>.</p><h2>Summary</h2><p>2D Transforms (<code>translate</code>, <code>scale</code>, <code>rotate</code>, <code>skew</code>) allow you to manipulate elements visually without disrupting the underlying page layout. Because the browser hands these calculations off to the GPU, they are the absolute gold standard for creating smooth, performant UI animations.</p>
  </div>`
  },
  {
    id: '3d-transforms',
    title: '3D Transforms',
    content: `
  <div class="topic-header">
    <span class="topic-badge">Topic 41</span>
    <h1>3D Transforms</h1>
  </div>
  <div class="topic-section">
    <p>CSS 3D transforms allow you to format elements using 3D transformations. You can move, rotate, scale, and skew elements in three-dimensional space.</p>

    <h3>3D Transform Methods</h3>
    <table class="css-table">
      <thead>
        <tr>
          <th>Function</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><code>matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)</code></td><td>Defines a 3D transformation, using a 4x4 matrix of 16 values</td></tr>
        <tr><td><code>translate3d(x,y,z)</code></td><td>Defines a 3D translation</td></tr>
        <tr><td><code>translateX(x)</code></td><td>Defines a 3D translation, using only the value for the X-axis</td></tr>
        <tr><td><code>translateY(y)</code></td><td>Defines a 3D translation, using only the value for the Y-axis</td></tr>
        <tr><td><code>translateZ(z)</code></td><td>Defines a 3D translation, using only the value for the Z-axis</td></tr>
        <tr><td><code>scale3d(x,y,z)</code></td><td>Defines a 3D scale transformation</td></tr>
        <tr><td><code>scaleX(x)</code></td><td>Defines a 3D scale transformation by giving a value for the X-axis</td></tr>
        <tr><td><code>scaleY(y)</code></td><td>Defines a 3D scale transformation by giving a value for the Y-axis</td></tr>
        <tr><td><code>scaleZ(z)</code></td><td>Defines a 3D scale transformation by giving a value for the Z-axis</td></tr>
        <tr><td><code>rotate3d(x,y,z,angle)</code></td><td>Defines a 3D rotation</td></tr>
        <tr><td><code>rotateX(angle)</code></td><td>Defines a 3D rotation along the X-axis</td></tr>
        <tr><td><code>rotateY(angle)</code></td><td>Defines a 3D rotation along the Y-axis</td></tr>
        <tr><td><code>rotateZ(angle)</code></td><td>Defines a 3D rotation along the Z-axis</td></tr>
        <tr><td><code>perspective(n)</code></td><td>Defines a perspective view for a 3D transformed element</td></tr>
      </tbody>
    </table>

    <h3>Example</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
      <pre class="code-block"><code>div {
   width: 100px;
   height: 100px;
   background: red;
   transform: rotateX(150deg);
}</code></pre>
    </div>


<h2>Practical Examples</h2><p>A classic flipping card interaction, where hovering over the container rotates the card 180 degrees in 3D space to reveal the back side:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;style&gt;
/* The parent MUST have perspective to create 3D depth */
.card-container {
   perspective: 1000px;
}

.card-inner {
   transition: transform 0.6s;
   transform-style: preserve-3d; /* Allows children to live in 3D space */
}

.card-container:hover .card-inner {
   transform: rotateY(180deg); /* Flips it horizontally */
}

.card-back {
   /* Hides the back side of the element when it is flipped away from the user */
   backface-visibility: hidden;
   transform: rotateY(180deg);
}
&lt;/style&gt;

&lt;div class="card-container" style="width:200px; height:300px;"&gt;
  &lt;div class="card-inner" style="position:relative; width:100%; height:100%;"&gt;
    &lt;div style="position:absolute; width:100%; height:100%; background:blue; color:white; display:flex; align-items:center; justify-content:center; backface-visibility:hidden;"&gt;FRONT (Hover me)&lt;/div&gt;
    &lt;div class="card-back" style="position:absolute; width:100%; height:100%; background:red; color:white; display:flex; align-items:center; justify-content:center; top:0; left:0;"&gt;BACK&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Forgetting the <code>perspective</code> property</strong> − If you apply <code>transform: rotateX(45deg)</code> without setting <code>perspective</code> on the parent, the element will just look like it awkwardly squished vertically in 2D space. Perspective gives the rotation 3D depth.</li><li><strong>Forgetting <code>backface-visibility: hidden</code></strong> − When building a flipping card, if you don't hide the backface, the user will just see a mirrored, backwards version of the front of the card when it rotates 180 degrees.</li><li><strong>Applying perspective to the transformed element itself</strong> − The <code>perspective</code> property must almost always be applied to the PARENT container holding the elements you want to transform in 3D.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Use <code>translate3d</code> for Performance Hacks</strong> − Even if you only need a 2D translation, writing <code>transform: translate3d(x, y, 0);</code> forces the browser to hardware-accelerate the element on the GPU, which can resolve flickering or lag on older devices.</li><li><strong>Keep perspective values between 500px and 1000px</strong> − A very low perspective (like 100px) creates a massive, distorted fisheye lens effect. A very high value (like 3000px) flattens the 3D effect completely.</li><li><strong>Prioritize Performance</strong> − 3D transforms are GPU-accelerated, meaning preferring <code>transform</code> over animating <code>top</code> or <code>left</code> will result in much smoother performance.</li></ul><h2>Interview Questions</h2><p><strong>Q: What does the <code>perspective</code> property do in CSS?</strong></p><p>A: It defines how far away the object is from the user. It gives a 3D-transformed element depth, determining how intense the 3D effect and foreshortening will appear.</p><p><strong>Q: What is the purpose of <code>transform-style: preserve-3d</code>?</strong></p><p>A: By default, nested elements are flattened into the 2D plane of their parent. <code>preserve-3d</code> allows children to maintain their own independent 3D positioning inside a 3D-transformed parent.</p><p><strong>Q: What happens if you don't use <code>backface-visibility: hidden</code> on a 180-degree flipped element?</strong></p><p>A: The element remains visible, but it appears completely mirrored (backwards) to the user.</p><h2>Summary</h2><p>3D Transforms bring depth and realism to web interfaces. By combining <code>rotateX</code>, <code>rotateY</code>, and <code>translateZ</code> with a strong <code>perspective</code> on the parent container, you can build engaging, hardware-accelerated interactions like flipping cards and 3D carousels with pure CSS.</p>
  </div>`
  },
  {
    id: 'css-variables',
    title: 'CSS Variables (Custom Properties)',
    content: `<div class="topic-header"><span class="topic-badge">Topic 42</span><h1>CSS Variables (Custom Properties)</h1></div><div class="topic-section"><h3>Introduction to CSS Variables</h3><p>CSS variables (officially known as custom properties) are entities defined by CSS authors that contain specific values to be reused throughout a document. They make it easy to maintain themes, colors, and sizing across a large project.</p><h3>Declaring and Using Variables</h3><p>Variables are declared using double hyphens (<code>--</code>) and accessed using the <code>var()</code> function.</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>/* Declaring globally */
:root {
   --primary-color: #3b82f6;
   --spacing-md: 16px;
}

/* Using variables */
.btn {
   background-color: var(--primary-color);
   padding: var(--spacing-md);
}</code></pre></div><h3>Fallback Values</h3><p>You can provide a fallback value in the <code>var()</code> function in case the variable is not defined.</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>.text {
   /* Will use #333 if --text-color is missing */
   color: var(--text-color, #333);
}</code></pre></div><h2>Scoping (Global vs Local)</h2><p>Variables follow CSS cascading rules. Variables declared in the <code>:root</code> pseudo-class are global. Variables declared inside a specific selector are local to that element and its children.</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>.card {
   --card-bg: #fff; /* Local variable */
   background-color: var(--card-bg);
}

.card-dark {
   --card-bg: #222; /* Overriding local variable */
}</code></pre></div><h3>Theming</h3><p>Variables make dark mode toggling extremely easy. You just swap the variable values!</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>:root {
   --bg-color: #ffffff;
   --text-color: #000000;
}

body.dark-theme {
   --bg-color: #1a1a1a;
   --text-color: #ffffff;
}

body {
   background-color: var(--bg-color);
   color: var(--text-color);
}</code></pre></div><h2>Practical Examples</h2>
<p>Here is a complete, working example using CSS variables for theming.</p>
<div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">HTML/CSS</span></div><div class="code-actions"><button type="button" class="btn-copy">Copy</button><button type="button" class="btn-try">Try It Yourself</button></div></div><pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         :root {
            --primary-color: #4CAF50;
            --text-color: white;
         }
         .btn {
            background-color: var(--primary-color);
            color: var(--text-color);
            padding: 15px 32px;
            text-align: center;
            font-size: 16px;
            border: none;
            cursor: pointer;
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;h1&gt;CSS Variables Example&lt;/h1&gt;
      &lt;button class="btn"&gt;Themed Button&lt;/button&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre></div>
<h2>Common Mistakes</h2><ul class="list"><li><strong>Case Sensitivity:</strong> CSS variables are case-sensitive. <code>--primaryColor</code> is not the same as <code>--primarycolor</code>.</li><li><strong>Forgetting the var() function:</strong> You cannot write <code>color: --primary-color;</code>. It must be <code>color: var(--primary-color);</code>.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Use :root for Globals:</strong> Always define your global design tokens (colors, typography, spacing) in the <code>:root</code> selector.</li><li><strong>Semantic Naming:</strong> Name variables based on their intent (<code>--color-danger</code>) rather than their value (<code>--color-red</code>).</li></ul><h2>Interview Questions</h2><ul class="list"><li><strong>What is the difference between CSS Variables and SASS Variables?</strong><br>CSS variables exist in the DOM, meaning they can be changed dynamically with JavaScript and respect the cascade. SASS variables are compiled away into hardcoded values.</li><li><strong>Can CSS variables be updated with JavaScript?</strong><br>Yes! You can use <code>element.style.setProperty('--var-name', 'value')</code>.</li></ul><h2>Summary</h2><p>CSS Custom Properties (Variables) bring programmatic power to raw CSS. They reduce repetition, enable dynamic theming (like light/dark mode) natively, and can be manipulated via JavaScript, making them an indispensable part of modern CSS architecture.</p>
</div>`
  },
  {
    id: 'user-interface',
    title: 'User Interface',
    content: `
  <div class="topic-header">
    <span class="topic-badge">Topic 43</span>
    <h1>User Interface</h1>
  </div>
  <div class="topic-section">
    <p>The user interface property allows you to change any element into one of several standard user interface elements. Some of the common properties which are used in CSS3 User interface are:</p>
    <table class="css-table">
      <thead>
        <tr>
          <th>Value</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>appearance</code></td>
          <td>Used to allow the user to make elements as user interface elements</td>
        </tr>
        <tr>
          <td><code>box-sizing</code></td>
          <td>Allows to users to fix elements on area in clear way</td>
        </tr>
        <tr>
          <td><code>icon</code></td>
          <td>Used to provide the icon on area</td>
        </tr>
        <tr>
          <td><code>resize</code></td>
          <td>Used to resize elements which are on area</td>
        </tr>
        <tr>
          <td><code>outline-offset</code></td>
          <td>Used to draw the behind the outline</td>
        </tr>
        <tr>
          <td><code>nav-down</code></td>
          <td>Used to move down when you have pressed on down arrow button in keypad</td>
        </tr>
        <tr>
          <td><code>nav-left</code></td>
          <td>Used to move left when you have pressed on left arrow button in keypad</td>
        </tr>
        <tr>
          <td><code>nav-right</code></td>
          <td>Used to move right when you have pressed on right arrow button in keypad</td>
        </tr>
        <tr>
          <td><code>nav-up</code></td>
          <td>Used to move up when you have pressed on up arrow button in keypad</td>
        </tr>
      </tbody>
    </table>
    <p>Example of <code>resize</code> property</p>
    <p>The <code>resize</code> property has three common values as shown below:</p>
    <table class="css-table">
      <thead>
        <tr>
          <th>Value</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>horizontal</code></td>
          <td>Allows the user to resize the element horizontally.</td>
        </tr>
        <tr>
          <td><code>vertical</code></td>
          <td>Allows the user to resize the element vertically.</td>
        </tr>
        <tr>
          <td><code>both</code></td>
          <td>Allows the user to resize the element both horizontally and vertically.</td>
        </tr>
      </tbody>
    </table>

<div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         div {
            border: 2px solid;
            padding: 20px;
            width: 300px;
            resize: both;
            overflow: auto;
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;div&gt;Hello World&lt;/div&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>

    <h3>CSS3 Outline offset</h3>
    <p>Outline means drawing a line around the element on the outside of the border.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         div {
            margin: 20px;
            padding: 10px;
            width: 300px;
            height: 100px;
            border: 5px solid pink;
            outline: 5px solid green;
            outline-offset: 15px;
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;div&gt;Hello World&lt;/div&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>



<h2>Practical Examples</h2><p>The single most important CSS UI reset used on every modern website to ensure padding doesn't blow out element widths, plus a user-friendly textarea constraint:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;style&gt;
/* The universal border-box reset */
*, *::before, *::after {
   box-sizing: border-box;
}

textarea {
   /* Prevents users from breaking the layout by dragging horizontally */
   resize: vertical;

   /* Custom focus ring that sits slightly away from the element */
   outline: 2px solid #3b82f6;
   outline-offset: 4px;
}
&lt;/style&gt;

&lt;textarea rows="4" cols="50"&gt;Try dragging the corner horizontally. You can\'t!&lt;/textarea&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Leaving <code>box-sizing</code> as <code>content-box</code></strong> − By default, adding 20px of padding to a 100px wide box makes the box 140px wide. This destroys grid layouts. <code>border-box</code> forces padding to shrink inward, keeping the box exactly 100px wide.</li><li><strong>Leaving textareas freely resizable</strong> − If you don't restrict <code>resize</code> on a <code>&lt;textarea&gt;</code>, users can drag the bottom-right corner horizontally and completely break your page layout.</li><li><strong>Removing the <code>outline</code> without replacement</strong> − As mentioned in pseudo-classes, writing <code>outline: none;</code> on focusable UI elements destroys keyboard accessibility.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Always apply <code>box-sizing: border-box</code> universally</strong> − This should literally be the first rule in every stylesheet you ever write. It makes CSS math logical and intuitive.</li><li><strong>Use <code>outline</code> instead of <code>border</code> for focus states</strong> − Outlines do not take up physical space, meaning they won't cause your layout to jump or shift when they appear on focus. Borders will.</li><li><strong>Maintain visible focus states</strong> − When customizing the <code>outline</code> of interactive elements, ensure the focus state remains highly visible for keyboard users.</li></ul><h2>Interview Questions</h2><p><strong>Q: What is the exact difference between <code>box-sizing: content-box</code> and <code>border-box</code>?</strong></p><p>A: In <code>content-box</code> (the default), adding padding or borders increases the total size of the element beyond its defined width/height. In <code>border-box</code>, the defined width/height is strictly maintained, and any padding or borders are subtracted from the internal space.</p><p><strong>Q: Why is <code>outline</code> generally preferred over <code>border</code> for indicating focus?</strong></p><p>A: <code>outline</code> is drawn outside the element's bounds and does not affect the layout or trigger reflows. Adding a <code>border</code> dynamically on focus adds physical pixels, causing the UI to jump.</p><p><strong>Q: How do you prevent a user from resizing a <code>textarea</code> entirely?</strong></p><p>A: <code>resize: none;</code>.</p><h2>Summary</h2><p>CSS User Interface properties refine how users physically interact with your layout. Declaring <code>box-sizing: border-box</code> is mandatory for sane layout math, while carefully controlling <code>resize</code> and styling accessible <code>outline</code> properties ensures your forms are robust and professional.</p>
  </div>`
  },
  {
    id: 'cursors',
    title: 'Cursors',
    content: `
  <div class="topic-header">
    <span class="topic-badge">Topic 44</span>
    <h1>Cursors</h1>
  </div>
  <div class="topic-section">
    <p>The <code>cursor</code> property of CSS allows you to specify the type of cursor that should be displayed to the user. One good usage of this property is in using images for submit buttons on forms. By default, when a cursor hovers over a link, the cursor changes from a pointer to a hand. However, it does not change form for a submit button on a form. Therefore, whenever someone hovers over an image that is a submit button, it provides a visual clue that the image is clickable. The following table shows the possible values for the <code>cursor</code> property:</p>

    <table class="css-table">
      <thead>
        <tr>
          <th>Value</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><code>auto</code></td><td>Shape of the cursor depends on the context area it is over.</td></tr>
        <tr><td><code>crosshair</code></td><td>A crosshair or plus sign</td></tr>
        <tr><td><code>default</code></td><td>An arrow</td></tr>
        <tr><td><code>pointer</code></td><td>A pointing hand</td></tr>
        <tr><td><code>move</code></td><td>The 'I' bar (Move indicator)</td></tr>
        <tr><td><code>e-resize</code></td><td>Edge of a box is to be moved right (east)</td></tr>
        <tr><td><code>ne-resize</code></td><td>Edge of a box is to be moved up and right (north/east)</td></tr>
        <tr><td><code>nw-resize</code></td><td>Edge of a box is to be moved up and left (north/west)</td></tr>
        <tr><td><code>n-resize</code></td><td>Edge of a box is to be moved up (north)</td></tr>
        <tr><td><code>se-resize</code></td><td>Edge of a box is to be moved down and right (south/east)</td></tr>
        <tr><td><code>sw-resize</code></td><td>Edge of a box is to be moved down and left (south/west)</td></tr>
        <tr><td><code>s-resize</code></td><td>Edge of a box is to be moved down (south)</td></tr>
        <tr><td><code>w-resize</code></td><td>Edge of a box is to be moved left (west)</td></tr>
        <tr><td><code>text</code></td><td>The I bar</td></tr>
        <tr><td><code>wait</code></td><td>An hour glass</td></tr>
        <tr><td><code>help</code></td><td>A question mark or balloon, ideal for use over help buttons</td></tr>
        <tr><td><code>&lt;url&gt;</code></td><td>The source of a cursor image file</td></tr>
      </tbody>
    </table>

    <p>NOTE: You should try to use only these values to add helpful information for users, and in places they would expect to see that cursor. For example, using the crosshair when someone hovers over a link can confuse visitors.</p>

    <h3>Example</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;p&gt;Move the mouse over the words to see the cursor change:&lt;/p&gt;
      &lt;div style="cursor:auto"&gt;Auto&lt;/div&gt;
      &lt;div style="cursor:crosshair"&gt;Crosshair&lt;/div&gt;
      &lt;div style="cursor:default"&gt;Default&lt;/div&gt;
      &lt;div style="cursor:pointer"&gt;Pointer&lt;/div&gt;
      &lt;div style="cursor:move"&gt;Move&lt;/div&gt;
      &lt;div style="cursor:e-resize"&gt;e-resize&lt;/div&gt;
      &lt;div style="cursor:ne-resize"&gt;ne-resize&lt;/div&gt;
      &lt;div style="cursor:nw-resize"&gt;nw-resize&lt;/div&gt;
      &lt;div style="cursor:n-resize"&gt;n-resize&lt;/div&gt;
      &lt;div style="cursor:se-resize"&gt;se-resize&lt;/div&gt;
      &lt;div style="cursor:sw-resize"&gt;sw-resize&lt;/div&gt;
      &lt;div style="cursor:s-resize"&gt;s-resize&lt;/div&gt;
      &lt;div style="cursor:w-resize"&gt;w-resize&lt;/div&gt;
      &lt;div style="cursor:text"&gt;text&lt;/div&gt;
      &lt;div style="cursor:wait"&gt;wait&lt;/div&gt;
      &lt;div style="cursor:help"&gt;help&lt;/div&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>


<h2>Practical Examples</h2><p>Applying specific cursors to UI elements to give users clear feedback about what can be clicked and what is disabled:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">HTML/CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;style&gt;
/* A custom div acting as a button needs the pointer cursor */
.custom-btn {
   cursor: pointer;
   background-color: #3b82f6;
}

/* A disabled submit button */
.submit-btn[disabled] {
   cursor: not-allowed;
   opacity: 0.5;
}

/* A read-only input field */
input[readonly] {
   cursor: default;
   background-color: #f3f4f6;
}
&lt;/style&gt;

&lt;div class="custom-btn" style="padding:10px; background:blue; color:white; width:fit-content; margin-bottom:10px;"&gt;Clickable Div&lt;/div&gt;
&lt;button class="submit-btn" disabled&gt;Disabled Button&lt;/button&gt;
&lt;br&gt;&lt;br&gt;
&lt;input type="text" value="Read only" readonly&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Forgetting <code>cursor: pointer</code> on custom interactive elements</strong> − If you attach a JavaScript click listener to a <code>&lt;div&gt;</code> or an SVG icon, the browser will not automatically change the cursor. Users won't know it's clickable unless you manually add <code>cursor: pointer</code>.</li><li><strong>Using <code>pointer</code> on non-clickable elements</strong> − Adding a pointer cursor to a decorative image just because it looks nice. This is extremely frustrating for users who will click it expecting something to happen.</li><li><strong>Assuming <code>&lt;button&gt;</code> tags have a pointer by default</strong> − Surprisingly, many browsers (like older Safari versions) use the standard <code>default</code> arrow for buttons. It is a best practice to explicitly declare <code>button { cursor: pointer; }</code> in your CSS reset.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Provide feedback for disabled states</strong> − Always use <code>cursor: not-allowed</code> combined with a lower opacity when a form button or input is temporarily disabled.</li><li><strong>Use <code>cursor: text</code> for custom inputs</strong> − If you build a complex custom search bar out of divs, ensure it shows the I-beam text cursor so users know they can click to type.</li><li><strong>Don't rely on cursors alone</strong> − Cursor changes are a visual-only cue. They shouldn't be the only indicator of interactivity, as keyboard-only and touchscreen users will not see them before interacting.</li></ul><h2>Interview Questions</h2><p><strong>Q: What cursor value indicates to a user that an element is a clickable link?</strong></p><p>A: <code>cursor: pointer;</code> (it typically displays as a hand with an extended index finger).</p><p><strong>Q: What cursor should be used for a form submit button that is currently disabled due to invalid inputs?</strong></p><p>A: <code>cursor: not-allowed;</code></p><p><strong>Q: Can you use a custom image as a cursor?</strong></p><p>A: Yes. You can use <code>cursor: url("custom-cursor.png"), auto;</code> (always provide a fallback like <code>auto</code> or <code>pointer</code> in case the image fails to load).</p><h2>Summary</h2><p>Cursors are a vital part of web accessibility and user experience. They provide immediate, non-verbal feedback to the user about how they can interact with the interface. Ensuring your clickable elements have pointers and your disabled elements show restrictions builds trust and intuition into your design.</p>
  </div>`
  },
  {
    id: 'text',
    title: 'Text',
    content: `
  <div class="topic-header">
    <span class="topic-badge">Topic 45</span>
    <h1>Text</h1>
  </div>
  <div class="topic-section">
    <p>The following are the most commonly used text properties in CSS3:</p>
    <table class="css-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>text-align-last</code></td>
          <td>Used to align the last line of the text</td>
        </tr>
        <tr>
          <td><code>text-emphasis</code></td>
          <td>Used to emphasize text and color</td>
        </tr>
        <tr>
          <td><code>text-overflow</code></td>
          <td>Used to determine how overflowed content that is not displayed is signaled to users</td>
        </tr>
        <tr>
          <td><code>word-break</code></td>
          <td>Used to break the line based on word</td>
        </tr>
        <tr>
          <td><code>word-wrap</code></td>
          <td>Used to break the line and wrap onto the next line</td>
        </tr>
      </tbody>
    </table>
    <h3>Text-overflow</h3>
    <p>The <code>text-overflow</code> property determines how overflowed content that is not displayed is signaled to users. The sample example of text overflow is shown as follows −</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         p.text1 {
            white-space: nowrap;
            width: 200px;
            border: 1px solid #000000;
            overflow: hidden;
            text-overflow: clip;
         }
         p.text2 {
            white-space: nowrap;
            width: 200px;
            border: 1px solid #000000;
            overflow: hidden;
            text-overflow: ellipsis;
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;b&gt;Original Text:&lt;/b&gt;
&lt;p&gt;This is an Hello World used to demonstrate CSS styling. It provides enough content to see how text wrapping, spacing, and other typographic properties affect the layout of your web page.&lt;/p&gt;
&lt;b&gt;Text overflow: clip:&lt;/b&gt;
&lt;p class="text1"&gt;This is an Hello World used to demonstrate CSS styling. It provides enough content to see how text wrapping, spacing, and other typographic properties affect the layout of your web page.&lt;/p&gt;
&lt;b&gt;Text overflow: ellipsis:&lt;/b&gt;
&lt;p class="text2"&gt;This is an Hello World used to demonstrate CSS styling. It provides enough content to see how text wrapping, spacing, and other typographic properties affect the layout of your web page.&lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>
    <h3>CSS3 Word Breaking</h3>
    <p>The <code>word-break</code> property is used to break the line. The following code shows a sample code of word breaking:</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         p.text1 {
            width: 140px;
            border: 1px solid #000000;
            word-break: keep-all;
         }
         p.text2 {
            width: 140px;
            border: 1px solid #000000;
            word-break: break-all;
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;b&gt;Line break at hyphens:&lt;/b&gt;
&lt;p class="text1"&gt;This is an Hello World used to demonstrate CSS styling. It provides enough content to see how text wrapping, spacing, and other typographic properties affect the layout of your web page.&lt;/p&gt;
&lt;b&gt;Line break at any character:&lt;/b&gt;
&lt;p class="text2"&gt;This is an Hello World used to demonstrate CSS styling. It provides enough content to see how text wrapping, spacing, and other typographic properties affect the layout of your web page.&lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>
    <h3>CSS word wrapping</h3>
    <p>Word wrapping is used to break the line and wrap onto the next line. The following code shows a sample syntax:</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>p {
   word-wrap: break-word;
}</code></pre>
    </div>


<h2>Practical Examples</h2><p>The standard <code>"Holy Trinity"</code> of CSS properties required to gracefully truncate a long username with an ellipsis (<code>...</code>):</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;style&gt;
.user-profile-name {
   width: 200px; /* Constrain the width */

   /* 1. Prevent text from wrapping to the next line */
   white-space: nowrap;
   /* 2. Hide whatever bleeds outside the box */
   overflow: hidden;
   /* 3. Add the <code>"..."</code> effect at the cutoff point */
   text-overflow: ellipsis;
}
&lt;/style&gt;

&lt;div class="user-profile-name" style="background:#eee; padding:10px; width:150px;"&gt;JohnDoeWithAVeryLongNameThatWillBeTruncated&lt;/div&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Using text-overflow alone</strong> − Applying <code>text-overflow: ellipsis;</code> does absolutely nothing by itself. It MUST be paired with <code>white-space: nowrap;</code> and <code>overflow: hidden;</code> on a block-level element with a defined width.</li><li><strong>Using <code>word-break: break-all</code> on normal paragraphs</strong> − This forces words to break exactly at the container edge, completely disregarding syllables or hyphens (e.g., breaking the word <code>"Hello"</code> into <code>"He"</code> and <code>"llo"</code>). This ruins readability.</li><li><strong>Applying truncation to multi-line text</strong> − The standard <code>text-overflow: ellipsis</code> only works for single-line text. Multi-line truncation requires complex Flexbox line-clamping techniques (<code>-webkit-line-clamp</code>).</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Understand Vendor Prefixes</strong> − Some newer or experimental CSS properties need a browser-specific prefix (like <code>-webkit-</code> or <code>-moz-</code>) to work in certain browsers before becoming fully standardized. For instance, the <code>-webkit-line-clamp</code> property specifically needs <code>display: -webkit-box</code> and <code>-webkit-box-orient: vertical</code> alongside it to work.</li><li><strong>Use <code>overflow-wrap: break-word</code> globally</strong> − Add this to your base CSS reset. It ensures that if a user pastes a massive, unbroken 100-character URL into a comment, it will wrap gracefully instead of breaking the entire page layout.</li><li><strong>Reserve ellipsis for UI constraints</strong> − Use the ellipsis truncation pattern strictly for tight UI components (like navigation bars, data tables, or card titles). Avoid truncating actual paragraph content.</li></ul><h2>Interview Questions</h2><p><strong>Q: What three CSS properties are required to create a single-line text ellipsis (<code>...</code>) effect?</strong></p><p>A: <code>white-space: nowrap</code>, <code>overflow: hidden</code>, and <code>text-overflow: ellipsis</code>.</p><p><strong>Q: What is the difference between <code>word-break: break-all</code> and <code>overflow-wrap: break-word</code>?</strong></p><p>A: <code>break-all</code> aggressively snaps words exactly at the edge of the box regardless of spacing. <code>break-word</code> is smarter; it will only snap and break a word if the single word is so long that it cannot fit on its own line (like a long URL).</p><p><strong>Q: How do you prevent a specific line of text from wrapping?</strong></p><p>A: By applying <code>white-space: nowrap;</code>.</p><h2>Summary</h2><p>Advanced text properties are essential for defensive CSS. You cannot control what data users will input into your layout. Mastering <code>text-overflow: ellipsis</code> for single-line UI elements and <code>overflow-wrap: break-word</code> for user-generated content ensures your layout will never blow out and horizontally scroll, no matter how long the text is.</p>
  </div>`
  },
  {
    id: 'layers',
    title: 'Layers',
    content: `
  <div class="topic-header">
    <span class="topic-badge">Topic 46</span>
    <h1>Layers</h1>
  </div>
  <div class="topic-section">
    <p>CSS gives you the opportunity to create layers of various divisions. The CSS layers refer to applying the <code>z-index</code> property to elements that overlap with each other.</p>
    <p>The <code>z-index</code> property is used along with the <code>position</code> property to create an effect of layers. You can specify which element should come on top and which element should come at the bottom.</p>
    <p>A <code>z-index</code> property can help you to create more complex webpage layouts. The following is an example which shows how to create layers in CSS:</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;body&gt;
      &lt;div style="background-color:red;
         width:300px;
         height:100px;
         position:relative;
         top:10px;
         left:80px;
         z-index:2"&gt;
      &lt;/div&gt;
      &lt;div style="background-color:yellow;
         width:300px;
         height:100px;
         position:relative;
         top:-60px;
         left:35px;
         z-index:1;"&gt;
      &lt;/div&gt;
      &lt;div style="background-color:green;
         width:300px;
         height:100px;
         position:relative;
         top:-220px;
         left:120px;
         z-index:3;"&gt;
      &lt;/div&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>



<h2>Practical Examples</h2><p>A well-structured z-index hierarchy ensuring a modal overlay always appears above a fixed header navigation:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;style&gt;
.header-nav {
   position: fixed;
   z-index: 100; /* Stays above normal scrolling content */
}

.modal-overlay {
   position: fixed;
   z-index: 1000; /* Must be higher than the header */
}
&lt;/style&gt;

&lt;div style="position:relative; height:150px;"&gt;
  &lt;div class="header-nav" style="top:0; left:0; width:100%; background:black; color:white; padding:10px;"&gt;Nav (z-index 100)&lt;/div&gt;
  &lt;div class="modal-overlay" style="top:50px; left:50px; width:200px; background:rgba(0,0,0,0.8); color:white; padding:20px;"&gt;Modal (z-index 1000)&lt;/div&gt;
&lt;/div&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Applying z-index to static elements</strong> − <code>z-index</code> ONLY works if the element has a <code>position</code> property of <code>relative</code>, <code>absolute</code>, <code>fixed</code>, or <code>sticky</code>. Applying it to a <code>static</code> (default) element does absolutely nothing.</li><li><strong>Z-index Wars (99999)</strong> − Frustrated developers often slap <code>z-index: 99999</code> on an element when it isn't showing up. This makes future layering conflicts impossible to debug.</li><li><strong>Misunderstanding Stacking Contexts</strong> − If a parent element has <code>z-index: 10</code>, its child can have <code>z-index: 9999</code>, but it will NEVER appear above an outside element with <code>z-index: 11</code>. The parent traps the child in a local context.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Establish a Global Z-Index Scale</strong> − Use a sensible scale in your project (e.g., 10 for dropdowns, 100 for sticky headers, 1000 for modals/tooltips) to maintain order.</li><li><strong>Create new stacking contexts carefully</strong> − Be aware that properties like <code>opacity</code> (less than 1) and <code>transform</code> automatically generate a new local stacking context, which can cause unexpected layering bugs.</li></ul><h2>Interview Questions</h2><p><strong>Q: Why is my <code>z-index</code> not working?</strong></p><p>A: The two most common reasons are: 1) The element does not have a <code>position</code> property applied (it is still <code>static</code>). 2) The element is trapped inside a parent's lower Stacking Context.</p><p><strong>Q: What is a Stacking Context?</strong></p><p>A: It is a local 3D layering system created by certain CSS properties (like positioned elements with z-index, opacity, or transforms). Child elements are layered relative to this local context, and their z-index values cannot break out above the parent's layer.</p><p><strong>Q: If two elements overlap and neither has a z-index, which one appears on top?</strong></p><p>A: The one that is defined last in the HTML source code will appear on top.</p><h2>Summary</h2><p>Z-index provides 3D depth to 2D web pages. While applying a z-index is simple, mastering it requires a deep understanding of Stacking Contexts—knowing that layering is not global, but rather grouped by parent containers. Keep your z-index numbers sensible and always remember to apply positioning!</p>
  </div>`
  },
  {
    id: 'rules',
    title: '@ Rules',
    content: `
  <div class="topic-header">
    <span class="topic-badge">Topic 47</span>
    <h1>@ Rules</h1>
  </div>
  <div class="topic-section">
    <p>This chapter will cover the following important @ rules −</p>
    <table class="css-table">
      <thead>
        <tr>
          <th>Rule</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>@import</td>
          <td>Imports another style sheet into the current style sheet.</td>
        </tr>
        <tr>
          <td>@charset</td>
          <td>Indicates the character set the style sheet uses.</td>
        </tr>
        <tr>
          <td>@font-face</td>
          <td>Used to exhaustively describe a font face for use in a document.</td>
        </tr>
        <tr>
          <td>!important</td>
          <td>Indicates that a user-defined rule should take precedence over the author's style sheets.</td>
        </tr>
      </tbody>
    </table>
    <p>NOTE − There are other @ rules which we will cover in subsequent chapters.</p>
    <h2>import rule</h2>
    <p>The <code>@import</code> rule allows you to import styles from another style sheet. It should appear right at the start of the style sheet before any of the rules, and its value is a URL.</p>
    <p>It can be written in one of the two following ways −</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>/*
@import "mystyle.css";
or
@import url("mystyle.css");
.......other CSS rules .....
*/</code></pre>
    </div>

    <p>The significance of the <code>@import</code> rule is that it allows you to develop your style sheets with a modular approach. You can create various style sheets and then include them wherever you need them.</p>
    <h2>charset Rule</h2>
    <p>If you are writing your document using a character set other than ASCII or ISO-8859-1 you might want to set the <code>@charset</code> rule at the top of your style sheet to indicate what character set the style sheet is written in.</p>
    <p>The <code>@charset</code> rule must be written right at the beginning of the style sheet without even a space before it. The value is held in quotes and should be one of the standard character-sets. For example −</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>@charset "iso-8859-1";
/* .......other CSS rules ..... */</code></pre>
    </div>

    <h2>font-face Rule</h2>
    <p>The <code>@font-face</code> rule is used to exhaustively describe a font face for use in a document. <code>@font-face</code> may also be used to define the location of a font for download, although this may run into implementation-specific limits.</p>
    <p>In general, <code>@font-face</code> is extremely complicated, and its use is not recommended for any except those who are experts in font metrics.</p>
    <h3>Example</h3>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>@font-face {
    font-family: "Scarborough Light";
    src: url("http://www.font.site/s/scarbo-lt");
}
@font-face {
    font-family: Santiago;
    src: local("Santiago"), url("http://www.font.site/s/santiago.tt") format("truetype");
    unicode-range: U+??,U+100-220;
    font-size: all;
    font-family: sans-serif;
}</code></pre>
    </div>
    <h2>!important Rule</h2>
    <p>Cascading Style Sheets cascade. It means that the styles are applied in the same order as they are read by the browser. The first style is applied and then the second and so on.</p>
    <p>The <code>!important</code> rule provides a way to make your CSS cascade. It also includes the rules that are to be applied always. A rule having an <code>!important</code> property will always be applied, no matter where that rule appears in the CSS document.</p>
    <p>For example, in the following style sheet, the paragraph text will be black, even though the first style property applied is red:</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>p { color: #ff0000; }
p { color: #000000; }</code></pre>
    </div>

    <p>So, if you wanted to make sure that a property always applied, you would add the <code>!important</code> property to the tag. So, to make the paragraph text always red, you should write it as follows −</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">HTML/CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
            Copy
          </button>
          <button type="button" class="btn-try">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
            Try It Yourself
          </button>
        </div>
      </div>
      <pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style type="text/css"&gt;
         p { color: #ff0000 !important; }
         p { color: #000000; }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;p&gt;Hello World&lt;/p&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre>
    </div>
    <p>Here you have made <code>p { color: #ff0000 !important; }</code> mandatory. Now this rule will always apply, even if you have defined another rule like <code>p { color: #000000; }</code>.</p>

    <h2>CSS FILTERS - TEXT AND IMAGE EFFECTS</h2>
    <p>You can use CSS filters to add special visual effects — like blurring, adjusting brightness/contrast, or shifting colors — to images and other elements on a webpage, without needing extra image files. The standard CSS <code>filter</code> property (part of the CSS Filter Effects Module) lets you apply these effects directly in CSS, and it is supported in all modern browsers.</p>
    <h3>blur()</h3>
    <p>Applies a Gaussian blur to the input image.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
<pre class="code-block"><code>img {
    filter: blur(5px);
}</code></pre>
    </div>
    <h3>brightness()</h3>
    <p>Applies a linear multiplier to input image, making it appear more or less bright.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
<pre class="code-block"><code>img {
    filter: brightness(150%);
}</code></pre>
    </div>
    <h3>contrast()</h3>
    <p>Adjusts the contrast of the input.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
<pre class="code-block"><code>img {
    filter: contrast(200%);
}</code></pre>
    </div>
    <h3>drop-shadow()</h3>
    <p>Applies a drop shadow effect to the input image.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
<pre class="code-block"><code>img {
    filter: drop-shadow(4px 4px 10px rgba(0,0,0,0.5));
}</code></pre>
    </div>
    <h3>grayscale()</h3>
    <p>Converts the input image to grayscale.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
<pre class="code-block"><code>img {
    filter: grayscale(100%);
}</code></pre>
    </div>
    <h3>hue-rotate()</h3>
    <p>Applies a hue rotation on the input image.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
<pre class="code-block"><code>img {
    filter: hue-rotate(90deg);
}</code></pre>
    </div>
    <h3>invert()</h3>
    <p>Inverts the samples in the input image.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
<pre class="code-block"><code>img {
    filter: invert(100%);
}</code></pre>
    </div>
    <h3>opacity()</h3>
    <p>Applies transparency to the samples in the input image.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
<pre class="code-block"><code>img {
    filter: opacity(50%);
}</code></pre>
    </div>
    <h3>saturate()</h3>
    <p>Saturates the input image.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
<pre class="code-block"><code>img {
    filter: saturate(200%);
}</code></pre>
    </div>
    <h3>sepia()</h3>
    <p>Converts the input image to sepia.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
<pre class="code-block"><code>img {
    filter: sepia(100%);
}</code></pre>
    </div>
    <h3>Multiple Filters</h3>
    <p>You can combine multiple filter functions in one declaration by separating them with a space.</p>
    <div class="code-wrap">
      <div class="code-header">
        <div class="code-header-left">
          <div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div>
          <span class="code-lang-tag">CSS</span>
        </div>
        <div class="code-actions">
          <button type="button" class="btn-copy">Copy</button>
          <button type="button" class="btn-try">Try It Yourself</button>
        </div>
      </div>
<pre class="code-block"><code>img {
    filter: contrast(150%) brightness(1.1);
}</code></pre>
  </div>


<h2>Practical Examples</h2><p>Defining a custom font face and creating a smooth, infinite rotating animation using CSS rules:</p><div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">CSS</span></div><div class="code-actions"><button type="button" class="btn-copy"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg> Copy</button><button type="button" class="btn-try"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg> Try It Yourself</button></div></div><pre class="code-block"><code>&lt;style&gt;
/* 1. The @font-face rule imports a custom font */
@font-face {
   font-family: <code>"MyCustomFont"</code>;
   src: url(<code>"fonts/my-font.woff2"</code>) format(<code>"woff2"</code>);
}

/* 2. The @keyframes rule defines the animation logic */
@keyframes spin {
   from { transform: rotate(0deg); }
   to   { transform: rotate(360deg); }
}

.loading-spinner {
   animation: spin 2s linear infinite;
}
&lt;/style&gt;

&lt;div class="loading-spinner" style="width:50px; height:50px; border:5px solid #ccc; border-top-color:blue; border-radius:50%;"&gt;&lt;/div&gt;</code></pre></div><h2>Common Mistakes</h2><ul class="list"><li><strong>Overusing <code>@import</code></strong> − Using <code>@import</code> inside a CSS file to load other CSS files forces the browser to download them sequentially (one after the other), crippling page load speed. Too many <code>@import</code> statements block rendering much more than a single combined stylesheet.</li><li><strong>Placing <code>@charset</code> incorrectly</strong> − If you use the <code>@charset <code>"UTF-8"</code>;</code> rule, it MUST be the very first character of the CSS file. If there is a space or comment before it, it fails.</li><li><strong>Not providing fallback formats in <code>@font-face</code></strong> − Only providing a <code>.ttf</code> file. Modern development requires optimized formats like <code>.woff2</code> for fast loading.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Link CSS in HTML, don't @import</strong> − Always use multiple <code>&lt;link rel="stylesheet"&gt;</code> tags in your HTML <code>&lt;head&gt;</code> so the browser can download stylesheets in parallel. Too many <code>@import</code> statements block rendering much more than a single combined stylesheet.</li><li><strong>Use <code>@keyframes</code> for UI interactions</strong> − CSS animations are hardware-accelerated. Prefer them over JavaScript-based animations for simple spinners, loaders, and hover effects.</li></ul><h2>Interview Questions</h2><p><strong>Q: Why is <code>@import</code> considered bad practice for web performance?</strong></p><p>A: Because it blocks parallel downloading. The browser must download, parse, and execute the main CSS file before it even discovers the <code>@import</code> rule, delaying the download of the secondary stylesheet.</p><p><strong>Q: What does the <code>@font-face</code> rule do?</strong></p><p>A: It allows developers to provide custom typography by instructing the browser to download a font file hosted on the server, rather than relying on fonts installed on the user's local machine.</p><p><strong>Q: What is the difference between a CSS property and an @-rule?</strong></p><p>A: A property applies styles directly to an element (e.g., <code>color: red</code>). An @-rule (at-rule) dictates broad behavioral instructions to the CSS parser itself, such as importing files, defining animations, or setting media queries.</p><h2>Summary</h2><p>At-rules (<code>@</code>) give CSS its programmatic power. They dictate how the browser parses the file (<code>@charset</code>), bring in external assets (<code>@font-face</code>), and define complex motion paths (<code>@keyframes</code>). Understanding these rules unlocks the advanced, dynamic capabilities of modern CSS.</p>
  </div>\n  `
  },
  {
    id: 'validations',
    title: 'Validations',
    content: `<div class="topic-header">
    <span class="topic-badge">Topic 48</span>
    <h1>Validations</h1>
  </div>
  <div class="topic-section">
    <p>Validation is the process of checking something against a rule. When you are a beginner, it is very common that you will commit many mistakes in writing your CSS rules. How will you make sure whatever you have written is 100% accurate and up to the W3 quality standards?</p>
    <p>If you use CSS, your code needs to be correct. Improper code may cause unexpected results in how your page looks or functions.</p>
    <p>If you want to validate your CSS style sheet embedded in an HTML document, you should first check that the HTML you use is valid.</p>
    <p>You can use the following tools to check the validity of your CSS:</p>
    <ul class="list">
        <li><strong>W3C CSS Validator (World Wide Web Consortium):</strong> This validator checks your CSS by either file upload, direct input, or using URI. This validator helps you to locate all the errors in your CSS.</li>
        <li><strong>The WDG CSS Check Validator:</strong> Lets you validate your CSS by direct input, file upload, and using URI. Errors will be listed by line and column numbers if you have any. Errors usually come with links to explain the reason of error.</li>
        <li>A CSS validator checks your Cascading Style Sheets to make sure that they comply with the CSS standards set by the W3 Consortium. There are a few validators which will also tell you which CSS features are supported by which browsers since not all browsers are equal in their CSS implementation.</li>
    </ul>

    <h2>Why Validate Your HTML Code?</h2>
    <p>There are a number of reasons why you should validate your code. But major ones are −</p>
    <ul class="list">
        <li>It helps cross-browser, cross-platform, and future compatibility.</li>
        <li>A good quality website increases search engine visibility.</li>
        <li><strong>Professionalism:</strong> As a web developer, your code should not raise errors while seen by the visitors.</li>
        <li><strong>Accessibility Foundation:</strong> Valid, well-structured markup is a crucial foundation for accessibility tools like screen readers to parse and interpret your page correctly.</li>
    </ul>

<h2>Practical Examples</h2>
<p>Example of form validation states.</p>
<div class="code-wrap"><div class="code-header"><div class="code-header-left"><div class="code-dots"><div class="code-dot red"></div><div class="code-dot amber"></div><div class="code-dot green"></div></div><span class="code-lang-tag">HTML/CSS</span></div><div class="code-actions"><button type="button" class="btn-copy">Copy</button><button type="button" class="btn-try">Try It Yourself</button></div></div><pre class="code-block"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
   &lt;head&gt;
      &lt;style&gt;
         input:invalid {
            border: 2px solid red;
         }
         input:valid {
            border: 2px solid green;
         }
      &lt;/style&gt;
   &lt;/head&gt;
   &lt;body&gt;
      &lt;h1&gt;Form Validation CSS&lt;/h1&gt;
      &lt;p&gt;Enter an email address:&lt;/p&gt;
      &lt;input type="email" value="invalid-email"&gt;
      &lt;br&gt;&lt;br&gt;
      &lt;input type="email" value="valid@email.com"&gt;
   &lt;/body&gt;
&lt;/html&gt;</code></pre></div>


<h3>Validation Workflow</h3><p>A real-world workflow for validating your CSS:</p><ul class="list"><li>Go to the official <strong>W3C CSS Validator</strong> (jigsaw.w3.org/css-validator).</li><li>Upload your <code>styles.css</code> file or paste your code.</li><li>Review the output: Errors (in red) mean your CSS has syntax flaws and might break. Warnings (in yellow) usually indicate vendor prefixes or deprecated properties.</li></ul><h2>Common Mistakes</h2><ul class="list"><li><strong>Ignoring warnings completely</strong> − While you don't always have to fix every warning (e.g., experimental vendor prefixes often trigger warnings), ignoring them completely can lead to keeping deprecated, slow CSS properties in your codebase.</li><li><strong>Relying only on IDE linting</strong> − VS Code will catch a missing semicolon, but it might not know that a specific combination of properties (like trying to set a margin on a table row) is technically invalid CSS according to W3C specs.</li></ul><h2>Best Practices</h2><ul class="list"><li><strong>Automate your validation</strong> − In modern professional environments, use tools like <strong>Stylelint</strong> in your build pipeline. It validates your CSS automatically every time you save, ensuring errors never reach production.</li><li><strong>Validate before major deployments</strong> − If your layout is acting strangely in an older browser, run it through the W3C validator. It often points out a simple typo that the browser silently failed on.</li></ul><h2>Interview Questions</h2><p><strong>Q: Why is it important to validate your CSS?</strong></p><p>A: Browsers are notoriously forgiving; they will silently ignore broken CSS rules without crashing the page. Validation helps you find these hidden errors, ensuring your site renders identically across different browsers and devices.</p><p><strong>Q: What is the official tool used to validate CSS?</strong></p><p>A: The W3C (World Wide Web Consortium) CSS Validator.</p><p><strong>Q: Does a valid CSS file guarantee your website will look correct?</strong></p><p>A: No. Validation only checks syntax and specification compliance. It cannot check if your design is visually appealing, accessible, or functionally what you intended to build.</p><h2>Summary</h2><p>CSS Validation is a crucial quality assurance step. Because web browsers hide CSS errors rather than crashing, developers can easily accumulate broken rules. Integrating validation tools like Stylelint into your workflow ensures your stylesheets remain clean, performant, and cross-browser compatible.</p>
</div>`
  }
];
