export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-black-500 mb-4"></div>

      <p className="text-lg text-gray-700 font-medium">Loading...</p>
    </div>
  );
}
