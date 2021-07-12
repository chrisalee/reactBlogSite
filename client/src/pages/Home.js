import React from "react";
import "./Home.css";
import Card from "../components/UI/Card";
import Layout from "../components/Layout";
import RecentPosts from "../components/RecentPosts";
import '../data/blogPost.json';

// const SideImage = props => {
//     return (
//         <div style={{ height: `${props.height}px`  }}>
//             <img src={props.src} alt="" />
//         </div>
//     );
// };

// const ImageGallary = props => (
//         <div className="gallaryPost" style={props.gallaryStyle}>
//                 <section style={{ width: props.largeWidth }}>
//                     <div className="mainImageWrapper">
//                         <img src={require('../images/' + props.imagesArray[1])} alt="" />
//                     </div>
//                 </section>
//                 <section className={"sideImageWrapper"} style={{ width: props.smallWidth }}>
//                     {
//                         props.imagesArray.map(image => 
//                             <SideImage 
//                                 height={props.sideImageHeight}
//                                 src={require('../images/' + image)}
//                                 alt="" />
//                         )
//                     }
//                 </section>
//         </div>
// );

const Home = (props) => {
  return (
    <div>
      {/* <Card>
        <ImageGallary
          largeWidth="70%"
          smallWidth="30%"
          sideImageHeight={sideImageHeight}
          gallaryStyle={gallaryStyle}
          imagesArray={imgAr}
        />
      </Card> */}
      <Layout>
        <RecentPosts style={{ width: "70%" }} />
      </Layout>
    </div>
  );
};

export default Home;
