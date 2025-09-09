'use client';
import ProjectCard from '@/components/ProjectCard';
import * as React from 'react';

export default function MyProjectPage() {
  return (
    <div className='my-2 flex flex-wrap justify-center items-center self-center gap-4 max-w-9/12 '>
      <ProjectCard  />
    </div>
  );
}
