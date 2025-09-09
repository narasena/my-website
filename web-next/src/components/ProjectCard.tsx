'use client';
import * as React from 'react';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

import ShowMoreContent from './ShowMoreContent';
import ProjectViewDialog from './ProjectViewDialog';
import { AspectRatio } from './ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import { Button } from './ui/button';
import { Database, FileCode, Github, MonitorCog, Palette, Server, SquarePlay } from 'lucide-react';

export default function ProjectCard() {
  const [show, setShow] = React.useState(true);
  const projectBadges = [
    { name: 'React.js', color: 'bg-blue-800', icon: <MonitorCog /> },
    { name: 'Next.js', color: 'bg-black', icon: <MonitorCog /> },
    { name: 'Node.js', color: 'bg-black', icon: <Server /> },
    { name: 'Express.js', color: 'bg-black', icon: <Server /> },
    { name: 'Javascript', color: 'bg-black', icon: <FileCode /> },
    { name: 'Typescript', color: 'bg-black', icon: <FileCode /> },
    { name: 'Tailwind', color: 'bg-black', icon: <Palette /> },
    { name: 'Prisma', color: 'bg-black', icon: <Database /> },
    { name: 'PostgreSQL', color: 'bg-black', icon: <Database /> },
  ];
  return (
    <Card className='w-[350px] relative h-max'>
      <CardHeader className='flex flex-col items-center'>
        <CardTitle className='text-center'>Alfagift Clone</CardTitle>
        <AspectRatio ratio={16 / 9} className='my-1 bg-amber-600 rounded-sm' />
        <CardDescription className={`relative ${show ? '' : 'line-clamp-2'}`}>
          E-Commerce Grocery App with real-time management capabilities such as product managament, inventories,
          reports, sales, etc.
          <ShowMoreContent onClick={() => setShow(!show)} text={show ? 'less' : 'more'} />
        </CardDescription>
        <CardAction className='absolute top-0 right-0 p-2 cursor-pointer text-gray-500 hover:text-gray-800'>
          <Tooltip>
            <TooltipTrigger>
              <ProjectViewDialog />
            </TooltipTrigger>
            <TooltipContent className='cursor-pointer'>
              <p>Quick View</p>
            </TooltipContent>
          </Tooltip>
        </CardAction>
      </CardHeader>
      <CardContent className='flex justify-left flex-wrap gap-2'>
        {projectBadges.map((badge, index) => (
          <Badge key={index} className={'flex items-center justify-center !py-1 px-1.5 '+badge.color}>
            {badge.icon}{badge.name}
          </Badge>
        ))}
      </CardContent>
      <CardFooter className='flex justify-center gap-2 w-full'>
        <Button className=''>
          <SquarePlay />
          View Demo
        </Button>
        <Button className='bg-blue-900 hover:bg-blue-800'>
          <Github />
          GitHub Repo
        </Button>
      </CardFooter>
    </Card>
  );
}
