import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { APP_NAME } from '@/lib/constants';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CredentialsSignInForm from './credentials-signin-form';

export const metadata: Metadata = {
  title: 'Sign In',
};

const SingInPage = () => {
  return (
    <>
      <div className="mx-auto w-full max-w-md">
        <Card>
          <CardHeader>
            <Link href={'/'} className="flex-center">
              <Image src="/images/logo.png" alt={`${APP_NAME} logo`} height={100} width={100} priority={true} />
            </Link>
            <CardTitle className="text-center">Sign In</CardTitle>
            <CardDescription className="text-center">Sign In to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <CredentialsSignInForm />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default SingInPage;
