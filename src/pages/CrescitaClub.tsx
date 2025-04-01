
import { MainLayout } from "@/components/layout/MainLayout";
import { Card } from "@/components/ui/card";

const offers = [
  {
    id: 1,
    name: "Figma",
    logo: "/lovable-uploads/382d4320-ac44-471b-b0eb-2028476a9cf1.png",
    discount: "50% off annual plan",
    description: "Design jaw-dropping interfaces with quick actions.",
    expiryDate: "Dec 31st, 2025"
  },
  {
    id: 2,
    name: "Adobe Creative Cloud",
    logo: "/lovable-uploads/34149cf8-81ab-48aa-ab91-e360107f8280.png",
    discount: "Get 25% off",
    description: "Get all the creative apps you need for your best work.",
    expiryDate: "Dec 31st, 2025"
  },
  {
    id: 3,
    name: "Coda",
    logo: "/lovable-uploads/7f45c370-a868-42fd-98df-71742486bd2c.png",
    discount: "Try 3 months free",
    description: "Coda helps your team work the way you want to.",
    expiryDate: "Dec 31st, 2025"
  },
  {
    id: 4,
    name: "Dropbox",
    logo: "/lovable-uploads/0163dbad-6c79-4d7b-9541-e0d7e8f0ce8f.png",
    discount: "Try 3 months free",
    description: "Keep the most important things safe in Dropbox.",
    expiryDate: "Dec 31st, 2025"
  },
  {
    id: 5,
    name: "ClickUp",
    logo: "/lovable-uploads/c70f7264-6072-4b1a-934a-7cc8d7290487.png",
    discount: "Get 20% off",
    description: "All your work in one place to get more done, quickly.",
    expiryDate: "Dec 31st, 2025"
  },
  {
    id: 6,
    name: "Freshbooks",
    logo: "/lovable-uploads/12ac0f5a-631b-4cb8-9d1f-f1588d037092.png",
    discount: "Get 50% off",
    description: "Accounting software that makes the hard part easy.",
    expiryDate: "Dec 31st, 2025"
  },
  {
    id: 7,
    name: "GoDaddy",
    logo: "/lovable-uploads/83fbc235-0db1-43a3-b7ec-b6a424370b11.png",
    discount: "Get 4 months free",
    description: "An all-in-one platform to start and manage your business.",
    expiryDate: "Dec 31st, 2025"
  },
  {
    id: 8,
    name: "Constant Contact",
    logo: "/lovable-uploads/9338c204-fd3a-4bcf-a5b0-8756b21d6d6e.png",
    discount: "10% off annual plans",
    description: "Capture leads and drive traffic with email marketing.",
    expiryDate: "Dec 31st, 2025"
  },
  {
    id: 9,
    name: "Webflow",
    logo: "/lovable-uploads/646f4e3c-7ccb-4bda-ae5d-8410b42373f4.png",
    discount: "Get 6 months free",
    description: "A powerful no-code tool to build beautiful websites.",
    expiryDate: "Dec 31st, 2025"
  },
  {
    id: 10,
    name: "Shutterstock",
    logo: "/lovable-uploads/75674a1e-08d6-44e3-b007-2ba730ba424a.png",
    discount: "Get 3 months free",
    description: "The largest library of high quality stock photos and videos.",
    expiryDate: "Dec 31st, 2025"
  },
  {
    id: 11,
    name: "Unbounce",
    logo: "/lovable-uploads/ffc0d54e-f575-4271-9136-82e514bcfe2f.png",
    discount: "Get 3 months free",
    description: "Create landing pages with campaigns that convert.",
    expiryDate: "Dec 31st, 2025"
  },
  {
    id: 12,
    name: "Miro",
    logo: "/lovable-uploads/c4960cff-719c-4e34-931e-5866d91be7a5.png",
    discount: "20% off all plans",
    description: "Brainstorm, sketch and work together on a whiteboard.",
    expiryDate: "Dec 31st, 2025"
  },
];

export default function CrescitaClub() {
  return (
    <MainLayout pageTitle="Crescita Club">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Exclusive offers for our members</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </div>
    </MainLayout>
  );
}

function OfferCard({ offer }) {
  return (
    <Card className="p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start mb-3">
        <div className="flex-shrink-0 w-12 h-12 mr-3">
          <img src={offer.logo} alt={offer.name} className="w-full h-full object-contain" />
        </div>
        <div>
          <h3 className="font-medium">{offer.name}</h3>
          <div className="flex items-center text-sm text-blue-600 mt-1">
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 mr-1">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {offer.discount}
          </div>
        </div>
      </div>
      
      <p className="text-sm text-gray-600 mb-4">
        {offer.description}
      </p>
      
      <div className="text-xs text-gray-500">
        Offer valid until {offer.expiryDate}
      </div>
    </Card>
  );
}
