import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, info: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  componentDidCatch(error, info) {
    console.error('[Regcat] Boundary caught:', error, info);
    this.setState({ info });
  }
  render() {
    if (this.state.error) {
      return (
        <div className="min-h-screen bg-slate-950 text-red-300 p-8 font-mono text-xs">
          <div className="max-w-2xl mx-auto bg-slate-900 border border-red-800 rounded-lg p-6 space-y-3">
            <h1 className="text-lg font-bold text-red-400">Report render failed</h1>
            <p className="text-slate-300">{String(this.state.error?.message || this.state.error)}</p>
            <pre className="text-slate-500 whitespace-pre-wrap text-[10px] overflow-auto">
              {String(this.state.error?.stack || '')}
            </pre>
            <button onClick={() => this.setState({ error: null })} className="px-3 py-1.5 bg-red-600 text-white rounded">
              Retry
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
