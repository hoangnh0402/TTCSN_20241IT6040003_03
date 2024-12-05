import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import DatePicker from '@/components/ui/date-picker';
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { DropdownSelectField } from '@/components/ui/dropdown-select-field';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Class } from '@/types/class.type';
import { Gender, User } from '@/types/user.type';

interface StudentModalProps {
  modalProps?: {
    mode: 'read' | 'create' | 'edit';
    onSubmit: (data: z.infer<typeof FormSchema>) => void;
  };
  user?: User;
}

export const FormSchema = z.object({
  classId: z.string().optional(),
  username: z.string({ required_error: 'Mã sinh viên không được để trống' }),
  fullname: z.string({ required_error: 'Họ tên không được để trống' }),
  gender: z.nativeEnum(Gender, { required_error: 'Giới tính không được để trống' }),
  dateOfBirth: z.string({ required_error: 'Ngày sinh không được để trống' }),
});

const StudentModal = ({ modalProps, user }: StudentModalProps) => {
  const [classes, setClasses] = useState<Class[]>([]);

  const { mode, onSubmit } = modalProps || {
    mode: 'create',
    onSubmit: () => {},
  };

  const title = {
    read: 'Thông tin sinh viên',
    create: 'Thêm sinh viên mới',
    edit: 'Sửa thông tin sinh viên',
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

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        {mode !== 'read' && (
          <DialogDescription>Thay đổi thông tin sinh viên tại đây. Nhấn Lưu để cập nhật.</DialogDescription>
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
                  <FormLabel>Mã sinh viên</FormLabel>
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
              name="gender"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormLabel>Giới tính</FormLabel>
                  <FormControl>
                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="!mt-0 flex">
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
                <FormItem className="flex items-center gap-2">
                  <FormLabel>Ngày sinh</FormLabel>
                  <FormControl>
                    <DatePicker value={field.value} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DropdownSelectField
              form={form}
              name="classId"
              options={classes.map((c) => ({ label: c.name, value: c.id }))}
              label="Lớp"
              placeholder="Chọn lớp"
            />
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

export default StudentModal;
