import fs from "fs";
import path from "path";

import matter from "gray-matter";
import Head from "next/head";
import { useRouter } from "next/router";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

import { CONTENT_PATH, POST_FILE_PATHS } from "../utils/mdx";

const components = {};

export default function Post({ source, frontMatter }) {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <div>...</div>;
  }

  return (
    <>
      <Head>
        <title>{`${frontMatter.title}`}</title>
      </Head>
      <h2>{frontMatter.title}</h2>
      <MDXRemote {...source} components={components} />
    </>
  );
}

export const getStaticProps = async ({ params, locale }) => {
  const postFilePath = path.join(CONTENT_PATH, locale, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async ({ locales }) => {
  const localePaths = locales.map((locale) => locale);

  const finalPaths = localePaths.map((locale) => {
    return POST_FILE_PATHS.map((post) => {
      return post.split(".")[0];
    }).map((post) => {
      return { params: { slug: post, locale } };
    });
  });

  const forReal = [...finalPaths].flat();

  return {
    paths: forReal,
    fallback: true,
  };
};
