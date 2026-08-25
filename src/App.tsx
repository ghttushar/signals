import { Routes, Route, Navigate } from "react-router-dom";
import { Sidebar } from "./components/layout/Sidebar";
import { AppTaskbar } from "./components/layout/AppTaskbar";
import OperatePage from "./pages/OperatePage";
import ExplorePage from "./pages/ExplorePage";
import WorkspacePage from "./pages/WorkspacePage";
import SetupProgressPage from "./pages/SetupProgressPage";
import ConnectionsPage from "./pages/ConnectionsPage";
import SettingsPage from "./pages/SettingsPage";
import { GlobalSearch } from "./components/GlobalSearch";

export default function App() {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 ml-56">
        <AppTaskbar />
        <main className="flex-1 p-6 space-y-6">
          <Routes>
            <Route path="/" element={<Navigate to="/operate" replace />} />
            <Route path="/operate" element={<OperatePage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/workspace" element={<WorkspacePage />} />
            <Route path="/setup" element={<SetupProgressPage />} />
            <Route path="/connections" element={<ConnectionsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<div className="text-sm text-muted-foreground p-8">Not found</div>} />
          </Routes>
        </main>
      </div>
      <GlobalSearch />
    </div>
  );
}
