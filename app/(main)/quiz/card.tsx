import { cn } from "@/lib/utils"; // Importing utility function for conditional class names
import { Check } from "lucide-react"; // Importing Check icon from lucide-react library
import Image from "next/image"; // Importing Image component from next/image

// Defining the Props type for the Card component
type Props = {
    title: string;
    id: number;
    imageSrc: string;
    onClick: (id: number) => void;
    disabled?: boolean;
    active?: boolean;
};

// Card component definition
const Card = ({
    title,
    id,
    imageSrc,
    disabled,
    onClick,
    active,
}: Props) => {
    return (
        <div
            onClick={() => onClick(id)} // Handling click event
            className={cn(
                "h-full border-2 rounded-xl border-b-4 hover:bg-black/5 cursor-pointer active:border-b-2 flex flex-col items-center justify-between p-3 pb-6 min-h-[217px] min-w-[200px]", // Base styles
                disabled && "pointer-events-none opacity-50" // Conditional styles if disabled
            )}
        >
            <div className="min-[24px] w-full flex items-center justify-end">
                {active && (
                    <div className="rounded-md bg-green-600 flex items-center justify-center p-1.5">
                        <Check className="text-white stroke-[4] h-4 w-4" /> {/* Displaying Check icon if active */}
                    </div>
                )}
            </div>
            <Image
                src={imageSrc} // Image source
                alt={title} // Alt text for the image
                height={70} // Image height
                width={93.33} // Image width
                className="rounded-lg drop-shadow-md border object-cover" // Image styles
            />
            <p className="text-neutral-700 text-center font-bold mt-3">
                {title} {/* Displaying the title */}
            </p>
        </div>
    )
}

export default Card; // Exporting the Card component