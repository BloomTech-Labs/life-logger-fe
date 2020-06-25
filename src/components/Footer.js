/** @jsx jsx */
import { jsx } from 'theme-ui';

const Footer = () => {
  return (
    <div sx={{display: "flex", justifyContent: "center"}}>
    <footer
        sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        position: "absolute",
        bottom: "0",
        p: 2,
        variant: 'footer',
        }}>
    <div>© LyfeLogger, 2020</div>
  </footer>
  </div>
  );
};

export default Footer;