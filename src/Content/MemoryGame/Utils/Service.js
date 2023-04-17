import { randomList } from "./Mapper";

const url = "https://api.github.com/repos/facebook/react/contributors?";

export const fetchData = async () => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(randomList(json));
    return randomList(json);
  } catch (error) {
    console.log("error", error);
  }
};
