import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { APP_NAME } from '@/lib/constants';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SignUpForm from './signup-form';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Sign Up',
};

const SignUpPage = async (props: { searchParams: Promise<{ callbackUrl: string }> }) => {
  const { callbackUrl } = await props.searchParams;
  if (callbackUrl) {
    return redirect(callbackUrl);
  }

  return (
    <>
      <div className="mx-auto w-full max-w-md">
        <Card>
          <CardHeader>
            <Link href={'/'} className="flex-center">
              <Image src="/images/logo.png" alt={`${APP_NAME} logo`} height={100} width={100} priority={true} />
            </Link>
            <CardTitle className="text-center">Sign Up</CardTitle>
            <CardDescription className="text-center">Enter your details below to sign up</CardDescription>
          </CardHeader>
          <CardContent>
            <SignUpForm />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default SignUpPage;
