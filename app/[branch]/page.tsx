import Link from "next/link";

export default function BranchPage({
  params,
}: {
  params: { branch: string };
}) {
  const branchName = decodeURIComponent(params.branch);

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/" className="text-blue-600 hover:underline flex items-center gap-2">
            <span>←</span> Zurück zur Startseite
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          {branchName}
        </h1>

        {/* Search within branch */}
        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <form className="max-w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,auto] gap-3">
              <input
                type="text"
                placeholder={`${branchName} suchen...`}
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gs-yellow"
              />
              <input
                type="text"
                placeholder="PLZ oder Ort"
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gs-yellow"
              />
              <button className="bg-gs-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                Suchen
              </button>
            </div>
          </form>
        </div>

        {/* Placeholder for company listings */}
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            Unternehmen für <strong>{branchName}</strong> werden hier angezeigt.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Diese Seite benötigt eine Backend-Integration für echte Daten.
          </p>
        </div>
      </main>
    </div>
  );
}
