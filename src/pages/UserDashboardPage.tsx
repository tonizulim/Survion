import { Link } from "react-router-dom";

export function UserDashboardPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center p-5">
      <h1 className="text-6xl font-bold text-primary mb-4">User Dashboard</h1>
      <Link to="/survey/new">Create new</Link>
    </div>
  );
}
