import { Link } from "react-router-dom";

import Modal from "@/components/landing-page-modal";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Index = () => {
  const [showModal, setShowModal] = useState(false);

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
          <Link to="/">Create account</Link>
        </Button>
        <hr className="w-64 h-px my-2 bg-gray-300 border-0" />
        <div className="flex flex-row text-sm gap-1">
          <p className="font-light ">Already have an account?</p>
          <Button
            className=" text-blue-900 hover:text-white hover:no-underline hover:bg-rose  h-5 py-0 px-2"
            variant="link"
            onClick={() => setShowModal(true)}
          >
            Sign In
          </Button>
        </div>
      </div>
      <Modal show={showModal} onClose={() => setShowModal(false)}>
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
                  onClick={() => setShowModal(true)}
                  asChild
                >
                  <Link to="/landing-page/register">Sign Up</Link>
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </Modal>
    </div>
  );
};

export default Index;
