/// <reference types="vite/client" />
interface ImportMetaEnv {
    VITE_REALM_KEY: string;
    NODE_ENV: 'development' | 'production';
    PORT?: string;
    PWD: string;
}