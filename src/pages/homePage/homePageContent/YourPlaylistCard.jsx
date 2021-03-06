import React from "react";
import { useHistory, useRouteMatch } from "react-router";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { sourceUrl } from "../../../redux/Api/setupAPI";
import { selectPhotoSource } from "../../../tools/checkPhotoSource";

const useStyles = makeStyles((theme) => ({
  card: {
    margin: [[5, 5, 5, 5]],
    background: "#1F1D2B",
    borderRadius: "8px",
    [theme.breakpoints.up("xs")]: {
      width: '47%',
      height: 210,
    },
    [theme.breakpoints.up("sm")]: {
      width: '31.6%',
      height: 265,
    },
    [theme.breakpoints.up("md")]: {
      width: '31.6%',
      height: 248,
    },
    [theme.breakpoints.up("lg")]: {
      width: '19%',
      height: 248,
    },
  },
  media: {
    margin: [[20, 20, 0, 20]],
    borderRadius: "8px",
    [theme.breakpoints.up('xs')]: {
      height: 128
    },
    [theme.breakpoints.up("sm")]: {
      height: 180,
    },
    [theme.breakpoints.up("md")]: {
      height: 160,
    },
  },
  actionarea: {
    borderRadius: "8px",
    width: '100%',
    height: '100%'
  },
  titletext: {
    margin: "auto",
    fontWeight: "bold",
    textAlign: "center",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
}));

const YourPlaylistCard = ({ playlistImage, playlistTitle, playlistUrl }) => {
  const classes = useStyles();
  const history = useHistory();
  const { url } = useRouteMatch();
  return (
    <Card className={classes.card}>
      <CardActionArea
        className={classes.actionarea}
        onClick={() => history.push(`${url}/createdPlaylist/${playlistUrl}`)}
      >
        <CardMedia
          className={classes.media}
          image={selectPhotoSource(playlistImage, sourceUrl)}
          title={playlistTitle}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" className={classes.titletext}>
            {playlistTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default YourPlaylistCard;
