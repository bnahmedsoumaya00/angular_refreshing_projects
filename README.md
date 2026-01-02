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

## 🗺️ Integrated Roadmap

| # | Project | Duration | Status | Key Outcomes |
|---|---------|----------|--------|--------------|
| **00** | **Foundations**<br>*“Task Core”* | Day 1–5 | ✅ Day 1 | • Standalone components<br>• `signal()`, `computed()`, `effect()`<br>• `@if`, `@for`, `@switch` |
| **01** | **Routing & State**<br>*“Task Manager”* | Day 6–11 | ⏳ | • Routing + guards<br>• Lazy loading<br>• `localStorage` sync |
| **02** | **Forms & HTTP**<br>*“Task API”* | Day 12–17 | ⏳ | • Reactive forms<br>• `HttpClient` + interceptors<br>• Mock Service Worker (MSW) |
| **03** | **Advanced Patterns**<br>*“Eco-Monitor Lite”* | Day 18–24 | ⏳ | • `@defer` + `@placeholder`<br>• View Transitions<br>• XSS prevention<br>• ⚙️ **PFE 2026 prep** |
| **04** | **PWA & Deploy**<br>*“Deployed Task PWA”* | Day 25–29 | ⏳ | • Bundle analysis<br>• PWA (`@angular/pwa`)<br>• Firebase Hosting + GitHub Actions |

---

### 📅 Weekly Goals

| Week | Dates | Focus | Success Metric |
|------|-------|-------|----------------|
| **Week 1** | Jan 2–8 | 🧱 Project 00 | ✅ 5 daily `README.md` updates<br>✅ Working task list with signals |
| **Week 2** | Jan 9–15 | 🧭 Project 01 | ✅ Multi-page app with auth guard<br>✅ Tasks persist after refresh |
| **Week 3** | Jan 16–22 | 📝 Project 02 | ✅ Task CRUD with mock API<br>✅ Form validation + error UX |
| **Week 4** | Jan 23–29 | ⚡ Project 03 | ✅ Deferred sensor charts<br>✅ Mobile-responsive dashboard |
| **Week 5** | Jan 30–Feb 5 | 🚀 Project 04 | ✅ Live PWA at `*.web.app`<br>✅ Auto-deploy on `git push` |

> 📌 **Target Completion**: **February 5, 2026**

---

### 📊 Progress Dashboard

```text
Project 00: ██████████░░░░░░░░░░ 20% (Day 1/5)
Project 01: ░░░░░░░░░░░░░░░░░░░░ 0%
Project 02: ░░░░░░░░░░░░░░░░░░░░ 0%
Project 03: ░░░░░░░░░░░░░░░░░░░░ 0%
Project 04: ░░░░░░░░░░░░░░░░░░░░ 0%

Overall: ████░░░░░░░░░░░░░░░░░░ 8% → 29 days
```

🔁 *Updated daily in [`roadmap.md`](roadmap.md)*

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