import { Link, useNavigate } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Form } from "@/components/ui/form";

import { CustomFormField } from "@/components/custom-formfield";

import { userLogin } from "@/utils/api-list/auth/api";
import { loginSchema, LoginSchema } from "@/utils/api-list/auth/auth-type";

const Login = () => {
  const navigate = useNavigate();
  
  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginSchema) {
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
    <div className="container w-full h-screen flex justify-center items-center ">
      <Card className="w-3/12 bg-stone-100 border-2 border-black/25">
        <CardHeader>
          <CardTitle className="uppercase">Sign In</CardTitle>
        </CardHeader>
        <CardContent>
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
            </form>
          </Form>
          <div className="flex flex-col space-y-4 justify-center items-center my-4">
            <hr className="w-1/2 h-px bg-gray-300 border-0" />
            <div className="flex flex-row text-sm gap-1 justify-center">
              <p className="font-light ">Don't have an account?</p>
              <Button
                className=" text-blue-900 hover:text-white hover:no-underline hover:bg-rose h-5 py-0 px-2"
                variant="link"
                asChild
              >
                <Link to="/register">Sign Up</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
