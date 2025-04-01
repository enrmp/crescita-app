
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  TrendingUp, 
  DollarSign, 
  Users, 
  UserCog, 
  Layers, 
  SendHorizonal, 
  FileText, 
  Target, 
  Calendar, 
  Bot, 
  Users2, 
  Contact, 
  MessageSquare,
  HelpCircle,
  Settings
} from "lucide-react";

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const navItems = [
    { 
      title: "Dashboard", 
      icon: <LayoutDashboard className="w-5 h-5" />, 
      path: "/", 
      active: location.pathname === "/"
    },
    { 
      title: "KPI Tracker", 
      icon: <TrendingUp className="w-5 h-5" />, 
      path: "/kpi-tracker",
      active: location.pathname === "/kpi-tracker" 
    },
    { 
      title: "Finance", 
      icon: <DollarSign className="w-5 h-5" />, 
      path: "/finance",
      active: location.pathname === "/finance" 
    },
    { 
      title: "CRM", 
      icon: <Users className="w-5 h-5" />, 
      path: "/crm",
      active: location.pathname === "/crm" 
    },
    { 
      title: "Client Management", 
      icon: <UserCog className="w-5 h-5" />, 
      path: "/clients",
      active: location.pathname === "/clients" 
    }
  ];

  const shortcuts = [
    { 
      title: "Send Invoice", 
      icon: <SendHorizonal className="w-5 h-5" />, 
      path: "/invoice",
      active: location.pathname === "/invoice" 
    },
    { 
      title: "Reports", 
      icon: <FileText className="w-5 h-5" />, 
      path: "/reports",
      active: location.pathname === "/reports" 
    },
    { 
      title: "Opportunity", 
      icon: <Target className="w-5 h-5" />, 
      path: "/opportunity",
      active: location.pathname === "/opportunity" 
    }
  ];

  const products = [
    { 
      title: "Calendar", 
      icon: <Calendar className="w-5 h-5" />, 
      path: "/calendar",
      active: location.pathname === "/calendar" 
    },
    { 
      title: "Crescita AI", 
      icon: <Bot className="w-5 h-5" />, 
      path: "/ai",
      active: location.pathname === "/ai" 
    },
    { 
      title: "Crescita Club", 
      icon: <Users2 className="w-5 h-5" />, 
      path: "/club",
      active: location.pathname === "/club" 
    },
    { 
      title: "Contacts", 
      icon: <Contact className="w-5 h-5" />, 
      path: "/contacts",
      active: location.pathname === "/contacts" 
    },
    { 
      title: "Community Updates", 
      icon: <MessageSquare className="w-5 h-5" />, 
      path: "/updates",
      active: location.pathname === "/updates" 
    },
    { 
      title: "Help and Support", 
      icon: <HelpCircle className="w-5 h-5" />, 
      path: "/help",
      active: location.pathname === "/help" 
    },
    { 
      title: "Settings", 
      icon: <Settings className="w-5 h-5" />, 
      path: "/settings",
      active: location.pathname === "/settings" 
    }
  ];

  return (
    <div className="h-full bg-crescita-background text-white flex flex-col min-w-[205px]">
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="text-crescita-accent font-bold text-2xl tracking-wider">
            CRESCITA
          </div>
          <button 
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-400 p-1 hover:text-white"
          >
            {collapsed ? ">" : "<"}
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto py-4 flex flex-col gap-8">
        {/* Main navigation */}
        <div className="px-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                item.active ? "bg-blue-600" : "hover:bg-gray-800"
              }`}
            >
              {item.icon}
              <span>{item.title}</span>
            </Link>
          ))}
        </div>

        {/* Shortcuts */}
        <div className="px-3 space-y-1">
          <div className="text-xs text-gray-400 px-3 mb-2">Shortcuts</div>
          {shortcuts.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                item.active ? "bg-blue-600" : "hover:bg-gray-800"
              }`}
            >
              {item.icon}
              <span>{item.title}</span>
            </Link>
          ))}
        </div>

        {/* Products */}
        <div className="px-3 space-y-1">
          <div className="text-xs text-gray-400 px-3 mb-2">Products</div>
          {products.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                item.active ? "bg-blue-600" : "hover:bg-gray-800"
              }`}
            >
              {item.icon}
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
