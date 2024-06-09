import { useState, useEffect } from "react";

import AuthWrapper from "../../components/AuthWrapper";
import { LANDING_DATA } from "../../components/constants";
import Header from "../../components/Header";
import Card from "../../components/Card";

const Dashboard = () => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    setPages(LANDING_DATA);
    localStorage.setItem("landingPages", JSON.stringify(LANDING_DATA));
  }, []);

  const handleDelete = (id) => {
    const updatedPages = pages.filter((page) => page.id !== id);
    setPages(updatedPages);
    localStorage.setItem("landingPages", JSON.stringify(updatedPages));
  };
  return (
    <AuthWrapper>
      <div className="flex flex-col">
        <Header />
        <div className="flex-grow px-6 py-20 bg-white">
          <div className="mx-auto max-w-screen-xl">
            <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
              {pages.map((page) => (
                <li key={page.id}>
                  <Card page={page} handleDelete={handleDelete} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Dashboard;
