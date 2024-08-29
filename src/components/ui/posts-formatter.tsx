import Image from "next/image";
import { LiaThumbsUpSolid } from "react-icons/lia";

interface waa {
  title: string;
  description: string;
  image_url: string;
  upvotes: number;
}

const PostsFormatter = async ({ data }: { data: waa[] }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 ">
      {data.map((item, _) => (
        <div key={_} className="rounded-t-lg ">
          {/* <p className="text-2xl font-bold line-clamp-1">{item.title}</p>
          <p className="text-sm line-clamp-2">{item.description}</p>
          <Image
            src={item.image_url}
            alt={item.title}
            width={500}
            height={750}
            className="w-full h-auto mt-2 rounded-lg"
          />
          <div className="flex flex-row items-center">
            <LiaThumbsUpSolid />
            <p className="ml-1">{item.upvotes.toString()}</p>
          </div> */}
          <div className="relative">
            <Image
              src={item.image_url}
              alt={item.title}
              width={500}
              height={300}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <section className="absolute top-0 right-0 bg-black/50 flex flex-row items-center rounded-tr-lg p-0.5 rounded-bl-lg">
              <LiaThumbsUpSolid />
              <p className="ml-1">{item.upvotes.toString()}</p>
            </section>
          </div>
          <div className="p-2 bg-gradient-to-b from-base-300 to-base-200/50">
            <p className="text-xl font-bold line-clamp-1">{item.title}</p>
            <p className="text-xs line-clamp-2">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostsFormatter;
