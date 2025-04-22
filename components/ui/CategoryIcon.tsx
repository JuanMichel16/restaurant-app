'use client'

import Image from "next/image";
import { Category } from "@prisma/client";
import Link from "next/link";
import { useParams } from "next/navigation";

interface CategoryProps {
  category: Category
}

const CategoryIcon = ({category} : CategoryProps) => {
  const params = useParams<{slug: string}>();

  return ( 
    <Link
      className={`flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b ${category.slug === params.slug && `bg-amber-400`}`}
      href={`/order/${category.slug}`}
    >
      <div className="w-16 h-16 relative">
        <Image
          fill
          src={`/icon_${category.slug}.svg`}
          alt={`${category.name} logo`} 
        />
      </div>

      <p className="text-xl font-bold">{category.name}</p>
    </Link>
   );
}
 
export default CategoryIcon;
