import { cn } from "@/utils/cn";
import {
    IconAdjustmentsBolt,
    IconCloud,
    IconCurrencyDollar,
    IconEaseInOut,
    IconHeart,
    IconHelp,
    IconRouteAltLeft,
    IconTerminal2,
} from "@tabler/icons-react";

import { FaGraduationCap } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";



export function Education() {
    const features = [
        {
            title: "B.Sc in Information Technology",

            description:
                "2018-2023",
            description2:
                "Jahangirnagar University",
            description3:
                "Dhaka, Bangladesh",
            description4:
                "Result: CGPA 3.78 out of 4",
            icon: <FaUserGraduate />,
        },
        {
            title: "M.Sc in Information Technology",
            description:
                "2023-2024",
            description2:
                "Jahangirnagar University",
            description3:
                "Dhaka, Bangladesh",
            description4:
                "Result: CGPA 3.81 out of 4",
            icon: <FaBookOpen />,
        },
        // {
        //   title: "Pricing like no other",
        //   description:
        //     "Our prices are best in the market. No cap, no lock, no credit card required.",
        //   icon: <IconCurrencyDollar />,
        // },
        // {
        //   title: "100% Uptime guarantee",
        //   description: "We just cannot be taken down by anyone.",
        //   icon: <IconCloud />,
        // },
        // {
        //   title: "Multi-tenant Architecture",
        //   description: "You can simply share passwords instead of buying new seats",
        //   icon: <IconRouteAltLeft />,
        // },
        // {
        //   title: "24/7 Customer Support",
        //   description:
        //     "We are available a 100% of the time. Atleast our AI Agents are.",
        //   icon: <IconHelp />,
        // },
        // {
        //   title: "Money back guarantee",
        //   description:
        //     "If you donot like EveryAI, we will convince you to like us.",
        //   icon: <IconAdjustmentsBolt />,
        // },
        // {
        //   title: "And everything else",
        //   description: "I just ran out of copy ideas. Accept my sincere apologies",
        //   icon: <IconHeart />,
        // },
    ];
    return (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 relative z-10 py-4 lg:py-10 max-w-7xl mx-auto border-rounded
        bg-neutral-900 border-4 rounded-2xl border-neutral-700 shadow-lg shadow-black">
            {features.map((feature, index) => (
                <Feature key={feature.title} {...feature} index={index} />
            ))}
        </div>
    );
}

const Feature = ({
    title,
    description,
    description2,
    description3,
    description4,
    icon,
    index,
}: {
    title: string;
    description: string;
    description2: string;
    description3: string;
    description4: string;
    icon: React.ReactNode;
    index: number;
}) => {
    return (
        <div
            className={cn(
                "flex flex-col lg:border-r px-2 py-2 lg:py-5 relative group/feature border-[#c084fc]",
                // (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
                // index < 4 && "lg:border-b dark:border-neutral-800"
            )}
        >
            {index < 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            {index >= 4 && (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
            )}
            <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
                {icon}
            </div>
            <div className="text-lg font-bold mb-2 relative z-10 px-10">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-[#8b5cf6] transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
                    {title}
                </span>
            </div>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
                {description}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10 pt-2">
                {description2}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
                {description3}
            </p>
            <p className="text-sm lg:text-lg text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 pl-10 pt-2">
                {description4}
            </p>
        </div>
    );
};
