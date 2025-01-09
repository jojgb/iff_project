# React + TypeScript + Vite

Notes :

1. projek ini dibuat menggunakan react typescript , vite , redux , react, react router dom
2. cara run nya adalah ketik npm i kemudian setelah terinstall jalankan npm run dev di terminal
3. run di port 5173/5174
4. saya ingin membuatnya lebih lengkap lagi tetapi karena terkendala waktu dan banyak interview lain saya hanya mampu menyelesaikan nya seperti ini , mungkin juga ada beberapa kekurangan di responsif karena kurangnya waktu tapi untuk fungsi harusnya berjalan dengan baik
5. bila ada feed back mohon bisa kontak saya di jojgb96@gmail.com , agar saya bisa improve skill saya
6. saya berharap bisa berkontribusi dengan baik bila berjodoh

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
