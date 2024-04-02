import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import VideoCard from "./components/VideoCard";
import videosData from "./videos.json";

const styles = {
  root: {
    flexGrow: 1,
    padding: "16px",
    textAlign: "center",
  },
  categoryList: {
    marginTop: "20px",
    marginBottom: "16px",
  },
  categoryButton: {
    background: "black",
    color: "white",
    marginRight: "8px",
  },
  activeCategoryButton: {
    background: "#00bfff",
    color: "white",
    marginRight: "8px",
  },
};

const App = () => {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  // due to the CORS error iam using the local json file
  useEffect(() => {
    setVideos(videosData);
    setFilteredVideos(videosData);
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('https://api.example.com/videos');
  //       setVideos(response.data);
  //       setFilteredVideos(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    const filteredResults = videos.filter((video) =>
      video.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredVideos(filteredResults);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredVideos(videos);
    } else {
      setFilteredVideos(videos.filter((video) => video.category === category));
    }
  };

  return (
    <div style={styles.root}>
      <TextField
        style={{ backgroundColor: "white", borderRadius: "7px" }}
        variant="outlined"
        label="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
        margin="normal"
        size="small"
        back
      />
      <div style={styles.categoryList}>
        <Button
          style={
            activeCategory === "All"
              ? styles.activeCategoryButton
              : styles.categoryButton
          } // Apply active style if category is active
          onClick={() => handleCategoryClick("All")}
        >
          All
        </Button>
        {Array.from(new Set(videos.map((video) => video.category))).map(
          (category, index) => (
            <Button
              key={index}
              style={
                activeCategory === category
                  ? styles.activeCategoryButton
                  : styles.categoryButton
              } // Apply active style if category is active
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </Button>
          )
        )}
      </div>
      <Grid container spacing={2}>
        {filteredVideos.map((video, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <VideoCard video={video} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default App;
