import {
  ReactNode,
} from "react";

import Sidebar
  from "../components/layout/Sidebar";

import Navbar
  from "../components/layout/ Navbar";

interface Props {
  children: ReactNode;
}

function DashboardLayout({
  children,
}: Props) {
  return (
    <div
      className="
      flex
      min-h-screen
      bg-slate-100
      "
    >
      <Sidebar />

      <div
        className="
        flex-1
        "
      >
        <Navbar />

        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;