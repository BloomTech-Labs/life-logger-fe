/** @jsx jsx */
import { jsx } from 'theme-ui';
import AddTaskButton from "./AddTaskButton.js";


const Footer = () => {
  return (
    <div sx={{display: "flex", justifyContent: "flex-end", height: "200px",  position: "absolute", width: "100%",
    bottom: "0"}}>
    <footer
        sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        }}>
      <AddTaskButton/>
  </footer>
  </div>
  );
};

export default Footer;