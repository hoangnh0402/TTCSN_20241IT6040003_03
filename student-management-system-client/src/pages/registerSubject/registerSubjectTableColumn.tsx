/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line react-refresh/only-export-components

import { DataTableColumnHeader } from '@/components/ui/data-table/data-table-column-header';

import { Subject } from '@/types/subject.type';

import { ColumnDef } from '@tanstack/react-table';

import { RegisterDialog } from '@/components/ui/register-dialog';
import { api } from '@/services/api.service';
import { ApiConstant } from '@/constants/api.constant';
import { AvailableRegisterSubject } from '@/types/registerSubject.type';

export const registerSubjectTableColumn: ColumnDef<AvailableRegisterSubject>[] = [
  {
    accessorKey: 'No',
    header: ({ column }) => <DataTableColumnHeader column={column} title="STT" />,
    cell: ({ row }) => <div>{row.index + 1}</div>,
    size: 30,
    enableSorting: false,
    enableGlobalFilter: false,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Tên môn" />,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    size: 120,
  },
  {
    accessorKey: 'code',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Mã môn" />,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    size: 70,
    enableSorting: false,
  },
  {
    accessorKey: 'numberOfCredits',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Số tín chỉ" />,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    size: 70,
    enableSorting: false,
  },
  {
    accessorKey: 'schedule',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Lớp học" />,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableSorting: false,
  },

  {
    accessorKey: 'prerequisiteSubjects',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Môn tiên quyết" />,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    size: 70,
    enableSorting: false,
  },

  {
    accessorKey: 'register-action',
    header: ({ column }) => <DataTableColumnHeader column={column} title="" />,
    cell: ({ row }) => {
      const subject = row.original;
      return (
        <RegisterDialog
          title="Đăng kí"
          onConfirm={async () => {
            console.log(subject.classroomId);
            const response = await api.post(ApiConstant.enrollment.register, null, {
              params: { classroomId: subject.classroomId },
            });
            console.log('register subject response: ' + response);
          }}
        />
      );
    },
    enableSorting: false,
    enableHiding: false,
    size: 44,
  },
];
