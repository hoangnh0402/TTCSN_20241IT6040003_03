/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line react-refresh/only-export-components

import { DataTableColumnHeader } from '@/components/ui/data-table/data-table-column-header';

import { Subject } from '@/types/subject.type';

import { ColumnDef } from '@tanstack/react-table';

import { DeleteDialog } from '@/components/ui/delete-dialog';
import { sub } from 'date-fns';
import { AvailableRegisterSubject } from '@/types/registerSubject.type';
import { ApiConstant } from '@/constants/api.constant';
import { api } from '@/services/api.service';
import { useUserStore } from '@/store/useUserStore';

export const registeredSubjectTableColumn: ColumnDef<AvailableRegisterSubject>[] = [
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
      const { user } = useUserStore();
      console.log(subject);
      return (
        <DeleteDialog
          title="Hủy"
          onConfirm={async () => {
            const removeStudentUrl = ApiConstant.classrooms.removeStudent
              .replace(':classroomId', subject.classroomId ?? '')
              .replace(':studentId', user?.id ?? '');

            api.delete(removeStudentUrl);
          }}
        />
      );
    },
    enableSorting: false,
    enableHiding: false,
    size: 44,
  },
];
