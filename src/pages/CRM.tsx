
import { MoreVertical, FilePlus, Mail, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MainLayout } from "@/components/layout/MainLayout";

export default function CRM() {
  // Example data for each column
  const leads = [
    { id: 1, name: "Lissa Johnson", service: "Website Design", email: "lissa.john@example.com", phone: "(571) 123-4567" },
    { id: 2, name: "Lissa Johnson", service: "Website Design", email: "lissa.john@example.com", phone: "(571) 123-4567" },
    { id: 3, name: "Lissa Johnson", service: "Website Design", email: "lissa.john@example.com", phone: "(571) 123-4567" },
  ];
  
  const booked = [
    { id: 1, name: "Lissa Johnson", service: "Website Design", email: "lissa.john@example.com", phone: "(571) 123-4567" },
    { id: 2, name: "Lissa Johnson", service: "Website Design", email: "lissa.john@example.com", phone: "(571) 123-4567" },
    { id: 3, name: "Lissa Johnson", service: "Website Design", email: "lissa.john@example.com", phone: "(571) 123-4567" },
    { id: 4, name: "Lissa Johnson", service: "Website Design", email: "lissa.john@example.com", phone: "(571) 123-4567" },
    { id: 5, name: "Lissa Johnson", service: "Website Design", email: "lissa.john@example.com", phone: "(571) 123-4567" },
    { id: 6, name: "Lissa Johnson", service: "Website Design", email: "lissa.john@example.com", phone: "(571) 123-4567" },
  ];
  
  const negotiating = [
    { id: 1, name: "Lissa Johnson", service: "Website Design", email: "lissa.john@example.com", phone: "(571) 123-4567" },
    { id: 2, name: "Lissa Johnson", service: "Website Design", email: "lissa.john@example.com", phone: "(571) 123-4567" },
    { id: 3, name: "Lissa Johnson", service: "Website Design", email: "lissa.john@example.com", phone: "(571) 123-4567" },
  ];
  
  const followUp = [
    { id: 1, name: "Lissa Johnson", service: "Website Design", email: "lissa.john@example.com", phone: "(571) 123-4567" },
    { id: 2, name: "Lissa Johnson", service: "Website Design", email: "lissa.john@example.com", phone: "(571) 123-4567" },
    { id: 3, name: "Lissa Johnson", service: "Website Design", email: "lissa.john@example.com", phone: "(571) 123-4567" },
    { id: 4, name: "Lissa Johnson", service: "Website Design", email: "lissa.john@example.com", phone: "(571) 123-4567" },
    { id: 5, name: "Lissa Johnson", service: "Website Design", email: "lissa.john@example.com", phone: "(571) 123-4567" },
  ];
  
  const won = [
    { id: 1, name: "Lissa Johnson", service: "Website Design", email: "lissa.john@example.com", phone: "(571) 123-4567", amount: "$3,500", period: "one-time", date: "01/10/2023 - Present" },
    { id: 2, name: "Lissa Johnson", service: "Website Design", email: "lissa.john@example.com", phone: "(571) 123-4567", amount: "$2,500", period: "monthly", date: "01/10/2023 - 28/02/2025" },
    { id: 3, name: "Lissa Johnson", service: "Website Design", email: "lissa.john@example.com", phone: "(571) 123-4567", amount: "$150", period: "per hour", date: "01/10/2023 - Present" },
    { id: 4, name: "Lissa Johnson", service: "Website Design", email: "lissa.john@example.com", phone: "(571) 123-4567", amount: "$150", period: "per hour", date: "01/10/2023 - Present" },
    { id: 5, name: "Lissa Johnson", service: "Website Design", email: "lissa.john@example.com", phone: "(571) 123-4567", amount: "$150", period: "per hour", date: "01/10/2023 - Present" },
  ];
  
  const lost = [
    { id: 1, name: "Lissa Johnson", service: "Website Design", email: "lissa.john@example.com", phone: "(571) 123-4567", amount: "$3,500", period: "one-time", date: "01/10/2023 - Present" },
    { id: 2, name: "Lissa Johnson", service: "Website Design", email: "lissa.john@example.com", phone: "(571) 123-4567", amount: "$2,500", period: "monthly", date: "01/10/2023 - 28/02/2025" },
    { id: 3, name: "Lissa Johnson", service: "Website Design", email: "lissa.john@example.com", phone: "(571) 123-4567", amount: "$150", period: "per hour", date: "01/10/2023 - Present" },
    { id: 4, name: "Lissa Johnson", service: "Website Design", email: "lissa.john@example.com", phone: "(571) 123-4567", amount: "$150", period: "per hour", date: "01/10/2023 - Present" },
    { id: 5, name: "Lissa Johnson", service: "Website Design", email: "lissa.john@example.com", phone: "(571) 123-4567", amount: "$150", period: "per hour", date: "01/10/2023 - Present" },
  ];

  // Card render functions for different types
  const renderBasicCard = (item) => (
    <div key={item.id} className="bg-white p-4 rounded-lg shadow mb-4">
      <div className="flex justify-between">
        <div>
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-500">{item.service}</p>
        </div>
        <button className="text-gray-400">
          <MoreVertical size={16} />
        </button>
      </div>
      
      <div className="mt-4 space-y-2">
        <div className="flex items-center text-sm text-gray-600">
          <Mail size={14} className="mr-2" />
          <a href={`mailto:${item.email}`} className="text-blue-500 hover:underline">{item.email}</a>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Phone size={14} className="mr-2" />
          <span>{item.phone}</span>
        </div>
      </div>
    </div>
  );

  const renderWonLostCard = (item) => (
    <div key={item.id} className="bg-white p-4 rounded-lg shadow mb-4">
      <div className="flex justify-between">
        <div>
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-500">{item.service}</p>
        </div>
        <button className="text-gray-400">
          <MoreVertical size={16} />
        </button>
      </div>
      
      <div className="mt-4 space-y-2">
        <div className="flex items-center text-sm text-gray-600">
          <Mail size={14} className="mr-2" />
          <a href={`mailto:${item.email}`} className="text-blue-500 hover:underline">{item.email}</a>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Phone size={14} className="mr-2" />
          <span>{item.phone}</span>
        </div>

        <div className="pt-2">
          <p className="font-semibold">{item.amount} <span className="text-sm font-normal text-gray-500">({item.period})</span></p>
          <div className="flex items-center text-sm text-gray-600 mt-1">
            <Calendar size={14} className="mr-2" />
            <span>{item.date}</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <MainLayout pageTitle="CRM">
      <div className="mb-4">
        <Tabs defaultValue="crm">
          <div className="border-b">
            <TabsList className="mb-px">
              <TabsTrigger value="crm" className="data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none">
                CRM
              </TabsTrigger>
              <TabsTrigger value="services" className="data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none">
                Services
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="crm" className="mt-0">
            <div className="flex justify-end py-4 space-x-2">
              <Button variant="outline" size="sm">
                Sort By
              </Button>
              <Button variant="outline" size="sm">
                Filter
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
              {/* Leads Column */}
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold">Leads ({leads.length})</h2>
                  <div className="flex">
                    <button className="p-1 hover:bg-gray-200 rounded-md mr-1">
                      <FilePlus size={16} />
                    </button>
                    <button className="p-1 hover:bg-gray-200 rounded-md">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </div>
                <div>
                  {leads.map(renderBasicCard)}
                </div>
              </div>

              {/* Call Booked Column */}
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold">Call Booked ({booked.length})</h2>
                  <div className="flex">
                    <button className="p-1 hover:bg-gray-200 rounded-md mr-1">
                      <FilePlus size={16} />
                    </button>
                    <button className="p-1 hover:bg-gray-200 rounded-md">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </div>
                <div>
                  {booked.map(renderBasicCard)}
                </div>
              </div>

              {/* Negotiating Column */}
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold">Negotiating ({negotiating.length})</h2>
                  <div className="flex">
                    <button className="p-1 hover:bg-gray-200 rounded-md mr-1">
                      <FilePlus size={16} />
                    </button>
                    <button className="p-1 hover:bg-gray-200 rounded-md">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </div>
                <div>
                  {negotiating.map(renderBasicCard)}
                </div>
              </div>

              {/* Follow Up Column */}
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold">Follow Up ({followUp.length})</h2>
                  <div className="flex">
                    <button className="p-1 hover:bg-gray-200 rounded-md mr-1">
                      <FilePlus size={16} />
                    </button>
                    <button className="p-1 hover:bg-gray-200 rounded-md">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </div>
                <div>
                  {followUp.map(renderBasicCard)}
                </div>
              </div>

              {/* Won Column */}
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold">Won ({won.length})</h2>
                  <div className="flex">
                    <button className="p-1 hover:bg-gray-200 rounded-md mr-1">
                      <FilePlus size={16} />
                    </button>
                    <button className="p-1 hover:bg-gray-200 rounded-md">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </div>
                <div>
                  {won.map(renderWonLostCard)}
                </div>
              </div>

              {/* Lost Column */}
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-semibold">Lost ({lost.length})</h2>
                  <div className="flex">
                    <button className="p-1 hover:bg-gray-200 rounded-md mr-1">
                      <FilePlus size={16} />
                    </button>
                    <button className="p-1 hover:bg-gray-200 rounded-md">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                </div>
                <div>
                  {lost.map(renderWonLostCard)}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="services">
            <div className="p-8 text-center text-gray-500">
              Services section content will go here
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
