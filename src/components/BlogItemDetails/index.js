// Write your JS code here
import {Component} from 'react'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogItem: {}}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)
    const formattedData = {
      id: data.id,
      author: data.author,
      content: data.content,
      avatarUrl: data.avatar_url,
      imageUrl: data.image_url,
      topic: data.topic,
      title: data.title,
    }
    this.setState({blogItem: formattedData})
  }

  render() {
    const {blogItem} = this.state
    const {imageUrl, avatarUrl, title, author, content} = blogItem

    return (
      <div className="content-container">
        <h1 className="title">{title}</h1>
        <div className="avatar-author-container">
          <img src={avatarUrl} className="avatar-url" alt="avatar" />
          <p className="author">{author}</p>
        </div>
        <img src={imageUrl} className="image-url" alt={title} />
        <p className="content">{content}</p>
      </div>
    )
  }
}

export default BlogItemDetails
