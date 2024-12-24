import { UserLogin } from "../interfaces/UserLogin";
// TODO: make a POST request to the login route
const login = async (userInfo: UserLogin) => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInfo),
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    throw new Error("Failed to log in");
  }

}



export { login };
