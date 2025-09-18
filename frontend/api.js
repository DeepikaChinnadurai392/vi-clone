export const getInternships = async () => {
  try {
    const response = await fetch("http://localhost:8081/internships"); // backend URL
    if (!response.ok) {
      throw new Error("Failed to fetch internships");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
