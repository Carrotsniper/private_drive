import { Button } from "@/components/ui/button";
import { OrganizationSwitcher, SignedIn, SignedOut, SignInButton, SignOutButton, UserButton, UserProfile } from "@clerk/nextjs";

export function Header() {
    return <div className='border-b py-4 bg-gray-50'>
        <div className='items-center container mx-auto flex justify-between'>
            <div>Ruochen's Drive</div>
            <div className='flex gap-x-2'>
                <OrganizationSwitcher />
                <UserButton />

                <SignedOut>
                    <SignInButton>
                        <Button>Sign In</Button>
                    </SignInButton>
                </SignedOut>
            </div>
        </div>
    </div>
}