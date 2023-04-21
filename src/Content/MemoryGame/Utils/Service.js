import { randomList } from "./Mapper";

const url = "https://api.github.com/repos/facebook/react/contributors?";

export const fetchData = async () => {
  const response = await fetch(url);
  const json = await response.json();
  return randomList(json);
};
