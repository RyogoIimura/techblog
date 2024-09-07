import { GetMoreBlogType } from "@/app/utils/supabaseFunctions";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

type Props = {
  post: GetMoreBlogType;
};

const MorePostItem: FC<Props> = React.memo((props) => {
  const { post } = props;
  const { id, title, image_path } = post;
  return (
    <article>
      <Link href={`/blog/${id}`}>
        <figure>
          {image_path && (
            <Image src={image_path} alt="" width="333" height="166" />
          )}
        </figure>
        <h3 className="font-bold">{title}</h3>
      </Link>
    </article>
  );
});

MorePostItem.displayName = "MorePost";

export default MorePostItem;
