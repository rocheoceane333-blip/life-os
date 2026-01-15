import React from 'react';
import Toast from './toast';

export default function Toaster({ toasts, removeToast }) {
  return (
    <div className="fixed bottom-0 right-0 p-6 z-[100] flex flex-col gap-3 max-w-sm w-full">
      {toasts.map((t) => (
        <Toast key={t.id} {...t} onClose={() => removeToast(t.id)} />
      ))}
    </div>
  );
}