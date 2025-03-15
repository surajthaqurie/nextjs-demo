'use client';

import { login } from '@/lib/actions/auth.action';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useState, useActionState, startTransition, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter

export function LoginForm() {
  const [state, action, pending] = useActionState(login, undefined);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Initialize router
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    // Wrap the action call in startTransition
    startTransition(async () => {
      action(formData); // Pass FormData to the login action
    });
  };

  // Effect to handle redirection after successful login
  useEffect(() => {
    if (state?.success) {
      setIsRedirecting(true);
    } else {
      alert(state?.message);
    }
  }, [state]);

  // Redirect to home page once login is successful
  useEffect(() => {
    if (isRedirecting) {
      router.push('/');
    }
  }, [isRedirecting, router]);

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} />
        {state?.errors?.email && <p className="text-red-500">{state.errors.email}</p>}
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input id="password" name="password" type="password" required autoComplete="current-password" value={password} onChange={e => setPassword(e.target.value)} />
        {state?.errors?.password && (
          <div className="text-red-500">
            <p>Password must:</p>
            <ul>
              {state.errors.password.map(error => (
                <li key={error}>- {error}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Button className="w-full" variant="default" disabled={pending}>
        {pending ? 'Signing In...' : 'Sign In'}
      </Button>
      <div className="text-muted-foreground text-center text-sm">
        Don&apos;t have an account?{' '}
        <Link href="/sign-up" target="_self" className="link">
          Sign up
        </Link>
      </div>
    </form>
  );
}

export default LoginForm;
