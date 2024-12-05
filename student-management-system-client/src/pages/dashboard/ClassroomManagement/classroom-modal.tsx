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
import { Classroom } from '@/types/classroom.type';
import { Subject } from '@/types/subject.type';
import { User } from '@/types/user.type';

interface ClassroomModalProps {
  modalProps?: {
    mode: 'read' | 'create' | 'edit';
    onSubmit: (data: z.infer<typeof FormSchema>) => void;
  };
  classroom?: Classroom;
}

export const FormSchema = z.object({
  code: z.string({ required_error: 'Mã lớp không được để trống' }),
  subjectId: z.string({ required_error: 'Mã môn học không được để trống' }),
  numberOfStudents: z.coerce.number({ required_error: 'Số lượng lớp học không được để trống' }),
  teacherId: z.string({ required_error: 'Mã giáo viên không được để trống' }),
  schedule: z.string({ required_error: 'Lịch học không được để trống' }),
  room: z.string({ required_error: 'Phòng học không được để trống' }),
  startDate: z.string().optional(),
});

const ClassroomModal = ({ modalProps, classroom }: ClassroomModalProps) => {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [teachers, setTeachers] = useState<User[]>([]);

  const { mode, onSubmit } = modalProps || {
    mode: 'create',
    onSubmit: () => {},
  };

  const title = {
    read: 'Thông tin lớp học',
    create: 'Thêm lớp học mới',
    edit: 'Sửa thông tin lớp học',
  }[mode];

  const form = useForm<z.infer<typeof FormSchema>>({
    mode: 'onTouched',
    resolver: zodResolver(FormSchema),
    defaultValues: mode === 'create' ? undefined : classroom,
  });

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{title}</DialogTitle>
        {mode !== 'read' && (
          <DialogDescription>Thay đổi thông tin lớp học tại đây. Nhấn Lưu để cập nhật.</DialogDescription>
        )}
      </DialogHeader>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mã lớp</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DropdownSelectField
              form={form}
              name="subjectId"
              options={subjects.map((s) => ({ label: s.code, value: s.id }))}
              label="Mã môn học"
              placeholder="Chọn môn học"
            />
            <FormField
              control={form.control}
              name="numberOfStudents"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Số lượng sinh viên</FormLabel>
                  <FormControl>
                    <Input {...field} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DropdownSelectField
              form={form}
              name="teacherId"
              options={teachers.map((t) => ({ label: t.username, value: t.id }))}
              label="Mã giáo viên"
              placeholder="Chọn mã giáo viên"
            />
            <FormField
              control={form.control}
              name="schedule"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lịch học</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="room"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phòng học</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2">
                  <FormLabel>Ngày bắt đầu</FormLabel>
                  <FormControl>
                    <DatePicker value={field.value} onChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
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

export default ClassroomModal;
