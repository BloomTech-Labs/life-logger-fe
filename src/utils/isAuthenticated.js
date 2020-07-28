import axios from 'axios';

export const isAuthenticated = async (token) => {
  try {
    const res = await axios.post(
      `https://lyfe-logger-be.herokuapp.com/api/auth/validate-token`,
      null,
      {
        headers: {
          authorization: token,
        },
      }
    );
    console.log('isAuthenticated res: ', res);

    return res.data.isAuthenticated;
  } catch (err) {
    console.log('isAuthenticated err: ', err);
    return false;
  }
};
