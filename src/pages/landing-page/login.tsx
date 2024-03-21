import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { FormEvent, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const body = {
      email,
      password,
    };

    console.log(body);
  }

  return (
    <div className="container w-full h-screen flex justify-center items-center ">
      <Card className="w-3/12 bg-stone-100 border-2 border-black/25">
        <CardHeader>
          <CardTitle className="uppercase">Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            className="flex flex-col space-y-4 justify-center items-center"
            onSubmit={onSubmit}
          >
            <Input
              placeholder="johndoe@gmail.com"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              className="text-sm uppercase bg-rose hover:bg-blue-950 h-7 w-max"
              type="submit"
            >
              submit
            </Button>
          </form>
          <div className="flex flex-col space-y-4 justify-center items-center my-4">
            <hr className="w-1/2 h-px bg-gray-300 border-0" />
            <div className="flex flex-row text-sm gap-1 justify-center">
              <p className="font-light ">Don't have an account?</p>
              <Button
                className=" text-blue-900 hover:text-white hover:no-underline hover:bg-rose h-5 py-0 px-2"
                variant="link"
                asChild
              >
                <Link to="/landing-page/register">Sign Up</Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;