import GoogleButton from '@/components/GoogleButton';
import SignInForm from '@/components/SignInForm';

const Signin = async () => {
  return (
    <div className="stack">
      <h1>Sign In</h1>
      <GoogleButton />
      <div>or</div>
      <SignInForm />
    </div>
  );
};

export default Signin;
