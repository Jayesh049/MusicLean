"use client";

import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Library from "./Library";

interface SidebarProps {
    children: React.ReactNode;
}


const Sidebar: React.FC<SidebarProps> = ({
    children
}) =>{

    const pathname = usePathname();
    
    const routes = useMemo(() =>[
        {   
            icon: HiHome,
            label: 'Home',
            active: pathname !== '/search',
            href: '/',
        },
        {
            icon: BiSearch,
            label: 'Search',
            active: pathname === '/search',
            href: '/search'
        }
    ] , [pathname]);

    return(
        // proper way to pass server component into client component 
        <div className="flex h-screen ">
         <div
            className="
             hidden
             md:flex
             flex-col
             gap-y-2
             bg-black
             h-full
             w-[300px]
             p-2
             "
         >
            <Box>
            <div 
                className="flex 
                           flex-col
                           gap-y-4
                           px-5
                           py-4 
                           ">
                            {/* the more we have routes list the more will render  in Sidebar item */}
                {routes.map((item) =>(
                    <SidebarItem 
                        key={item.label}
                        {...item}
                    />
                ))}
            </div>
            </Box>
            <Box className="overflow-y-auto h-full">
                <Library />
            </Box>
         </div>
         <main className="h-full flex-1 overflow-y-auto py-2">
            {children}
         </main>
        </div>
    )
}

export default Sidebar;
