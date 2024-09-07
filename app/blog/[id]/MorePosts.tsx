import React, { FC } from "react";

import MorePostItem from "./MorePostItem";
import "./MorePosts.modules.css";
import { getMoreBlog } from "@/app/utils/supabaseFunctions";

type Props = {
  user_id: string;
  post_id: string;
};

const MorePosts: FC<Props> = React.memo(async (props) => {
  const { user_id, post_id } = props;
  const { data: morePosts } = await getMoreBlog(user_id, post_id);
  return (
    morePosts &&
    morePosts.length > 0 && (
      <section className="morePosts">
        <h2 className="text-2xl">More Posts</h2>
        <div className="grid md:grid-cols-3 gap-5 md:gap-40 mt-7">
          {morePosts &&
            morePosts.map((post) => <MorePostItem key={post.id} post={post} />)}
        </div>
      </section>
    )
  );
});

MorePosts.displayName = "BlogMorePosts";

export default MorePosts;
