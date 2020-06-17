import axios from 'axios';

export const isAuthenticated = async (token) => {
  try {
    const res = await axios.post(
      `${process.env.BACKEND_HOST}/api/auth/validate-token`,
      null,
      {
        headers: {
          authorization: token,
        },
      }
    );

    return res.data.isAuthenticated;
  } catch (err) {
    return false;
  }
};
