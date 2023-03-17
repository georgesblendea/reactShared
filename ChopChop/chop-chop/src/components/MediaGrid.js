import { Grid } from "@mui/material";
import MediaCard from "./MediaCard";


const MediaGrid = () => {
    return(
        <Grid container justify="center" spacing={4}>
            <Grid item xs={3}>
                <MediaCard></MediaCard>
            </Grid>
            <Grid item xs={3}>
                <MediaCard></MediaCard>
            </Grid>
            <Grid item xs={3}>
                <MediaCard></MediaCard>
            </Grid>
        </Grid>
    );
}

export default MediaGrid;