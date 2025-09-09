import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Maximize2 } from 'lucide-react';



export default function ProjectViewDialog () {
  return (
    <Dialog>
      <DialogTrigger>
        <Maximize2  className='cursor-pointer'/>
      </DialogTrigger>
      <DialogContent className='size-max !max-w-full'>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <div className='h-[720px] w-[1280px] overflow-hidden border border-gray-500 rounded-lg m-1'>
            <iframe src='https://alfagift-grocery-clone.vercel.app/' className='w-full h-full'></iframe>
          </div>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account and remove your data from our
            servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
