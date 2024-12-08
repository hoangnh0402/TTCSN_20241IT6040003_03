import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useClassroomDetailStore } from '@/store/useClassroomDetailStore';

interface AddStudentClassroomModalProps {
  modalProps?: {
    onSubmit: (data: z.infer<typeof FormSchema>) => void;
  };
}

export const FormSchema = z.object({
  username: z.string({ required_error: 'Mã sinh viên không được để trống' }),
});

const AddStudentClassroomModal = ({ modalProps }: AddStudentClassroomModalProps) => {
  const { addStudent, classroom } = useClassroomDetailStore();

  const { onSubmit } = modalProps || {
    onSubmit: async (data: z.infer<typeof FormSchema>) => {
      if (!classroom) return;
      await addStudent(classroom.id, data.username);
    },
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    mode: 'onTouched',
    resolver: zodResolver(FormSchema),
  });

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Thêm sinh viên vào lớp học phần</DialogTitle>
        <DialogDescription>Tìm kiếm sinh viên theo mã sinh viên. Nhấn Thêm để cập nhật.</DialogDescription>
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
          </div>
          <DialogFooter>
            <Button type="submit" className="mt-2">
              {form.formState.isSubmitting ? 'Đang thêm...' : 'Thêm'}
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
};

export default AddStudentClassroomModal;
