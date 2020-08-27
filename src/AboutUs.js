/** @jsx jsx */
import { jsx } from 'theme-ui';

function AboutUs() {
  return (
    <div>
      <h1
        sx={{
          textAlign: 'center',
        }}
      >
        About LifeLogger
      </h1>
      <p
        sx={{
          paddingLeft: '20%',
          paddingRight: '20%',
        }}
      >
        Life Logger is an ongoing Lambda Labs project that seeks to help
        consumers organize their regular, non-recurring expenses. Its main focus
        is on helping consumers track expenses that may be recurring, but not at
        the same time monthly or yearly. For example, oil changes or tire
        rotations. Air conditioning maintenance or exterminator visits. We all
        have these expenses and they never happen at the same time every month
        or year.
      </p>
      <p
        sx={{
          paddingLeft: '20%',
          paddingRight: '20%',
        }}
      >
        Lambda Labs students learn the process of building a real-world
        application. From defining User Stories, to using Trello boards, to
        Release Canvases...Life Logger and many other Lambda projects like it,
        groups students in a team environment and allows them the freedom to
        develop their vision and ideas as if they were true, hired developers.
      </p>

      <p
        sx={{
          paddingLeft: '20%',
          paddingRight: '20%',
        }}
      >
        We inherited Life Logger from a previous labs team. Although we did not
        start from scratch, the advantages afforded to us by working on other
        developers&apos; code, has been a valuable learning tool. From analyzing
        a front-end and making UX/UI decisions, to reconfiguring the back-end to
        handle the new front-end...starting from scratch may not have been as
        beneficial. This team-dynamic also caused some interpersonal conflict.
        This is bound to happen in every team-based environment. Learning how to
        cope and mitigate those conflicts as a professional developer will
        translate in future positions.
      </p>

      <p
        sx={{
          paddingLeft: '20%',
          paddingRight: '20%',
        }}
      >
        This project was fun start-to-finish. It brought to the forefront
        weaknesses and strenghts in all of us, but in the end, we all learned
        from one another. We helped each other and realized exactly what it
        takes to build something like Life Logger. Hard work. Dedication.
        Collaboration...and most importantly an open-mind for other views.
      </p>
      <h2
        sx={{
          paddingLeft: '20%',
        }}
      >
        The Development Team
      </h2>
      <ul
        sx={{
          paddingLeft: '21%',
        }}
      >
        <li>TL-Ana Carrillo</li>
        <li>Janessa Garrow</li>
        <li>David Moates</li>
        <li>Wade Coplen</li>
        <li>Jackie Atwood</li>
      </ul>
    </div>
  );
}

export default AboutUs;
