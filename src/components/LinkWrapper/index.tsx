import Link from 'next/link'

import * as S from './styles'

type LinkWrapperProps = {
  href: string
  children: React.ReactNode
}

const LinkWrapper = ({ children, href }: LinkWrapperProps): JSX.Element => (
  <S.Wrapper>
    <Link href={href}>{children}</Link>
  </S.Wrapper>
)

export default LinkWrapper
