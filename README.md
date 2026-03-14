# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

### Open on your phone (no Android Studio needed)

1. **Install Expo Go** on your phone: [Android (Play Store)](https://play.google.com/store/apps/details?id=host.exp.exponent) or [iOS (App Store)](https://apps.apple.com/app/expo-go/id982107779).
2. **Recommended (same Wi‑Fi):** Put your phone and PC on the **same Wi‑Fi**, then run:
   ```bash
   npx expo start
   ```
   When the QR code appears, open **Expo Go** and scan it (Android: “Scan QR code”; iOS: Camera → tap the banner). The app will load — no tunnel needed.
3. **If you’re on a different network** and need a tunnel, run:
   ```bash
   npm run start:tunnel
   ```
   On **Windows**, tunnel often fails with “The system cannot find the path specified”:
   - **Antivirus:** Windows Defender (or other AV) may block the tunnel binary. Add an exclusion for the project folder or allow the ngrok/Expo process.
   - **Fallback:** Use the same Wi‑Fi method above, or connect your phone to your PC’s hotspot so they’re on the same network, then use `npx expo start` and scan the QR code.

---

## Hosting and distribution

### 1. Host the app on the web

To build and host the **web** version so anyone can open it in a browser:

```bash
npx expo export -p web
```

This creates a static site in the `dist/` folder. Deploy that folder to any static host:

- **Vercel:** Drag the `dist` folder to [vercel.com](https://vercel.com), or connect your repo and set build command to `npx expo export -p web` and output directory to `dist`.
- **Netlify:** Connect the repo, build command `npx expo export -p web`, publish directory `dist`.
- **GitHub Pages / others:** Upload the contents of `dist/` to your host.

Your app will be available at a URL like `https://your-project.vercel.app`.

---

### 2. Create a shareable Android APK

To build an **APK file** you can share (e.g. via link or file transfer) so people can install the app without the Play Store:

1. **Create an Expo account** (free) at [expo.dev](https://expo.dev) and log in.

2. **Install EAS CLI** and log in:
   ```bash
   npm install -g eas-cli
   eas login
   ```

3. **Configure the project** (first time only). In the project folder:
   ```bash
   eas build:configure
   ```
   Accept the defaults if prompted. The project already includes an `eas.json` with a `preview` profile that outputs an APK.

4. **Build the APK:**
   ```bash
   eas build --platform android --profile preview
   ```

5. When the build finishes, Expo shows a **download link** for the APK. Share that link or download the file and send it. Users install by opening the APK on their Android device (they may need to allow “Install from unknown sources” in settings).

**Notes:**

- The first build can take 10–20 minutes on Expo’s servers.
- You need to accept the Android SDK license the first time (EAS will prompt you).
- For **Play Store** submission later, use: `eas build --platform android --profile production` (builds an AAB, not APK).

---

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
