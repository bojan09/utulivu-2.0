import { Link } from "react-router-dom";

import { destinationsData } from "@/constants/destinations";

interface YouMightAlsoLikeProps {
  currentCategory: string;
  currentId: number;
}

export function YouMightAlsoLike({
  currentCategory,
  currentId,
}: YouMightAlsoLikeProps) {
  const similarPosts = destinationsData
    .filter(
      (post) => post.category === currentCategory && post.id !== currentId
    )
    .slice(0, 3); // Limit to 3 suggestions

  if (similarPosts.length === 0) return null;

  return (
    <div className="mt-12 animate-[fade-in_0.5s_ease-out]">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        You Might Also Like
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {similarPosts.map((post, index) => (
          <Link
            key={post.id}
            to={`/destinations/${post.id}`}
            className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 animate-[slide-up_0.5s_ease-out_forwards] animate-delay-[0.1s]"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-42 object-cover transition-opacity duration-300 hover:opacity-90"
            />
            <div className="p-4">
              <h4 className="text-lg font-medium text-gray-800">
                {post.title}
              </h4>
              <p className="text-sm text-gray-600 md:line-clamp-3 py-3">
                {post.description}
              </p>
              <span className="inline-block mt-1 rounded-full bg-primary/20 px-2 py-1 text-xs font-medium text-primary">
                {post.category}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
