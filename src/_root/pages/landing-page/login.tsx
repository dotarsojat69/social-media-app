import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Form } from 'react-router-dom';

const Login = () => {
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
}

export default Login
