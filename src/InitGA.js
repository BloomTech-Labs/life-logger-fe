import ReactGA from 'react-ga';

//tracks page view.
export const initGA = () => {
  ReactGA.initialize('UA-161545292-1');
  ReactGA.pageview(window.location.pathname);
};

// export const GARouteTracker = () => {
//   console.log("tracking route change");
//   history.listen(location => {
//     ReactGA.set({ page: location.pathname });
//     ReactGA.pageview(location.pathname);
//   });
// };
