/* eslint-disable @typescript-eslint/no-explicit-any */
import { ColumnDef } from '@tanstack/react-table';
import { DataTableToolbar } from '@/components/ui/data-table/data-table-toolbar';
import { DataTable } from '@/components/ui/data-table/data-table';

interface TablePageProps<T> {
  title: string;
  data: T[];
  columns: ColumnDef<T>[];
  loading?: boolean;
  children?: React.ReactNode;
  Modal?: React.ComponentType<any>;
  modalProps?: { mode: 'create' | 'edit' | 'read'; onSubmit: (data: any) => void };
}

export default function TablePage<T>({
  title,
  data,
  columns,
  loading,
  children,
  Modal,
  modalProps,
}: TablePageProps<T>) {
  return (
    <div className="rounded-sm bg-white p-4">
      <h2 className="mb-4 text-2xl font-bold tracking-tight">{title}</h2>
      <hr />
      <DataTable
        data={data}
        columns={columns}
        toolbar={(table) => <DataTableToolbar table={table} Modal={Modal} modalProps={modalProps} />}
        loading={loading}
        children={children}
      />
    </div>
  );
}
