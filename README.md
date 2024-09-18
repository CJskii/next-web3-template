# **Next.js + Rainbowkit + SIWE + shadcn Template**

A **Next.js** Web3 project template, powered by **TypeScript**, **RainbowKit**, **Wagmi**, **Shadcn**, and **TailwindCSS**. This template is designed to streamline the creation of Web3 applications with **SIWE (Sign-In With Ethereum)** authentication, a theme toggler, and modern design patterns.

---

## ✨ **What's Included**

This template includes the following key features:

- **Next.js** with **TypeScript**: Full TypeScript support for modern, scalable applications.
- **RainbowKit + Wagmi**: Seamless Ethereum wallet connection and Web3 functionality with built-in wallet UI.
- **SIWE (Sign-In With Ethereum)**: Pre-configured authentication solution for decentralized logins using NextAuth.
- **TailwindCSS**: A utility-first CSS framework for fast and responsive design.
- **Shadcn Components**: A customizable component library built on TailwindCSS for building modern UIs.
- **Theme Toggle**: Dark/light mode toggler with TailwindCSS-based theme switching.
- **React Query**: Integrated for managing server state and caching.
- **NextAuth**: Secure authentication setup, with support for Web3-based logins.
- **Bun** for Fast Package Management: Support for Bun to speed up dependency installation and script execution.

---

## 🎯 **Goals of This Template**

The **Next.js + SIWE Template** aims to provide developers with a quick and efficient starting point for building Web3 applications. The key objectives are:

- **Speed**: Reduce the time to start a Web3 project by providing a pre-configured Next.js setup.
- **Ease of Use**: Provide a fully functional template that includes wallet integration, authentication, and styling out of the box.
- **Customizable**: Allow developers to extend or modify the template as per their project needs.
- **Best Practices**: Promote best practices by using well-maintained libraries like RainbowKit, Wagmi, NextAuth, Shadcn, and TailwindCSS.

---

## 🚀 **Getting Started**

### **Use This Template**

1. **Clone the Template:**

   Click the **"Use this template"** button at the top of this repository to create a new project based on this template.

2. **Clone via CLI:**

   Alternatively, you can clone the repository using the CLI:

   ```bash
   git clone https://github.com/CJskii/next-web3-template.git my-web3-app
   cd my-web3-app

   ```

3. **Install Dependencies:**

This project uses Bun for managing dependencies. If you don't have Bun installed, follow the installation instructions [here](https://bun.sh/docs/installation).

- Once Bun is installed, run:

```bash
bun install
```

- Set up Environment Variables:

Copy the .env.example file to .env.local and update the variables as needed:

```bash
cp .env.example .env.local
```

- Start the development server:

```bash
bun run dev
```

- Open http://localhost:3000 to view the app.

## 🛠️ How to Contribute

We welcome contributions to improve this template. Here's how you can get involved:

- Fork the repository: Start by forking this repository to your GitHub account.

- Clone your fork: Clone your forked repository to your local machine.

```bash
git clone https://github.com/yourusername/next-web3-template.git
cd next-web3-template
```

- Create a new branch: Create a new branch for your feature or fix.

```bash
git checkout -b feature/your-feature-name
```

- Make your changes: Make the necessary changes to the template.

- Commit your changes:

```bash
git add .
git commit -m "Add your feature description here"
```

- Push your changes:

```bash
git push origin feature/your-feature-name
```

- Open a pull request: Submit a pull request to the main repository for review.

## 🎯 **Feature Requests**

Have an idea for a new feature? We'd love to hear from you! Please [open an issue](https://github.com/yourusername/next-web3-template/issues) with a detailed description of the feature you'd like to see added to this template.

Feel free to include:

- The use case or problem the feature solves.
- How it fits within the current goals of the template.
- Any relevant links or references that may help explain your request.

---

## 🔧 **Project Structure**

```bash
next-web3-template/
│
├── public/                # Public assets (e.g., favicon, images)
├── src/                   # Source files
│   ├── components/        # UI components
│   │   ├── ui/            # UI elements and components
│   │   │   ├── head-component.tsx
│   │   │   ├── page-layout.tsx
│   │   │   └── theme-provider.tsx
│   ├── lib/               # Utility functions and configurations
│   │   └── utils.ts
│   ├── pages/             # Next.js pages and API routes
│   │   ├── api/           # API routes (e.g., NextAuth, SIWE)
│   │   ├── _app.tsx       # Next.js custom App component
│   │   └── index.tsx      # Homepage
│   ├── styles/            # Global and module styles
│       └── globals.css
│   └── wagmi.ts           # Wagmi configuration for Web3
├── .env.example           # Example environment variables
├── .env.local             # Local environment variables (shouldn't be committed)
├── .gitignore             # Files and directories to ignore in Git
├── bun.lockb              # Bun lock file for dependencies
├── components.json        # Shadcn component configuration
├── next-env.d.ts          # Next.js environment types
├── next.config.js         # Next.js configuration
├── package.json           # Project dependencies and scripts
├── postcss.config.js      # PostCSS configuration for TailwindCSS
├── README.md              # Project documentation
├── tailwind.config.ts     # TailwindCSS configuration
└── tsconfig.json          # TypeScript configuration
```

---

## 📃 **License**

This project is licensed under the [MIT License](LICENSE).

---

## 📢 **Contact**

For any questions or inquiries, feel free to reach out via [GitHub issues](https://github.com/yourusername/next-web3-template/issues) or open a discussion. We're happy to hear from the community and help with any issues you may encounter.
