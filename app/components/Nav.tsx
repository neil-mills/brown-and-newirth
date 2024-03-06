import Image from 'next/image'

const Nav = () => {
  return (
    <>
      <div className="nav-strip bg-cream"></div>
      <nav className="navbar p-0">
        <div className="d-flex h-100">
          <div className="nav-btn h-100 d-flex align-items-center d-md-none">
            <div className="hamburger position-relative mx-auto">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <a
            href="/"
            className="btn nav-btn h-100 bg-pink d-flex align-items-center text-sm px-lg-4 px-xxl-5"
          >
            <span className="d-none d-lg-inline-block">Home/Search</span>
            <Image
              className="d-block d-lg-none mx-auto"
              alt="Home"
              src="/img/svg/icon-home.svg"
              width={16}
              height={16}
            />
          </a>
        </div>
        <div className="d-flex h-100 right">
          <a
            href="/"
            className="btn nav-btn h-100 d-flex align-items-center text-sm px-lg-4 px-xxl-5"
          >
            <span className="d-none d-lg-inline-block">Saved Quotes</span>
            <Image
              className="d-block d-lg-none mx-auto"
              src="/img/svg/icon-floppy.svg"
              alt="Saved Quotes"
              width={16}
              height={16}
            />
          </a>
          <a
            href="/"
            className="btn nav-btn h-100 d-flex align-items-center text-sm px-lg-4 px-xxl-5"
          >
            <span className="d-none d-lg-inline-block">Basket (2)</span>
            <Image
              className="d-block d-lg-none mx-auto"
              src="/img/svg/icon-basket.svg"
              alt="Basket"
              width={16}
              height={16}
            />
          </a>
        </div>
        <a className="navbar-logo position-absolute" href="/">
          <Image
            src="/img/svg/logo-brown-and-newirth.svg"
            alt="Brown and Newirth"
            width={179}
            height={50}
          />
        </a>
      </nav>
    </>
  )
}

export default Nav
