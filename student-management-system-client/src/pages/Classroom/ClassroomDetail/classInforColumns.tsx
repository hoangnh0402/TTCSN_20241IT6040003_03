import { DataTableColumnHeader } from '@/components/ui/data-table/data-table-column-header';
import { Classroom } from '@/types/classroom.type';
import { Subject } from '@/types/subject.type';
import { ColumnDef } from '@tanstack/react-table';

export const transformDataSubject = (subjects: Subject[], classroom: Classroom) => {
  const subject = subjects.find((subject) => subject.id === classroom.subjectId);
  return [
    {
      name: subject?.name || '',
      classroomCode: classroom.code || '',
      numberOfCredits: subject?.numberOfCredits || 0,
      prerequisiteSubjects: subject?.prerequisiteSubjects || '',
    },
  ];
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const classInforColumns: ColumnDef<Subject>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Môn" />,
    cell: ({ row }) => <div>{row.original.name}</div>,
    size: 100,
    enableSorting: false,
    enableGlobalFilter: false,
  },
  {
    accessorKey: 'code',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Mã lớp" />,
    cell: ({ row }) => <div>{row.original.classroomCode}</div>,
    size: 100,
    enableSorting: false,
    enableGlobalFilter: false,
  },
  {
    accessorKey: 'numberOfCredits',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Số tín chỉ" />,
    cell: ({ row }) => <div>{row.original.numberOfCredits}</div>,
    size: 120,
    enableSorting: false,
    enableGlobalFilter: false,
  },
  {
    accessorKey: 'prerequisiteSubjects',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Điều kiện tiên quyết" />,
    cell: ({ row }) => <div>{row.original.prerequisiteSubjects}</div>,
    size: 100,
    enableSorting: false,
    enableGlobalFilter: false,
  },
];
