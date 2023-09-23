"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaPlay } from "react-icons/fa";

interface ListItemProps {
    image: string;
    name: string;
    href: string;
}

const ListItem:React.FC<ListItemProps> = ({
    image,
    name,
    href
}) => {

    const router = useRouter();

    const onClick = () =>{
        // add authentication before push
        router.push(href);
    }

    return (
        // this is parent element relative and group
        // the whole button can contain image as well as description
        <button
            className="
                relative
                group
                flex
                items-center
                rounded-md
                overflow-hidden
                gap-x-4
                bg-neutral-100/10
                hover:bg-neutral-100/20
                transition
                pr-4
            "
        >
            {/* this div is for adding image to left side by using object cover  */}
            <div
                className="
                    relative
                    min-h-[64px]
                    min-w-[64px]
                "
            >
                <Image
                    className="object-cover"
                    fill
                    src={image}
                    alt="Image"
                />
            </div>
            <p className="font-medium truncate py-5">
                {name}
            </p>
            {/* if we wan to add button of play we can do this which we have did in below div round figure and then play with the help of faplay button */}
            <div
                className="
                    absolute
                    transition
                    opacity-0
                    rounded-full
                    flex
                    items-center
                    justify-center
                    bg-green-500
                    p-4
                    drop-shadow-md
                    right-5
                    group-hover:opacity-100
                    hover:scale-110
                    "
                    // group with hover child element relative -> parent and absolute to child
            >
                <FaPlay className="text-black" />
            </div>

        </button>
    );
}

export default ListItem;