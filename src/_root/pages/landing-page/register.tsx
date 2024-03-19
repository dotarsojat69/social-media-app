
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Form } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <Card className="w-full md:w-1/2">
        <CardHeader>
          <CardTitle>Register</CardTitle>
          <CardDescription>Register your account now!</CardDescription>
        </CardHeader>
        <CardContent>
          <Form></Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Register;
