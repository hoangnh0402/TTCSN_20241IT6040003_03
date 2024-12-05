import bgLogin from '../../assets/images/bg-login.jpg';
import logo from '../../assets/images/logo.png';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';


//Check lại auth validate
const formSchema = z.object({
  studentId: z.string().min(8, {
    message: 'studentId must be at least 8 characters.',
  }),
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
});


//Check lại phía be nhận studentId hay id
const Login = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentId: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // console.log(form.formState)
    
    try {
      //API call
      
      await new Promise(resolve => setTimeout(resolve, 500));
      alert(JSON.stringify(values, null, 2));
    
      // Handle successful submission
    
    } catch (error : unknown) {
      alert("Failed to login" + error);
    }
  }
  return (
    <div className="flex justify-center">
      <img className="fixed h-screen w-full object-cover" src={bgLogin} alt="" />

      <Card className="absolute mt-16 px-6">
        <CardHeader className="flex items-center">
          <img className="mb-4 h-20 w-20" src={logo} alt="" />
          <CardTitle className="text-3xl">Đại học Công nghiệp Hà Nội</CardTitle>
          <CardDescription>One HaUI</CardDescription>
        </CardHeader>

        <CardContent className=''>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="studentId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mã sinh viên</FormLabel>
                    <FormControl>
                      <Input placeholder="....." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mật khẩu</FormLabel>
                    <FormControl>
                      <Input placeholder="....." {...field} />
                    </FormControl>
                    
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? 'Đang đăng nhập...' : 'Đăng nhập'}
              </Button>
            </form>
          </Form>
        </CardContent>

        <CardFooter>
          {/* <p>Card Footer</p> */}
          <CardDescription>Copyright 2024 © HaUI</CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
