import { Home } from "lucide-react";
import { SidebarButton } from "./sidebar_button";
import { SidebarItems } from "@/type";
import Link from "next/link";
interface SidebarDekstopProps {
  sidebarItems: SidebarItems;
}
export function SidebarDekstop(props: SidebarDekstopProps) {
  return (
    <aside className="w-[270px] max-w-xs h-screen fixed left-0 top-0 z-40 border-r">
      <div className="h-full px-3 py-4">
        <h3 className="mx-3 text-lg font-semibold text-foreground">Twitter</h3>
        <div className="mt-5">
          <div className="flex flex-col gap-1 w-full">
            {props.sidebarItems.links.map((link,index)=>(
               <Link key={index} href={link.href}>
                <SidebarButton  icon={link.icon} className="w-full">{link.label}</SidebarButton></Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
