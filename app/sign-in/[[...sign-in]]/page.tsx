// app/sign-in/[[...sign-in]]/page.tsx
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md p-8 bg-amber-400 rounded shadow">
        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
      </div>
    </div>
  )
}
