import React, { useState } from "react";
import { useEffect } from "react";

const useFetch = (url, intialValue) => {
  const [items, setItems] = useState(intialValue);
  useEffect(() => {
    (async () => {
      fetch(url)
        .then((response) => response.json())
        .then((response) => setItems(response))
        .catch((e) => {
          throw new Error("Failed at getting items");
        });
    })();
  }, []);
  return [items];
};

export default function PostList() {
  const [items] = useFetch(
    process.env.REACT_APP_API_BASE_URL + "/posts?_limit=5",
    []
  );

  return items.map((item) => (
    <Post key={item.id} title={item.title} body={item.body} />
  ));
}
const Post = ({ title, body }) => (
  <div data-testid="post">
    <span data-testid="post-title">title : {title}</span>
    <br />
    <span data-testid="post-body">body : {body}</span>
    <br />
    <br />
  </div>
);
