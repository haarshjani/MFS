# Customer Portal

A monorepo project built using **pnpm workspaces**, providing a customer account dashboard with transaction details through micro frontends.

---

## 🧭 Project Overview

The **Customer Portal** allows users to:

- View account details  
- Access related transaction history  

This system uses a microfrontend architecture, with each part of the application split into independently deployable modules.

---

## 🏗 Project Structure

The repository is structured as a **monorepo** using [`pnpm`](https://pnpm.io/) with workspace configuration defined in `pnpm-workspace.yaml`.


### 🧩 Apps and Packages

- **Main App**  
  Acts as the shell container, configured to consume Micro Frontends via Webpack Module Federation.

- **Accounts**  
  Micro Frontend 1 providing customer account information.

- **Transaction**  
  Micro Frontend 2 displaying detailed transaction data.

- **ui-kit**  
  Shared library for UI components and utility functions, used across all micro frontends.

- **data**  
  A librery contains fixture data with file named db.js for the **json-graphql-server**
  service running on port 8090
---

## 🏛 Architecture

The project leverages **custom Webpack Module Federation** to manage the shell and its associated micro frontends using `ModuleFederationPlugin`.

### 🔧 Key Technologies

- **React Native** – For cross-platform development  
- **react-native-web** – Enables React Native components to run on the web  
- **react-native-paper** – UI component library  
- **mitt** – Lightweight event emitter for cross-app communication  

---

## 🚀 Getting Started

From the project root directory:

```bash
pnpm add -g json-graphql-server #Install graphql API
json-graphql-server data/db.js --port 8090. #Runs graphql API

pnpm install     # Install all dependencies
pnpm start       # Start all development servers
```

# 📦 Production Strategy & Integration

This project is designed with deployment flexibility and scalability in mind.

### 🔹 Containerization

- Each app (Main App, Accounts, Transaction, UI Kit) is **containerized using Docker** for isolated, reproducible environments.
- Enables consistent builds and easier team collaboration.

### 🔹 Reverse Proxy with Nginx

- **Nginx** is configured as a reverse proxy to serve microfrontends.
- It routes requests to the appropriate container/service, improving modularity and scalability.

### 🔹 Deployment Flexibility

- Designed for **multi-platform deployment**, including:
  - AWS (Elastic Beanstalk, ECS, EKS)
  - GCP (Cloud Run, GKE)
  - DigitalOcean, Azure, and others

- Apps are **environment-agnostic**, making it easy to migrate or scale across platforms.

### 🔹 Shared Library Strategy (`ui-kit`)

- The `ui-kit` (shared components & utilities) can be:
  - Published as an **npm package** for use across projects
  - Or containerized and loaded remotely via Module Federation

### 🔹 Version Control

- **Git** is used for all versioning, branching, and team collaboration.

---

# ⚠️ Known Issues & Limitations

While the architecture supports cross-platform development, there are known limitations:

### 🔸 Component Behavior

- **UI components** may behave differently on **web vs. mobile** due to differences in rendering engines.

### 🔸 Platform-Specific Libraries

- Cross-platform development often requires different libraries:
  - **Mobile**: `react-navigation`
  - **Web**: `react-router-dom`

### 🔸 Conditional Logic for Platform Handling

You may need to add platform-specific logic like:

```js
if (Platform.OS === 'web') {
  // Web-specific code
}
```

🔸 Testing Complexity
- Different platforms require different testing tools:
  - Web
    - Jest + React Testing Library
    - Cypress (for end-to-end testing)
  - Mobile:
    - Jest + React Native Testing Library
    - Detox (for end-to-end testing)
This separation can increase the time and effort required for test coverage.


