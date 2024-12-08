import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
// Validation Schema
const FormSchema = z.object({
  name: z.string({ required_error: 'Tên tài liệu không được để trống' }),
  description: z.string().optional(),
  file: z.instanceof(FileList).refine((files) => files.length > 0, {
    message: 'Bạn cần chọn file',
  }),
});

interface AddDocumentModalProps {
  modalProps?: {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: z.infer<typeof FormSchema>) => void;
  };
}

export const AddDocumentModal = ({ modalProps }: AddDocumentModalProps) => {
  const { isOpen, onClose, onSubmit } = modalProps || {
    isOpen: false,
    onClose: () => {},
    onSubmit: () => {},
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: 'onTouched',
  });

  const handleFormSubmit = (data: z.infer<typeof FormSchema>) => {
    onSubmit(data);
    form.reset();
  };

  if (!isOpen) return null;

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Thêm Tài Liệu</DialogTitle>
        <DialogDescription>Nhập thông tin và chọn file để tải lên tài liệu mới</DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleFormSubmit)}>
          <div className="grid gap-4 py-4">
            {/* Input - Tên tài liệu */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tên tài liệu</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Input - Mô tả */}
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mô tả</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Input - Chọn file */}
            <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>File tải lên</FormLabel>
                  <FormControl>
                    <Input type="file" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Footer với nút lưu */}
          <DialogFooter>
            <Button onClick={onClose} className="rounded bg-gray-500 px-3 py-1 text-white hover:bg-gray-600">
              Hủy
            </Button>
            <Button type="submit" className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600">
              Thêm
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
};
