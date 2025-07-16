import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <App />
  // </StrictMode>
);

// ✅ تسجيل Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('✅ Service Worker Registered!', reg))
      .catch(err => console.error('❌ Service Worker Registration Failed:', err));
  });
}
