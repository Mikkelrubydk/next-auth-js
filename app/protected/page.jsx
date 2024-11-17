import { redirect } from "next/navigation";
import { auth, signOut } from "../auth";

export default async function ProtectedPage() {
  const session = await auth();
  console.log("session", session);

  if (!session?.user.email) {
    redirect("/sign-in");
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-5xl text-">Protected Page</h1>
        <p className="text-center sm:text-left text-[#333] dark:text-[#ccc] max-w-[30ch]">
          This page is protected. You can only view this page if you are signed
          in.
        </p>

        <button
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
          onClick={async () => {
            "use server";
            await signOut();
          }}>
          Sign out
        </button>
      </main>
    </div>
  );
}
