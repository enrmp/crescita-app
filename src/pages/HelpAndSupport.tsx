
import { useState } from "react";
import { MainLayout } from "@/components/layout/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    id: "faq-1",
    question: "What is Crescita and what does it do?",
    answer: "Crescita is an all-in-one business management platform designed for freelancers and solopreneurs. It helps streamline client management, lead tracking, financial organization, task automation, and more to enhance efficiency and productivity."
  },
  {
    id: "faq-2",
    question: "Is Crescita suitable for my freelance business?",
    answer: "Crescita is designed for freelancers and solopreneurs across various industries including design, development, writing, consulting, marketing, and more. If you need to manage clients, track finances, and grow your business, Crescita is likely a good fit."
  },
  {
    id: "faq-3",
    question: "How does Crescita help me manage clients?",
    answer: "Crescita offers a comprehensive client management system that helps you track client information, communication history, project details, contracts, invoices, and payments—all in one place. You can also set up automated reminders and follow-ups."
  },
  {
    id: "faq-4",
    question: "Can I track leads in Crescita?",
    answer: "Yes, Crescita includes a robust lead tracking system. You can capture lead information, track lead sources, manage follow-ups, and analyze conversion rates to optimize your sales process."
  },
  {
    id: "faq-5",
    question: "Does Crescita support financial tracking?",
    answer: "Absolutely. Crescita offers comprehensive financial tracking capabilities including invoicing, expense tracking, payment processing, financial reporting, and tax preparation assistance."
  },
  {
    id: "faq-6",
    question: "Can I automate tasks using Crescita?",
    answer: "Yes, Crescita offers various automation features including automated invoicing, payment reminders, follow-up emails, contract renewals, and regular client communications to save you time and ensure consistency."
  },
  {
    id: "faq-7",
    question: "Does Crescita offer integrations with other tools?",
    answer: "Yes, Crescita integrates with popular tools such as Slack, Google Workspace, Microsoft 365, Stripe, PayPal, QuickBooks, Zapier, and many more to create a seamless workflow."
  },
  {
    id: "faq-8",
    question: "How do I upgrade or downgrade my subscription?",
    answer: "You can easily change your subscription plan by going to Settings > Billing > Subscription, where you'll see options to upgrade to a higher tier or downgrade to a more basic plan. Changes typically take effect at the next billing cycle."
  },
  {
    id: "faq-9",
    question: "How secure is my data on Crescita?",
    answer: "Crescita takes security seriously. We use bank-level encryption, secure data centers, regular security audits, and follow industry best practices for data protection. You can also enable two-factor authentication for additional security."
  }
];

export default function HelpAndSupport() {
  const [openFaq, setOpenFaq] = useState("faq-1");
  
  return (
    <MainLayout pageTitle="Help and Support">
      <Tabs defaultValue="faqs" className="w-full">
        <TabsList className="grid w-full grid-cols-3 max-w-md mb-8">
          <TabsTrigger value="faqs">FAQ's</TabsTrigger>
          <TabsTrigger value="contact">Contact Us</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
        </TabsList>
        
        <TabsContent value="faqs">
          <div className="bg-white rounded-lg border">
            <Accordion type="single" value={openFaq} onValueChange={setOpenFaq}>
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border-b last:border-b-0">
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </TabsContent>
        
        <TabsContent value="contact">
          <div className="bg-white rounded-lg border p-6">
            <h2 className="text-lg font-semibold mb-4">Contact Our Support Team</h2>
            <p className="text-gray-600 mb-6">
              Need additional help? Our support team is available Monday to Friday, 9am to 5pm EST.
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="How can we help?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md h-32"
                  placeholder="Describe your issue in detail"
                ></textarea>
              </div>
              
              <div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="feedback">
          <div className="bg-white rounded-lg border p-6">
            <h2 className="text-lg font-semibold mb-4">Share Your Feedback</h2>
            <p className="text-gray-600 mb-6">
              We're constantly improving Crescita based on your feedback. Let us know what you think!
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">What feature do you like the most?</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Your favorite feature"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">What could we improve?</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md h-32"
                  placeholder="Share your suggestions"
                ></textarea>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">How likely are you to recommend Crescita?</label>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">Not likely</span>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rating) => (
                      <button
                        key={rating}
                        className="w-8 h-8 rounded-full border border-gray-300 hover:bg-blue-50 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {rating}
                      </button>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">Very likely</span>
                </div>
              </div>
              
              <div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  Submit Feedback
                </button>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </MainLayout>
  );
}
