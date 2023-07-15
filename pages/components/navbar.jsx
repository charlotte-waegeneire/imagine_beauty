import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { medias } from "../../data/media"
import classNames from "classnames"

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 bg-white flex justify-around h-20 w-full border-b border-2 px-10 items-center">
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={50}
          className="object-contain w-auto h-15"
        />
      <div className="flex gap-5 lg:gap-10">
        {medias.map((media, index) => {
          return (
            <a key={index} href={media.link}>
              <FontAwesomeIcon
                icon={media.icon}
                className={classNames(media.color, "w-8 h-8")}
              />
            </a>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar
