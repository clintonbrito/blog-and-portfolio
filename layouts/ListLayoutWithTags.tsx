'use client'

import { usePathname } from 'next/navigation'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import tagData from 'app/tag-data.json'
import Image from 'next/image'
import { formatDate } from 'pliny/utils/formatDate'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname.split('/')[1]
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
          >
            Previous
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            Next
          </Link>
        )}
      </nav>
    </div>
  )
}

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname()
  const tagCounts = tagData as Record<string, number>
  const tagKeys = Object.keys(tagCounts)
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a])

  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <>
      <div>
        <div className="pb-6 pt-6">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:hidden sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
        </div>
        <div className="flex sm:space-x-24">
          <div>
            <ul className="grid gap-6 lg:grid-cols-2">
              {displayPosts.map((post) => {
                const { path, date, title, summary, tags, images } = post

                return (
                  <li key={path} className="py-5">
                    <article className="dark:bg-dark-100 mx-auto overflow-hidden rounded-xl shadow-md duration-300 hover:scale-105">
                      {images && images[0] && (
                        <Image
                          alt={title}
                          src={images[0]}
                          className="aspect-video w-full object-cover"
                          width={544}
                          height={306}
                        />
                      )}
                      <div className="p-3 dark:bg-slate-700">
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">{title}</h2>
                        <div className="mt-1 flex flex-row space-x-3">
                          <span className="ml-2 text-sm font-bold text-slate-400">
                            <time dateTime={date}>{formatDate(date)}</time>
                          </span>
                          <span className="px-2 text-sm font-bold">
                            {tags?.map((tag) => <Tag key={tag} text={tag} />)}
                          </span>
                        </div>
                      </div>
                      <dl>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-200"></dd>
                      </dl>
                      <div className="space-y-3">
                        <div>
                          {/* <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link href={`/${path}`} className="text-gray-900 dark:text-gray-100">
                              {title}
                            </Link>
                          </h2> */}
                          <div className="flex flex-wrap"></div>
                        </div>
                        {/* <div className="prose max-w-none text-gray-500 dark:text-gray-200">
                          {summary}
                        </div> */}
                      </div>
                    </article>
                  </li>
                )
              })}
            </ul>
            {pagination && pagination.totalPages > 1 && (
              <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
