import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mb-10 mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="github" href={siteMetadata.github} size={6} />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          <SocialIcon kind="x" href={siteMetadata.x} size={6} />
        </div>
        {/* <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-200">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`Copyright © ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <div>{`Have a lovely day 💚`}</div>
        </div> */}
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-200">
          <div>
            {`© ${new Date().getFullYear()}`} {siteMetadata.author}. {`Have a lovely day 💚`}
          </div>
        </div>
      </div>
    </footer>
  )
}
