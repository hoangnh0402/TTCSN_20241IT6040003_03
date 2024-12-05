/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line react-refresh/only-export-components

import { Button } from '@/components/ui/button';
import { DataTableColumnHeader } from '@/components/ui/data-table/data-table-column-header';
import { DeleteDialog } from '@/components/ui/delete-dialog';
import { DialogTrigger } from '@/components/ui/dialog';
import { Dialog } from '@radix-ui/react-dialog';
import { ColumnDef } from '@tanstack/react-table';
import { Classroom } from '@/types/classroom.type';
import ClassroomModal from './classroom-modal';

export const columns: ColumnDef<Classroom>[] = [
  {
    accessorKey: 'No',
    header: ({ column }) => <DataTableColumnHeader column={column} title="STT" />,
    cell: ({ row }) => <div>{row.index + 1}</div>,
    size: 30,
    enableSorting: false,
    enableGlobalFilter: false,
  },
  {
    accessorKey: 'code',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Mã lớp" />,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableSorting: false,
  },
  {
    accessorKey: 'room',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Phòng học" />,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableSorting: false,
  },
  {
    accessorKey: 'schedule',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Lịch học" />,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableSorting: false,
  },
  {
    accessorKey: 'startDate',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Ngày bắt đầu" />,
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableSorting: false,
  },

  {
    accessorKey: 'edit-action',
    header: ({ column }) => <DataTableColumnHeader column={column} title="" />,
    cell: ({ row }) => {
      const classroom = row.original;
      return (
        <Dialog>
          <DialogTrigger asChild>
            <Button onSelect={() => {}}>Sửa</Button>
          </DialogTrigger>
          <ClassroomModal modalProps={{ mode: 'edit', onSubmit: () => {} }} classroom={classroom} />
        </Dialog>
      );
    },
    enableSorting: false,
    size: 44,
  },
  {
    accessorKey: 'delete-action',
    header: ({ column }) => <DataTableColumnHeader column={column} title="" />,
    cell: ({ row }) => {
      const classroom = row.original;
      return <DeleteDialog title="Xóa" onConfirm={() => {}} />;
    },
    enableSorting: false,
    size: 44,
  },
];
