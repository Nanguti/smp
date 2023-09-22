import BlogPost from "@/components/BlogPost";
import axiosClient from "@/utils/axios";
import Link from "next/link";
import FramerMotion from "@/components/FramerMotion";

const Blog = async () => {
  const file_url = process.env.STORAGE_URL;
  const res = await axiosClient.get(`/posts`);
  const posts = res.data.posts.data;
  return (
    <FramerMotion>
      <div className="breadcrumb-area">
        <div className="container">
          <div className="breadcrumb-content">
            <h2>Blog</h2>
            <ul>
              <li>
                <Link href="index.html">Home</Link>
              </li>
              <li className="active">Blog</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="uren-blog_area grid-view_area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="row blog-item_wrap">
                {posts.map((post) => (
                  <div className="col-lg-4 blog-card" key={post.id}>
                    <BlogPost
                      post={post}
                      page="blog-page"
                      file_url={file_url}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </FramerMotion>
  );
};

export default Blog;
