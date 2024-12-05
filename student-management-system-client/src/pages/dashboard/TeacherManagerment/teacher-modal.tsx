import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import DatePicker from '@/components/ui/date-picker';
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Gender, User } from '@/types/user.type';

interface TeacherModalProps {
  modalProps?: {
    mode: 'read' | 'create' | 'edit';
    onSubmit: (data: z.infer<typeof FormSchema>) => void;
  };
  user?: User;
}

export const FormSchema = z.object({
  username: z.string({ required_error: 'Mã giảng viên không được để trống' }),
  email: z.string({ required_error: 'Email không được để trống' }).email({ message: 'Email không hợp lệ' }),
  phoneNumber: z.string({ required_error: 'Số điện thoại không được để trống' }).refine((v) => v.length === 10, {
    message: 'Số điện thoại phải có 10 chữ số',
  }),
  fullname: z.string({ required_error: 'Họ tên không được để trống' }),
  gender: z.nativeEnum(Gender, { required_error: 'Giới tính không được để trống' }),
  dateOfBirth: z.string({ required_error: 'Ngày sinh không được để trống' }),
  avatar: z.string().optional(),
});

const TeacherModal = ({ modalProps, user }: TeacherModalProps) => {
  const [imageUrl, setImageUrl] = useState<string>(user?.avatar || 'https://placehold.co/250x150?text=404');

  const { mode, onSubmit } = modalProps || {
    mode: 'create',
    onSubmit: () => {},
  };

  const title = {
    read: 'Thông tin giảng viên',
    create: 'Tạo giảng viên mới',
    edit: 'Sửa thông tin giảng viên',
  }[mode];

  const form = useForm<z.infer<typeof FormSchema>>({
    mode: 'onTouched',
    resolver: zodResolver(FormSchema),
    defaultValues:
      mode === 'create'
        ? undefined
        : {
            ...user,
            gender: user?.gender as Gender,
          },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, onChange: (value: File) => void) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      onChange(file);
      reader.onload = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        {mode !== 'read' && (
          <DialogDescription>Thay đổi thông tin giảng viên tại đây. Nhấn Lưu để cập nhật.</DialogDescription>
        )}
      </DialogHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mã</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="fullname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Họ tên</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Số điện thoại</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Giới tính</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value={Gender.MALE} />
                        </FormControl>
                        <FormLabel className="font-normal">Nam</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value={Gender.FEMALE} />
                        </FormControl>
                        <FormLabel className="font-normal">Nữ</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dateOfBirth"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ngày sinh</FormLabel>
                  <br />
                  <FormControl>
                    <DatePicker value={field.value} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="avatar"
              render={({ field: { onChange, value, ...field } }) => (
                <FormItem>
                  <FormLabel>Ảnh dự án</FormLabel>
                  {mode !== 'read' && (
                    <FormControl>
                      <Input {...field} type="file" onChange={(e) => handleImageChange(e, onChange)} accept="image/*" />
                    </FormControl>
                  )}
                  <FormMessage />
                </FormItem>
              )}
            />{' '}
            {imageUrl && <img src={imageUrl} alt="Ảnh" className="h-[113px] w-[75px] object-cover" />}
          </div>
          {mode !== 'read' && (
            <DialogFooter>
              <Button type="submit" className="mt-2">
                {form.formState.isSubmitting ? 'Đang lưu...' : 'Lưu thay đổi'}
              </Button>
            </DialogFooter>
          )}
        </form>
      </Form>
    </DialogContent>
  );
};

export default TeacherModal;
