# To Do

## **Seitentitel (`<title>`) im Browser-Tab dynamisch ändern**

Damit sich der **Seitentitel (`<title>`) im Browser-Tab dynamisch ändert**, wenn du zwischen Seiten (Routen) wechselst, musst du ihn **manuell per JavaScript setzen**, z. B. in jedem Seitenkomponenten-File wie `LandingPage.jsx`, `ShopPage.jsx` etc.

---

### ✅ Lösung 1: Direkt in der Komponente mit `useEffect`

```jsx
import { useEffect } from "react";

export default function ShopPage() {
  useEffect(() => {
    document.title = "Shop – Die Sattler";
  }, []);

  return <div>Shop-Seite</div>;
}
```

🧠 Das sorgt dafür, dass der Titel jedes Mal gesetzt wird, wenn diese Komponente gerendert wird.

---

### ✅ Lösung 2 (fortgeschrittener): Mit einer eigenen `useDocumentTitle`-Hook

**🔁 Vorteil:** Du kannst es mehrfach wiederverwenden.

```jsx
// src/hooks/useDocumentTitle.js
import { useEffect } from "react";

export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
```

Dann in deinen Seiten:

```jsx
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function LandingPage() {
  useDocumentTitle("Willkommen – Die Sattler");
  return <div>Landing Page</div>;
}
```

## Mobile menu Animation effect

https://chatgpt.com/c/6814a958-2780-800d-8ce5-488219643a61

