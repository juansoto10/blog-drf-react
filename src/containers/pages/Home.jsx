import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useState } from "react";
import { connect } from "react-redux";
import { get_blog_list, get_blog_list_page } from "redux/actions/blog";



function Home({
  get_blog_list,
  get_blog_list_page,
  blog_list
}) {

  useState(() => {
    get_blog_list()
  }, [])

  return (
    <FullWidthLayout>
      Home
    </FullWidthLayout>
  )
}
  
const mapStateToProps = state => ({
  blog_list: state.blog.blog_list
})

export default connect(mapStateToProps, {
  get_blog_list,
  get_blog_list_page,
})(Home)
  