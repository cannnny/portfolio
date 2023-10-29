import { SiGithub, SiWantedly } from "react-icons/si";

const Contact = () => {
  const iconSize = "40px";

  // 連絡先一覧
  const contacts = [
    {
      service: "github",
      icon: <SiGithub size={iconSize} />,
      url: "https://github.com/cannnny",
    },
    {
      service: "wantedly",
      icon: <SiWantedly size={iconSize} />,
      url: "https://www.wantedly.com/id/yumi_dotera",
    },
  ];

  return (
    <div className="contents contact">
      <h2>Contact</h2>
      <div className="contact-inner border">
        <div className="button contact-icons">
          {contacts.map((item) => {
            return (
              <a href={item.url} alt="" key={item.service}>
                <div className="contact-icon">{item.icon}</div>
                <p>{item.url}</p>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
