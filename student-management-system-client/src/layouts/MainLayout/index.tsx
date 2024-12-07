import Logo from '@/assets/images/logo.png';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from '@/components/ui/sidebar';
import { FaUser } from 'react-icons/fa';
import { FaUserGroup } from 'react-icons/fa6';
import { IoMdHome, IoMdKey  } from 'react-icons/io';
import { MdClass } from 'react-icons/md';
import { SiGoogleclassroom } from 'react-icons/si';
import { RiTableView } from "react-icons/ri";
import { Link, Outlet } from 'react-router-dom';

const items = [
  { title: 'Trang chủ', icon: IoMdHome, href: '/admin', tooltip: 'Trang chủ' },
  { title: 'Quản lý sinh viên', icon: FaUser, href: '/admin/students', tooltip: 'Quản lý sinh viên' },
  { title: 'Quản lý giảng viên', icon: FaUserGroup, href: '/admin/teachers', tooltip: 'Quản lý giảng viên' },
  { title: 'Quản lý môn học', icon: MdClass, href: '/admin/subjects', tooltip: 'Quản lý môn học' },
  { title: 'Quản lý lớp học', icon: SiGoogleclassroom, href: '/admin/classrooms', tooltip: 'Quản lý lớp học' },
  { title: 'Đăng kí học phần', icon: IoMdKey , href: '/register', tooltip: 'Đăng kí học phần' },
  { title: 'Xem thống kê điểm tích lũy', icon: RiTableView, href: '/summary', tooltip: 'Xem thống kê điểm tích lũy' },
];

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed top-0 z-50 w-full border-b bg-white backdrop-blur">
        <div className="flex h-16 items-center gap-4 px-4">
          <div className="flex items-center gap-4">
            <img src={Logo} alt="Logo" className="size-12" />
            <span className="text-lg leading-[60px] text-[#404040]">Cổng thông tin Sinh viên</span>
          </div>
        </div>
      </header>

      <div className="flex-1 pt-16">
        <SidebarProvider>
          <Sidebar collapsible="icon">
            <SidebarContent className="mt-16">
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {items.map((item) => (
                      <SidebarMenuItem key={item.href}>
                        <SidebarMenuButton tooltip={item.tooltip} className="py-6">
                          {item.icon && <item.icon size={40} />}
                          <Link to={item.href}>
                            <span className="text-base">{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <SidebarInset className="bg-[#eeeeee] p-5">
            <Outlet />
          </SidebarInset>
        </SidebarProvider>
      </div>
    </div>
  );
};

export default MainLayout;
