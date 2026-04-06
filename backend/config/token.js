import jwt from "jsonwebtoken";

const genToken = async (userId) => {
  try {
    const token = jwt.sign(
      { id: userId },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    return token; // 👈 ye hi missing tha
  } catch (error) {
    console.log(error);
  }
};

export default genToken;