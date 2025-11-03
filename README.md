# E-commerce Dashboard

A modern, responsive e-commerce admin dashboard built with Next.js 16, featuring real-time data visualization, product management, and comprehensive analytics.

**Live Demo:** https://akmal-ecommerce-dashboard.netlify.app

## 🔑 Login credentials:

```
email: user123@yahoo.com
password: 12345678
```

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [API Integration](#api-integration)
- [Features](#features)
- [Known Issues & Trade-offs](#known-issues--trade-offs)

## 🎯 Project Overview

This e-commerce dashboard provides a comprehensive admin interface for managing products, orders, customers, and inventory. Built with modern web technologies, it offers real-time data fetching, responsive design, and a clean, intuitive user interface.

### Key Features

- **Dashboard Overview**: Revenue trends, order analytics, and customer metrics
- **Product Management**: Browse and manage products with pagination
- **Order Tracking**: Recent orders with status indicators
- **Inventory Management**: Stock tracking and monitoring
- **Customer Management**: Customer overview and insights
- **Responsive Design**: Mobile-first approach with adaptive layouts

## 🛠 Tech Stack

### Core Framework

- **Next.js 16** (App Router) - React framework with server-side rendering
- **React 19** - UI library with latest features
- **TypeScript** - Type safety and developer experience

### UI & Styling

- **Material-UI (MUI)** - Component library
- **SCSS Modules** - Scoped styling with CSS variables
- **Iconsax** - Icon library
- **Plus Jakarta Sans** - Typography

### Data Management

- **TanStack Query (React Query)** - Server state management and data fetching
- **Axios** - HTTP client
- **Zustand** - Client-side state management

### Data Visualization

- **Recharts** - Charts and graphs

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static typing
- **typed-scss-modules** - SCSS module type generation

### Reasoning

- **Next.js App Router**: Modern routing with layouts, server components, and built-in optimization
- **React Query**: Handles caching, refetching, and loading/error states
- **MUI**: Accessible components with theming
- **SCSS Modules**: Scoped styles with shared design tokens
- **Zustand**: Minimal and simple state
- **TypeScript**: Better DX, fewer runtime errors

## 🏗 Architecture

### Design Patterns

- **Component-based**: Reusable UI pieces
- **Container/Presentational**: Separate data and presentation
- **Custom Hooks**: Reusable query hooks
- **Design Token System**: Global CSS variables
- **Mobile-first**: Responsive styles

### State Management

- **Server State**: TanStack Query (products, orders, analytics)
- **UI State**: Zustand (drawer/sidebar state)

### Data Flow

```
API (DummyJSON) → Axios Client → React Query → Custom Hooks → Components
```

## 📁 Folder Structure

```
src/
├── app/                          # Next.js App Router pages
│   ├── dashboard/
│   │   ├── overview/             # Dashboard overview
│   │   ├── products/             # Product management
│   │   ├── orders/               # Order management
│   │   ├── inventory/            # Inventory tracking
│   │   ├── customer/             # Customer management
│   │   ├── message/              # Messaging
│   │   └── layout.tsx            # Dashboard layout
│   ├── login/                    # Authentication
│   ├── layout.tsx                # Root layout
│   ├── provider.tsx              # Global providers
│   └── globals.scss              # Global styles
├── components/
│   ├── Dashboard/                # Dashboard-specific components
│   │   ├── ProductList/          # Product grid/list
│   │   ├── ProductSalesChart/    # Sales visualization
│   │   ├── RecentOrderTable/     # Orders table
│   │   ├── TopSellingProductTable/
│   │   └── TrendSection/         # KPI cards
│   ├── ui/                       # Reusable UI components
│   │   ├── Header/               # App header
│   │   ├── Sidebar/              # Navigation sidebar
│   │   └── ButtonIcon/           # Icon buttons
│   └── LoginForm/                # Login form
├── hooks/                        # Custom React hooks
│   ├── apiQuery/                 # API query hooks
│   │   └── useGetProducts.ts     # Products fetching
│   └── useDrawerStore.ts         # Sidebar state
├── lib/                          # Library configs
│   ├── axiosClient.ts            # Axios instance
│   └── queryKeys.ts              # React Query keys
├── types/                        # TypeScript types
│   └── product.ts                # Product interfaces
├── data/                         # Static/mock data
│   └── overviewData.ts           # Dashboard stats
├── utils/                        # Utility functions
│   └── statusHelpers.ts          # Status color helpers
├── styles/                       # Shared styles
│   └── _variables.scss           # Design tokens
└── theme/                        # MUI theme config
    └── theme.ts                  # Theme configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd ecommerce-dashboard
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server with SCSS watcher
- `npm run build` - Production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

### Environment Setup

Add environment for jwt token

```
SESSION_SECRET=12345678
```

## 🌐 API Integration

### Public API

**Base URL**: https://dummyjson.com

### Endpoints Used

#### Products

- `GET /products` - List all products
  - Query params: `skip`, `limit`
  - Response: Paginated products with metadata

```typescript
// Example usage
const { data, isLoading, error } = useGetProducts({ skip: 0, limit: 12 });
```

#### API Client Setup

Axios instance configured in `src/lib/axiosClient.ts`:

- Base URL: DummyJSON
- Timeout: 10 seconds
- Headers: JSON content-type

#### React Query Configuration

Located in `src/app/provider.tsx`:

- Stale time: 1 minute
- Refetch on window focus: disabled
- Automatic caching and refetching

### Data Models

```typescript
interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  stock: number;
  thumbnail: string;
  images: string[];
  brand: string;
  sku: string;
  // ... more fields
}
```

## ✨ Features

### Dashboard Overview

- Revenue, orders, average order value, customers
- Trend indicators
- Sales chart (Recharts)
- Top selling products table
- Recent orders table with status

### Product Management

- Grid layout
- Image thumbnails
- Category and SKU
- Price and stock
- Pagination
- Loading/error/empty states

### Responsive Design

- Mobile-first
- Breakpoints: sm (576px), md (768px), lg (992px), xl (1200px)
- Adaptive grid: 2 → 3 → 4 → 5 columns
- Mobile drawer for navigation

### UI/UX

- Plus Jakarta Sans typography
- CSS variable design tokens
- Hover transitions
- Status badges with color coding
- Consistent spacing and borders

## ⚠️ Known Issues & Trade-offs

### Current Limitations

1. **Mock Authentication**: Login flow uses hardcoded credentials
   - Trade-off: Focus on core features
   - Future: JWT integration

2. **Static Data**: Overview uses mock data
   - Trade-off: API access
   - Future: Real backend

3. **Limited CRUD**: No product/order creation/editing
   - Trade-off: Read-only for speed
   - Future: Full forms

4. **No Search/Filter**: Basic pagination only
   - Trade-off: Feature set
   - Future: Advanced filtering

### Technical Trade-offs

- **SCSS Modules**: Global variables via `next.config.ts` prepend
  - Watch CLI doesn’t pick up config
  - Impact: Manual typings may be needed

- **Styled Components**: MUI + SCSS instead of a single system

- **State Management**: Zustand + React Query
  - Simpler than Redux
  - Can split client/server concerns

## 🔗 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TanStack Query Docs](https://tanstack.com/query/latest)
- [Material-UI Docs](https://mui.com/)
- [DummyJSON API](https://dummyjson.com/docs)

## 📄 License

MIT

---

Built with ❤️ using Next.js and React
