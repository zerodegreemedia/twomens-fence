import { Component } from "react";
import type { ReactNode, ErrorInfo } from "react";
import { COMPANY } from "@/lib/constants";
import { Phone } from "lucide-react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background px-6">
          <div className="text-center max-w-md">
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Something went wrong
            </h1>
            <p className="text-muted-foreground mb-8">
              We're sorry — this page ran into an issue. Please try refreshing,
              or give us a call and we'll help you right away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={COMPANY.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-action hover:bg-action-glow text-foreground font-semibold transition-colors"
              >
                <Phone size={18} />
                Call {COMPANY.phone}
              </a>
              <button
                onClick={() => window.location.reload()}
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-border text-foreground font-semibold hover:bg-muted transition-colors"
              >
                Refresh Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
