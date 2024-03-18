import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
const TOKEN =
  "eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MTc3LCJleHAiOjE3NDEzMjUzNzAsInRva2VuX3R5cGUiOiJsb2dpbiJ9.Sx6n97jQzRrxYOfaX-z_xCgGbp0OGjf4yJzlMK6c-iGIWjl1qor8R6R9ARJ9eGb-Nas9NsOgkjcfZCMkjHqCPw";

function InfiniteScroller() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://apollohseapp-299776-ruby.b299776.dev.eastus.az.svc.builder.cafe/bx_block_posts/posts/sic_publish_a_posts?page=${
          page + 1
        }&per_page=10`,
        {
          headers: { token: TOKEN },
        }
      );
      const data = await response.json();
      console.log(data);
      if (data?.posts?.data.length > 0) {
        setItems((prevItems) => [...prevItems, ...(data?.posts?.data || [])]);
        setPage((prev) => prev + 1);
      } else {
        setPage(null);
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <InfiniteScroll
        dataLength={items.length} 
        next={fetchData}
        hasMore={page}
        loader={<h4>Loading...</h4>}
        scrollThreshold={0.8}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {items.map((item) => (
          <div className="border-2" key={item.id}>
            {item.attributes.description}
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default InfiniteScroller;
