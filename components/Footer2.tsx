import React from "react";
import { FloatingDock } from "@/components/ui/Floating-dock";
import {
    IconBrandGithub,
    IconBrandX,
    IconExchange,
    IconHome,
    IconNewSection,
    IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";

const Footer2 = () => {
    const links = [
        {
            title: "Aceternity UI",
            icon: (
                <Image
                    src="https://assets.aceternity.com/logo-dark.png"
                    width={20}
                    height={20}
                    alt="Aceternity Logo"
                />
            ),
            href: "#",
        },
        {
            title: "Changelog",
            icon: (
                <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "Twitter",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
    ];
    return (
        <div className="flex items-center justify-between mt-16">
            <p className="text-xl font-light my-3">
                Copyright © 2024 Joe Aguado
            </p>
            <FloatingDock
                mobileClassName="translate-y-20" // only for demo, remove for production
                items={links}
            />
        </div>
    );
}

export default Footer2