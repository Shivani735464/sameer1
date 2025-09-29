import React, { useEffect, useState } from "react";

const SecondUserList = () => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [planFilter, setPlanFilter] = useState("All");

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/second-contacts`);
        const data = await res.json();
        setContacts(data);
      } catch (err) {
        console.error("Error fetching contacts:", err);
      }
    };
    fetchContacts();
  }, []);

  // Filtered & searched contacts
  const filteredContacts = contacts.filter((c) => {
    const matchesPlan = planFilter === "All" || c.planName === planFilter;
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.includes(search);
    return matchesPlan && matchesSearch;
  });

  // Unique plan options for filter dropdown
  const planOptions = ["All", ...new Set(contacts.map((c) => c.planName))];

  return (
    <div className="min-h-screen pt-20 relative z-10 bg-gray-900/60 backdrop-blur-md text-white p-6">
      {/* <h1 className="text-3xl font-bold mb-6">All Subscribed Users</h1> */}

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
        <input
          type="text"
          placeholder="Search by name, email or phone"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 rounded-md text-white border bg-gray-800 border-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={planFilter}
          onChange={(e) => setPlanFilter(e.target.value)}
          className="w-full md:w-1/4 px-4 py-2 rounded-md bg-gray-800 text-white border border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {planOptions.map((plan, index) => (
            <option key={index} value={plan}>
              {plan}
            </option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-800">
              <th className="border border-gray-700 px-4 py-2">S.No</th>
              <th className="border border-gray-700 px-4 py-2">Name</th>
              <th className="border border-gray-700 px-4 py-2">Email</th>
              <th className="border border-gray-700 px-4 py-2">Phone</th>
              <th className="border border-gray-700 px-4 py-2">Plan</th>
              <th className="border border-gray-700 px-4 py-2">Price</th>
              <th className="border border-gray-700 px-4 py-2">Description</th>
              <th className="border border-gray-700 px-4 py-2">Features</th>
              <th className="border border-gray-700 px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.length > 0 ? (
              filteredContacts.map((c, index) => (
                <tr key={c._id} className="hover:bg-gray-800">
                  <td className="border border-gray-700 px-4 py-2">{index + 1}</td>
                  <td className="border border-gray-700 px-4 py-2">{c.name}</td>
                  <td className="border border-gray-700 px-4 py-2">{c.email}</td>
                  <td className="border border-gray-700 px-4 py-2">{c.phone}</td>
                  <td className="border border-gray-700 px-4 py-2">{c.planName}</td>
                  <td className="border border-gray-700 px-4 py-2">{c.planPrice}</td>
                  <td className="border border-gray-700 px-4 py-2">{c.planDescription}</td>
                  <td className="border border-gray-700 px-4 py-2">
                    {c.planFeatures && c.planFeatures.length > 0
                      ? c.planFeatures.join(", ")
                      : "N/A"}
                  </td>
                  <td className="border border-gray-700 px-4 py-2">
                    {new Date(c.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center py-4">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Total Users */}
      <div className="mt-4 flex flex-col text-sm text-gray-300">
        Total Users: {filteredContacts.length}
      </div>
    </div>
  );
};

export default SecondUserList;