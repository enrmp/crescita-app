
import { MainLayout } from "@/components/layout/MainLayout";
import { X, ExternalLink } from "lucide-react";

const updates = [
  {
    id: 1,
    date: "24/10/2024",
    type: "feature",
    title: "New feature alert",
    message: "Hey Josh, we've rolled out a new feature. Now you can schedule virtual sessions directly through Crescita. Upgrade your membership to enable this.",
    action: {
      text: "Upgrade Membership",
      link: "#"
    }
  },
  {
    id: 2,
    date: "21/10/2024",
    type: "profile",
    title: "Set up your profile",
    message: "Let's make your Crescita experience uniquely yours! Complete your profile to connect with your clients instantly.",
    action: null
  },
  {
    id: 3,
    date: "12/10/2024",
    type: "integration",
    title: "New integrations available",
    message: "We've added Slack, Intercom, Fiverr, Mail Chimp, Tweetdeck and GitHub to our app library. Connect these apps to Crescita to integrate your data into our platform.",
    action: null
  },
  {
    id: 4,
    date: "03/10/2024",
    type: "client",
    title: "Your first client's progress",
    message: "Exciting news, Josh! Your first client, Sarah, just complete a milestone. Their progress is your success.",
    action: {
      text: "View Contract",
      link: "#"
    }
  },
  {
    id: 5,
    date: "29/09/2024",
    type: "welcome",
    title: "Welcome to Crescita",
    message: "Hey Josh, welcome to Crescita! We're thrilled to have you onboard.",
    action: null
  }
];

export default function CommunityUpdates() {
  return (
    <MainLayout pageTitle="Community Updates">
      <div className="space-y-4">
        {updates.map((update) => (
          <UpdateCard key={update.id} update={update} />
        ))}
      </div>
    </MainLayout>
  );
}

function UpdateCard({ update }) {
  let bgColor = "bg-blue-50";
  
  switch (update.type) {
    case "feature":
      bgColor = "bg-blue-50";
      break;
    case "profile":
      bgColor = "bg-purple-50";
      break;
    case "integration":
      bgColor = "bg-green-50";
      break;
    case "client":
      bgColor = "bg-amber-50";
      break;
    case "welcome":
      bgColor = "bg-teal-50";
      break;
    default:
      bgColor = "bg-blue-50";
  }
  
  return (
    <div className={`${bgColor} rounded-lg p-4 relative`}>
      <div className="flex items-center mb-4">
        <div className="w-5 h-5 flex-shrink-0 mr-2">
          <svg viewBox="0 0 20 20" fill="currentColor" className="text-blue-500">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
        </div>
        <span className="text-gray-500 text-sm">{update.date}</span>
      </div>
      
      <div className="mb-2">
        <h3 className="font-medium text-gray-900">{update.title}</h3>
      </div>
      
      <p className="text-gray-700 mb-3">
        {update.message}
      </p>
      
      {update.action && (
        <div>
          <a href={update.action.link} className="inline-flex items-center text-blue-600 hover:text-blue-800">
            {update.action.text}
            <ExternalLink size={14} className="ml-1" />
          </a>
        </div>
      )}
      
      <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
        <X size={16} />
      </button>
    </div>
  );
}
