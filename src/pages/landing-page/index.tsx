import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import { CustomFormField } from "@/components/custom-formfield";

import { userLogin } from "@/utils/api-list/auth/api";
import { loginSchema, LoginSchema } from "@/utils/api-list/auth/auth-type";

const Index = () => {
  const navigate = useNavigate();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSignIn(data: LoginSchema) {
    try {
      const result = await userLogin(data);

      localStorage.setItem("Token", result.data.token);

      toast(result.message);
      navigate("/home");
    } catch (error) {
      toast((error as Error).message.toString());
    }
  }

  return (
    <div className="container flex flex-row justify-between items-center p-30 w-full h-screen">
      <div className="flex flex-col gap-3">
        <h1 className="text-7xl font-bold uppercase">SOCIAL MEDIA APP</h1>
        <p className="text-3xl font-bold uppercase">
          Connect Freely, Share Boldly
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-xl font-bold">Join Us Now !</p>
        <Button
          className="text-sm uppercase bg-blue-950 hover:bg-rose h-7 w-full"
          asChild
        >
          <Link to="/register">Create account</Link>
        </Button>
        <hr className="w-64 h-px my-2 bg-gray-300 border-0" />
        <div className="flex flex-row text-sm gap-1">
          <p className="font-light ">Already have an account?</p>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className=" text-blue-900 hover:text-white hover:no-underline hover:bg-rose  h-5 py-0 px-2"
                variant="link"
              >
                Sign In
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-3xl">Sign In</DialogTitle>
              </DialogHeader>
              <Form {...form}>
                <form
                  className="flex flex-col space-y-4 justify-center items-center"
                  onSubmit={form.handleSubmit(onSignIn)}
                >
                  <CustomFormField
                    control={form.control}
                    name="email"
                    label="Email"
                  >
                    {(field) => (
                      <Input
                        {...field}
                        placeholder="john_doe@mail.com"
                        type="email"
                        disabled={form.formState.isSubmitting}
                        aria-disabled={form.formState.isSubmitting}
                        value={field.value as string}
                      />
                    )}
                  </CustomFormField>
                  <CustomFormField
                    control={form.control}
                    name="password"
                    label="Password"
                  >
                    {(field) => (
                      <Input
                        {...field}
                        placeholder="Password"
                        type="password"
                        disabled={form.formState.isSubmitting}
                        aria-disabled={form.formState.isSubmitting}
                        value={field.value as string}
                      />
                    )}
                  </CustomFormField>
                  <Button
                    className="text-sm uppercase bg-rose hover:bg-blue-950 h-7 w-max"
                    type="submit"
                  >
                    Sign In
                  </Button>
                  <hr className="w-1/2 h-px bg-gray-300 border-0" />
                  <div className="flex flex-row text-sm gap-1 justify-center">
                    <p className="font-light ">Don't have an account?</p>
                    <Button
                      className=" text-blue-900 hover:text-white hover:no-underline hover:bg-rose  h-5 py-0 px-2"
                      variant="link"
                      asChild
                    >
                      <Link to="/register">Sign Up</Link>
                    </Button>
                  </div>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Index;
