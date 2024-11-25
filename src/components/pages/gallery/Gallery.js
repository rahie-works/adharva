import React from "react";
import { createClient } from "contentful";

// styled
import * as S from "./GalleryStyledComponents";

import "./Gallery.css"

const TabBarItems = [
  "Pictures",
  "Videos"
]

export default function Gallery() {

  const [videoColection, setVideoCollection] = React.useState([])
  const [imageColection, setImageCollection] = React.useState([])

  const videoRef = React.useRef(null)

  const [selectedTab, setSelectedTab] = React.useState("Pictures")

  const client = createClient({
    space: "5s10ucm8anhl",
    accessToken: "AzH3pFFc0MofFVf8rtX5jHk5LCjiiwk7EtosViYi1WE",
  });

  React.useEffect(() => {
    const fecthData = async () => {
      try {
        const galleryMedia = await client.getEntry("7lHsxcSsI3ydk40uXHshP9");
        if(galleryMedia.fields.videos) {
          setVideoCollection(galleryMedia.fields.videos.map(video => video.fields.file.url))
        }
        if(galleryMedia.fields.pictures) {
          setImageCollection(galleryMedia.fields.pictures.map(image => image.fields.file.url))
        }
      } catch (error) {
        console.log("==Data not received", error);
      }
    };
    fecthData();
  }, []);

  const tabSwitch = (tabName) => {
    setSelectedTab(tabName.target.innerHTML)
  }

  const renderEmptyGalleryPage = () => {
    return <S.UpcomingComponent>Gallery Coming Soon...</S.UpcomingComponent>;
  }

  const renderVideos = () => {
    return (
      <S.VideoComponent ref={videoRef} controls type="video/mp4">
          <source src={videoColection[0]} type="video/mp4" />
          Your browser does not support the video tag.
      </S.VideoComponent>
    )
  }

  const renderPictures = () => {
    return (
    <S.ImageContainer>
      {imageColection.map((image, index) => {
        return (
          <S.ImageComponent key={index} src={image}/>
        )
      }
      )}
    </S.ImageContainer>
    )
  }

  const renderContentSection = () => {
    return selectedTab === TabBarItems[0] ? renderPictures() : renderVideos()
  }

  const renderTabBar = () => {
    return (
    <S.GalleryContents>
      <S.GalleryTabBar>
        {TabBarItems.map((eachTab, index) => (
          <S.TabBarItem 
            key={index}
            onClick={tabSwitch} 
            className={selectedTab === eachTab ? "selectedTab" : "unselectedTab"}
            title={eachTab}>
              {eachTab}
          </S.TabBarItem>
        ))}
      </S.GalleryTabBar>
      {renderContentSection()}
    </S.GalleryContents>
    )
  }

  return (
    <>
    {(!videoColection && !imageColection) && renderEmptyGalleryPage()}
    {(videoColection || imageColection) && renderTabBar()}
    </>
  )
}
