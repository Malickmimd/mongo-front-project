import PropTypes from 'prop-types'
import '../App.css'
import Picture from '../assets/profile.png'
import styled from 'styled-components'

const StyledImg = styled.img`
    width: 45px;
    height: 45px;
`
const StyledSpan = styled.span`
    font-size: 20px;
    margin-left: 10px;
`
const StyledP = styled.p`
    font-size: 20px;
    text-align: center;
`

export default function AuthorCard({book}) {
    return (
        <div className='content'>
            
            <div className="card">
                <div>
                    <StyledP>{book.title}</StyledP>
                </div>
                {book.authors.map((author, index) => (
                    <div className='card-content' key={index}>
                    <StyledImg src={Picture} alt="picture" />
                    <StyledSpan>{author}</StyledSpan>
                </div>
                ))}
            </div>
        </div>
    )
}

AuthorCard.propTypes = {
    book: PropTypes.array.isRequired,
  }