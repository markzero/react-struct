import React from 'react'
import PropTypes from 'prop-types'

const BlogPost = ({ match: { params } }) => {
  return <div>Post with id {params.id}</div>
}
BlogPost.propTypes = {
  match: PropTypes.object,
}

export default BlogPost
