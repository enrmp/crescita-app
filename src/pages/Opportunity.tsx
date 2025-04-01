
import { MainLayout } from "@/components/layout/MainLayout";
import { Card } from "@/components/ui/card";

export default function Opportunity() {
  return (
    <MainLayout pageTitle="Opportunity">
      <div className="space-y-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Opportunity Management</h2>
          <p className="text-gray-600">
            Track and manage potential business opportunities, analyze opportunity
            pipelines, and monitor conversion rates.
          </p>
        </Card>
      </div>
    </MainLayout>
  );
}
