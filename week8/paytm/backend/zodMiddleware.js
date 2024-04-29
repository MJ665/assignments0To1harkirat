const zod = require("zod");
const { User } = require("./db");

// Define Zod schema for validation
const userSignUpSchema = zod.object({
  username: zod.string(),
  password: zod.string().min(8),
  firstName: zod.string().min(2),
  lastName: zod.string().min(2).max(50),
});

const signUpMiddleware = async (req, res, next) => {
  const body = req.body;
  console.log(body);

  try {
    // Validate request body using Zod
    const zodRes = userSignUpSchema.safeParse(body);

    if (!zodRes.success) {
      res
        .status(400)
        .json({ msg: "Zod sign-up error", errors: zodRes.error.errors });
      return; // Return early to avoid further processing
    }

    // Check if user already exists
    console.log(body.username);
    console.log(typeof body.username);
    const existingUser = await User.exists({ username: req.body.username });

    if (existingUser) {
      res.status(400).json({ msg: "User already exists" });
      return; // Return early if user exists
    }

    // Create a new user if not existing
    const newSignUpUser = new User({
      username: body.username,
      password: body.password,
      firstName: body.firstName,
      lastName: body.lastName,
    });

    // Save the new user to the database
    await newSignUpUser.save();

    // Move to the next middleware if successful
    next();
  } catch (err) {
    // Handle errors occurring during the entire process
    res.status(500).json({ msg: "Error during sign-up", error: err.message });
  }
};

module.exports = {
  signUpMiddleware,
};
