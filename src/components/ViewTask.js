/** @jsx jsx */
import { jsx } from 'theme-ui';

import { useEffect } from 'react';
import axios from 'axios';

const ViewTask = () => {
  useEffect((values) => {
    axios
      .get(
        'https://lyfe-logger-be.herokuapp.com/api/tasks/findByUserId/:user_id',
        values
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log('Error getting tasks', err);
      });
  });

  return <div></div>;
};
export default ViewTask;
