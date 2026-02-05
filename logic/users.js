function registerUser(user) {
  const { name, mobile, location, language, role } = user;

  if (!name || !mobile || !location || !language || !role) {
    throw new Error("All fields are required");
  }

  if (!/^[6-9]\d{9}$/.test(mobile)) {
    throw new Error("Invalid mobile number");
  }

  return {
    id: Date.now(),
    name,
    mobile,
    location,
    language,
    role
  };
}

module.exports = { registerUser };
