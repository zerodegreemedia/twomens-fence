/* Global type declarations */

// Google Analytics 4
declare function gtag(command: "event", action: string, params?: Record<string, string>): void;
declare function gtag(command: "config" | "set", targetId: string, params?: Record<string, unknown>): void;
