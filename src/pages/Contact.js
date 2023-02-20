import { useState } from "react";
import "../style/contact.css";
function Contact() {
  const [cookies, setCookies] = useState(false);
  return (
    <div className="Header">
      <h1 className="title" title="must display">
        checkbox examples
      </h1>
      <p className="paragraph" title="must display">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <label htmlFor="cookiesCheckbox">Accept cookies</label>
      <input
        type="checkbox"
        id="cookieCheckbox"
        onClick={() => setCookies(!cookies)}
      />
      <article title="cookie confirmation">
        {cookies
          ? "Cookies accepted Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
          : "You must accept cookies "}
      </article>
    </div>
  );
}

export default Contact;
