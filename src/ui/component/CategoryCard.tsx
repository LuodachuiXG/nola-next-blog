import { Category } from '@/models/Category';
import { Card, CardFooter } from '@heroui/card';
import { Image } from '@heroui/image';
import { getImageRealUrl } from '@/util/UrlUtil';

export default function CategoryCard({ category }: { category: Category }) {
  // 背景板内容
  const background = category.cover ? (
    <Image
      alt={category.displayName}
      className="object-cover w-24 h-24 md:w-40 md:h-40 xl:w-52 xl:h-52"
      src={getImageRealUrl(category.cover)}
    />
  ) : (
    <div className="relative text-[3.75rem] md:text-[8rem] xl:text-[12rem] font-bold flex items-start size-full">
      <div className="blur-sm absolute hidden dark:block dark:opacity-50">
        {category.displayName}
      </div>
      <div className="text-gray-500 dark:text-foreground dark:opacity-60">
        {category.displayName}
      </div>
    </div>
  );
  return (
    <Card
      isFooterBlurred
      className="w-24 h-24 md:w-40 md:h-40 xl:w-52 xl:h-52 transition-all border-none cursor-pointer hover:-translate-y-0.5"
      radius="lg"
    >
      {/*背景板*/}
      <div className="w-24 h-24 md:w-40 md:h-40 xl:w-52 xl:h-52">
        {background}
      </div>
      <CardFooter className="py-2 before:bg-white/10 border-white/20 border-1 overflow-hidden absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-small font-semibold text-white/80 w-full text-center">
          {category.displayName}
        </p>
      </CardFooter>
    </Card>
  );
}
