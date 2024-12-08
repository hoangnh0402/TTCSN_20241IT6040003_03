import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Document } from '@/types/document.type';

const FormSchema = z.object({
  name: z.string({ required_error: 'Tên tài liệu không được để trống' }),
  description: z.string().optional(),
  file: z.instanceof(FileList).refine((files) => files.length > 0, {
    message: 'Bạn cần chọn file',
  }),
});

interface DocumentModalProps {
  modalProps?: {
    mode: 'create';
    onSubmit: (data: z.infer<typeof FormSchema>) => void;
  };
  document?: Document;
}

const DocumentModal = ({ modalProps, document }: DocumentModalProps) => {
  const { mode, onSubmit } = modalProps || {
    mode: 'create',
    onSubmit: () => {},
  };
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: 'onTouched',
    defaultValues: mode === 'create' ? undefined : document,
  });

  const handleFormSubmit = (data: z.infer<typeof FormSchema>) => {
    onSubmit(data);
    form.reset();
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Thêm Tài Liệu</DialogTitle>
        <DialogDescription>Nhập thông tin và chọn file để tải lên tài liệu mới</DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleFormSubmit)}>
          <div className="grid gap-4 py-4">
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
            {/* <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>File tải lên</FormLabel>
                  <FormControl>
                    <Input type="file" onChange={(e) => field.onChange(e.target.files)} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
          </div>
          <DialogFooter>
            <Button type="submit" className="rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600">
              Thêm
            </Button>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
};
export default DocumentModal;
