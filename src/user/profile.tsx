import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

function Profile() {
  return (
    <div className="bg-slate-300 m-10 flex p-6 justify-between w-[900px]">
      <div>
        <Avatar className="w-[100px] h-[100px] ms-20">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="pt-10 gap-5 ms-10">
          <Button>Edit Profile</Button>

          {/* save change */}
          <AlertDialog>
            <AlertDialogTrigger>
              <Button className="ms-5">Save change</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <div className="mt-5 ms-10">
          <AlertDialog>
            <AlertDialogTrigger>
              <Button>Delete Profile</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction> countinue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
      <div>
        <p>Full Name</p>
        <Input className="mb-5 w-[400px]"></Input>
        <p>Email</p>
        <Input className="mb-5" type="email"></Input>
        <p>Birth Date</p>
        <Input className="mb-5" type="date"></Input>
        <p>Gender</p>
        <Input className="mb-5"></Input>
        <p>Address</p>
        <Input className="mb-5"></Input>
        <p>Password</p>
        <Input className="mb-5" type="password"></Input>
      </div>
    </div>
  );
}

export default Profile;
