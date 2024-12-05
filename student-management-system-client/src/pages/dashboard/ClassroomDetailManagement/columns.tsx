/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line react-refresh/only-export-components

import { DataTableColumnHeader } from '@/components/ui/data-table/data-table-column-header';
import { DeleteDialog } from '@/components/ui/delete-dialog';
import { User } from '@/types/user.type';
import { ColumnDef } from '@tanstack/react-table';

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

    enableSorting: false,
  },
  {
    accessorKey: 'fullname',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Họ tên" />,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableSorting: false,
  },
  {
    accessorKey: 'class.name',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Lớp hành chính" />,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableSorting: false,
  },
  {
    accessorKey: 'absence',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Số tiết nghỉ" />,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    cell: () => <div>0</div>,
    enableSorting: false,
  },
  {
    accessorKey: 'examCondition',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Điều kiện dự thi" />,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    cell: () => <div>Đủ điều kiện</div>,
    enableSorting: false,
  },
  {
    accessorKey: 'delete-action',
    header: ({ column }) => <DataTableColumnHeader column={column} title="" />,
    cell: ({ row }) => {
      const user = row.original;
      return <DeleteDialog title="Xóa" onConfirm={() => {}} />;
    },
    enableSorting: false,
    enableHiding: false,
    size: 44,
  },
];
