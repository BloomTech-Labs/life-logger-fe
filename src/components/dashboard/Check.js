/** @jsx jsx */
import { jsx } from 'theme-ui';

const Check = () => {
  return (
    <div
      sx={{
        position: `relative`,
        height: `1.5rem`,
        width: `1.5rem`,
        display: `inline-block`,

        '::after': {
          content: `""`,
          position: `absolute`,
          left: `9px`,
          top: `5px`,
          width: `5px`,
          height: `10px`,
          borderStyle: `solid`,
          borderColor: `text`,
          borderWidth: `0 3px 3px 0`,
          transform: `rotate(45deg)`,
        },
      }}
    ></div>
  );
};

export default Check;
