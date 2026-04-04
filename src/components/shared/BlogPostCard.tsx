import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog-data";

interface BlogPostCardProps {
  post: BlogPost;
  index: number;
}

export function BlogPostCard({ post, index }: BlogPostCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/blog/${post.slug}`}
        className="group block rounded-2xl bg-white border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
      >
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={post.featuredImage}
            alt={post.featuredImageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        </div>

        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-trust bg-section-sage px-3 py-1 rounded-full">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar size={12} />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>

          <h3 className="text-lg font-bold text-foreground group-hover:text-trust transition-colors leading-snug">
            {post.title}
          </h3>

          <p className="mt-2 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {post.description}
          </p>

          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-trust group-hover:gap-2.5 transition-all">
            Read More <ArrowRight size={14} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
