import { FacebookLogo, InstagramLogo } from "phosphor-react";

export function Copyright() {
  const date = new Date().getFullYear();
  return (
    <div className="copyright">
      <div className="social">
        <FacebookLogo
          color="#FF445C"
          weight="fill"
          size={48}
          onClick={() =>
            window.open("https://facebook.com/smabeauty", "_blank")
          }
        />
        <InstagramLogo
          color="#FF445C"
          weight="fill"
          size={48}
          onClick={() =>
            window.open("https://instagram.com/smabeauty", "_blank")
          }
        />
      </div>
      Copyright SMAbeauty {date}
    </div>
  );
}


Copyright.defaultProps = {
  // img: "/images/banner.png",
};