# 🌟 Soumaya’s Angular Mastery Journey
> *“I understand every line I write.”*
> **Started**: January 2, 2026
> **Goal**: Full mastery of modern Angular (v19 → v21), ready for PFE, production apps, and open contribution
> **Philosophy**: No AI-generated code. No copy-paste. Deep, hands-on, concept-first learning.

---

## 🎯 Why This Journey?

As a full-stack developer who built systems like the **Smart Pharmacy**, **Pet E-Commerce**, and **Hospital Management System**, I need Angular that is:

- ✅ **Secure** — aware of XSS, CSP, sanitization
- ✅ **Performant** — lazy loading, deferrable views, bundle-aware
- ✅ **Maintainable** — clean architecture, testable, documented
- ✅ **Future-proof** — signals-first, standalone, aligned with Angular 20/21
- ✅ **Aligned with my projects**:
  - 🌍 Real-time Environmental Monitoring App (PFE 2026)
  - 🏥 Hospital System enhancements
  - 🐾 Ionic + Angular mobile apps

This is not just “learning Angular” — it’s **engineering discipline in practice**.

---

## 🛠️ Verified Tech Stack

| Layer             | Tool           | Version    | Notes |
|-------------------|----------------|------------|-------|
| **Runtime**       | Node.js        | `v22.18.0` | LTS, supports Angular 19+ |
| **Package Manager** | npm          | `11.5.2`   | Global CLI in `AppData\Roaming\npm` |
| **Framework**     | Angular        | `19.2.17`  | `@angular/core`, standalone-first |
| **CLI**           | `@angular/cli` | `19.2.19`  | Used to scaffold & update |
| **Language**      | TypeScript     | `5.5.4`    | Strict mode disabled for learning clarity |
| **Styling**       | SCSS           | —          | Preprocessor for maintainable CSS |
| **Editor**        | VS Code        | —          | + Angular Extension Pack, ESLint, Prettier |

✅ All verified via:
```bash
node -v        # v22.18.0
npm -v         # 11.5.2
ng version     # Angular CLI: 19.2.19, Angular: 19.2.17
```

---

## 📂 Project Structure

Each project is **independent**, **self-contained**, and **progressively builds skills**.

```
angular-mastery/
├── 📁 00-foundations/        # Days 1–5: Core — signals, @if, @for
├── 📁 01-routing-state/      # Days 6–11: Routing, guards, shared state
├── 📁 02-forms-http/         # Days 12–17: Forms, HttpClient, MSW
├── 📁 03-advanced-patterns/  # Days 18–24: @defer, security, PFE prep
├── 📁 04-pwa-deploy/         # Days 25–29: PWA, Firebase, CI/CD
├── 📄 README.md              # ← This file (master roadmap)
└── 📄 roadmap.md             # Daily progress tracker
```

Each project folder contains:
- ✅ `README.md` — daily journal, concepts, debugging notes
- ✅ Source code — **100% hand-written**, no AI
- ✅ `angular.json`, `package.json` — pinned to Angular 19.2.x

---

## 📅 Detailed Learning Plan: 29 Days, 5 Weeks

#### **Week 1: Foundations (Days 1–5)**  
**Goal**: Master core reactive primitives and modern templating.

- **Day 1**:  
  - Create `HelloComponent` manually  
  - Use `signal()` for reactive state  
  - Implement `@if` / `@else` control flow  
  - Understand template interpolation with signals (`{{ name() }}`)

- **Day 2**:  
  - Introduce `computed()` for derived state (e.g., `completedCount`)  
  - Use `effect()` for side effects (e.g., console logging)  
  - Build `TaskItemComponent` with `input()` for properties  
  - Compose components: `TaskListComponent` → `TaskItemComponent`

- **Day 3**:  
  - Render lists with `@for`  
  - Use `track` by stable identifier (`track task.id`)  
  - Handle empty states with `@empty`  
  - Add dynamic task generation

- **Day 4**:  
  - Emit events with `output()` (modern `@Output` replacement)  
  - Build task creation form with two-way binding  
  - Handle user input validation (basic)  
  - Update parent state from child component

- **Day 5**:  
  - Persist tasks to `localStorage` using `effect()`  
  - Rehydrate state on app load  
  - Debug with Angular DevTools (signals inspection)  
  - Review common errors: expression changed, missing imports

---

#### **Week 2: Routing & State Management (Days 6–11)**  
**Goal**: Build multi-page app with shared, persistent state.

- **Day 6**:  
  - Set up `RouterModule` in standalone app  
  - Define routes: `/`, `/tasks`, `/settings`  
  - Use `routerLink`, `RouterOutlet`  
  - Navigate programmatically

- **Day 7**:  
  - Implement route guard: `canActivate`  
  - Create mock `AuthService` with signal-based auth state  
  - Protect `/tasks` route  
  - Redirect unauthenticated users

- **Day 8**:  
  - Configure lazy loading for feature routes  
  - Use `import()` + standalone component config  
  - Verify bundle splitting with `ng build --stats-json`

- **Day 9**:  
  - Build shared `TaskService`  
  - Expose tasks as `signal()` + `computed()` API  
  - Inject service via `inject()` in components  
  - Share state across routes

- **Day 10**:  
  - Sync service state to `localStorage`  
  - Handle initial load race conditions  
  - Add loading indicators (static)

- **Day 11**:  
  - Implement route resolvers  
  - Pre-fetch data before activation  
  - Handle errors in guards/resolvers

