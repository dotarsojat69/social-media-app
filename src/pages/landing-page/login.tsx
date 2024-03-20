import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Login = () => {
  return (
    <div className="container w-full h-screen flex justify-center items-center ">
      <Card className="w-3/12 bg-stone-100 border-2 border-black/25">
        <CardHeader>
          <CardTitle className="uppercase">Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col space-y-4 justify-center items-center">
            <Input placeholder="username" type="email" />
            <Input placeholder="password" type="password" />
            <Button
              className="text-sm uppercase bg-rose hover:bg-blue-950 h-7 w-max"
              type="submit"
              asChild
            >
              <Link to="/">Sign In</Link>
            </Button>
            <hr className="w-1/2 h-px bg-gray-300 border-0" />
            <div className="flex flex-row text-sm gap-1 justify-center">
              <p className="font-light ">Don't have an account?</p>
              <Button
                className=" text-blue-900 hover:text-white hover:no-underline hover:bg-rose  h-5 py-0 px-2"
                variant="link"
                asChild
              >
                <Link to="/landing-page/register">Sign Up</Link>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;