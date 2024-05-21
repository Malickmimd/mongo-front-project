import AuthorCard from "./AuthorCard"

const books = [
    {
        title: 'Discourse Modeling',
        authors: ['Malick Doe', 'Farba Doe', 'Sakho Doe']
    },
    {
        title: 'The New AI: General & Sound & Relevant for Physics',
        authors: ['Malick Doe', 'Farba Doe']
    },
    {
        title: 'Evaluation of Multimodal Dialogue Systems',
        authors: ['Malick Doe', 'Farba Doe']
    },
    {
        title: 'Natural Language Understanding',
        authors: ['Malick Doe', 'Farba Doe']
    },
]

export default function AuthorList() {
    return (
        <div>
            {books.map((book, index) => (
                <AuthorCard key={index} book={book} />
            ))}
        </div>
    )
}