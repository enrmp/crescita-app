
import { MainLayout } from "@/components/layout/MainLayout";
import { Card } from "@/components/ui/card";

export default function ClientManagement() {
  return (
    <MainLayout pageTitle="Client Management">
      <div className="space-y-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Client Management</h2>
          <p className="text-gray-600">
            Manage your clients, view client details, and track client interactions all in one place.
          </p>
        </Card>
      </div>
    </MainLayout>
  );
}
