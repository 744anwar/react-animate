import { useState, useEffect } from "react";

const First = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((Response) => {
        if (!Response.ok) {
          throw new Error("Failed to fetch data");
        }
        return Response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  //manage loading and error states
  if (loading) return <p>Loading......</p>;
  if (error) return <p>Error:</p>;

  return (
    <>
      <div className="w-full h-full flex flex-col p-5">
        <h2 className="font-sans text-3xl font-semibold normal text-red-500 text-center">
          API data in React.jsx
        </h2>
        <table className=" border-separate border-spacing-3">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2"><strong>UserID</strong></th>
              <th className="border border-gray-300 p-2"><strong>ID</strong></th>
              <th className="border border-gray-300 p-2 text-left"><strong>Post Title</strong></th>
              <th className="border border-gray-300 p-2 text-left"><strong>Post Body</strong></th>
            </tr>
          </thead>
          <tbody>
            {data.map((post) => (
              <tr key={post.id} >
                <td className="border border-gray-300 p-2 text-center"> {post.userId} </td>
                <td className="border border-gray-300 p-2 text-center"> {post.id} </td>
                <td className="border border-gray-300 p-2 text-justify"> {post.title} </td>
                <td className="border border-gray-300 p-2 text-justify"> {post.body} </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default First;
