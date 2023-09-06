import { FaTwitter } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

const Contact = () => {
  return (
    <div className="contents contact">
      <h2>Contact</h2>
      <div className="contact-inner border">
        <div className="icons button contact-icons">
          <a href="https://twitter.com/canypuff" alt="">
            <FaTwitter size={"40px"} />
          </a>
          <a href="https://github.com/cannnny" alt="">
            <SiGithub size={"40px"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
