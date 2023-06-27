import {
  BsChevronRight,
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";

import { footerLinks } from "../constants";
import { contacts } from "../constants";
import { layout } from "../style";
import fontStyle from "../style";
import { logo } from "../assets";

const Footer = () => {
  const socials = [
    {
      icon: <BsTwitter />,
      link: "https://www.twitter.com/",
    },
    {
      icon: <BsLinkedin />,
      link: "https://www.linkedin.com/",
    },
    {
      icon: <BsInstagram />,
      link: "https://www.instagram.com/",
    },
    {
      icon: <BsFacebook />,
      link: "https://www.facebook.com/",
    },
  ];

  return (
    <footer
      id="footer"
      className="bg-emerald-50 dark:bg-emerald-950 text-sm pt-0 pb-[30px] px-0"
    >
      <div className="footer-top pt-[60px] pb-[30px] px-0 border-t-[#37332a] border-b-[#28251f] border-t border-solid border-b">
        <div className={layout.container}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            <div className="footer-info mb-[30px] text-emerald-950 dark:text-emerald-50">
              <img src={logo} alt="hestate" className="w-36 ml-2 mb-1 inline" />
              {contacts.map((contact, index) => (
                <p key={index} className="text-sm leading-6 mb-0">
                  {contact.name}
                  <br />
                </p>
              ))}
              <div className="mt-8">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-lg inline-block leading-none text-center w-9 h-9 duration-300 mr-1 px-0 py-2 hover:text-emerald-900 dark:hover:text-emerald-200 hover:no-underline"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
            {footerLinks.map((footerlink, index) => (
              <div key={index} className=" footer-links text-emerald-500">
                <h4 className={`${fontStyle.body}`}>{footerlink.title}</h4>
                <ul className="m-0 p-0">
                  {footerlink.links.map((link, index) => (
                    <li key={index} className="flex items-center px-0 pt-2.5">
                      <BsChevronRight className="text-sm dark:text-emerald-500 text-emerald-600 mr-2" />{" "}
                      <a
                        href={link.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-emerald-950 dark:text-emerald-50 transition-[0.3s] inline-block leading-none hover:text-emerald-800 dark:hover:text-emerald-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={layout.container}>
        <div className="text-center pt-[30px] dark:text-white text-emerald-950">
          © Copyright{" "}
          <strong>
            <span>
              <img src={logo} alt="hestate" className="w-16 ml-2 mb-1 inline" />
            </span>
          </strong>
        </div>
        <div className="text-center text-[13px] dark:text-white text-emerald-950 pt-2.5">
          Designed by{" "}
          <a
            href="https://twitter.com/adeayodev"
            rel="noreferrer"
            target="_blank"
            className="text-emerald-600"
          >
            Adeayodev
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
