'use client';

import { Button } from '@/components/ui/button';
import { UserIcon } from 'lucide-react';
import Link from 'next/link';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { getCookies, logout } from '@/lib/actions/auth.action';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const UserButton = () => {
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchToken = async () => {
      const token = await getCookies('accessToken');
      setSession(token as string);
    };

    fetchToken();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await logout();
      setSession(null);
      router.push('/');
    } catch (error) {
      console.error('Logout failed', error);
    } finally {
      setLoading(false);
    }
  };

  if (!session) {
    return (
      <Button asChild>
        <Link href="/sign-in">
          <UserIcon />
          Sign In
        </Link>
      </Button>
    );
  }

  const initialName = 'Admin'; // Ideally, extract this from token or state
  const initialEmail = 'admin@admin.com'; // Ideally, extract this too

  return (
    <div className="item-center flex gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="item-center flex">
            <Button variant="ghost" className="relative ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-gray-300">
              {initialName.charAt(0)}
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-56 md:mr-4">
          <DropdownMenuLabel className="w-56">
            <div className="flex-col space-y-1">
              <div className="text-sm leading-none font-bold">{initialName}</div>
              <div className="text-sm leading-none font-normal text-gray-600">{initialEmail}</div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <form onSubmit={handleSubmit} className="w-full">
              <Button variant="ghost" className="h-4 w-full justify-start px-2 py-4">
                {loading ? 'Logging out...' : 'Sign Out'}
              </Button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserButton;
