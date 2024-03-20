import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Register = () => {
  return (
    <div className="container w-full h-screen flex justify-center items-center ">
      <Card className="w-4/13 bg-stone-100 border-2 border-black/25">
        <CardHeader>
          <CardTitle className="uppercase">create your account !</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col space-y-4 justify-center items-center">
            <Input placeholder="full name" type="email" />
            <Input placeholder="email" type="email" />
            <Input placeholder="password" type="password" />
            <div className="flex flex-col text-sm gap-1 justify-center">
              <p className="font-bold ">Date of Birth</p>
              <p className="font-thin text-xs text-black/75">
                This information will not be shared with others. Make sure to
                input your real age.
              </p>
            </div>
            <Input placeholder="date" type="date" />
            <p className="font-bold text-sm self-start">Gender</p>
            <Input placeholder="Gender" type="gender" />
            <p className="font-thin text-xs text-center text-black/75">
              By signing up, you agree to our Terms , Privacy Policy and Cookies
              Policy .
            </p>
            <Button
              className="text-sm uppercase  bg-blue-950 hover:bg-rose-400 h-7 w-max"
              type="submit"
              asChild
            >
              <Link to="/">Sign Up</Link>
            </Button>
            <hr className="w-1/2 h-px bg-gray-300 border-0" />
            <div className="flex flex-row text-sm gap-1 justify-center">
              <p className="font-light ">Already have an account?</p>
              <Button
                className=" text-rose hover:text-white hover:no-underline hover:bg-blue-950  h-5 py-0 px-2"
                variant="link"
                asChild
              >
                <Link to="/landing-page/login">Sign In</Link>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;