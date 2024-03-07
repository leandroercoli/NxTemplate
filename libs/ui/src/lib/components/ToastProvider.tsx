'use client';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function ToastProvider() {
    return (
        <ToastContainer
            theme="dark"
            newestOnTop
            position="bottom-right"
            pauseOnFocusLoss={false}
        />
    );
}
