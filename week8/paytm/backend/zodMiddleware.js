const zod = require("zod");
const { User } = require("./db");
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("./exportEnv")



// Define Zod schema for validation
const userSignUpSchema = zod.object({
  username: zod.string(),
  password: zod.string().min(8),
  firstName: zod.string().min(2),
  lastName: zod.string().min(2).max(50),
});

const signUpMiddleware = async (req, res, next) => {
  console.log(req.headers);
  const signUpReqHeader = {
    username: req.headers['username'], // Case-insensitive but case must match
    password: req.headers['password'],
    firstName: req.headers['firstname'], // Matches header key in Postman
    lastName: req.headers['lastname'], // Matches header key in Postman
  };
  
  console.log(signUpReqHeader);

  try {
    // Validate request signUpReqHeader using Zod
    const zodRes = userSignUpSchema.safeParse(signUpReqHeader);

    if (!zodRes.success) {
      res
        .status(400)
        .json({ msg: "Zod sign-up error", errors: zodRes.error.errors });
      return; // Return early to avoid further processing
    }

    // Check if user already exists
    console.log(signUpReqHeader.username);
    console.log(typeof signUpReqHeader.username);
    const existingUser = await User.exists({ username: signUpReqHeader.username });

    if (existingUser) {
      res.status(400).json({ msg: "User already exists" });
      
 // Return early if user exists
    }

    // Create a new user if not existing
    const newSignUpUser = new User({
      username: signUpReqHeader.username,
      password: signUpReqHeader.password,
      firstName: signUpReqHeader.firstName,
      lastName: signUpReqHeader.lastName,
    });

    // Save the new user to the database
    await newSignUpUser.save();
    const token= jwt.sign(signUpReqHeader,JWT_SECRET)
    res.locals.token = token
    next()
    // Move to the next middleware if successful
    next();
  } catch (err) {
    // Handle errors occurring during the entire process
    res.status(500).json({ msg: "Error during sign-up", error: err.message });
  }
};














// Define Zod schema for validation
const userSignInSchema = zod.object({
  username: zod.string(),
  password: zod.string().min(8),
 
});

const signInMiddleware = async (req, res, next) => {
  const signInReqHeader = {
    username: req.headers['username'], // Case-insensitive but case must match
    password: req.headers['password']
  };
  console.log(signInReqHeader);

  try {
    // Validate request signInReqHeader using Zod
    const zodRes = userSignInSchema.safeParse(signInReqHeader);

    if (!zodRes.success) {
      res
        .status(400)
        .json({ msg: "Zod sign-up error", errors: zodRes.error.errors });
      return; // Return early to avoid further processing
    }

    // Check if user already exists
    console.log(signInReqHeader.username);
    console.log(typeof signInReqHeader.username);
    const helloUser = await User.findOne({ username: signInReqHeader.username,password:signInReqHeader.password  });

    if (helloUser) {

      const token= jwt.sign(signInReqHeader,JWT_SECRET)
      res.status(200).json({msg:"generated you jwt token", token:token})
      next()
    }
  } catch (err) {
    // Handle errors occurring during the entire process
    return res.status(500).json({ msg: "Error during sign-up", error: err.message });
  }
};












const authMiddleware  = async(req,res,next)=>{
  const authHeader = req.headers.authorization
  if(!authHeader || !authHeader.startWith("Bearer ")){
    return res.status(400).json({msg:"you are sending invalid auth token"})
  }
const token = authHeader.split(" ")[1]
try{
  const decode = jwt.verify(token, JWT_SECRET)
  res.locals.decode =  decode
  next()
}catch(err){
  return res.status(400).json({msg:"your token not got verifiec",err:err})
}
}










module.exports = {
  signUpMiddleware,signInMiddleware
};
