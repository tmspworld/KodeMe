// app/sign-up/[[...sign-up]]/page.tsx
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return(
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md p-8 bg-amber-400 rounded shadow">
        <SignUp path="/sign-up" routing="path" signInUrl="/sign-up" />
      </div>
    </div>
  )
}
