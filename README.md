# 🛍️ ShopHub  
**Production-Style E-commerce Frontend Architecture**

ShopHub is a **modern, scalable e-commerce application** built with **React 19 + TypeScript**, structured using a **feature-driven architecture** that mirrors real-world frontend engineering practices.

This project prioritizes:

- Scalable code organization  
- Strong type safety  
- Server-state vs client-state separation  
- Performance optimization  
- Accessibility (A11y)  
- Clean architectural boundaries  

---

## 🚀 Live Demo


---

## 📸 Screenshots


- Product Catalog  
- Product Detail  
- Cart Drawer  
- Checkout Flow  
- User Profile  

---

## 🧠 Architecture Philosophy

ShopHub is not just a UI project — it is designed to simulate how a **production-grade frontend system** is structured.

### Key Principles

- Feature-based modular architecture  
- Separation of concerns  
- Typed contracts between layers  
- Reusable UI primitives  
- Server-state handled independently from UI  

---

## 🧰 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 19 |
| Language | TypeScript (strict mode) |
| Routing | React Router v6 |
| Server State | TanStack React Query |
| Global State | Context |
| HTTP Client | Axios |
| Forms | React Hook Form + Zod |
| Styling | Tailwind CSS |
| UI Accessibility | Shadcn ui |
| Animations | Framer Motion |
| Build Tool | Vite |

---

## ✨ Core Features

### 🔐 Authentication
- Login / Logout  
- Protected routes  
- Session persistence  
- User profile  

### 🛍 Product Catalog
- Responsive grid  
- Pagination  
- Product details  
- Ratings & stock display  

### 🔎 Search & Filters
- Debounced search  
- Category filtering  
- Price range filtering  
- Sorting  

### 🧺 Shopping Cart
- Add / remove items  
- Quantity management  
- Cart persistence  
- Tax & total calculations  

### 💳 Checkout Simulation
- Form validation (Zod)  
- Payment method selection  
- Order confirmation  

### ⭐ Advanced
- Favorites  
- Order history  
- Recommendations  

---

## 🏗 Project Structure

This project uses a **Feature + App Layer architecture**:

```
src/
├── app/
├── features/
├── components/
├── pages/
├── hooks/
├── lib/
├── utils/
├── types/
├── styles/
├── config/
└── assets/
```

---

## 🔥 App Layer (`src/app`)

Handles global wiring and infrastructure:

- Providers (React Query, Auth, Theme)  
- Route configuration  
- Protected route handling  

---

## 🧩 Feature Modules (`src/features`)

Each feature is a **self-contained domain**:

| Feature | Responsibility |
|--------|----------------|
| auth | Authentication logic & state |
| products | Catalog, filtering, product data |
| cart | Shopping cart state & UI |
| checkout | Order process & validation |
| favorites | Wishlist functionality |

Each feature contains:

```
components/
hooks/
services/
store/
types/
utils (optional)
```

---

## 🧱 Shared Components (`src/components`)

- **ui/** → Reusable primitives (Button, Card, Modal, etc.)  
- **layout/** → Header, Footer, Sidebar, Layout  
- **common/** → Cross-feature utilities (Pagination, ErrorBoundary)  

---

## ⚙️ Getting Started

### 1️⃣ Clone

```bash
git clone https://github.com/brunomanuel00/ShopHub-E-Commerce.git
cd ShopHub-E-Commerce
```

### 2️⃣ Install

```bash
pnpm install
```

### 3️⃣ Environment Variables

Create `.env`:

```
VITE_API_URL=https://dummyjson.com
```

### 4️⃣ Run Dev Server

```bash
pnpm run dev
```

---

## 🧪 Scripts

| Command | Purpose |
|--------|---------|
| pnpm run dev | Start dev server |
| pnpm run build | Production build |
| pnpm run preview | Preview build |
| pnpm run test | Run tests |

---

## ⚡ Performance Strategy

- Route lazy loading  
- React Query caching  
- Optimistic UI updates  
- Memoization  
- Image lazy loading  

---

## ♿ Accessibility

- Keyboard navigation  
- ARIA labels  
- Focus states  
- Semantic HTML  
- WCAG color contrast  

---

## 🔒 Security

- Input validation  
- Safe token handling  
- XSS prevention  
- Sanitized inputs  

---

## 🧠 Architectural Decisions & Trade-offs

### Why React Query instead of Redux for server data?
Server state has different constraints (caching, background refetching, pagination). React Query is purpose-built for async data, reducing boilerplate and improving performance.

### Why React Context instead of Redux Toolkit?
The application uses **React Context** + **custom hooks** for managing client-side domains like authentication and UI state.

At the current scale of the project:

The state surface is relatively small

No complex cross-feature state orchestration is required

**React Context keeps the solution native, lightweight, and dependency-free**

This approach reduces boilerplate while remaining scalable through feature-level encapsulation and separation of concerns. If the application grows in complexity (e.g., advanced caching logic, large-scale shared state, or real-time synchronization), migrating to a dedicated state manager like Redux Toolkit or Zustand would be a natural evolution.

### Why Feature-Based Structure?
Encapsulating each business domain improves maintainability and allows independent scaling of features without tight coupling.

### Why Tailwind instead of component libraries?
Gives full design control, smaller bundle size, and avoids style overrides common with UI frameworks.

---

## 🚀 Future Improvements

- PWA support  
- Internationalization  
- Analytics dashboard  
- Coupons system  

---

## 👨‍💻 Author

**Bruno Coello**  
Frontend Developer focused on React architecture and scalable UI systems.

---

## 📄 License

MIT
