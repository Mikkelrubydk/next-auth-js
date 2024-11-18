import { signIn } from "../auth";

export default function SignIn() {
  async function handleSignIn(formData) {
    "use server";
    signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirectTo: "/protected"
    });
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-5xl text-">Sign in</h1>
        <form
          action={handleSignIn}
          className="flex flex-col gap-4 w-full max-w-[30ch]">
          <label className="flex flex-col gap-1">
            <span>Email</span>
            <input
              type="email"
              name="email"
              required
              placeholder="Type your email"
              className="rounded border border-solid border-black/[.08] dark:border-white/[.145] transition-colors h-10 px-4"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span>Password</span>
            <input
              type="password"
              name="password"
              required
              placeholder="Type your password"
              className="rounded border border-solid border-black/[.08] dark:border-white/[.145] transition-colors h-10 px-4"
            />
          </label>
          <button
            type="submit"
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44">
            Sign in
          </button>
        </form>
      </main>
    </div>
  );
}
