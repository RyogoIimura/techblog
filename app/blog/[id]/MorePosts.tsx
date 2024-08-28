import React, { FC } from "react";

import MorePostItem from "./MorePostItem";
import "./MorePosts.modules.css";
import { getMoreBlog } from "@/app/utils/supabaseFunctions";

type Props = {
  user_id: string;
};

const MorePosts: FC<Props> = React.memo(async (props) => {
  const { user_id } = props;
  const { data: morePosts } = await getMoreBlog(user_id);
  return (
    <section className="morePosts">
      <h2 className="text-2xl">More Posts</h2>
      <div className="grid md:grid-cols-3 gap-5 md:gap-40 mt-7">
        {morePosts &&
          morePosts.map((post) => (
            <MorePostItem
              key={post.id}
              image_path={post.image_path}
              title={post.title}
            />
          ))}
      </div>
    </section>
  );
});

MorePosts.displayName = "BlogMorePosts";

export default MorePosts;
