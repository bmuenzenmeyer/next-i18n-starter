import fs from "fs"
import matter from "gray-matter"
import { MDXRemote } from "next-mdx-remote"
import { serialize } from "next-mdx-remote/serialize"
// import Link from "next/link"
import path from "path"
import { POSTS_PATH } from "../utils/mdxUtils"

import { useRouter } from "next/router"

// here.
const components = {}

export default function Post({ source, frontMatter }) {
  const { asPath, locale, isFallback } = useRouter()
  console.log(asPath, locale)

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (isFallback) {
    console.log("fallback")
    return <div>Loading...</div>
  }

  return (
    <>
      <h1>{frontMatter.title}</h1>
      <div>{asPath}</div>
      <div>{locale}</div>
      <main>
        <MDXRemote {...source} components={components} />
      </main>
    </>
  )
}

// export default function PostPage({ source, frontMatter }) {
//   console.log(14, source)
//   return (
//     <>
//       <header>
//         <nav>
//           <Link href="/">
//             <a>👈 Go back home</a>
//           </Link>
//         </nav>
//       </header>
//       <div className="post-header">
//         <h1>{frontMatter.title}</h1>
//         {frontMatter.description && (
//           <p className="description">{frontMatter.description}</p>
//         )}
//       </div>
//       <main>
//         <MDXRemote {...source} components={components} />
//       </main>
//     </>
//   )
// }

export const getStaticProps = async ({ params, locale }) => {
  console.log(37, params, locale)
  const postFilePath = path.join(POSTS_PATH, locale, `${params.slug}.mdx`)
  const source = fs.readFileSync(postFilePath)

  console.log(39, postFilePath, source)

  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}

export const getStaticPaths = async ({ locales }) => {
  console.log(61, locales)
  // console.log(61, POSTS_PATH)

  const posts = ["hello"]

  const localePaths = locales.map((locale) => locale)

  console.log({ localePaths })

  const finalPaths = localePaths.map((locale) => {
    console.log(89, locale)
    return posts.map((post) => {
      console.log(91, post, locale)
      return { params: { slug: post, locale } }
    })
  })

  console.log(66, finalPaths)

  const forReal = [...finalPaths].flat()
  console.log(67, forReal)

  return {
    paths: forReal,
    fallback: true,
  }
}
