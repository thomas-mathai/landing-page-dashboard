import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import AuthWrapper from "../components/AuthWrapper";
import { LANDING_DATA } from "../components/constants";
import Header from "../components/Header";

const Dashboard = () => {
  const [pages, setPages] = useState([]);
  const router = useRouter();

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
        <div className="flex-grow p-6">
          <div className="mx-auto max-w-screen-xl">
            <ul>
              {pages.map((page) => (
                <li key={page.id}>
                  <h2>{page.title}</h2>
                  <button
                    onClick={() => router.push(`/dashboard/edit/${page.id}`)}
                  >
                    Edit
                  </button>
                  <button onClick={() => router.push(`/landing/${page.id}`)}>
                    View
                  </button>
                  <button onClick={() => handleDelete(page.id)}>Delete</button>
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
