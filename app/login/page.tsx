import LoginForm from "@/components/auth/login";

interface SearchParamsProps {
  searchParams: {
    error?: string;
  };
}

export default async function SignInPage({ searchParams }: SearchParamsProps) {
  const search = await searchParams;
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <LoginForm error={search.error} />
    </div>
  );
}
