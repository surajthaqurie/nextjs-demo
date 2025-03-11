'use client';

import { login } from '@/lib/actions/auth.action';
import { useActionState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useState } from 'react';

export function LoginForm() {
  const [state, action, pending] = useActionState(login, undefined);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    action(formData); // Pass FormData to the login action
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        {state?.errors?.email && <p>{state.errors.email}</p>}
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" required autoComplete="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        {state?.errors?.password && (
          <div>
            <p>Password must:</p>
            <ul>
              {state.errors.password.map(error => (
                <li key={error}>- {error}</li>
              ))}
            </ul>
          </div>
        )}
        <div>
          <Button className="w-full" variant={'default'} disabled={pending}>
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
}

export default LoginForm;
