export function ActivityDetails() {
  return (
    <article className="w-full max-w-md my-12">
      <header className="mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          About this activity
        </h2>
      </header>
      <section className="space-y-4">
        <div className="flex items-start gap-2">
          <span className="text-gray-600 mt-1">✔</span>
          <div>
            <p className="text-gray-700">Free cancellation</p>
            <p className="text-sm text-gray-500">
              Cancel up to 24 hours in advance for a full refund
            </p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-gray-600 mt-1">ⓘ</span>
          <div>
            <p className="text-gray-700">Reserve now & pay later</p>
            <p className="text-sm text-gray-500">
              Keep your travel plans flexible — book your spot and pay nothing
              today.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <span className="text-gray-600 mt-1">👤</span>
          <div>
            <p className="text-gray-700">Live tour guide</p>
            <p className="text-sm text-gray-500">French, English</p>
          </div>
        </div>
      </section>
    </article>
  );
}
