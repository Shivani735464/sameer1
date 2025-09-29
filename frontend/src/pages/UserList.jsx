import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const UserList = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/api/contact/users`
        );
        setUsers(res.data.data);
        setFilteredUsers(res.data.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // ✅ Filter users based on search input
  useEffect(() => {
    const filtered = users.filter((user) =>
      `${user.firstName} ${user.lastName} ${user.mobile} ${user.message}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  const chartData = {
    labels: filteredUsers.map((_, idx) => `#${idx + 1}`),
    datasets: [
      {
        label: "User Entries",
        data: filteredUsers.map((_, idx) => idx + 1),
        borderColor: "rgba(59, 130, 246, 1)",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        tension: 0.3,
      },
    ],
  };

  if (loading)
    return <p className="text-white text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-[100vh] relative z-20 text-white px-4 pt-20 sm:pt-20 flex flex-col bg-gray-900/50 backdrop-blur-md">
      <div className="flex flex-col lg:flex-row gap-6 flex-1">
        {/* Left: Table with fixed bottom total + search above */}
        <div className="lg:w-2/3 relative flex flex-col">
          {/* Search Input above total count */}
          <div className="mb-2 px-4">
            <input
              type="text"
              placeholder="Search users..."
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white placeholder-white border border-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="overflow-x-auto flex-1 mb-12">
            <table className="min-w-full border border-gray-700">
              <thead>
                <tr className="bg-gray-800">
                  <th className="px-4 py-2 border-b border-gray-700">#</th>
                  <th className="px-4 py-2 border-b border-gray-700">
                    First Name
                  </th>
                  <th className="px-4 py-2 border-b border-gray-700">
                    Last Name
                  </th>
                  <th className="px-4 py-2 border-b border-gray-700">Mobile</th>
                  <th className="px-4 py-2 border-b border-gray-700">
                    Message
                  </th>
                  <th className="px-4 py-2 border-b border-gray-700">
                    Created At
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-4 text-gray-400">
                      No users found.
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((user, index) => (
                    <tr key={user._id} className="hover:bg-gray-800">
                      <td className="px-4 py-2 text-center border-b border-gray-700">
                        {index + 1}
                      </td>
                      <td className="px-4 py-2 text-center border-b border-gray-700">
                        {user.firstName}
                      </td>
                      <td className="px-4 py-2 text-center border-b border-gray-700">
                        {user.lastName}
                      </td>
                      <td className="px-4 py-2 text-center border-b border-gray-700">
                        {user.mobile}
                      </td>
                      <td className="px-4 py-2 text-center border-b border-gray-700">
                        {user.message}
                      </td>
                      <td className="px-4 py-2 text-center border-b border-gray-700">
                        {new Date(user.createdAt).toLocaleString()}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Fixed Bottom: Total Count */}
          <div className="absolute bottom-0 left-0 bg-gray-800 py-2 px-4 border-t border-gray-700 -mb-11 ml-0 lg:ml-10 lg:mb-30">
            <p className="text-center text-gray-300 font-bold">
              Total Users: {filteredUsers.length}
            </p>
            <button
              onClick={() => navigate("/seconduserlist")}
              className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-xl shadow-lg hover:bg-gray-700 hover:shadow-xl transition-all duration-300 ease-in-out"
            >
              Go to Second User List
            </button>
          </div>
        </div>

        {/* Right: Chart */}
        <div className="lg:w-1/3 mt-6 lg:mt-0">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-center">
              User Entries Chart
            </h2>
            <Line data={chartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
