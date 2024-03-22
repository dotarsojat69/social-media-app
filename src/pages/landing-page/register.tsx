import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Form } from "@/components/ui/form";

import {
  CustomFormDatePicker,
  CustomFormField,
  CustomFormGenderPicker,
} from "@/components/custom-formfield";
import {
  registerSchema,
  RegisterSchema,
} from "@/utils/api-list/auth/auth-type";
import { userRegister } from "@/utils/api-list/auth/api";

const Register = () => {
  const navigate = useNavigate();
  
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      repassword: "",
      // date_of_birth: "",
      gender: "",
    },
  });

  async function onSubmit(data: RegisterSchema) {
    try {
      const result = await userRegister(data);

      toast(result.message);
      navigate("/home");
    } catch (error) {
      toast((error as Error).message.toString());
    }
  }

  return (
    <div className="container w-full h-screen flex justify-center items-center ">
      <Card className="w-4/12 bg-stone-100 border-2 border-black/25">
        <CardHeader>
          <CardTitle className="uppercase">create your account !</CardTitle>
        </CardHeader>
        <CardContent>
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
                  This information will not be shared with others. Make sure to
                  input your real age.
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
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
