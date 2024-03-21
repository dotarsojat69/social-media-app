import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FormEvent, useState } from "react";
import { userLogin } from "@/utils/api-list/auth/api";
import { toast } from "sonner";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const body = {
      email,
      password,
    };

    try {
      const result = await userLogin(body);

      console.log(result)
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
            <form className="flex flex-col space-y-4 justify-center items-center">
              <Input placeholder="full name" type="email" />
              <Input placeholder="email" type="email" />
              <Input placeholder="password" type="password" />
              <p className="font-bold self-start">Date of Birth</p>
              <p className="font-thin text-xs text-black/75 self-start">
                This information will not be shared with others. Make sure to
                input your real age.
              </p>
              <Input placeholder="date" type="date" />
              <p className="font-bold text-sm self-start">Gender</p>
              <Input placeholder="Gender" type="gender" />
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
                  <Link to="/landing-page/login">Sign In</Link>
                </Button>
              </div>
            </form>
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
                    <Link to="/landing-page/register">Sign Up</Link>
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Index;