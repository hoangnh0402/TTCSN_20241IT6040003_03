import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Document } from '@/types/document.type';
import { useParams } from 'react-router-dom';
import { useDocumentStore } from '@/store/useDocumentStore';

const FormSchema = z.object({
  name: z.string({ required_error: 'Tên tài liệu không được để trống' }),
  type: z.string({ required_error: 'Loại tài liệu không được để trống' }),
  description: z.string({ required_error: 'Mô tả không được để trống' }),
  subjectId: z.string({ required_error: 'Subject ID không được để trống' }),
  files: z.instanceof(FileList).refine((files) => files.length > 0, {
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
  const { uploadDocument } = useDocumentStore();
  const { mode, onSubmit } = modalProps || {
    mode: 'create',
    onSubmit: async (data: z.infer<typeof FormSchema>) => {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('type', data.type);
      formData.append('description', data.description);
      formData.append('subjectId', data.subjectId);
      formData.append('files', data.files[0]);
      await uploadDocument(formData);
    },
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = useParams<{ id: string }>();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    mode: 'onTouched',
    defaultValues: mode === 'create' ? undefined : document,
  });

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Thêm Tài Liệu</DialogTitle>
        <DialogDescription>Nhập thông tin và chọn file để tải lên tài liệu mới</DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
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
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Loại tài liệu</FormLabel>
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
            <FormField
              control={form.control}
              name="subjectId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject ID</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="files"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>File tải lên</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      onChange={(e) => {
                        field.onChange(e.target.files);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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