import BlogList from "components/blog/BlogList";
import Header from "components/blog/Header";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { connect } from "react-redux";


function Blog({
}) {


  return (
    <FullWidthLayout>
      <Header />
      <BlogList />
    </FullWidthLayout>
  )
}
  
const mapStateToProps = state => ({
  
})

export default connect(mapStateToProps, {

})(Blog)
  