import FeaturedArticle from "./components/FeaturedArticle";
import SideBar from "./components/SideBar"
import article1image from "./assets/article1image.jpg";
import article1text from "./assets/article1text.txt?raw";
import article2text from "./assets/article2text.txt?raw";

function App(){
  return(
  <div>
  <FeaturedArticle articletitle="Welcome to DOSS"  articleimgalttext="A lego man in a hazmat suit standing on a wooden pole" articleimgfile={article1image} articletxtfile={article1text} imgwidth="752" imgheight="475" imgcredit="Myself on my uncle's Nikon D40"/>
  <FeaturedArticle articletitle="Doug's Opinion: Linux is best"  articleimgalttext="A lego man in a hazmat suit standing on a wooden pole" articleimgfile="https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg" articletxtfile={article2text} imgwidth="752" imgheight="475" imgcredit="https://commons.wikimedia.org/wiki/File:Tux.svg"/>
  <SideBar thingoftheday="Open Source Software"/>
  </div>
  );
}

export default App