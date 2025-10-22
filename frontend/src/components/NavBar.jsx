import { PlusIcon } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl px-4 py-4"></div>
      <div className="flex  px-4 m-5 items-center justify-between marker:">
        <h1 className="text-3xl font-bold text-primary font-mono tracking-tighter">
          EvaCoffe
        </h1>
        <div className="flex items-center  gap-4">
          <Link to="/create">
            <button className="btn btn-primary">
              <PlusIcon className="w-6 h-6" />
              <span>New Note</span>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
