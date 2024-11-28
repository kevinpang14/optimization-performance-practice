import React, { useState, useEffect } from "react";
import useSWR from "swr";

// for swr

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Cache() {
  //   const [data, setData] = useState([]);
  //   const [loading, setLoading] = useState(false);

  //   useEffect(() => {
  //     setLoading(true);
  //     fetch("https://jsonplaceholder.typicode.com/comments/1", {
  //       headers: { "Cache-Control": `max-age=3600` },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setData(data);
  //         setLoading(false);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         setLoading(false);
  //       });
  //   }, []);

  // use SWR
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/comments/2",
    fetcher,
    {
      revalidateOnFocus: true, // Revalidate when the user focuses on the tab
      dedupingInterval: 3600000, // Cache the data for 1 hour
    }
  );

  //   if (loading) {
  //     return <div>Loading...</div>;
  //   }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!data) {
    return <div>No data</div>;
  }

  return (
    <>
      <div className="container">
        <h1>Cache</h1>
        {data && (
          <div className="row">
            <div className="col-md-6">
              <h2>Title</h2>
              <p>{data.name}</p>
            </div>
            <div className="col-md-6">
              <h2>Body</h2>
              <p>{data.body}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