---

#### **Week 3: Forms & HTTP Integration (Days 12–17)**  
**Goal**: Connect to backend (mocked), handle user input robustly.

- **Day 12**:  
  - Build reactive form with `FormControl`, `FormGroup`  
  - Add sync validators: `required`, `minLength`  
  - Display validation errors dynamically

- **Day 13**:  
  - Create custom validator (e.g., “title must be unique”)  
  - Debounce async validation  
  - Style error states (SCSS)

- **Day 14**:  
  - Integrate `HttpClient`  
  - Fetch tasks from `/api/tasks`  
  - Handle loading and error states  
  - Use `async` pipe with `Observable`

- **Day 15**:  
  - Implement `HttpInterceptor`  
  - Add auth header injection  
  - Global error handler (toast/snackbar)  
  - Loading spinner interceptor

- **Day 16**:  
  - Set up **Mock Service Worker (MSW)**  
  - Mock REST endpoints: GET, POST, PATCH, DELETE  
  - Simulate network delays and errors  
  - Decouple frontend from backend progress

- **Day 17**:  
  - Build optimistic UI updates  
  - Update UI before API response  
  - Rollback on error  
  - Add undo capability

---

#### **Week 4: Advanced Patterns (Days 18–24)**  
**Goal**: Prepare for production and your PFE 2026.

- **Day 18**:  
  - Use `@defer` for lazy-loading components  
  - Trigger on `viewport`, `idle`, `timer`  
  - Add `@placeholder`, `@loading`, `@error`

- **Day 19**:  
  - Convert entire app to pure standalone (no `NgModule` remnants)  
  - Bootstrap with `provideHttpClient()`, `provideAnimations()`  
  - Clean up `main.ts`

- **Day 20**:  
  - Implement View Transitions API  
  - Smooth route/page transitions  
  - Fallback for unsupported browsers

- **Day 21**:  
  - Add responsive design (mobile-first)  
  - Use SCSS mixins for breakpoints  
  - Touch-friendly interactions

- **Day 22**:  
  - Introduce Vitest for component testing  
  - Test `computed()` logic  
  - Mock signals in tests

- **Day 23**:  
  - Add security hygiene:  
    - Sanitize dynamic content  
    - Avoid `[innerHTML]` risks  
    - CSP considerations

- **Day 24**:  
  - Hybrid signals + RxJS:  
    - `toSignal()` from `Observable`  
    - `toObservable()` from `Signal`  
    - When to use each

---

#### **Week 5: Deployment & Polish (Days 25–29)**  
**Goal**: Ship a production-ready PWA.

- **Day 25**:  
  - Run `ng build --configuration production`  
  - Analyze bundle with `source-map-explorer`  
  - Remove unused dependencies

- **Day 26**:  
  - Add PWA support: `ng add @angular/pwa`  
  - Configure `manifest.webmanifest`  
  - Test offline behavior

- **Day 27**:  
  - Deploy to Firebase Hosting  
  - Configure `firebase.json`  
  - Set up custom domain (optional)

- **Day 28**:  
  - Create GitHub Actions workflow  
  - Auto-deploy on `main` push  
  - Run build + test in CI

- **Day 29**:  
  - Final review: performance, accessibility, security  
  - Document architecture decisions  
  - Plan next steps: Ionic integration, PFE extension

---

## 🧠 Core Principles

| Principle | Practice |
|---------|----------|
| **Depth > Speed** | Spend 2 days on `computed()` if needed — no rushing. |
| **Own Every Line** | Type all code manually. No AI, no Copilot, no copy-paste. |
| **Break to Learn** | Intentionally cause errors (e.g., omit `imports: []`) to understand diagnostics. |
| **Document as I Go** | `README.md` is my second brain — precise, honest, useful. |
| **Build for Real** | Every project connects to PFE, sustainability, or security goals. |

---

## 🔍 Day 1: Foundations — Sample Code

Here’s the first component you built — clean, modern, Angular 19.

### `src/app/hello.component.ts`
```ts
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <div class="hello-card">
      <h2>Hello, {{ name() }}! 👋</h2>

      @if (showGreeting()) {
        <p>Welcome to Angular {{ version }} learning.</p>
      } @else {
        <p>Click "Show Greeting" to continue.</p>
      }

      <button (click)="toggleGreeting()">
        {{ showGreeting() ? 'Hide' : 'Show' }} Greeting
      </button>
    </div>
  `,
  styles: [`
    .hello-card {
      padding: 1.5rem;
      border: 2px solid #4CAF50;
      border-radius: 12px;
      background: #f8fff8;
      margin: 1.5rem 0;
      text-align: center;
    }
    button {
      margin-top: 1rem;
      padding: 0.5rem 1.5rem;
      background: #4CAF50;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
  `]
})
export class HelloComponent {
  name = signal('Soumaya');
  showGreeting = signal(false);
  version = '19';

  toggleGreeting() {
    this.showGreeting.update(prev => !prev);
  }
}
```

### Key Takeaways
- ✅ `signal()` for reactive state
- ✅ `{{ name() }}` — **must call as function**
- ✅ `@if` / `@else` — modern, readable control flow
- ✅ `.update(prev => !prev)` — safe mutation

---
## 🙌 Acknowledgements

- **Angular Team** — for a framework that balances innovation and stability.
- **My past self** — for the discipline to document, reflect, and never settle for “it works”.