import DashboardLayout from "@/layouts/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import Analytics from "@/components/dashboard/Analytics";
import RecentActivity from "@/components/dashboard/ RecentActivity";
import QuickActions from "@/components/dashboard/QuickActions";

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Resumes" count={0} />
          <StatCard title="Analyses" count={0} />
          <StatCard title="Roadmaps" count={0} />
          <StatCard title="Interview Sets" count={0} />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Analytics />
          <RecentActivity />
        </div>

        <QuickActions />
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;