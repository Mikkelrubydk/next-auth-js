import { redirect } from "next/navigation";
import { auth, signOut } from "../auth";
import Image from "next/image";

export default async function ProtectedPage() {
  const session = await auth();
  const user = session?.user;
  console.log("session", session);

  if (!session) {
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
        <p className="text-center sm:text-left text-[#333] dark:text-[#ccc] max-w-[30ch]">
          You are signed in as
        </p>

        {/* user avatar with image and name and email to the right - shown in grid*/}
        <div className="flex items-center space-x-4 p-4 bg-stone-900 shadow rounded-lg">
          <Image
            src={user?.image}
            alt="User image"
            width={100}
            height={100}
            className="rounded-full"
          />
          <div>
            <h2 className="text-lg text font-semibold">{user?.name}</h2>
            <p className="text-gray-400">{user?.email}</p>
          </div>
        </div>

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
