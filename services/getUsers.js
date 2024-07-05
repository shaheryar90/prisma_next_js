export default async function getUsers() {
  try {
    const res = await fetch("http://localhost:3000/register/v1");
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json(); // Correctly parse the response as JSON
    console.log(data, "Fetched data");
    return data;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return null;
  }
}

// this is called static site generation
