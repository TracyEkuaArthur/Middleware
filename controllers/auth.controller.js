const Login = (req, res) => {
  res.send("Login Successful");
};

const Register = (req, res) => {
  res.send("Registration Succesfull");
};

module.exports = {
  Login,
  Register,
};
