import axios from "axios";
import { useEffect, useState } from "react";

const Axios = () => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/albums")
    .then((info) => {
      setUserInfo(info.data);
    })
    .catch((error) => {
        console.error("Error fetching data: ", error);
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center p-5">
        <table className="border border-green-500 border-separate border-spacing-5">
            <thead>
                <tr >
                    <th className="border border-gray-500 p-2">UserID</th>
                    <th className="border border-gray-500 p-2">ID</th>
                    <th className="border border-gray-500 p-2">Content</th>
                </tr>
            </thead>
            <tbody>
            {userInfo.map((infooo) => (
                <tr key={infooo.id}>
                    <td className="border border-gray-500 p-2">{infooo.userId}</td>
                    <td className="border border-gray-500 p-2">{infooo.id}</td>
                    <td className="border border-gray-500 p-2">{infooo.title}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
};

export default Axios;
