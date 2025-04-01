
import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { CheckCircle, ChevronsUpDown } from "lucide-react";

export default function Settings() {
  const [theme, setTheme] = useState("light");
  
  return (
    <MainLayout pageTitle="Settings">
      <div className="mb-8">
        <Tabs defaultValue="account">
          <TabsList className="border-b w-full justify-start mb-6 rounded-none bg-transparent p-0">
            <TabsTrigger 
              value="account" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              Account Settings
            </TabsTrigger>
            <TabsTrigger 
              value="security" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              Security
            </TabsTrigger>
            <TabsTrigger 
              value="billing" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><rect width="20" height="14" x="2" y="5" rx="2"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
              Billing
            </TabsTrigger>
            <TabsTrigger 
              value="notifications" 
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-4 py-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
              Notifications
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="account" className="mt-0">
            <div className="bg-white p-6 border rounded-lg">
              <h3 className="font-medium mb-4">Account Settings</h3>
              <p className="text-sm text-gray-500 mb-6">Manage your personal profile</p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium mb-4">Personal Details</h4>
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-full overflow-hidden mr-4">
                      <img 
                        src="/lovable-uploads/a4b20414-39f3-41a5-91a5-9b5a0ca1acc7.png" 
                        alt="Profile" 
                        className="w-full h-full object-cover" 
                      />
                    </div>
                    <div>
                      <p className="font-medium">Profile photo</p>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF max size of 2MB</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                      <Input type="text" defaultValue="Josh" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                      <Input type="text" defaultValue="Kempton" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <Input type="email" defaultValue="josh.kempton@gmail.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <div className="flex">
                        <div className="w-20">
                          <Select defaultValue="us">
                            <SelectTrigger className="w-full rounded-r-none border-r-0">
                              <SelectValue placeholder="Country">
                                <span className="flex items-center">
                                  <span className="mr-2">🇺🇸</span>
                                </span>
                              </SelectValue>
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="us">🇺🇸 US</SelectItem>
                              <SelectItem value="uk">🇬🇧 UK</SelectItem>
                              <SelectItem value="ca">🇨🇦 CA</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Input 
                          type="tel" 
                          className="rounded-l-none flex-1" 
                          defaultValue="+1 0123456789" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-4">Location and Timezone</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                      <Select defaultValue="us">
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="us">United States</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="ca">Canada</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                      <Select defaultValue="ny">
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select city" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ny">New York</SelectItem>
                          <SelectItem value="la">Los Angeles</SelectItem>
                          <SelectItem value="ch">Chicago</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Timezone</label>
                    <Select defaultValue="utc-0100">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select timezone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="utc-0100">Western European Time (UTC) UTC-01:00</SelectItem>
                        <SelectItem value="utc-0500">Eastern Standard Time (EST) UTC-05:00</SelectItem>
                        <SelectItem value="utc-0800">Pacific Standard Time (PST) UTC-08:00</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-4">Interface Theme</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div 
                      className={`border rounded-lg p-2 cursor-pointer ${theme === 'light' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                      onClick={() => setTheme('light')}
                    >
                      <div className="border rounded bg-white h-20 mb-2 relative overflow-hidden">
                        <div className="p-2">
                          <div className="w-full h-2 bg-gray-200 rounded mb-1"></div>
                          <div className="w-2/3 h-2 bg-gray-200 rounded"></div>
                        </div>
                        
                        {theme === 'light' && (
                          <div className="absolute bottom-2 right-2 text-blue-500">
                            <CheckCircle size={16} />
                          </div>
                        )}
                      </div>
                      <div className="text-center text-sm">Light</div>
                    </div>
                    
                    <div 
                      className={`border rounded-lg p-2 cursor-pointer ${theme === 'dark' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                      onClick={() => setTheme('dark')}
                    >
                      <div className="border rounded bg-gray-900 h-20 mb-2 relative overflow-hidden">
                        <div className="p-2">
                          <div className="w-full h-2 bg-gray-700 rounded mb-1"></div>
                          <div className="w-2/3 h-2 bg-gray-700 rounded"></div>
                        </div>
                        
                        {theme === 'dark' && (
                          <div className="absolute bottom-2 right-2 text-blue-500">
                            <CheckCircle size={16} />
                          </div>
                        )}
                      </div>
                      <div className="text-center text-sm">Dark</div>
                    </div>
                    
                    <div 
                      className={`border rounded-lg p-2 cursor-pointer ${theme === 'system' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
                      onClick={() => setTheme('system')}
                    >
                      <div className="border rounded h-20 mb-2 relative overflow-hidden bg-gradient-to-r from-white to-gray-900">
                        <div className="p-2 flex">
                          <div className="w-1/2">
                            <div className="w-full h-2 bg-gray-200 rounded mb-1"></div>
                            <div className="w-2/3 h-2 bg-gray-200 rounded"></div>
                          </div>
                          <div className="w-1/2 pl-2">
                            <div className="w-full h-2 bg-gray-700 rounded mb-1"></div>
                            <div className="w-2/3 h-2 bg-gray-700 rounded"></div>
                          </div>
                        </div>
                        
                        {theme === 'system' && (
                          <div className="absolute bottom-2 right-2 text-blue-500">
                            <CheckCircle size={16} />
                          </div>
                        )}
                      </div>
                      <div className="text-center text-sm">System Preferences</div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="security" className="mt-0">
            <div className="bg-white p-6 border rounded-lg">
              <h3 className="font-medium mb-6">Security Settings</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium mb-4">Change Password</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                      <Input type="password" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                      <Input type="password" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                      <Input type="password" />
                    </div>
                    <div>
                      <Button>Update Password</Button>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-medium mb-4">Two-Factor Authentication</h4>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Enable 2FA</p>
                      <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                    </div>
                    <Switch />
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-medium mb-4">Sessions</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                      <div>
                        <p className="font-medium">Current Session</p>
                        <p className="text-xs text-gray-500">New York, United States • Nov 6, 2023 at 10:30 AM</p>
                      </div>
                      <div className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                        Active
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-md">
                      <div>
                        <p className="font-medium">Chrome on Windows</p>
                        <p className="text-xs text-gray-500">New York, United States • Nov 5, 2023 at 2:15 PM</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Revoke
                      </Button>
                    </div>
                    <div>
                      <Button variant="outline">Sign Out All Other Sessions</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="billing" className="mt-0">
            <div className="bg-white p-6 border rounded-lg">
              <h3 className="font-medium mb-6">Billing Information</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium mb-4">Current Plan</h4>
                  <div className="p-4 border rounded-md">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <p className="font-medium">Professional Plan</p>
                        <p className="text-sm text-gray-500">$29/month, billed monthly</p>
                      </div>
                      <div className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                        Active
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">Change Plan</Button>
                      <Button variant="outline" size="sm" className="text-red-500 border-red-200 hover:bg-red-50">
                        Cancel Subscription
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-medium mb-4">Payment Method</h4>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md mb-3">
                    <div className="flex items-center">
                      <div className="w-10 h-6 bg-blue-600 rounded mr-3"></div>
                      <div>
                        <p className="font-medium">Visa ending in 4242</p>
                        <p className="text-xs text-gray-500">Expires 12/2024</p>
                      </div>
                    </div>
                    <div className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                      Default
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Add Payment Method</Button>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-medium mb-4">Billing History</h4>
                  <div className="border rounded-md overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            Invoice
                          </th>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            Date
                          </th>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            Amount
                          </th>
                          <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            Status
                          </th>
                          <th scope="col" className="px-4 py-3"></th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 whitespace-nowrap text-sm">INV-001</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm">Nov 1, 2023</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm">$29.00</td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                              Paid
                            </span>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-blue-600">
                            <Button variant="link" className="p-0 h-auto">Download</Button>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 whitespace-nowrap text-sm">INV-002</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm">Oct 1, 2023</td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm">$29.00</td>
                          <td className="px-4 py-3 whitespace-nowrap">
                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                              Paid
                            </span>
                          </td>
                          <td className="px-4 py-3 whitespace-nowrap text-sm text-blue-600">
                            <Button variant="link" className="p-0 h-auto">Download</Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="notifications" className="mt-0">
            <div className="bg-white p-6 border rounded-lg">
              <h3 className="font-medium mb-6">Notification Settings</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium mb-4">Email Notifications</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">New Client Updates</p>
                        <p className="text-sm text-gray-500">Get notified when a client updates their information</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Invoice Reminders</p>
                        <p className="text-sm text-gray-500">Get notified about upcoming and overdue invoices</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Payment Confirmations</p>
                        <p className="text-sm text-gray-500">Get notified when you receive a payment</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-medium mb-4">System Notifications</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Product Updates</p>
                        <p className="text-sm text-gray-500">Get notified about new features and improvements</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Security Alerts</p>
                        <p className="text-sm text-gray-500">Get notified about security-related issues</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Tips & Tutorials</p>
                        <p className="text-sm text-gray-500">Get helpful tips and tutorials to make the most of Crescita</p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-medium mb-4">Marketing Preferences</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Newsletter</p>
                        <p className="text-sm text-gray-500">Receive our newsletter with business tips and news</p>
                      </div>
                      <Switch />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Promotional Emails</p>
                        <p className="text-sm text-gray-500">Receive emails about special offers and promotions</p>
                      </div>
                      <Switch />
                    </div>
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button>Save Preferences</Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
}
