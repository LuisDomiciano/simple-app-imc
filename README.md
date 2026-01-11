# 📱 BMI (IMC) Calculator App

This is a simple **BMI (Body Mass Index) calculator app** built with **React Native**, **Expo**, and **TypeScript**.

The project is focused on learning and practicing **clean code**, **MVVM architecture**, and basic mobile app structure.  
Tests are planned, but **not implemented yet**.

---

## ✨ Features

- Calculate BMI using weight and height
- Clear BMI classification:
  - Underweight
  - Normal
  - Overweight
  - Obesity
- Input validation with friendly error messages
- Reusable UI components (`Button`, `Input`)
- Clean separation between UI and logic (MVVM)
- Simple and readable codebase

---

## 🛠️ Tech Stack

- **React Native**
- **Expo (Managed Workflow)**
- **TypeScript**
- **MVVM Architecture**
- **StyleSheet (no UI libraries)**

---

## 📂 Project Structure

```
src/
├── components/ # Reusable UI components
│ ├── Button.tsx
│ └── Input.tsx
├── models/ # Domain models
│ └── ImcResult.ts
├── services/ # Business logic
│ └── ImcService.ts
├── utils/ # Validators and helpers
│ └── validators.ts
├── view/ # Screens (UI)
│ └── ImcView.tsx
├── viewmodel/ # State and presentation logic
│ └── ImcViewModel.ts
└── styles/ # StyleSheet files
└── styles.ts

```

---

## ▶️ Running the Project

Install dependencies:

```bash
npm install
npm start
```

### Then choose one option in the terminal:

- Press a → Android
- Press i → iOS
- Press w → Web

## 🧮 How BMI Is Calculated

BMI is calculated using the following formula:

**Example:**

- Weight: 70 kg
- Height: 1.75 m
- Result: **BMI ≈ 22.86 (Normal)**

---

## 🧪 Tests (Coming Soon)

End-to-end tests using **Detox** are planned and will be added in a future update.

The app is already prepared for testing with:

- Stable `testID`s
- Clear separation between UI and business logic
- Predictable and reusable components

---

## 🎯 Why MVVM?

The MVVM architecture helps keep the app clean and well organized:

- The UI stays simple and focused
- Business logic is easy to test
- Better scalability as the app grows
- Easier to understand, maintain, and extend

---

## 🚀 Future Improvements

- End-to-end tests with Detox
- Unit tests with Jest
- Improved UI/UX
- Dark mode support
- Persist last BMI calculation
- Internationalization (i18n)
