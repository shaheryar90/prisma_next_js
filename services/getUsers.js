export default async function getUsers() {
  const res = await fetch("https://dummyjson.com/users");
 return res.json()
}


// this is called static site generation