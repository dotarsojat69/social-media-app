import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
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
import { CustomFormDatePicker, CustomFormField, CustomFormGenderPicker } from "@/components/custom-formfield";

import { userLogin } from "@/utils/api-list/auth/api";
import { loginSchema, LoginSchema } from "@/utils/api-list/auth/auth-type";

const Index = () => {
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      repassword: "",
      // date_of_birth: Date,
      gender: "",
    },
  });

  async function onSubmit(data: LoginSchema) {
    try {
      const result = await userLogin(data);

      // localStorage.setItem("Token", result.Data.token);

      toast(result.message);
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
        <Dialog>
          <DialogTrigger asChild>
            <Button className="text-sm uppercase bg-blue-950 hover:bg-rose h-7 w-full">
              Create account
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Sign In</DialogTitle>
            </DialogHeader>
            <Form {...form}>
              <form
                className="flex flex-col space-y-4 justify-center items-center"
                onSubmit={form.handleSubmit(onSubmit)}
              >
                <CustomFormField
                  control={form.control}
                  name="name"
                  label="Full Name"
                >
                  {(field) => (
                    <Input
                      {...field}
                      placeholder="John Doe"
                      disabled={form.formState.isSubmitting}
                      aria-disabled={form.formState.isSubmitting}
                      value={field.value as string}
                    />
                  )}
                </CustomFormField>
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
                <CustomFormField
                  control={form.control}
                  name="repassword"
                  label="Confirm Password"
                >
                  {(field) => (
                    <Input
                      {...field}
                      placeholder="Confirm Password"
                      type="password"
                      disabled={form.formState.isSubmitting}
                      aria-disabled={form.formState.isSubmitting}
                      value={field.value as string}
                    />
                  )}
                </CustomFormField>
                <div className="flex flex-col text-sm gap-1 justify-center">
                  <p className="font-bold ">Date of Birth</p>
                  <p className="font-thin text-xs text-black/75">
                    This information will not be shared with others. Make sure
                    to input your real age.
                  </p>
                </div>
                <CustomFormDatePicker
                  control={form.control}
                  name="date_of_birth"
                  label=""
                  placeholder="Pick Your Date"
                />
                <CustomFormGenderPicker
                  control={form.control}
                  name="gender"
                  label="Gender"
                />
                <p className="font-thin text-xs text-center text-black/75">
                  By signing up, you agree to our Terms , Privacy Policy and
                  Cookies Policy .
                </p>
                <Button
                  className="text-sm uppercase  bg-blue-950 hover:bg-rose h-7 w-max"
                  type="submit"
                >
                  Sign Up
                </Button>
                <hr className="w-1/2 h-px bg-gray-300 border-0" />
                <div className="flex flex-row text-sm gap-1 justify-center">
                  <p className="font-light ">Already have an account?</p>
                  <Button
                    className=" text-rose hover:text-white hover:no-underline hover:bg-blue-950  h-5 py-0 px-2"
                    variant="link"
                    asChild
                  >
                    <Link to="/login">Sign In</Link>
                  </Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
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
                <DialogTitle>Sign In</DialogTitle>
              </DialogHeader>
              <Form {...form}>
                <form
                  className="flex flex-col space-y-4 justify-center items-center"
                  onSubmit={form.handleSubmit(onSubmit)}
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
