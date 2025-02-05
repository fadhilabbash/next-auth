export const ENDPOINTS = {
    blogs: "/blogs",
    createBlog: "/blogs",
    updateBlog: (id: number|string) => `/blogs/${id}`,
    deleteBlog: (id: number|string) => `/blogs/${id}`,
  };