# React Coding Assignment (Frontend Engineer Role) - JustGo

## How to Run

1. **Install Dependencies**: 
   Ensure you have [pnpm](https://pnpm.io/installation) installed. Run the following command:
   ```bash
   pnpm install
   ```

2. **Environment Setup**:
   Copy `.env.example` to a new file named `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
   Open `.env.local` and replace `replace_with_api_base_url` with the actual API base URL.

3. **Start Development Server**:
   ```bash
   pnpm dev
   ```

---

## Technical Questions & Trade-offs

### 1. What trade-offs did you consciously make due to time constraints?
- **Loading Skeletons**: Skipped implementing loading skeletons to prioritize core functionalities first.
- **Responsiveness**: Adopted a desktop-first approach. While the layout supports basic responsiveness, detailed device-specific refinements can be done in the future iterations.

### 2. If this app needed to scale, what would you refactor first?
- **Feature-First Architecture**: Reorganize global assets (shared hooks, components, services, and types) into their respective feature domains to better align with a feature-centric structure. This would include:
  - Consolidate feature-specific resources.
  - Introducing clearer service boundaries for API interactions.
- **Shared UI Library**: Extract reusable UI components into a well-documented design system or component library for consistency and reuse.
- **Pre-commit hooks**: Implement pre-commit hooks to enforce code quality and formatting standards.

### 3. Did you use AI tools?
**Yes**, I used AI tools (Copilot in WebStorm and Antigravity, like gemini and claude) for:
- Implementing reusable UI components and custom hooks based on requirements.
- Writing and integrating service/api layers for data fetching.
- Refactoring UI code and identifying potential issues early.
- **Verification**: All AI generated code was carefully reviewed line by line and manually tested in the browser by me to ensure correctness.
