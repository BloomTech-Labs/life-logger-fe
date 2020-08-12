/** @jsx jsx */
import { jsx, useColorMode } from 'theme-ui';
import styled from '@emotion/styled';

// dark mode toggle from https://github.com/gatsbyjs/gatsby/blob/master/www/src/components/dark-mode-toggle.js

const IconWrapper = styled.button`
  /*
    both padding and appearance are here to help
    Mobile Safari rendering correctly, at least on
    older iOS versions — tested on iOS 12.4.2 / iPhone 5s
  */
  padding: 0;
  appearance: none;
  align-items: center;
  background: transparent;
  grid-column-start: 3;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  display: inline-flex;
  height: 40px;
  justify-content: center;
  /*
    roughly compensates for the additional whitespace of this specific
    "icon button" in relation to its "social icon" siblings;
    leave the left untouched for some separation from the aforementioned
  */
  margin-right: 20px;
  opacity: 0.75;
  /*
    allows us to use the default :focus
    outline without the "moon mask" being taken into account
    by the browser when rendering the outline —
    not an ideal solution, but good for now
  */
  overflow: hidden;
  position: relative;
  /*
    scaling to 75% of the original size
    scales the "moon" shape from 24px to 18px,
    aligning it with the rest of the main nav's
    "social icons"; sun and its rays are slightly larger;
    good for now, too ;-)
  */
  transform: scale(0.75);
  transition: opacity 0.3s ease;
  vertical-align: middle;
  width: 40px;
  &:hover {
    opacity: 1;
  }
`;

const MoonOrSun = styled.div`
  ${({ isDark, theme: t }) => `
    border: ${isDark ? `4px` : `2px`} solid
    ${t.colors.text};
  background: ${t.colors.text};
  border-radius: 50%;
  height: 24px;
  overflow: ${isDark ? `visible` : `hidden`};
  position: relative;
  transform: scale(${isDark ? 0.55 : 1});
  transition: all 0.45s ease;
  width: 24px;
  &::before {
    border-radius: 50%;
    border: 2px solid ${t.colors.text};
    content: '';
    height: 24px;
    opacity: ${isDark ? 0 : 1};
    position: absolute;
    right: -9px;
    top: -9px;
    transform: translate(${isDark ? `14px, -14px` : `0, 0`});
    transition: transform 0.45s ease;
    width: 24px;
  }
  &::after {
    border-radius: 50%;
    box-shadow: 0 -23px 0 ${t.colors.text},
      0 23px 0 ${t.colors.text},
      23px 0 0 ${t.colors.text},
      -23px 0 0 ${t.colors.text},
      15px 15px 0 ${t.colors.text},
      -15px 15px 0 ${t.colors.text},
      15px -15px 0 ${t.colors.text},
      -15px -15px 0 ${t.colors.text};
    content: '';
    height: 8px;
    left: 50%;
    margin: -4px 0 0 -4px;
    position: absolute;
    top: 50%;
    width: 8px;
    transform: scale(${isDark ? 1 : 0});
    transition: all 0.35s ease;

    ${t.breakpoints[1]} {
      transform: scale(${isDark ? 0.92 : 0});
    }
  }
    `}
`;

// background color must match background color of header
const MoonMask = styled.div`
  ${({ isDark, theme: t }) => `
  background: ${t.colors.primary};
  border-radius: 50%;
  border: 0;
  height: 24px;
  opacity: ${isDark ? 0 : 1};
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(${isDark ? `14px, -14px` : `0, 0`});
  transition: background 0.25s ease, transform 0.45s ease;
  width: 24px;
`}
`;

const DarkModeToggle = () => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;

  const toggleColorMode = (e) => {
    e.preventDefault();
    setColorMode(isDark ? `light` : `dark`);
  };
  const label = isDark ? `Activate light mode` : `Activate dark mode`;

  return (
    <IconWrapper
      isDark={isDark}
      onClick={toggleColorMode}
      aria-label={label}
      title={label}
    >
      <MoonOrSun isDark={isDark} />
      <MoonMask isDark={isDark} />
    </IconWrapper>
  );
};

export default DarkModeToggle;
