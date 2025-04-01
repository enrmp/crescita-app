
import { MainLayout } from "@/components/layout/MainLayout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoreVertical, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const contacts = [
  {
    id: 1,
    name: "Michael Hill",
    avatar: "/lovable-uploads/a4b20414-39f3-41a5-91a5-9b5a0ca1acc7.png",
    email: "michael87@gmail.com",
    phone: "+1 234 567890",
    type: "Monthly",
    date: "21/10/2024",
    status: "Won",
    statusColor: "text-amber-500",
    amount: "$2,500"
  },
  {
    id: 2,
    name: "Lissa Johnson",
    avatar: "/lovable-uploads/a4b20414-39f3-41a5-91a5-9b5a0ca1acc7.png",
    email: "lissa.johnson@gmail.com",
    phone: "+1 234 567890",
    type: "One-Off",
    date: "19/10/2024",
    status: "Won",
    statusColor: "text-amber-500",
    amount: "$6,800"
  },
  {
    id: 3,
    name: "Abdullah Muwahid",
    avatar: "/lovable-uploads/a4b20414-39f3-41a5-91a5-9b5a0ca1acc7.png",
    email: "abdullah.mu@gmail.com",
    phone: "+1 234 567890",
    type: "N/A",
    date: "N/A",
    status: "Call Booked",
    statusColor: "text-teal-500",
    amount: "N/A"
  },
  {
    id: 4,
    name: "Ngomo Balade",
    avatar: "/lovable-uploads/a4b20414-39f3-41a5-91a5-9b5a0ca1acc7.png",
    email: "ngomo88blue@gmail.com",
    phone: "+1 234 567890",
    type: "Monthly",
    date: "11/10/2024",
    status: "Ended",
    statusColor: "text-red-500",
    amount: "$1,700"
  },
  {
    id: 5,
    name: "Fiona Wakerston",
    avatar: "/lovable-uploads/a4b20414-39f3-41a5-91a5-9b5a0ca1acc7.png",
    email: "hey@fionawakerston.com",
    phone: "+1 234 567890",
    type: "N/A",
    date: "N/A",
    status: "Lead",
    statusColor: "text-purple-500",
    amount: "N/A"
  },
  {
    id: 6,
    name: "Jeremy Leroy",
    avatar: "/lovable-uploads/a4b20414-39f3-41a5-91a5-9b5a0ca1acc7.png",
    email: "jeremy.leroy@gmail.com",
    phone: "+1 234 567890",
    type: "N/A",
    date: "N/A",
    status: "Follow Up",
    statusColor: "text-amber-500",
    amount: "N/A"
  },
  {
    id: 7,
    name: "Wendy McArthur",
    avatar: "/lovable-uploads/a4b20414-39f3-41a5-91a5-9b5a0ca1acc7.png",
    email: "wendy24.7genius@gmail.com",
    phone: "+1 234 567890",
    type: "Weekly",
    date: "27/10/2024",
    status: "Won",
    statusColor: "text-amber-500",
    amount: "$850"
  },
  {
    id: 8,
    name: "Celine Gusto",
    avatar: "/lovable-uploads/a4b20414-39f3-41a5-91a5-9b5a0ca1acc7.png",
    email: "celine.gusto55@gmail.com",
    phone: "+1 234 567890",
    type: "Monthly",
    date: "25/10/2024",
    status: "Won",
    statusColor: "text-amber-500",
    amount: "$1,900"
  },
  {
    id: 9,
    name: "Ron Santos",
    avatar: "/lovable-uploads/a4b20414-39f3-41a5-91a5-9b5a0ca1acc7.png",
    email: "ron225santos@gmail.com",
    phone: "+1 234 567890",
    type: "N/A",
    date: "N/A",
    status: "Negotiating",
    statusColor: "text-teal-500",
    amount: "N/A"
  },
  {
    id: 10,
    name: "Lissa Johnson",
    avatar: "/lovable-uploads/a4b20414-39f3-41a5-91a5-9b5a0ca1acc7.png",
    email: "lissa.johnson@gmail.com",
    phone: "+1 234 567890",
    type: "One-Off",
    date: "19/10/2024",
    status: "Won",
    statusColor: "text-amber-500",
    amount: "$6,800"
  }
];

export default function Contacts() {
  return (
    <MainLayout pageTitle="Contacts">
      <div className="mb-6">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input 
            className="pl-10" 
            type="text" 
            placeholder="Search for contacts" 
          />
        </div>
      </div>

      <div className="bg-white rounded-lg border shadow">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="w-[50px]"></TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contacts.map((contact) => (
              <TableRow key={contact.id} className="hover:bg-gray-50">
                <TableCell>
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img src={contact.avatar} alt={contact.name} className="w-full h-full object-cover" />
                  </div>
                </TableCell>
                <TableCell className="font-medium">{contact.name}</TableCell>
                <TableCell>{contact.email}</TableCell>
                <TableCell>{contact.phone}</TableCell>
                <TableCell>{contact.type}</TableCell>
                <TableCell>{contact.date}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${contact.statusColor}`}>
                    {contact.status}
                  </span>
                </TableCell>
                <TableCell>{contact.amount}</TableCell>
                <TableCell>
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical size={16} />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </MainLayout>
  );
}
