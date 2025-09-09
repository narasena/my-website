import * as React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu';
import { Input } from '../ui/input';

export default function Header() {
  const blogPages = [
    { name: 'RPG Games', href: '/rpg-games' },
    { name: 'High Fantasy Novels', href: '/high-fantasy-novels' },
    { name: 'Cooking Recipes', href: '/cooking-recipes' },
    { name: 'Devs and Tech', href: '/dev' },
  ];

  return (
    <nav className='sticky top-0 left-0 right-0 z-50 !max-w-full bg-black p-2 flex justify-between items-center'>
      <h1 className='text-2xl font-bold text-white'>NARΛSΞNA</h1>
      <Input placeholder='Try search something...' className='max-w-[350px]' />
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>MΞ</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Projects</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Blog</NavigationMenuTrigger>
            <NavigationMenuContent className='!w-[200px]'>
              {blogPages.map((page) => (
                <NavigationMenuLink key={page.name} href={page.href}>
                  {page.name}
                </NavigationMenuLink>
              ))}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
