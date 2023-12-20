import React from "react";
import { ApiService } from "../interfaces"
import { useInjection } from "inversify-react";
import { TYPES } from "../types";

const nextPackage = require('next/package.json');
const nextVersion = nextPackage.version;


export default function Home() {
  const apiService = useInjection<ApiService>(TYPES.ApiService);

  const fetchData = async () => {
    const data = await apiService.fetchData();
    alert(JSON.stringify(data));
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-5xl text-orange-500 font-bold mb-4">
        Next.js with Dependency Injection
      </h1>
      <span className="mb-4 text-center">Next.js version: {nextVersion}</span>
      <span className="mb-4 text-center">Click the button below to fetch data from the API:</span>
      <button
        className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        onClick={fetchData}
      >
        Fetch Data
      </button>
    </div>

  );
}