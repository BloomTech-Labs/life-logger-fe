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

    return res.data.isAuthenticated;
  } catch (err) {
    console.log('isAuthenticated err: ', err);
    return false;
  }
};
