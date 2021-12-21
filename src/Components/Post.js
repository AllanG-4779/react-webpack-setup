import React from "react";

function Post({ posts }) {
  return (
    <div>
      <div className="holder">
        {posts.map((item, index) => {
          return <div key={index}>{item.title}</div>;
        })}
      </div>
    </div>
  );
}

export default Post;
