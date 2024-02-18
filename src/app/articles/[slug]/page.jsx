import fs from 'fs'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { ArticleLayout } from '@/components/ArticleLayout'
import path from 'path'

export async function generateStaticParams() {
  const articles = fs.readdirSync('content/articles');
  return articles.filter((f) => f.endsWith('.mdx')).map((f) => ({slug: f.replace(/\.mdx$/i, '')}));
}

const ARTICLES_DIR = path.join(__filename.split('.next')[0], 'content/articles');

const article = {
  author: 'Adam Wathan',
  date: '2022-09-05',
  title: 'Crafting a design system for a multiplanetary future',
  description:
    'Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.',
}

export default function Article({ params }) {
  const file = fs.readFileSync(path.join(ARTICLES_DIR, `${params.slug}.mdx`));

  return (
    <ArticleLayout article={article}>
      <MDXRemote source={file} />
    </ArticleLayout>
  )
}
