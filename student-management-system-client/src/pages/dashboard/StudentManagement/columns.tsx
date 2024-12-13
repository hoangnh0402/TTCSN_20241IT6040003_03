/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line react-refresh/only-export-components
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { DataTableColumnHeader } from '@/components/ui/data-table/data-table-column-header';
import { DeleteDialog } from '@/components/ui/delete-dialog';
import { DialogTrigger } from '@/components/ui/dialog';
import { useStudentStore } from '@/store/useStudentStore';
import { User } from '@/types/user.type';
import { Dialog } from '@radix-ui/react-dialog';
import { ColumnDef } from '@tanstack/react-table';
import StudentModal, { FormSchema } from './student-modal';
import { format } from 'date-fns';

const EditAction: React.FC<{ student: User }> = ({ student }) => {
  const { updateStudent } = useStudentStore();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button onSelect={() => {}}>Sửa</Button>
      </DialogTrigger>
      <StudentModal
        modalProps={{
          mode: 'edit',
          onSubmit: async (data: z.infer<typeof FormSchema>) => {
            await updateStudent(student.id, data);
          },
        }}
        student={student}
      />
    </Dialog>
  );
};

const DeleteAction: React.FC<{ student: User }> = ({ student }) => {
  const { deleteStudent } = useStudentStore();
  return <DeleteDialog title="Xóa" onConfirm={() => deleteStudent(student.id)} />;
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'No',
    header: ({ column }) => <DataTableColumnHeader column={column} title="STT" />,
    cell: ({ row }) => <div>{row.index + 1}</div>,
    size: 30,
    enableSorting: false,
    enableGlobalFilter: false,
  },
  {
    accessorKey: 'username',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Mã sinh viên" />,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'fullName',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Họ tên" />,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'gender',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Giới tính" />,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  // {
  //   accessorKey: 'birthday',
  //   header: ({ column }) => <DataTableColumnHeader column={column} title="Ngày sinh" />,
  //   filterFn: (row, id, value) => {
  //     return value.includes(row.getValue(id));
  //   },
  //   cell: ({ row }) => {
  //     const birthday = row.original.birthday || '';
  //     return <div>{format(new Date(birthday), 'dd/MM/yyyy')}</div>;
  //   },
  // },
  {
    accessorKey: 'classId',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Lớp" />,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'phoneNumber',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Số điện thoại" />,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'edit-action',
    header: ({ column }) => <DataTableColumnHeader column={column} title="" />,
    cell: ({ row }) => <EditAction student={row.original} />,
    enableSorting: false,
    enableHiding: false,
    size: 50,
  },
  {
    accessorKey: 'delete-action',
    header: ({ column }) => <DataTableColumnHeader column={column} title="" />,
    cell: ({ row }) => <DeleteAction student={row.original} />,
    enableSorting: false,
    enableHiding: false,
    size: 50,
  },
];
