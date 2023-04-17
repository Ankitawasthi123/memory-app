import {
  render,
  cleanup,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import * as React from "react";
import * as svcAPI from "./Utils/Service";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";
import MemoryGame from "./MemoryGame";

const mockResponseValue = [
  {
    login: "subtleGradient",
    id: 4117,
    node_id: "MDQ6VXNlcjQxMTc=",
    avatar_url: "https://avatars.githubusercontent.com/u/4117?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/subtleGradient",
    html_url: "https://github.com/subtleGradient",
    followers_url: "https://api.github.com/users/subtleGradient/followers",
    following_url:
      "https://api.github.com/users/subtleGradient/following{/other_user}",
    gists_url: "https://api.github.com/users/subtleGradient/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/subtleGradient/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/subtleGradient/subscriptions",
    organizations_url: "https://api.github.com/users/subtleGradient/orgs",
    repos_url: "https://api.github.com/users/subtleGradient/repos",
    events_url: "https://api.github.com/users/subtleGradient/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/subtleGradient/received_events",
    type: "User",
    site_admin: false,
    contributions: 115,
  },
  {
    login: "acdlite",
    id: 3624098,
    node_id: "MDQ6VXNlcjM2MjQwOTg=",
    avatar_url: "https://avatars.githubusercontent.com/u/3624098?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/acdlite",
    html_url: "https://github.com/acdlite",
    followers_url: "https://api.github.com/users/acdlite/followers",
    following_url:
      "https://api.github.com/users/acdlite/following{/other_user}",
    gists_url: "https://api.github.com/users/acdlite/gists{/gist_id}",
    starred_url: "https://api.github.com/users/acdlite/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/acdlite/subscriptions",
    organizations_url: "https://api.github.com/users/acdlite/orgs",
    repos_url: "https://api.github.com/users/acdlite/repos",
    events_url: "https://api.github.com/users/acdlite/events{/privacy}",
    received_events_url: "https://api.github.com/users/acdlite/received_events",
    type: "User",
    site_admin: false,
    contributions: 1274,
  },
  {
    login: "syranide",
    id: 1714255,
    node_id: "MDQ6VXNlcjE3MTQyNTU=",
    avatar_url: "https://avatars.githubusercontent.com/u/1714255?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/syranide",
    html_url: "https://github.com/syranide",
    followers_url: "https://api.github.com/users/syranide/followers",
    following_url:
      "https://api.github.com/users/syranide/following{/other_user}",
    gists_url: "https://api.github.com/users/syranide/gists{/gist_id}",
    starred_url: "https://api.github.com/users/syranide/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/syranide/subscriptions",
    organizations_url: "https://api.github.com/users/syranide/orgs",
    repos_url: "https://api.github.com/users/syranide/repos",
    events_url: "https://api.github.com/users/syranide/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/syranide/received_events",
    type: "User",
    site_admin: false,
    contributions: 77,
  },
  {
    login: "koba04",
    id: 250407,
    node_id: "MDQ6VXNlcjI1MDQwNw==",
    avatar_url: "https://avatars.githubusercontent.com/u/250407?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/koba04",
    html_url: "https://github.com/koba04",
    followers_url: "https://api.github.com/users/koba04/followers",
    following_url: "https://api.github.com/users/koba04/following{/other_user}",
    gists_url: "https://api.github.com/users/koba04/gists{/gist_id}",
    starred_url: "https://api.github.com/users/koba04/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/koba04/subscriptions",
    organizations_url: "https://api.github.com/users/koba04/orgs",
    repos_url: "https://api.github.com/users/koba04/repos",
    events_url: "https://api.github.com/users/koba04/events{/privacy}",
    received_events_url: "https://api.github.com/users/koba04/received_events",
    type: "User",
    site_admin: false,
    contributions: 67,
  },
  {
    login: "cpojer",
    id: 13352,
    node_id: "MDQ6VXNlcjEzMzUy",
    avatar_url: "https://avatars.githubusercontent.com/u/13352?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/cpojer",
    html_url: "https://github.com/cpojer",
    followers_url: "https://api.github.com/users/cpojer/followers",
    following_url: "https://api.github.com/users/cpojer/following{/other_user}",
    gists_url: "https://api.github.com/users/cpojer/gists{/gist_id}",
    starred_url: "https://api.github.com/users/cpojer/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/cpojer/subscriptions",
    organizations_url: "https://api.github.com/users/cpojer/orgs",
    repos_url: "https://api.github.com/users/cpojer/repos",
    events_url: "https://api.github.com/users/cpojer/events{/privacy}",
    received_events_url: "https://api.github.com/users/cpojer/received_events",
    type: "User",
    site_admin: false,
    contributions: 70,
  },
  {
    login: "gaearon",
    id: 810438,
    node_id: "MDQ6VXNlcjgxMDQzOA==",
    avatar_url: "https://avatars.githubusercontent.com/u/810438?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/gaearon",
    html_url: "https://github.com/gaearon",
    followers_url: "https://api.github.com/users/gaearon/followers",
    following_url:
      "https://api.github.com/users/gaearon/following{/other_user}",
    gists_url: "https://api.github.com/users/gaearon/gists{/gist_id}",
    starred_url: "https://api.github.com/users/gaearon/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/gaearon/subscriptions",
    organizations_url: "https://api.github.com/users/gaearon/orgs",
    repos_url: "https://api.github.com/users/gaearon/repos",
    events_url: "https://api.github.com/users/gaearon/events{/privacy}",
    received_events_url: "https://api.github.com/users/gaearon/received_events",
    type: "User",
    site_admin: false,
    contributions: 1666,
  },
];

describe("Memory Game", () => {
  let wrapper = null;
  beforeEach(() => {
    jest.spyOn(svcAPI, "fetchData").mockResolvedValue(mockResponseValue);
    wrapper = render(<MemoryGame />);
  });

  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });

  it("Check choice one and choice not matched", async () => {
    const { rerender } = wrapper;
    rerender(<MemoryGame />);
    await waitFor(() => {
      expect(svcAPI.fetchData).toHaveBeenCalledTimes(1);
    });

    const selectBoxOne = screen.getAllByTestId("4117")[0];
    fireEvent.click(selectBoxOne);
    const selectBoxTwo = screen.getAllByTestId("13352")[1];
    fireEvent.click(selectBoxTwo);
  });

  it("Check complete game over Unit test case", async () => {
    const { rerender } = wrapper;
    rerender(<MemoryGame />);
    await waitFor(() => {
      expect(svcAPI.fetchData).toHaveBeenCalledTimes(1);
    });

    const selectBox1 = screen.getAllByTestId("4117")[0];
    fireEvent.click(selectBox1);
    const selectBox2 = screen.getAllByTestId("4117")[1];
    fireEvent.click(selectBox2);

    const selectBox3 = screen.getAllByTestId("3624098")[0];
    fireEvent.click(selectBox3);
    const selectBox4 = screen.getAllByTestId("3624098")[1];
    fireEvent.click(selectBox4);

    const selectBox5 = screen.getAllByTestId("1714255")[0];
    fireEvent.click(selectBox5);
    const selectBox6 = screen.getAllByTestId("1714255")[1];
    fireEvent.click(selectBox6);

    const selectBox7 = screen.getAllByTestId("250407")[0];
    fireEvent.click(selectBox7);
    const selectBox8 = screen.getAllByTestId("250407")[1];
    fireEvent.click(selectBox8);

    const selectBox9 = screen.getAllByTestId("13352")[0];
    fireEvent.click(selectBox9);
    const selectBox10 = screen.getAllByTestId("13352")[1];
    fireEvent.click(selectBox10);

    const selectBox11 = screen.getAllByTestId("810438")[0];
    fireEvent.click(selectBox11);
    const selectBox12 = screen.getAllByTestId("810438")[1];
    fireEvent.click(selectBox12);

    const newGameBtn = screen.getByText("New Game!");
    fireEvent.click(newGameBtn);
  });
});
