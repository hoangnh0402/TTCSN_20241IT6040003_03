import { Button } from '@/components/ui/button';
import { DataTableColumnHeader } from '@/components/ui/data-table/data-table-column-header';
import { useEnrollmentStore } from '@/store/useEnrollmentStore';
import { Enrollment } from '@/types/enrollment.type';
import { Subject } from '@/types/subject.type';
import { User } from '@/types/user.type';
import { ColumnDef } from '@tanstack/react-table';

const ViewDetailsButton = ({ enrollment }: { enrollment: Enrollment }) => {
  const handleViewDetails = () => {
    // Hành động khi nhấn nút, ví dụ điều hướng hoặc hiển thị thông tin chi tiết
    console.log(`Viewing details for enrollment ID: ${enrollment.id}`);
  };

  return <Button onClick={handleViewDetails}>Xem chi tiết</Button>;
};

export const transformData = (subjects: Subject[], users: User[]) => {
  return enrollments.map((enrollment) => {
    const { fetchEnrollments } = useEnrollmentStore();
    const user = users.find((user) => enrollment.userID === user.id);
    console.log('usser', user);
    return {
      userID: enrollment?.userID,
      fullName: user?.fullName || '',
      firstRegularPoint: enrollment?.firstRegularPoint || 0,
      secondRegularPoint: enrollment?.secondRegularPoint || 0,
      midTermPoint: enrollment?.midTermPoint || 0,
      finalPoint: enrollment?.finalPoint || 0,
    };
  });
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const columns: ColumnDef<Enrollment>[] = [
  {
    accessorKey: 'No',
    header: ({ column }) => <DataTableColumnHeader column={column} title="STT" />,
    cell: ({ row }) => <div>{row.index + 1}</div>,
    size: 30,
    enableSorting: false,
    enableGlobalFilter: false,
  },
  {
    accessorKey: 'subjectName',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Tên môn" />,
    cell: ({ row }) => <div>{row.original.subjectName}</div>,
    size: 120,
  },
  {
    accessorKey: 'classroomCode',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Mã lớp" />,
    cell: ({ row }) => <div>{row.original.code}</div>,
    // cell: ({ row }) => {
    //   const classroomCode = row.original.classroomCode;
    //   return (
    //     <a href={`/classrooms/${row.original.id}`} style={{ color: 'blue', textDecoration: 'underline' }}>
    //       {classroomCode}
    //     </a>
    //   );
    // },
    // size: 70,
    // enableSorting: false,
  },

  {
    accessorKey: 'firstRegularPoint',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Điểm TX 1" />,
    cell: ({ row }) => <div>{row.original.firstRegularPoint}</div>,
    size: 120,
    enableSorting: false,
    enableGlobalFilter: false,
  },
  {
    accessorKey: 'secondRegularPoint',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Điểm TX 2" />,
    cell: ({ row }) => <div>{row.original.secondRegularPoint}</div>,
    size: 120,
    enableSorting: false,
    enableGlobalFilter: false,
  },

  {
    accessorKey: 'midTermPoint',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Điểm giữa kỳ" />,
    cell: ({ row }) => <div>{row.original.midTermPoint}</div>,
    size: 120,
    enableSorting: false,
    enableGlobalFilter: false,
  },
  {
    accessorKey: 'finalPoint',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Điểm cuối kỳ" />,
    cell: ({ row }) => <div>{row.original.finalPoint}</div>,
    size: 120,
    enableSorting: false,
    enableGlobalFilter: false,
  },
];
