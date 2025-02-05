import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();

  return (
    <div className="h-[90vh] flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h1 className="text-3xl font-semibold text-center text-gray-700 mb-6">
          Session Data
        </h1>
        <pre className="bg-gray-800 text-white p-6 rounded-lg font-mono overflow-x-auto">
          {JSON.stringify(session, null, 2)}
        </pre>
      </div>
    </div>
  );
}
