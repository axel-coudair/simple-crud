import { render, screen } from "@testing-library/react";
import PostList from "./PostList";

test("Number of post is 5", async () => {
  render(<PostList />);
  const posts = await screen.findAllByTestId("post");
  expect(posts.length).toBe(5);
});

test("Titles starts with 'title : '", async () => {
  render(<PostList />);
  const titles = await screen.findAllByTestId("post-title");
  titles.map((title) => {
    expect(title).toHaveTextContent(/^title : /);
  });
});

test("Body starts with 'body : '", async () => {
  render(<PostList />);
  const bodys = await screen.findAllByTestId("post-body");
  bodys.map((body) => {
    expect(body).toHaveTextContent(/^body : /);
  });
});
