import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const PagesTemplate = (): JSX.Element => {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="fechar" />
      </LinkWrapper>

      <S.Heading>My trips</S.Heading>

      <S.Body>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorum
          iste doloribus minus, ullam natus nostrum ab voluptatum sint dolore
          sit necessitatibus officia. Molestiae, tenetur perspiciatis fugit quas
          dolorum officiis?
        </p>
      </S.Body>
    </S.Content>
  )
}

export default PagesTemplate
