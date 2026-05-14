import { ArticleType } from '@/types';
import { NeoCard } from '../atoms';
interface ArticleProps {
  articles: ArticleType[];
}

const Article: React.FC<ArticleProps> = ({ articles }) => {
  return (
    <div className="w-full  grid lg:grid-cols-2 grid-cols-1 gap-8">
      {articles.map((article, idx) => (
        <NeoCard
          key={idx}
          shadow="lg"
          className={`${article.bg} p-8 md:p-10 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer group w-full`}
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="bg-neo-black text-neo-white px-3 py-1 text-xs font-black uppercase tracking-widest">
                {article.category}
              </span>
              <span className="text-xs font-black text-neo-black uppercase">
                {article.readTime}
              </span>
            </div>

            <h3 className="text-4xl md:text-5xl font-black text-neo-black uppercase leading-none group-hover:underline decoration-4">
              {article.title}
            </h3>

            <p className="text-lg md:text-xl font-bold text-neo-black leading-tight max-w-2xl">
              {article.excerpt}
            </p>

            <div className="flex justify-between items-end mt-4 pt-6 border-t-4 border-neo-black/20">
              <p className="text-sm font-black text-neo-black uppercase italic">{article.date}</p>
              <div className="text-4xl group-hover:translate-x-2 transition-transform">→</div>
            </div>
          </div>
        </NeoCard>
      ))}
    </div>
  );
};

export default Article;
