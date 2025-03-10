'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
// import { signinDefaultValue } from '@/lib/constants';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

const CredentialsSignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState('');
  const router = useRouter();

  //@ts-ignore
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });
    // console.log('🚀 ~ handleSubmit ~ result:', result);

    if (result && result.ok) {
      router.push('/');
    } else {
      // setError(result.error as string);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            // defaultValue={signinDefaultValue.email}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="password"
            // defaultValue={signinDefaultValue.password}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <div>
          <Button className="w-full" variant={'default'}>
            Sign In
          </Button>
        </div>
        <div className="text-muted-foreground text-center text-sm">
          Don&apos;t have an account?{' '}
          <Link href="/sign-up" target="_self" className="link">
            Sign up
          </Link>
        </div>
      </div>
    </form>
  );
};

export default CredentialsSignInForm;
