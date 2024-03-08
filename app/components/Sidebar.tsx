import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className="sidebar position-relative bg-grey-light h-100 d-flex flex-column justify-content-between">
      <div className="sidebar-links fw-300">
        <Link
          href="/"
          className="d-flex align items-center justify-content-between pb-3 mb-3 pb-xl-4 mb-xl-4"
        >
          Account
          <Image
            src="/img/svg/icon-user.svg"
            alt="Account"
            width={15}
            height={21}
          />
        </Link>
        <Link
          href="/"
          className="d-flex align items-center justify-content-between pb-3 mb-3 pb-xl-4 mb-xl-4"
        >
          Orders
          <Image
            src="/img/svg/icon-doc.svg"
            alt="Orders"
            width={13.5}
            height={21}
          />
        </Link>
        <Link
          href="/"
          className="d-flex align items-center justify-content-between pb-3 mb-3 pb-xl-4 mb-xl-4"
        >
          Settings
          <Image
            src="/img/svg/icon-cog.svg"
            alt="Settings"
            width={14.61}
            height={21}
          />
        </Link>
        <Link
          href="/"
          className="d-flex align items-center justify-content-between pb-3 mb-3 pb-xl-4 mb-xl-4"
        >
          Downloads
          <Image
            src="/img/svg/icon-download.svg"
            alt="Download"
            width={14}
            height={21}
          />
        </Link>
        <Link
          href="/"
          className="d-flex align items-center justify-content-between pb-3 mb-3 pb-xl-4 mb-xl-4"
        >
          Latest News
          <Image
            src="/img/svg/icon-news.svg"
            alt="News"
            width={14}
            height={21}
          />
        </Link>
        <Link
          href="/"
          className="d-flex align items-center justify-content-between pb-3 mb-3 pb-xl-4 mb-xl-4"
        >
          Contact
          <Image
            src="/img/svg/icon-envelope.svg"
            alt="Contact"
            width={17}
            height={21}
          />
        </Link>
      </div>
      <a
        href="#"
        className="btn btn-border w-100 d-flex align-items-center justify-content-between px-3 text-start"
      >
        Visit Client Website
        <Image
          className="ms-2"
          src="/img/svg/icon-globe.svg"
          alt="Visit Website"
          width={15}
          height={15}
        />
      </a>
    </div>
  )
}

export default Sidebar