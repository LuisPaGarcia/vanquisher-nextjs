import React from "react";
import NavTest from "components/NavTest";
import Image from "next/image";
import Data from "components/Data";
import Table from "components/Table";
import Details from "components/Details";
import useDocumentTitle from "utils/hooks/useDocumentTitle";
function Dashboard(props) {
  useDocumentTitle("Dashboard | Vanquisher");

  return (
    <>
      <NavTest />
      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        <div className="container mx-auto px-6 py-8">
          <h3 className="text-white text-3xl font-medium">Dashboard</h3>

          <Data />
          <Details />
          <Table />
        </div>
      </main>
    </>
  );
}

export default Dashboard;
