'use client';

import { Button } from '@/components/ui/button';
import { UserIcon } from 'lucide-react';
import Link from 'next/link';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { logout } from '@/lib/actions/auth.action';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const UserButton = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await logout();
      router.push('/');
    } catch (error) {
      console.error('Logout failed', error);
    } finally {
      setLoading(false);
    }
  };

  const session = window.localStorage.getItem('accessToken');
  if (!session) {
    return (
      <Button asChild>
        <Link href={'/sign-in'}>
          <UserIcon />
          Sign In
        </Link>
      </Button>
    );
  }

  const initialName = 'Admin'; // extract from session
  const initialEmail = 'admin@admin.com'; // extract from session
  return (
    <>
      <div className="item-center flex gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="item-center flex">
              <Button variant={'ghost'} className="relative ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-300">
                {initialName.charAt(0)}
              </Button>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel className="w-56">
              <div className="div flex-col space-y-1">
                <div className="text-sm leading-none font-medium">{initialName}</div>
                <div className="text-muted-foreground text-sm leading-none">{initialEmail}</div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {/* <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem> */}
            <DropdownMenuItem>
              <form onSubmit={handleSubmit} className="w-full">
                <Button variant={'ghost'} className="h-4 w-full justify-start px-2 py-4">
                  {loading ? 'Logging out...' : 'Sign Out'}
                </Button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
};

export default UserButton;
