import axios from "axios";
import { useState, useEffect } from "react";

const Second = () => {
  const [userdata, setUserdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUserdata(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading.........</p>;
  if (error) return <p>Error occuring .....</p>;

  return (
    <div className="w-full h-full flex flex-col justify-start items-center  p-5">
      <h2 className="font-sans text-3xl font-semibold capitalize text-red-500 p-0">
        Axios API data
      </h2>
      <table className="table-fixed border-separate border-spacing-3">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">User ID</th>
            <th className="border border-gray-300 p-2">User Name</th>
            <th className="border border-gray-300 p-2">User Email</th>
          </tr>
        </thead>
        <tbody>
          {userdata.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Second;
