import { DataTableColumnHeader } from '@/components/ui/data-table/data-table-column-header';
import { Document } from '@/types/document.type';
import { ColumnDef } from '@tanstack/react-table';

export const documentColumns: ColumnDef<Document>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => <DataTableColumnHeader column={column} title="STT" />,
    size: 40,
    cell: ({ row, table }) => table.getSortedRowModel().flatRows.indexOf(row) + 1,
    enableSorting: false,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Tên tài liệu" />,
    cell: ({ row }) => (
      <a
        href={row.original.path}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline hover:text-blue-700"
      >
        {row.getValue('name')}
      </a>
    ),
    enableSorting: false,
  },

  {
    accessorKey: 'description',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Mô tả" />,
    enableSorting: false,
  },
  {
    accessorKey: 'size',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Kích thước (MB)" />,

    cell: ({ row }) => {
      const size = row.getValue('size');
      return typeof size === 'number' ? `${size.toFixed(2)} MB` : '-';
    },
    enableSorting: false,
  },
  {
    accessorKey: 'type',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Loại tài liệu" />,
    enableSorting: false,
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Ngày tạo" />,
    cell: ({ row }) => {
      const createdAt = row.getValue('createdAt') as string | undefined;
      return createdAt ? new Date(createdAt).toLocaleDateString() : '-';
    },
    enableSorting: false,
  },
  {
    accessorKey: 'download',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Tải về" />,
    cell: ({ row }) => {
      const handleDownload = () => {
        const link = document.createElement('a');
        link.href = row.original.path;
        link.download = row.original.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

      return (
        <button onClick={handleDownload} className="cursor-pointer text-blue-600 hover:text-blue-800">
          &#8681; Tải về
        </button>
      );
    },
    enableSorting: false,
  },
];
