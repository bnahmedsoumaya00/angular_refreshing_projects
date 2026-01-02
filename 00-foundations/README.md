# 🌱 Angular 19 Mastery — Project 00: Foundations  
**Goal**: Rebuild core mental model — standalone components, signals, modern control flow (`@if`)  
**Duration**: Day 1 / 5  
**Status**: ✅ Day 1 Complete  

---

## 🎯 Day 1: Manual Component + `@if` + Signals

### ✅ What I Built
- Created `HelloComponent` **entirely by hand** (no `ng generate`)
- Used Angular 19 modern syntax:
  - `@if` / `@else` (replaces `*ngIf`)
  - `signal()` for reactive state
  - `() => !prev` pattern for state toggling
- Integrated into `AppComponent` via `imports: []` (standalone style)

### 📁 Key Files
| File | Purpose |
|------|---------|
| `src/app/hello.component.ts` | Manually created component with signals & `@if` |
| `src/app/app.component.ts` | Root component — imports and uses `HelloComponent` |

### 💡 Key Concepts Learned
| Concept | Why It Matters | My Note |
|--------|----------------|---------|
| `signal()` | Lightweight reactive state (no RxJS needed for simple cases) | ✅ Must call as function `name()` in template to read |
| `@if` / `@else` | Modern, readable control flow (no `*ngIf` microsyntax) | Cleaner than `*ngIf`; supports `@else` natively |
| Standalone `imports` | No NgModules — components declare their own dependencies | `HelloComponent` is imported directly in `AppComponent` |
| `.update()` | Safe mutation — avoids stale closures | Prefer over `.set()` when new value depends on old |

### 🛠️ How to Run
```bash
npm install
ng serve
