const mockUser = {
  id: "1",
  name: "Mock User",
  email: "center.alqamar@gmail.com",
  password: "password123",
  accessToken: "Wxmw2iO7qpNvikbl+aum2y2X/3ICUd5L+cw5aT6kSaA",
  //refreshToken: "Wxmw2iO7qpNvikbl+aum2y2X/3ICUd5L+cw5aT6kSaA",
};

export const getUserFromDb = async (email: string) => {
  if (email === mockUser.email) {
    return mockUser;
  }
  return null;
};
