import React from 'react';

export default function Dashboard({ user, onStartNewForm, activeReports = [] }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      {/* Top Vercel-style Navigation Bar */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200/80 px-6 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-sm tracking-tight">
            R
          </div>
          <span className="font-semibold text-slate-900 tracking-tight text-sm">Regcat Permit Portal</span>
          <span className="text-slate-300">/</span>
          <span className="text-xs font-mono text-slate-500">TNCDBR-2019</span>
        </div>

        {/* Live System Status Pill */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:inline-flex items-center gap-2 px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 text-xs font-medium rounded-full">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            TN-GIS & e-Services Online
          </div>
          <div className="h-8 w-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-xs font-medium text-slate-700">
            {user?.email?.[0].toUpperCase() || 'U'}
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {/* Welcome Header & Action */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900">Regulatory Dashboard</h1>
            <p className="text-sm text-slate-500 mt-1">
              Automated building approval & setback verification engine for Tamil Nadu.
            </p>
          </div>
          <button
            onClick={onStartNewForm}
            className="inline-flex items-center justify-center px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-lg shadow-sm transition-all active:scale-[0.98] border border-slate-800"
          >
            + Start Compliance Check
          </button>
        </div>

        {/* Responsive Grid System: Mobile (1-col), Tablet (2-col), Desktop (3-col) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1: FSI Limit Calculator */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-slate-300 transition-all">
            <div className="flex items-center justify-between text-xs font-medium text-slate-400 mb-2">
              <span>RULE PARSER</span>
              <span className="font-mono text-slate-900">Rule 35(2)</span>
            </div>
            <div className="text-3xl font-bold tracking-tight text-slate-900">1.75 - 2.0</div>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Standard Non-High Rise Floor Space Index under TNCDBR 2019 guidelines.
            </p>
          </div>

          {/* Card 2: Maximum Plot Coverage */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-slate-300 transition-all">
            <div className="flex items-center justify-between text-xs font-medium text-slate-400 mb-2">
              <span>PLOT COVERAGE</span>
              <span className="font-mono text-slate-900">Max 75%</span>
            </div>
            <div className="text-3xl font-bold tracking-tight text-slate-900">75%</div>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Mandatory minimum 25% unbuilt open space retention on plot boundary.
            </p>
          </div>

          {/* Card 3: Groq AI Status */}
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:border-slate-300 transition-all md:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between text-xs font-medium text-slate-400 mb-2">
              <span>NEURAL ENGINE</span>
              <span className="text-emerald-600 font-mono">Llama 3.3 70B</span>
            </div>
            <div className="text-3xl font-bold tracking-tight text-slate-900">Active</div>
            <p className="text-xs text-slate-500 mt-2 leading-relaxed">
              Connected via Groq API key for automated variance reasoning & text generation.
            </p>
          </div>
        </div>

        {/* Recent Applications Table */}
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50/50 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-slate-900">Recent Applications</h2>
            <span className="text-xs text-slate-500 font-mono">{activeReports.length} Submitted</span>
          </div>
          {activeReports.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-sm text-slate-500">No applications created yet.</p>
              <button
                onClick={onStartNewForm}
                className="mt-3 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline"
              >
                Create your first compliance audit &rarr;
              </button>
            </div>
          ) : (
            <div className="divide-y divide-slate-100 text-sm">
              {activeReports.map((report, idx) => (
                <div key={idx} className="p-4 px-6 flex items-center justify-between hover:bg-slate-50/80 transition-colors">
                  <div>
                    <div className="font-medium text-slate-900">{report.buildingType || 'Residential Plot'}</div>
                    <div className="text-xs text-slate-500 font-mono">Area: {report.plotArea} sq.m | Road: {report.roadWidth}m</div>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                    report.overallStatus === 'APPROVED' ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {report.overallStatus}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
