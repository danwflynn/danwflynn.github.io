interface ArticleCardProps {
  title: string
  description: string
  link: string
  image?: string
}

export default function ArticleCard({
  title,
  description,
  link,
  image,
}: ArticleCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="article-card"
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="article-card-image"
        />
      )}

      <div className="article-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="article-card-link">Read article →</span>
      </div>
    </a>
  )
}
