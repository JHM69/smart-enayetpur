import { useRouter } from 'next/router';
import { Else, If, Then } from 'react-if';
import { useMediaQuery } from 'usehooks-ts';
import { trpc } from '~/utils/trpc';

import Pagination from '~/components/features/browse/Pagination';
import ArticleCard, { CardSkeleton } from '~/components/shared/ArticleCard';

export default function FilterArticle() {
  const matchesMobile = useMediaQuery('(max-width: 768px)');
  const router = useRouter();
  const numberSkeleton = matchesMobile ? 4 : 12;

  const { data, status } = trpc.article.findArticlesByFilters.useQuery({
    limit: 12,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    page: router.query?.page ? router.query.page : '1',
    ...router.query,
  });

  return (
    <div className="mt-10 grid w-full grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
      <If condition={status === 'loading'}>
        <Then>
          {Array.from(new Array(numberSkeleton).keys()).map((e) => {
            return <CardSkeleton key={e} />;
          })}
        </Then>
        <Else>
          {data?.articles && data.articles.length > 0 ? (
            data.articles.map((article, i) => {
              return (
                <ArticleCard key={article.id} article={article} index={i} />
              );
            })
          ) : (
            <h4 className="col-span-2 w-full text-center text-2xl md:col-span-4 lg:col-span-6">
              The article you are looking for is not available yet!
            </h4>
          )}
        </Else>
      </If>
      {data?.totalPages ? <Pagination totalPages={data?.totalPages} /> : null}
    </div>
  );
}
