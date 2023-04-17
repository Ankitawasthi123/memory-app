import * as Mapper from "./Mapper";
import * as Service from "./Service";

const mockResponseValue = [
  {
    login: "eps1lon",
    id: 12292047,
    node_id: "MDQ6VXNlcjEyMjkyMDQ3",
    avatar_url: "https://avatars.githubusercontent.com/u/12292047?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/eps1lon",
    html_url: "https://github.com/eps1lon",
    followers_url: "https://api.github.com/users/eps1lon/followers",
    following_url:
      "https://api.github.com/users/eps1lon/following{/other_user}",
    gists_url: "https://api.github.com/users/eps1lon/gists{/gist_id}",
    starred_url: "https://api.github.com/users/eps1lon/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/eps1lon/subscriptions",
    organizations_url: "https://api.github.com/users/eps1lon/orgs",
    repos_url: "https://api.github.com/users/eps1lon/repos",
    events_url: "https://api.github.com/users/eps1lon/events{/privacy}",
    received_events_url: "https://api.github.com/users/eps1lon/received_events",
    type: "User",
    site_admin: false,
    contributions: 73,
  },
  {
    login: "aweary",
    id: 6886061,
    node_id: "MDQ6VXNlcjY4ODYwNjE=",
    avatar_url: "https://avatars.githubusercontent.com/u/6886061?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/aweary",
    html_url: "https://github.com/aweary",
    followers_url: "https://api.github.com/users/aweary/followers",
    following_url: "https://api.github.com/users/aweary/following{/other_user}",
    gists_url: "https://api.github.com/users/aweary/gists{/gist_id}",
    starred_url: "https://api.github.com/users/aweary/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/aweary/subscriptions",
    organizations_url: "https://api.github.com/users/aweary/orgs",
    repos_url: "https://api.github.com/users/aweary/repos",
    events_url: "https://api.github.com/users/aweary/events{/privacy}",
    received_events_url: "https://api.github.com/users/aweary/received_events",
    type: "User",
    site_admin: false,
    contributions: 66,
  },
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
    login: "nhunzaker",
    id: 590904,
    node_id: "MDQ6VXNlcjU5MDkwNA==",
    avatar_url: "https://avatars.githubusercontent.com/u/590904?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/nhunzaker",
    html_url: "https://github.com/nhunzaker",
    followers_url: "https://api.github.com/users/nhunzaker/followers",
    following_url:
      "https://api.github.com/users/nhunzaker/following{/other_user}",
    gists_url: "https://api.github.com/users/nhunzaker/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/nhunzaker/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/nhunzaker/subscriptions",
    organizations_url: "https://api.github.com/users/nhunzaker/orgs",
    repos_url: "https://api.github.com/users/nhunzaker/repos",
    events_url: "https://api.github.com/users/nhunzaker/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/nhunzaker/received_events",
    type: "User",
    site_admin: false,
    contributions: 94,
  },
  {
    login: "trueadm",
    id: 1519870,
    node_id: "MDQ6VXNlcjE1MTk4NzA=",
    avatar_url: "https://avatars.githubusercontent.com/u/1519870?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/trueadm",
    html_url: "https://github.com/trueadm",
    followers_url: "https://api.github.com/users/trueadm/followers",
    following_url:
      "https://api.github.com/users/trueadm/following{/other_user}",
    gists_url: "https://api.github.com/users/trueadm/gists{/gist_id}",
    starred_url: "https://api.github.com/users/trueadm/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/trueadm/subscriptions",
    organizations_url: "https://api.github.com/users/trueadm/orgs",
    repos_url: "https://api.github.com/users/trueadm/repos",
    events_url: "https://api.github.com/users/trueadm/events{/privacy}",
    received_events_url: "https://api.github.com/users/trueadm/received_events",
    type: "User",
    site_admin: false,
    contributions: 436,
  },
];

describe("Service js", () => {
  beforeAll(() => {
    global.fetch = () =>
      Promise.resolve({
        json: () => Promise.resolve([]),
      });
  });

  afterAll(() => {
    global.fetch = unmockedFetch;
  });

  // it("Check service unit test ", async () => {
  //     jest.spyOn("fetch").mockResolvedValue(mockResponseValue);
  //     const result = await Service.fetchData();
  //     expect(result).toEqual(Mapper.randomList(mockResponseValue));
  // });

  test("works", async () => {
    const json = await Service.fetchData();
    expect(Array.isArray(json)).toEqual(true);
    expect(json.length).toEqual(0);
  });
});
