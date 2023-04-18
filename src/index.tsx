import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProjectsList from "./pages/ProjectsList";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
// @ts-ignore
    <React.StrictMode>
        <App />
        {/*<ProjectsList/>*/}
    </React.StrictMode>
);
