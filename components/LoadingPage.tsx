export default function LoadingPage() {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/80 gap-3 cursor-progress">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-white/30 border-t-white" />
      <div className="text-white text-lg">Loading...</div>
    </div>
  );
}
