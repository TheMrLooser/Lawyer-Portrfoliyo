import {
  AboutHeading,
  AboutParagraphSec,
  AboutWrapper,
  ImageWrap,
  LeftAboutWrap,
  RightAboutWrap,
  HeadingWrapper,
  DownloadButton,
} from "../../styles/component/about";
import aboutPhoto from "../../assets/images/about_photo.jpg";
import { Heading } from "../heading";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import { jsPDF } from "jspdf";
import profilePdf from "../../assets/documents/profile_2023.pdf";

export const AboutUs = () => {

  const downloadPdf = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
    
  }

  return (
    <AboutWrapper>
      <LeftAboutWrap>
      <HeadingWrapper>
      
      <Heading value="WHO WE ARE" />
      </HeadingWrapper>

      <div>
      
      <AboutHeading>A.V.S.SUBRAMANYAM</AboutHeading>
      <AboutParagraphSec>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
        eum, unde numquam voluptatem quaerat adipisci ipsum repudiandae
        dolorum sequi, quibusdam autem, quidem corrupti voluptate deleniti!
        Exercitationem facilis perferendis eius cumque.
      </AboutParagraphSec>
      </div>
        
       <DownloadButton   onClick={() => {downloadPdf(profilePdf)} }>
       Download Resume
       <CloudDownloadIcon/>
       </DownloadButton>
      </LeftAboutWrap>
      <RightAboutWrap>
        <ImageWrap>
          <img src={aboutPhoto} />
        </ImageWrap>
      </RightAboutWrap>
    </AboutWrapper>
  );
};
