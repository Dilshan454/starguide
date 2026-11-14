<div align="center">

# ✨ StarGuide

**A Cross-Platform Stargazing & Constellation Exploration Application**

[![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![AsyncStorage](https://img.shields.io/badge/AsyncStorage-Local_Persistence-38BDF8?style=for-the-badge)](https://react-native-async-storage.github.io/async-storage/)

</div>

---

## 🌌 Overview

**StarGuide** is a sleek, cross-platform mobile and web application built with **React Native** and **Expo** for astronomy enthusiasts and stargazers. Designed with an immersive dark-themed night sky aesthetic (`#0B0F19`) and a custom procedural `StarWatermark` background, StarGuide offers an intuitive offline guide to major constellations, upcoming celestial events, and a personal stargazing observation log.

---

## 🚀 Key Features

* **🌠 Immersive Night Sky UI:** Crafted with a deep midnight palette and a dynamically generated `StarWatermark` component across all screens for an authentic stargazing atmosphere.
* **🔭 Constellation Explorer:** Browse and search through major constellations (including Orion, Ursa Major, Cassiopeia, Cygnus, Gemini, Leo, Lyra, Scorpius, Taurus, and Crux)[cite: 1].
* **📖 Rich Constellation Details:** View high-resolution constellation visuals seamlessly blended into the night sky backdrop, alongside mythology, key stars, best viewing seasons, hemisphere visibility, and sky-locating guides.
* **📅 Celestial Events Tracker:** Stay updated on upcoming meteor showers, eclipses, planetary alignments, and astronomical phenomena.
* **📝 Personal Observation Log:** Record and manage your stargazing sessions locally using `AsyncStorage` for persistent offline access.
* **📱 Cross-Platform Responsiveness:** Engineered with platform-specific layout optimizations (`Platform.OS`) to ensure consistent rendering and image scaling across iOS, Android, and Web browsers.

---

## 🛠️ Tech Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | React Native (Expo SDK) |
| **Navigation** | React Navigation |
| **Icons & UI** | `@expo/vector-icons` (Ionicons), Custom `StarWatermark` |
| **Local Storage** | `@react-native-async-storage/async-storage` |
| **Platforms** | Android, iOS, Web |

---

## 📂 Project Structure

```text
StarGuide/
├── assets/
│   └── images/               # High-resolution constellation assets
├── src/
│   ├── components/
│   │   └── StarWatermark.jsx # Procedural night sky starfield background
│   └── screens/
│       ├── DashboardScreen.jsx
│       ├── ExplorerScreen.jsx
│       ├── DetailScreen.jsx
│       ├── EventsScreen.jsx
│       └── LogScreen.jsx
├── App.js                    # Root navigation & application entry
└── package.json