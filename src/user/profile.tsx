import React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

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
          <Button className="ms-5">Save</Button>
        </div>
        <div className="mt-5 ms-10">
          <Button>Delete Profile</Button>
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
  )
}

export default Profile
