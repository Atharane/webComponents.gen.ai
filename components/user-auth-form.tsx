import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Icons } from '@/components/icons';
import { login, signup } from '@/app/login/actions';

export interface UserAuthFormProps
  extends React.HTMLAttributes<HTMLDivElement> {
  error?: string;
}

export function UserAuthForm({
  className,
  error,
  ...props
}: UserAuthFormProps) {
  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form>
        <div className="grid gap-2">
          <div className="grid gap-1 mb-4">
            <Label
              className="text-xs text-slate-700 dark:text-slate-200"
              htmlFor="email"
            >
              Email
            </Label>
            <Input
              id="email"
              placeholder="bruno@united.uk"
              type="email"
              name="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              className="mb-2"
            />
            <Label
              className="text-xs text-slate-700 dark:text-slate-200"
              htmlFor="passsword"
            >
              Password
            </Label>
            <Input id="password" type="password" name="password" />
            {error && (
              <p className="px-1 text-xs text-red-600">
                Something went wrong. Please try again.
              </p>
            )}
          </div>
          <button formAction={login} className={cn(buttonVariants())}>
            Sign In with Email
          </button>
          <button
            formAction={signup}
            className={cn(buttonVariants({ variant: 'secondary' }))}
          >
            Sign Up with Email
          </button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <button
        type="button"
        className={cn(buttonVariants({ variant: 'outline' }))}
      // onClick={}
      >
        <Icons.chrome className="mr-2 h-4 w-4" />
        Google
      </button>
    </div>
  );
}
