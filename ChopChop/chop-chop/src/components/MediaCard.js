import { Card, CardMedia, CardContent, Typography,  } from "@mui/material";

const MediaCard = ({thumb, title, desc}) => {
    return(
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="Card.png"
                title="Card title"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Card title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                t CardMedia (http://localhost:3000/main.379fac403222c709256a.hot-update.js:167:82)
                at Blog
                at RouterHandler (http://localhost:3000/static/js/bundle.js:247:66)
                at RenderedRoute (http://localhost:3000/static/js/bundle.js:40009:5)
                at Outlet (http://localhost:3000/static/js/bundle.js:40414:26)
                </Typography>
            </CardContent>
        </Card>
    );
}

export default MediaCard;