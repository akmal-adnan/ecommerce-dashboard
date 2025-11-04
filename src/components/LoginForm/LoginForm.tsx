'use client';

import { login } from '@/app/login/actions';
import styles from '@/components/LoginForm/styles.module.scss';
import {
  Button,
  IconButton,
  InputAdornment,
  Link,
  TextField,
} from '@mui/material';
import { Eye, EyeSlash, Lock, Sms } from 'iconsax-reactjs';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect, useState } from 'react';
import { useFormStatus } from 'react-dom';

const LoginForm = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [state, loginAction] = useActionState(login, { errors: {} });
  const isEmailcorrect = Boolean(state.errors?.email);
  const isPasswordCorrect = Boolean(state.errors?.password);

  // Handle redirect on success
  useEffect(() => {
    if (state && 'success' in state && state.success) {
      router.push('/dashboard');
    }
  }, [router, state]);

  return (
    <form action={loginAction} className={styles.formContainer}>
      <div>
        <label className={styles.textLabel} htmlFor="input-email">
          Email
        </label>
        <TextField
          className={styles.inputStyle}
          fullWidth
          name="email"
          id="input-email"
          variant="outlined"
          placeholder="Enter your email"
          error={isEmailcorrect}
          helperText={state.errors?.email}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Sms size="24" />
              </InputAdornment>
            ),
          }}
        />
      </div>

      <div>
        <label className={styles.textLabel} htmlFor="input-password">
          Password
        </label>
        <TextField
          className={styles.inputStyle}
          fullWidth
          size="small"
          name="password"
          id="input-password"
          variant="outlined"
          placeholder="Securely enter password"
          type={show ? 'text' : 'password'}
          error={isPasswordCorrect}
          helperText={state.errors?.password}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock size="24" />
              </InputAdornment>
            ),

            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end" onClick={() => setShow((p) => !p)}>
                  {show ? <Eye size="24" /> : <EyeSlash size="24" />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>

      <Link
        component="button"
        type="button"
        underline="none"
        className={styles.forgotButton}
      >
        Forgot password?
      </Link>

      <SubmitButton />
    </form>
  );
};

export default LoginForm;

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      variant="contained"
      disableElevation
      className={styles.signInButton}
      disabled={pending}
      type="submit"
    >
      {pending ? 'Loading...' : 'Sign In'}
    </Button>
  );
}
