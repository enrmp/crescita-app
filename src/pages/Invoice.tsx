
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MainLayout } from "@/components/layout/MainLayout";

export default function Invoice() {
  return (
    <MainLayout pageTitle="Create Invoice">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center mb-4">
          <Button variant="ghost" size="sm" className="mr-2">
            <ArrowLeft size={16} />
          </Button>
          <h1 className="text-lg font-medium">Create Invoice</h1>
        </div>
        <p className="text-sm text-gray-500 mb-6">Invoice #23456</p>

        <div className="bg-white rounded-lg border p-6">
          <div className="mb-6">
            <div className="font-semibold text-gray-700 mb-1">#23456</div>
            <div className="flex justify-between">
              <div className="w-1/2 pr-2">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Client</label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Client" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="client1">Client 1</SelectItem>
                      <SelectItem value="client2">Client 2</SelectItem>
                      <SelectItem value="client3">Client 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="w-1/2 pl-2">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Payment Due Date</label>
                  <div className="relative">
                    <Input type="text" placeholder="Select Due Date" className="pr-10" />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-medium text-gray-700 mb-4">Units</h3>
            <div className="border rounded-lg p-4 mb-4">
              <div className="grid grid-cols-12 gap-4 mb-4">
                <div className="col-span-1">
                  <span className="text-gray-600 text-sm">1</span>
                </div>
                <div className="col-span-4">
                  <label className="block text-sm text-gray-600 mb-1">Service</label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select or Add Service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="service1">Service 1</SelectItem>
                      <SelectItem value="service2">Service 2</SelectItem>
                      <SelectItem value="service3">Service 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-7">
                  <label className="block text-sm text-gray-600 mb-1">Service Description</label>
                  <Input type="text" placeholder="Add Description" />
                </div>
              </div>

              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-1"></div>
                <div className="col-span-4">
                  <label className="block text-sm text-gray-600 mb-1">Price</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-500 bg-gray-100 border border-r-0 border-gray-300 rounded-l-md">
                      USD
                    </span>
                    <Input type="text" placeholder="e.g. $2,000" className="rounded-l-none" />
                  </div>
                </div>
                <div className="col-span-3">
                  <label className="block text-sm text-gray-600 mb-1">VAT</label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="VAT %" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">0%</SelectItem>
                      <SelectItem value="5">5%</SelectItem>
                      <SelectItem value="10">10%</SelectItem>
                      <SelectItem value="20">20%</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-4">
                  <label className="block text-sm text-gray-600 mb-1">Total Amount</label>
                  <div className="bg-gray-100 h-10 rounded-md flex items-center px-3 text-gray-700">
                    $0.00
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-dashed rounded-lg p-4 flex justify-center items-center cursor-pointer hover:bg-gray-50">
              <div className="flex items-center text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                <span>Add Another Unit</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Note to Client</label>
              <div className="border rounded-md">
                <Input type="text" placeholder="Optional" className="border-0" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Terms and Conditions</label>
              <div className="border rounded-md">
                <Input type="text" placeholder="Optional" className="border-0" />
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3">
            <Button variant="outline">Cancel</Button>
            <Button variant="outline">Save as Draft</Button>
            <Button>Send Invoice</Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
