'use client';
import { useEffect } from 'react';

import { Button } from '@/components/ui/button';
import { APP_NAME } from '@/lib/constants';
import { handleError } from '@/lib/utils';
import Image from 'next/image';

interface ErrorProps {
  error: Error;
}
export default function GlobalError({ error }: ErrorProps) {
  useEffect(() => {
    handleError(error);
  }, [error]);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Image src="/images/logo.png" alt={`${APP_NAME} logo`} height={100} width={100} priority={true} />
      <div className="rounded-lg p-6 text-center shadow-md">
        <h2 className="text-2xl font-bold">Something went wrong!</h2>
        <p className="text-destructive">{error.message}</p>
        <Button className="mt-4 ml-2" onClick={() => (window.location.href = '/')}>
          Back to the home page
        </Button>
        <Button className="mt-4 ml-2" onClick={() => window.location.reload()}>
          Refresh
        </Button>
      </div>
    </div>
  );
}
