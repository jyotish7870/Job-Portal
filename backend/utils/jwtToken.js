export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();
  // const options = {
  //   expires: new Date(
  //     Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
  //   ),
  //   httpOnly: true, // Set httpOnly to true
  // };

  res.status(201).cookie("token", token).json({
    success: true,
    user,
    message,
    token,
  });
};
