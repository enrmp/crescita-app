
# Crescita CRM - Business Growth Platform

<div align="center">
  <img src="public/crescita-logo.svg" alt="Crescita Logo" width="250" />
  <h3>All-in-one CRM solution for business growth</h3>
</div>

## Overview

Crescita is a comprehensive CRM and business growth platform designed to help professionals streamline operations, track performance, and manage client relationships. With a modern user interface and a rich feature set, Crescita provides all the tools you need to scale your business effectively.

## Features

- **Dashboard**: Get a complete overview of your business with key metrics, revenue charts, and upcoming activities
- **KPI Tracker**: Monitor and analyze your key performance indicators
- **Finance**: Track revenue, expenses, and financial performance
- **CRM**: Manage your customer relationships with advanced contact management
- **Client Management**: View client details and track interactions
- **Invoice**: Create, send, and track invoices
- **Reports**: Generate comprehensive business reports and analytics
- **Opportunity**: Track and manage potential business opportunities
- **Calendar**: Schedule and manage appointments and events
- **Crescita AI**: Leverage AI to optimize your business processes
- **Crescita Club**: Access exclusive offers and benefits for members
- **Contacts**: Organize and maintain your professional network
- **Community Updates**: Stay informed about the latest features and news

## Database Schema Design (Initial Assessment)

This is an initial assessment of what our database schema would look like when implementing with Supabase:

### Tables

#### users
- `id` (uuid, PK): Unique identifier for each user
- `email` (text): User's email address
- `full_name` (text): User's full name
- `avatar_url` (text): URL to user's profile picture
- `role` (text): User role (admin, manager, user)
- `created_at` (timestamp): Account creation timestamp
- `updated_at` (timestamp): Last update timestamp

#### clients
- `id` (uuid, PK): Unique identifier for each client
- `company_name` (text): Client's company name
- `contact_name` (text): Primary contact name
- `email` (text): Contact email
- `phone` (text): Contact phone number
- `address` (text): Physical address
- `status` (text): Client status (active, inactive, prospect)
- `notes` (text): Additional notes
- `created_at` (timestamp): Record creation timestamp
- `created_by` (uuid, FK): Reference to users.id
- `updated_at` (timestamp): Last update timestamp

#### contacts
- `id` (uuid, PK): Unique identifier for each contact
- `client_id` (uuid, FK): Reference to clients.id
- `name` (text): Contact name
- `position` (text): Job position
- `email` (text): Email address
- `phone` (text): Phone number
- `is_primary` (boolean): Whether this is the primary contact
- `created_at` (timestamp): Record creation timestamp
- `updated_at` (timestamp): Last update timestamp

#### opportunities
- `id` (uuid, PK): Unique identifier for each opportunity
- `client_id` (uuid, FK): Reference to clients.id
- `title` (text): Opportunity title
- `description` (text): Detailed description
- `value` (numeric): Potential value
- `stage` (text): Current stage (lead, proposal, negotiation, closed-won, closed-lost)
- `probability` (integer): Probability of winning (%)
- `expected_close_date` (date): Expected closing date
- `created_at` (timestamp): Record creation timestamp
- `created_by` (uuid, FK): Reference to users.id
- `updated_at` (timestamp): Last update timestamp

#### invoices
- `id` (uuid, PK): Unique identifier for each invoice
- `client_id` (uuid, FK): Reference to clients.id
- `invoice_number` (text): Unique invoice number
- `issue_date` (date): Date of issue
- `due_date` (date): Payment due date
- `amount` (numeric): Total invoice amount
- `status` (text): Payment status (draft, sent, paid, overdue)
- `notes` (text): Additional notes
- `created_at` (timestamp): Record creation timestamp
- `created_by` (uuid, FK): Reference to users.id
- `updated_at` (timestamp): Last update timestamp

#### invoice_items
- `id` (uuid, PK): Unique identifier for each invoice item
- `invoice_id` (uuid, FK): Reference to invoices.id
- `description` (text): Item description
- `quantity` (numeric): Quantity
- `unit_price` (numeric): Price per unit
- `amount` (numeric): Total amount (quantity * unit_price)
- `created_at` (timestamp): Record creation timestamp
- `updated_at` (timestamp): Last update timestamp

#### kpis
- `id` (uuid, PK): Unique identifier for each KPI
- `name` (text): KPI name
- `description` (text): Detailed description
- `target` (numeric): Target value
- `unit` (text): Unit of measurement
- `frequency` (text): Tracking frequency (daily, weekly, monthly, quarterly)
- `created_at` (timestamp): Record creation timestamp
- `created_by` (uuid, FK): Reference to users.id
- `updated_at` (timestamp): Last update timestamp

#### kpi_entries
- `id` (uuid, PK): Unique identifier for each KPI entry
- `kpi_id` (uuid, FK): Reference to kpis.id
- `date` (date): Entry date
- `value` (numeric): Actual value
- `notes` (text): Additional notes
- `created_at` (timestamp): Record creation timestamp
- `created_by` (uuid, FK): Reference to users.id
- `updated_at` (timestamp): Last update timestamp

#### events
- `id` (uuid, PK): Unique identifier for each event
- `title` (text): Event title
- `description` (text): Detailed description
- `start_time` (timestamp): Event start time
- `end_time` (timestamp): Event end time
- `client_id` (uuid, FK, nullable): Optional reference to clients.id
- `location` (text): Event location
- `type` (text): Event type (meeting, call, appointment)
- `created_at` (timestamp): Record creation timestamp
- `created_by` (uuid, FK): Reference to users.id
- `updated_at` (timestamp): Last update timestamp

#### financial_transactions
- `id` (uuid, PK): Unique identifier for each transaction
- `type` (text): Transaction type (income, expense)
- `category` (text): Transaction category
- `amount` (numeric): Transaction amount
- `date` (date): Transaction date
- `description` (text): Detailed description
- `invoice_id` (uuid, FK, nullable): Optional reference to invoices.id
- `created_at` (timestamp): Record creation timestamp
- `created_by` (uuid, FK): Reference to users.id
- `updated_at` (timestamp): Last update timestamp

### Relationships

- Each user can create multiple clients, opportunities, invoices, KPIs, and events
- Each client can have multiple contacts, opportunities, and invoices
- Each invoice can have multiple invoice items
- Each KPI can have multiple KPI entries
- Each event can optionally be associated with a client

### Row-Level Security (RLS) Policies

For Supabase implementation, Row-Level Security policies would be implemented to ensure:

- Users can only view and modify data they have permission to access
- Admins have full access to all data
- Managers have access to data created by their team members
- Regular users can only access their own created data

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- React Router
- TanStack React Query
- Recharts
- shadcn/ui

## Getting Started

### Prerequisites

- Node.js (v16 or newer)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/your-username/crescita-crm.git
cd crescita-crm
```

2. Install dependencies
```bash
npm install
# or with yarn
yarn install
```

3. Start the development server
```bash
npm run dev
# or with yarn
yarn dev
```

4. Open your browser and navigate to `http://localhost:8080`

## Project Structure

```
crescita-crm/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── dashboard/   # Dashboard-specific components
│   │   ├── layout/      # Layout components (sidebar, topbar)
│   │   └── ui/          # UI component library
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions and libraries
│   ├── pages/           # Page components for each route
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Application entry point
├── README.md            # This file
└── package.json         # Project dependencies and scripts
```

## Deployment

To build the application for production:

```bash
npm run build
# or with yarn
yarn build
```

This will create a `dist` directory with the compiled assets ready for deployment.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Project Link: [https://github.com/your-username/crescita-crm](https://github.com/your-username/crescita-crm)

