const authstate = async (req, res) => {
  try {
    res.json({
      accessToken: req.cookies.accessToken,
      _id: req.body._id,
      isAuth: true,
    });
  } catch (error) {
    res.status(400).json({
      isAuth: false,
      message: "plz login again",
      err: error,
    });
  }
};

module.exports = { authstate };
