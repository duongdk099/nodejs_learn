exports.signup = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    // Use the create method to insert a new record into the database
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password,
    });

    // Respond with the newly created user (excluding sensitive information like password)
    // It's a good practice to not send back sensitive data
    const userResponse = {
      id: newUser.id,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
    };

    res.status(201).json(userResponse);
  } catch (error) {
    // Handle errors, for example, validation errors or unique constraint errors
    console.error("Signup Error:", error);
    res.status(400).json({ error: error.message });
  }
};

exports.getAllUsers = (req, res) => {
  console.log(req.body);
  res.send("You will have the users here");
};

exports.createUser = (req, res) => {
  console.log(req.body);
  res.send("You will create a new user here");
};

exports.updateUser = (req, res) => {
  console.log(req.body);
  res.send("You will update a user here");
};

exports.deleteUser = (req, res) => {
  console.log(req.body);
  res.send("You will delete a user here");
};
