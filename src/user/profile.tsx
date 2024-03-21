import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";

function Profile() {
  return (
    <div className="bg-[#D9D9D9] m-10 p-10 rounded-lg flex justify-between w-full">
      <div className="flex flex-col items-center">
        <Avatar className="size-44 mb-8">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="grid grid-cols-2 gap-5 justify-center pb-4">
          <button className="bg-white py-2 px-4 rounded-3xl hover:bg-[#fb6f92]">Edit Profile</button>
          <AlertDialog>
            <AlertDialogTrigger className="bg-white py-2 px-4 rounded-3xl hover:bg-[#fb6f92]">Save</AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Save Change</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure to save this change? <br /> When you confirm this action, your data will be change
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Save</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <AlertDialog>
          <AlertDialogTrigger className="bg-white py-2 px-4 rounded-3xl hover:bg-[#fb6f92]">Delete Profile</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete Profile</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure to delete your profile data? <br /> When you confirm this action, your data will be disapear from your profile
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
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
