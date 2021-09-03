import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Main />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const place = {
      id: '1',
      name: 'Trindade',
      slug: 'trindade',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    const placeTwo = {
      id: '2',
      name: 'Goiânia',
      slug: 'goiania',
      location: {
        latitude: 0,
        longitude: 0
      }
    }

    render(<Map places={[place, placeTwo]} />)

    expect(screen.getByTitle(/trindade/i)).toBeInTheDocument()
    expect(screen.getByTitle(/goiânia/i)).toBeInTheDocument()
  })
})
