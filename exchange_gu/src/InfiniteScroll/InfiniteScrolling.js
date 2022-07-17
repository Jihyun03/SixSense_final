import React, {Component} from 'react';

import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteQuery } from "react-query";

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8
};


const InfiniteScrolling = async ({ pageParam = 1 }) => {
  const {
    isLoading,
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage
  } = useInfiniteQuery("posts", fetchPosts, {
    getNextPageParam(lastPage) {
      if (lastPage.nextPage < lastPage.totalPages) return lastPage.nextPage;
      return undefined;
    }
  });
  if (isLoading) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="App">
      <InfiniteScroller hasMore={hasNextPage} loadMore={fetchNextPage}>
        {data.pages.map((page) =>
          page.results.map((post) => <PostCard key={post.id} post={post} />)
        )}
      </InfiniteScroller>
      {isFetchingNextPage && <h1>Fetching next page</h1>}
    </div>
  );
      
}

export default InfiniteScrolling;