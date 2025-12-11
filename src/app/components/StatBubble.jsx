// components/StatBubble.jsx
export default function StatBubble({ number, label }) {
  return (
    <div className="stat-bubble bg-white p-6 text-center opacity-80 border-l-2 border-orange-950">
      <div className="text-2xl font-sans">{number}</div>
      <div className="text-sm text-slate-600 mt-1">{label}</div>
    </div>
  );
}
