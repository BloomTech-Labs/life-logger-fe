export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: ['40em', '56em', '64em'],
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#002550',
    background: '#fff',
    primary: '#82D1FF',
    secondary: '#002550',
    muted: '#EDEDED',
    modes: {
      dark: {
        text: '#062647',
        background: 'hsl(230, 25%, 18%)',
        primary: '#CABBF2',
        secondary: '#9034DF',
        highlight: 'hsl(260, 20%, 40%)',
        purple: 'hsl(290, 100%, 80%)',
        muted: '#1c1e2e',
        gray: 'hsl(210, 50%, 60%)',
      },
    },
  },
  cards: {
    primary: {
      padding: `16px`,
      borderRadius: `10px`,
      boxShadow:
        '0 3px 3px 0 rgba(0, 0, 0, 0.16), 0 3px 3px 0 rgba(0, 0, 0, 0.23)',
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'muted',
    },
  },
  buttons: {
    primary: {
      bg: 'primary',
      color: 'text',
      transition: `all 0.15s ease-in-out`,

      '&:hover': {
        bg: 'secondary',
        color: 'background',

        '&:focus': {
          outline: 'none',
        },
      },
    },
  },
  forms: {
    input: {
      border: 'none',
      borderBottom: '1px solid',
      borderColor: 'muted',
      borderRadius: '0',
      transition: `all 0.15s ease-in-out`,

      '&:focus': {
        border: 'none',
        outline: 'none',
        borderBottom: '1px solid',
        borderColor: 'text',
      },
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1,
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: {
      color: 'primary',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    img: {
      maxWidth: '100%',
    },
  },
};
