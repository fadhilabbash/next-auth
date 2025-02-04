const mockUser = {
  id: "1",
  name: "Mock User",
  email: "center.alqamar@gmail.com",
  password: "password123",
};

export const getUserFromDb = async (email: string) => {
  if (email === mockUser.email) {
    return mockUser;
  }
  return null;
};
