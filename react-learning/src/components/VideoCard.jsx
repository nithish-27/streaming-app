import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const styles = {
  root: {
    marginTop: "30px",
    backgroundColor: "gray",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    maxWidth: 400,
    marginBottom: 20,
    color: "white",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "10px",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: "100%",
    height: 200,
  },
};

const VideoCard = ({ video }) => {
  return (
    <Card style={styles.root}>
      <CardMedia
        style={styles.cover}
        image={video.thumbnail}
        title={video.title}
      />
      <div style={styles.details}>
        <CardContent style={styles.content}>
          <Typography
            component="h6"
            variant="h6"
            fontWeight={600}
            marginBottom={2}
          >
            {video.title}
          </Typography>
          <Typography variant="subtitle1" color="white">
            Channel: {video.channelName}
          </Typography>
          <Typography variant="subtitle1" color="white">
            Views: {video.views}
          </Typography>
          <Typography variant="subtitle1" color="white">
            Time: {video.duration} | Date:{" "}
            {new Date(video.uploadedDateTime).toLocaleDateString()}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default VideoCard;
